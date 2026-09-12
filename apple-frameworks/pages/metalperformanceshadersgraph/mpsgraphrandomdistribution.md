> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrandomdistribution](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomdistribution)

# MPSGraphRandomDistribution (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The distributions supported by random operations.

## Declaration

```swift
enum MPSGraphRandomDistribution
```

## Topics

### Enumeration Cases

- [MPSGraphRandomDistribution.normal](mpsgraphrandomdistribution/normal.md): The normal distribution defined by mean and standard deviation.
- [MPSGraphRandomDistribution.truncatedNormal](mpsgraphrandomdistribution/truncatednormal.md): The normal distribution defined by mean and standard deviation, truncated to the range \[min, max)
- [MPSGraphRandomDistribution.uniform](mpsgraphrandomdistribution/uniform.md): The uniform distribution, with samples drawn uniformly from \[min, max) for float types, and \[min, max\] for integer types.

### Initializers

- [init(rawValue:)](mpsgraphrandomdistribution/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphRandomDistribution (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The distributions supported by random operations.

## Declaration

```objectivec
enum MPSGraphRandomDistribution : uint64_t;
```

## Topics

### Enumeration Cases

- [MPSGraphRandomDistributionNormal](mpsgraphrandomdistribution/normal.md): The normal distribution defined by mean and standard deviation.
- [MPSGraphRandomDistributionTruncatedNormal](mpsgraphrandomdistribution/truncatednormal.md): The normal distribution defined by mean and standard deviation, truncated to the range \[min, max)
- [MPSGraphRandomDistributionUniform](mpsgraphrandomdistribution/uniform.md): The uniform distribution, with samples drawn uniformly from \[min, max) for float types, and \[min, max\] for integer types.
