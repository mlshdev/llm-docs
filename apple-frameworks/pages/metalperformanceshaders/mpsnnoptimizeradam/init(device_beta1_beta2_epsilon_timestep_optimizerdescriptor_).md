> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnoptimizeradam/init(device:beta1:beta2:epsilon:timestep:optimizerdescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnoptimizeradam/init(device:beta1:beta2:epsilon:timestep:optimizerdescriptor:))

# init(device:beta1:beta2:epsilon:timeStep:optimizerDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, beta1: Double, beta2: Double, epsilon: Float, timeStep: Int, optimizerDescriptor: MPSNNOptimizerDescriptor)
```

# initWithDevice:beta1:beta2:epsilon:timeStep:optimizerDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device beta1:(double) beta1 beta2:(double) beta2 epsilon:(float) epsilon timeStep:(NSUInteger) timeStep optimizerDescriptor:(MPSNNOptimizerDescriptor *) optimizerDescriptor;
```
