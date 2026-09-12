> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession)

# USDPreviewSession

**Framework:** SpatialPreview  
**Kind:** Class  
**Availability:** macOS 27.0+ · visionOS

A session that enables you to present the contents of a Universal Scene Description (USD) stage.

## Declaration

```swift
final class USDPreviewSession
```

## Mentioned In

- [Bridging an external USD runtime to Spatial Preview](bridging-an-external-usd-runtime-to-spatial-preview.md)

<a id="overview"></a>

## Overview

To create a `USDPreviewSession`, initialize one with a [USDStage](../usdkit/usdstage.md) from [USDKit](../usdkit.md):

```swift
let observer = ConnectedSpatialEndpointObserver()

let session = USDPreviewSession(stage: usdStage)

// Wait for a device to become available.
let endpoint = try await observer.endpoint

try await session.start(endpoint: endpoint)
```

After [start(endpoint:parameters:viewerOptions:)](usdpreviewsession/start%28endpoint_parameters_vieweroptions_%29.md) returns, the session’s `state` transitions to [SpatialPreviewSessionState.connected](spatialpreviewsessionstate/connected.md) and the device starts loading the USD content. Then use [USDKit](../usdkit.md) to make edits to the [USDStage](../usdkit/usdstage.md) to update the content. Changes on visionOS are automatically synchronized back to [USDKit](../usdkit.md) in your macOS app.

## Topics

### Protocols

- [USDPreviewSession.ChangeListDelegate](usdpreviewsession/changelistdelegate.md): A protocol to provide shared undo/redo tracking in a USDPreviewSession.

### Structures

- [USDPreviewSession.OptimizationSteps](usdpreviewsession/optimizationsteps.md): A set of optimization steps to apply to a USD stage before previewing on a device.
- [USDPreviewSession.SpatialViewerOptions](usdpreviewsession/spatialvieweroptions.md): Configuration options that control interaction capabilities for a USD document session.

### Initializers

- [init(stage:)](usdpreviewsession/init%28stage_%29.md)

### Instance Properties

- [delegate](usdpreviewsession/delegate.md): Optional synchronous undo/redo event delegate
- [events](usdpreviewsession/events.md): Async sequence of session events
- [isPlaying](usdpreviewsession/isplaying.md)
- [time](usdpreviewsession/time.md)

### Instance Methods

- [start(endpoint:parameters:viewerOptions:)](usdpreviewsession/start%28endpoint_parameters_vieweroptions_%29.md): Connects to the specified endpoint and begins streaming the USD stage for spatial preview.
- [updateUndoRedoCounts(undo:redo:)](usdpreviewsession/updateundoredocounts%28undo_redo_%29.md): Update the count of undoable and redoable actions in the USDPreviewSession which is reflected in the UI on visionOS.

### Enumerations

- [USDPreviewSession.Error](usdpreviewsession/error.md): Errors that can occur during a USD preview session
- [USDPreviewSession.Event](usdpreviewsession/event.md): Events emitted during a USD preview session
- [USDPreviewSession.OptimizationParameters](usdpreviewsession/optimizationparameters.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialPreviewSession](spatialpreviewsession.md)

## See Also

### Preview sessions

- [SpatialPreviewSession](spatialpreviewsession.md): A session that manages the lifecycle and connection state of a spatial preview on a visionOS device.
- [DocumentPreviewSession](documentpreviewsession.md): A session that streams document content to a connected visionOS device for spatial preview.
