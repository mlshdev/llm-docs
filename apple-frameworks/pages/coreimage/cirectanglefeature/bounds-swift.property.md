> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirectanglefeature/bounds-swift.property](https://developer.apple.com/documentation/coreimage/cirectanglefeature/bounds-swift.property)

# bounds (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

A rectangle indicating the position and extent of the feature in image coordinates.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This property identifies the rectangular region *of the image* containing the detected rectangle, not necessarily the shape of the rectangle. A detected feature is rectangular in space, but may appear in perspective in the image. Use the properties listed in [CIRectangleFeature](../cirectanglefeature.md) to find the corners of the rectangle as it appears in perspective.

# bounds (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

A rectangle indicating the position and extent of the feature in image coordinates.

## Declaration

```objectivec
@property (readonly) CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

This property identifies the rectangular region *of the image* containing the detected rectangle, not necessarily the shape of the rectangle. A detected feature is rectangular in space, but may appear in perspective in the image. Use the properties listed in [CIRectangleFeature](../cirectanglefeature.md) to find the corners of the rectangle as it appears in perspective.
