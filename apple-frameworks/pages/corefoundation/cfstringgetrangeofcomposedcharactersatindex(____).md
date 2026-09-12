> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetrangeofcomposedcharactersatindex(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetrangeofcomposedcharactersatindex(_:_:))

# CFStringGetRangeOfComposedCharactersAtIndex(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the range of the composed character sequence at a specified index.

## Declaration

```swift
func CFStringGetRangeOfComposedCharactersAtIndex(_ theString: CFString!, _ theIndex: CFIndex) -> CFRange
```

## Parameters

- `theString`: The string to examine.
- `theIndex`: The index of the character contained in the composed character sequence. If the index is outside the range of the string (`0` to `N-1` inclusive, where `N` is the length of the string), the behavior is undefined.

<a id="return-value"></a>

## Return Value

The range of the composed character sequence.

<a id="Discussion"></a>

## Discussion

A composed character sequence is a series of one or more characters where each is a combining character, zero-width joiner or non-joiner, voiced mark, or enclosing mark, optionally including a base character.

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
- [CFStringInitInlineBuffer(\_:\_:\_:)](cfstringinitinlinebuffer%28______%29.md): Initializes an in-line buffer to use for efficient access of a CFString object’s characters.

# CFStringGetRangeOfComposedCharactersAtIndex (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the range of the composed character sequence at a specified index.

## Declaration

```objectivec
extern CFRange CFStringGetRangeOfComposedCharactersAtIndex(CFStringRef theString, CFIndex theIndex);
```

## Parameters

- `theString`: The string to examine.
- `theIndex`: The index of the character contained in the composed character sequence. If the index is outside the range of the string (`0` to `N-1` inclusive, where `N` is the length of the string), the behavior is undefined.

<a id="return-value"></a>

## Return Value

The range of the composed character sequence.

<a id="Discussion"></a>

## Discussion

A composed character sequence is a series of one or more characters where each is a combining character, zero-width joiner or non-joiner, voiced mark, or enclosing mark, optionally including a base character.

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
- [CFStringInitInlineBuffer](cfstringinitinlinebuffer%28______%29.md): Initializes an in-line buffer to use for efficient access of a CFString object’s characters.
