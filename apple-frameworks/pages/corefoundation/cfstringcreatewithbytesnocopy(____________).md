> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcreatewithbytesnocopy(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcreatewithbytesnocopy(_:_:_:_:_:_:))

# CFStringCreateWithBytesNoCopy(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a string from a buffer, containing characters in a specified encoding, that might serve as the backing store for the new string.

## Declaration

```swift
func CFStringCreateWithBytesNoCopy(_ alloc: CFAllocator!, _ bytes: UnsafePointer<UInt8>!, _ numBytes: CFIndex, _ encoding: CFStringEncoding, _ isExternalRepresentation: Bool, _ contentsDeallocator: CFAllocator!) -> CFString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFString object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `bytes`: A buffer containing characters in the encoding specified by `encoding`. The buffer must *not* contain a length byte (as in Pascal buffers) or any terminating `NULL` character (as in C buffers).
- `numBytes`: The number of bytes in `bytes`.
- `encoding`: The character encoding of `bytes`.
- `isExternalRepresentation`: `true` if the characters in the byte buffer are in an “external representation” format—that is, whether the buffer contains a BOM (byte order marker). This is usually the case for bytes that are read in from a text file or received over the network. Otherwise, pass `false`.
- `contentsDeallocator`: The allocator to use to deallocate `bytes` when it is no longer needed. You can pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to request the default allocator for this purpose. If the buffer does not need to be deallocated, or if you want to assume responsibility for deallocating the buffer (and not have the string deallocate it), pass [kCFAllocatorNull](kcfallocatornull.md).

<a id="return-value"></a>

## Return Value

A new string whose contents are `bytes`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function takes an explicit length, and allows you to specify whether the data is an external format—that is, whether to pay attention to the BOM character (if any) and do byte swapping if necessary

<a id="Special-Considerations"></a>

### Special Considerations

If an error occurs during the creation of the string, then `bytes` is not deallocated. In this case, the caller is responsible for freeing the buffer. This allows the caller to continue trying to create a string with the buffer, without having the buffer deallocated.

## See Also

### Creating a CFString

- [CFStringCreateArrayBySeparatingStrings(\_:\_:\_:)](cfstringcreatearraybyseparatingstrings%28______%29.md): Creates an array of CFString objects from a single CFString object.
- [CFStringCreateByCombiningStrings(\_:\_:\_:)](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateCopy(\_:\_:)](cfstringcreatecopy%28____%29.md): Creates an immutable copy of a string.
- [CFStringCreateFromExternalRepresentation(\_:\_:\_:)](cfstringcreatefromexternalrepresentation%28______%29.md): Creates a string from its “external representation.”
- [CFStringCreateWithBytes(\_:\_:\_:\_:\_:)](cfstringcreatewithbytes%28__________%29.md): Creates a string from a buffer containing characters in a specified encoding.
- [CFStringCreateWithCharacters(\_:\_:\_:)](cfstringcreatewithcharacters%28______%29.md): Creates a string from a buffer of Unicode characters.
- [CFStringCreateWithCharactersNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcharactersnocopy%28________%29.md): Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.
- [CFStringCreateWithCString(\_:\_:\_:)](cfstringcreatewithcstring%28______%29.md): Creates an immutable string from a C string.
- [CFStringCreateWithCStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormatAndArguments(\_:\_:\_:\_:)](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString(\_:\_:\_:)](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring(\_:\_:\_:)](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.

# CFStringCreateWithBytesNoCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a string from a buffer, containing characters in a specified encoding, that might serve as the backing store for the new string.

## Declaration

```objectivec
extern CFStringRefCFStringCreateWithBytesNoCopy(CFAllocatorRef alloc, const UInt8 *bytes, CFIndex numBytes, CFStringEncoding encoding, Boolean isExternalRepresentation, CFAllocatorRef contentsDeallocator);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFString object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `bytes`: A buffer containing characters in the encoding specified by `encoding`. The buffer must *not* contain a length byte (as in Pascal buffers) or any terminating `NULL` character (as in C buffers).
- `numBytes`: The number of bytes in `bytes`.
- `encoding`: The character encoding of `bytes`.
- `isExternalRepresentation`: `true` if the characters in the byte buffer are in an “external representation” format—that is, whether the buffer contains a BOM (byte order marker). This is usually the case for bytes that are read in from a text file or received over the network. Otherwise, pass `false`.
- `contentsDeallocator`: The allocator to use to deallocate `bytes` when it is no longer needed. You can pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to request the default allocator for this purpose. If the buffer does not need to be deallocated, or if you want to assume responsibility for deallocating the buffer (and not have the string deallocate it), pass [kCFAllocatorNull](kcfallocatornull.md).

<a id="return-value"></a>

## Return Value

A new string whose contents are `bytes`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function takes an explicit length, and allows you to specify whether the data is an external format—that is, whether to pay attention to the BOM character (if any) and do byte swapping if necessary

<a id="Special-Considerations"></a>

### Special Considerations

If an error occurs during the creation of the string, then `bytes` is not deallocated. In this case, the caller is responsible for freeing the buffer. This allows the caller to continue trying to create a string with the buffer, without having the buffer deallocated.

## See Also

### Creating a CFString

- [CFSTR](cfstr.md): Creates an immutable string from a constant compile-time string.
- [CFStringCreateArrayBySeparatingStrings](cfstringcreatearraybyseparatingstrings%28______%29.md): Creates an array of CFString objects from a single CFString object.
- [CFStringCreateByCombiningStrings](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateCopy](cfstringcreatecopy%28____%29.md): Creates an immutable copy of a string.
- [CFStringCreateFromExternalRepresentation](cfstringcreatefromexternalrepresentation%28______%29.md): Creates a string from its “external representation.”
- [CFStringCreateWithBytes](cfstringcreatewithbytes%28__________%29.md): Creates a string from a buffer containing characters in a specified encoding.
- [CFStringCreateWithCharacters](cfstringcreatewithcharacters%28______%29.md): Creates a string from a buffer of Unicode characters.
- [CFStringCreateWithCharactersNoCopy](cfstringcreatewithcharactersnocopy%28________%29.md): Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.
- [CFStringCreateWithCString](cfstringcreatewithcstring%28______%29.md): Creates an immutable string from a C string.
- [CFStringCreateWithCStringNoCopy](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormat](cfstringcreatewithformat.md): Creates an immutable string from a formatted string and a variable number of arguments.
- [CFStringCreateWithFormatAndArguments](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.
