> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelalgorithmtype](https://developer.apple.com/documentation/createml/mlrecommender/modelalgorithmtype)

# MLRecommender.ModelAlgorithmType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The algorithms a recommender can use to make recommendations.

## Declaration

```swift
enum ModelAlgorithmType
```

## Topics

### Recommender algorithms

- [MLRecommender.ModelAlgorithmType.itemSimilarity(\_:)](modelalgorithmtype/itemsimilarity%28__%29.md): An algorithm that compares the similarity from item to item.
- [MLRecommender.SimilarityType](similaritytype.md): The metric by which the recommender computes item similarity.

### Algorithm descriptions

- [description](modelalgorithmtype/description.md): A text representation of the recommender algorithm.
- [debugDescription](modelalgorithmtype/debugdescription.md): A text representation of the recommender algorithm that’s suitable for output during debugging.
- [playgroundDescription](modelalgorithmtype/playgrounddescription.md): A description of the recommender algorithm shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelalgorithmtype/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelalgorithmtype/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelalgorithmtype/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLRecommender.SimilarityType](similaritytype.md): The metric by which the recommender computes item similarity.
