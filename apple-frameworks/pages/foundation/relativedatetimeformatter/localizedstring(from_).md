> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/localizedstring(from:)](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/localizedstring(from:))

# localizedString(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats a relative time represented by the specified date components.

## Declaration

```swift
func localizedString(from dateComponents: DateComponents) -> String
```

## Parameters

- `dateComponents`: The date components to format.

<a id="return-value"></a>

## Return Value

A string that represents the formatted relative time from date components.

<a id="Discussion"></a>

## Discussion

The formatter interprets a negative component value as a date in the past.

```swift
let components = DateComponents(day: -2)
let formatter = RelativeDateTimeFormatter()
print(formatter.localizedString(from: components))
// Outputs:  2 days ago
```

This method formats the value of the least granular unit in the [NSDateComponents](../nsdatecomponents.md) object, and doesn’t provide a compound format of the date component.

> **Important**

>  This method only supports year, month, week of month, day, hour, minute, and second components. The formatter ignores all other date components.

## See Also

### Converting Dates to Formatted Strings

- [localizedString(for:relativeTo:)](localizedstring%28for_relativeto_%29.md): Formats the date interval from the reference date to the specified date using the formatter’s calendar.
- [localizedString(fromTimeInterval:)](localizedstring%28fromtimeinterval_%29.md): Formats the specified time interval using the formatter’s calendar.
- [string(for:)](string%28for_%29.md): Creates a formatted string for a date relative to the current date and time.

# localizedStringFromDateComponents: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats a relative time represented by the specified date components.

## Declaration

```objectivec
- (NSString *) localizedStringFromDateComponents:(NSDateComponents *) dateComponents;
```

## Parameters

- `dateComponents`: The date components to format.

<a id="return-value"></a>

## Return Value

A string that represents the formatted relative time from date components.

<a id="Discussion"></a>

## Discussion

The formatter interprets a negative component value as a date in the past.

```swift
let components = DateComponents(day: -2)
let formatter = RelativeDateTimeFormatter()
print(formatter.localizedString(from: components))
// Outputs:  2 days ago
```

This method formats the value of the least granular unit in the [NSDateComponents](../nsdatecomponents.md) object, and doesn’t provide a compound format of the date component.

> **Important**

>  This method only supports year, month, week of month, day, hour, minute, and second components. The formatter ignores all other date components.

## See Also

### Converting Dates to Formatted Strings

- [localizedStringForDate:relativeToDate:](localizedstring%28for_relativeto_%29.md): Formats the date interval from the reference date to the specified date using the formatter’s calendar.
- [localizedStringFromTimeInterval:](localizedstring%28fromtimeinterval_%29.md): Formats the specified time interval using the formatter’s calendar.
- [stringForObjectValue:](string%28for_%29.md): Creates a formatted string for a date relative to the current date and time.
