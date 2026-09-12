> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnntrainingstyle](https://developer.apple.com/documentation/metalperformanceshaders/mpsnntrainingstyle)

# MPSNNTrainingStyle (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that control how graph nodes are trained.

## Declaration

```swift
struct MPSNNTrainingStyle
```

## Topics

### Initializers

- [init(rawValue:)](mpsnntrainingstyle/init%28rawvalue_%29.md)

### Type Properties

- [UpdateDeviceNone](mpsnntrainingstyle/updatedevicenone.md)
- [updateDeviceCPU](mpsnntrainingstyle/updatedevicecpu.md)
- [updateDeviceGPU](mpsnntrainingstyle/updatedevicegpu.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# MPSNNTrainingStyle (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that control how graph nodes are trained.

## Declaration

```objectivec
enum MPSNNTrainingStyle : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSNNTrainingStyleUpdateDeviceNone](mpsnntrainingstyle/updatedevicenone.md)
- [MPSNNTrainingStyleUpdateDeviceCPU](mpsnntrainingstyle/updatedevicecpu.md)
- [MPSNNTrainingStyleUpdateDeviceGPU](mpsnntrainingstyle/updatedevicegpu.md)
