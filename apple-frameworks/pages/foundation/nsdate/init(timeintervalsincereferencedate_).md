> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/init(timeintervalsincereferencedate:)](https://developer.apple.com/documentation/foundation/nsdate/init(timeintervalsincereferencedate:))

# init(timeIntervalSinceReferenceDate:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.

## Declaration

```swift
init(timeIntervalSinceReferenceDate ti: TimeInterval)
```

## Parameters

- `ti`: The number of seconds to add to the reference date (00:00:00 UTC on 1 January 2001). A negative value means the receiver will be earlier than the reference date.

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized relative to the absolute reference date by `ti` seconds.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for the `NSDate` class and is declared primarily for the use of subclasses of `NSDate`. When you subclass `NSDate` to create a concrete date class, you must override this method.

## See Also

### Initializing a Date

- [init()](init%28%29.md): Returns a date object initialized to the current date and time.
- [init(timeIntervalSinceNow:)](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [init(timeIntervalSince1970:)](init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
- [init(coder:)](init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.

# initWithTimeIntervalSinceReferenceDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.

## Declaration

```objectivec
- (instancetype) initWithTimeIntervalSinceReferenceDate:(NSTimeInterval) ti;
```

## Parameters

- `ti`: The number of seconds to add to the reference date (00:00:00 UTC on 1 January 2001). A negative value means the receiver will be earlier than the reference date.

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized relative to the absolute reference date by `ti` seconds.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for the `NSDate` class and is declared primarily for the use of subclasses of `NSDate`. When you subclass `NSDate` to create a concrete date class, you must override this method.

## See Also

### Related Documentation

- [dateWithTimeIntervalSinceReferenceDate:](datewithtimeintervalsincereferencedate_.md): Creates and returns a date object set to a given number of seconds from 00:00:00 UTC on 1 January 2001.

### Initializing a Date

- [init](init%28%29.md): Returns a date object initialized to the current date and time.
- [initWithTimeIntervalSinceNow:](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [initWithTimeIntervalSince1970:](init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
- [initWithCoder:](init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.
