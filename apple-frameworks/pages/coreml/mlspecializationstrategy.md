> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlspecializationstrategy](https://developer.apple.com/documentation/coreml/mlspecializationstrategy)

# MLSpecializationStrategy

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The optimization strategy for the model specialization.

## Declaration

```objectivec
enum MLSpecializationStrategy : NSInteger;
```

## Topics

### Strategies

- [MLSpecializationStrategyDefault](mlspecializationstrategy/mlspecializationstrategydefault.md): The strategy that works well for most applications.
- [MLSpecializationStrategyFastPrediction](mlspecializationstrategy/mlspecializationstrategyfastprediction.md): Prefer the prediction latency at the potential cost of specialization time, memory footprint, and the disk space usage of specialized artifacts.

## See Also

### Enumerations

- [MLReshapeFrequencyHint](mlreshapefrequencyhint.md)
