> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordembedding/prediction(from:maxcount:maxdistance:distancetype:)](https://developer.apple.com/documentation/createml/mlwordembedding/prediction(from:maxcount:maxdistance:distancetype:))

# prediction(from:maxCount:maxDistance:distanceType:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Predicts neighbors.

## Declaration

```swift
func prediction(from text: String, maxCount: Int = 10, maxDistance: Double = 2.0, distanceType: NLDistanceType = .cosine) throws -> [(text: String, distance: Double)]
```

## Parameters

- `text`: A string in the embedding vocabulary.
- `maxCount`: The largest number of neighboring strings.
- `maxDistance`: The maximum allowed neighbor distance.
- `distanceType`: The type of distance formula to use for evaluating a neighbor’s distance from the input string.

<a id="return-value"></a>

## Return Value

An array of neighboring strings and their distances to the input string.

<a id="discussion"></a>

## Discussion

The distance values are calculated with a formula determined by [NLDistanceType](../../naturallanguage/nldistancetype.md), such as [NLDistanceType.cosine](../../naturallanguage/nldistancetype/cosine.md).

## See Also

### Testing a word embedding

- [distance(between:and:distanceType:)](distance%28between_and_distancetype_%29.md): Calculates the distance between two strings in the vocabulary space.
- [NLDistanceType](../../naturallanguage/nldistancetype.md): The means of calculating a distance between two locations in a text embedding.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value indicating whether the vocabulary contains the given string.
- [vector(for:)](vector%28for_%29.md): Accesses the vector associated with the given string in the vocabulary.
