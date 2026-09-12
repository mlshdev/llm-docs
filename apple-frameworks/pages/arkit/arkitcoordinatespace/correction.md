> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitcoordinatespace/correction](https://developer.apple.com/documentation/arkit/arkitcoordinatespace/correction)

# ARKitCoordinateSpace.Correction

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+ · visionOS 26.0+

A correction type to apply on coordinate spaces returned from ARKit APIs.

## Declaration

```swift
@frozen enum Correction
```

## Topics

### Enumeration Cases

- [ARKitCoordinateSpace.Correction.none](correction/none.md): Coordinate spaces are unaltered and represent actual locations.
- [ARKitCoordinateSpace.Correction.rendered](correction/rendered.md): Coordinate spaces are corrected to render over physical objects in passthrough displays.

### Instance Properties

- [description](correction/description.md): Textual description of this correction type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
