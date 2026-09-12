> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/relativedatetimeformatter/localizedstring(for:relativeto:)](https://developer.apple.com/documentation/foundation/relativedatetimeformatter/localizedstring(for:relativeto:))

# localizedString(for:relativeTo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats the date interval from the reference date to the specified date using the formatter’s calendar.

## Declaration

```swift
func localizedString(for date: Date, relativeTo referenceDate: Date) -> String
```

## Parameters

- `date`: The end date of the interval to format.
- `referenceDate`: The start date of the interval to format.

<a id="return-value"></a>

## Return Value

A string that represents the date interval between two dates.

<a id="discussion"></a>

## Discussion

```swift
let tenMinutesAgo = Date(timeIntervalSinceNow: -600)
let twoMintuesAhead = Date(timeIntervalSinceNow: 120)
let formatter = RelativeDateTimeFormatter()
print(formatter.localizedString(for: tenMinutesAgo, relativeTo: twoMintuesAhead))
// Outputs: 12 minutes ago
```

## See Also

### Converting Dates to Formatted Strings

- [localizedString(from:)](localizedstring%28from_%29.md): Formats a relative time represented by the specified date components.
- [localizedString(fromTimeInterval:)](localizedstring%28fromtimeinterval_%29.md): Formats the specified time interval using the formatter’s calendar.
- [string(for:)](string%28for_%29.md): Creates a formatted string for a date relative to the current date and time.

# localizedStringForDate:relativeToDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats the date interval from the reference date to the specified date using the formatter’s calendar.

## Declaration

```objectivec
- (NSString *) localizedStringForDate:(NSDate *) date relativeToDate:(NSDate *) referenceDate;
```

## Parameters

- `date`: The end date of the interval to format.
- `referenceDate`: The start date of the interval to format.

<a id="return-value"></a>

## Return Value

A string that represents the date interval between two dates.

<a id="discussion"></a>

## Discussion

```swift
let tenMinutesAgo = Date(timeIntervalSinceNow: -600)
let twoMintuesAhead = Date(timeIntervalSinceNow: 120)
let formatter = RelativeDateTimeFormatter()
print(formatter.localizedString(for: tenMinutesAgo, relativeTo: twoMintuesAhead))
// Outputs: 12 minutes ago
```

## See Also

### Converting Dates to Formatted Strings

- [localizedStringFromDateComponents:](localizedstring%28from_%29.md): Formats a relative time represented by the specified date components.
- [localizedStringFromTimeInterval:](localizedstring%28fromtimeinterval_%29.md): Formats the specified time interval using the formatter’s calendar.
- [stringForObjectValue:](string%28for_%29.md): Creates a formatted string for a date relative to the current date and time.
