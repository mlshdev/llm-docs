> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/recurrencerule/end-swift.struct](https://developer.apple.com/documentation/foundation/calendar/recurrencerule/end-swift.struct)

# Calendar.RecurrenceRule.End

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

When a recurring event stops recurring.

## Declaration

```swift
struct End
```

## Topics

### Instance Properties

- [date](end-swift.struct/date.md): The latest date when the event may occur This value is set when the struct was initialized with `.afterDate()`
- [occurrences](end-swift.struct/occurrences.md): At most many times the event may occur This value is set when the struct was initialized with `.afterOccurrences()`

### Type Properties

- [never](end-swift.struct/never.md): The event repeats indefinitely

### Type Methods

- [afterDate(\_:)](end-swift.struct/afterdate%28__%29.md): The event stops repeating after a given date
- [afterOccurrences(\_:)](end-swift.struct/afteroccurrences%28__%29.md): The event stops repeating after a given number of times

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
