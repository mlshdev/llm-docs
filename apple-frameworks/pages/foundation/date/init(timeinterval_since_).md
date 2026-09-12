> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/init(timeinterval:since:)](https://developer.apple.com/documentation/foundation/date/init(timeinterval:since:))

# init(timeInterval:since:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a date value initialized relative to another given date by a given number of seconds.

## Declaration

```swift
init(timeInterval: TimeInterval, since date: Date)
```

## Parameters

- `timeInterval`: The number of seconds to add to `date`. A negative value means the receiver will be earlier than `date`.
- `date`: The reference date.

## See Also

### Creating a Date

- [init()](init%28%29.md): Creates a date value initialized to the current date and time.
- [init(timeIntervalSinceNow:)](init%28timeintervalsincenow_%29.md): Creates a date value initialized relative to the current date and time by a given number of seconds.
- [init(timeIntervalSinceReferenceDate:)](init%28timeintervalsincereferencedate_%29.md): Creates a date value initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [init(timeIntervalSince1970:)](init%28timeintervalsince1970_%29.md): Creates a date value initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
