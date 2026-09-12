> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordembedding/contains(_:)](https://developer.apple.com/documentation/createml/mlwordembedding/contains(_:))

# contains(\_:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns a Boolean value indicating whether the vocabulary contains the given string.

## Declaration

```swift
func contains(_ text: String) -> Bool
```

## Parameters

- `text`: The string to find in the vocabulary.

<a id="return-value"></a>

## Return Value

`true` if the string was found in the vocabulary; otherwise, false.

## See Also

### Testing a word embedding

- [prediction(from:maxCount:maxDistance:distanceType:)](prediction%28from_maxcount_maxdistance_distancetype_%29.md): Predicts neighbors.
- [distance(between:and:distanceType:)](distance%28between_and_distancetype_%29.md): Calculates the distance between two strings in the vocabulary space.
- [NLDistanceType](../../naturallanguage/nldistancetype.md): The means of calculating a distance between two locations in a text embedding.
- [vector(for:)](vector%28for_%29.md): Accesses the vector associated with the given string in the vocabulary.
