> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/maximumpixelcountforspatialscalefactor:](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration/maximumpixelcountforspatialscalefactor:)

# maximumPixelCountForSpatialScaleFactor:

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The maximum total number of pixels in the source frame for a given spatial scale factor.

## Declaration

```objectivec
+ (NSInteger) maximumPixelCountForSpatialScaleFactor:(NSInteger) spatialScaleFactor;
```

<a id="discussion"></a>

## Discussion

The product of `frameWidth` and `frameHeight` must be less than or equal to this value. Use in conjunction with [maximumDimensionForSpatialScaleFactor:](maximumdimensionforspatialscalefactor_.md) to determine valid frame dimensions. Pass `1` for `spatialScaleFactor` when using the processor for temporal interpolation without spatial scaling. Returns `0` if an unsupported scale factor is provided or if processor is unsupported.
