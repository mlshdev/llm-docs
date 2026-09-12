> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring](https://developer.apple.com/documentation/foundation/nsstring)

# NSString (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static, plain-text Unicode string object.

## Declaration

```swift
class NSString
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

You can use this type in Swift when you need reference semantics or other Foundation-specific behavior.

The [NSString](nsstring.md) class and its mutable subclass, [NSMutableString](nsmutablestring.md), provide an extensive set of APIs for working with strings, including methods for comparing, searching, and modifying strings. [NSString](nsstring.md) objects are used throughout Foundation and other Cocoa frameworks, serving as the basis for all textual and linguistic functionality on the platform.

[NSString](nsstring.md) is *toll-free bridged* with its Core Foundation counterpart, [CFString](../corefoundation/cfstring.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

<a id="String-Objects"></a>

### String Objects

An [NSString](nsstring.md) object encodes a Unicode-compliant text string, represented as a sequence of UTF–16 code units. All lengths, character indexes, and ranges are expressed in terms of 16-bit platform-endian values, with index values starting at `0`.

An [NSString](nsstring.md) object can be initialized from or written to a C buffer, an [NSData](nsdata.md) object, or the contents of an [NSURL](nsurl.md). It can also be encoded and decoded to and from ASCII, UTF–8, UTF–16, UTF–32, or any other string encoding represented by [NSStringEncoding](nsstringencoding.md).

> **Note**

>  An immutable string is a text string that is defined when it is created and subsequently cannot be changed. An immutable string is implemented as an array of UTF–16 code units (in other words, a text string). To create and manage an immutable string, use the [NSString](nsstring.md) class. To construct and manage a string that can be changed after it has been created, use [NSMutableString](nsmutablestring.md).

The objects you create using [NSString](nsstring.md) and [NSMutableString](nsmutablestring.md) are referred to as string objects (or, when no confusion will result, merely as strings). The term C string refers to the standard `char *` type.

Because of the nature of class clusters, string objects aren’t actual instances of the [NSString](nsstring.md) or [NSMutableString](nsmutablestring.md) classes but of one of their private subclasses. Although a string object’s class is private, its interface is public, as declared by these abstract superclasses, [NSString](nsstring.md) and [NSMutableString](nsmutablestring.md). The string classes adopt the [NSCopying](nscopying.md) and [NSMutableCopying](nsmutablecopying.md) protocols, making it convenient to convert a string of one type to the other.

<a id="Understanding-Characters"></a>

#### Understanding Characters

A string object presents itself as a sequence of UTF–16 code units. You can determine how many UTF-16 code units a string object contains with the [length](nsstring/length.md) method and can retrieve a specific UTF-16 code unit with the [character(at:)](nsstring/character%28at_%29.md) method. These two “primitive” methods provide basic access to a string object.

Most use of strings, however, is at a higher level, with the strings being treated as single entities: You compare strings against one another, search them for substrings, combine them into new strings, and so on. If you need to access string objects character by character, you must understand the Unicode character encoding, specifically issues related to composed character sequences. For details see *The Unicode Standard, Version 4.0* (The Unicode Consortium, Boston: Addison-Wesley, 2003, ISBN 0-321-18578-1) and the Unicode Consortium web site: [http://www.unicode.org/](http://www.unicode.org/). See also [Characters and Grapheme Clusters](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/stringsClusters.html#//apple_ref/doc/uid/TP40008025) in [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i).

Localized string comparisons are based on the Unicode Collation Algorithm, as tailored for different languages by CLDR (Common Locale Data Repository). Both are projects of the Unicode Consortium. Unicode is a registered trademark of Unicode, Inc.

<a id="Interpreting-UTF-16-Encoded-Data"></a>

#### Interpreting UTF-16-Encoded Data

When creating an `NSString` object from a UTF-16-encoded string (or a byte stream interpreted as UTF-16), if the byte order is not otherwise specified, `NSString` assumes that the UTF-16 characters are big-endian, unless there is a BOM (byte-order mark), in which case the BOM dictates the byte order. When creating an `NSString` object from an array of `unichar` values, the returned string is always native-endian, since the array always contains UTF–16 code units in native byte order.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

It is possible to subclass [NSString](nsstring.md) (and [NSMutableString](nsmutablestring.md)), but doing so requires providing storage facilities for the string (which is not inherited by subclasses) and implementing two primitive methods. The abstract [NSString](nsstring.md) and [NSMutableString](nsmutablestring.md) classes are the public interface of a class cluster consisting mostly of private, concrete classes that create and return a string object appropriate for a given situation. Making your own concrete subclass of this cluster imposes certain requirements (discussed in [Methods to Override](nsstring.md#Methods-to-Override)).

Make sure your reasons for subclassing [NSString](nsstring.md) are valid. Instances of your subclass should represent a string and not something else. Thus the only attributes the subclass should have are the length of the character buffer it’s managing and access to individual characters in the buffer. Valid reasons for making a subclass of [NSString](nsstring.md) include providing a different backing store (perhaps for better performance) or implementing some aspect of object behavior differently, such as memory management. If your purpose is to add non-essential attributes or metadata to your subclass of [NSString](nsstring.md), a better alternative would be object composition (see [Alternatives to Subclassing](nsstring.md#Alternatives-to-Subclassing)). Cocoa already provides an example of this with the [NSAttributedString](nsattributedstring.md) class.

<a id="Methods-to-Override"></a>

#### Methods to Override

Any subclass of `NSString`   *must* override the primitive instance methods [length](nsstring/length.md) and [character(at:)](nsstring/character%28at_%29.md). These methods must operate on the backing store that you provide for the characters of the string. For this backing store you can use a static array, a dynamically allocated buffer, a standard `NSString` object, or some other data type or mechanism. You may also choose to override, partially or fully, any other `NSString` method for which you want to provide an alternative implementation. For example, for better performance it is recommended that you override [getCharacters(\_:range:)](nsstring/getcharacters%28__range_%29.md) and give it a faster implementation.

You might want to implement an initializer for your subclass that is suited to the backing store that the subclass is managing. The `NSString` class does not have a designated initializer, so your initializer need only invoke the [init()](../objectivec/nsobject-swift.class/init%28%29.md) method of `super`. The `NSString` class adopts the [NSCopying](nscopying.md), [NSMutableCopying](nsmutablecopying.md), and [NSCoding](nscoding.md) protocols; if you want instances of your own custom subclass created from copying or coding, override the methods in these protocols.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

Often a better and easier alternative to making a subclass of `NSString`—or of any other abstract, public class of a class cluster, for that matter—is object composition. This is especially the case when your intent is to add to the subclass metadata or some other attribute that is not essential to a string object. In object composition, you would have an `NSString` object as one instance variable of your custom class (typically a subclass of `NSObject`) and one or more instance variables that store the metadata that you want for the custom object. Then just design your subclass interface to include accessor methods for the embedded string object and the metadata.

If the behavior you want to add supplements that of the existing class, you could write a category on `NSString`. Keep in mind, however, that this category will be in effect for all instances of `NSString` that you use, and this might have unintended consequences.

## Topics

### Creating and Initializing Strings

- [init()](nsstring/init%28%29.md): Returns an initialized `NSString` object that contains no characters.
- [init(bytes:length:encoding:)](nsstring/init%28bytes_length_encoding_%29.md): Returns an initialized `NSString` object containing a given number of bytes from a given buffer of bytes interpreted in a given encoding.
- [init(bytesNoCopy:length:encoding:freeWhenDone:)](nsstring/init%28bytesnocopy_length_encoding_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of bytes from a given buffer of bytes interpreted in a given encoding, and optionally frees the buffer.
- [init(characters:length:)](nsstring/init%28characters_length_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [init(charactersNoCopy:length:freeWhenDone:)](nsstring/init%28charactersnocopy_length_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [init(string:)](nsstring/init%28string_%29-210xa.md): Returns an `NSString` object initialized by copying the characters from another given string.
- [init(format:arguments:)](nsstring/init%28format_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted without any localization.
- [init(format:locale:arguments:)](nsstring/init%28format_locale_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.
- [init(data:encoding:)](nsstring/init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [localizedUserNotificationString(forKey:arguments:)](nsstring/localizedusernotificationstring%28forkey_arguments_%29.md): Returns a localized string intended for display in a notification alert.
- [localizedStringWithFormat(\_:\_:)](nsstring/localizedstringwithformat%28____%29.md)
- [unichar](unichar.md): Type for UTF-16 code units.

### Creating and Initializing a String from a File

- [init(contentsOfFile:encoding:)](nsstring/init%28contentsoffile_encoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path using a given encoding.
- [init(contentsOfFile:usedEncoding:)](nsstring/init%28contentsoffile_usedencoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path and returns by reference the encoding used to interpret the characters.

### Getting a String’s Length

- [length](nsstring/length.md): The number of UTF-16 code units in the receiver.
- [lengthOfBytes(using:)](nsstring/lengthofbytes%28using_%29.md): Returns the number of bytes required to store the receiver in a given encoding.
- [maximumLengthOfBytes(using:)](nsstring/maximumlengthofbytes%28using_%29.md): Returns the maximum number of bytes needed to store the receiver in a given encoding.

### Getting Characters and Bytes

- [character(at:)](nsstring/character%28at_%29.md): Returns the character at a given UTF-16 code unit index.
- [getCharacters(\_:range:)](nsstring/getcharacters%28__range_%29.md): Copies characters from a given range in the receiver into a given buffer.
- [getBytes(\_:maxLength:usedLength:encoding:options:range:remaining:)](nsstring/getbytes%28__maxlength_usedlength_encoding_options_range_remaining_%29.md): Gets a given range of characters as bytes in a specified encoding.

### Getting C Strings

- [cString(using:)](nsstring/cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [getCString(\_:maxLength:encoding:)](nsstring/getcstring%28__maxlength_encoding_%29.md): Converts the string to a given encoding and stores it in a buffer.
- [utf8String](nsstring/utf8string.md): A null-terminated UTF8 representation of the string.

### Identifying and Comparing Strings

- [caseInsensitiveCompare(\_:)](nsstring/caseinsensitivecompare%28__%29.md): Returns the result of invoking [compare(\_:options:)](nsstring/compare%28__options_%29.md) with `NSCaseInsensitiveSearch` as the only option.
- [localizedCaseInsensitiveCompare(\_:)](nsstring/localizedcaseinsensitivecompare%28__%29.md): Compares the string with a given string using a case-insensitive, localized, comparison.
- [compare(\_:)](nsstring/compare%28__%29.md): Returns the result of invoking [compare(\_:options:range:)](nsstring/compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.
- [localizedCompare(\_:)](nsstring/localizedcompare%28__%29.md): Compares the string and a given string using a localized comparison.
- [compare(\_:options:)](nsstring/compare%28__options_%29.md): Compares the string with the specified string using the given options.
- [compare(\_:options:range:)](nsstring/compare%28__options_range_%29.md): Returns the result of invoking [compare(\_:options:range:locale:)](nsstring/compare%28__options_range_locale_%29.md) with a `nil` locale.
- [compare(\_:options:range:locale:)](nsstring/compare%28__options_range_locale_%29.md): Compares the string using the specified options and returns the lexical ordering for the range.
- [localizedStandardCompare(\_:)](nsstring/localizedstandardcompare%28__%29.md): Compares strings as sorted by the Finder.
- [hasPrefix(\_:)](nsstring/hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
- [hasSuffix(\_:)](nsstring/hassuffix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the ending characters of the receiver.
- [isEqual(to:)](nsstring/isequal%28to_%29.md): Returns a Boolean value that indicates whether a given string is equal to the receiver using a literal Unicode-based comparison.
- [hash](nsstring/hash.md): An unsigned integer that can be used as a hash table address.
- [NSString.CompareOptions](nsstring/compareoptions.md): These values represent the options available to many of the string classes’ search and comparison methods.
- [NSString.EncodingConversionOptions](nsstring/encodingconversionoptions.md): Options for converting string encodings.

### Combining Strings

- [appendingFormat(\_:\_:)](nsstring/appendingformat%28____%29.md)
- [appending(\_:)](nsstring/appending%28__%29.md): Returns a new string made by appending a given string to the receiver.
- [padding(toLength:withPad:startingAt:)](nsstring/padding%28tolength_withpad_startingat_%29.md): Returns a new string formed from the receiver by either removing characters from the end, or by appending as many occurrences as necessary of a given pad string.

### Changing Case

- [lowercased](nsstring/lowercased.md): A lowercase representation of the string.
- [localizedLowercase](nsstring/localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [lowercased(with:)](nsstring/lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercased](nsstring/uppercased.md): An uppercase representation of the string.
- [localizedUppercase](nsstring/localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercased(with:)](nsstring/uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [capitalized](nsstring/capitalized.md): A capitalized representation of the string.
- [localizedCapitalized](nsstring/localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalized(with:)](nsstring/capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.

### Dividing Strings

- [components(separatedBy:)](nsstring/components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [components(separatedBy:)](nsstring/components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [trimmingCharacters(in:)](nsstring/trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substring(from:)](nsstring/substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substring(with:)](nsstring/substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
- [substring(to:)](nsstring/substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.

### Normalizing Strings

- [decomposedStringWithCanonicalMapping](nsstring/decomposedstringwithcanonicalmapping.md): A string made by normalizing the string’s contents using the Unicode Normalization Form D.
- [decomposedStringWithCompatibilityMapping](nsstring/decomposedstringwithcompatibilitymapping.md): A string made by normalizing the receiver’s contents using the Unicode Normalization Form KD.
- [precomposedStringWithCanonicalMapping](nsstring/precomposedstringwithcanonicalmapping.md): A string made by normalizing the string’s contents using the Unicode Normalization Form C.
- [precomposedStringWithCompatibilityMapping](nsstring/precomposedstringwithcompatibilitymapping.md): A string made by normalizing the receiver’s contents using the Unicode Normalization Form KC.

### Folding Strings

- [folding(options:locale:)](nsstring/folding%28options_locale_%29.md): Creates a string suitable for comparison by removing the specified character distinctions from a string.

### Transforming Strings

- [applyingTransform(\_:reverse:)](nsstring/applyingtransform%28__reverse_%29.md): Returns a new string by applying a specified transform to the string.
- [StringTransform](stringtransform.md): Constants representing an ICU string transform.

### Finding Characters and Substrings

- [contains(\_:)](nsstring/contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContains(\_:)](nsstring/localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContains(\_:)](nsstring/localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacter(from:)](nsstring/rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacter(from:options:)](nsstring/rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacter(from:options:range:)](nsstring/rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [range(of:)](nsstring/range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [range(of:options:)](nsstring/range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [range(of:options:range:)](nsstring/range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [range(of:options:range:locale:)](nsstring/range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRange(of:)](nsstring/localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateLines(\_:)](nsstring/enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstrings(in:options:using:)](nsstring/enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.

### Replacing Substrings

- [replacingOccurrences(of:with:)](nsstring/replacingoccurrences%28of_with_%29.md): Returns a new string in which all occurrences of a target string in the receiver are replaced by another given string.
- [replacingOccurrences(of:with:options:range:)](nsstring/replacingoccurrences%28of_with_options_range_%29.md): Returns a new string in which all occurrences of a target string in a specified range of the receiver are replaced by another given string.
- [replacingCharacters(in:with:)](nsstring/replacingcharacters%28in_with_%29.md): Returns a new string in which the characters in a specified range of the receiver are replaced by a given string.

### Getting a Shared Prefix

- [commonPrefix(with:options:)](nsstring/commonprefix%28with_options_%29.md): Returns a string containing characters the receiver and a given string have in common, starting from the beginning of each up to the first characters that aren’t equivalent.

### Performing Linguistic Analysis

- [enumerateLinguisticTags(in:scheme:options:orthography:using:)](nsstring/enumeratelinguistictags%28in_scheme_options_orthography_using_%29.md): Deprecated. Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.
- [linguisticTags(in:scheme:options:orthography:tokenRanges:)](nsstring/linguistictags%28in_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags for the specified range and requested tags within the receiving string.
- [NSString.EnumerationOptions](nsstring/enumerationoptions.md): Constants to specify kinds of substrings and styles of enumeration.

### Determining Line and Paragraph Ranges

- [getLineStart(\_:end:contentsEnd:for:)](nsstring/getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [lineRange(for:)](nsstring/linerange%28for_%29.md): Returns the range of characters representing the line or lines containing a given range.
- [getParagraphStart(\_:end:contentsEnd:for:)](nsstring/getparagraphstart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.
- [paragraphRange(for:)](nsstring/paragraphrange%28for_%29.md): Returns the range of characters representing the paragraph or paragraphs containing a given range.

### Determining Composed Character Sequences

- [rangeOfComposedCharacterSequence(at:)](nsstring/rangeofcomposedcharactersequence%28at_%29.md): Returns the range in the receiver of the composed character sequence located at a given index.
- [rangeOfComposedCharacterSequences(for:)](nsstring/rangeofcomposedcharactersequences%28for_%29.md): Returns the range in the string of the composed character sequences for a given range.

### Writing to a File or URL

- [write(toFile:atomically:encoding:)](nsstring/write%28tofile_atomically_encoding_%29.md): Writes the contents of the receiver to a file at a given path using a given encoding.
- [write(to:atomically:encoding:)](nsstring/write%28to_atomically_encoding_%29.md): Writes the contents of the receiver to the URL specified by `url` using the specified encoding.

### Converting String Contents Into a Property List

- [propertyList()](nsstring/propertylist%28%29.md): Parses the receiver as a text representation of a property list, returning an `NSString`, `NSData`, `NSArray`, or `NSDictionary` object, according to the topmost element.
- [propertyListFromStringsFileFormat()](nsstring/propertylistfromstringsfileformat%28%29.md): Returns a dictionary object initialized with the keys and values found in the receiver.

### Sizing and Drawing Strings

- [draw(at:withAttributes:)](nsstring/draw%28at_withattributes_%29.md): Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.
- [draw(in:withAttributes:)](nsstring/draw%28in_withattributes_%29.md): Draws the attributed string inside the specified bounding rectangle.
- [draw(with:options:attributes:context:)](nsstring/draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [boundingRect(with:options:attributes:context:)](nsstring/boundingrect%28with_options_attributes_context_%29.md): Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [size(withAttributes:)](nsstring/size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.
- [variantFittingPresentationWidth(\_:)](nsstring/variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

### Getting Numeric Values

- [doubleValue](nsstring/doublevalue.md): The floating-point value of the string as a `double`.
- [floatValue](nsstring/floatvalue.md): The floating-point value of the string as a `float`.
- [intValue](nsstring/intvalue.md): The integer value of the string.
- [integerValue](nsstring/integervalue.md): The `NSInteger` value of the string.
- [longLongValue](nsstring/longlongvalue.md): The `long long` value of the string.
- [boolValue](nsstring/boolvalue.md): The Boolean value of the string.

### Working with Encodings

- [availableStringEncodings](nsstring/availablestringencodings.md): Returns a zero-terminated list of the encodings string objects support in the application’s environment.
- [defaultCStringEncoding](nsstring/defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncoding(for:encodingOptions:convertedString:usedLossyConversion:)](nsstring/stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedName(of:)](nsstring/localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConverted(to:)](nsstring/canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [data(using:)](nsstring/data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [data(using:allowLossyConversion:)](nsstring/data%28using_allowlossyconversion_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](nsstring/description.md)
- [fastestEncoding](nsstring/fastestencoding.md): The fastest encoding to which the receiver may be converted without loss of information.
- [smallestEncoding](nsstring/smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [StringEncodingDetectionOptionsKey](stringencodingdetectionoptionskey.md)
- [NSString Handling Exception Names](nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.

### Working with Paths

- [path(withComponents:)](nsstring/path%28withcomponents_%29.md): Returns a string built from the strings in a given array by concatenating them with a path separator between each pair.
- [pathComponents](nsstring/pathcomponents.md): The file-system path components of the receiver.
- [completePath(into:caseSensitive:matchesInto:filterTypes:)](nsstring/completepath%28into_casesensitive_matchesinto_filtertypes_%29.md): Interprets the receiver as a path in the file system and attempts to perform filename completion, returning a numeric value that indicates whether a match was possible, and by reference the longest path that matches the receiver.
- [fileSystemRepresentation](nsstring/filesystemrepresentation.md): A file system-specific representation of the receiver.
- [getFileSystemRepresentation(\_:maxLength:)](nsstring/getfilesystemrepresentation%28__maxlength_%29.md): Interprets the receiver as a system-independent path and fills a buffer with a C-string in a format and encoding suitable for use with file-system calls.
- [isAbsolutePath](nsstring/isabsolutepath.md): A Boolean value that indicates whether the receiver represents an absolute path.
- [lastPathComponent](nsstring/lastpathcomponent.md): The last path component of the receiver.
- [pathExtension](nsstring/pathextension.md): The path extension, if any, of the string as interpreted as a path.
- [abbreviatingWithTildeInPath](nsstring/abbreviatingwithtildeinpath.md): A new string that replaces the current home directory portion of the current path with a tilde (`~`) character.
- [appendingPathComponent(\_:)](nsstring/appendingpathcomponent%28__%29.md): Returns a new string made by appending to the receiver a given string.
- [appendingPathExtension(\_:)](nsstring/appendingpathextension%28__%29.md): Returns a new string made by appending to the receiver an extension separator followed by a given extension.
- [deletingLastPathComponent](nsstring/deletinglastpathcomponent.md): A new string made by deleting the last path component from the receiver, along with any final path separator.
- [deletingPathExtension](nsstring/deletingpathextension.md): A new string made by deleting the extension (if any, and only the last) from the receiver.
- [expandingTildeInPath](nsstring/expandingtildeinpath.md): A new string made by expanding the initial component of the receiver to its full path value.
- [resolvingSymlinksInPath](nsstring/resolvingsymlinksinpath.md): A new string made from the receiver by resolving all symbolic links and standardizing path.
- [standardizingPath](nsstring/standardizingpath.md): A new string made by removing extraneous path components from the receiver.
- [strings(byAppendingPaths:)](nsstring/strings%28byappendingpaths_%29.md): Returns an array of strings made by separately appending to the receiver each string in a given array.

### Working with URL Strings

- [addingPercentEncoding(withAllowedCharacters:)](nsstring/addingpercentencoding%28withallowedcharacters_%29.md): Returns a new string made from the receiver by replacing all characters not in the specified set with percent-encoded characters.
- [removingPercentEncoding](nsstring/removingpercentencoding.md): Returns a new string made from the receiver by replacing all percent encoded sequences with the matching UTF-8 characters.

### Deprecated

- [string(withCString:)](nsstring/string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [init(CString:)](nsstring/init%28cstring_%29-vkuo.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [string(withCString:length:)](nsstring/string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [init(CString:length:)](nsstring/init%28cstring_length_%29-5ure3.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [init(CStringNoCopy:length:freeWhenDone:)](nsstring/init%28cstringnocopy_length_freewhendone_%29-86dm2.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by converting the data in a given C-string from the default C-string encoding into the Unicode character encoding.
- [string(withContentsOfFile:)](nsstring/string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.
- [init(contentsOfFile:)](nsstring/init%28contentsoffile_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`.
- [string(withContentsOf:)](nsstring/string%28withcontentsof_%29.md): Deprecated. Returns a string created by reading data from the file named by a given URL.
- [init(contentsOfURL:)](nsstring/init%28contentsofurl_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the location named by a given URL.
- [write(toFile:atomically:)](nsstring/write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the receiver to the file specified by a given path.
- [write(to:atomically:)](nsstring/write%28to_atomically_%29.md): Deprecated. Writes the contents of the receiver to the location specified by a given URL.
- [getCharacters(\_:)](nsstring/getcharacters%28__%29.md): Deprecated. Copies all characters from the receiver into a given buffer.
- [cString()](nsstring/cstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding.
- [lossyCString()](nsstring/lossycstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding, possibly losing information in converting to that encoding.
- [cStringLength()](nsstring/cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [getCString(\_:)](nsstring/getcstring%28__%29.md): Deprecated. Invokes [getCString(\_:maxLength:range:remaining:)](nsstring/getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString(\_:maxLength:)](nsstring/getcstring%28__maxlength_%29.md): Deprecated. Invokes [getCString(\_:maxLength:range:remaining:)](nsstring/getcstring%28__maxlength_range_remaining_%29.md) with `maxLength` as the maximum length in char-sized units, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString(\_:maxLength:range:remaining:)](nsstring/getcstring%28__maxlength_range_remaining_%29.md): Deprecated. Converts the receiver’s content to the default C-string encoding and stores them in a given buffer.
- [addingPercentEscapes(using:)](nsstring/addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.
- [replacingPercentEscapes(using:)](nsstring/replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
- [draw(with:options:attributes:)](nsstring/draw%28with_options_attributes_%29.md): Deprecated. Draws the receiver with the specified options and other display characteristics of the given attributes, within the specified rectangle in the current graphics context.
- [boundingRect(with:options:attributes:)](nsstring/boundingrect%28with_options_attributes_%29.md): Deprecated. Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.

### Structures

- [NSString.DrawingOptions](nsstring/drawingoptions.md)

### Initializers

- [init(bytesNoCopy:length:encoding:deallocator:)](nsstring/init%28bytesnocopy_length_encoding_deallocator_%29.md)
- [init(cString:)](nsstring/init%28cstring_%29-5mpk8.md): Deprecated.
- [init(cString:encoding:)](nsstring/init%28cstring_encoding_%29-20f9h.md): Returns an @c NSString object initialized using the characters in a given C array, interpreted according to a given encoding.
- [init(cString:length:)](nsstring/init%28cstring_length_%29-4bbpi.md): Deprecated.
- [init(cStringNoCopy:length:freeWhenDone:)](nsstring/init%28cstringnocopy_length_freewhendone_%29-7ssxw.md): Deprecated.
- [init(charactersNoCopy:length:deallocator:)](nsstring/init%28charactersnocopy_length_deallocator_%29.md)
- [init(coder:)](nsstring/init%28coder_%29.md)
- [init(contentsOf:)](nsstring/init%28contentsof_%29.md): Deprecated. Returns an @c NSString object initialized by reading data from the URL named by @c url.
- [init(contentsOf:encoding:)](nsstring/init%28contentsof_encoding_%29.md): Returns an @c NSString object initialized by reading data from a given URL interpreted using a given encoding.
- [init(contentsOf:usedEncoding:)](nsstring/init%28contentsof_usedencoding_%29.md): Returns an @c NSString object initialized by reading data from a given URL and returns by reference the encoding used to interpret the data.
- [init(format:\_:)](nsstring/init%28format___%29.md)
- [init(format:locale:\_:)](nsstring/init%28format_locale___%29.md)
- [init(string:)](nsstring/init%28string_%29-7xgq7.md): Returns an `NSString` object initialized by copying the characters from another given string.
- [init(utf8String:)](nsstring/init%28utf8string_%29-vg2b.md): Returns an @c NSString object initialized by copying the characters from a given C array of UTF8-encoded bytes.

### Instance Properties

- [customPlaygroundQuickLook](nsstring/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for this instance.

### Instance Methods

- [appendingPathComponent(\_:conformingTo:)](nsstring/appendingpathcomponent%28__conformingto_%29.md)
- [appendingPathExtension(for:)](nsstring/appendingpathextension%28for_%29.md)
- [sr_sensorForDeletionRecordsFromSensor()](nsstring/sr_sensorfordeletionrecordsfromsensor%28%29.md): Deprecated.

### Type Methods

- [deferredLocalizedIntentsString(with:\_:)](nsstring/deferredlocalizedintentsstring%28with___%29.md)
- [deferredLocalizedIntentsString(with:table:\_:)](nsstring/deferredlocalizedintentsstring%28with_table___%29.md)
- [deferredLocalizedIntentsString(with:table:arguments:)](nsstring/deferredlocalizedintentsstring%28with_table_arguments_%29.md)

### Default Implementations

- [ExpressibleByStringLiteral Implementations](nsstring/expressiblebystringliteral-implementations.md)
- [NSString Implementations](nsstring/nsstring-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableString](nsmutablestring.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [CNKeyDescriptor](../contacts/cnkeydescriptor.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSItemProviderReading](nsitemproviderreading.md)
- [NSItemProviderWriting](nsitemproviderwriting.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSPasteboardReading](https://developer.apple.com/documentation/appkit/nspasteboardreading)
- [NSPasteboardWriting](https://developer.apple.com/documentation/appkit/nspasteboardwriting)
- [NSSecureCoding](nssecurecoding.md)

# NSString (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A static, plain-text Unicode string object.

## Declaration

```objectivec
@interface NSString : NSObject
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

You can use this type in Swift when you need reference semantics or other Foundation-specific behavior.

The [NSString](nsstring.md) class and its mutable subclass, [NSMutableString](nsmutablestring.md), provide an extensive set of APIs for working with strings, including methods for comparing, searching, and modifying strings. [NSString](nsstring.md) objects are used throughout Foundation and other Cocoa frameworks, serving as the basis for all textual and linguistic functionality on the platform.

[NSString](nsstring.md) is *toll-free bridged* with its Core Foundation counterpart, [CFStringRef](../corefoundation/cfstring.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

<a id="String-Objects"></a>

### String Objects

An [NSString](nsstring.md) object encodes a Unicode-compliant text string, represented as a sequence of UTF–16 code units. All lengths, character indexes, and ranges are expressed in terms of 16-bit platform-endian values, with index values starting at `0`.

An [NSString](nsstring.md) object can be initialized from or written to a C buffer, an [NSData](nsdata.md) object, or the contents of an [NSURL](nsurl.md). It can also be encoded and decoded to and from ASCII, UTF–8, UTF–16, UTF–32, or any other string encoding represented by [NSStringEncoding](nsstringencoding.md).

> **Note**

>  An immutable string is a text string that is defined when it is created and subsequently cannot be changed. An immutable string is implemented as an array of UTF–16 code units (in other words, a text string). To create and manage an immutable string, use the [NSString](nsstring.md) class. To construct and manage a string that can be changed after it has been created, use [NSMutableString](nsmutablestring.md).

The objects you create using [NSString](nsstring.md) and [NSMutableString](nsmutablestring.md) are referred to as string objects (or, when no confusion will result, merely as strings). The term C string refers to the standard `char *` type.

Because of the nature of class clusters, string objects aren’t actual instances of the [NSString](nsstring.md) or [NSMutableString](nsmutablestring.md) classes but of one of their private subclasses. Although a string object’s class is private, its interface is public, as declared by these abstract superclasses, [NSString](nsstring.md) and [NSMutableString](nsmutablestring.md). The string classes adopt the [NSCopying](nscopying.md) and [NSMutableCopying](nsmutablecopying.md) protocols, making it convenient to convert a string of one type to the other.

<a id="Understanding-Characters"></a>

#### Understanding Characters

A string object presents itself as a sequence of UTF–16 code units. You can determine how many UTF-16 code units a string object contains with the [length](nsstring/length.md) method and can retrieve a specific UTF-16 code unit with the [characterAtIndex:](nsstring/character%28at_%29.md) method. These two “primitive” methods provide basic access to a string object.

Most use of strings, however, is at a higher level, with the strings being treated as single entities: You compare strings against one another, search them for substrings, combine them into new strings, and so on. If you need to access string objects character by character, you must understand the Unicode character encoding, specifically issues related to composed character sequences. For details see *The Unicode Standard, Version 4.0* (The Unicode Consortium, Boston: Addison-Wesley, 2003, ISBN 0-321-18578-1) and the Unicode Consortium web site: [http://www.unicode.org/](http://www.unicode.org/). See also [Characters and Grapheme Clusters](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/stringsClusters.html#//apple_ref/doc/uid/TP40008025) in [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i).

Localized string comparisons are based on the Unicode Collation Algorithm, as tailored for different languages by CLDR (Common Locale Data Repository). Both are projects of the Unicode Consortium. Unicode is a registered trademark of Unicode, Inc.

<a id="Interpreting-UTF-16-Encoded-Data"></a>

#### Interpreting UTF-16-Encoded Data

When creating an `NSString` object from a UTF-16-encoded string (or a byte stream interpreted as UTF-16), if the byte order is not otherwise specified, `NSString` assumes that the UTF-16 characters are big-endian, unless there is a BOM (byte-order mark), in which case the BOM dictates the byte order. When creating an `NSString` object from an array of `unichar` values, the returned string is always native-endian, since the array always contains UTF–16 code units in native byte order.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

It is possible to subclass [NSString](nsstring.md) (and [NSMutableString](nsmutablestring.md)), but doing so requires providing storage facilities for the string (which is not inherited by subclasses) and implementing two primitive methods. The abstract [NSString](nsstring.md) and [NSMutableString](nsmutablestring.md) classes are the public interface of a class cluster consisting mostly of private, concrete classes that create and return a string object appropriate for a given situation. Making your own concrete subclass of this cluster imposes certain requirements (discussed in [Methods to Override](nsstring.md#Methods-to-Override)).

Make sure your reasons for subclassing [NSString](nsstring.md) are valid. Instances of your subclass should represent a string and not something else. Thus the only attributes the subclass should have are the length of the character buffer it’s managing and access to individual characters in the buffer. Valid reasons for making a subclass of [NSString](nsstring.md) include providing a different backing store (perhaps for better performance) or implementing some aspect of object behavior differently, such as memory management. If your purpose is to add non-essential attributes or metadata to your subclass of [NSString](nsstring.md), a better alternative would be object composition (see [Alternatives to Subclassing](nsstring.md#Alternatives-to-Subclassing)). Cocoa already provides an example of this with the [NSAttributedString](nsattributedstring.md) class.

<a id="Methods-to-Override"></a>

#### Methods to Override

Any subclass of `NSString`   *must* override the primitive instance methods [length](nsstring/length.md) and [characterAtIndex:](nsstring/character%28at_%29.md). These methods must operate on the backing store that you provide for the characters of the string. For this backing store you can use a static array, a dynamically allocated buffer, a standard `NSString` object, or some other data type or mechanism. You may also choose to override, partially or fully, any other `NSString` method for which you want to provide an alternative implementation. For example, for better performance it is recommended that you override [getCharacters:range:](nsstring/getcharacters%28__range_%29.md) and give it a faster implementation.

You might want to implement an initializer for your subclass that is suited to the backing store that the subclass is managing. The `NSString` class does not have a designated initializer, so your initializer need only invoke the [init](../objectivec/nsobject-swift.class/init%28%29.md) method of `super`. The `NSString` class adopts the [NSCopying](nscopying.md), [NSMutableCopying](nsmutablecopying.md), and [NSCoding](nscoding.md) protocols; if you want instances of your own custom subclass created from copying or coding, override the methods in these protocols.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

Often a better and easier alternative to making a subclass of `NSString`—or of any other abstract, public class of a class cluster, for that matter—is object composition. This is especially the case when your intent is to add to the subclass metadata or some other attribute that is not essential to a string object. In object composition, you would have an `NSString` object as one instance variable of your custom class (typically a subclass of `NSObject`) and one or more instance variables that store the metadata that you want for the custom object. Then just design your subclass interface to include accessor methods for the embedded string object and the metadata.

If the behavior you want to add supplements that of the existing class, you could write a category on `NSString`. Keep in mind, however, that this category will be in effect for all instances of `NSString` that you use, and this might have unintended consequences.

## Topics

### Creating and Initializing Strings

- [string](nsstring/string.md): Returns an empty string.
- [init](nsstring/init%28%29.md): Returns an initialized `NSString` object that contains no characters.
- [initWithBytes:length:encoding:](nsstring/init%28bytes_length_encoding_%29.md): Returns an initialized `NSString` object containing a given number of bytes from a given buffer of bytes interpreted in a given encoding.
- [initWithBytesNoCopy:length:encoding:freeWhenDone:](nsstring/init%28bytesnocopy_length_encoding_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of bytes from a given buffer of bytes interpreted in a given encoding, and optionally frees the buffer.
- [initWithCharacters:length:](nsstring/init%28characters_length_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [initWithCharactersNoCopy:length:freeWhenDone:](nsstring/init%28charactersnocopy_length_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [initWithString:](nsstring/init%28string_%29-210xa.md): Returns an `NSString` object initialized by copying the characters from another given string.
- [initWithFormat:](nsstring/initwithformat_.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted.
- [initWithFormat:arguments:](nsstring/init%28format_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted without any localization.
- [initWithFormat:locale:](nsstring/initwithformat_locale_.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale.
- [initWithFormat:locale:arguments:](nsstring/init%28format_locale_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.
- [initWithData:encoding:](nsstring/init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [stringWithFormat:](nsstring/stringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted.
- [localizedStringWithFormat:](nsstring/localizedstringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted according to the current locale.
- [localizedUserNotificationStringForKey:arguments:](nsstring/localizedusernotificationstring%28forkey_arguments_%29.md): Returns a localized string intended for display in a notification alert.
- [stringWithCharacters:length:](nsstring/stringwithcharacters_length_.md): Returns a string containing a given number of characters taken from a given C array of UTF-16 code units.
- [stringWithString:](nsstring/stringwithstring_.md): Returns a string created by copying the characters from another given string.
- [unichar](unichar.md): Type for UTF-16 code units.

### Creating and Initializing a String from a File

- [stringWithContentsOfFile:encoding:error:](nsstring/stringwithcontentsoffile_encoding_error_.md): Returns a string created by reading data from the file at a given path interpreted using a given encoding.
- [initWithContentsOfFile:encoding:error:](nsstring/init%28contentsoffile_encoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path using a given encoding.
- [stringWithContentsOfFile:usedEncoding:error:](nsstring/stringwithcontentsoffile_usedencoding_error_.md): Returns a string created by reading data from the file at a given path and returns by reference the encoding used to interpret the file.
- [initWithContentsOfFile:usedEncoding:error:](nsstring/init%28contentsoffile_usedencoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path and returns by reference the encoding used to interpret the characters.

### Getting a String’s Length

- [length](nsstring/length.md): The number of UTF-16 code units in the receiver.
- [lengthOfBytesUsingEncoding:](nsstring/lengthofbytes%28using_%29.md): Returns the number of bytes required to store the receiver in a given encoding.
- [maximumLengthOfBytesUsingEncoding:](nsstring/maximumlengthofbytes%28using_%29.md): Returns the maximum number of bytes needed to store the receiver in a given encoding.

### Getting Characters and Bytes

- [characterAtIndex:](nsstring/character%28at_%29.md): Returns the character at a given UTF-16 code unit index.
- [getCharacters:range:](nsstring/getcharacters%28__range_%29.md): Copies characters from a given range in the receiver into a given buffer.
- [getBytes:maxLength:usedLength:encoding:options:range:remainingRange:](nsstring/getbytes%28__maxlength_usedlength_encoding_options_range_remaining_%29.md): Gets a given range of characters as bytes in a specified encoding.

### Getting C Strings

- [cStringUsingEncoding:](nsstring/cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [getCString:maxLength:encoding:](nsstring/getcstring%28__maxlength_encoding_%29.md): Converts the string to a given encoding and stores it in a buffer.
- [UTF8String](nsstring/utf8string.md): A null-terminated UTF8 representation of the string.

### Identifying and Comparing Strings

- [caseInsensitiveCompare:](nsstring/caseinsensitivecompare%28__%29.md): Returns the result of invoking [compare:options:](nsstring/compare%28__options_%29.md) with `NSCaseInsensitiveSearch` as the only option.
- [localizedCaseInsensitiveCompare:](nsstring/localizedcaseinsensitivecompare%28__%29.md): Compares the string with a given string using a case-insensitive, localized, comparison.
- [compare:](nsstring/compare%28__%29.md): Returns the result of invoking [compare:options:range:](nsstring/compare%28__options_range_%29.md) with no options and the receiver’s full extent as the range.
- [localizedCompare:](nsstring/localizedcompare%28__%29.md): Compares the string and a given string using a localized comparison.
- [compare:options:](nsstring/compare%28__options_%29.md): Compares the string with the specified string using the given options.
- [compare:options:range:](nsstring/compare%28__options_range_%29.md): Returns the result of invoking [compare:options:range:locale:](nsstring/compare%28__options_range_locale_%29.md) with a `nil` locale.
- [compare:options:range:locale:](nsstring/compare%28__options_range_locale_%29.md): Compares the string using the specified options and returns the lexical ordering for the range.
- [localizedStandardCompare:](nsstring/localizedstandardcompare%28__%29.md): Compares strings as sorted by the Finder.
- [hasPrefix:](nsstring/hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
- [hasSuffix:](nsstring/hassuffix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the ending characters of the receiver.
- [isEqualToString:](nsstring/isequal%28to_%29.md): Returns a Boolean value that indicates whether a given string is equal to the receiver using a literal Unicode-based comparison.
- [hash](nsstring/hash.md): An unsigned integer that can be used as a hash table address.
- [NSStringCompareOptions](nsstring/compareoptions.md): These values represent the options available to many of the string classes’ search and comparison methods.
- [NSStringEncodingConversionOptions](nsstring/encodingconversionoptions.md): Options for converting string encodings.

### Combining Strings

- [stringByAppendingFormat:](nsstring/stringbyappendingformat_.md): Returns a string made by appending to the receiver a string constructed from a given format string and the following arguments.
- [stringByAppendingString:](nsstring/appending%28__%29.md): Returns a new string made by appending a given string to the receiver.
- [stringByPaddingToLength:withString:startingAtIndex:](nsstring/padding%28tolength_withpad_startingat_%29.md): Returns a new string formed from the receiver by either removing characters from the end, or by appending as many occurrences as necessary of a given pad string.

### Changing Case

- [lowercaseString](nsstring/lowercased.md): A lowercase representation of the string.
- [localizedLowercaseString](nsstring/localizedlowercase.md): Returns a version of the string with all letters converted to lowercase, taking into account the current locale.
- [lowercaseStringWithLocale:](nsstring/lowercased%28with_%29.md): Returns a version of the string with all letters converted to lowercase, taking into account the specified locale.
- [uppercaseString](nsstring/uppercased.md): An uppercase representation of the string.
- [localizedUppercaseString](nsstring/localizeduppercase.md): Returns a version of the string with all letters converted to uppercase, taking into account the current locale.
- [uppercaseStringWithLocale:](nsstring/uppercased%28with_%29.md): Returns a version of the string with all letters converted to uppercase, taking into account the specified locale.
- [capitalizedString](nsstring/capitalized.md): A capitalized representation of the string.
- [localizedCapitalizedString](nsstring/localizedcapitalized.md): Returns a capitalized representation of the receiver using the current locale.
- [capitalizedStringWithLocale:](nsstring/capitalized%28with_%29.md): Returns a capitalized representation of the receiver using the specified locale.

### Dividing Strings

- [componentsSeparatedByString:](nsstring/components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [componentsSeparatedByCharactersInSet:](nsstring/components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [stringByTrimmingCharactersInSet:](nsstring/trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substringFromIndex:](nsstring/substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substringWithRange:](nsstring/substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
- [substringToIndex:](nsstring/substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.

### Normalizing Strings

- [decomposedStringWithCanonicalMapping](nsstring/decomposedstringwithcanonicalmapping.md): A string made by normalizing the string’s contents using the Unicode Normalization Form D.
- [decomposedStringWithCompatibilityMapping](nsstring/decomposedstringwithcompatibilitymapping.md): A string made by normalizing the receiver’s contents using the Unicode Normalization Form KD.
- [precomposedStringWithCanonicalMapping](nsstring/precomposedstringwithcanonicalmapping.md): A string made by normalizing the string’s contents using the Unicode Normalization Form C.
- [precomposedStringWithCompatibilityMapping](nsstring/precomposedstringwithcompatibilitymapping.md): A string made by normalizing the receiver’s contents using the Unicode Normalization Form KC.

### Folding Strings

- [stringByFoldingWithOptions:locale:](nsstring/folding%28options_locale_%29.md): Creates a string suitable for comparison by removing the specified character distinctions from a string.

### Transforming Strings

- [stringByApplyingTransform:reverse:](nsstring/applyingtransform%28__reverse_%29.md): Returns a new string by applying a specified transform to the string.
- [NSStringTransform](stringtransform.md): Constants representing an ICU string transform.

### Finding Characters and Substrings

- [containsString:](nsstring/contains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-sensitive, locale-unaware search.
- [localizedCaseInsensitiveContainsString:](nsstring/localizedcaseinsensitivecontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case-insensitive, locale-aware search.
- [localizedStandardContainsString:](nsstring/localizedstandardcontains%28__%29.md): Returns a Boolean value indicating whether the string contains a given string by performing a case and diacritic insensitive, locale-aware search.
- [rangeOfCharacterFromSet:](nsstring/rangeofcharacter%28from_%29.md): Finds and returns the range in the string of the first character from a given character set.
- [rangeOfCharacterFromSet:options:](nsstring/rangeofcharacter%28from_options_%29.md): Finds and returns the range in the string of the first character, using given options, from a given character set.
- [rangeOfCharacterFromSet:options:range:](nsstring/rangeofcharacter%28from_options_range_%29.md): Finds and returns the range in the string of the first character from a given character set found in a given range with given options.
- [rangeOfString:](nsstring/range%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string.
- [rangeOfString:options:](nsstring/range%28of_options_%29.md): Finds and returns the range of the first occurrence of a given string within the string, subject to given options.
- [rangeOfString:options:range:](nsstring/range%28of_options_range_%29.md): Finds and returns the range of the first occurrence of a given string, within the given range of the string, subject to given options.
- [rangeOfString:options:range:locale:](nsstring/range%28of_options_range_locale_%29.md): Finds and returns the range of the first occurrence of a given string within a given range of the string, subject to given options, using the specified locale, if any.
- [localizedStandardRangeOfString:](nsstring/localizedstandardrange%28of_%29.md): Finds and returns the range of the first occurrence of a given string within the string by performing a case and diacritic insensitive, locale-aware search.
- [enumerateLinesUsingBlock:](nsstring/enumeratelines%28__%29.md): Enumerates all the lines in the string.
- [enumerateSubstringsInRange:options:usingBlock:](nsstring/enumeratesubstrings%28in_options_using_%29.md): Enumerates the substrings of the specified type in the specified range of the string.

### Replacing Substrings

- [stringByReplacingOccurrencesOfString:withString:](nsstring/replacingoccurrences%28of_with_%29.md): Returns a new string in which all occurrences of a target string in the receiver are replaced by another given string.
- [stringByReplacingOccurrencesOfString:withString:options:range:](nsstring/replacingoccurrences%28of_with_options_range_%29.md): Returns a new string in which all occurrences of a target string in a specified range of the receiver are replaced by another given string.
- [stringByReplacingCharactersInRange:withString:](nsstring/replacingcharacters%28in_with_%29.md): Returns a new string in which the characters in a specified range of the receiver are replaced by a given string.

### Getting a Shared Prefix

- [commonPrefixWithString:options:](nsstring/commonprefix%28with_options_%29.md): Returns a string containing characters the receiver and a given string have in common, starting from the beginning of each up to the first characters that aren’t equivalent.

### Performing Linguistic Analysis

- [enumerateLinguisticTagsInRange:scheme:options:orthography:usingBlock:](nsstring/enumeratelinguistictags%28in_scheme_options_orthography_using_%29.md): Deprecated. Performs linguistic analysis on the specified string by enumerating the specific range of the string, providing the Block with the located tags.
- [linguisticTagsInRange:scheme:options:orthography:tokenRanges:](nsstring/linguistictags%28in_scheme_options_orthography_tokenranges_%29.md): Deprecated. Returns an array of linguistic tags for the specified range and requested tags within the receiving string.
- [NSStringEnumerationOptions](nsstring/enumerationoptions.md): Constants to specify kinds of substrings and styles of enumeration.

### Determining Line and Paragraph Ranges

- [getLineStart:end:contentsEnd:forRange:](nsstring/getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [lineRangeForRange:](nsstring/linerange%28for_%29.md): Returns the range of characters representing the line or lines containing a given range.
- [getParagraphStart:end:contentsEnd:forRange:](nsstring/getparagraphstart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.
- [paragraphRangeForRange:](nsstring/paragraphrange%28for_%29.md): Returns the range of characters representing the paragraph or paragraphs containing a given range.

### Determining Composed Character Sequences

- [rangeOfComposedCharacterSequenceAtIndex:](nsstring/rangeofcomposedcharactersequence%28at_%29.md): Returns the range in the receiver of the composed character sequence located at a given index.
- [rangeOfComposedCharacterSequencesForRange:](nsstring/rangeofcomposedcharactersequences%28for_%29.md): Returns the range in the string of the composed character sequences for a given range.

### Writing to a File or URL

- [writeToFile:atomically:encoding:error:](nsstring/write%28tofile_atomically_encoding_%29.md): Writes the contents of the receiver to a file at a given path using a given encoding.
- [writeToURL:atomically:encoding:error:](nsstring/write%28to_atomically_encoding_%29.md): Writes the contents of the receiver to the URL specified by `url` using the specified encoding.

### Converting String Contents Into a Property List

- [propertyList](nsstring/propertylist%28%29.md): Parses the receiver as a text representation of a property list, returning an `NSString`, `NSData`, `NSArray`, or `NSDictionary` object, according to the topmost element.
- [propertyListFromStringsFileFormat](nsstring/propertylistfromstringsfileformat%28%29.md): Returns a dictionary object initialized with the keys and values found in the receiver.

### Sizing and Drawing Strings

- [drawAtPoint:withAttributes:](nsstring/draw%28at_withattributes_%29.md): Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.
- [drawInRect:withAttributes:](nsstring/draw%28in_withattributes_%29.md): Draws the attributed string inside the specified bounding rectangle.
- [drawWithRect:options:attributes:context:](nsstring/draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [boundingRectWithSize:options:attributes:context:](nsstring/boundingrect%28with_options_attributes_context_%29.md): Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [sizeWithAttributes:](nsstring/size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.
- [variantFittingPresentationWidth:](nsstring/variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

### Getting Numeric Values

- [doubleValue](nsstring/doublevalue.md): The floating-point value of the string as a `double`.
- [floatValue](nsstring/floatvalue.md): The floating-point value of the string as a `float`.
- [intValue](nsstring/intvalue.md): The integer value of the string.
- [integerValue](nsstring/integervalue.md): The `NSInteger` value of the string.
- [longLongValue](nsstring/longlongvalue.md): The `long long` value of the string.
- [boolValue](nsstring/boolvalue.md): The Boolean value of the string.

### Working with Encodings

- [availableStringEncodings](nsstring/availablestringencodings.md): Returns a zero-terminated list of the encodings string objects support in the application’s environment.
- [defaultCStringEncoding](nsstring/defaultcstringencoding.md): Returns the C-string encoding assumed for any method accepting a C string as an argument.
- [stringEncodingForData:encodingOptions:convertedString:usedLossyConversion:](nsstring/stringencoding%28for_encodingoptions_convertedstring_usedlossyconversion_%29.md): Returns the string encoding for the given data as detected by attempting to create a string according to the specified encoding options.
- [localizedNameOfStringEncoding:](nsstring/localizedname%28of_%29.md): Returns a human-readable string giving the name of a given encoding.
- [canBeConvertedToEncoding:](nsstring/canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.
- [dataUsingEncoding:](nsstring/data%28using_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [dataUsingEncoding:allowLossyConversion:](nsstring/data%28using_allowlossyconversion_%29.md): Returns an `NSData` object containing a representation of the receiver encoded using a given encoding.
- [description](nsstring/description.md)
- [fastestEncoding](nsstring/fastestencoding.md): The fastest encoding to which the receiver may be converted without loss of information.
- [smallestEncoding](nsstring/smallestencoding.md): The smallest encoding to which the receiver can be converted without loss of information.
- [NSStringEncoding](nsstringencoding.md): The following constants are provided by `NSString` as possible string encodings.
- [NSStringEncodingDetectionOptionsKey](stringencodingdetectionoptionskey.md)
- [NSString Handling Exception Names](nsstring-handling-exception-names.md): These constants define the names of exceptions raised if `NSString` cannot represent a string in a given encoding, or parse a string as a property list.

### Working with Paths

- [pathWithComponents:](nsstring/path%28withcomponents_%29.md): Returns a string built from the strings in a given array by concatenating them with a path separator between each pair.
- [pathComponents](nsstring/pathcomponents.md): The file-system path components of the receiver.
- [completePathIntoString:caseSensitive:matchesIntoArray:filterTypes:](nsstring/completepath%28into_casesensitive_matchesinto_filtertypes_%29.md): Interprets the receiver as a path in the file system and attempts to perform filename completion, returning a numeric value that indicates whether a match was possible, and by reference the longest path that matches the receiver.
- [fileSystemRepresentation](nsstring/filesystemrepresentation.md): A file system-specific representation of the receiver.
- [getFileSystemRepresentation:maxLength:](nsstring/getfilesystemrepresentation%28__maxlength_%29.md): Interprets the receiver as a system-independent path and fills a buffer with a C-string in a format and encoding suitable for use with file-system calls.
- [absolutePath](nsstring/isabsolutepath.md): A Boolean value that indicates whether the receiver represents an absolute path.
- [lastPathComponent](nsstring/lastpathcomponent.md): The last path component of the receiver.
- [pathExtension](nsstring/pathextension.md): The path extension, if any, of the string as interpreted as a path.
- [stringByAbbreviatingWithTildeInPath](nsstring/abbreviatingwithtildeinpath.md): A new string that replaces the current home directory portion of the current path with a tilde (`~`) character.
- [stringByAppendingPathComponent:](nsstring/appendingpathcomponent%28__%29.md): Returns a new string made by appending to the receiver a given string.
- [stringByAppendingPathExtension:](nsstring/appendingpathextension%28__%29.md): Returns a new string made by appending to the receiver an extension separator followed by a given extension.
- [stringByDeletingLastPathComponent](nsstring/deletinglastpathcomponent.md): A new string made by deleting the last path component from the receiver, along with any final path separator.
- [stringByDeletingPathExtension](nsstring/deletingpathextension.md): A new string made by deleting the extension (if any, and only the last) from the receiver.
- [stringByExpandingTildeInPath](nsstring/expandingtildeinpath.md): A new string made by expanding the initial component of the receiver to its full path value.
- [stringByResolvingSymlinksInPath](nsstring/resolvingsymlinksinpath.md): A new string made from the receiver by resolving all symbolic links and standardizing path.
- [stringByStandardizingPath](nsstring/standardizingpath.md): A new string made by removing extraneous path components from the receiver.
- [stringsByAppendingPaths:](nsstring/strings%28byappendingpaths_%29.md): Returns an array of strings made by separately appending to the receiver each string in a given array.

### Working with URL Strings

- [stringByAddingPercentEncodingWithAllowedCharacters:](nsstring/addingpercentencoding%28withallowedcharacters_%29.md): Returns a new string made from the receiver by replacing all characters not in the specified set with percent-encoded characters.
- [stringByRemovingPercentEncoding](nsstring/removingpercentencoding.md): Returns a new string made from the receiver by replacing all percent encoded sequences with the matching UTF-8 characters.

### Deprecated

- [stringWithCString:](nsstring/string%28withcstring_%29.md): Deprecated. Creates a new string using a given C-string.
- [stringWithCString:length:](nsstring/string%28withcstring_length_%29.md): Deprecated. Returns a string containing the characters in a given C-string.
- [stringWithContentsOfFile:](nsstring/string%28withcontentsoffile_%29.md): Deprecated. Returns a string created by reading data from the file named by a given path.
- [initWithContentsOfFile:](nsstring/init%28contentsoffile_%29.md): Deprecated. Initializes the receiver, a newly allocated `NSString` object, by reading data from the file named by `path`.
- [stringWithContentsOfURL:](nsstring/string%28withcontentsof_%29.md): Deprecated. Returns a string created by reading data from the file named by a given URL.
- [writeToFile:atomically:](nsstring/write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the receiver to the file specified by a given path.
- [writeToURL:atomically:](nsstring/write%28to_atomically_%29.md): Deprecated. Writes the contents of the receiver to the location specified by a given URL.
- [getCharacters:](nsstring/getcharacters%28__%29.md): Deprecated. Copies all characters from the receiver into a given buffer.
- [cString](nsstring/cstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding.
- [lossyCString](nsstring/lossycstring%28%29.md): Deprecated. Returns a representation of the receiver as a C string in the default C-string encoding, possibly losing information in converting to that encoding.
- [cStringLength](nsstring/cstringlength%28%29.md): Deprecated. Returns the length in char-sized units of the receiver’s C-string representation in the default C-string encoding.
- [getCString:](nsstring/getcstring%28__%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](nsstring/getcstring%28__maxlength_range_remaining_%29.md) with `NSMaximumStringLength` as the maximum length, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:](nsstring/getcstring%28__maxlength_%29.md): Deprecated. Invokes [getCString:maxLength:range:remainingRange:](nsstring/getcstring%28__maxlength_range_remaining_%29.md) with `maxLength` as the maximum length in char-sized units, the receiver’s entire extent as the range, and `NULL` for the remaining range.
- [getCString:maxLength:range:remainingRange:](nsstring/getcstring%28__maxlength_range_remaining_%29.md): Deprecated. Converts the receiver’s content to the default C-string encoding and stores them in a given buffer.
- [stringByAddingPercentEscapesUsingEncoding:](nsstring/addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.
- [stringByReplacingPercentEscapesUsingEncoding:](nsstring/replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
- [sizeWithFont:](nsstring/sizewithfont_.md): Deprecated. Returns the size of the string if it were to be rendered with the specified font on a single line.
- [sizeWithFont:forWidth:lineBreakMode:](nsstring/sizewithfont_forwidth_linebreakmode_.md): Deprecated. Returns the size of the string if it were to be rendered with the specified font and line attributes on a single line.
- [sizeWithFont:minFontSize:actualFontSize:forWidth:lineBreakMode:](nsstring/sizewithfont_minfontsize_actualfontsize_forwidth_linebreakmode_.md): Deprecated. Returns the size of the string if it were rendered with the specified constraints, including a variable font size, on a single line.
- [sizeWithFont:constrainedToSize:](nsstring/sizewithfont_constrainedtosize_.md): Deprecated. Returns the size of the string if it were rendered and constrained to the specified size.
- [sizeWithFont:constrainedToSize:lineBreakMode:](nsstring/sizewithfont_constrainedtosize_linebreakmode_.md): Deprecated. Returns the size of the string if it were rendered with the specified constraints.
- [drawAtPoint:withFont:](nsstring/drawatpoint_withfont_.md): Deprecated. Draws the string in a single line at the specified point in the current graphics context using the specified font.
- [drawAtPoint:forWidth:withFont:lineBreakMode:](nsstring/drawatpoint_forwidth_withfont_linebreakmode_.md): Deprecated. Draws the string in a single line at the specified point in the current graphics context using the specified font and attributes.
- [drawAtPoint:forWidth:withFont:fontSize:lineBreakMode:baselineAdjustment:](nsstring/drawatpoint_forwidth_withfont_fontsize_linebreakmode_baselineadjustment_.md): Deprecated. Draws the string in a single line at the specified point in the current graphics context using the specified font and attributes.
- [drawAtPoint:forWidth:withFont:minFontSize:actualFontSize:lineBreakMode:baselineAdjustment:](nsstring/drawatpoint_forwidth_withfont_minfontsize_actualfontsize_linebreakmode_baselineadjustment_.md): Deprecated. Draws the string in a single line with the specified font and attributes, adjusting the font attributes as needed to render as much of the text as possible.
- [drawInRect:withFont:](nsstring/drawinrect_withfont_.md): Deprecated. Draws the string in the current graphics context using the specified bounding rectangle and font.
- [drawInRect:withFont:lineBreakMode:](nsstring/drawinrect_withfont_linebreakmode_.md): Deprecated. Draws the string in the current graphics context using the specified bounding rectangle, font, and attributes.
- [drawInRect:withFont:lineBreakMode:alignment:](nsstring/drawinrect_withfont_linebreakmode_alignment_.md): Deprecated. Draws the string in the current graphics context using the specified bounding rectangle, font and attributes.
- [drawWithRect:options:attributes:](nsstring/draw%28with_options_attributes_%29.md): Deprecated. Draws the receiver with the specified options and other display characteristics of the given attributes, within the specified rectangle in the current graphics context.
- [boundingRectWithSize:options:attributes:](nsstring/boundingrect%28with_options_attributes_%29.md): Deprecated. Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [NSMaximumStringLength](nsmaximumstringlength.md): Deprecated. Maximum number of characters in an `NSString` object.

### Instance Methods

- [stringByAppendingPathComponent:conformingToType:](nsstring/appendingpathcomponent%28__conformingto_%29.md)
- [stringByAppendingPathExtensionForType:](nsstring/appendingpathextension%28for_%29.md)
- [initWithBytesNoCopy:length:encoding:deallocator:](nsstring/init%28bytesnocopy_length_encoding_deallocator_%29.md)
- [initWithCString:](nsstring/init%28cstring_%29-5mpk8.md): Deprecated.
- [initWithCString:encoding:](nsstring/init%28cstring_encoding_%29-20f9h.md): Returns an @c NSString object initialized using the characters in a given C array, interpreted according to a given encoding.
- [initWithCString:length:](nsstring/init%28cstring_length_%29-4bbpi.md): Deprecated.
- [initWithCStringNoCopy:length:freeWhenDone:](nsstring/init%28cstringnocopy_length_freewhendone_%29-7ssxw.md): Deprecated.
- [initWithCharactersNoCopy:length:deallocator:](nsstring/init%28charactersnocopy_length_deallocator_%29.md)
- [initWithCoder:](nsstring/init%28coder_%29.md)
- [initWithContentsOfURL:](nsstring/init%28contentsof_%29.md): Deprecated. Returns an @c NSString object initialized by reading data from the URL named by @c url.
- [initWithContentsOfURL:encoding:error:](nsstring/init%28contentsof_encoding_%29.md): Returns an @c NSString object initialized by reading data from a given URL interpreted using a given encoding.
- [initWithContentsOfURL:usedEncoding:error:](nsstring/init%28contentsof_usedencoding_%29.md): Returns an @c NSString object initialized by reading data from a given URL and returns by reference the encoding used to interpret the data.
- [initWithUTF8String:](nsstring/init%28utf8string_%29-vg2b.md): Returns an @c NSString object initialized by copying the characters from a given C array of UTF8-encoded bytes.
- [initWithValidatedFormat:validFormatSpecifiers:arguments:error:](nsstring/initwithvalidatedformat_validformatspecifiers_arguments_error_.md)
- [initWithValidatedFormat:validFormatSpecifiers:error:](nsstring/initwithvalidatedformat_validformatspecifiers_error_.md)
- [initWithValidatedFormat:validFormatSpecifiers:locale:arguments:error:](nsstring/initwithvalidatedformat_validformatspecifiers_locale_arguments_error_.md)
- [initWithValidatedFormat:validFormatSpecifiers:locale:error:](nsstring/initwithvalidatedformat_validformatspecifiers_locale_error_.md)
- [sr_sensorForDeletionRecordsFromSensor](nsstring/sr_sensorfordeletionrecordsfromsensor%28%29.md): Deprecated.

### Type Methods

- [deferredLocalizedIntentsStringWithFormat:](nsstring/deferredlocalizedintentsstringwithformat_.md)
- [deferredLocalizedIntentsStringWithFormat:fromTable:](nsstring/deferredlocalizedintentsstringwithformat_fromtable_.md)
- [deferredLocalizedIntentsStringWithFormat:fromTable:arguments:](nsstring/deferredlocalizedintentsstringwithformat_fromtable_arguments_.md)
- [localizedStringWithValidatedFormat:validFormatSpecifiers:error:](nsstring/localizedstringwithvalidatedformat_validformatspecifiers_error_.md)
- [stringWithCString:encoding:](nsstring/stringwithcstring_encoding_.md): Returns a string containing the bytes in a given C array, interpreted according to a given encoding.
- [stringWithContentsOfURL:encoding:error:](nsstring/stringwithcontentsofurl_encoding_error_.md): Returns a string created by reading data from the file at a given path interpreted using a given encoding.
- [stringWithContentsOfURL:usedEncoding:error:](nsstring/stringwithcontentsofurl_usedencoding_error_.md): Returns a string created by reading data from the file at a given URL and returns by reference the encoding used to interpret the data.
- [stringWithUTF8String:](nsstring/stringwithutf8string_.md): Returns a string created by copying the data from a given C array of UTF8-encoded bytes.
- [stringWithValidatedFormat:validFormatSpecifiers:error:](nsstring/stringwithvalidatedformat_validformatspecifiers_error_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableString](nsmutablestring.md)
- [NSSimpleCString](nssimplecstring.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [CNKeyDescriptor](../contacts/cnkeydescriptor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSItemProviderReading](nsitemproviderreading.md)
- [NSItemProviderWriting](nsitemproviderwriting.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSPasteboardReading](https://developer.apple.com/documentation/appkit/nspasteboardreading)
- [NSPasteboardWriting](https://developer.apple.com/documentation/appkit/nspasteboardwriting)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Strings

- [NSMutableString](nsmutablestring.md): A dynamic plain-text Unicode string object.
