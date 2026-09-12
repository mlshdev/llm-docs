> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/isequal(to:)](https://developer.apple.com/documentation/foundation/nsstring/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given string is equal to the receiver using a literal Unicode-based comparison.

## Declaration

```swift
func isEqual(to aString: String) -> Bool
```

## Parameters

- `aString`: The string with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aString` is equivalent to the receiver (if they have the same id or if they are `NSOrderedSame` in a literal comparison), otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The comparison uses the canonical representation of strings, which for a particular string is the length of the string plus the UTF-16 code units that make up the string. When this method compares two strings, if the individual Unicodes are the same, then the strings are equal, regardless of the backing store. “Literal” when applied to string comparison means that various Unicode decomposition rules are not applied and UTF-16 code units are individually compared. So, for instance, “Ö” represented as the composed character sequence “O” (`U+004F LATIN CAPITAL LETTER O`) and a combining diaeresis “¨” (`U+0308 COMBINING DIAERESIS`) would not compare equal to “Ö” represented as a single Unicode character (`U+00D6 LATIN CAPITAL LETTER O WITH DIAERESIS`).

<a id="Special-Considerations"></a>

### Special Considerations

When you know both objects are strings, this method is a faster way to check equality than [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md).

## See Also

### Identifying and Comparing Strings

- [caseInsensitiveCompare(\_:)](caseinsensitivecompare%28__%29.md): Returns the result of invoking [compare(\_:options:)](compare%28__options_%29.md) with `NSCaseInsensitiveSearch` as the only option.
- [localizedCaseInsensitiveCompare(\_:)](localizedcaseinsensitivecompare%28__%29.md): Compares the string with a given string using a case-insensitive, localized, comparison.
- [compare(\_:)](compare%28__%29.md): Returns the result of invoking [compare(\_:options:range:)](compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.
- [localizedCompare(\_:)](localizedcompare%28__%29.md): Compares the string and a given string using a localized comparison.
- [compare(\_:options:)](compare%28__options_%29.md): Compares the string with the specified string using the given options.
- [compare(\_:options:range:)](compare%28__options_range_%29.md): Returns the result of invoking [compare(\_:options:range:locale:)](compare%28__options_range_locale_%29.md) with a `nil` locale.
- [compare(\_:options:range:locale:)](compare%28__options_range_locale_%29.md): Compares the string using the specified options and returns the lexical ordering for the range.
- [localizedStandardCompare(\_:)](localizedstandardcompare%28__%29.md): Compares strings as sorted by the Finder.
- [hasPrefix(\_:)](hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
- [hasSuffix(\_:)](hassuffix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the ending characters of the receiver.
- [hash](hash.md): An unsigned integer that can be used as a hash table address.
- [NSString.CompareOptions](compareoptions.md): These values represent the options available to many of the string classes’ search and comparison methods.
- [NSString.EncodingConversionOptions](encodingconversionoptions.md): Options for converting string encodings.

# isEqualToString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given string is equal to the receiver using a literal Unicode-based comparison.

## Declaration

```objectivec
- (BOOL) isEqualToString:(NSString *) aString;
```

## Parameters

- `aString`: The string with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aString` is equivalent to the receiver (if they have the same id or if they are `NSOrderedSame` in a literal comparison), otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The comparison uses the canonical representation of strings, which for a particular string is the length of the string plus the UTF-16 code units that make up the string. When this method compares two strings, if the individual Unicodes are the same, then the strings are equal, regardless of the backing store. “Literal” when applied to string comparison means that various Unicode decomposition rules are not applied and UTF-16 code units are individually compared. So, for instance, “Ö” represented as the composed character sequence “O” (`U+004F LATIN CAPITAL LETTER O`) and a combining diaeresis “¨” (`U+0308 COMBINING DIAERESIS`) would not compare equal to “Ö” represented as a single Unicode character (`U+00D6 LATIN CAPITAL LETTER O WITH DIAERESIS`).

<a id="Special-Considerations"></a>

### Special Considerations

When you know both objects are strings, this method is a faster way to check equality than [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md).

## See Also

### Identifying and Comparing Strings

- [caseInsensitiveCompare:](caseinsensitivecompare%28__%29.md): Returns the result of invoking [compare:options:](compare%28__options_%29.md) with `NSCaseInsensitiveSearch` as the only option.
- [localizedCaseInsensitiveCompare:](localizedcaseinsensitivecompare%28__%29.md): Compares the string with a given string using a case-insensitive, localized, comparison.
- [compare:](compare%28__%29.md): Returns the result of invoking [compare:options:range:](compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.
- [localizedCompare:](localizedcompare%28__%29.md): Compares the string and a given string using a localized comparison.
- [compare:options:](compare%28__options_%29.md): Compares the string with the specified string using the given options.
- [compare:options:range:](compare%28__options_range_%29.md): Returns the result of invoking [compare:options:range:locale:](compare%28__options_range_locale_%29.md) with a `nil` locale.
- [compare:options:range:locale:](compare%28__options_range_locale_%29.md): Compares the string using the specified options and returns the lexical ordering for the range.
- [localizedStandardCompare:](localizedstandardcompare%28__%29.md): Compares strings as sorted by the Finder.
- [hasPrefix:](hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
- [hasSuffix:](hassuffix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the ending characters of the receiver.
- [hash](hash.md): An unsigned integer that can be used as a hash table address.
- [NSStringCompareOptions](compareoptions.md): These values represent the options available to many of the string classes’ search and comparison methods.
- [NSStringEncodingConversionOptions](encodingconversionoptions.md): Options for converting string encodings.
