> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/init(coder:)](https://developer.apple.com/documentation/foundation/nsdate/init(coder:))

# init(coder:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized from data in the given unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Initializing a Date

- [init()](init%28%29.md): Returns a date object initialized to the current date and time.
- [init(timeIntervalSinceNow:)](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [init(timeIntervalSinceReferenceDate:)](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [init(timeIntervalSince1970:)](init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.

# initWithCoder: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized from data in the given unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Initializing a Date

- [init](init%28%29.md): Returns a date object initialized to the current date and time.
- [initWithTimeIntervalSinceNow:](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [initWithTimeIntervalSinceReferenceDate:](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [initWithTimeIntervalSince1970:](init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
