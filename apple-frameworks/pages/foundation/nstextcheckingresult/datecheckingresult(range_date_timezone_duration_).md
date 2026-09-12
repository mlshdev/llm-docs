> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/datecheckingresult(range:date:timezone:duration:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/datecheckingresult(range:date:timezone:duration:))

# dateCheckingResult(range:date:timeZone:duration:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified date, time zone, and duration.

## Declaration

```swift
class func dateCheckingResult(range: NSRange, date: Date, timeZone: TimeZone, duration: TimeInterval) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `date`: The detected date.
- `timeZone`: The detected time zone.
- `duration`: The detected duration.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [date](checkingtype/date.md).

## See Also

### Text Checking Results for Dates and Times

- [dateCheckingResult(range:date:)](datecheckingresult%28range_date_%29.md): Creates and returns a text checking result with the specified date.
- [date](date.md): The date component of a type checking result.
- [duration](duration.md): The duration component of a type checking result.
- [timeZone](timezone.md): The time zone component of a type checking result.

# dateCheckingResultWithRange:date:timeZone:duration: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified date, time zone, and duration.

## Declaration

```objectivec
+ (NSTextCheckingResult *) dateCheckingResultWithRange:(NSRange) range date:(NSDate *) date timeZone:(NSTimeZone *) timeZone duration:(NSTimeInterval) duration;
```

## Parameters

- `range`: The range of the detected result.
- `date`: The detected date.
- `timeZone`: The detected time zone.
- `duration`: The detected duration.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeDate](checkingtype/date.md).

## See Also

### Text Checking Results for Dates and Times

- [dateCheckingResultWithRange:date:](datecheckingresult%28range_date_%29.md): Creates and returns a text checking result with the specified date.
- [date](date.md): The date component of a type checking result.
- [duration](duration.md): The duration component of a type checking result.
- [timeZone](timezone.md): The time zone component of a type checking result.
