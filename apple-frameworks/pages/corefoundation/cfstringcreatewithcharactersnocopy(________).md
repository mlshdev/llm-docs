> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcreatewithcharactersnocopy(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcreatewithcharactersnocopy(_:_:_:_:))

# CFStringCreateWithCharactersNoCopy(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.

## Declaration

```swift
func CFStringCreateWithCharactersNoCopy(_ alloc: CFAllocator!, _ chars: UnsafePointer<UniChar>!, _ numChars: CFIndex, _ contentsDeallocator: CFAllocator!) -> CFString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `chars`: The Unicode buffer that has been allocated and initialized with Unicode characters.
- `numChars`: The number of characters in the buffer pointed to by `chars`. Only this number of characters will be copied to internal storage.
- `contentsDeallocator`: The allocator to use to deallocate the external buffer when it is no longer needed. You can pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to request the default allocator for this purpose. If the buffer does not need to be deallocated, or if you want to assume responsibility for deallocating the buffer (and not have the string deallocate it), pass [kCFAllocatorNull](kcfallocatornull.md).

<a id="return-value"></a>

## Return Value

An immutable string containing `chars`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Unless the situation warrants otherwise, the returned object does not copy the external buffer to internal storage but instead uses the buffer as its backing store. However, you should never count on the object using the external buffer since it could copy the buffer to internal storage or might even dump the buffer altogether and use alternative means for storing the characters.

The function includes a `contentsDeallocator` parameter with which to specify an allocator to use for deallocating the external buffer when the string is deallocated. If you want to assume responsibility for deallocating this memory, specify [kCFAllocatorNull](kcfallocatornull.md) for this parameter.

If at creation time CFString decides it can’t use the buffer, and there is a `contentsDeallocator`, it will use this allocator to free the buffer at that time.

<a id="Special-Considerations"></a>

### Special Considerations

If an error occurs during the creation of the string, then `chars` is not deallocated. In this case, the caller is responsible for freeing the buffer. This allows the caller to continue trying to create a string with the buffer, without having the buffer deallocated.

## See Also

### Creating a CFString

- [CFStringCreateArrayBySeparatingStrings(\_:\_:\_:)](cfstringcreatearraybyseparatingstrings%28______%29.md): Creates an array of CFString objects from a single CFString object.
- [CFStringCreateByCombiningStrings(\_:\_:\_:)](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateCopy(\_:\_:)](cfstringcreatecopy%28____%29.md): Creates an immutable copy of a string.
- [CFStringCreateFromExternalRepresentation(\_:\_:\_:)](cfstringcreatefromexternalrepresentation%28______%29.md): Creates a string from its “external representation.”
- [CFStringCreateWithBytes(\_:\_:\_:\_:\_:)](cfstringcreatewithbytes%28__________%29.md): Creates a string from a buffer containing characters in a specified encoding.
- [CFStringCreateWithBytesNoCopy(\_:\_:\_:\_:\_:\_:)](cfstringcreatewithbytesnocopy%28____________%29.md): Creates a string from a buffer, containing characters in a specified encoding, that might serve as the backing store for the new string.
- [CFStringCreateWithCharacters(\_:\_:\_:)](cfstringcreatewithcharacters%28______%29.md): Creates a string from a buffer of Unicode characters.
- [CFStringCreateWithCString(\_:\_:\_:)](cfstringcreatewithcstring%28______%29.md): Creates an immutable string from a C string.
- [CFStringCreateWithCStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormatAndArguments(\_:\_:\_:\_:)](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString(\_:\_:\_:)](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring(\_:\_:\_:)](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.

# CFStringCreateWithCharactersNoCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.

## Declaration

```objectivec
extern CFStringRefCFStringCreateWithCharactersNoCopy(CFAllocatorRef alloc, const UniChar *chars, CFIndex numChars, CFAllocatorRef contentsDeallocator);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `chars`: The Unicode buffer that has been allocated and initialized with Unicode characters.
- `numChars`: The number of characters in the buffer pointed to by `chars`. Only this number of characters will be copied to internal storage.
- `contentsDeallocator`: The allocator to use to deallocate the external buffer when it is no longer needed. You can pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to request the default allocator for this purpose. If the buffer does not need to be deallocated, or if you want to assume responsibility for deallocating the buffer (and not have the string deallocate it), pass [kCFAllocatorNull](kcfallocatornull.md).

<a id="return-value"></a>

## Return Value

An immutable string containing `chars`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Unless the situation warrants otherwise, the returned object does not copy the external buffer to internal storage but instead uses the buffer as its backing store. However, you should never count on the object using the external buffer since it could copy the buffer to internal storage or might even dump the buffer altogether and use alternative means for storing the characters.

The function includes a `contentsDeallocator` parameter with which to specify an allocator to use for deallocating the external buffer when the string is deallocated. If you want to assume responsibility for deallocating this memory, specify [kCFAllocatorNull](kcfallocatornull.md) for this parameter.

If at creation time CFString decides it can’t use the buffer, and there is a `contentsDeallocator`, it will use this allocator to free the buffer at that time.

<a id="Special-Considerations"></a>

### Special Considerations

If an error occurs during the creation of the string, then `chars` is not deallocated. In this case, the caller is responsible for freeing the buffer. This allows the caller to continue trying to create a string with the buffer, without having the buffer deallocated.

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
- [CFStringCreateWithCString](cfstringcreatewithcstring%28______%29.md): Creates an immutable string from a C string.
- [CFStringCreateWithCStringNoCopy](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormat](cfstringcreatewithformat.md): Creates an immutable string from a formatted string and a variable number of arguments.
- [CFStringCreateWithFormatAndArguments](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.
