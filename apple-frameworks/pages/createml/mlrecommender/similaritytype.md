> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/similaritytype](https://developer.apple.com/documentation/createml/mlrecommender/similaritytype)

# MLRecommender.SimilarityType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

The metric by which the recommender computes item similarity.

## Declaration

```swift
enum SimilarityType
```

## Topics

### Similarity types

- [MLRecommender.SimilarityType.jaccard](similaritytype/jaccard.md): The Jaccard similarity measure.
- [MLRecommender.SimilarityType.cosine](similaritytype/cosine.md): The cosine similarity measure.
- [MLRecommender.SimilarityType.pearson](similaritytype/pearson.md): The Pearson correlation similarity measure.

### Similarity type descriptions

- [description](similaritytype/description.md): A text representation of the similarity type.
- [debugDescription](similaritytype/debugdescription.md): A text representation of the similarity type that’s suitable for output during debugging.
- [playgroundDescription](similaritytype/playgrounddescription.md): A description of the similarity type shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](similaritytype/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](similaritytype/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](similaritytype/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLRecommender.ModelAlgorithmType](modelalgorithmtype.md): The algorithms a recommender can use to make recommendations.
