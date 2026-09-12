> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetcharacterfrominlinebuffer(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetcharacterfrominlinebuffer(_:_:))

# CFStringGetCharacterFromInlineBuffer(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the Unicode character at a specific location in an in-line buffer.

## Declaration

```swift
func CFStringGetCharacterFromInlineBuffer(_ buf: UnsafeMutablePointer<CFStringInlineBuffer>!, _ idx: CFIndex) -> UniChar
```

## Parameters

- `buf`: The initialized CFStringInlineBuffer structure in which the characters are stored. You should initialize the structure with the [CFStringInitInlineBuffer(\_:\_:\_:)](cfstringinitinlinebuffer%28______%29.md) function.
- `idx`: The location of a character in the in-line buffer `buf`. This index is relative to the range specified when `buf` was created.

<a id="return-value"></a>

## Return Value

A Unicode character, or `0` if a location outside the original range is specified.

<a id="Discussion"></a>

## Discussion

This function accesses one of the characters of a string written to an in-line buffer. It is typically called from within a loop to access each character in the buffer in sequence. You should initialize the buffer with the [CFStringInitInlineBuffer(\_:\_:\_:)](cfstringinitinlinebuffer%28______%29.md) function. The in-line buffer functions, along with the [CFStringInlineBuffer](cfstringinlinebuffer.md) structure, give you fast access to the characters of a CFString object. The technique for in-line buffer access combines the convenience of one-at-a-time character access with the efficiency of bulk access.

## See Also

### Accessing Characters

- [CFStringCreateExternalRepresentation(\_:\_:\_:\_:)](cfstringcreateexternalrepresentation%28________%29.md): Creates an “external representation” of a CFString object, that is, a CFData object.
- [CFStringGetBytes(\_:\_:\_:\_:\_:\_:\_:\_:)](cfstringgetbytes%28________________%29.md): Fetches a range of the characters from a string into a byte buffer after converting the characters to a specified encoding.
- [CFStringGetCharacterAtIndex(\_:\_:)](cfstringgetcharacteratindex%28____%29.md): Returns the Unicode character at a specified location in a string.
- [CFStringGetCharacters(\_:\_:\_:)](cfstringgetcharacters%28______%29.md): Copies a range of the Unicode characters from a string to a user-provided buffer.
- [CFStringGetCharactersPtr(\_:)](cfstringgetcharactersptr%28__%29.md): Quickly obtains a pointer to the contents of a string as a buffer of Unicode characters.
- [CFStringGetCString(\_:\_:\_:\_:)](cfstringgetcstring%28________%29.md): Copies the character contents of a string to a local C string buffer after converting the characters to a given encoding.
- [CFStringGetCStringPtr(\_:\_:)](cfstringgetcstringptr%28____%29.md): Quickly obtains a pointer to a C-string buffer containing the characters of a string in a given encoding.
- [CFStringGetLength(\_:)](cfstringgetlength%28__%29.md): Returns the number (in terms of UTF-16 code pairs) of Unicode characters in a string.
- [CFStringGetPascalString(\_:\_:\_:\_:)](cfstringgetpascalstring%28________%29.md): Copies the character contents of a CFString object to a local Pascal string buffer after converting the characters to a requested encoding.
- [CFStringGetPascalStringPtr(\_:\_:)](cfstringgetpascalstringptr%28____%29.md): Quickly obtains a pointer to a Pascal buffer containing the characters of a string in a given encoding.
- [CFStringGetRangeOfComposedCharactersAtIndex(\_:\_:)](cfstringgetrangeofcomposedcharactersatindex%28____%29.md): Returns the range of the composed character sequence at a specified index.
- [CFStringInitInlineBuffer(\_:\_:\_:)](cfstringinitinlinebuffer%28______%29.md): Initializes an in-line buffer to use for efficient access of a CFString object’s characters.

# CFStringGetCharacterFromInlineBuffer (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the Unicode character at a specific location in an in-line buffer.

## Declaration

```objectivec
static UniChar CFStringGetCharacterFromInlineBuffer(CFStringInlineBuffer *buf, CFIndex idx);
```

## Parameters

- `buf`: The initialized CFStringInlineBuffer structure in which the characters are stored. You should initialize the structure with the [CFStringInitInlineBuffer](cfstringinitinlinebuffer%28______%29.md) function.
- `idx`: The location of a character in the in-line buffer `buf`. This index is relative to the range specified when `buf` was created.

<a id="return-value"></a>

## Return Value

A Unicode character, or `0` if a location outside the original range is specified.

<a id="Discussion"></a>

## Discussion

This function accesses one of the characters of a string written to an in-line buffer. It is typically called from within a loop to access each character in the buffer in sequence. You should initialize the buffer with the [CFStringInitInlineBuffer](cfstringinitinlinebuffer%28______%29.md) function. The in-line buffer functions, along with the [CFStringInlineBuffer](cfstringinlinebuffer.md) structure, give you fast access to the characters of a CFString object. The technique for in-line buffer access combines the convenience of one-at-a-time character access with the efficiency of bulk access.

## See Also

### Accessing Characters

- [CFStringCreateExternalRepresentation](cfstringcreateexternalrepresentation%28________%29.md): Creates an “external representation” of a CFString object, that is, a CFData object.
- [CFStringGetBytes](cfstringgetbytes%28________________%29.md): Fetches a range of the characters from a string into a byte buffer after converting the characters to a specified encoding.
- [CFStringGetCharacterAtIndex](cfstringgetcharacteratindex%28____%29.md): Returns the Unicode character at a specified location in a string.
- [CFStringGetCharacters](cfstringgetcharacters%28______%29.md): Copies a range of the Unicode characters from a string to a user-provided buffer.
- [CFStringGetCharactersPtr](cfstringgetcharactersptr%28__%29.md): Quickly obtains a pointer to the contents of a string as a buffer of Unicode characters.
- [CFStringGetCString](cfstringgetcstring%28________%29.md): Copies the character contents of a string to a local C string buffer after converting the characters to a given encoding.
- [CFStringGetCStringPtr](cfstringgetcstringptr%28____%29.md): Quickly obtains a pointer to a C-string buffer containing the characters of a string in a given encoding.
- [CFStringGetLength](cfstringgetlength%28__%29.md): Returns the number (in terms of UTF-16 code pairs) of Unicode characters in a string.
- [CFStringGetPascalString](cfstringgetpascalstring%28________%29.md): Copies the character contents of a CFString object to a local Pascal string buffer after converting the characters to a requested encoding.
- [CFStringGetPascalStringPtr](cfstringgetpascalstringptr%28____%29.md): Quickly obtains a pointer to a Pascal buffer containing the characters of a string in a given encoding.
- [CFStringGetRangeOfComposedCharactersAtIndex](cfstringgetrangeofcomposedcharactersatindex%28____%29.md): Returns the range of the composed character sequence at a specified index.
- [CFStringInitInlineBuffer](cfstringinitinlinebuffer%28______%29.md): Initializes an in-line buffer to use for efficient access of a CFString object’s characters.
