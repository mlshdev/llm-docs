> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent/init(device:momentumscale:usenesterovmomentum:optimizerdescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent/init(device:momentumscale:usenesterovmomentum:optimizerdescriptor:))

# init(device:momentumScale:useNesterovMomentum:optimizerDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, momentumScale: Float, useNesterovMomentum: Bool, optimizerDescriptor: MPSNNOptimizerDescriptor)
```

# initWithDevice:momentumScale:useNesterovMomentum:optimizerDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device momentumScale:(float) momentumScale useNesterovMomentum:(BOOL) useNesterovMomentum optimizerDescriptor:(MPSNNOptimizerDescriptor *) optimizerDescriptor;
```
