> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringcreatearraybyseparatingstrings(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringcreatearraybyseparatingstrings(_:_:_:))

# CFStringCreateArrayBySeparatingStrings(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an array of CFString objects from a single CFString object.

## Declaration

```swift
func CFStringCreateArrayBySeparatingStrings(_ alloc: CFAllocator!, _ theString: CFString!, _ separatorString: CFString!) -> CFArray!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFArray object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theString`: The string to be divided into substrings. The substrings should be separated by `separatorString`.
- `separatorString`: The string used to separate the substrings in `theString`.

<a id="return-value"></a>

## Return Value

A new array that contains CFString objects that represent substrings of `theString`, or `NULL` if there was a problem creating the object. The order of elements in the array is identical to the order of the substrings in `theString`. If `separatorString` does not occur in `theString`, the result is an array containing `theString`. If `separatorString` is equal to `theString`, then the result is an array containing two empty strings. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function provides a convenient way to convert units of data captured in a single string to a form (an array) suitable for iterative processing. One or more delimiter characters (or “separator string”) separates the substrings in the source string—these characters are frequently whitespace characters such as tabs and newlines (carriage returns). For example, you might have a file containing a localized list of place names with each name separated by a tab character. You could create a CFString object from this file and call this function on the string to obtain a CFArray object whose elements are these place names.

`separatorString` is treated as a complete unit. If you specify `XYZ` as the separator string, then if `theString` is `aXbYZcXYZe`, then the returned array contains `aXbYZc` and `e`.

See also [CFStringCreateByCombiningStrings(\_:\_:\_:)](cfstringcreatebycombiningstrings%28______%29.md).

## See Also

### Creating a CFString

- [CFStringCreateByCombiningStrings(\_:\_:\_:)](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateCopy(\_:\_:)](cfstringcreatecopy%28____%29.md): Creates an immutable copy of a string.
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

# CFStringCreateArrayBySeparatingStrings (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an array of CFString objects from a single CFString object.

## Declaration

```objectivec
extern CFArrayRefCFStringCreateArrayBySeparatingStrings(CFAllocatorRef alloc, CFStringRef theString, CFStringRef separatorString);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new CFArray object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theString`: The string to be divided into substrings. The substrings should be separated by `separatorString`.
- `separatorString`: The string used to separate the substrings in `theString`.

<a id="return-value"></a>

## Return Value

A new array that contains CFString objects that represent substrings of `theString`, or `NULL` if there was a problem creating the object. The order of elements in the array is identical to the order of the substrings in `theString`. If `separatorString` does not occur in `theString`, the result is an array containing `theString`. If `separatorString` is equal to `theString`, then the result is an array containing two empty strings. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function provides a convenient way to convert units of data captured in a single string to a form (an array) suitable for iterative processing. One or more delimiter characters (or “separator string”) separates the substrings in the source string—these characters are frequently whitespace characters such as tabs and newlines (carriage returns). For example, you might have a file containing a localized list of place names with each name separated by a tab character. You could create a CFString object from this file and call this function on the string to obtain a CFArray object whose elements are these place names.

`separatorString` is treated as a complete unit. If you specify `XYZ` as the separator string, then if `theString` is `aXbYZcXYZe`, then the returned array contains `aXbYZc` and `e`.

See also [CFStringCreateByCombiningStrings](cfstringcreatebycombiningstrings%28______%29.md).

## See Also

### Creating a CFString

- [CFSTR](cfstr.md): Creates an immutable string from a constant compile-time string.
- [CFStringCreateByCombiningStrings](cfstringcreatebycombiningstrings%28______%29.md): Creates a single string from the individual CFString objects that comprise the elements of an array.
- [CFStringCreateCopy](cfstringcreatecopy%28____%29.md): Creates an immutable copy of a string.
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
