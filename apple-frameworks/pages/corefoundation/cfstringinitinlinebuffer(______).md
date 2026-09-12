> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringinitinlinebuffer(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringinitinlinebuffer(_:_:_:))

# CFStringInitInlineBuffer(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes an in-line buffer to use for efficient access of a CFString object’s characters.

## Declaration

```swift
func CFStringInitInlineBuffer(_ str: CFString!, _ buf: UnsafeMutablePointer<CFStringInlineBuffer>!, _ range: CFRange)
```

## Parameters

- `str`: The string to copy to the in-line buffer.
- `buf`: The (uninitialized) [CFStringInlineBuffer](cfstringinlinebuffer.md) structure to initialize. On return, an initialized structure that can be used in a [CFStringGetCharacterFromInlineBuffer(\_:\_:)](cfstringgetcharacterfrominlinebuffer%28____%29.md) function call. Typically this buffer is allocated on the stack.
- `range`: The range of characters in `str` to copy to `buf`. The specified range must not exceed the length of the string.

<a id="Discussion"></a>

## Discussion

This function initializes an [CFStringInlineBuffer](cfstringinlinebuffer.md) structure that can be used for accessing the characters of a string. Once the buffer is initialized you can call the [CFStringGetCharacterFromInlineBuffer(\_:\_:)](cfstringgetcharacterfrominlinebuffer%28____%29.md) function to access the characters in the buffer one at a time. The in-line buffer functions, along with the [CFStringInlineBuffer](cfstringinlinebuffer.md) structure, give you fast access to the characters of a string. The technique for in-line buffer access combines the convenience of one-at-a-time character access with the efficiency of bulk access.

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
- [CFStringGetPascalStringPtr(\_:\_:)](cfstringgetpascalstringptr%28____%29.md): Quickly obtains a pointer to a Pascal buffer containing the characters of a string in a given encoding.
- [CFStringGetRangeOfComposedCharactersAtIndex(\_:\_:)](cfstringgetrangeofcomposedcharactersatindex%28____%29.md): Returns the range of the composed character sequence at a specified index.

# CFStringInitInlineBuffer (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes an in-line buffer to use for efficient access of a CFString object’s characters.

## Declaration

```objectivec
static void CFStringInitInlineBuffer(CFStringRef str, CFStringInlineBuffer *buf, CFRange range);
```

## Parameters

- `str`: The string to copy to the in-line buffer.
- `buf`: The (uninitialized) [CFStringInlineBuffer](cfstringinlinebuffer.md) structure to initialize. On return, an initialized structure that can be used in a [CFStringGetCharacterFromInlineBuffer](cfstringgetcharacterfrominlinebuffer%28____%29.md) function call. Typically this buffer is allocated on the stack.
- `range`: The range of characters in `str` to copy to `buf`. The specified range must not exceed the length of the string.

<a id="Discussion"></a>

## Discussion

This function initializes an [CFStringInlineBuffer](cfstringinlinebuffer.md) structure that can be used for accessing the characters of a string. Once the buffer is initialized you can call the [CFStringGetCharacterFromInlineBuffer](cfstringgetcharacterfrominlinebuffer%28____%29.md) function to access the characters in the buffer one at a time. The in-line buffer functions, along with the [CFStringInlineBuffer](cfstringinlinebuffer.md) structure, give you fast access to the characters of a string. The technique for in-line buffer access combines the convenience of one-at-a-time character access with the efficiency of bulk access.

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
- [CFStringGetPascalStringPtr](cfstringgetpascalstringptr%28____%29.md): Quickly obtains a pointer to a Pascal buffer containing the characters of a string in a given encoding.
- [CFStringGetRangeOfComposedCharactersAtIndex](cfstringgetrangeofcomposedcharactersatindex%28____%29.md): Returns the range of the composed character sequence at a specified index.
