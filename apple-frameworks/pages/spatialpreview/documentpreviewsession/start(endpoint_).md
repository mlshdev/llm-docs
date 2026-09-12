> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/documentpreviewsession/start(endpoint:)](https://developer.apple.com/documentation/spatialpreview/documentpreviewsession/start(endpoint:))

# start(endpoint:)

**Framework:** Spatial Preview  
**Kind:** Instance Method  
**Availability:** macOS 27.0+ · visionOS

Connects to the specified endpoint and prepares the session to send document updates.

## Declaration

```swift
final nonisolated(nonsending) func start(endpoint: SpatialPreviewEndpoint) async throws
```

## Parameters

- `endpoint`: The destination endpoint representing the device to connect to.

<a id="discussion"></a>

## Discussion

Call this method once before sending document content via [updateContents(data:)](updatecontents%28data_%29.md) or [updateContents(url:)](updatecontents%28url_%29.md). The method establishes connection and transitions the session’s `state` to [SpatialPreviewSessionState.connected](../spatialpreviewsessionstate/connected.md).

> **Throws**

> [SpatialPreviewSessionError](../spatialpreviewsessionerror.md) if the connection cannot be established or the session has already been invalidated.
