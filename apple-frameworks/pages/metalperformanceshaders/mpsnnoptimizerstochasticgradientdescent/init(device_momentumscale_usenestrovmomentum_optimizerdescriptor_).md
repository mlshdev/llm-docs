> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent/init(device:momentumscale:usenestrovmomentum:optimizerdescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizerstochasticgradientdescent/init(device:momentumscale:usenestrovmomentum:optimizerdescriptor:))

# init(device:momentumScale:useNestrovMomentum:optimizerDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, momentumScale: Float, useNestrovMomentum: Bool, optimizerDescriptor: MPSNNOptimizerDescriptor)
```

# initWithDevice:momentumScale:useNestrovMomentum:optimizerDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device momentumScale:(float) momentumScale useNestrovMomentum:(BOOL) useNestrovMomentum optimizerDescriptor:(MPSNNOptimizerDescriptor *) optimizerDescriptor;
```
