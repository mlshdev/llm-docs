> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mloptimizationhints-swift.struct/specializationstrategy-swift.enum/default](https://developer.apple.com/documentation/coreml/mloptimizationhints-swift.struct/specializationstrategy-swift.enum/default)

# MLOptimizationHints.SpecializationStrategy.default

**Framework:** Core ML  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The strategy that should work well for most applications.

## Declaration

```swift
case `default`
```

## See Also

### Specialization strategies

- [MLOptimizationHints.SpecializationStrategy.fastPrediction](fastprediction.md): Prefer the prediction latency at the potential cost of specialization time, memory footprint, and the disk space usage of specialized artifacts.
