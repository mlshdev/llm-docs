> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/contoursobservation](https://developer.apple.com/documentation/vision/contoursobservation)

# ContoursObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An object that represents the detected contours in an image.

## Declaration

```swift
struct ContoursObservation
```

## Topics

### Creating an observation

- [init(\_:)](contoursobservation/init%28__%29.md): Creates a contours observation.

### Inspecting an observation

- [contourCount](contoursobservation/contourcount.md): The total number of detected contours.
- [normalizedPath](contoursobservation/normalizedpath.md): The detected contours as a path object in normalized coordinates.
- [topLevelContours](contoursobservation/toplevelcontours.md): An array of contours that don’t have another contour enclosing them.

### Getting the contours

- [ContoursObservation.Contour](contoursobservation/contour.md): An object that represents a detected contour in an image.
- [contourAtIndex(\_:)](contoursobservation/contouratindex%28__%29.md): Retrieves the contour object at the specified index, irrespective of hierarchy.
- [countourAtIndexPath(\_:)](contoursobservation/countouratindexpath%28__%29.md): Retrieves the contour object at the specified index, irrespective of hierarchy.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
