> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/spatialpreviewsession](https://developer.apple.com/documentation/spatialpreview/spatialpreviewsession)

# SpatialPreviewSession

**Framework:** Spatial Preview  
**Kind:** Protocol  
**Availability:** macOS 27.0+ · visionOS

A session that manages the lifecycle and connection state of a spatial preview on a visionOS device.

## Declaration

```swift
protocol SpatialPreviewSession : AnyObject, Observable
```

## Topics

### Instance Properties

- [progress](spatialpreviewsession/progress.md): Reports the progress of the session
- [state](spatialpreviewsession/state.md): Can observe this state

### Instance Methods

- [close()](spatialpreviewsession/close%28%29.md): Gracefully close the session

## Relationships

### Inherits From

- [Observable](https://developer.apple.com/documentation/observation/observable)

### Conforming Types

- [DocumentPreviewSession](documentpreviewsession.md)
- [USDPreviewSession](usdpreviewsession.md)

## See Also

### Preview sessions

- [DocumentPreviewSession](documentpreviewsession.md): A session that streams document content to a connected visionOS device for spatial preview.
- [USDPreviewSession](usdpreviewsession.md): A session that enables you to present the contents of a Universal Scene Description (USD) stage.
