> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/supportedscalefactors-66l10](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/supportedscalefactors-66l10)

# supportedScaleFactors

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reports the set of supported scale factors to use when initializing a low latency super-resolution scaler configuration. Note: not all scale factors are available for all source dimensions.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSArray<NSNumber *> * supportedScaleFactors;
```
