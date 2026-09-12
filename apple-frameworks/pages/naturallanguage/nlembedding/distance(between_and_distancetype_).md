> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/distance(between:and:distancetype:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/distance(between:and:distancetype:))

# distance(between:and:distanceType:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Calculates the distance between two strings in the vocabulary space.

## Declaration

```swift
@nonobjc func distance(between firstString: String, and secondString: String, distanceType: NLDistanceType = .cosine) -> NLDistance
```

## Parameters

- `firstString`: A string in the embedding vocabulary.
- `secondString`: Another string in the embedding vocabulary.
- `distanceType`: A means of calculating distance that determines which formula the method uses to evaluate the distance between `firstString` and `secondString`.

<a id="return-value"></a>

## Return Value

The distance associated with `distanceType`.

## See Also

### Finding strings and their distances in an embedding

- [neighbors(for:maximumCount:distanceType:)](neighbors%28for_maximumcount_distancetype_%29-8f1jc.md): Retrieves a limited number of strings near a string in the vocabulary.
- [neighbors(for:maximumCount:distanceType:)](neighbors%28for_maximumcount_distancetype_%29-8lp4z.md): Retrieves a limited number of strings near a location in the vocabulary space.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](enumerateneighbors%28for_maximumcount_distancetype_using_%29-72jda.md): Passes the nearest strings of a string in the vocabulary to a closure.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](enumerateneighbors%28for_maximumcount_distancetype_using_%29-6dy4x.md): Passes the nearest strings of a location in the vocabulary space to a closure.
- [NLDistance](../nldistance.md): The distance between two strings in a text embedding.
