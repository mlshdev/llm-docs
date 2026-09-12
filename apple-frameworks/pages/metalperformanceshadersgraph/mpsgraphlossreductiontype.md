> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphlossreductiontype](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphlossreductiontype)

# MPSGraphLossReductionType (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The type of the reduction the graph applies in the loss operations.

## Declaration

```swift
enum MPSGraphLossReductionType
```

## Topics

### Enumeration Cases

- [MPSGraphLossReductionType.mean](mpsgraphlossreductiontype/mean.md): Reduces the loss down to a scalar with a mean operation.
- [MPSGraphLossReductionType.none](mpsgraphlossreductiontype/none.md): Computes the loss without reduction.
- [MPSGraphLossReductionType.sum](mpsgraphlossreductiontype/sum.md): Reduces the loss down to a scalar with a sum operation.

### Initializers

- [init(rawValue:)](mpsgraphlossreductiontype/init%28rawvalue_%29.md)

### Type Properties

- [axis](mpsgraphlossreductiontype/axis.md): Computes the loss without reduction.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphLossReductionType (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The type of the reduction the graph applies in the loss operations.

## Declaration

```objectivec
enum MPSGraphLossReductionType : uint64_t;
```

## Topics

### Enumeration Cases

- [MPSGraphLossReductionTypeAxis](mpsgraphlossreductiontype/axis.md): Computes the loss without reduction.
- [MPSGraphLossReductionTypeMean](mpsgraphlossreductiontype/mean.md): Reduces the loss down to a scalar with a mean operation.
- [MPSGraphLossReductionTypeNone](mpsgraphlossreductiontype/none.md): Computes the loss without reduction.
- [MPSGraphLossReductionTypeSum](mpsgraphlossreductiontype/sum.md): Reduces the loss down to a scalar with a sum operation.
