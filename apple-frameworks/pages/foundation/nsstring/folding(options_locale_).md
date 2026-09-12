> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/folding(options:locale:)](https://developer.apple.com/documentation/foundation/nsstring/folding(options:locale:))

# folding(options:locale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a string suitable for comparison by removing the specified character distinctions from a string.

## Declaration

```swift
func folding(options: NSString.CompareOptions = [], locale: Locale?) -> String
```

## Parameters

- `options`: Any combination of the  [caseInsensitive](compareoptions/caseinsensitive.md), [widthInsensitive](compareoptions/widthinsensitive.md), and [diacriticInsensitive](compareoptions/diacriticinsensitive.md) comparison options.
- `locale`: The locale to use for the folding operation. Pass `nil` to use the system locale.

<a id="return-value"></a>

## Return Value

A string created by performing a character folding operation with the specified options and locale.

<a id="Discussion"></a>

## Discussion

When working with text—especially text in Latin script—it’s often useful to compare strings in such a way that ignores differences in case (uppercase or lowercase), width (full-width or half-width), and/or diacritics (accents and other marks).

To accomplish this, you may use one of the methods described in Identifying and Comparing Strings, passing one or more options specified by the [NSString.CompareOptions](compareoptions.md) type as appropriate. If you’re performing many such comparisons, you may instead, as an optimization, perform a single folding operation on the string and store the result, passing that into a more efficient comparison method. For example, if you were determining the case-insensitive (that is, “HELLO”, “hello”, and “Hello” are all considered equal) intersection of two sets of strings, instead of calling the [localizedCaseInsensitiveCompare(\_:)](localizedcaseinsensitivecompare%28__%29.md) method for each pair of strings, you might first normalize both sets of strings by calling the [folding(options:locale:)](folding%28options_locale_%29.md) method, passing the [caseInsensitive](compareoptions/caseinsensitive.md) option and the current locale, and then compare each pair of folded strings using the [isEqual(to:)](isequal%28to_%29.md) method.

> **Tip**

>  Character folding operations using the [folding(options:locale:)](folding%28options_locale_%29.md) method are often more performant than the equivalent string transform using the [applyingTransform(\_:reverse:)](applyingtransform%28__reverse_%29.md) method.

Rules for how characters are folded may vary, depending on the locale. For example, when folding a string containing the character “I” (`U+0049` `LATIN CAPITAL LETTER I`) and specifying the [caseInsensitive](compareoptions/caseinsensitive.md) comparison option, an English-speaking locale returns “i” (`U+0069` `LATIN SMALL LETTER I`), and a Turkish-speaking locale returns “ı” (`U+0131 LATIN SMALL DOTLESS I`).

> **Note**

>  The result of character folding operations may not be suitable for display to users, and should be used only for internal processing.

# stringByFoldingWithOptions:locale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a string suitable for comparison by removing the specified character distinctions from a string.

## Declaration

```objectivec
- (NSString *) stringByFoldingWithOptions:(NSStringCompareOptions) options locale:(NSLocale *) locale;
```

## Parameters

- `options`: Any combination of the  [NSCaseInsensitiveSearch](compareoptions/caseinsensitive.md), [NSWidthInsensitiveSearch](compareoptions/widthinsensitive.md), and [NSDiacriticInsensitiveSearch](compareoptions/diacriticinsensitive.md) comparison options.
- `locale`: The locale to use for the folding operation. Pass `nil` to use the system locale.

<a id="return-value"></a>

## Return Value

A string created by performing a character folding operation with the specified options and locale.

<a id="Discussion"></a>

## Discussion

When working with text—especially text in Latin script—it’s often useful to compare strings in such a way that ignores differences in case (uppercase or lowercase), width (full-width or half-width), and/or diacritics (accents and other marks).

To accomplish this, you may use one of the methods described in Identifying and Comparing Strings, passing one or more options specified by the [NSStringCompareOptions](compareoptions.md) type as appropriate. If you’re performing many such comparisons, you may instead, as an optimization, perform a single folding operation on the string and store the result, passing that into a more efficient comparison method. For example, if you were determining the case-insensitive (that is, “HELLO”, “hello”, and “Hello” are all considered equal) intersection of two sets of strings, instead of calling the [localizedCaseInsensitiveCompare:](localizedcaseinsensitivecompare%28__%29.md) method for each pair of strings, you might first normalize both sets of strings by calling the [stringByFoldingWithOptions:locale:](folding%28options_locale_%29.md) method, passing the [NSCaseInsensitiveSearch](compareoptions/caseinsensitive.md) option and the current locale, and then compare each pair of folded strings using the [isEqualToString:](isequal%28to_%29.md) method.

> **Tip**

>  Character folding operations using the [stringByFoldingWithOptions:locale:](folding%28options_locale_%29.md) method are often more performant than the equivalent string transform using the [stringByApplyingTransform:reverse:](applyingtransform%28__reverse_%29.md) method.

Rules for how characters are folded may vary, depending on the locale. For example, when folding a string containing the character “I” (`U+0049` `LATIN CAPITAL LETTER I`) and specifying the [NSCaseInsensitiveSearch](compareoptions/caseinsensitive.md) comparison option, an English-speaking locale returns “i” (`U+0069` `LATIN SMALL LETTER I`), and a Turkish-speaking locale returns “ı” (`U+0131 LATIN SMALL DOTLESS I`).

> **Note**

>  The result of character folding operations may not be suitable for display to users, and should be used only for internal processing.
