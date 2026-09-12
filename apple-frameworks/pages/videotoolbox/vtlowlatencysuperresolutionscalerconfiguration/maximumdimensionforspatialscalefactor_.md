> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/maximumdimensionforspatialscalefactor:](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/maximumdimensionforspatialscalefactor:)

# maximumDimensionForSpatialScaleFactor:

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The maximum value for either dimension of the source frame, in pixels, for a given spatial scale factor.

## Declaration

```objectivec
+ (NSInteger) maximumDimensionForSpatialScaleFactor:(float) spatialScaleFactor;
```

<a id="discussion"></a>

## Discussion

Both `frameWidth` and `frameHeight` must be less than or equal to this value. Use in conjunction with [maximumPixelCountForSpatialScaleFactor:](maximumpixelcountforspatialscalefactor_.md) to determine valid frame dimensions. For example, if [maximumDimensionForSpatialScaleFactor:](maximumdimensionforspatialscalefactor_.md) is 1920 and [maximumPixelCountForSpatialScaleFactor:](maximumpixelcountforspatialscalefactor_.md) corresponds to 1920×1080, then 1920×1080, 1080×1920, and 1440×1440 are all valid, but 1920×1920 is not. Returns `0` if an unsupported scale factor is provided or if processor is unsupported.
