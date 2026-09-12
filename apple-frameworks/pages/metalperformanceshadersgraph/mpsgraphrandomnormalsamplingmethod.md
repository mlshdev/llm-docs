> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrandomnormalsamplingmethod](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomnormalsamplingmethod)

# MPSGraphRandomNormalSamplingMethod (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The sampling method to use when generating values in the normal distribution.

## Declaration

```swift
enum MPSGraphRandomNormalSamplingMethod
```

## Topics

### Enumeration Cases

- [MPSGraphRandomNormalSamplingMethod.boxMuller](mpsgraphrandomnormalsamplingmethod/boxmuller.md): Use Box Muller transform to convert uniform values to values in the normal distribution. For bounded distributions this is a rejection sampling method.
- [MPSGraphRandomNormalSamplingMethod.invCDF](mpsgraphrandomnormalsamplingmethod/invcdf.md): Use inverse erf to convert uniform values to values in the normal distribution

### Initializers

- [init(rawValue:)](mpsgraphrandomnormalsamplingmethod/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphRandomNormalSamplingMethod (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The sampling method to use when generating values in the normal distribution.

## Declaration

```objectivec
enum MPSGraphRandomNormalSamplingMethod : uint64_t;
```

## Topics

### Enumeration Cases

- [MPSGraphRandomNormalSamplingBoxMuller](mpsgraphrandomnormalsamplingmethod/boxmuller.md): Use Box Muller transform to convert uniform values to values in the normal distribution. For bounded distributions this is a rejection sampling method.
- [MPSGraphRandomNormalSamplingInvCDF](mpsgraphrandomnormalsamplingmethod/invcdf.md): Use inverse erf to convert uniform values to values in the normal distribution
