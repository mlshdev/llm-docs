> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/timezone](https://developer.apple.com/documentation/foundation/nstextcheckingresult/timezone)

# timeZone (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time zone component of a type checking result.

## Declaration

```swift
var timeZone: TimeZone? { get }
```

## See Also

### Text Checking Results for Dates and Times

- [dateCheckingResult(range:date:)](datecheckingresult%28range_date_%29.md): Creates and returns a text checking result with the specified date.
- [dateCheckingResult(range:date:timeZone:duration:)](datecheckingresult%28range_date_timezone_duration_%29.md): Creates and returns a text checking result with the specified date, time zone, and duration.
- [date](date.md): The date component of a type checking result.
- [duration](duration.md): The duration component of a type checking result.

# timeZone (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time zone component of a type checking result.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSTimeZone * timeZone;
```

## See Also

### Text Checking Results for Dates and Times

- [dateCheckingResultWithRange:date:](datecheckingresult%28range_date_%29.md): Creates and returns a text checking result with the specified date.
- [dateCheckingResultWithRange:date:timeZone:duration:](datecheckingresult%28range_date_timezone_duration_%29.md): Creates and returns a text checking result with the specified date, time zone, and duration.
- [date](date.md): The date component of a type checking result.
- [duration](duration.md): The duration component of a type checking result.
