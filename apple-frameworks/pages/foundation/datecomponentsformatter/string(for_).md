> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/string(for:)](https://developer.apple.com/documentation/foundation/datecomponentsformatter/string(for:))

# string(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the date information in the specified object.

## Declaration

```swift
func string(for obj: Any?) -> String?
```

## Parameters

- `obj`: An object containing the date and time information to format. The object in this parameter must be a [NSDateComponents](../nsdatecomponents.md) object; if it is not, the method raises an exception. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified date information.

<a id="Discussion"></a>

## Discussion

This method has the same behavior as the [string(from:)](string%28from_%29-9exxn.md) method.

## See Also

### Formatting Values

- [string(from:)](string%28from_%29-9exxn.md): Returns a formatted string based on the specified date component information.
- [string(from:to:)](string%28from_to_%29.md): Returns a formatted string based on the time difference between two dates.
- [string(from:)](string%28from_%29-7sj4j.md): Returns a formatted string based on the specified number of seconds.
- [localizedString(from:unitsStyle:)](localizedstring%28from_unitsstyle_%29.md): Returns a localized string based on the specified date components and style option.

# stringForObjectValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a formatted string based on the date information in the specified object.

## Declaration

```objectivec
- (NSString *) stringForObjectValue:(id) obj;
```

## Parameters

- `obj`: An object containing the date and time information to format. The object in this parameter must be a [NSDateComponents](../nsdatecomponents.md) object; if it is not, the method raises an exception. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A formatted string representing the specified date information.

<a id="Discussion"></a>

## Discussion

This method has the same behavior as the [stringFromDateComponents:](string%28from_%29-9exxn.md) method.

## See Also

### Formatting Values

- [stringFromDateComponents:](string%28from_%29-9exxn.md): Returns a formatted string based on the specified date component information.
- [stringFromDate:toDate:](string%28from_to_%29.md): Returns a formatted string based on the time difference between two dates.
- [stringFromTimeInterval:](string%28from_%29-7sj4j.md): Returns a formatted string based on the specified number of seconds.
- [localizedStringFromDateComponents:unitsStyle:](localizedstring%28from_unitsstyle_%29.md): Returns a localized string based on the specified date components and style option.
