> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageedlines/init(device:gaussiansigma:minlinelength:maxlines:detailratio:gradientthreshold:lineerrorthreshold:mergelocalitythreshold:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageedlines/init(device:gaussiansigma:minlinelength:maxlines:detailratio:gradientthreshold:lineerrorthreshold:mergelocalitythreshold:))

# init(device:gaussianSigma:minLineLength:maxLines:detailRatio:gradientThreshold:lineErrorThreshold:mergeLocalityThreshold:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, gaussianSigma: Float, minLineLength: UInt16, maxLines: Int, detailRatio: UInt16, gradientThreshold: Float, lineErrorThreshold: Float, mergeLocalityThreshold: Float)
```

# initWithDevice:gaussianSigma:minLineLength:maxLines:detailRatio:gradientThreshold:lineErrorThreshold:mergeLocalityThreshold: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device gaussianSigma:(const float) gaussianSigma minLineLength:(const unsigned short) minLineLength maxLines:(const NSUInteger) maxLines detailRatio:(const unsigned short) detailRatio gradientThreshold:(const float) gradientThreshold lineErrorThreshold:(const float) lineErrorThreshold mergeLocalityThreshold:(const float) mergeLocalityThreshold;
```
