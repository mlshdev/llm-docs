> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/filesystemrepresentation(withpath:)](https://developer.apple.com/documentation/foundation/filemanager/filesystemrepresentation(withpath:))

# fileSystemRepresentation(withPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a C-string representation of a given path that properly encodes Unicode strings for use by the file system.

## Declaration

```swift
func fileSystemRepresentation(withPath path: String) -> UnsafePointer<CChar>
```

## Parameters

- `path`: A string object containing a path to a file. This parameter must not be `nil` or contain the empty string.

<a id="return-value"></a>

## Return Value

A C-string representation of `path` that properly encodes Unicode strings for use by the file system.

<a id="Discussion"></a>

## Discussion

Use this method if your code calls system routines that expect C-string path arguments. If you use the C string beyond the scope of the current autorelease pool, you must copy it.

This method raises an exception if `path` is `nil` or contains the empty string. This method also throws an exception if the conversion of the string fails.

## See Also

### Converting file paths to strings

- [string(withFileSystemRepresentation:length:)](string%28withfilesystemrepresentation_length_%29.md): Returns an [NSString](../nsstring.md) object whose contents are derived from the specified C-string path.

# fileSystemRepresentationWithPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a C-string representation of a given path that properly encodes Unicode strings for use by the file system.

## Declaration

```objectivec
- (const char *) fileSystemRepresentationWithPath:(NSString *) path;
```

## Parameters

- `path`: A string object containing a path to a file. This parameter must not be `nil` or contain the empty string.

<a id="return-value"></a>

## Return Value

A C-string representation of `path` that properly encodes Unicode strings for use by the file system.

<a id="Discussion"></a>

## Discussion

Use this method if your code calls system routines that expect C-string path arguments. If you use the C string beyond the scope of the current autorelease pool, you must copy it.

This method raises an exception if `path` is `nil` or contains the empty string. This method also throws an exception if the conversion of the string fails.

## See Also

### Converting file paths to strings

- [stringWithFileSystemRepresentation:length:](string%28withfilesystemrepresentation_length_%29.md): Returns an [NSString](../nsstring.md) object whose contents are derived from the specified C-string path.
