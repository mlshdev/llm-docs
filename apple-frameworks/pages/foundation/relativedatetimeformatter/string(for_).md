> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/string(for:)](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/string(for:))

# string(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a formatted string for a date relative to the current date and time.

## Declaration

```swift
func string(for obj: Any?) -> String?
```

## Parameters

- `obj`: A date object to format.

<a id="return-value"></a>

## Return Value

A string that represents the date interval between a date and the current date and time, or `nil` if obj isn’t an instance of [NSDate](../nsdate.md).

<a id="Discussion"></a>

## Discussion

To determine the relative interval, the formatter uses [date](../nsdate/date.md) as the reference date.

## See Also

### Converting Dates to Formatted Strings

- [localizedString(for:relativeTo:)](localizedstring%28for_relativeto_%29.md): Formats the date interval from the reference date to the specified date using the formatter’s calendar.
- [localizedString(from:)](localizedstring%28from_%29.md): Formats a relative time represented by the specified date components.
- [localizedString(fromTimeInterval:)](localizedstring%28fromtimeinterval_%29.md): Formats the specified time interval using the formatter’s calendar.

# stringForObjectValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a formatted string for a date relative to the current date and time.

## Declaration

```objectivec
- (NSString *) stringForObjectValue:(id) obj;
```

## Parameters

- `obj`: A date object to format.

<a id="return-value"></a>

## Return Value

A string that represents the date interval between a date and the current date and time, or `nil` if obj isn’t an instance of [NSDate](../nsdate.md).

<a id="Discussion"></a>

## Discussion

To determine the relative interval, the formatter uses [date](../nsdate/date.md) as the reference date.

## See Also

### Converting Dates to Formatted Strings

- [localizedStringForDate:relativeToDate:](localizedstring%28for_relativeto_%29.md): Formats the date interval from the reference date to the specified date using the formatter’s calendar.
- [localizedStringFromDateComponents:](localizedstring%28from_%29.md): Formats a relative time represented by the specified date components.
- [localizedStringFromTimeInterval:](localizedstring%28fromtimeinterval_%29.md): Formats the specified time interval using the formatter’s calendar.
