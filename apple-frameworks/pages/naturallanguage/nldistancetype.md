> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nldistancetype](https://developer.apple.com/documentation/naturallanguage/nldistancetype)

# NLDistanceType (Swift)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The means of calculating a distance between two locations in a text embedding.

## Declaration

```swift
enum NLDistanceType
```

<a id="overview"></a>

## Overview

The meaning of an [NLDistance](nldistance.md) is directly related to the [NLDistanceType](nldistancetype.md) you use when you call a method that uses it. For example, if you use the [neighborsForString:maximumCount:distanceType:](nlembedding/neighborsforstring_maximumcount_distancetype_.md) method and use [NLDistanceType.cosine](nldistancetype/cosine.md) for the `distanceType` parameter, the method calculates the cosine distance and returns it as an [NLDistance](nldistance.md).

## Topics

### Distance Types

- [NLDistanceType.cosine](nldistancetype/cosine.md): A method of calculating distance by using cosine similarity.

### Initializers

- [init(rawValue:)](nldistancetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NLDistanceType (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The means of calculating a distance between two locations in a text embedding.

## Declaration

```objectivec
enum NLDistanceType : NSInteger;
```

<a id="overview"></a>

## Overview

The meaning of an [NLDistance](nldistance.md) is directly related to the [NLDistanceType](nldistancetype.md) you use when you call a method that uses it. For example, if you use the [neighborsForString:maximumCount:distanceType:](nlembedding/neighborsforstring_maximumcount_distancetype_.md) method and use [NLDistanceTypeCosine](nldistancetype/cosine.md) for the `distanceType` parameter, the method calculates the cosine distance and returns it as an [NLDistance](nldistance.md).

## Topics

### Distance Types

- [NLDistanceTypeCosine](nldistancetype/cosine.md): A method of calculating distance by using cosine similarity.
