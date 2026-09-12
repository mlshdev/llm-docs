> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/neighbors(for:maximumcount:distancetype:)-8lp4z](https://developer.apple.com/documentation/naturallanguage/nlembedding/neighbors(for:maximumcount:distancetype:)-8lp4z)

# neighbors(for:maximumCount:distanceType:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves a limited number of strings near a location in the vocabulary space.

## Declaration

```swift
@nonobjc func neighbors(for vector: [Double], maximumCount maxCount: Int, distanceType: NLDistanceType = .cosine) -> [(String, NLDistance)]
```

## Parameters

- `vector`: A location in the vocabulary space.
- `maxCount`: The largest number of neighboring strings that the method can return in an array.
- `distanceType`: A means of calculating distance that determines which formula the method uses to evaluate a neighbor’s distance from `vector`.

<a id="return-value"></a>

## Return Value

An array of neighboring strings and their distances.

## See Also

### Finding strings and their distances in an embedding

- [neighbors(for:maximumCount:distanceType:)](neighbors%28for_maximumcount_distancetype_%29-8f1jc.md): Retrieves a limited number of strings near a string in the vocabulary.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](enumerateneighbors%28for_maximumcount_distancetype_using_%29-72jda.md): Passes the nearest strings of a string in the vocabulary to a closure.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](enumerateneighbors%28for_maximumcount_distancetype_using_%29-6dy4x.md): Passes the nearest strings of a location in the vocabulary space to a closure.
- [distance(between:and:distanceType:)](distance%28between_and_distancetype_%29.md): Calculates the distance between two strings in the vocabulary space.
- [NLDistance](../nldistance.md): The distance between two strings in a text embedding.
