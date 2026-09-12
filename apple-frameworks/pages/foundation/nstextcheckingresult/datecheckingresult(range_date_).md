> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/datecheckingresult(range:date:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/datecheckingresult(range:date:))

# dateCheckingResult(range:date:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified date.

## Declaration

```swift
class func dateCheckingResult(range: NSRange, date: Date) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `date`: The detected date.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [date](checkingtype/date.md).

## See Also

### Text Checking Results for Dates and Times

- [dateCheckingResult(range:date:timeZone:duration:)](datecheckingresult%28range_date_timezone_duration_%29.md): Creates and returns a text checking result with the specified date, time zone, and duration.
- [date](date.md): The date component of a type checking result.
- [duration](duration.md): The duration component of a type checking result.
- [timeZone](timezone.md): The time zone component of a type checking result.

# dateCheckingResultWithRange:date: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified date.

## Declaration

```objectivec
+ (NSTextCheckingResult *) dateCheckingResultWithRange:(NSRange) range date:(NSDate *) date;
```

## Parameters

- `range`: The range of the detected result.
- `date`: The detected date.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeDate](checkingtype/date.md).

## See Also

### Text Checking Results for Dates and Times

- [dateCheckingResultWithRange:date:timeZone:duration:](datecheckingresult%28range_date_timezone_duration_%29.md): Creates and returns a text checking result with the specified date, time zone, and duration.
- [date](date.md): The date component of a type checking result.
- [duration](duration.md): The duration component of a type checking result.
- [timeZone](timezone.md): The time zone component of a type checking result.
