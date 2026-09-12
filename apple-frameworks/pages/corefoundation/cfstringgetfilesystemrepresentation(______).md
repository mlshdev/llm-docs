> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetfilesystemrepresentation(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetfilesystemrepresentation(_:_:_:))

# CFStringGetFileSystemRepresentation(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Extracts the contents of a string as a `NULL`-terminated 8-bit string appropriate for passing to POSIX APIs.

## Declaration

```swift
func CFStringGetFileSystemRepresentation(_ string: CFString!, _ buffer: UnsafeMutablePointer<CChar>!, _ maxBufLen: CFIndex) -> Bool
```

## Parameters

- `string`: The string to convert.
- `buffer`: The C string buffer into which to copy the string. The buffer must be at least `maxBufLen` bytes in length. On return, the buffer contains the converted characters.
- `maxBufLen`: The maximum length of the buffer.

<a id="return-value"></a>

## Return Value

`true` if the string is correctly converted; `false` if the conversion fails, or the results don’t fit into the buffer.

<a id="Discussion"></a>

## Discussion

You can use [CFStringGetMaximumSizeOfFileSystemRepresentation(\_:)](cfstringgetmaximumsizeoffilesystemrepresentation%28__%29.md) if you want to make sure the buffer is of sufficient length.

## See Also

### String File System Representations

- [CFStringCreateWithFileSystemRepresentation(\_:\_:)](cfstringcreatewithfilesystemrepresentation%28____%29.md): Creates a CFString from a zero-terminated POSIX file system representation.
- [CFStringGetMaximumSizeOfFileSystemRepresentation(\_:)](cfstringgetmaximumsizeoffilesystemrepresentation%28__%29.md): Determines the upper bound on the number of bytes required to hold the file system representation of the string.

# CFStringGetFileSystemRepresentation (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Extracts the contents of a string as a `NULL`-terminated 8-bit string appropriate for passing to POSIX APIs.

## Declaration

```objectivec
extern Boolean CFStringGetFileSystemRepresentation(CFStringRef string, char *buffer, CFIndex maxBufLen);
```

## Parameters

- `string`: The string to convert.
- `buffer`: The C string buffer into which to copy the string. The buffer must be at least `maxBufLen` bytes in length. On return, the buffer contains the converted characters.
- `maxBufLen`: The maximum length of the buffer.

<a id="return-value"></a>

## Return Value

`true` if the string is correctly converted; `false` if the conversion fails, or the results don’t fit into the buffer.

<a id="Discussion"></a>

## Discussion

You can use [CFStringGetMaximumSizeOfFileSystemRepresentation](cfstringgetmaximumsizeoffilesystemrepresentation%28__%29.md) if you want to make sure the buffer is of sufficient length.

## See Also

### String File System Representations

- [CFStringCreateWithFileSystemRepresentation](cfstringcreatewithfilesystemrepresentation%28____%29.md): Creates a CFString from a zero-terminated POSIX file system representation.
- [CFStringGetMaximumSizeOfFileSystemRepresentation](cfstringgetmaximumsizeoffilesystemrepresentation%28__%29.md): Determines the upper bound on the number of bytes required to hold the file system representation of the string.
