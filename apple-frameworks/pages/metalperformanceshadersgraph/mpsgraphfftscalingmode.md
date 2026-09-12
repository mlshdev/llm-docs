> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphfftscalingmode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphfftscalingmode)

# MPSGraphFFTScalingMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The scaling modes for Fourier transform operations.

## Declaration

```swift
enum MPSGraphFFTScalingMode
```

## Topics

### Enumeration Cases

- [MPSGraphFFTScalingMode.none](mpsgraphfftscalingmode/none.md): Computes the FFT result with no scaling.
- [MPSGraphFFTScalingMode.size](mpsgraphfftscalingmode/size.md): Scales the FFT result with reciprocal of the total FFT size over all transformed dimensions.
- [MPSGraphFFTScalingMode.unitary](mpsgraphfftscalingmode/unitary.md): Scales the FFT result with reciprocal square root of the total FFT size over all transformed dimensions, resulting in signal strength conserving transformation.

### Initializers

- [init(rawValue:)](mpsgraphfftscalingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphFFTScalingMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The scaling modes for Fourier transform operations.

## Declaration

```objectivec
enum MPSGraphFFTScalingMode : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSGraphFFTScalingModeNone](mpsgraphfftscalingmode/none.md): Computes the FFT result with no scaling.
- [MPSGraphFFTScalingModeSize](mpsgraphfftscalingmode/size.md): Scales the FFT result with reciprocal of the total FFT size over all transformed dimensions.
- [MPSGraphFFTScalingModeUnitary](mpsgraphfftscalingmode/unitary.md): Scales the FFT result with reciprocal square root of the total FFT size over all transformed dimensions, resulting in signal strength conserving transformation.
