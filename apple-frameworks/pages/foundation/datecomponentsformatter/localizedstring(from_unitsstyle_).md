> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/localizedstring(from:unitsstyle:)](https://developer.apple.com/documentation/foundation/datecomponentsformatter/localizedstring(from:unitsstyle:))

# localizedString(from:unitsStyle:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized string based on the specified date components and style option.

## Declaration

```swift
class func localizedString(from components: DateComponents, unitsStyle: DateComponentsFormatter.UnitsStyle) -> String?
```

## Parameters

- `components`: The value to format.
- `unitsStyle`: The style for the resulting units. Use this parameter to specify whether you want to the resulting string to use an abbreviated or more spelled out format.

<a id="return-value"></a>

## Return Value

A string containing the localized date and time information.

<a id="Discussion"></a>

## Discussion

Use this convenience method to format a string using the default formatter values, with the exception of the `unitsStyle` value.

## See Also

### Formatting Values

- [string(from:)](string%28from_%29-9exxn.md): Returns a formatted string based on the specified date component information.
- [string(for:)](string%28for_%29.md): Returns a formatted string based on the date information in the specified object.
- [string(from:to:)](string%28from_to_%29.md): Returns a formatted string based on the time difference between two dates.
- [string(from:)](string%28from_%29-7sj4j.md): Returns a formatted string based on the specified number of seconds.

# localizedStringFromDateComponents:unitsStyle: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized string based on the specified date components and style option.

## Declaration

```objectivec
+ (NSString *) localizedStringFromDateComponents:(NSDateComponents *) components unitsStyle:(NSDateComponentsFormatterUnitsStyle) unitsStyle;
```

## Parameters

- `components`: The value to format.
- `unitsStyle`: The style for the resulting units. Use this parameter to specify whether you want to the resulting string to use an abbreviated or more spelled out format.

<a id="return-value"></a>

## Return Value

A string containing the localized date and time information.

<a id="Discussion"></a>

## Discussion

Use this convenience method to format a string using the default formatter values, with the exception of the `unitsStyle` value.

## See Also

### Formatting Values

- [stringFromDateComponents:](string%28from_%29-9exxn.md): Returns a formatted string based on the specified date component information.
- [stringForObjectValue:](string%28for_%29.md): Returns a formatted string based on the date information in the specified object.
- [stringFromDate:toDate:](string%28from_to_%29.md): Returns a formatted string based on the time difference between two dates.
- [stringFromTimeInterval:](string%28from_%29-7sj4j.md): Returns a formatted string based on the specified number of seconds.
