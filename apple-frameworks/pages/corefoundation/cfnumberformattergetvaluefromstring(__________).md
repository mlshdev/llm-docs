> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattergetvaluefromstring(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattergetvaluefromstring(_:_:_:_:_:))

# CFNumberFormatterGetValueFromString(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a number or value representing a given string.

## Declaration

```swift
func CFNumberFormatterGetValueFromString(_ formatter: CFNumberFormatter!, _ string: CFString!, _ rangep: UnsafeMutablePointer<CFRange>!, _ numberType: CFNumberType, _ valuePtr: UnsafeMutableRawPointer!) -> Bool
```

## Parameters

- `formatter`: The number formatter to use.
- `string`: The string to parse.
- `rangep`: A reference to a range that specifies the substring of  `string` to be parsed. If `NULL`, the whole string is parsed. Upon return, contains the range of the actual extent of the parse (may be less than the given range).
- `numberType`: The type of value that `valuePtr` references. Valid values are listed in [CFNumberType](cfnumbertype.md).
- `valuePtr`: Upon return, contains a number or value representing the string in the specified format. You are responsible for releasing this value.

<a id="return-value"></a>

## Return Value

`true` if the string was parsed successfully, otherwise `false`.

## See Also

### Formatting Values

- [CFNumberFormatterCreateNumberFromString(\_:\_:\_:\_:\_:)](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithNumber(\_:\_:\_:)](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterCreateStringWithValue(\_:\_:\_:\_:)](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode(\_:\_:\_:)](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.

# CFNumberFormatterGetValueFromString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a number or value representing a given string.

## Declaration

```objectivec
extern Boolean CFNumberFormatterGetValueFromString(CFNumberFormatterRef formatter, CFStringRef string, CFRange *rangep, CFNumberType numberType, void *valuePtr);
```

## Parameters

- `formatter`: The number formatter to use.
- `string`: The string to parse.
- `rangep`: A reference to a range that specifies the substring of  `string` to be parsed. If `NULL`, the whole string is parsed. Upon return, contains the range of the actual extent of the parse (may be less than the given range).
- `numberType`: The type of value that `valuePtr` references. Valid values are listed in [CFNumberType](cfnumbertype.md).
- `valuePtr`: Upon return, contains a number or value representing the string in the specified format. You are responsible for releasing this value.

<a id="return-value"></a>

## Return Value

`true` if the string was parsed successfully, otherwise `false`.

## See Also

### Formatting Values

- [CFNumberFormatterCreateNumberFromString](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithNumber](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterCreateStringWithValue](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
