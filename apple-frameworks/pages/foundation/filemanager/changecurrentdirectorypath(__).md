> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/changecurrentdirectorypath(_:)](https://developer.apple.com/documentation/foundation/filemanager/changecurrentdirectorypath(_:))

# changeCurrentDirectoryPath(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Changes the path of the current working directory to the specified path.

## Declaration

```swift
func changeCurrentDirectoryPath(_ path: String) -> Bool
```

## Parameters

- `path`: The path of the directory to which to change.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

All relative pathnames refer implicitly to the current working directory.

> **Warning**

>  This method changes the current working directory for the current process, not just the receiver.

## See Also

### Related Documentation

- [fileExists(atPath:isDirectory:)](fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.

### Managing the current directory

- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.

# changeCurrentDirectoryPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Changes the path of the current working directory to the specified path.

## Declaration

```objectivec
- (BOOL) changeCurrentDirectoryPath:(NSString *) path;
```

## Parameters

- `path`: The path of the directory to which to change.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

All relative pathnames refer implicitly to the current working directory.

> **Warning**

>  This method changes the current working directory for the current process, not just the receiver.

## See Also

### Related Documentation

- [fileExistsAtPath:isDirectory:](fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.

### Managing the current directory

- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.
