> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter](https://developer.apple.com/documentation/foundation/numberformatter)

# NumberFormatter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that converts between numeric values and their textual representations.

## Declaration

```swift
class NumberFormatter
```

<a id="overview"></a>

## Overview

Instances of [NumberFormatter](numberformatter.md) format the textual representation of cells that contain [NSNumber](nsnumber.md) objects and convert textual representations of numeric values into [NSNumber](nsnumber.md) objects. The representation encompasses integers, floats, and doubles; floats and doubles can be formatted to a specified decimal position. [NumberFormatter](numberformatter.md) objects can also impose ranges on the numeric values cells can accept.

> **Tip**

>  In Swift, you can use [IntegerFormatStyle](integerformatstyle.md), [FloatingPointFormatStyle](floatingpointformatstyle.md), or [Decimal.FormatStyle](decimal/formatstyle.md) rather than [NumberFormatter](numberformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

<a id="Significant-Digits-and-Fraction-Digits"></a>

### Significant Digits and Fraction Digits

The [NumberFormatter](numberformatter.md) class provides flexible options for displaying non-zero fractional parts of numbers.

If you set the [usesSignificantDigits](numberformatter/usessignificantdigits.md) property to [true](https://developer.apple.com/documentation/swift/true), you can configure [NumberFormatter](numberformatter.md) to display significant digits using the [minimumSignificantDigits](numberformatter/minimumsignificantdigits.md) and [maximumSignificantDigits](numberformatter/maximumsignificantdigits.md) properties. If [usesSignificantDigits](numberformatter/usessignificantdigits.md) is [false](https://developer.apple.com/documentation/swift/false), these properties are ignored. See Configuring Significant Digits.

Otherwise, you can configure the minimum and maximum number of integer and fraction digits, or the numbers before and after the decimal separator, respectively, using the [minimumIntegerDigits](numberformatter/minimumintegerdigits.md), [maximumIntegerDigits](numberformatter/maximumintegerdigits.md), [minimumFractionDigits](numberformatter/minimumfractiondigits.md), and [maximumFractionDigits](numberformatter/maximumfractiondigits.md) properties. See Configuring Integer and Fraction Digits.

<a id="Thread-Safety"></a>

### Thread Safety

On iOS 7 and later [NumberFormatter](numberformatter.md) is thread-safe.

In macOS 10.9 and later [NumberFormatter](numberformatter.md) is thread-safe so long as you are using the modern behavior in a 64-bit app.

On earlier versions of the operating system, or when using the legacy formatter behavior or running in 32-bit in macOS, [NumberFormatter](numberformatter.md) is not thread-safe, and you therefore must not mutate a number formatter simultaneously from multiple threads.

## Topics

### Configuring Formatter Behavior and Style

- [formatterBehavior](numberformatter/formatterbehavior.md): The formatter behavior of the receiver.
- [setDefaultFormatterBehavior(\_:)](numberformatter/setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [defaultFormatterBehavior()](numberformatter/defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [numberStyle](numberformatter/numberstyle.md): The number style used by the receiver.
- [generatesDecimalNumbers](numberformatter/generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](nsdecimalnumber.md) when it converts strings to number objects.

### Converting Between Numbers and Strings

- [getObjectValue(\_:for:range:)](numberformatter/getobjectvalue%28__for_range_%29.md): Returns by reference a cell-content object after creating it from a range of characters in a given string.
- [number(from:)](numberformatter/number%28from_%29.md): Returns an [NSNumber](nsnumber.md) object created by parsing a given string.
- [string(from:)](numberformatter/string%28from_%29.md): Returns a string containing the formatted value of the provided number object.
- [localizedString(from:number:)](numberformatter/localizedstring%28from_number_%29.md): Returns a localized number string with the specified style.

### Managing Localization of Numbers

- [localizesFormat](numberformatter/localizesformat.md): Determines whether the dollar sign character (`$`), decimal separator character (`.`), and thousand separator character (`,`) are converted to appropriately localized characters as specified by the user’s localization preference.
- [locale](numberformatter/locale.md): The locale of the receiver.

### Configuring Rounding Behavior

- [roundingBehavior](numberformatter/roundingbehavior.md): The rounding behavior used by the receiver.
- [NSDecimalNumberHandler](nsdecimalnumberhandler.md): A class that adopts the decimal number behaviors protocol.
- [roundingIncrement](numberformatter/roundingincrement.md): The rounding increment used by the receiver.
- [roundingMode](numberformatter/roundingmode-swift.property.md): The rounding mode used by the receiver.

### Configuring Integer and Fraction Digits

- [minimumIntegerDigits](numberformatter/minimumintegerdigits.md): The minimum number of digits before the decimal separator.
- [maximumIntegerDigits](numberformatter/maximumintegerdigits.md): The maximum number of digits before the decimal separator.
- [minimumFractionDigits](numberformatter/minimumfractiondigits.md): The minimum number of digits after the decimal separator.
- [maximumFractionDigits](numberformatter/maximumfractiondigits.md): The maximum number of digits after the decimal separator.

### Configuring Significant Digits

- [usesSignificantDigits](numberformatter/usessignificantdigits.md): A Boolean value indicating whether the formatter uses minimum and maximum significant digits when formatting numbers.
- [minimumSignificantDigits](numberformatter/minimumsignificantdigits.md): The minimum number of significant digits for the number formatter.
- [maximumSignificantDigits](numberformatter/maximumsignificantdigits.md): The maximum number of significant digits for the number formatter.

### Configuring Numeric Formats

- [format](numberformatter/format.md): The receiver’s format.
- [formattingContext](numberformatter/formattingcontext.md): The capitalization formatting context used when formatting a number.
- [formatWidth](numberformatter/formatwidth.md): The format width used by the receiver.
- [negativeFormat](numberformatter/negativeformat.md): The format the receiver uses to display negative values.
- [positiveFormat](numberformatter/positiveformat.md): The format the receiver uses to display positive values.
- [multiplier](numberformatter/multiplier.md): The multiplier of the receiver.

### Configuring Numeric Symbols

- [percentSymbol](numberformatter/percentsymbol.md): The string used to represent a percent symbol.
- [perMillSymbol](numberformatter/permillsymbol.md): The string used to represent a per-mill (per-thousand) symbol.
- [minusSign](numberformatter/minussign.md): The string used to represent a minus sign.
- [plusSign](numberformatter/plussign.md): The string used to represent a plus sign.
- [exponentSymbol](numberformatter/exponentsymbol.md): The string used to represent an exponent symbol.
- [zeroSymbol](numberformatter/zerosymbol.md): The string used to represent a zero value.
- [nilSymbol](numberformatter/nilsymbol.md): The string used to represent a `nil` value.
- [notANumberSymbol](numberformatter/notanumbersymbol.md): The string used to represent a NaN (“not a number”) value.
- [negativeInfinitySymbol](numberformatter/negativeinfinitysymbol.md): The string used to represent a negative infinity symbol.
- [positiveInfinitySymbol](numberformatter/positiveinfinitysymbol.md): The string used to represent a positive infinity symbol.

### Configuring the Format of Currency

- [currencySymbol](numberformatter/currencysymbol.md): The string used by the receiver as a local currency symbol.
- [currencyCode](numberformatter/currencycode.md): The receiver’s currency code.
- [internationalCurrencySymbol](numberformatter/internationalcurrencysymbol.md): The international currency symbol used by the receiver.
- [currencyGroupingSeparator](numberformatter/currencygroupingseparator.md): The currency grouping separator for the receiver.

### Configuring Numeric Prefixes and Suffixes

- [positivePrefix](numberformatter/positiveprefix.md): The string the receiver uses as the prefix for positive values.
- [positiveSuffix](numberformatter/positivesuffix.md): The string the receiver uses as the suffix for positive values.
- [negativePrefix](numberformatter/negativeprefix.md): The string the receiver uses as a prefix for negative values.
- [negativeSuffix](numberformatter/negativesuffix.md): The string the receiver uses as a suffix for negative values.

### Configuring the Display of Numeric Values

- [textAttributesForNegativeValues](numberformatter/textattributesfornegativevalues.md): The text attributes to be used in displaying negative values.
- [textAttributesForPositiveValues](numberformatter/textattributesforpositivevalues.md): The text attributes to be used in displaying positive values.
- [attributedStringForZero](numberformatter/attributedstringforzero.md): The attributed string that the receiver uses to display zero values.
- [textAttributesForZero](numberformatter/textattributesforzero.md): The text attributes used to display a zero value.
- [attributedStringForNil](numberformatter/attributedstringfornil.md): The attributed string the receiver uses to display `nil` values.
- [textAttributesForNil](numberformatter/textattributesfornil.md): The text attributes used to display the `nil` symbol.
- [attributedStringForNotANumber](numberformatter/attributedstringfornotanumber.md): The attributed string the receiver uses to display “not a number” values.
- [textAttributesForNotANumber](numberformatter/textattributesfornotanumber.md): The text attributes used to display the NaN (“not a number”) string.
- [textAttributesForPositiveInfinity](numberformatter/textattributesforpositiveinfinity.md): The text attributes used to display the positive infinity symbol.
- [textAttributesForNegativeInfinity](numberformatter/textattributesfornegativeinfinity.md): The text attributes used to display the negative infinity symbol.

### Configuring Separators and Grouping Size

- [groupingSeparator](numberformatter/groupingseparator.md): The string used by the receiver for a grouping separator.
- [usesGroupingSeparator](numberformatter/usesgroupingseparator.md): Determines whether the receiver displays the group separator.
- [thousandSeparator](numberformatter/thousandseparator.md): The character the receiver uses as a thousand separator.
- [hasThousandSeparators](numberformatter/hasthousandseparators.md): Determines whether the receiver uses thousand separators.
- [decimalSeparator](numberformatter/decimalseparator.md): The character the receiver uses as a decimal separator.
- [alwaysShowsDecimalSeparator](numberformatter/alwaysshowsdecimalseparator.md): Determines whether the receiver always shows the decimal separator, even for integer numbers.
- [currencyDecimalSeparator](numberformatter/currencydecimalseparator.md): The string used by the receiver as a currency decimal separator.
- [groupingSize](numberformatter/groupingsize.md): The grouping size of the receiver.
- [secondaryGroupingSize](numberformatter/secondarygroupingsize.md): The secondary grouping size of the receiver.

### Managing the Padding of Numbers

- [paddingCharacter](numberformatter/paddingcharacter.md): The string that the receiver uses to pad numbers in the formatted string representation.
- [paddingPosition](numberformatter/paddingposition.md): The padding position used by the receiver.

### Managing Input and Output Attributes

- [allowsFloats](numberformatter/allowsfloats.md): Determines whether the receiver allows as input floating-point values (that is, values that include the period character \[`.`\]).
- [minimum](numberformatter/minimum.md): The lowest number allowed as input by the receiver.
- [maximum](numberformatter/maximum.md): The highest number allowed as input by the receiver.

### Managing Leniency Behavior

- [isLenient](numberformatter/islenient.md): Determines whether the receiver will use heuristics to guess at the number which is intended by a string.

### Managing the Validation of Partial Numeric Strings

- [isPartialStringValidationEnabled](numberformatter/ispartialstringvalidationenabled.md): Determines whether partial string validation is enabled for the receiver.

### Constants

- [NumberFormatter.Style](numberformatter/style.md): The predefined number format styles used by the [numberStyle](numberformatter/numberstyle.md) property.
- [NumberFormatter.Behavior](numberformatter/behavior.md): These constants specify the behavior of a number formatter. These constants are returned by the [defaultFormatterBehavior()](numberformatter/defaultformatterbehavior%28%29.md) class method and the [formatterBehavior](numberformatter/formatterbehavior.md) property.
- [NumberFormatter.PadPosition](numberformatter/padposition.md): These constants are used to specify how numbers should be padded. These constants are used by the [paddingPosition](numberformatter/paddingposition.md) property.
- [NumberFormatter.RoundingMode](numberformatter/roundingmode-swift.enum.md): These constants are used to specify how numbers should be rounded. These constants are used by the [roundingMode](numberformatter/roundingmode-swift.property.md) property.

### Instance Properties

- [minimumGroupingDigits](numberformatter/minimumgroupingdigits.md): See \\c kCFNumberFormatterMinGroupingDigits in \\c CFNumberFormatter for an explanation on how minimum grouping digits is used.

## Relationships

### Inherits From

- [Formatter](formatter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSNumberFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A formatter that converts between numeric values and their textual representations.

## Declaration

```objectivec
@interface NSNumberFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

Instances of [NSNumberFormatter](numberformatter.md) format the textual representation of cells that contain [NSNumber](nsnumber.md) objects and convert textual representations of numeric values into [NSNumber](nsnumber.md) objects. The representation encompasses integers, floats, and doubles; floats and doubles can be formatted to a specified decimal position. [NSNumberFormatter](numberformatter.md) objects can also impose ranges on the numeric values cells can accept.

> **Tip**

>  In Swift, you can use [IntegerFormatStyle](integerformatstyle.md), [FloatingPointFormatStyle](floatingpointformatstyle.md), or [Decimal.FormatStyle](decimal/formatstyle.md) rather than [NSNumberFormatter](numberformatter.md). The [FormatStyle](formatstyle.md) API offers a declarative idiom for customizing the formatting of various types. Also, Foundation caches identical [FormatStyle](formatstyle.md) instances, so you don’t need to pass them around your app, or risk wasting memory with duplicate formatters.

<a id="Significant-Digits-and-Fraction-Digits"></a>

### Significant Digits and Fraction Digits

The [NSNumberFormatter](numberformatter.md) class provides flexible options for displaying non-zero fractional parts of numbers.

If you set the [usesSignificantDigits](numberformatter/usessignificantdigits.md) property to [true](https://developer.apple.com/documentation/swift/true), you can configure [NSNumberFormatter](numberformatter.md) to display significant digits using the [minimumSignificantDigits](numberformatter/minimumsignificantdigits.md) and [maximumSignificantDigits](numberformatter/maximumsignificantdigits.md) properties. If [usesSignificantDigits](numberformatter/usessignificantdigits.md) is [false](https://developer.apple.com/documentation/swift/false), these properties are ignored. See Configuring Significant Digits.

Otherwise, you can configure the minimum and maximum number of integer and fraction digits, or the numbers before and after the decimal separator, respectively, using the [minimumIntegerDigits](numberformatter/minimumintegerdigits.md), [maximumIntegerDigits](numberformatter/maximumintegerdigits.md), [minimumFractionDigits](numberformatter/minimumfractiondigits.md), and [maximumFractionDigits](numberformatter/maximumfractiondigits.md) properties. See Configuring Integer and Fraction Digits.

<a id="Thread-Safety"></a>

### Thread Safety

On iOS 7 and later [NSNumberFormatter](numberformatter.md) is thread-safe.

In macOS 10.9 and later [NSNumberFormatter](numberformatter.md) is thread-safe so long as you are using the modern behavior in a 64-bit app.

On earlier versions of the operating system, or when using the legacy formatter behavior or running in 32-bit in macOS, [NSNumberFormatter](numberformatter.md) is not thread-safe, and you therefore must not mutate a number formatter simultaneously from multiple threads.

## Topics

### Configuring Formatter Behavior and Style

- [formatterBehavior](numberformatter/formatterbehavior.md): The formatter behavior of the receiver.
- [setDefaultFormatterBehavior:](numberformatter/setdefaultformatterbehavior%28__%29.md): Sets the default formatter behavior for new instances of `NSNumberFormatter` .
- [defaultFormatterBehavior](numberformatter/defaultformatterbehavior%28%29.md): Returns an `NSNumberFormatterBehavior` constant that indicates default formatter behavior for new instances of `NSNumberFormatter`.
- [numberStyle](numberformatter/numberstyle.md): The number style used by the receiver.
- [generatesDecimalNumbers](numberformatter/generatesdecimalnumbers.md): Determines whether the receiver creates instances of [NSDecimalNumber](nsdecimalnumber.md) when it converts strings to number objects.

### Converting Between Numbers and Strings

- [getObjectValue:forString:range:error:](numberformatter/getobjectvalue%28__for_range_%29.md): Returns by reference a cell-content object after creating it from a range of characters in a given string.
- [numberFromString:](numberformatter/number%28from_%29.md): Returns an [NSNumber](nsnumber.md) object created by parsing a given string.
- [stringFromNumber:](numberformatter/string%28from_%29.md): Returns a string containing the formatted value of the provided number object.
- [localizedStringFromNumber:numberStyle:](numberformatter/localizedstring%28from_number_%29.md): Returns a localized number string with the specified style.

### Managing Localization of Numbers

- [localizesFormat](numberformatter/localizesformat.md): Determines whether the dollar sign character (`$`), decimal separator character (`.`), and thousand separator character (`,`) are converted to appropriately localized characters as specified by the user’s localization preference.
- [locale](numberformatter/locale.md): The locale of the receiver.

### Configuring Rounding Behavior

- [roundingBehavior](numberformatter/roundingbehavior.md): The rounding behavior used by the receiver.
- [NSDecimalNumberHandler](nsdecimalnumberhandler.md): A class that adopts the decimal number behaviors protocol.
- [roundingIncrement](numberformatter/roundingincrement.md): The rounding increment used by the receiver.
- [roundingMode](numberformatter/roundingmode-swift.property.md): The rounding mode used by the receiver.

### Configuring Integer and Fraction Digits

- [minimumIntegerDigits](numberformatter/minimumintegerdigits.md): The minimum number of digits before the decimal separator.
- [maximumIntegerDigits](numberformatter/maximumintegerdigits.md): The maximum number of digits before the decimal separator.
- [minimumFractionDigits](numberformatter/minimumfractiondigits.md): The minimum number of digits after the decimal separator.
- [maximumFractionDigits](numberformatter/maximumfractiondigits.md): The maximum number of digits after the decimal separator.

### Configuring Significant Digits

- [usesSignificantDigits](numberformatter/usessignificantdigits.md): A Boolean value indicating whether the formatter uses minimum and maximum significant digits when formatting numbers.
- [minimumSignificantDigits](numberformatter/minimumsignificantdigits.md): The minimum number of significant digits for the number formatter.
- [maximumSignificantDigits](numberformatter/maximumsignificantdigits.md): The maximum number of significant digits for the number formatter.

### Configuring Numeric Formats

- [format](numberformatter/format.md): The receiver’s format.
- [formattingContext](numberformatter/formattingcontext.md): The capitalization formatting context used when formatting a number.
- [formatWidth](numberformatter/formatwidth.md): The format width used by the receiver.
- [negativeFormat](numberformatter/negativeformat.md): The format the receiver uses to display negative values.
- [positiveFormat](numberformatter/positiveformat.md): The format the receiver uses to display positive values.
- [multiplier](numberformatter/multiplier.md): The multiplier of the receiver.

### Configuring Numeric Symbols

- [percentSymbol](numberformatter/percentsymbol.md): The string used to represent a percent symbol.
- [perMillSymbol](numberformatter/permillsymbol.md): The string used to represent a per-mill (per-thousand) symbol.
- [minusSign](numberformatter/minussign.md): The string used to represent a minus sign.
- [plusSign](numberformatter/plussign.md): The string used to represent a plus sign.
- [exponentSymbol](numberformatter/exponentsymbol.md): The string used to represent an exponent symbol.
- [zeroSymbol](numberformatter/zerosymbol.md): The string used to represent a zero value.
- [nilSymbol](numberformatter/nilsymbol.md): The string used to represent a `nil` value.
- [notANumberSymbol](numberformatter/notanumbersymbol.md): The string used to represent a NaN (“not a number”) value.
- [negativeInfinitySymbol](numberformatter/negativeinfinitysymbol.md): The string used to represent a negative infinity symbol.
- [positiveInfinitySymbol](numberformatter/positiveinfinitysymbol.md): The string used to represent a positive infinity symbol.

### Configuring the Format of Currency

- [currencySymbol](numberformatter/currencysymbol.md): The string used by the receiver as a local currency symbol.
- [currencyCode](numberformatter/currencycode.md): The receiver’s currency code.
- [internationalCurrencySymbol](numberformatter/internationalcurrencysymbol.md): The international currency symbol used by the receiver.
- [currencyGroupingSeparator](numberformatter/currencygroupingseparator.md): The currency grouping separator for the receiver.

### Configuring Numeric Prefixes and Suffixes

- [positivePrefix](numberformatter/positiveprefix.md): The string the receiver uses as the prefix for positive values.
- [positiveSuffix](numberformatter/positivesuffix.md): The string the receiver uses as the suffix for positive values.
- [negativePrefix](numberformatter/negativeprefix.md): The string the receiver uses as a prefix for negative values.
- [negativeSuffix](numberformatter/negativesuffix.md): The string the receiver uses as a suffix for negative values.

### Configuring the Display of Numeric Values

- [textAttributesForNegativeValues](numberformatter/textattributesfornegativevalues.md): The text attributes to be used in displaying negative values.
- [textAttributesForPositiveValues](numberformatter/textattributesforpositivevalues.md): The text attributes to be used in displaying positive values.
- [attributedStringForZero](numberformatter/attributedstringforzero.md): The attributed string that the receiver uses to display zero values.
- [textAttributesForZero](numberformatter/textattributesforzero.md): The text attributes used to display a zero value.
- [attributedStringForNil](numberformatter/attributedstringfornil.md): The attributed string the receiver uses to display `nil` values.
- [textAttributesForNil](numberformatter/textattributesfornil.md): The text attributes used to display the `nil` symbol.
- [attributedStringForNotANumber](numberformatter/attributedstringfornotanumber.md): The attributed string the receiver uses to display “not a number” values.
- [textAttributesForNotANumber](numberformatter/textattributesfornotanumber.md): The text attributes used to display the NaN (“not a number”) string.
- [textAttributesForPositiveInfinity](numberformatter/textattributesforpositiveinfinity.md): The text attributes used to display the positive infinity symbol.
- [textAttributesForNegativeInfinity](numberformatter/textattributesfornegativeinfinity.md): The text attributes used to display the negative infinity symbol.

### Configuring Separators and Grouping Size

- [groupingSeparator](numberformatter/groupingseparator.md): The string used by the receiver for a grouping separator.
- [usesGroupingSeparator](numberformatter/usesgroupingseparator.md): Determines whether the receiver displays the group separator.
- [thousandSeparator](numberformatter/thousandseparator.md): The character the receiver uses as a thousand separator.
- [hasThousandSeparators](numberformatter/hasthousandseparators.md): Determines whether the receiver uses thousand separators.
- [decimalSeparator](numberformatter/decimalseparator.md): The character the receiver uses as a decimal separator.
- [alwaysShowsDecimalSeparator](numberformatter/alwaysshowsdecimalseparator.md): Determines whether the receiver always shows the decimal separator, even for integer numbers.
- [currencyDecimalSeparator](numberformatter/currencydecimalseparator.md): The string used by the receiver as a currency decimal separator.
- [groupingSize](numberformatter/groupingsize.md): The grouping size of the receiver.
- [secondaryGroupingSize](numberformatter/secondarygroupingsize.md): The secondary grouping size of the receiver.

### Managing the Padding of Numbers

- [paddingCharacter](numberformatter/paddingcharacter.md): The string that the receiver uses to pad numbers in the formatted string representation.
- [paddingPosition](numberformatter/paddingposition.md): The padding position used by the receiver.

### Managing Input and Output Attributes

- [allowsFloats](numberformatter/allowsfloats.md): Determines whether the receiver allows as input floating-point values (that is, values that include the period character \[`.`\]).
- [minimum](numberformatter/minimum.md): The lowest number allowed as input by the receiver.
- [maximum](numberformatter/maximum.md): The highest number allowed as input by the receiver.

### Managing Leniency Behavior

- [lenient](numberformatter/islenient.md): Determines whether the receiver will use heuristics to guess at the number which is intended by a string.

### Managing the Validation of Partial Numeric Strings

- [partialStringValidationEnabled](numberformatter/ispartialstringvalidationenabled.md): Determines whether partial string validation is enabled for the receiver.

### Constants

- [NSNumberFormatterStyle](numberformatter/style.md): The predefined number format styles used by the [numberStyle](numberformatter/numberstyle.md) property.
- [NSNumberFormatterBehavior](numberformatter/behavior.md): These constants specify the behavior of a number formatter. These constants are returned by the [defaultFormatterBehavior](numberformatter/defaultformatterbehavior%28%29.md) class method and the [formatterBehavior](numberformatter/formatterbehavior.md) property.
- [NSNumberFormatterPadPosition](numberformatter/padposition.md): These constants are used to specify how numbers should be padded. These constants are used by the [paddingPosition](numberformatter/paddingposition.md) property.
- [NSNumberFormatterRoundingMode](numberformatter/roundingmode-swift.enum.md): These constants are used to specify how numbers should be rounded. These constants are used by the [roundingMode](numberformatter/roundingmode-swift.property.md) property.

### Instance Properties

- [minimumGroupingDigits](numberformatter/minimumgroupingdigits.md): See \\c kCFNumberFormatterMinGroupingDigits in \\c CFNumberFormatter for an explanation on how minimum grouping digits is used.

## Relationships

### Inherits From

- [NSFormatter](formatter.md)
