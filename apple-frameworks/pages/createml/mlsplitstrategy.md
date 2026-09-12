> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsplitstrategy](https://developer.apple.com/documentation/createml/mlsplitstrategy)

# MLSplitStrategy

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

Data partitioning approaches, typically for creating a validation dataset from a training dataset.

## Declaration

```swift
enum MLSplitStrategy
```

## Topics

### Partitioning data

- [MLSplitStrategy.automatic](mlsplitstrategy/automatic.md): Create ML automatically decides how much of your training dataset it uses for a validation dataset.
- [MLSplitStrategy.fixed(ratio:seed:)](mlsplitstrategy/fixed%28ratio_seed_%29.md): Create ML uses a portion of your training dataset to create a validation dataset based on the ratio.
- [resolve(count:)](mlsplitstrategy/resolve%28count_%29.md): Resolves this split strategy for a specific element count.

### Creating a random seed

- [timestampSeed()](timestampseed%28%29.md): Returns a number based on the current system time.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLCreateError](mlcreateerror.md): The errors Create ML throws while performing various operations, such as training models, making predictions, writing models to a file system, and so on.
- [MLModelMetadata](mlmodelmetadata.md): Information about a model that’s stored in a Core ML model file.
