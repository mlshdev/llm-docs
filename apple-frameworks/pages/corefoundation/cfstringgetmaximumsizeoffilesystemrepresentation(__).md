> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetmaximumsizeoffilesystemrepresentation(_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetmaximumsizeoffilesystemrepresentation(_:))

# CFStringGetMaximumSizeOfFileSystemRepresentation(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines the upper bound on the number of bytes required to hold the file system representation of the string.

## Declaration

```swift
func CFStringGetMaximumSizeOfFileSystemRepresentation(_ string: CFString!) -> CFIndex
```

## Parameters

- `string`: The string to convert.

<a id="return-value"></a>

## Return Value

The upper bound on the number of bytes required to hold the file system representation of the string.

<a id="Discussion"></a>

## Discussion

The result is returned quickly as a rough approximation, and could be much larger than the actual space required. The result includes space for the zero termination. If you are allocating a buffer for long-term storage, you should reallocate it to be the right size after calling [CFStringGetFileSystemRepresentation(\_:\_:\_:)](cfstringgetfilesystemrepresentation%28______%29.md).

## See Also

### String File System Representations

- [CFStringCreateWithFileSystemRepresentation(\_:\_:)](cfstringcreatewithfilesystemrepresentation%28____%29.md): Creates a CFString from a zero-terminated POSIX file system representation.
- [CFStringGetFileSystemRepresentation(\_:\_:\_:)](cfstringgetfilesystemrepresentation%28______%29.md): Extracts the contents of a string as a `NULL`-terminated 8-bit string appropriate for passing to POSIX APIs.

# CFStringGetMaximumSizeOfFileSystemRepresentation (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines the upper bound on the number of bytes required to hold the file system representation of the string.

## Declaration

```objectivec
extern CFIndex CFStringGetMaximumSizeOfFileSystemRepresentation(CFStringRef string);
```

## Parameters

- `string`: The string to convert.

<a id="return-value"></a>

## Return Value

The upper bound on the number of bytes required to hold the file system representation of the string.

<a id="Discussion"></a>

## Discussion

The result is returned quickly as a rough approximation, and could be much larger than the actual space required. The result includes space for the zero termination. If you are allocating a buffer for long-term storage, you should reallocate it to be the right size after calling [CFStringGetFileSystemRepresentation](cfstringgetfilesystemrepresentation%28______%29.md).

## See Also

### String File System Representations

- [CFStringCreateWithFileSystemRepresentation](cfstringcreatewithfilesystemrepresentation%28____%29.md): Creates a CFString from a zero-terminated POSIX file system representation.
- [CFStringGetFileSystemRepresentation](cfstringgetfilesystemrepresentation%28______%29.md): Extracts the contents of a string as a `NULL`-terminated 8-bit string appropriate for passing to POSIX APIs.
