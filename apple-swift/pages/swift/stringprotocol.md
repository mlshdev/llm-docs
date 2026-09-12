> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol](https://developer.apple.com/documentation/swift/stringprotocol)

# StringProtocol

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can represent a string as a collection of characters.

## Declaration

```swift
protocol StringProtocol : BidirectionalCollection, Comparable, ExpressibleByStringInterpolation, Hashable, LosslessStringConvertible, TextOutputStream, TextOutputStreamable where Self.Element == Character, Self.Index == String.Index, Self.StringInterpolation == DefaultStringInterpolation, Self.SubSequence : StringProtocol
```

<a id="overview"></a>

## Overview

Do not declare new conformances to `StringProtocol`. Only the `String` and `Substring` types in the standard library are valid conforming types.

## Topics

### Operators

- [!=(\_:\_:)](stringprotocol/!=%28____%29.md)

### Associated Types

- [SubSequence](stringprotocol/subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.
- [UTF16View](stringprotocol/utf16view.md)
- [UTF8View](stringprotocol/utf8view.md)
- [UnicodeScalarView](stringprotocol/unicodescalarview.md)

### Initializers

- [init(cString:)](stringprotocol/init%28cstring_%29.md): Creates a string from the null-terminated, UTF-8 encoded sequence of bytes at the given pointer.
- [init(decoding:as:)](stringprotocol/init%28decoding_as_%29.md): Creates a string from the given Unicode code units in the specified encoding.
- [init(decodingCString:as:)](stringprotocol/init%28decodingcstring_as_%29.md): Creates a string from the null-terminated sequence of bytes at the given pointer.

### Instance Properties

- [capitalized](stringprotocol/capitalized.md): A copy of the string with each word changed to its corresponding capitalized spelling.
- [decomposedStringWithCanonicalMapping](stringprotocol/decomposedstringwithcanonicalmapping.md): A string created by normalizing the string’s contents using Form D.
- [decomposedStringWithCompatibilityMapping](stringprotocol/decomposedstringwithcompatibilitymapping.md): A string created by normalizing the string’s contents using Form KD.
- [fastestEncoding](stringprotocol/fastestencoding.md): The fastest encoding to which the string can be converted without loss of information.
- [hash](stringprotocol/hash.md): An unsigned integer that can be used as a hash table address.
- [localizedCapitalized](stringprotocol/localizedcapitalized.md): A capitalized representation of the string that is produced using the current locale.
- [localizedLowercase](stringprotocol/localizedlowercase.md): A lowercase version of the string that is produced using the current locale.
- [localizedUppercase](stringprotocol/localizeduppercase.md): An uppercase version of the string that is produced using the current locale.
- [precomposedStringWithCanonicalMapping](stringprotocol/precomposedstringwithcanonicalmapping.md): A string created by normalizing the string’s contents using Form C.
- [precomposedStringWithCompatibilityMapping](stringprotocol/precomposedstringwithcompatibilitymapping.md): A string created by normalizing the string’s contents using Form KC.
- [removingPercentEncoding](stringprotocol/removingpercentencoding.md): Returns a new string created by replacing all percent-encoded sequences with the matching UTF-8 characters.
- [smallestEncoding](stringprotocol/smallestencoding.md): The smallest encoding to which the string can be converted without loss of information.
- [unicodeScalars](stringprotocol/unicodescalars.md)
- [utf16](stringprotocol/utf16.md)
- [utf8](stringprotocol/utf8.md)

### Instance Methods

- [addingPercentEncoding(withAllowedCharacters:)](stringprotocol/addingpercentencoding%28withallowedcharacters_%29.md): Returns a new string created by replacing all characters not in the specified set with percent-encoded characters.
- [appending(\_:)](stringprotocol/appending%28__%29.md): Returns a new string created by appending the given string.
- [appendingFormat(\_:\_:)](stringprotocol/appendingformat%28____%29.md): Returns a string created by appending a string constructed from a given format string and the following arguments.
- [applyingTransform(\_:reverse:)](stringprotocol/applyingtransform%28__reverse_%29.md): Perform string transliteration.
- [cString(using:)](stringprotocol/cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [canBeConverted(to:)](stringprotocol/canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the string can be converted to the specified encoding without loss of information.
- [capitalized(with:)](stringprotocol/capitalized%28with_%29.md): Returns a capitalized representation of the string using the specified locale.
- [caseInsensitiveCompare(\_:)](stringprotocol/caseinsensitivecompare%28__%29.md): Returns the result of invoking `compare:options:` with `NSCaseInsensitiveSearch` as the only option.
- [commonPrefix(with:options:)](stringprotocol/commonprefix%28with_options_%29.md): Returns a string containing characters this string and the given string have in common, starting from the beginning of each up to the first characters that aren’t equivalent.
- [compare(\_:options:range:locale:)](stringprotocol/compare%28__options_range_locale_%29.md): Compares the string using the specified options and returns the lexical ordering for the range.
- [completePath(into:caseSensitive:matchesInto:filterTypes:)](stringprotocol/completepath%28into_casesensitive_matchesinto_filtertypes_%29.md): Interprets the string as a path in the file system and attempts to perform filename completion, returning a numeric value that indicates whether a match was possible, and by reference the longest path that matches the string.
- [components(separatedBy:)](stringprotocol/components%28separatedby_%29-4j26n.md): Returns an array containing substrings from the string that have been divided by characters in the given set.
- [components(separatedBy:)](stringprotocol/components%28separatedby_%29-8gl9t.md): Returns an array containing substrings from the string that have been divided by the given separator.
- [contains(\_:)](stringprotocol/contains%28__%29-40kbf.md): Returns `true` if `other` is non-empty and contained within `self` by case-sensitive, non-literal search. Otherwise, returns `false`.
- [contains(\_:)](stringprotocol/contains%28__%29-78f5t.md)
- [contains(\_:)](stringprotocol/contains%28__%29-78p35.md)
- [data(using:allowLossyConversion:)](stringprotocol/data%28using_allowlossyconversion_%29.md): Returns a `Data` containing a representation of the `String` encoded using a given encoding.
- [dataDetectorMatches(\_:options:)](stringprotocol/datadetectormatches%28__options_%29.md): Searches for known data types in a string or a substring.
- [enumerateLines(invoking:)](stringprotocol/enumeratelines%28invoking_%29.md): Enumerates all the lines in a string.
- [enumerateLinguisticTags(in:scheme:options:orthography:invoking:)](stringprotocol/enumeratelinguistictags%28in_scheme_options_orthography_invoking_%29.md): Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.
- [enumerateSubstrings(in:options:\_:)](stringprotocol/enumeratesubstrings%28in_options___%29.md): Enumerates the substrings of the specified type in the specified range of the string.
- [folding(options:locale:)](stringprotocol/folding%28options_locale_%29.md): Returns a string with the given character folding options applied.
- [getBytes(\_:maxLength:usedLength:encoding:options:range:remaining:)](stringprotocol/getbytes%28__maxlength_usedlength_encoding_options_range_remaining_%29.md): Writes the given `range` of characters into `buffer` in a given `encoding`, without any allocations. Does not NULL-terminate.
- [getCString(\_:maxLength:encoding:)](stringprotocol/getcstring%28__maxlength_encoding_%29.md): Converts the `String`’s content to a given encoding and stores them in a buffer.
- [getLineStart(\_:end:contentsEnd:for:)](stringprotocol/getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [getParagraphStart(\_:end:contentsEnd:for:)](stringprotocol/getparagraphstart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.
- [hasPrefix(\_:)](stringprotocol/hasprefix%28__%29.md)
- [hasSuffix(\_:)](stringprotocol/hassuffix%28__%29.md)
- [lengthOfBytes(using:)](stringprotocol/lengthofbytes%28using_%29.md): Returns the number of bytes required to store the `String` in a given encoding.
- [lineRange(for:)](stringprotocol/linerange%28for_%29.md): Returns the range of characters representing the line or lines containing a given range.
- [linguisticTags(in:scheme:options:orthography:tokenRanges:)](stringprotocol/linguistictags%28in_scheme_options_orthography_tokenranges_%29.md): Returns an array of linguistic tags for the specified range and requested tags within the receiving string.
- [localizedCaseInsensitiveCompare(\_:)](stringprotocol/localizedcaseinsensitivecompare%28__%29.md): Compares the string and the given string using a case-insensitive, localized, comparison.
- [localizedCaseInsensitiveContains(\_:)](stringprotocol/localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the given string is non-empty and contained within this string by case-insensitive, non-literal search, taking into account the current locale.
- [localizedCompare(\_:)](stringprotocol/localizedcompare%28__%29.md): Compares the string and the given string using a localized comparison.
- [localizedStandardCompare(\_:)](stringprotocol/localizedstandardcompare%28__%29.md): Compares the string and the given string as sorted by the Finder.
- [localizedStandardContains(\_:)](stringprotocol/localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains the given string, taking the current locale into account.
- [localizedStandardRange(of:)](stringprotocol/localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string, taking the current locale into account. Returns `nil` if the string was not found.
- [lowercased()](stringprotocol/lowercased%28%29.md)
- [lowercased(with:)](stringprotocol/lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [maximumLengthOfBytes(using:)](stringprotocol/maximumlengthofbytes%28using_%29.md): Returns the maximum number of bytes needed to store the `String` in a given encoding.
- [padding(toLength:withPad:startingAt:)](stringprotocol/padding%28tolength_withpad_startingat_%29.md): Returns a new string formed from the `String` by either removing characters from the end, or by appending as many occurrences as necessary of a given pad string.
- [paragraphRange(for:)](stringprotocol/paragraphrange%28for_%29.md): Returns the range of characters representing the paragraph or paragraphs containing a given range.
- [propertyList()](stringprotocol/propertylist%28%29.md): Parses the `String` as a text representation of a property list, returning an NSString, NSData, NSArray, or NSDictionary object, according to the topmost element.
- [propertyListFromStringsFileFormat()](stringprotocol/propertylistfromstringsfileformat%28%29.md): Returns a dictionary object initialized with the keys and values found in the `String`.
- [range(of:options:range:locale:)](stringprotocol/range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the `String`, subject to given options, using the specified locale, if any.
- [rangeOfCharacter(from:options:range:)](stringprotocol/rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the `String` of the first character from a given character set found in a given range with given options.
- [rangeOfComposedCharacterSequence(at:)](stringprotocol/rangeofcomposedcharactersequence%28at_%29.md): Returns the range in the `String` of the composed character sequence located at a given index.
- [rangeOfComposedCharacterSequences(for:)](stringprotocol/rangeofcomposedcharactersequences%28for_%29.md): Returns the range in the string of the composed character sequences for a given range.
- [replacingCharacters(in:with:)](stringprotocol/replacingcharacters%28in_with_%29.md): Returns a new string in which the characters in a specified range of the `String` are replaced by a given string.
- [replacingOccurrences(of:with:options:range:)](stringprotocol/replacingoccurrences%28of_with_options_range_%29.md): Returns a new string in which all occurrences of a target string in a specified range of the string are replaced by another given string.
- [split(separator:maxSplits:omittingEmptySubsequences:)](stringprotocol/split%28separator_maxsplits_omittingemptysubsequences_%29-7mfus.md): Conforms when `SubSequence` is `Substring`.
- [split(separator:maxSplits:omittingEmptySubsequences:)](stringprotocol/split%28separator_maxsplits_omittingemptysubsequences_%29-8wzc1.md): Conforms when `SubSequence` is `Substring`.
- [substring(from:)](stringprotocol/substring%28from_%29.md): Deprecated. Returns a new string containing the characters of the `String` from the one at a given index to the end.
- [substring(to:)](stringprotocol/substring%28to_%29.md): Deprecated. Returns a new string containing the characters of the `String` up to, but not including, the one at a given index.
- [substring(with:)](stringprotocol/substring%28with_%29.md): Deprecated. Returns a string object containing the characters of the `String` that lie within a given range.
- [trimmingCharacters(in:)](stringprotocol/trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the `String` characters contained in a given character set.
- [uppercased()](stringprotocol/uppercased%28%29.md)
- [uppercased(with:)](stringprotocol/uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [withCString(\_:)](stringprotocol/withcstring%28__%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of UTF-8 code units.
- [withCString(encodedAs:\_:)](stringprotocol/withcstring%28encodedas___%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of code units.
- [write(to:atomically:encoding:)](stringprotocol/write%28to_atomically_encoding_%29.md): Writes the contents of the `String` to the URL specified by url using the specified encoding.
- [write(toFile:atomically:encoding:)](stringprotocol/write%28tofile_atomically_encoding_%29.md): Writes the contents of the `String` to a file at a given path using a given encoding.

## Relationships

### Inherits From

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Comparable](comparable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Equatable](equatable.md)
- [ExpressibleByExtendedGraphemeClusterLiteral](expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringInterpolation](expressiblebystringinterpolation.md)
- [ExpressibleByStringLiteral](expressiblebystringliteral.md)
- [ExpressibleByUnicodeScalarLiteral](expressiblebyunicodescalarliteral.md)
- [Hashable](hashable.md)
- [LosslessStringConvertible](losslessstringconvertible.md)
- [Sequence](sequence.md)
- [TextOutputStream](textoutputstream.md)
- [TextOutputStreamable](textoutputstreamable.md)

### Conforming Types

- [String](string.md)
- [Substring](substring.md)

## See Also

### Related String Types

- [Substring](substring.md): A slice of a string.
- [String.Index](string/index.md): A position of a character or code unit in a string.
- [String.UnicodeScalarView](string/unicodescalarview.md): A view of a string’s contents as a collection of Unicode scalar values.
- [String.UTF16View](string/utf16view.md): A view of a string’s contents as a collection of UTF-16 code units.
- [String.UTF8View](string/utf8view.md): A view of a string’s contents as a collection of UTF-8 code units.
- [String.Iterator](string/iterator.md): A type that provides the collection’s iteration interface and encapsulates its iteration state.
- [String.Encoding](string/encoding.md)
