> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/repeatedtimepolicy](https://developer.apple.com/documentation/foundation/calendar/repeatedtimepolicy)

# Calendar.RepeatedTimePolicy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines which result to use when a time is repeated on a day in a calendar (for example, during a daylight saving transition when the times between 2:00am and 3:00am may happen twice).

## Declaration

```swift
enum RepeatedTimePolicy
```

## Topics

### Enumeration Cases

- [Calendar.RepeatedTimePolicy.first](repeatedtimepolicy/first.md): If there are two or more matching times (all the components are the same, including isLeapMonth) before the end of the next instance of the next higher component to the highest specified component, then the algorithm will return the first occurrence.
- [Calendar.RepeatedTimePolicy.last](repeatedtimepolicy/last.md): If there are two or more matching times (all the components are the same, including isLeapMonth) before the end of the next instance of the next higher component to the highest specified component, then the algorithm will return the last occurrence.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scanning Dates

- [startOfDay(for:)](startofday%28for_%29.md): Returns the first moment of a given Date, as a Date.
- [enumerateDates(startingAfter:matching:matchingPolicy:repeatedTimePolicy:direction:using:)](enumeratedates%28startingafter_matching_matchingpolicy_repeatedtimepolicy_direction_using_%29.md): Computes the dates which match (or most closely match) a given set of components, and calls the closure once for each of them, until the enumeration is stopped.
- [nextDate(after:matching:matchingPolicy:repeatedTimePolicy:direction:)](nextdate%28after_matching_matchingpolicy_repeatedtimepolicy_direction_%29.md): Computes the next date which matches (or most closely matches) a given set of components.
- [Calendar.MatchingPolicy](matchingpolicy.md): A hint to the search algorithm to control the method used for searching for dates.
