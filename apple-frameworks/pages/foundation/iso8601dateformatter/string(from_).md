> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/iso8601dateformatter/string(from:)](https://developer.apple.com/documentation/foundation/iso8601dateformatter/string(from:))

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns an ISO 8601 formatted string representation of the specified date.

## Declaration

```swift
func string(from date: Date) -> String
```

## Parameters

- `date`: The date to be represented.

<a id="return-value"></a>

## Return Value

A user-readable string representing the date.

## See Also

### Converting ISO 8601 Dates

- [date(from:)](date%28from_%29.md): Creates and returns a date object from the specified ISO 8601 formatted string representation.
- [string(from:timeZone:formatOptions:)](string%28from_timezone_formatoptions_%29.md): Creates a representation of the specified date with a given time zone and format options.

# stringFromDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns an ISO 8601 formatted string representation of the specified date.

## Declaration

```objectivec
- (NSString *) stringFromDate:(NSDate *) date;
```

## Parameters

- `date`: The date to be represented.

<a id="return-value"></a>

## Return Value

A user-readable string representing the date.

## See Also

### Converting ISO 8601 Dates

- [dateFromString:](date%28from_%29.md): Creates and returns a date object from the specified ISO 8601 formatted string representation.
- [stringFromDate:timeZone:formatOptions:](string%28from_timezone_formatoptions_%29.md): Creates a representation of the specified date with a given time zone and format options.
