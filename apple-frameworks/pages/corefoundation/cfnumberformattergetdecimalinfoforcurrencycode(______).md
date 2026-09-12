> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattergetdecimalinfoforcurrencycode(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattergetdecimalinfoforcurrencycode(_:_:_:))

# CFNumberFormatterGetDecimalInfoForCurrencyCode(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.

## Declaration

```swift
func CFNumberFormatterGetDecimalInfoForCurrencyCode(_ currencyCode: CFString!, _ defaultFractionDigits: UnsafeMutablePointer<Int32>!, _ roundingIncrement: UnsafeMutablePointer<Double>!) -> Bool
```

## Parameters

- `currencyCode`: A string containing a ISO 4217 3-letter currency code. For example, AUD for Australian Dollars, EUR for Euros.
- `defaultFractionDigits`: Upon return, contains the number of fraction digits that should be displayed for the currency specified by `currencyCode`.
- `roundingIncrement`: Upon return, contains the rounding increment for the currency specified by `currencyCode`, or `0.0` if no rounding is done by the currency.

<a id="return-value"></a>

## Return Value

`true` if the information was obtained successfully, otherwise `false` (for example, if the currency code is unknown or the information is not available).

<a id="Discussion"></a>

## Discussion

The returned values are not localized because these are properties of the currency.

## See Also

### Formatting Values

- [CFNumberFormatterCreateNumberFromString(\_:\_:\_:\_:\_:)](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithNumber(\_:\_:\_:)](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterCreateStringWithValue(\_:\_:\_:\_:)](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetValueFromString(\_:\_:\_:\_:\_:)](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.

# CFNumberFormatterGetDecimalInfoForCurrencyCode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.

## Declaration

```objectivec
extern Boolean CFNumberFormatterGetDecimalInfoForCurrencyCode(CFStringRef currencyCode, int32_t *defaultFractionDigits, double *roundingIncrement);
```

## Parameters

- `currencyCode`: A string containing a ISO 4217 3-letter currency code. For example, AUD for Australian Dollars, EUR for Euros.
- `defaultFractionDigits`: Upon return, contains the number of fraction digits that should be displayed for the currency specified by `currencyCode`.
- `roundingIncrement`: Upon return, contains the rounding increment for the currency specified by `currencyCode`, or `0.0` if no rounding is done by the currency.

<a id="return-value"></a>

## Return Value

`true` if the information was obtained successfully, otherwise `false` (for example, if the currency code is unknown or the information is not available).

<a id="Discussion"></a>

## Discussion

The returned values are not localized because these are properties of the currency.

## See Also

### Formatting Values

- [CFNumberFormatterCreateNumberFromString](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithNumber](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterCreateStringWithValue](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetValueFromString](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.
