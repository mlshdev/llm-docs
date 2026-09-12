> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsplitstrategy/resolve(count:)](https://developer.apple.com/documentation/createml/mlsplitstrategy/resolve(count:))

# resolve(count:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Resolves this split strategy for a specific element count.

## Declaration

```swift
func resolve(count: Int) -> (ratio: Double, seed: Int)
```

## Parameters

- `count`: The number of elements in the collection being split.

<a id="return-value"></a>

## Return Value

The split fraction and the random seed to use.

## See Also

### Partitioning data

- [MLSplitStrategy.automatic](automatic.md): Create ML automatically decides how much of your training dataset it uses for a validation dataset.
- [MLSplitStrategy.fixed(ratio:seed:)](fixed%28ratio_seed_%29.md): Create ML uses a portion of your training dataset to create a validation dataset based on the ratio.
