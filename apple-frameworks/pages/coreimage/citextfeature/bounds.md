> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/citextfeature/bounds](https://developer.apple.com/documentation/coreimage/citextfeature/bounds)

# bounds (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A rectangle that indicates the position and extent of the text feature in image coordinates.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This property identifies the rectangular region of the image containing the detected text, not necessarily the shape of the text box. A detected feature is rectangular in space, but may appear as a four-sided polygon in the image. Use the properties listed in `CITextFeature` to find the corners of the rectangle as it appears in perspective.

# bounds (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A rectangle that indicates the position and extent of the text feature in image coordinates.

## Declaration

```objectivec
@property (readonly) CGRect bounds;
```

<a id="discussion"></a>

## Discussion

This property identifies the rectangular region of the image containing the detected text, not necessarily the shape of the text box. A detected feature is rectangular in space, but may appear as a four-sided polygon in the image. Use the properties listed in `CITextFeature` to find the corners of the rectangle as it appears in perspective.
