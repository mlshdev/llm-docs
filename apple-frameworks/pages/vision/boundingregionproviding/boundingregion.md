> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/boundingregionproviding/boundingregion](https://developer.apple.com/documentation/vision/boundingregionproviding/boundingregion)

# boundingRegion

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A polygon that defines the boundary of an area in the image.

## Declaration

```swift
var boundingRegion: NormalizedRegion { get }
```

<a id="Discussion"></a>

## Discussion

Similar to a bounding box, however it can have more than 4 points comprising the boundary.
