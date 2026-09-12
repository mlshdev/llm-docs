> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnndescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnndescriptor)

# MPSRNNDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a recursive neural network block or layer.

## Declaration

```swift
class MPSRNNDescriptor
```

## Topics

### Instance Properties

- [inputFeatureChannels](mpsrnndescriptor/inputfeaturechannels.md)
- [layerSequenceDirection](mpsrnndescriptor/layersequencedirection.md)
- [outputFeatureChannels](mpsrnndescriptor/outputfeaturechannels.md)
- [useFloat32Weights](mpsrnndescriptor/usefloat32weights.md)
- [useLayerInputUnitTransformMode](mpsrnndescriptor/uselayerinputunittransformmode.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSGRUDescriptor](mpsgrudescriptor.md)
- [MPSLSTMDescriptor](mpslstmdescriptor.md)
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Initializers

- [init(coder:device:)](mpsrnnimageinferencelayer/init%28coder_device_%29.md)
- [init(device:rnnDescriptor:)](mpsrnnimageinferencelayer/init%28device_rnndescriptor_%29.md)
- [init(device:rnnDescriptors:)](mpsrnnimageinferencelayer/init%28device_rnndescriptors_%29.md)

# MPSRNNDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a recursive neural network block or layer.

## Declaration

```objectivec
@interface MPSRNNDescriptor : NSObject
```

## Topics

### Instance Properties

- [inputFeatureChannels](mpsrnndescriptor/inputfeaturechannels.md)
- [layerSequenceDirection](mpsrnndescriptor/layersequencedirection.md)
- [outputFeatureChannels](mpsrnndescriptor/outputfeaturechannels.md)
- [useFloat32Weights](mpsrnndescriptor/usefloat32weights.md)
- [useLayerInputUnitTransformMode](mpsrnndescriptor/uselayerinputunittransformmode.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSGRUDescriptor](mpsgrudescriptor.md)
- [MPSLSTMDescriptor](mpslstmdescriptor.md)
- [MPSRNNSingleGateDescriptor](mpsrnnsinglegatedescriptor.md)

## See Also

### Initializers

- [initWithCoder:device:](mpsrnnimageinferencelayer/init%28coder_device_%29.md)
- [initWithDevice:rnnDescriptor:](mpsrnnimageinferencelayer/init%28device_rnndescriptor_%29.md)
- [initWithDevice:rnnDescriptors:](mpsrnnimageinferencelayer/init%28device_rnndescriptors_%29.md)
