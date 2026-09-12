> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/compare(_:)](https://developer.apple.com/documentation/foundation/nsstring/compare(_:))

# compare(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of invoking [compare(\_:options:range:)](compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.

## Declaration

```swift
func compare(_ string: String) -> ComparisonResult
```

## Parameters

- `string`: The string with which to compare the receiver.

  This value must not be `nil`. If this value is `nil`, the behavior is undefined and may change in future versions of macOS.

<a id="return-value"></a>

## Return Value

Returns an [ComparisonResult](../comparisonresult.md) value that indicates the lexical ordering. [ComparisonResult.orderedAscending](../comparisonresult/orderedascending.md) the receiver precedes `aString` in lexical ordering, [ComparisonResult.orderedSame](../comparisonresult/orderedsame.md) the receiver and `aString` are equivalent in lexical value, and [ComparisonResult.orderedDescending](../comparisonresult/ordereddescending.md) if the receiver follows `aString`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [compare(\_:options:range:)](compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.

> **Important**

>  When working with text that’s presented to the user, use the [localizedStandardCompare(\_:)](localizedstandardcompare%28__%29.md) method instead.

## See Also

### Identifying and Comparing Strings

- [caseInsensitiveCompare(\_:)](caseinsensitivecompare%28__%29.md): Returns the result of invoking [compare(\_:options:)](compare%28__options_%29.md) with `NSCaseInsensitiveSearch` as the only option.
- [localizedCaseInsensitiveCompare(\_:)](localizedcaseinsensitivecompare%28__%29.md): Compares the string with a given string using a case-insensitive, localized, comparison.
- [localizedCompare(\_:)](localizedcompare%28__%29.md): Compares the string and a given string using a localized comparison.
- [compare(\_:options:)](compare%28__options_%29.md): Compares the string with the specified string using the given options.
- [compare(\_:options:range:)](compare%28__options_range_%29.md): Returns the result of invoking [compare(\_:options:range:locale:)](compare%28__options_range_locale_%29.md) with a `nil` locale.
- [compare(\_:options:range:locale:)](compare%28__options_range_locale_%29.md): Compares the string using the specified options and returns the lexical ordering for the range.
- [localizedStandardCompare(\_:)](localizedstandardcompare%28__%29.md): Compares strings as sorted by the Finder.
- [hasPrefix(\_:)](hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
- [hasSuffix(\_:)](hassuffix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the ending characters of the receiver.
- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given string is equal to the receiver using a literal Unicode-based comparison.
- [hash](hash.md): An unsigned integer that can be used as a hash table address.
- [NSString.CompareOptions](compareoptions.md): These values represent the options available to many of the string classes’ search and comparison methods.
- [NSString.EncodingConversionOptions](encodingconversionoptions.md): Options for converting string encodings.

# compare: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of invoking [compare:options:range:](compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.

## Declaration

```objectivec
- (NSComparisonResult) compare:(NSString *) string;
```

## Parameters

- `string`: The string with which to compare the receiver.

  This value must not be `nil`. If this value is `nil`, the behavior is undefined and may change in future versions of macOS.

<a id="return-value"></a>

## Return Value

Returns an [NSComparisonResult](../comparisonresult.md) value that indicates the lexical ordering. [NSOrderedAscending](../comparisonresult/orderedascending.md) the receiver precedes `aString` in lexical ordering, [NSOrderedSame](../comparisonresult/orderedsame.md) the receiver and `aString` are equivalent in lexical value, and [NSOrderedDescending](../comparisonresult/ordereddescending.md) if the receiver follows `aString`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [compare:options:range:](compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.

> **Important**

>  When working with text that’s presented to the user, use the [localizedStandardCompare:](localizedstandardcompare%28__%29.md) method instead.

## See Also

### Identifying and Comparing Strings

- [caseInsensitiveCompare:](caseinsensitivecompare%28__%29.md): Returns the result of invoking [compare:options:](compare%28__options_%29.md) with `NSCaseInsensitiveSearch` as the only option.
- [localizedCaseInsensitiveCompare:](localizedcaseinsensitivecompare%28__%29.md): Compares the string with a given string using a case-insensitive, localized, comparison.
- [localizedCompare:](localizedcompare%28__%29.md): Compares the string and a given string using a localized comparison.
- [compare:options:](compare%28__options_%29.md): Compares the string with the specified string using the given options.
- [compare:options:range:](compare%28__options_range_%29.md): Returns the result of invoking [compare:options:range:locale:](compare%28__options_range_locale_%29.md) with a `nil` locale.
- [compare:options:range:locale:](compare%28__options_range_locale_%29.md): Compares the string using the specified options and returns the lexical ordering for the range.
- [localizedStandardCompare:](localizedstandardcompare%28__%29.md): Compares strings as sorted by the Finder.
- [hasPrefix:](hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
- [hasSuffix:](hassuffix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the ending characters of the receiver.
- [isEqualToString:](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given string is equal to the receiver using a literal Unicode-based comparison.
- [hash](hash.md): An unsigned integer that can be used as a hash table address.
- [NSStringCompareOptions](compareoptions.md): These values represent the options available to many of the string classes’ search and comparison methods.
- [NSStringEncodingConversionOptions](encodingconversionoptions.md): Options for converting string encodings.
