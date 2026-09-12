> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsplitstrategy/automatic](https://developer.apple.com/documentation/createml/mlsplitstrategy/automatic)

# MLSplitStrategy.automatic

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

Create ML automatically decides how much of your training dataset it uses for a validation dataset.

## Declaration

```swift
case automatic
```

<a id="discussion"></a>

## Discussion

Create ML creates a validation dataset by partitioning up to 10% from the training dataset, depending on its size:

| Training samples | % used for validation |
| --- | --- |
| \< 50 | None |
| 50 to 199 | 10% |
| ≥ 200 | 5% |

## See Also

### Partitioning data

- [MLSplitStrategy.fixed(ratio:seed:)](fixed%28ratio_seed_%29.md): Create ML uses a portion of your training dataset to create a validation dataset based on the ratio.
- [resolve(count:)](resolve%28count_%29.md): Resolves this split strategy for a specific element count.
