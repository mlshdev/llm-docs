> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetpascalstringptr(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetpascalstringptr(_:_:))

# CFStringGetPascalStringPtr(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Quickly obtains a pointer to a Pascal buffer containing the characters of a string in a given encoding.

## Declaration

```swift
func CFStringGetPascalStringPtr(_ theString: CFString!, _ encoding: CFStringEncoding) -> ConstStringPtr!
```

## Parameters

- `theString`: The string to examine.
- `encoding`: The string encoding to which the character contents of `theString` should be converted.

<a id="return-value"></a>

## Return Value

A pointer to a Pascal string buffer or `NULL` if the internal storage of theString does not allow this to be returned efficiently.

<a id="Discussion"></a>

## Discussion

This function either returns the requested pointer immediately, with no memory allocations and no copying, in constant time, or returns `NULL`. If the latter is returned, call an alternative function such as the [CFStringGetPascalString(\_:\_:\_:\_:)](cfstringgetpascalstring%28________%29.md) function to extract the characters.

Whether or not this function returns a valid pointer or `NULL` depends on many factors, all of which depend on how the string was created and its properties. In addition, the function result might change between different releases and on different platforms. So do not count on receiving a non-`NULL` result from this function under any circumstances.

## See Also

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
- [CFStringGetRangeOfComposedCharactersAtIndex(\_:\_:)](cfstringgetrangeofcomposedcharactersatindex%28____%29.md): Returns the range of the composed character sequence at a specified index.
- [CFStringInitInlineBuffer(\_:\_:\_:)](cfstringinitinlinebuffer%28______%29.md): Initializes an in-line buffer to use for efficient access of a CFString object’s characters.

# CFStringGetPascalStringPtr (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Quickly obtains a pointer to a Pascal buffer containing the characters of a string in a given encoding.

## Declaration

```objectivec
extern ConstStringPtrCFStringGetPascalStringPtr(CFStringRef theString, CFStringEncoding encoding);
```

## Parameters

- `theString`: The string to examine.
- `encoding`: The string encoding to which the character contents of `theString` should be converted.

<a id="return-value"></a>

## Return Value

A pointer to a Pascal string buffer or `NULL` if the internal storage of theString does not allow this to be returned efficiently.

<a id="Discussion"></a>

## Discussion

This function either returns the requested pointer immediately, with no memory allocations and no copying, in constant time, or returns `NULL`. If the latter is returned, call an alternative function such as the [CFStringGetPascalString](cfstringgetpascalstring%28________%29.md) function to extract the characters.

Whether or not this function returns a valid pointer or `NULL` depends on many factors, all of which depend on how the string was created and its properties. In addition, the function result might change between different releases and on different platforms. So do not count on receiving a non-`NULL` result from this function under any circumstances.

## See Also

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
- [CFStringGetRangeOfComposedCharactersAtIndex](cfstringgetrangeofcomposedcharactersatindex%28____%29.md): Returns the range of the composed character sequence at a specified index.
- [CFStringInitInlineBuffer](cfstringinitinlinebuffer%28______%29.md): Initializes an in-line buffer to use for efficient access of a CFString object’s characters.
