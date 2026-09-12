> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/contents(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/contents(atpath:))

# contents(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the contents of the file at the specified path.

## Declaration

```swift
func contents(atPath path: String) -> Data?
```

## Parameters

- `path`: The path of the file whose contents you want.

<a id="return-value"></a>

## Return Value

An [NSData](../nsdata.md) object with the contents of the file. If `path` specifies a directory, or if some other error occurs, this method returns `nil`.

## See Also

### Related Documentation

- [createFile(atPath:contents:attributes:)](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.

### Getting and comparing file contents

- [contentsEqual(atPath:andPath:)](contentsequal%28atpath_andpath_%29.md): Returns a Boolean value that indicates whether the files or directories in specified paths have the same contents.

# contentsAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the contents of the file at the specified path.

## Declaration

```objectivec
- (NSData *) contentsAtPath:(NSString *) path;
```

## Parameters

- `path`: The path of the file whose contents you want.

<a id="return-value"></a>

## Return Value

An [NSData](../nsdata.md) object with the contents of the file. If `path` specifies a directory, or if some other error occurs, this method returns `nil`.

## See Also

### Related Documentation

- [createFileAtPath:contents:attributes:](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.

### Getting and comparing file contents

- [contentsEqualAtPath:andPath:](contentsequal%28atpath_andpath_%29.md): Returns a Boolean value that indicates whether the files or directories in specified paths have the same contents.
