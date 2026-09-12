> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer/init(device:rnndescriptors:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixinferencelayer/init(device:rnndescriptors:))

# init(device:rnnDescriptors:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, rnnDescriptors: [MPSRNNDescriptor])
```

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md)
- [init(device:rnnDescriptor:)](init%28device_rnndescriptor_%29.md)
- [MPSRNNDescriptor](../mpsrnndescriptor.md): A description of a recursive neural network block or layer.

# initWithDevice:rnnDescriptors: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device rnnDescriptors:(NSArray<const MPSRNNDescriptor *> *) rnnDescriptors;
```

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md)
- [initWithDevice:rnnDescriptor:](init%28device_rnndescriptor_%29.md)
- [MPSRNNDescriptor](../mpsrnndescriptor.md): A description of a recursive neural network block or layer.
