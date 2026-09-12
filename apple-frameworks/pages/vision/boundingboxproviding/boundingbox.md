> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/boundingboxproviding/boundingbox](https://developer.apple.com/documentation/vision/boundingboxproviding/boundingbox)

# boundingBox

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The bounding box of the object.

## Declaration

```swift
var boundingBox: NormalizedRect { get }
```

<a id="Discussion"></a>

## Discussion

The coordinate system is normalized to the dimensions of the processed image, with the origin at the lower-left corner of the image.

## Default Implementations

### BoundingBoxProviding Implementations

- [boundingBox](boundingbox-73688.md)
