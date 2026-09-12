> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringappend(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringappend(_:_:))

# CFStringAppend(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Appends the characters of a string to those of a CFMutableString object.

## Declaration

```swift
func CFStringAppend(_ theString: CFMutableString!, _ appendedString: CFString!)
```

## Parameters

- `theString`: The string to which `appendedString` is appended. If `theString` is not a CFMutableString object, an assertion is raised.
- `appendedString`: The string to append.

<a id="Discussion"></a>

## Discussion

This function reallocates the backing store of `theString` to accommodate the new length.

## See Also

### CFMutableString Miscellaneous Functions

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
- [CFStringFold(\_:\_:\_:)](cfstringfold%28______%29.md): Folds a given string into the form specified by optional flags.
- [CFStringInsert(\_:\_:\_:)](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase(\_:\_:)](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize(\_:\_:)](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.
- [CFStringPad(\_:\_:\_:\_:)](cfstringpad%28________%29.md): Enlarges a string, padding it with specified characters, or truncates the string.

# CFStringAppend (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Appends the characters of a string to those of a CFMutableString object.

## Declaration

```objectivec
extern void CFStringAppend(CFMutableStringRef theString, CFStringRef appendedString);
```

## Parameters

- `theString`: The string to which `appendedString` is appended. If `theString` is not a CFMutableString object, an assertion is raised.
- `appendedString`: The string to append.

<a id="Discussion"></a>

## Discussion

This function reallocates the backing store of `theString` to accommodate the new length.

## See Also

### CFMutableString Miscellaneous Functions

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
- [CFStringFold](cfstringfold%28______%29.md): Folds a given string into the form specified by optional flags.
- [CFStringInsert](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.
