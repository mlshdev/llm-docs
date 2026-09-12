> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcreatecopy(_:_:))

# CFStringCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable copy of a string.

## Declaration

```swift
func CFStringCreateCopy(_ alloc: CFAllocator!, _ theString: CFString!) -> CFString!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theString`: The string to copy.

<a id="return-value"></a>

## Return Value

An immutable string whose contents are identical to `theString`. Returns `NULL` if there was a problem copying the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The resulting object has the same Unicode contents as the original object, but it is always immutable. It might also have different storage characteristics, and hence might reply differently to functions such as [CFStringGetCStringPtr(\_:\_:)](cfstringgetcstringptr%28____%29.md). Also, if the specified allocator and the allocator of the original object are the same, and the string is already immutable, this function may simply increment the retention count without making a true copy. However, the resulting object is a true immutable copy, except the operation was a lot more efficient.

You should use this function in situations where a string is or could be mutable, and you need to take a snapshot of its current value. For example, you might decide to pass a copy of a string to a function that stores its current value in a list for later use.

## See Also

### Creating a CFString

- [CFStringCreateArrayBySeparatingStrings(\_:\_:\_:)](cfstringcreatearraybyseparatingstrings%28______%29.md): Creates an array of CFString objects from a single CFString object.
- [CFStringCreateByCombiningStrings(\_:\_:\_:)](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateFromExternalRepresentation(\_:\_:\_:)](cfstringcreatefromexternalrepresentation%28______%29.md): Creates a string from its “external representation.”
- [CFStringCreateWithBytes(\_:\_:\_:\_:\_:)](cfstringcreatewithbytes%28__________%29.md): Creates a string from a buffer containing characters in a specified encoding.
- [CFStringCreateWithBytesNoCopy(\_:\_:\_:\_:\_:\_:)](cfstringcreatewithbytesnocopy%28____________%29.md): Creates a string from a buffer, containing characters in a specified encoding, that might serve as the backing store for the new string.
- [CFStringCreateWithCharacters(\_:\_:\_:)](cfstringcreatewithcharacters%28______%29.md): Creates a string from a buffer of Unicode characters.
- [CFStringCreateWithCharactersNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcharactersnocopy%28________%29.md): Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.
- [CFStringCreateWithCString(\_:\_:\_:)](cfstringcreatewithcstring%28______%29.md): Creates an immutable string from a C string.
- [CFStringCreateWithCStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormatAndArguments(\_:\_:\_:\_:)](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString(\_:\_:\_:)](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy(\_:\_:\_:\_:)](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring(\_:\_:\_:)](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.

# CFStringCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an immutable copy of a string.

## Declaration

```objectivec
extern CFStringRefCFStringCreateCopy(CFAllocatorRef alloc, CFStringRef theString);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new string. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theString`: The string to copy.

<a id="return-value"></a>

## Return Value

An immutable string whose contents are identical to `theString`. Returns `NULL` if there was a problem copying the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The resulting object has the same Unicode contents as the original object, but it is always immutable. It might also have different storage characteristics, and hence might reply differently to functions such as [CFStringGetCStringPtr](cfstringgetcstringptr%28____%29.md). Also, if the specified allocator and the allocator of the original object are the same, and the string is already immutable, this function may simply increment the retention count without making a true copy. However, the resulting object is a true immutable copy, except the operation was a lot more efficient.

You should use this function in situations where a string is or could be mutable, and you need to take a snapshot of its current value. For example, you might decide to pass a copy of a string to a function that stores its current value in a list for later use.

## See Also

### Creating a CFString

- [CFSTR](cfstr.md): Creates an immutable string from a constant compile-time string.
- [CFStringCreateArrayBySeparatingStrings](cfstringcreatearraybyseparatingstrings%28______%29.md): Creates an array of CFString objects from a single CFString object.
- [CFStringCreateByCombiningStrings](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateFromExternalRepresentation](cfstringcreatefromexternalrepresentation%28______%29.md): Creates a string from its “external representation.”
- [CFStringCreateWithBytes](cfstringcreatewithbytes%28__________%29.md): Creates a string from a buffer containing characters in a specified encoding.
- [CFStringCreateWithBytesNoCopy](cfstringcreatewithbytesnocopy%28____________%29.md): Creates a string from a buffer, containing characters in a specified encoding, that might serve as the backing store for the new string.
- [CFStringCreateWithCharacters](cfstringcreatewithcharacters%28______%29.md): Creates a string from a buffer of Unicode characters.
- [CFStringCreateWithCharactersNoCopy](cfstringcreatewithcharactersnocopy%28________%29.md): Creates a string from a buffer of Unicode characters that might serve as the backing store for the object.
- [CFStringCreateWithCString](cfstringcreatewithcstring%28______%29.md): Creates an immutable string from a C string.
- [CFStringCreateWithCStringNoCopy](cfstringcreatewithcstringnocopy%28________%29.md): Creates a CFString object from an external C string buffer that might serve as the backing store for the object.
- [CFStringCreateWithFormat](cfstringcreatewithformat.md): Creates an immutable string from a formatted string and a variable number of arguments.
- [CFStringCreateWithFormatAndArguments](cfstringcreatewithformatandarguments%28________%29.md): Creates an immutable string from a formatted string and a variable number of arguments (specified in a parameter of type `va_list`).
- [CFStringCreateWithPascalString](cfstringcreatewithpascalstring%28______%29.md): Creates an immutable CFString object from a Pascal string.
- [CFStringCreateWithPascalStringNoCopy](cfstringcreatewithpascalstringnocopy%28________%29.md): Creates a CFString object from an external Pascal string buffer that might serve as the backing store for the object.
- [CFStringCreateWithSubstring](cfstringcreatewithsubstring%28______%29.md): Creates an immutable string from a segment (substring) of an existing string.
