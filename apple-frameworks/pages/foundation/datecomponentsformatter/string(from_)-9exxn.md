> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/string(from:)-9exxn](https://developer.apple.com/documentation/foundation/datecomponentsformatter/string(from:)-9exxn)

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the specified date component information.

## Declaration

```swift
func string(from components: DateComponents) -> String?
```

## Parameters

- `components`: A date components object containing the date and time information to format. The [allowedUnits](allowedunits.md) property determines which date components are actually used to generate the string. All other date components are ignored. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified date information.

<a id="Discussion"></a>

## Discussion

Use this method to format date information that is already broken down into the component day and time values.

## See Also

### Formatting Values

- [string(for:)](string%28for_%29.md): Returns a formatted string based on the date information in the specified object.
- [string(from:to:)](string%28from_to_%29.md): Returns a formatted string based on the time difference between two dates.
- [string(from:)](string%28from_%29-7sj4j.md): Returns a formatted string based on the specified number of seconds.
- [localizedString(from:unitsStyle:)](localizedstring%28from_unitsstyle_%29.md): Returns a localized string based on the specified date components and style option.

# stringFromDateComponents: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the specified date component information.

## Declaration

```objectivec
- (NSString *) stringFromDateComponents:(NSDateComponents *) components;
```

## Parameters

- `components`: A date components object containing the date and time information to format. The [allowedUnits](allowedunits.md) property determines which date components are actually used to generate the string. All other date components are ignored. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified date information.

<a id="Discussion"></a>

## Discussion

Use this method to format date information that is already broken down into the component day and time values.

## See Also

### Formatting Values

- [stringForObjectValue:](string%28for_%29.md): Returns a formatted string based on the date information in the specified object.
- [stringFromDate:toDate:](string%28from_to_%29.md): Returns a formatted string based on the time difference between two dates.
- [stringFromTimeInterval:](string%28from_%29-7sj4j.md): Returns a formatted string based on the specified number of seconds.
- [localizedStringFromDateComponents:unitsStyle:](localizedstring%28from_unitsstyle_%29.md): Returns a localized string based on the specified date components and style option.
