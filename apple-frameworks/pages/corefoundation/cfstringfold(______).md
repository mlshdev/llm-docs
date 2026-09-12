> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringfold(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringfold(_:_:_:))

# CFStringFold(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Folds a given string into the form specified by optional flags.

## Declaration

```swift
func CFStringFold(_ theString: CFMutableString!, _ theFlags: CFStringCompareFlags, _ theLocale: CFLocale!)
```

## Parameters

- `theString`: The string which is to be folded.  If this parameter is not a valid mutable CFString, the behavior is undefined.
- `theFlags`: The equivalency flags which describes the character folding form. See “String Comparison Flags” in [CFString](cfstring.md) for possible values. Only those flags containing the word “insensitive” are recognized; other flags are ignored.

  Folding with `kCFCompareCaseInsensitive` removes case distinctions in accordance with the mapping specified by [ftp://ftp.unicode.org/Public/UNIDATA/CaseFolding.txt](ftp://ftp.unicode.org/Public/UNIDATA/CaseFolding.txt).  Folding with `kCFCompareDiacriticInsensitive` removes distinctions of accents and other diacritics.  Folding with `kCFCompareWidthInsensitive` removes character width distinctions by mapping characters in the range `U+FF00-U+FFEF` to their ordinary equivalents.
- `theLocale`: The locale to use for the operation. `NULL` specifies the canonical locale (the return value from [CFLocaleGetSystem()](cflocalegetsystem%28%29.md)).

  The locale argument affects the case mapping algorithm. For example, for the Turkish locale, case-insensitive compare matches “I” to “ı” (Unicode code point U+0131, Latin Small Dotless I), not the normal “i” character.

<a id="Discussion"></a>

## Discussion

Character foldings are operations that convert any of a set of characters sharing similar semantics into a single representative from that set.

You can use this function to preprocess strings that are to be compared, searched, or indexed. Note that folding does not include normalization, so you must use [CFStringNormalize(\_:\_:)](cfstringnormalize%28____%29.md) in addition to CFStringFold in order to obtain the effect of `kCFCompareNonliteral`.

## See Also

### CFMutableString Miscellaneous Functions

- [CFStringAppend(\_:\_:)](cfstringappend%28____%29.md): Appends the characters of a string to those of a CFMutableString object.
- [CFStringAppendCharacters(\_:\_:\_:)](cfstringappendcharacters%28______%29.md): Appends a buffer of Unicode characters to the character contents of a CFMutableString object.
- [CFStringAppendCString(\_:\_:\_:)](cfstringappendcstring%28______%29.md): Appends a C string to the character contents of a CFMutableString object.
- [CFStringAppendFormatAndArguments(\_:\_:\_:\_:)](cfstringappendformatandarguments%28________%29.md): Appends a formatted string to the character contents of a CFMutableString object.
- [CFStringAppendPascalString(\_:\_:\_:)](cfstringappendpascalstring%28______%29.md): Appends a Pascal string to the character contents of a CFMutableString object.
- [CFStringCapitalize(\_:\_:)](cfstringcapitalize%28____%29.md): Changes the first character in each word of a string to uppercase (if it is a lowercase alphabetical character).
- [CFStringCreateMutable(\_:\_:)](cfstringcreatemutable%28____%29.md): Creates an empty CFMutableString object.
- [CFStringCreateMutableCopy(\_:\_:\_:)](cfstringcreatemutablecopy%28______%29.md): Creates a mutable copy of a string.
- [CFStringCreateMutableWithExternalCharactersNoCopy(\_:\_:\_:\_:\_:)](cfstringcreatemutablewithexternalcharactersnocopy%28__________%29.md): Creates a CFMutableString object whose Unicode character buffer is controlled externally.
- [CFStringDelete(\_:\_:)](cfstringdelete%28____%29.md): Deletes a range of characters in a string.
- [CFStringFindAndReplace(\_:\_:\_:\_:\_:)](cfstringfindandreplace%28__________%29.md): Replaces all occurrences of a substring within a given range.
- [CFStringInsert(\_:\_:\_:)](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase(\_:\_:)](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize(\_:\_:)](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.
- [CFStringPad(\_:\_:\_:\_:)](cfstringpad%28________%29.md): Enlarges a string, padding it with specified characters, or truncates the string.

# CFStringFold (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Folds a given string into the form specified by optional flags.

## Declaration

```objectivec
extern void CFStringFold(CFMutableStringRef theString, CFStringCompareFlags theFlags, CFLocaleRef theLocale);
```

## Parameters

- `theString`: The string which is to be folded.  If this parameter is not a valid mutable CFString, the behavior is undefined.
- `theFlags`: The equivalency flags which describes the character folding form. See “String Comparison Flags” in [CFStringRef](cfstring.md) for possible values. Only those flags containing the word “insensitive” are recognized; other flags are ignored.

  Folding with `kCFCompareCaseInsensitive` removes case distinctions in accordance with the mapping specified by [ftp://ftp.unicode.org/Public/UNIDATA/CaseFolding.txt](ftp://ftp.unicode.org/Public/UNIDATA/CaseFolding.txt).  Folding with `kCFCompareDiacriticInsensitive` removes distinctions of accents and other diacritics.  Folding with `kCFCompareWidthInsensitive` removes character width distinctions by mapping characters in the range `U+FF00-U+FFEF` to their ordinary equivalents.
- `theLocale`: The locale to use for the operation. `NULL` specifies the canonical locale (the return value from [CFLocaleGetSystem](cflocalegetsystem%28%29.md)).

  The locale argument affects the case mapping algorithm. For example, for the Turkish locale, case-insensitive compare matches “I” to “ı” (Unicode code point U+0131, Latin Small Dotless I), not the normal “i” character.

<a id="Discussion"></a>

## Discussion

Character foldings are operations that convert any of a set of characters sharing similar semantics into a single representative from that set.

You can use this function to preprocess strings that are to be compared, searched, or indexed. Note that folding does not include normalization, so you must use [CFStringNormalize](cfstringnormalize%28____%29.md) in addition to CFStringFold in order to obtain the effect of `kCFCompareNonliteral`.

## See Also

### CFMutableString Miscellaneous Functions

- [CFStringAppend](cfstringappend%28____%29.md): Appends the characters of a string to those of a CFMutableString object.
- [CFStringAppendCharacters](cfstringappendcharacters%28______%29.md): Appends a buffer of Unicode characters to the character contents of a CFMutableString object.
- [CFStringAppendCString](cfstringappendcstring%28______%29.md): Appends a C string to the character contents of a CFMutableString object.
- [CFStringAppendFormat](cfstringappendformat.md): Appends a formatted string to the character contents of a CFMutableString object.
- [CFStringAppendFormatAndArguments](cfstringappendformatandarguments%28________%29.md): Appends a formatted string to the character contents of a CFMutableString object.
- [CFStringAppendPascalString](cfstringappendpascalstring%28______%29.md): Appends a Pascal string to the character contents of a CFMutableString object.
- [CFStringCapitalize](cfstringcapitalize%28____%29.md): Changes the first character in each word of a string to uppercase (if it is a lowercase alphabetical character).
- [CFStringCreateMutable](cfstringcreatemutable%28____%29.md): Creates an empty CFMutableString object.
- [CFStringCreateMutableCopy](cfstringcreatemutablecopy%28______%29.md): Creates a mutable copy of a string.
- [CFStringCreateMutableWithExternalCharactersNoCopy](cfstringcreatemutablewithexternalcharactersnocopy%28__________%29.md): Creates a CFMutableString object whose Unicode character buffer is controlled externally.
- [CFStringDelete](cfstringdelete%28____%29.md): Deletes a range of characters in a string.
- [CFStringFindAndReplace](cfstringfindandreplace%28__________%29.md): Replaces all occurrences of a substring within a given range.
- [CFStringInsert](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.
