> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringfindandreplace(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringfindandreplace(_:_:_:_:_:))

# CFStringFindAndReplace(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces all occurrences of a substring within a given range.

## Declaration

```swift
func CFStringFindAndReplace(_ theString: CFMutableString!, _ stringToFind: CFString!, _ replacementString: CFString!, _ rangeToSearch: CFRange, _ compareOptions: CFStringCompareFlags) -> CFIndex
```

## Parameters

- `theString`: The string to modify.
- `stringToFind`: The substring to search for in `theString`.
- `replacementString`: The replacement string for `stringToFind`.
- `rangeToSearch`: The range within which to search in `theString`.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [CFStringCompareFlags](cfstringcompareflags.md) for the available flags.

<a id="return-value"></a>

## Return Value

The number of instances of `stringToFind` that were replaced.

<a id="Discussion"></a>

## Discussion

The possible values of `compareOptions` are combinations of the [compareCaseInsensitive](cfstringcompareflags/comparecaseinsensitive.md), [compareBackwards](cfstringcompareflags/comparebackwards.md), [compareNonliteral](cfstringcompareflags/comparenonliteral.md), and [compareAnchored](cfstringcompareflags/compareanchored.md) constants.

The `kCFCompareBackwards` option can be used to replace a substring starting from the end, which could produce different results. For example, if the parameter `theString` is “AAAAA”, `stringToFind` is “AA”, and `replacementString` is “B”, then the result is normally “BBA”. However, if the `kCFCompareBackwards` constant is used, the result is “ABB.”

The `kCFCompareAnchored` option assures that only anchored but multiple instances are found (the instances must be consecutive at start or end). For example, if the parameter `theString` is “AAXAA”, `stringToFind` is “A”, and `replacementString` is “B”, then the result is normally “BBXBB.” However, if the `kCFCompareAnchored` constant is used, the result is “BBXAA.”

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
- [CFStringFold(\_:\_:\_:)](cfstringfold%28______%29.md): Folds a given string into the form specified by optional flags.
- [CFStringInsert(\_:\_:\_:)](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase(\_:\_:)](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize(\_:\_:)](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.
- [CFStringPad(\_:\_:\_:\_:)](cfstringpad%28________%29.md): Enlarges a string, padding it with specified characters, or truncates the string.

# CFStringFindAndReplace (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces all occurrences of a substring within a given range.

## Declaration

```objectivec
extern CFIndex CFStringFindAndReplace(CFMutableStringRef theString, CFStringRef stringToFind, CFStringRef replacementString, CFRange rangeToSearch, CFStringCompareFlags compareOptions);
```

## Parameters

- `theString`: The string to modify.
- `stringToFind`: The substring to search for in `theString`.
- `replacementString`: The replacement string for `stringToFind`.
- `rangeToSearch`: The range within which to search in `theString`.
- `compareOptions`: Flags that select different types of comparisons, such as localized comparison, case-insensitive comparison, and non-literal comparison. If you want the default comparison behavior, pass `0`. See [CFStringCompareFlags](cfstringcompareflags.md) for the available flags.

<a id="return-value"></a>

## Return Value

The number of instances of `stringToFind` that were replaced.

<a id="Discussion"></a>

## Discussion

The possible values of `compareOptions` are combinations of the [kCFCompareCaseInsensitive](cfstringcompareflags/comparecaseinsensitive.md), [kCFCompareBackwards](cfstringcompareflags/comparebackwards.md), [kCFCompareNonliteral](cfstringcompareflags/comparenonliteral.md), and [kCFCompareAnchored](cfstringcompareflags/compareanchored.md) constants.

The `kCFCompareBackwards` option can be used to replace a substring starting from the end, which could produce different results. For example, if the parameter `theString` is “AAAAA”, `stringToFind` is “AA”, and `replacementString` is “B”, then the result is normally “BBA”. However, if the `kCFCompareBackwards` constant is used, the result is “ABB.”

The `kCFCompareAnchored` option assures that only anchored but multiple instances are found (the instances must be consecutive at start or end). For example, if the parameter `theString` is “AAXAA”, `stringToFind` is “A”, and `replacementString` is “B”, then the result is normally “BBXBB.” However, if the `kCFCompareAnchored` constant is used, the result is “BBXAA.”

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
- [CFStringFold](cfstringfold%28______%29.md): Folds a given string into the form specified by optional flags.
- [CFStringInsert](cfstringinsert%28______%29.md): Inserts a string at a specified location in the character buffer of a CFMutableString object.
- [CFStringLowercase](cfstringlowercase%28____%29.md): Changes all uppercase alphabetical characters in a CFMutableString to lowercase.
- [CFStringNormalize](cfstringnormalize%28____%29.md): Normalizes the string into the specified form as described in Unicode Technical Report #15.
