> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mloptimizationhints-swift.struct/specializationstrategy-swift.enum](https://developer.apple.com/documentation/coreml/mloptimizationhints-swift.struct/specializationstrategy-swift.enum)

# MLOptimizationHints.SpecializationStrategy

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The optimization strategy for the model specialization.

## Declaration

```swift
enum SpecializationStrategy
```

## Topics

### Specialization strategies

- [MLOptimizationHints.SpecializationStrategy.default](specializationstrategy-swift.enum/default.md): The strategy that should work well for most applications.
- [MLOptimizationHints.SpecializationStrategy.fastPrediction](specializationstrategy-swift.enum/fastprediction.md): Prefer the prediction latency at the potential cost of specialization time, memory footprint, and the disk space usage of specialized artifacts.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the specialization strategy

- [specializationStrategy](specializationstrategy-swift.property.md): Optimization strategy for the model specialization.
