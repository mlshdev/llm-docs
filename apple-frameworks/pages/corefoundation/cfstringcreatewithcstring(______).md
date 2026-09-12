> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcreatewithcstring(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcreatewithcstring(_:_:_:))

# CFStringCreateWithCString(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable string from a C string.

## Declaration

```swift
func CFStringCreateWithCString(_ alloc: CFAllocator!, _ cStr: UnsafePointer<CChar>!, _ encoding: CFStringEncoding) -> CFString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `cStr`: The `NULL`-terminated C string to be used to create the CFString object. The string must use an 8-bit encoding.
- `encoding`: The encoding of the characters in the C string. The encoding must specify an 8-bit encoding.

<a id="return-value"></a>

## Return Value

An immutable string containing `cStr` (after stripping off the `NULL` terminating character), or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

A C string is a string of 8-bit characters terminated with an 8-bit `NULL`. Unichar and Unichar32 are not considered C strings.

## See Also

### Creating a CFString

- [CFStringCreateArrayBySeparatingStrings(\_:\_:\_:)](cfstringcreatearraybyseparatingstrings%28______%29.md): Creates an array of CFString objects from a single CFString object.
- [CFStringCreateByCombiningStrings(\_:\_:\_:)](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateCopy(\_:\_:)](cfstringcreatecopy%28____%29.md): Creates an immutable copy of a string.
- [CFStringCreateFromExternalRepresentation(\_:\_:\_:)](cfstringcreatefromexternalrepresentation%28______%29.md): Creates a string from its “external representation.”
- [CFStringCreateWithBytes(\_:\_:\_:\_:\_:)](cfstringcreatewithbytes%28__________%29.md): Creates a string from a buffer containing characters in a specified encoding.
- [CFStringCreateWithBytesNoCopy(\_:\_:\_:\_:\_:\_:)](cfstringcreatewithbytesnocopy%28____________%29.md): Creates a string from a buffer, containing characters in a specified encoding, that might serve as the backing store for the new string.
- [CFStringCreateWithCharacters(\_:\_:\_:)](cfstringcreatewithcharacters%28______%29.md): Creates a string from a buffer of Unicode characters.
- [CFStringCreateWithCharactersNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcharactersnocopy%28________%29.md): Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.
- [CFStringCreateWithCStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormatAndArguments(\_:\_:\_:\_:)](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString(\_:\_:\_:)](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring(\_:\_:\_:)](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.

# CFStringCreateWithCString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable string from a C string.

## Declaration

```objectivec
extern CFStringRefCFStringCreateWithCString(CFAllocatorRef alloc, const char *cStr, CFStringEncoding encoding);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `cStr`: The `NULL`-terminated C string to be used to create the CFString object. The string must use an 8-bit encoding.
- `encoding`: The encoding of the characters in the C string. The encoding must specify an 8-bit encoding.

<a id="return-value"></a>

## Return Value

An immutable string containing `cStr` (after stripping off the `NULL` terminating character), or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

A C string is a string of 8-bit characters terminated with an 8-bit `NULL`. Unichar and Unichar32 are not considered C strings.

## See Also

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
- [CFStringCreateWithCStringNoCopy](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormat](cfstringcreatewithformat.md): Creates an immutable string from a formatted string and a variable number of arguments.
- [CFStringCreateWithFormatAndArguments](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.
