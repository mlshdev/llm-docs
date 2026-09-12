> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/compare(_:options:range:locale:)](https://developer.apple.com/documentation/foundation/nsstring/compare(_:options:range:locale:))

# compare(\_:options:range:locale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares the string using the specified options and returns the lexical ordering for the range.

## Declaration

```swift
func compare(_ string: String, options mask: NSString.CompareOptions = [], range rangeOfReceiverToCompare: NSRange, locale: Any?) -> ComparisonResult
```

## Parameters

- `string`: The string with which to compare the range of the receiver specified by `range`.

  This value must not be `nil`. If this value is `nil`, the behavior is undefined and may change in future versions of macOS.
- `mask`: Options for the search—you can combine any of the following using a C bitwise OR operator: `NSCaseInsensitiveSearch`, `NSLiteralSearch`, `NSNumericSearch`.

  See [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i) for details on these options.
- `rangeOfReceiverToCompare`: The range of the receiver over which to perform the comparison. The range must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if `range` exceeds the bounds of the receiver.
- `locale`: An instance of [NSLocale](../nslocale.md). To use the current locale, pass \[[NSLocale](../nslocale.md)  [current](../nslocale/current.md)\]. For example, if you are comparing strings to present to the end-user, use the current locale. To use the system locale, pass `nil`.

<a id="return-value"></a>

## Return Value

Returns an [ComparisonResult](../comparisonresult.md) value that indicates the lexical ordering of a specified range within the receiver and a given string. [ComparisonResult.orderedAscending](../comparisonresult/orderedascending.md) if the substring of the receiver given by `range` precedes `aString` in lexical ordering for the locale given in `dict`, [ComparisonResult.orderedSame](../comparisonresult/orderedsame.md) if the substring of the receiver and `aString` are equivalent in lexical value, and [ComparisonResult.orderedDescending](../comparisonresult/ordereddescending.md) if the substring of the receiver follows `aString`.

<a id="Discussion"></a>

## Discussion

The `locale` argument affects both equality and ordering algorithms. For example, in some locales, accented characters are ordered immediately after the base; other locales order them after “z”.

## See Also

### Identifying and Comparing Strings

- [caseInsensitiveCompare(\_:)](caseinsensitivecompare%28__%29.md): Returns the result of invoking [compare(\_:options:)](compare%28__options_%29.md) with `NSCaseInsensitiveSearch` as the only option.
- [localizedCaseInsensitiveCompare(\_:)](localizedcaseinsensitivecompare%28__%29.md): Compares the string with a given string using a case-insensitive, localized, comparison.
- [compare(\_:)](compare%28__%29.md): Returns the result of invoking [compare(\_:options:range:)](compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.
- [localizedCompare(\_:)](localizedcompare%28__%29.md): Compares the string and a given string using a localized comparison.
- [compare(\_:options:)](compare%28__options_%29.md): Compares the string with the specified string using the given options.
- [compare(\_:options:range:)](compare%28__options_range_%29.md): Returns the result of invoking [compare(\_:options:range:locale:)](compare%28__options_range_locale_%29.md) with a `nil` locale.
- [localizedStandardCompare(\_:)](localizedstandardcompare%28__%29.md): Compares strings as sorted by the Finder.
- [hasPrefix(\_:)](hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
- [hasSuffix(\_:)](hassuffix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the ending characters of the receiver.
- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given string is equal to the receiver using a literal Unicode-based comparison.
- [hash](hash.md): An unsigned integer that can be used as a hash table address.
- [NSString.CompareOptions](compareoptions.md): These values represent the options available to many of the string classes’ search and comparison methods.
- [NSString.EncodingConversionOptions](encodingconversionoptions.md): Options for converting string encodings.

# compare:options:range:locale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares the string using the specified options and returns the lexical ordering for the range.

## Declaration

```objectivec
- (NSComparisonResult) compare:(NSString *) string options:(NSStringCompareOptions) mask range:(NSRange) rangeOfReceiverToCompare locale:(id) locale;
```

## Parameters

- `string`: The string with which to compare the range of the receiver specified by `range`.

  This value must not be `nil`. If this value is `nil`, the behavior is undefined and may change in future versions of macOS.
- `mask`: Options for the search—you can combine any of the following using a C bitwise OR operator: `NSCaseInsensitiveSearch`, `NSLiteralSearch`, `NSNumericSearch`.

  See [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i) for details on these options.
- `rangeOfReceiverToCompare`: The range of the receiver over which to perform the comparison. The range must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if `range` exceeds the bounds of the receiver.
- `locale`: An instance of [NSLocale](../nslocale.md). To use the current locale, pass \[[NSLocale](../nslocale.md)  [currentLocale](../nslocale/current.md)\]. For example, if you are comparing strings to present to the end-user, use the current locale. To use the system locale, pass `nil`.

<a id="return-value"></a>

## Return Value

Returns an [NSComparisonResult](../comparisonresult.md) value that indicates the lexical ordering of a specified range within the receiver and a given string. [NSOrderedAscending](../comparisonresult/orderedascending.md) if the substring of the receiver given by `range` precedes `aString` in lexical ordering for the locale given in `dict`, [NSOrderedSame](../comparisonresult/orderedsame.md) if the substring of the receiver and `aString` are equivalent in lexical value, and [NSOrderedDescending](../comparisonresult/ordereddescending.md) if the substring of the receiver follows `aString`.

<a id="Discussion"></a>

## Discussion

The `locale` argument affects both equality and ordering algorithms. For example, in some locales, accented characters are ordered immediately after the base; other locales order them after “z”.

## See Also

### Identifying and Comparing Strings

- [caseInsensitiveCompare:](caseinsensitivecompare%28__%29.md): Returns the result of invoking [compare:options:](compare%28__options_%29.md) with `NSCaseInsensitiveSearch` as the only option.
- [localizedCaseInsensitiveCompare:](localizedcaseinsensitivecompare%28__%29.md): Compares the string with a given string using a case-insensitive, localized, comparison.
- [compare:](compare%28__%29.md): Returns the result of invoking [compare:options:range:](compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.
- [localizedCompare:](localizedcompare%28__%29.md): Compares the string and a given string using a localized comparison.
- [compare:options:](compare%28__options_%29.md): Compares the string with the specified string using the given options.
- [compare:options:range:](compare%28__options_range_%29.md): Returns the result of invoking [compare:options:range:locale:](compare%28__options_range_locale_%29.md) with a `nil` locale.
- [localizedStandardCompare:](localizedstandardcompare%28__%29.md): Compares strings as sorted by the Finder.
- [hasPrefix:](hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
- [hasSuffix:](hassuffix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the ending characters of the receiver.
- [isEqualToString:](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given string is equal to the receiver using a literal Unicode-based comparison.
- [hash](hash.md): An unsigned integer that can be used as a hash table address.
- [NSStringCompareOptions](compareoptions.md): These values represent the options available to many of the string classes’ search and comparison methods.
- [NSStringEncodingConversionOptions](encodingconversionoptions.md): Options for converting string encodings.
