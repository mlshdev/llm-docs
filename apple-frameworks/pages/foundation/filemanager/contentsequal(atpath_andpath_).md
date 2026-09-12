> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/contentsequal(atpath:andpath:)](https://developer.apple.com/documentation/foundation/filemanager/contentsequal(atpath:andpath:))

# contentsEqual(atPath:andPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the files or directories in specified paths have the same contents.

## Declaration

```swift
func contentsEqual(atPath path1: String, andPath path2: String) -> Bool
```

## Parameters

- `path1`: The path of a file or directory to compare with the contents of `path2`.
- `path2`: The path of a file or directory to compare with the contents of `path1`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if file or directory specified in `path1` has the same contents as that specified in `path2`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `path1` and `path2` are directories, the contents are the list of files and subdirectories each contains—contents of subdirectories are also compared. For files, this method checks to see if they’re the same file, then compares their size, and finally compares their contents. This method does not traverse symbolic links, but compares the links themselves.

## See Also

### Getting and comparing file contents

- [contents(atPath:)](contents%28atpath_%29.md): Returns the contents of the file at the specified path.

# contentsEqualAtPath:andPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the files or directories in specified paths have the same contents.

## Declaration

```objectivec
- (BOOL) contentsEqualAtPath:(NSString *) path1 andPath:(NSString *) path2;
```

## Parameters

- `path1`: The path of a file or directory to compare with the contents of `path2`.
- `path2`: The path of a file or directory to compare with the contents of `path1`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if file or directory specified in `path1` has the same contents as that specified in `path2`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `path1` and `path2` are directories, the contents are the list of files and subdirectories each contains—contents of subdirectories are also compared. For files, this method checks to see if they’re the same file, then compares their size, and finally compares their contents. This method does not traverse symbolic links, but compares the links themselves.

## See Also

### Getting and comparing file contents

- [contentsAtPath:](contents%28atpath_%29.md): Returns the contents of the file at the specified path.
