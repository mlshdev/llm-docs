> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstring](https://developer.apple.com/documentation/corefoundation/cfstring)

# CFString (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFString
```

<a id="Overview"></a>

## Overview

CFString provides a suite of efficient string-manipulation and string-conversion functions. It offers seamless Unicode support and facilitates the sharing of data between Cocoa and C-based programs. CFString objects are immutable—use [CFMutableString](cfmutablestring.md) to create and manage a string that can be changed after it has been created.

CFString has two primitive functions, [CFStringGetLength(\_:)](cfstringgetlength%28__%29.md) and [CFStringGetCharacterAtIndex(\_:\_:)](cfstringgetcharacteratindex%28____%29.md), that provide the basis for all other functions in its interface. The `CFStringGetLength` function returns the total number (in terms of UTF-16 code pairs) of characters in the string. The `CFStringGetCharacterAtIndex` function gives access to each character in the string by index, with index values starting at `0`.

CFString provides functions for finding and comparing strings. It also provides functions for reading numeric values from strings, for combining strings in various ways, and for converting a string to different forms (such as encoding and case changes). A number of functions, for example `CFStringFindWithOptions`, allow you to specify a range over which to operate within a string. The specified range must not exceed the length of the string. Debugging options may help you to catch any errors that arise if a range does exceed a string’s length.

Like other Core Foundation types, you can hash CFStrings using the [CFHash(\_:)](cfhash%28__%29.md) function. You should never, though, store a hash value outside of your application and expect it to be useful if you read it back in later (hash values may change between different releases of the operating system).

CFString is “toll-free bridged” with its Cocoa Foundation counterpart, [NSString](../foundation/nsstring.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSString *` parameter, you can pass in a `CFStringRef`, and in a function where you see a `CFStringRef` parameter, you can pass in an NSString instance. This also applies to concrete subclasses of NSString. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a CFString

- [CFStringCreateArrayBySeparatingStrings(\_:\_:\_:)](cfstringcreatearraybyseparatingstrings%28______%29.md): Creates an array of CFString objects from a single CFString object.
- [CFStringCreateByCombiningStrings(\_:\_:\_:)](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateCopy(\_:\_:)](cfstringcreatecopy%28____%29.md): Creates an immutable copy of a string.
- [CFStringCreateFromExternalRepresentation(\_:\_:\_:)](cfstringcreatefromexternalrepresentation%28______%29.md): Creates a string from its “external representation.”
- [CFStringCreateWithBytes(\_:\_:\_:\_:\_:)](cfstringcreatewithbytes%28__________%29.md): Creates a string from a buffer containing characters in a specified encoding.
- [CFStringCreateWithBytesNoCopy(\_:\_:\_:\_:\_:\_:)](cfstringcreatewithbytesnocopy%28____________%29.md): Creates a string from a buffer, containing characters in a specified encoding, that might serve as the backing store for the new string.
- [CFStringCreateWithCharacters(\_:\_:\_:)](cfstringcreatewithcharacters%28______%29.md): Creates a string from a buffer of Unicode characters.
- [CFStringCreateWithCharactersNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcharactersnocopy%28________%29.md): Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.
- [CFStringCreateWithCString(\_:\_:\_:)](cfstringcreatewithcstring%28______%29.md): Creates an immutable string from a C string.
- [CFStringCreateWithCStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormatAndArguments(\_:\_:\_:\_:)](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString(\_:\_:\_:)](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring(\_:\_:\_:)](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.

### Searching Strings

- [CFStringCreateArrayWithFindResults(\_:\_:\_:\_:\_:)](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFind(\_:\_:\_:)](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindCharacterFromSet(\_:\_:\_:\_:\_:)](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions(\_:\_:\_:\_:\_:)](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale(\_:\_:\_:\_:\_:\_:)](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
- [CFStringGetLineBounds(\_:\_:\_:\_:\_:)](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.

### Comparing Strings

- [CFStringCompare(\_:\_:\_:)](cfstringcompare%28______%29.md): Compares one string with another string.
- [CFStringCompareWithOptions(\_:\_:\_:\_:)](cfstringcomparewithoptions%28________%29.md): Compares a range of the characters in one string with that of another string.
- [CFStringCompareWithOptionsAndLocale(\_:\_:\_:\_:\_:)](cfstringcomparewithoptionsandlocale%28__________%29.md): Compares a range of the characters in one string with another string using a given locale.
- [CFStringHasPrefix(\_:\_:)](cfstringhasprefix%28____%29.md): Determines if the character data of a string begin with a specified sequence of characters.
- [CFStringHasSuffix(\_:\_:)](cfstringhassuffix%28____%29.md): Determines if a string ends with a specified sequence of characters.

### Accessing Characters

- [CFStringCreateExternalRepresentation(\_:\_:\_:\_:)](cfstringcreateexternalrepresentation%28________%29.md): Creates an “external representation” of a CFString object, that is, a CFData object.
- [CFStringGetBytes(\_:\_:\_:\_:\_:\_:\_:\_:)](cfstringgetbytes%28________________%29.md): Fetches a range of the characters from a string into a byte buffer after converting the characters to a specified encoding.
- [CFStringGetCharacterAtIndex(\_:\_:)](cfstringgetcharacteratindex%28____%29.md): Returns the Unicode character at a specified location in a string.
- [CFStringGetCharacters(\_:\_:\_:)](cfstringgetcharacters%28______%29.md): Copies a range of the Unicode characters from a string to a user-provided buffer.
- [CFStringGetCharactersPtr(\_:)](cfstringgetcharactersptr%28__%29.md): Quickly obtains a pointer to the contents of a string as a buffer of Unicode characters.
- [CFStringGetCharacterFromInlineBuffer(\_:\_:)](cfstringgetcharacterfrominlinebuffer%28____%29.md): Returns the Unicode character at a specific location in an in-line buffer.
- [CFStringGetCString(\_:\_:\_:\_:)](cfstringgetcstring%28________%29.md): Copies the character contents of a string to a local C string buffer after converting the characters to a given encoding.
- [CFStringGetCStringPtr(\_:\_:)](cfstringgetcstringptr%28____%29.md): Quickly obtains a pointer to a C-string buffer containing the characters of a string in a given encoding.
- [CFStringGetLength(\_:)](cfstringgetlength%28__%29.md): Returns the number (in terms of UTF-16 code pairs) of Unicode characters in a string.
- [CFStringGetPascalString(\_:\_:\_:\_:)](cfstringgetpascalstring%28________%29.md): Copies the character contents of a CFString object to a local Pascal string buffer after converting the characters to a requested encoding.
- [CFStringGetPascalStringPtr(\_:\_:)](cfstringgetpascalstringptr%28____%29.md): Quickly obtains a pointer to a Pascal buffer containing the characters of a string in a given encoding.
- [CFStringGetRangeOfComposedCharactersAtIndex(\_:\_:)](cfstringgetrangeofcomposedcharactersatindex%28____%29.md): Returns the range of the composed character sequence at a specified index.
- [CFStringInitInlineBuffer(\_:\_:\_:)](cfstringinitinlinebuffer%28______%29.md): Initializes an in-line buffer to use for efficient access of a CFString object’s characters.

### Working With Hyphenation

- [CFStringGetHyphenationLocationBeforeIndex(\_:\_:\_:\_:\_:\_:)](cfstringgethyphenationlocationbeforeindex%28____________%29.md): Retrieve the first potential hyphenation location found before the specified location.
- [CFStringIsHyphenationAvailableForLocale(\_:)](cfstringishyphenationavailableforlocale%28__%29.md): Returns a Boolean value that indicates whether hyphenation data is available.

### Working With Encodings

- [CFStringConvertEncodingToIANACharSetName(\_:)](cfstringconvertencodingtoianacharsetname%28__%29.md): Returns the name of the IANA registry “charset” that is the closest mapping to a specified string encoding.
- [CFStringConvertEncodingToNSStringEncoding(\_:)](cfstringconvertencodingtonsstringencoding%28__%29.md): Returns the Cocoa encoding constant that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertEncodingToWindowsCodepage(\_:)](cfstringconvertencodingtowindowscodepage%28__%29.md): Returns the Windows codepage identifier that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertIANACharSetNameToEncoding(\_:)](cfstringconvertianacharsetnametoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given IANA registry “charset” name.
- [CFStringConvertNSStringEncodingToEncoding(\_:)](cfstringconvertnsstringencodingtoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Cocoa encoding.
- [CFStringConvertWindowsCodepageToEncoding(\_:)](cfstringconvertwindowscodepagetoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Windows codepage identifier.
- [CFStringGetFastestEncoding(\_:)](cfstringgetfastestencoding%28__%29.md): Returns for a CFString object the character encoding that requires the least conversion time.
- [CFStringGetListOfAvailableEncodings()](cfstringgetlistofavailableencodings%28%29.md): Returns a pointer to a list of string encodings supported by the current system.
- [CFStringGetMaximumSizeForEncoding(\_:\_:)](cfstringgetmaximumsizeforencoding%28____%29.md): Returns the maximum number of bytes a string of a specified length (in Unicode characters) will take up if encoded in a specified encoding.
- [CFStringGetMostCompatibleMacStringEncoding(\_:)](cfstringgetmostcompatiblemacstringencoding%28__%29.md): Returns the most compatible Mac OS script value for the given input encoding.
- [CFStringGetNameOfEncoding(\_:)](cfstringgetnameofencoding%28__%29.md): Returns the canonical name of a specified string encoding.
- [CFStringGetSmallestEncoding(\_:)](cfstringgetsmallestencoding%28__%29.md): Returns the smallest encoding on the current system for the character contents of a string.
- [CFStringGetSystemEncoding()](cfstringgetsystemencoding%28%29.md): Returns the default encoding used by the operating system when it creates strings.
- [CFStringIsEncodingAvailable(\_:)](cfstringisencodingavailable%28__%29.md): Determines whether a given Core Foundation string encoding is available on the current system.

### Getting Numeric Values

- [CFStringGetDoubleValue(\_:)](cfstringgetdoublevalue%28__%29.md): Returns the primary `double` value represented by a string.
- [CFStringGetIntValue(\_:)](cfstringgetintvalue%28__%29.md): Returns the integer value represented by a string.

### Getting String Properties

- [CFShowStr(\_:)](cfshowstr%28__%29.md): Prints the attributes of a string during debugging.
- [CFStringGetTypeID()](cfstringgettypeid%28%29.md): Returns the type identifier for the CFString opaque type.

### String File System Representations

- [CFStringCreateWithFileSystemRepresentation(\_:\_:)](cfstringcreatewithfilesystemrepresentation%28____%29.md): Creates a CFString from a zero-terminated POSIX file system representation.
- [CFStringGetFileSystemRepresentation(\_:\_:\_:)](cfstringgetfilesystemrepresentation%28______%29.md): Extracts the contents of a string as a `NULL`-terminated 8-bit string appropriate for passing to POSIX APIs.
- [CFStringGetMaximumSizeOfFileSystemRepresentation(\_:)](cfstringgetmaximumsizeoffilesystemrepresentation%28__%29.md): Determines the upper bound on the number of bytes required to hold the file system representation of the string.

### Getting Paragraph Bounds

- [CFStringGetParagraphBounds(\_:\_:\_:\_:\_:)](cfstringgetparagraphbounds%28__________%29.md): Given a range of characters in a string, obtains the paragraph bounds—that is, the indexes of the first character and the final characters of the paragraph(s) containing the range.

### Managing Surrogates

- [CFStringGetLongCharacterForSurrogatePair(\_:\_:)](cfstringgetlongcharacterforsurrogatepair%28____%29.md): Returns a UTF-32 character that corresponds to a given pair of UTF-16 surrogate characters.
- [CFStringGetSurrogatePairForLongCharacter(\_:\_:)](cfstringgetsurrogatepairforlongcharacter%28____%29.md): Maps a given UTF-32 character to a pair of UTF-16 surrogate characters.
- [CFStringIsSurrogateHighCharacter(\_:)](cfstringissurrogatehighcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a high character in a surrogate pair.
- [CFStringIsSurrogateLowCharacter(\_:)](cfstringissurrogatelowcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a low character in a surrogate pair.

### Data Types

- [CFStringEncoding](cfstringencoding.md): An integer type for constants used to specify supported string encodings in various CFString functions.
- [CFStringEncodings](cfstringencodings.md): Index type for constants used to specify external string encodings.
- [CFStringCompareFlags](cfstringcompareflags.md): A [CFOptionFlags](cfoptionflags.md) type for specifying options for string comparison .
- [CFStringInlineBuffer](cfstringinlinebuffer.md): Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.

### Constants

- [String Comparison Flags](string-comparison-flags.md): Flags that specify how string comparisons are performed.
- [CFStringBuiltInEncodings](cfstringbuiltinencodings.md): Encodings that are built-in on all platforms on which macOS runs.
- [Invalid String Encoding Flag](invalid-string-encoding-flag.md): Special value returned from functions to indicate a string encoding that is not supported or recognized by CFString.
- [External String Encodings](external-string-encodings.md): `CFStringEncoding` constants for encodings that may be supported by CFString.

## Relationships

### Inherited By

- [CFMutableString](cfmutablestring.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [Data Formatting Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/CFDataFormatting.html#//apple_ref/doc/uid/10000176i)
- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFStringRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFString * CFStringRef;
```

<a id="Overview"></a>

## Overview

CFString provides a suite of efficient string-manipulation and string-conversion functions. It offers seamless Unicode support and facilitates the sharing of data between Cocoa and C-based programs. CFString objects are immutable—use [CFMutableStringRef](cfmutablestring.md) to create and manage a string that can be changed after it has been created.

CFString has two primitive functions, [CFStringGetLength](cfstringgetlength%28__%29.md) and [CFStringGetCharacterAtIndex](cfstringgetcharacteratindex%28____%29.md), that provide the basis for all other functions in its interface. The `CFStringGetLength` function returns the total number (in terms of UTF-16 code pairs) of characters in the string. The `CFStringGetCharacterAtIndex` function gives access to each character in the string by index, with index values starting at `0`.

CFString provides functions for finding and comparing strings. It also provides functions for reading numeric values from strings, for combining strings in various ways, and for converting a string to different forms (such as encoding and case changes). A number of functions, for example `CFStringFindWithOptions`, allow you to specify a range over which to operate within a string. The specified range must not exceed the length of the string. Debugging options may help you to catch any errors that arise if a range does exceed a string’s length.

Like other Core Foundation types, you can hash CFStrings using the [CFHash](cfhash%28__%29.md) function. You should never, though, store a hash value outside of your application and expect it to be useful if you read it back in later (hash values may change between different releases of the operating system).

CFString is “toll-free bridged” with its Cocoa Foundation counterpart, [NSString](../foundation/nsstring.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSString *` parameter, you can pass in a `CFStringRef`, and in a function where you see a `CFStringRef` parameter, you can pass in an NSString instance. This also applies to concrete subclasses of NSString. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a CFString

- [CFSTR](cfstr.md): Creates an immutable string from a constant compile-time string.
- [CFStringCreateArrayBySeparatingStrings](cfstringcreatearraybyseparatingstrings%28______%29.md): Creates an array of CFString objects from a single CFString object.
- [CFStringCreateByCombiningStrings](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateCopy](cfstringcreatecopy%28____%29.md): Creates an immutable copy of a string.
- [CFStringCreateFromExternalRepresentation](cfstringcreatefromexternalrepresentation%28______%29.md): Creates a string from its “external representation.”
- [CFStringCreateWithBytes](cfstringcreatewithbytes%28__________%29.md): Creates a string from a buffer containing characters in a specified encoding.
- [CFStringCreateWithBytesNoCopy](cfstringcreatewithbytesnocopy%28____________%29.md): Creates a string from a buffer, containing characters in a specified encoding, that might serve as the backing store for the new string.
- [CFStringCreateWithCharacters](cfstringcreatewithcharacters%28______%29.md): Creates a string from a buffer of Unicode characters.
- [CFStringCreateWithCharactersNoCopy](cfstringcreatewithcharactersnocopy%28________%29.md): Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.
- [CFStringCreateWithCString](cfstringcreatewithcstring%28______%29.md): Creates an immutable string from a C string.
- [CFStringCreateWithCStringNoCopy](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormat](cfstringcreatewithformat.md): Creates an immutable string from a formatted string and a variable number of arguments.
- [CFStringCreateWithFormatAndArguments](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.

### Searching Strings

- [CFStringCreateArrayWithFindResults](cfstringcreatearraywithfindresults%28__________%29.md): Searches a string for multiple occurrences of a substring and creates an array of ranges identifying the locations of these substrings within the target string.
- [CFStringFind](cfstringfind%28______%29.md): Searches for a substring within a string and, if it is found, yields the range of the substring within the object’s characters.
- [CFStringFindCharacterFromSet](cfstringfindcharacterfromset%28__________%29.md): Query the range of the first character contained in the specified character set.
- [CFStringFindWithOptions](cfstringfindwithoptions%28__________%29.md): Searches for a substring within a range of the characters represented by a string and, if the substring is found, returns its range within the object’s characters.
- [CFStringFindWithOptionsAndLocale](cfstringfindwithoptionsandlocale%28____________%29.md): Returns a Boolean value that indicates whether a given string was found in a given source string.
- [CFStringGetLineBounds](cfstringgetlinebounds%28__________%29.md): Given a range of characters in a string, obtains the line bounds—that is, the indexes of the first character and the final characters of the lines containing the range.

### Comparing Strings

- [CFStringCompare](cfstringcompare%28______%29.md): Compares one string with another string.
- [CFStringCompareWithOptions](cfstringcomparewithoptions%28________%29.md): Compares a range of the characters in one string with that of another string.
- [CFStringCompareWithOptionsAndLocale](cfstringcomparewithoptionsandlocale%28__________%29.md): Compares a range of the characters in one string with another string using a given locale.
- [CFStringHasPrefix](cfstringhasprefix%28____%29.md): Determines if the character data of a string begin with a specified sequence of characters.
- [CFStringHasSuffix](cfstringhassuffix%28____%29.md): Determines if a string ends with a specified sequence of characters.

### Accessing Characters

- [CFStringCreateExternalRepresentation](cfstringcreateexternalrepresentation%28________%29.md): Creates an “external representation” of a CFString object, that is, a CFData object.
- [CFStringGetBytes](cfstringgetbytes%28________________%29.md): Fetches a range of the characters from a string into a byte buffer after converting the characters to a specified encoding.
- [CFStringGetCharacterAtIndex](cfstringgetcharacteratindex%28____%29.md): Returns the Unicode character at a specified location in a string.
- [CFStringGetCharacters](cfstringgetcharacters%28______%29.md): Copies a range of the Unicode characters from a string to a user-provided buffer.
- [CFStringGetCharactersPtr](cfstringgetcharactersptr%28__%29.md): Quickly obtains a pointer to the contents of a string as a buffer of Unicode characters.
- [CFStringGetCharacterFromInlineBuffer](cfstringgetcharacterfrominlinebuffer%28____%29.md): Returns the Unicode character at a specific location in an in-line buffer.
- [CFStringGetCString](cfstringgetcstring%28________%29.md): Copies the character contents of a string to a local C string buffer after converting the characters to a given encoding.
- [CFStringGetCStringPtr](cfstringgetcstringptr%28____%29.md): Quickly obtains a pointer to a C-string buffer containing the characters of a string in a given encoding.
- [CFStringGetLength](cfstringgetlength%28__%29.md): Returns the number (in terms of UTF-16 code pairs) of Unicode characters in a string.
- [CFStringGetPascalString](cfstringgetpascalstring%28________%29.md): Copies the character contents of a CFString object to a local Pascal string buffer after converting the characters to a requested encoding.
- [CFStringGetPascalStringPtr](cfstringgetpascalstringptr%28____%29.md): Quickly obtains a pointer to a Pascal buffer containing the characters of a string in a given encoding.
- [CFStringGetRangeOfComposedCharactersAtIndex](cfstringgetrangeofcomposedcharactersatindex%28____%29.md): Returns the range of the composed character sequence at a specified index.
- [CFStringInitInlineBuffer](cfstringinitinlinebuffer%28______%29.md): Initializes an in-line buffer to use for efficient access of a CFString object’s characters.

### Working With Hyphenation

- [CFStringGetHyphenationLocationBeforeIndex](cfstringgethyphenationlocationbeforeindex%28____________%29.md): Retrieve the first potential hyphenation location found before the specified location.
- [CFStringIsHyphenationAvailableForLocale](cfstringishyphenationavailableforlocale%28__%29.md): Returns a Boolean value that indicates whether hyphenation data is available.

### Working With Encodings

- [CFStringConvertEncodingToIANACharSetName](cfstringconvertencodingtoianacharsetname%28__%29.md): Returns the name of the IANA registry “charset” that is the closest mapping to a specified string encoding.
- [CFStringConvertEncodingToNSStringEncoding](cfstringconvertencodingtonsstringencoding%28__%29.md): Returns the Cocoa encoding constant that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertEncodingToWindowsCodepage](cfstringconvertencodingtowindowscodepage%28__%29.md): Returns the Windows codepage identifier that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertIANACharSetNameToEncoding](cfstringconvertianacharsetnametoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given IANA registry “charset” name.
- [CFStringConvertNSStringEncodingToEncoding](cfstringconvertnsstringencodingtoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Cocoa encoding.
- [CFStringConvertWindowsCodepageToEncoding](cfstringconvertwindowscodepagetoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Windows codepage identifier.
- [CFStringGetFastestEncoding](cfstringgetfastestencoding%28__%29.md): Returns for a CFString object the character encoding that requires the least conversion time.
- [CFStringGetListOfAvailableEncodings](cfstringgetlistofavailableencodings%28%29.md): Returns a pointer to a list of string encodings supported by the current system.
- [CFStringGetMaximumSizeForEncoding](cfstringgetmaximumsizeforencoding%28____%29.md): Returns the maximum number of bytes a string of a specified length (in Unicode characters) will take up if encoded in a specified encoding.
- [CFStringGetMostCompatibleMacStringEncoding](cfstringgetmostcompatiblemacstringencoding%28__%29.md): Returns the most compatible Mac OS script value for the given input encoding.
- [CFStringGetNameOfEncoding](cfstringgetnameofencoding%28__%29.md): Returns the canonical name of a specified string encoding.
- [CFStringGetSmallestEncoding](cfstringgetsmallestencoding%28__%29.md): Returns the smallest encoding on the current system for the character contents of a string.
- [CFStringGetSystemEncoding](cfstringgetsystemencoding%28%29.md): Returns the default encoding used by the operating system when it creates strings.
- [CFStringIsEncodingAvailable](cfstringisencodingavailable%28__%29.md): Determines whether a given Core Foundation string encoding is available on the current system.

### Getting Numeric Values

- [CFStringGetDoubleValue](cfstringgetdoublevalue%28__%29.md): Returns the primary `double` value represented by a string.
- [CFStringGetIntValue](cfstringgetintvalue%28__%29.md): Returns the integer value represented by a string.

### Getting String Properties

- [CFShowStr](cfshowstr%28__%29.md): Prints the attributes of a string during debugging.
- [CFStringGetTypeID](cfstringgettypeid%28%29.md): Returns the type identifier for the CFString opaque type.

### String File System Representations

- [CFStringCreateWithFileSystemRepresentation](cfstringcreatewithfilesystemrepresentation%28____%29.md): Creates a CFString from a zero-terminated POSIX file system representation.
- [CFStringGetFileSystemRepresentation](cfstringgetfilesystemrepresentation%28______%29.md): Extracts the contents of a string as a `NULL`-terminated 8-bit string appropriate for passing to POSIX APIs.
- [CFStringGetMaximumSizeOfFileSystemRepresentation](cfstringgetmaximumsizeoffilesystemrepresentation%28__%29.md): Determines the upper bound on the number of bytes required to hold the file system representation of the string.

### Getting Paragraph Bounds

- [CFStringGetParagraphBounds](cfstringgetparagraphbounds%28__________%29.md): Given a range of characters in a string, obtains the paragraph bounds—that is, the indexes of the first character and the final characters of the paragraph(s) containing the range.

### Managing Surrogates

- [CFStringGetLongCharacterForSurrogatePair](cfstringgetlongcharacterforsurrogatepair%28____%29.md): Returns a UTF-32 character that corresponds to a given pair of UTF-16 surrogate characters.
- [CFStringGetSurrogatePairForLongCharacter](cfstringgetsurrogatepairforlongcharacter%28____%29.md): Maps a given UTF-32 character to a pair of UTF-16 surrogate characters.
- [CFStringIsSurrogateHighCharacter](cfstringissurrogatehighcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a high character in a surrogate pair.
- [CFStringIsSurrogateLowCharacter](cfstringissurrogatelowcharacter%28__%29.md): Returns a Boolean value that indicates whether a given character is a low character in a surrogate pair.

### Data Types

- [CFStringEncoding](cfstringencoding.md): An integer type for constants used to specify supported string encodings in various CFString functions.
- [CFStringEncodings](cfstringencodings.md): Index type for constants used to specify external string encodings.
- [CFStringCompareFlags](cfstringcompareflags.md): A [CFOptionFlags](cfoptionflags.md) type for specifying options for string comparison .
- [CFStringInlineBuffer](cfstringinlinebuffer.md): Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.

### Constants

- [String Comparison Flags](string-comparison-flags.md): Flags that specify how string comparisons are performed.
- [CFStringBuiltInEncodings](cfstringbuiltinencodings.md): Encodings that are built-in on all platforms on which macOS runs.
- [Invalid String Encoding Flag](invalid-string-encoding-flag.md): Special value returned from functions to indicate a string encoding that is not supported or recognized by CFString.
- [External String Encodings](external-string-encodings.md): `CFStringEncoding` constants for encodings that may be supported by CFString.

## See Also

### Related Documentation

- [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i)
- [Data Formatting Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/CFDataFormatting.html#//apple_ref/doc/uid/10000176i)
- [String Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/introCFStrings.html#//apple_ref/doc/uid/10000131i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
