> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/iso8601dateformatter/date(from:)](https://developer.apple.com/documentation/foundation/iso8601dateformatter/date(from:))

# date(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a date object from the specified ISO 8601 formatted string representation.

## Declaration

```swift
func date(from string: String) -> Date?
```

## Parameters

- `string`: The ISO 8601 formatted string representation of a date.

<a id="return-value"></a>

## Return Value

A date object, or `nil` if no valid date was found.

## See Also

### Converting ISO 8601 Dates

- [string(from:)](string%28from_%29.md): Creates and returns an ISO 8601 formatted string representation of the specified date.
- [string(from:timeZone:formatOptions:)](string%28from_timezone_formatoptions_%29.md): Creates a representation of the specified date with a given time zone and format options.

# dateFromString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a date object from the specified ISO 8601 formatted string representation.

## Declaration

```objectivec
- (NSDate *) dateFromString:(NSString *) string;
```

## Parameters

- `string`: The ISO 8601 formatted string representation of a date.

<a id="return-value"></a>

## Return Value

A date object, or `nil` if no valid date was found.

## See Also

### Converting ISO 8601 Dates

- [stringFromDate:](string%28from_%29.md): Creates and returns an ISO 8601 formatted string representation of the specified date.
- [stringFromDate:timeZone:formatOptions:](string%28from_timezone_formatoptions_%29.md): Creates a representation of the specified date with a given time zone and format options.
