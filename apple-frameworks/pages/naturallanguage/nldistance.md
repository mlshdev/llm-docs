> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nldistance](https://developer.apple.com/documentation/naturallanguage/nldistance)

# NLDistance (Swift)

**Framework:** Natural Language  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The distance between two strings in a text embedding.

## Declaration

```swift
typealias NLDistance = Double
```

<a id="Discussion"></a>

## Discussion

The meaning of an [NLDistance](nldistance.md) is directly related to the [NLDistanceType](nldistancetype.md) you use when you call a method that uses it. For example, if you use the [neighborsForString:maximumCount:distanceType:](nlembedding/neighborsforstring_maximumcount_distancetype_.md) method and use [NLDistanceType.cosine](nldistancetype/cosine.md) for the `distanceType` parameter, the method calculates the cosine distance and returns it as an [NLDistance](nldistance.md).

## Topics

### Calculating Distance

- [NLDistanceType](nldistancetype.md): The means of calculating a distance between two locations in a text embedding.

## See Also

### Finding strings and their distances in an embedding

- [neighbors(for:maximumCount:distanceType:)](nlembedding/neighbors%28for_maximumcount_distancetype_%29-8f1jc.md): Retrieves a limited number of strings near a string in the vocabulary.
- [neighbors(for:maximumCount:distanceType:)](nlembedding/neighbors%28for_maximumcount_distancetype_%29-8lp4z.md): Retrieves a limited number of strings near a location in the vocabulary space.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](nlembedding/enumerateneighbors%28for_maximumcount_distancetype_using_%29-72jda.md): Passes the nearest strings of a string in the vocabulary to a closure.
- [enumerateNeighbors(for:maximumCount:distanceType:using:)](nlembedding/enumerateneighbors%28for_maximumcount_distancetype_using_%29-6dy4x.md): Passes the nearest strings of a location in the vocabulary space to a closure.
- [distance(between:and:distanceType:)](nlembedding/distance%28between_and_distancetype_%29.md): Calculates the distance between two strings in the vocabulary space.

# NLDistance (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The distance between two strings in a text embedding.

## Declaration

```objectivec
typedef double NLDistance;
```

<a id="Discussion"></a>

## Discussion

The meaning of an [NLDistance](nldistance.md) is directly related to the [NLDistanceType](nldistancetype.md) you use when you call a method that uses it. For example, if you use the [neighborsForString:maximumCount:distanceType:](nlembedding/neighborsforstring_maximumcount_distancetype_.md) method and use [NLDistanceTypeCosine](nldistancetype/cosine.md) for the `distanceType` parameter, the method calculates the cosine distance and returns it as an [NLDistance](nldistance.md).

## Topics

### Calculating Distance

- [NLDistanceType](nldistancetype.md): The means of calculating a distance between two locations in a text embedding.

## See Also

### Finding strings and their distances in an embedding

- [neighborsForString:maximumCount:distanceType:](nlembedding/neighborsforstring_maximumcount_distancetype_.md): Retrieves a limited number of strings near a string in the vocabulary.
- [neighborsForString:maximumCount:maximumDistance:distanceType:](nlembedding/neighborsforstring_maximumcount_maximumdistance_distancetype_.md): Retrieves a limited number of strings, within a radius of a string, in the vocabulary.
- [neighborsForVector:maximumCount:distanceType:](nlembedding/neighborsforvector_maximumcount_distancetype_.md): Retrieves a limited number of strings near a location in the vocabulary space.
- [neighborsForVector:maximumCount:maximumDistance:distanceType:](nlembedding/neighborsforvector_maximumcount_maximumdistance_distancetype_.md): Retrieves a limited number of strings within a radius of a location in the vocabulary space.
- [enumerateNeighborsForString:maximumCount:distanceType:usingBlock:](nlembedding/enumerateneighborsforstring_maximumcount_distancetype_usingblock_.md): Passes the nearest strings of a string in the vocabulary to a block.
- [enumerateNeighborsForString:maximumCount:maximumDistance:distanceType:usingBlock:](nlembedding/enumerateneighborsforstring_maximumcount_maximumdistance_distancetype_usingblock_.md): Passes the nearest strings, within a radius of a string in the vocabulary, to a block.
- [enumerateNeighborsForVector:maximumCount:distanceType:usingBlock:](nlembedding/enumerateneighborsforvector_maximumcount_distancetype_usingblock_.md): Passes the nearest strings of a location in the vocabulary space to a closure.
- [enumerateNeighborsForVector:maximumCount:maximumDistance:distanceType:usingBlock:](nlembedding/enumerateneighborsforvector_maximumcount_maximumdistance_distancetype_usingblock_.md): Passes the nearest strings, within a radius of a location in the vocabulary space, to a block.
- [distanceBetweenString:andString:distanceType:](nlembedding/distancebetweenstring_andstring_distancetype_.md): Calculates the distance between two strings in the vocabulary space.
