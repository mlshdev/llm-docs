> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/init()](https://developer.apple.com/documentation/foundation/nsdate/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized to the current date and time.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized to the current date and time.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for `NSDate`.

## See Also

### Initializing a Date

- [init(timeIntervalSinceNow:)](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [init(timeIntervalSinceReferenceDate:)](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [init(timeIntervalSince1970:)](init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
- [init(coder:)](init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized to the current date and time.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized to the current date and time.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for `NSDate`.

## See Also

### Related Documentation

- [date](date.md): Creates and returns a new date object set to the current date and time.

### Initializing a Date

- [initWithTimeIntervalSinceNow:](init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [initWithTimeIntervalSinceReferenceDate:](init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [initWithTimeIntervalSince1970:](init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
- [initWithCoder:](init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.
