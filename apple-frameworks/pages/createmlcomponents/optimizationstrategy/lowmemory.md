> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/optimizationstrategy/lowmemory](https://developer.apple.com/documentation/createmlcomponents/optimizationstrategy/lowmemory)

# OptimizationStrategy.lowMemory

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An optimization strategy that minimizes memory use.

## Declaration

```swift
case lowMemory
```

<a id="discussion"></a>

## Discussion

Select this strategy when solving large problems that run out of memory when using the `fast` optimization strategy, or when you need to keep memory use low.

## See Also

### Optimization strategies

- [OptimizationStrategy.automatic](automatic.md): Chooses the best optimization strategy based on the problem size and configuration.
- [OptimizationStrategy.fast](fast.md): An optimization strategy that minimizes computation time.
- [OptimizationStrategy.nonSmooth](nonsmooth.md): An optimization strategy that can handle non-smooth problems.
