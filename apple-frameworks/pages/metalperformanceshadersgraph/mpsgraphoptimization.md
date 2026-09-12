> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphoptimization](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphoptimization)

# MPSGraphOptimization (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The optimization levels to trade compilation time for even more runtime performance by running more passes.

## Declaration

```swift
enum MPSGraphOptimization
```

## Topics

### Enumeration Cases

- [MPSGraphOptimization.level0](mpsgraphoptimization/level0.md): Graph performs core optimizations only.
- [MPSGraphOptimization.level1](mpsgraphoptimization/level1.md): Graph performs additional Optimizations, like using the placement pass to dispatch across different HW blocks like the NeuralEngine and CPU along with the GPU.

### Initializers

- [init(rawValue:)](mpsgraphoptimization/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphOptimization (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The optimization levels to trade compilation time for even more runtime performance by running more passes.

## Declaration

```objectivec
enum MPSGraphOptimization : uint64_t;
```

## Topics

### Enumeration Cases

- [MPSGraphOptimizationLevel0](mpsgraphoptimization/level0.md): Graph performs core optimizations only.
- [MPSGraphOptimizationLevel1](mpsgraphoptimization/level1.md): Graph performs additional Optimizations, like using the placement pass to dispatch across different HW blocks like the NeuralEngine and CPU along with the GPU.
