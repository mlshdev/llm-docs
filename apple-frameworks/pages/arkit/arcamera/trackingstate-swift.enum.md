> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/trackingstate-swift.enum](https://developer.apple.com/documentation/arkit/arcamera/trackingstate-swift.enum)

# ARCamera.TrackingState

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Values for position tracking quality, with possible causes when tracking quality is limited.

## Declaration

```swift
@frozen enum TrackingState
```

## Topics

### Determining the camera tracking status

- [ARCamera.TrackingState.notAvailable](trackingstate-swift.enum/notavailable.md): Camera position tracking is not available.
- [ARCamera.TrackingState.limited(\_:)](trackingstate-swift.enum/limited%28__%29.md): Tracking is available, but the quality of results is questionable.
- [ARCamera.TrackingState.Reason](trackingstate-swift.enum/reason.md): Causes of limited position-tracking quality.
- [ARCamera.TrackingState.normal](trackingstate-swift.enum/normal.md): Camera position tracking is providing optimal results.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Tracking Status

- [trackingState](trackingstate-6i3pt.md): The general quality of position tracking available when the camera captured a frame.
