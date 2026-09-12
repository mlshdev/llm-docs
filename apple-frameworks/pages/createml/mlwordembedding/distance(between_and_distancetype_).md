> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordembedding/distance(between:and:distancetype:)](https://developer.apple.com/documentation/createml/mlwordembedding/distance(between:and:distancetype:))

# distance(between:and:distanceType:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Calculates the distance between two strings in the vocabulary space.

## Declaration

```swift
func distance(between first: String, and second: String, distanceType: NLDistanceType = .cosine) -> Double
```

## Parameters

- `first`: A string in the embedding vocabulary.
- `second`: Another string in the embedding vocabulary.
- `distanceType`: The metric to use to calculate the distance between the first and second strings.

<a id="return-value"></a>

## Return Value

The distance

## See Also

### Testing a word embedding

- [prediction(from:maxCount:maxDistance:distanceType:)](prediction%28from_maxcount_maxdistance_distancetype_%29.md): Predicts neighbors.
- [NLDistanceType](../../naturallanguage/nldistancetype.md): The means of calculating a distance between two locations in a text embedding.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value indicating whether the vocabulary contains the given string.
- [vector(for:)](vector%28for_%29.md): Accesses the vector associated with the given string in the vocabulary.
