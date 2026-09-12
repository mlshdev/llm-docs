> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnmatrixtraininglayer/init(device:rnndescriptor:trainableweights:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixtraininglayer/init(device:rnndescriptor:trainableweights:))

# init(device:rnnDescriptor:trainableWeights:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, rnnDescriptor: MPSRNNDescriptor, trainableWeights: NSMutableArray)
```

# initWithDevice:rnnDescriptor:trainableWeights: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device rnnDescriptor:(const MPSRNNDescriptor *) rnnDescriptor trainableWeights:(NSMutableArray<MPSMatrix *> *) trainableWeights;
```
