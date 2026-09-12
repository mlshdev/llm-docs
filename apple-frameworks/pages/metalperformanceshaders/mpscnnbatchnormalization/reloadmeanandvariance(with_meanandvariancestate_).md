> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbatchnormalization/reloadmeanandvariance(with:meanandvariancestate:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalization/reloadmeanandvariance(with:meanandvariancestate:))

# reloadMeanAndVariance(with:meanAndVarianceState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func reloadMeanAndVariance(with commandBuffer: any MTLCommandBuffer, meanAndVarianceState: MPSCNNNormalizationMeanAndVarianceState)
```

# reloadMeanAndVarianceWithCommandBuffer:meanAndVarianceState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) reloadMeanAndVarianceWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer meanAndVarianceState:(MPSCNNNormalizationMeanAndVarianceState *) meanAndVarianceState;
```
