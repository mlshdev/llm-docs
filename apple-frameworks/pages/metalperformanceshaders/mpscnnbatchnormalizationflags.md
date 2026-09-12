> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbatchnormalizationflags](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalizationflags)

# MPSCNNBatchNormalizationFlags (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that define how statistics are calculated during batch normalization.

## Declaration

```swift
struct MPSCNNBatchNormalizationFlags
```

## Topics

### Initializers

- [init(rawValue:)](mpscnnbatchnormalizationflags/init%28rawvalue_%29.md)

### Type Properties

- [CalculateStatisticsAutomatic](mpscnnbatchnormalizationflags/calculatestatisticsautomatic.md)
- [Default](mpscnnbatchnormalizationflags/default.md)
- [calculateStatisticsAlways](mpscnnbatchnormalizationflags/calculatestatisticsalways.md)
- [calculateStatisticsMask](mpscnnbatchnormalizationflags/calculatestatisticsmask.md)
- [calculateStatisticsNever](mpscnnbatchnormalizationflags/calculatestatisticsnever.md)

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

# MPSCNNBatchNormalizationFlags (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that define how statistics are calculated during batch normalization.

## Declaration

```objectivec
enum MPSCNNBatchNormalizationFlags : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSCNNBatchNormalizationFlagsCalculateStatisticsAutomatic](mpscnnbatchnormalizationflags/calculatestatisticsautomatic.md)
- [MPSCNNBatchNormalizationFlagsDefault](mpscnnbatchnormalizationflags/default.md)
- [MPSCNNBatchNormalizationFlagsCalculateStatisticsAlways](mpscnnbatchnormalizationflags/calculatestatisticsalways.md)
- [MPSCNNBatchNormalizationFlagsCalculateStatisticsMask](mpscnnbatchnormalizationflags/calculatestatisticsmask.md)
- [MPSCNNBatchNormalizationFlagsCalculateStatisticsNever](mpscnnbatchnormalizationflags/calculatestatisticsnever.md)
