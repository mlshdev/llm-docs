> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/localizedstring(fromtimeinterval:)](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/localizedstring(fromtimeinterval:))

# localizedString(fromTimeInterval:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats the specified time interval using the formatter’s calendar.

## Declaration

```swift
func localizedString(fromTimeInterval timeInterval: TimeInterval) -> String
```

## Parameters

- `timeInterval`: The time interval to format.

<a id="return-value"></a>

## Return Value

A string that represents the formatted time interval.

<a id="Discussion"></a>

## Discussion

The formatter interprets a negative time interval as a date in the past.

```swift
let formatter = RelativeDateTimeFormatter()
print(formatter.localizedString(fromTimeInterval: -120))
// Outputs:  2 minutes ago
```

## See Also

### Converting Dates to Formatted Strings

- [localizedString(for:relativeTo:)](localizedstring%28for_relativeto_%29.md): Formats the date interval from the reference date to the specified date using the formatter’s calendar.
- [localizedString(from:)](localizedstring%28from_%29.md): Formats a relative time represented by the specified date components.
- [string(for:)](string%28for_%29.md): Creates a formatted string for a date relative to the current date and time.

# localizedStringFromTimeInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats the specified time interval using the formatter’s calendar.

## Declaration

```objectivec
- (NSString *) localizedStringFromTimeInterval:(NSTimeInterval) timeInterval;
```

## Parameters

- `timeInterval`: The time interval to format.

<a id="return-value"></a>

## Return Value

A string that represents the formatted time interval.

<a id="Discussion"></a>

## Discussion

The formatter interprets a negative time interval as a date in the past.

```swift
let formatter = RelativeDateTimeFormatter()
print(formatter.localizedString(fromTimeInterval: -120))
// Outputs:  2 minutes ago
```

## See Also

### Converting Dates to Formatted Strings

- [localizedStringForDate:relativeToDate:](localizedstring%28for_relativeto_%29.md): Formats the date interval from the reference date to the specified date using the formatter’s calendar.
- [localizedStringFromDateComponents:](localizedstring%28from_%29.md): Formats a relative time represented by the specified date components.
- [stringForObjectValue:](string%28for_%29.md): Creates a formatted string for a date relative to the current date and time.
