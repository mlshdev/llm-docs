> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsplitstrategy/fixed(ratio:seed:)](https://developer.apple.com/documentation/createml/mlsplitstrategy/fixed(ratio:seed:))

# MLSplitStrategy.fixed(ratio:seed:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

Create ML uses a portion of your training dataset to create a validation dataset based on the ratio.

## Declaration

```swift
case fixed(ratio: Double, seed: Int?)
```

<a id="discussion"></a>

## Discussion

The ratio is a value in the range `[0.0, 1.0]` that determines how much of the training data to use for validation. The seed value can be used to get consistent results across invocations. If seed is nil the split will be randomized on every invocation.

## See Also

### Partitioning data

- [MLSplitStrategy.automatic](automatic.md): Create ML automatically decides how much of your training dataset it uses for a validation dataset.
- [resolve(count:)](resolve%28count_%29.md): Resolves this split strategy for a specific element count.
