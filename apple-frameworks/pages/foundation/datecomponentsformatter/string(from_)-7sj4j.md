> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/string(from:)-7sj4j](https://developer.apple.com/documentation/foundation/datecomponentsformatter/string(from:)-7sj4j)

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the specified number of seconds.

## Declaration

```swift
func string(from ti: TimeInterval) -> String?
```

## Parameters

- `ti`: The time interval, measured in seconds. The value must be a finite number. Negative numbers are treated as positive numbers when creating the string.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified time interval.

<a id="Discussion"></a>

## Discussion

This method formats the specified number of seconds into the appropriate units. For example, if the formatter allows the display of minutes and seconds, creating an abbreviated string for the value 70 seconds results in the string “1m 10s”.

## See Also

### Formatting Values

- [string(from:)](string%28from_%29-9exxn.md): Returns a formatted string based on the specified date component information.
- [string(for:)](string%28for_%29.md): Returns a formatted string based on the date information in the specified object.
- [string(from:to:)](string%28from_to_%29.md): Returns a formatted string based on the time difference between two dates.
- [localizedString(from:unitsStyle:)](localizedstring%28from_unitsstyle_%29.md): Returns a localized string based on the specified date components and style option.

# stringFromTimeInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the specified number of seconds.

## Declaration

```objectivec
- (NSString *) stringFromTimeInterval:(NSTimeInterval) ti;
```

## Parameters

- `ti`: The time interval, measured in seconds. The value must be a finite number. Negative numbers are treated as positive numbers when creating the string.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified time interval.

<a id="Discussion"></a>

## Discussion

This method formats the specified number of seconds into the appropriate units. For example, if the formatter allows the display of minutes and seconds, creating an abbreviated string for the value 70 seconds results in the string “1m 10s”.

## See Also

### Formatting Values

- [stringFromDateComponents:](string%28from_%29-9exxn.md): Returns a formatted string based on the specified date component information.
- [stringForObjectValue:](string%28for_%29.md): Returns a formatted string based on the date information in the specified object.
- [stringFromDate:toDate:](string%28from_to_%29.md): Returns a formatted string based on the time difference between two dates.
- [localizedStringFromDateComponents:unitsStyle:](localizedstring%28from_unitsstyle_%29.md): Returns a localized string based on the specified date components and style option.
