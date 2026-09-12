> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnimageinferencelayer/init(coder:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnimageinferencelayer/init(coder:device:))

# init(coder:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init?(coder aDecoder: NSCoder, device: any MTLDevice)
```

## See Also

### Initializers

- [init(device:rnnDescriptor:)](init%28device_rnndescriptor_%29.md)
- [init(device:rnnDescriptors:)](init%28device_rnndescriptors_%29.md)
- [MPSRNNDescriptor](../mpsrnndescriptor.md): A description of a recursive neural network block or layer.

# initWithCoder:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder device:(id<MTLDevice>) device;
```

## See Also

### Initializers

- [initWithDevice:rnnDescriptor:](init%28device_rnndescriptor_%29.md)
- [initWithDevice:rnnDescriptors:](init%28device_rnndescriptors_%29.md)
- [MPSRNNDescriptor](../mpsrnndescriptor.md): A description of a recursive neural network block or layer.
