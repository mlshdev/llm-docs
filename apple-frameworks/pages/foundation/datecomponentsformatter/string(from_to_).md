> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/string(from:to:)](https://developer.apple.com/documentation/foundation/datecomponentsformatter/string(from:to:))

# string(from:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the time difference between two dates.

## Declaration

```swift
func string(from startDate: Date, to endDate: Date) -> String?
```

## Parameters

- `startDate`: The start time. This parameter must not be `nil`.
- `endDate`: The end time. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified time information.

<a id="Discussion"></a>

## Discussion

This method calculates the elapsed time between the `startDate` and `endDate` values and uses that information to generate the string. For example, if there is exactly one hour and ten minutes difference between the start and end dates, generating an abbreviated string would result in a string of “1h 10m”.

## See Also

### Formatting Values

- [string(from:)](string%28from_%29-9exxn.md): Returns a formatted string based on the specified date component information.
- [string(for:)](string%28for_%29.md): Returns a formatted string based on the date information in the specified object.
- [string(from:)](string%28from_%29-7sj4j.md): Returns a formatted string based on the specified number of seconds.
- [localizedString(from:unitsStyle:)](localizedstring%28from_unitsstyle_%29.md): Returns a localized string based on the specified date components and style option.

# stringFromDate:toDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the time difference between two dates.

## Declaration

```objectivec
- (NSString *) stringFromDate:(NSDate *) startDate toDate:(NSDate *) endDate;
```

## Parameters

- `startDate`: The start time. This parameter must not be `nil`.
- `endDate`: The end time. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified time information.

<a id="Discussion"></a>

## Discussion

This method calculates the elapsed time between the `startDate` and `endDate` values and uses that information to generate the string. For example, if there is exactly one hour and ten minutes difference between the start and end dates, generating an abbreviated string would result in a string of “1h 10m”.

## See Also

### Formatting Values

- [stringFromDateComponents:](string%28from_%29-9exxn.md): Returns a formatted string based on the specified date component information.
- [stringForObjectValue:](string%28for_%29.md): Returns a formatted string based on the date information in the specified object.
- [stringFromTimeInterval:](string%28from_%29-7sj4j.md): Returns a formatted string based on the specified number of seconds.
- [localizedStringFromDateComponents:unitsStyle:](localizedstring%28from_unitsstyle_%29.md): Returns a localized string based on the specified date components and style option.
