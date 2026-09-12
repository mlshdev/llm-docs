> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/string(withfilesystemrepresentation:length:)](https://developer.apple.com/documentation/foundation/filemanager/string(withfilesystemrepresentation:length:))

# string(withFileSystemRepresentation:length:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an [NSString](../nsstring.md) object whose contents are derived from the specified C-string path.

## Declaration

```swift
func string(withFileSystemRepresentation str: UnsafePointer<CChar>, length len: Int) -> String
```

## Parameters

- `str`: A C string representation of a pathname.
- `len`: The number of characters in `string`.

<a id="return-value"></a>

## Return Value

An [NSString](../nsstring.md) object converted from the C-string representation `string` with length `len` of a pathname in the current file system.

<a id="Discussion"></a>

## Discussion

Use this method if your code receives paths as C strings from system routines.

## See Also

### Converting file paths to strings

- [fileSystemRepresentation(withPath:)](filesystemrepresentation%28withpath_%29.md): Returns a C-string representation of a given path that properly encodes Unicode strings for use by the file system.

# stringWithFileSystemRepresentation:length: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an [NSString](../nsstring.md) object whose contents are derived from the specified C-string path.

## Declaration

```objectivec
- (NSString *) stringWithFileSystemRepresentation:(const char *) str length:(NSUInteger) len;
```

## Parameters

- `str`: A C string representation of a pathname.
- `len`: The number of characters in `string`.

<a id="return-value"></a>

## Return Value

An [NSString](../nsstring.md) object converted from the C-string representation `string` with length `len` of a pathname in the current file system.

<a id="Discussion"></a>

## Discussion

Use this method if your code receives paths as C strings from system routines.

## See Also

### Converting file paths to strings

- [fileSystemRepresentationWithPath:](filesystemrepresentation%28withpath_%29.md): Returns a C-string representation of a given path that properly encodes Unicode strings for use by the file system.
