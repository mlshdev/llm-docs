> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbinarysearchingoptions](https://developer.apple.com/documentation/foundation/nsbinarysearchingoptions)

# NSBinarySearchingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for searches and insertions using [index(of:inSortedRange:options:usingComparator:)](nsarray/index%28of_insortedrange_options_usingcomparator_%29.md).

## Declaration

```swift
struct NSBinarySearchingOptions
```

## Topics

### Constants

- [firstEqual](nsbinarysearchingoptions/firstequal.md): Specifies that the search should return the first object in the range that is equal to the given object.
- [lastEqual](nsbinarysearchingoptions/lastequal.md): Specifies that the search should return the last object in the range that is equal to the given object.
- [insertionIndex](nsbinarysearchingoptions/insertionindex.md): Returns the index at which you should insert the object in order to maintain a sorted array.

### Initializers

- [init(rawValue:)](nsbinarysearchingoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSBinarySearchingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for searches and insertions using [indexOfObject:inSortedRange:options:usingComparator:](nsarray/index%28of_insortedrange_options_usingcomparator_%29.md).

## Declaration

```objectivec
enum NSBinarySearchingOptions : NSUInteger;
```

## Topics

### Constants

- [NSBinarySearchingFirstEqual](nsbinarysearchingoptions/firstequal.md): Specifies that the search should return the first object in the range that is equal to the given object.
- [NSBinarySearchingLastEqual](nsbinarysearchingoptions/lastequal.md): Specifies that the search should return the last object in the range that is equal to the given object.
- [NSBinarySearchingInsertionIndex](nsbinarysearchingoptions/insertionindex.md): Returns the index at which you should insert the object in order to maintain a sorted array.
