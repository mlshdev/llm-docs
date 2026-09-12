> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateintervalformatter/string(from:to:)](https://developer.apple.com/documentation/foundation/dateintervalformatter/string(from:to:))

# string(from:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the specified start and end dates.

## Declaration

```swift
func string(from fromDate: Date, to toDate: Date) -> String
```

## Parameters

- `fromDate`: The start date. This date appears first in the resulting string.
- `toDate`: The end date. This date appears last after the hyphen in the resulting string.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified date interval.

<a id="Discussion"></a>

## Discussion

The formatter includes both `fromDate` and `toDate` in the resulting string only when there is enough of a difference in their values to warrant the inclusion of both. If the date and time difference cannot be adequately displayed, the formatter displays one date value. For example, if the [timeStyle](timestyle.md) property was set to [DateIntervalFormatter.Style.none](style/none.md), the two dates would need to be at least one day apart in order for both to be displayed.

# stringFromDate:toDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the specified start and end dates.

## Declaration

```objectivec
- (NSString *) stringFromDate:(NSDate *) fromDate toDate:(NSDate *) toDate;
```

## Parameters

- `fromDate`: The start date. This date appears first in the resulting string.
- `toDate`: The end date. This date appears last after the hyphen in the resulting string.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified date interval.

<a id="Discussion"></a>

## Discussion

The formatter includes both `fromDate` and `toDate` in the resulting string only when there is enough of a difference in their values to warrant the inclusion of both. If the date and time difference cannot be adequately displayed, the formatter displays one date value. For example, if the [timeStyle](timestyle.md) property was set to [NSDateIntervalFormatterNoStyle](style/none.md), the two dates would need to be at least one day apart in order for both to be displayed.
