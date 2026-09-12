> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/optimizationstrategy/nonsmooth](https://developer.apple.com/documentation/createmlcomponents/optimizationstrategy/nonsmooth)

# OptimizationStrategy.nonSmooth

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An optimization strategy that can handle non-smooth problems.

## Declaration

```swift
case nonSmooth
```

<a id="discussion"></a>

## Discussion

Select this strategy when using L1 regularization. Using L1 regularization causes the optimization problem to be non-smooth. Other optimization strategies rely on the optimization problem being smooth and will likely fail to converge when using L1 regularization.

## See Also

### Optimization strategies

- [OptimizationStrategy.automatic](automatic.md): Chooses the best optimization strategy based on the problem size and configuration.
- [OptimizationStrategy.fast](fast.md): An optimization strategy that minimizes computation time.
- [OptimizationStrategy.lowMemory](lowmemory.md): An optimization strategy that minimizes memory use.
