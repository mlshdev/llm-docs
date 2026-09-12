> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/init(timeintervalsince1970:)](https://developer.apple.com/documentation/foundation/nsdate/init(timeintervalsince1970:))

# init(timeIntervalSince1970:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.

## Declaration

```swift
convenience init(timeIntervalSince1970 secs: TimeInterval)
```

## Parameters

- `secs`: The number of seconds from the reference date (00:00:00 UTC on 1 January 1970) for the new date. Use a negative argument to specify a date and time before the reference date.

<a id="return-value"></a>

## Return Value

An `NSDate` object set to `seconds` seconds from the reference date.

<a id="Discussion"></a>

## Discussion

This method is useful for creating `NSDate` objects from time_t values returned by BSD system functions.

## See Also

### Initializing a Date

- [init()](init%28%29.md): Returns a date object initialized to the current date and time.
- [init(timeIntervalSinceNow:)](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [init(timeIntervalSinceReferenceDate:)](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [init(coder:)](init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.

# initWithTimeIntervalSince1970: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.

## Declaration

```objectivec
- (instancetype) initWithTimeIntervalSince1970:(NSTimeInterval) secs;
```

## Parameters

- `secs`: The number of seconds from the reference date (00:00:00 UTC on 1 January 1970) for the new date. Use a negative argument to specify a date and time before the reference date.

<a id="return-value"></a>

## Return Value

An `NSDate` object set to `seconds` seconds from the reference date.

<a id="Discussion"></a>

## Discussion

This method is useful for creating `NSDate` objects from time_t values returned by BSD system functions.

## See Also

### Initializing a Date

- [init](init%28%29.md): Returns a date object initialized to the current date and time.
- [initWithTimeIntervalSinceNow:](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [initWithTimeIntervalSinceReferenceDate:](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [initWithCoder:](init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.
