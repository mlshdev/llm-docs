> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringtransform(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringtransform(_:_:_:_:))

# CFStringTransform(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Perform in-place transliteration on a mutable string.

## Declaration

```swift
func CFStringTransform(_ string: CFMutableString!, _ range: UnsafeMutablePointer<CFRange>!, _ transform: CFString!, _ reverse: Bool) -> Bool
```

## Parameters

- `string`: The string to transform.
- `range`: A pointer to the range over which the transformation is applied. `NULL` causes the whole string to be transformed. On return, `range` is modified to reflect the new range corresponding to the original range.
- `transform`: A CFString object that identifies the transformation to apply. For a list of valid values, see [Transform Identifiers for CFStringTransform](transform-identifiers-for-cfstringtransform.md). In macOS 10.4 and later, you can also use any valid ICU transform ID defined in the [ICU User Guide for Transforms](https://unicode-org.github.io/icu/userguide/transforms/general/).
- `reverse`: A Boolean that, if `true`, specifies that the inverse transform should be used (if it exists).

<a id="return-value"></a>

## Return Value

`true` if the transform is successful; otherwise `false`.

<a id="Discussion"></a>

## Discussion

The transformation represented by `transform` is applied to the given range of `string`, modifying it in place. Only the specified range is modified, but the transform may look at portions of the string outside that range for context. Reasons that the transform may be unsuccessful include an invalid transform identifier, and attempting to reverse an irreversible transform.

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

# CFStringTransform (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Perform in-place transliteration on a mutable string.

## Declaration

```objectivec
extern Boolean CFStringTransform(CFMutableStringRef string, CFRange *range, CFStringRef transform, Boolean reverse);
```

## Parameters

- `string`: The string to transform.
- `range`: A pointer to the range over which the transformation is applied. `NULL` causes the whole string to be transformed. On return, `range` is modified to reflect the new range corresponding to the original range.
- `transform`: A CFString object that identifies the transformation to apply. For a list of valid values, see [Transform Identifiers for CFStringTransform](transform-identifiers-for-cfstringtransform.md). In macOS 10.4 and later, you can also use any valid ICU transform ID defined in the [ICU User Guide for Transforms](https://unicode-org.github.io/icu/userguide/transforms/general/).
- `reverse`: A Boolean that, if `true`, specifies that the inverse transform should be used (if it exists).

<a id="return-value"></a>

## Return Value

`true` if the transform is successful; otherwise `false`.

<a id="Discussion"></a>

## Discussion

The transformation represented by `transform` is applied to the given range of `string`, modifying it in place. Only the specified range is modified, but the transform may look at portions of the string outside that range for context. Reasons that the transform may be unsuccessful include an invalid transform identifier, and attempting to reverse an irreversible transform.

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
