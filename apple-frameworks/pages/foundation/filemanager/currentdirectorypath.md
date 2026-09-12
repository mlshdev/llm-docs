> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/currentdirectorypath](https://developer.apple.com/documentation/foundation/filemanager/currentdirectorypath)

# currentDirectoryPath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The path to the program’s current directory.

## Declaration

```swift
var currentDirectoryPath: String { get }
```

<a id="Discussion"></a>

## Discussion

The current directory path is the starting point for any relative paths you specify. For example, if the current directory is `/tmp` and you specify a relative pathname of `reports/info.txt`, the resulting full path for the item is `/tmp/reports/info.txt`.

When an app is launched, this property is initially set to the app’s current working directory. If the current working directory is not accessible for any reason, the value of this property is `nil`. You can change the value of this property by calling the [changeCurrentDirectoryPath(\_:)](changecurrentdirectorypath%28__%29.md) method.

> **Warning**

>  This property reports the current working directory for the current process, not just the receiver.

## See Also

### Related Documentation

- [createDirectory(atPath:withIntermediateDirectories:attributes:)](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.

### Managing the current directory

- [changeCurrentDirectoryPath(\_:)](changecurrentdirectorypath%28__%29.md): Changes the path of the current working directory to the specified path.

# currentDirectoryPath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The path to the program’s current directory.

## Declaration

```objectivec
@property (copy, readonly) NSString * currentDirectoryPath;
```

<a id="Discussion"></a>

## Discussion

The current directory path is the starting point for any relative paths you specify. For example, if the current directory is `/tmp` and you specify a relative pathname of `reports/info.txt`, the resulting full path for the item is `/tmp/reports/info.txt`.

When an app is launched, this property is initially set to the app’s current working directory. If the current working directory is not accessible for any reason, the value of this property is `nil`. You can change the value of this property by calling the [changeCurrentDirectoryPath:](changecurrentdirectorypath%28__%29.md) method.

> **Warning**

>  This property reports the current working directory for the current process, not just the receiver.

## See Also

### Related Documentation

- [createDirectoryAtPath:withIntermediateDirectories:attributes:error:](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.

### Managing the current directory

- [changeCurrentDirectoryPath:](changecurrentdirectorypath%28__%29.md): Changes the path of the current working directory to the specified path.
