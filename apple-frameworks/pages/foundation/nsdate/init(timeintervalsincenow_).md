> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/init(timeintervalsincenow:)](https://developer.apple.com/documentation/foundation/nsdate/init(timeintervalsincenow:))

# init(timeIntervalSinceNow:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized relative to the current date and time by a given number of seconds.

## Declaration

```swift
convenience init(timeIntervalSinceNow secs: TimeInterval)
```

## Parameters

- `secs`: The number of seconds from relative to the current date and time to which the receiver should be initialized. A negative value means the returned object will represent a date in the past.

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized relative to the current date and time by `secs` seconds.

## See Also

### Initializing a Date

- [init()](init%28%29.md): Returns a date object initialized to the current date and time.
- [init(timeIntervalSinceReferenceDate:)](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [init(timeIntervalSince1970:)](init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
- [init(coder:)](init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.

# initWithTimeIntervalSinceNow: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized relative to the current date and time by a given number of seconds.

## Declaration

```objectivec
- (instancetype) initWithTimeIntervalSinceNow:(NSTimeInterval) secs;
```

## Parameters

- `secs`: The number of seconds from relative to the current date and time to which the receiver should be initialized. A negative value means the returned object will represent a date in the past.

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized relative to the current date and time by `secs` seconds.

## See Also

### Related Documentation

- [dateWithTimeIntervalSinceNow:](datewithtimeintervalsincenow_.md): Creates and returns a date object set to a given number of seconds from the current date and time.

### Initializing a Date

- [init](init%28%29.md): Returns a date object initialized to the current date and time.
- [initWithTimeIntervalSinceReferenceDate:](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [initWithTimeIntervalSince1970:](init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
- [initWithCoder:](init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.
