> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcreatewithfilesystemrepresentation(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcreatewithfilesystemrepresentation(_:_:))

# CFStringCreateWithFileSystemRepresentation(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFString from a zero-terminated POSIX file system representation.

## Declaration

```swift
func CFStringCreateWithFileSystemRepresentation(_ alloc: CFAllocator!, _ buffer: UnsafePointer<CChar>!) -> CFString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `buffer`: The C string that you want to convert.

<a id="return-value"></a>

## Return Value

A string that represents `buffer`. The result is `NULL` if there was a problem in creating the string (possible if the conversion fails due to bytes in the buffer not being a valid sequence of bytes for the appropriate character encoding). Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### String File System Representations

- [CFStringGetFileSystemRepresentation(\_:\_:\_:)](cfstringgetfilesystemrepresentation%28______%29.md): Extracts the contents of a string as a `NULL`-terminated 8-bit string appropriate for passing to POSIX APIs.
- [CFStringGetMaximumSizeOfFileSystemRepresentation(\_:)](cfstringgetmaximumsizeoffilesystemrepresentation%28__%29.md): Determines the upper bound on the number of bytes required to hold the file system representation of the string.

# CFStringCreateWithFileSystemRepresentation (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFString from a zero-terminated POSIX file system representation.

## Declaration

```objectivec
extern CFStringRefCFStringCreateWithFileSystemRepresentation(CFAllocatorRef alloc, const char *buffer);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `buffer`: The C string that you want to convert.

<a id="return-value"></a>

## Return Value

A string that represents `buffer`. The result is `NULL` if there was a problem in creating the string (possible if the conversion fails due to bytes in the buffer not being a valid sequence of bytes for the appropriate character encoding). Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### String File System Representations

- [CFStringGetFileSystemRepresentation](cfstringgetfilesystemrepresentation%28______%29.md): Extracts the contents of a string as a `NULL`-terminated 8-bit string appropriate for passing to POSIX APIs.
- [CFStringGetMaximumSizeOfFileSystemRepresentation](cfstringgetmaximumsizeoffilesystemrepresentation%28__%29.md): Determines the upper bound on the number of bytes required to hold the file system representation of the string.
