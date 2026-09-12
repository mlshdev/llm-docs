> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordembedding/vector(for:)](https://developer.apple.com/documentation/createml/mlwordembedding/vector(for:))

# vector(for:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Accesses the vector associated with the given string in the vocabulary.

## Declaration

```swift
func vector(for text: String) -> [Double]?
```

## Parameters

- `text`: A string in the vocabulary.

<a id="return-value"></a>

## Return Value

The vector associated with the string if present in the word embedding; otherwise, `nil`.

## See Also

### Testing a word embedding

- [prediction(from:maxCount:maxDistance:distanceType:)](prediction%28from_maxcount_maxdistance_distancetype_%29.md): Predicts neighbors.
- [distance(between:and:distanceType:)](distance%28between_and_distancetype_%29.md): Calculates the distance between two strings in the vocabulary space.
- [NLDistanceType](../../naturallanguage/nldistancetype.md): The means of calculating a distance between two locations in a text embedding.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value indicating whether the vocabulary contains the given string.
