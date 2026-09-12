> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringpad(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringpad(_:_:_:_:))

# CFStringPad(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enlarges a string, padding it with specified characters, or truncates the string.

## Declaration

```swift
func CFStringPad(_ theString: CFMutableString!, _ padString: CFString!, _ length: CFIndex, _ indexIntoPad: CFIndex)
```

## Parameters

- `theString`: The string to modify.
- `padString`: A string containing the characters with which to fill the extended character buffer. Pass `NULL` to truncate the string.
- `length`: The new length of `theString`. If this length is greater than the current length, padding takes place; if it is less, truncation takes place.
- `indexIntoPad`: The index of the character in `padString` with which to begin padding. If you are truncating the string represented by the object, this parameter is ignored.

<a id="Discussion"></a>

## Discussion

This function has two purposes. It either enlarges the character buffer of a CFMutableString object to a given length, padding the added length with a given character or characters, or it truncates the character buffer to a smaller size. The key parameter for this behavior is `length`; if it is greater than the current length of the represented string, padding takes place, and if it less than the current length, truncation occurs.

For example, say you have a string, `aMutStr`, containing the characters “abcdef”. The call

```objc
CFStringPad(aMutStr, CFSTR("123"), 9, 1);
```

results in `aMutStr` containing “abcdef231”. However, the following call

```objc
CFStringPad(aMutStr, NULL, 3, 0);
```

results in `aMutStr` containing “abc”.

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
- [CFStringFold(\_:\_:\_:)](cfstringfold%28______%29.md): Folds a given string into the form specified by optional flags.
- [CFStringInsert(\_:\_:\_:)](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase(\_:\_:)](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize(\_:\_:)](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.

# CFStringPad (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enlarges a string, padding it with specified characters, or truncates the string.

## Declaration

```objectivec
extern void CFStringPad(CFMutableStringRef theString, CFStringRef padString, CFIndex length, CFIndex indexIntoPad);
```

## Parameters

- `theString`: The string to modify.
- `padString`: A string containing the characters with which to fill the extended character buffer. Pass `NULL` to truncate the string.
- `length`: The new length of `theString`. If this length is greater than the current length, padding takes place; if it is less, truncation takes place.
- `indexIntoPad`: The index of the character in `padString` with which to begin padding. If you are truncating the string represented by the object, this parameter is ignored.

<a id="Discussion"></a>

## Discussion

This function has two purposes. It either enlarges the character buffer of a CFMutableString object to a given length, padding the added length with a given character or characters, or it truncates the character buffer to a smaller size. The key parameter for this behavior is `length`; if it is greater than the current length of the represented string, padding takes place, and if it less than the current length, truncation occurs.

For example, say you have a string, `aMutStr`, containing the characters “abcdef”. The call

```objc
CFStringPad(aMutStr, CFSTR("123"), 9, 1);
```

results in `aMutStr` containing “abcdef231”. However, the following call

```objc
CFStringPad(aMutStr, NULL, 3, 0);
```

results in `aMutStr` containing “abc”.

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
- [CFStringFold](cfstringfold%28______%29.md): Folds a given string into the form specified by optional flags.
- [CFStringInsert](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
