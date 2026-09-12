> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/maximumpixelcount(forspatialscalefactor:)](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/maximumpixelcount(forspatialscalefactor:))

# maximumPixelCount(forSpatialScaleFactor:)

**Framework:** Video Toolbox  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The maximum total number of pixels in the source frame for a given spatial scale factor.

## Declaration

```swift
class func maximumPixelCount(forSpatialScaleFactor spatialScaleFactor: Int) -> Int?
```

<a id="discussion"></a>

## Discussion

The product of `frameWidth` and `frameHeight` must be less than or equal to this value. Use in conjunction with [maximumDimensionForSpatialScaleFactor:](maximumdimensionforspatialscalefactor_.md) to determine valid frame dimensions. Pass `1` for `spatialScaleFactor` when using the processor for temporal interpolation without spatial scaling. Optional return value.  Returns nil for unsupported spatialScaleFactor or if processor is unsupported.
