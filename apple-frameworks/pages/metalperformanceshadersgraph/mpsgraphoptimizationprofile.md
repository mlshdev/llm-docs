> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphoptimizationprofile](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphoptimizationprofile)

# MPSGraphOptimizationProfile (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The optimization profile used as a heuristic as the graph compiler optimizes the network.

## Declaration

```swift
enum MPSGraphOptimizationProfile
```

## Topics

### Enumeration Cases

- [MPSGraphOptimizationProfile.performance](mpsgraphoptimizationprofile/performance.md): Default, graph optimized for performance.
- [MPSGraphOptimizationProfile.powerEfficiency](mpsgraphoptimizationprofile/powerefficiency.md): Graph optimized for power efficiency.

### Initializers

- [init(rawValue:)](mpsgraphoptimizationprofile/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphOptimizationProfile (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The optimization profile used as a heuristic as the graph compiler optimizes the network.

## Declaration

```objectivec
enum MPSGraphOptimizationProfile : uint64_t;
```

## Topics

### Enumeration Cases

- [MPSGraphOptimizationProfilePerformance](mpsgraphoptimizationprofile/performance.md): Default, graph optimized for performance.
- [MPSGraphOptimizationProfilePowerEfficiency](mpsgraphoptimizationprofile/powerefficiency.md): Graph optimized for power efficiency.
