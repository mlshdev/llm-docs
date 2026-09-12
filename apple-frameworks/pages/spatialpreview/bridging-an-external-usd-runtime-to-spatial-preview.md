> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/bridging-an-external-usd-runtime-to-spatial-preview](https://developer.apple.com/documentation/spatialpreview/bridging-an-external-usd-runtime-to-spatial-preview)

# Bridging an external USD runtime to Spatial Preview

**Framework:** Spatial Preview  
**Kind:** Article

Sync edits between an app with its own OpenUSD runtime and a Spatial Preview session using a shared layer as the exchange mechanism.

<a id="Overview"></a>

## Overview

Spatial Preview uses [USDKit](../usdkit.md) to manage a [USDStage](../usdkit/usdstage.md) on the Mac. Apps that use USDKit to access USD data automatically sync their edits with Spatial Preview sessions. When your app has its own USD runtime, the two apps don’t share memory or a stage cache. Writing a USD file to disk doesn’t notify USDKit of changes, and edits made on the connected Apple Vision Pro aren’t automatically visible to your app.

Bridge the two runtimes using a shared [USDLayer](../usdkit/usdlayer.md) as an exchange mechanism. For each direction, app to device and device to app, the pattern is the same: write overrides into a thin edit layer, export it to disk, and use [copy(from:to:in:)](../usdkit/usdlayer/copy%28from_to_in_%29.md) to propagate the changes into USDKit’s stage. [USDPreviewSession](usdpreviewsession.md) watches the [USDStage](../usdkit/usdstage.md) for mutations and syncs only the changed data to the device.

<a id="Set-up-the-layer-stack"></a>

### Set up the layer stack

Your USD layer stack on the Mac side consists of three files:

- **Scene export**: The full scene written by your external runtime and the root of the composition hierarchy that USDKit loads.
- **Wrapper stage**: A thin USDKit stage that sublayers the scene export and stays open for the duration of the session.
- **Edit layer**: A lightweight layer that holds only the overrides your app or the device produces for interchange, not the full scene geometry.

Create a [USDPreviewSession](usdpreviewsession.md) to coordinate incremental USD synchronization over that connection.

<a id="Sync-edits-from-your-app-to-the-device"></a>

### Sync edits from your app to the device

When your external runtime detects a change, write the affected [USDPrim](../usdkit/usdprim.md) overrides as over-prims into the app-side edit layer and export that layer to the chosen exchange path on disk. Then call your bridge function to pull those edits into the USDKit stage.

The bridge opens the exchange layer using [find(identifier:)](../usdkit/usdlayer/find%28identifier_%29.md) and walks its root prims. For each root prim, check whether the destination edit layer already has a [USDPrim](../usdkit/usdprim.md) specification at that path using [prim(at:)](../usdkit/usdlayer/prim%28at_%29.md). Then copy the data with [copy(from:to:in:)](../usdkit/usdlayer/copy%28from_to_in_%29.md). Once every changed prim is in the USDKit edit layer, [USDPreviewSession](usdpreviewsession.md) detects the mutation and syncs the delta to the device:

```swift
@MainActor
func syncEdits(editLayerPath: String) {
    guard let srcLayer = USDLayer.find(identifier: editLayerPath) else {
        return
    }
```

For each prim under the root in the source layer, ensure a spec exists in the destination edit layer before copying the prim data across:

```swift
    for rootPrim in srcLayer.pseudoRoot.nameChildren {
        let path = rootPrim.path

        editLayer.copy(from: srcLayer, to: path, in: path)
    }
}
```

Mark the function with [`@MainActor`](https://developer.apple.com/documentation/swift/mainactor) because all USDKit edit operations must run on the main actor. Dispatch to the main actor from any background thread before calling this function.

<a id="Sync-device-edits-back-to-your-app"></a>

### Sync device edits back to your app

When a user manipulates objects on Apple Vision Pro, Spatial Preview writes those edits to the USDKit edit layer. In your bridge, read from the updated wrapper stage on an app-specific polling interval or in response to a [USDPreviewSession](usdpreviewsession.md) event. Your app reads the updated layer file and applies its prim overrides to the external USD runtime inside the app.

When you read edits from the Spatial Preview stage and apply them to the [USDStage](../usdkit/usdstage.md) in your app, don’t treat the edits as new changes to the USD data. Otherwise, your app echoes them back to the Spatial Preview session and creates an infinite feedback loop.

Batch and pass edits from an external OpenUSD runtime to the bridge layer at a reasonable interval (for example, 30 ms) to prevent locking the [`@MainActor`](https://developer.apple.com/documentation/swift/mainactor) thread.

For apps that can’t produce a minimal edit layer, export the complete scene and call [USDStage.reload()](../usdkit/usdstage/reload%28%29.md) or [USDLayer.reload()](../usdkit/usdlayer/reload%28%29.md) on the corresponding USDKit object. USDKit diffs the old and new stage internally; [USDPreviewSession](usdpreviewsession.md) syncs only the deltas. This approach requires less bridging code but exports the full scene on every change, which can be slow for large scenes:

```swift
@MainActor
func reloadStage() {
    stage.reload()
}
```

[USDPreviewSession](usdpreviewsession.md) exposes a `state` property of type [SpatialPreviewSessionState](spatialpreviewsessionstate.md). Read it before calling any sync operation to confirm the session is ready.

- **[SpatialPreviewSessionState.waiting](spatialpreviewsessionstate/waiting.md)**: No device is connected yet; sync calls have no effect.
- **[SpatialPreviewSessionState.connected](spatialpreviewsessionstate/connected.md)**: The connection is active; push edits.
- **[SpatialPreviewSessionState.interrupted](spatialpreviewsessionstate/interrupted.md)**: The session temporarily lost connectivity; queue pending edits and replay when state returns to [SpatialPreviewSessionState.connected](spatialpreviewsessionstate/connected.md).
- **[SpatialPreviewSessionState.invalidated](spatialpreviewsessionstate/invalidated.md)**: The session ended permanently; release it and create a new [DocumentPreviewSession](documentpreviewsession.md) to reconnect.

## See Also

### Essentials

- [Working with content from your Mac app using Spatial Preview](working-with-content-from-your-mac-app-using-spatial-preview.md): Send and update documents, and work with 3D content live from your Mac app to a visionOS device.
