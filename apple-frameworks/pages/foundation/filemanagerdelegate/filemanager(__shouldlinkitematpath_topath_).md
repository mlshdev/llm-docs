> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldlinkitematpath:topath:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldlinkitematpath:topath:))

# fileManager(\_:shouldLinkItemAtPath:toPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if a hard link should be created between the items at the two paths.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldLinkItemAtPath srcPath: String, toPath dstPath: String) -> Bool
```

## Parameters

- `fileManager`: The file manager object that is attempting to create the link.
- `srcPath`: The path or a file or directory that `fileManager` is about to attempt to link.
- `dstPath`: The path or a file or directory to which `fileManager` is about to attempt to link.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the item specified by `destURL` is a directory, returning [false](https://developer.apple.com/documentation/swift/false) prevents links from being created to both the directory and its children.

This method performs the same task as the [fileManager(\_:shouldLinkItemAt:to:)](filemanager%28__shouldlinkitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [linkItem(at:to:)](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItem(atPath:toPath:)](../filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

### Linking an Item

- [fileManager(\_:shouldLinkItemAt:to:)](filemanager%28__shouldlinkitemat_to_%29.md): Asks the delegate if a hard link should be created between the items at the two URLs.
- [fileManager(\_:shouldProceedAfterError:linkingItemAt:to:)](filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:linkingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.

# fileManager:shouldLinkItemAtPath:toPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if a hard link should be created between the items at the two paths.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldLinkItemAtPath:(NSString *) srcPath toPath:(NSString *) dstPath;
```

## Parameters

- `fileManager`: The file manager object that is attempting to create the link.
- `srcPath`: The path or a file or directory that `fileManager` is about to attempt to link.
- `dstPath`: The path or a file or directory to which `fileManager` is about to attempt to link.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the item specified by `destURL` is a directory, returning [false](https://developer.apple.com/documentation/swift/false) prevents links from being created to both the directory and its children.

This method performs the same task as the [fileManager:shouldLinkItemAtURL:toURL:](filemanager%28__shouldlinkitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [linkItemAtURL:toURL:error:](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItemAtPath:toPath:error:](../filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

### Linking an Item

- [fileManager:shouldLinkItemAtURL:toURL:](filemanager%28__shouldlinkitemat_to_%29.md): Asks the delegate if a hard link should be created between the items at the two URLs.
- [fileManager:shouldProceedAfterError:linkingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.
- [fileManager:shouldProceedAfterError:linkingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.
