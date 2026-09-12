> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/enumerateneighbors(for:maximumcount:distancetype:using:)-72jda](https://developer.apple.com/documentation/naturallanguage/nlembedding/enumerateneighbors(for:maximumcount:distancetype:using:)-72jda)

# enumerateNeighbors(for:maximumCount:distanceType:using:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Passes the nearest strings of a string in the vocabulary to a closure.

## Declaration

```swift
@nonobjc func enumerateNeighbors(for string: String, maximumCount maxCount: Int, distanceType: NLDistanceType = .cosine, using block: (String, NLDistance) -> Bool)
```

## Parameters

- `string`: A string in the embedding vocabulary.
- `maxCount`: The largest number of times the method calls `block`.
- `distanceType`: A means of calculating distance that determines which formula the method uses to evaluate a neighbor’s distance from `string`.
- `block`: A closure with the following parameters:

  - **`String`**: A neighboring string.
  - **`NLDistance`**: The distance from `string` to the neighboring string.

  The closure returns a Boolean that indicates whether to stop enumerating neighbors.

## See Also

### Finding strings and their distances in an embedding

- [neighbors(for:maximumCount:distanceType:)](neighbors%28for_maximumcount_distancetype_%29-8f1jc.md): Retrieves a limited number of strings near a string in the vocabulary.
- [neighbors(for:maximumCount:distanceType:)](neighbors%28for_maximumcount_distancetype_%29-8lp4z.md): Retrieves a limited number of strings near a location in the vocabulary space.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](enumerateneighbors%28for_maximumcount_distancetype_using_%29-6dy4x.md): Passes the nearest strings of a location in the vocabulary space to a closure.
- [distance(between:and:distanceType:)](distance%28between_and_distancetype_%29.md): Calculates the distance between two strings in the vocabulary space.
- [NLDistance](../nldistance.md): The distance between two strings in a text embedding.
