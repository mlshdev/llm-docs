> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/boundingregionproviding/boundingregion

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
