> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/supportedscalefactorsforframewidth:frameheight:](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/supportedscalefactorsforframewidth:frameheight:)

# supportedScaleFactorsForFrameWidth:frameHeight:

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns an array of supported scale factors values, or an empty list if the processor doesn’t support the dimensions.

## Declaration

```objectivec
+ (NSArray<NSNumber *> *) supportedScaleFactorsForFrameWidth:(NSInteger) frameWidth frameHeight:(NSInteger) frameHeight;
```
