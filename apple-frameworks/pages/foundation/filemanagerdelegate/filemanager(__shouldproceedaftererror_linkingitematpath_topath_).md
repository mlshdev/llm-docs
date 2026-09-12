> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:linkingitematpath:topath:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:linkingitematpath:topath:))

# fileManager(\_:shouldProceedAfterError:linkingItemAtPath:toPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldProceedAfterError error: any Error, linkingItemAtPath srcPath: String, toPath dstPath: String) -> Bool
```

## Parameters

- `fileManager`: The file manager object that attempted to create the link.
- `error`: The error that occurred during the link attempt.
- `srcPath`: The path to the attempted link location.
- `dstPath`: The path to the file or directory that was the destination of the hard link.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem creating a hard link to the item at the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager continues creating any other links associated with the current operation and ignores the error.

This method performs the same task as the [fileManager(\_:shouldProceedAfterError:linkingItemAt:to:)](filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [linkItem(at:to:)](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItem(atPath:toPath:)](../filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

### Linking an Item

- [fileManager(\_:shouldLinkItemAt:to:)](filemanager%28__shouldlinkitemat_to_%29.md): Asks the delegate if a hard link should be created between the items at the two URLs.
- [fileManager(\_:shouldLinkItemAtPath:toPath:)](filemanager%28__shouldlinkitematpath_topath_%29.md): Asks the delegate if a hard link should be created between the items at the two paths.
- [fileManager(\_:shouldProceedAfterError:linkingItemAt:to:)](filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.

# fileManager:shouldProceedAfterError:linkingItemAtPath:toPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldProceedAfterError:(NSError *) error linkingItemAtPath:(NSString *) srcPath toPath:(NSString *) dstPath;
```

## Parameters

- `fileManager`: The file manager object that attempted to create the link.
- `error`: The error that occurred during the link attempt.
- `srcPath`: The path to the attempted link location.
- `dstPath`: The path to the file or directory that was the destination of the hard link.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem creating a hard link to the item at the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager continues creating any other links associated with the current operation and ignores the error.

This method performs the same task as the [fileManager:shouldProceedAfterError:linkingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [linkItemAtURL:toURL:error:](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItemAtPath:toPath:error:](../filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

### Linking an Item

- [fileManager:shouldLinkItemAtURL:toURL:](filemanager%28__shouldlinkitemat_to_%29.md): Asks the delegate if a hard link should be created between the items at the two URLs.
- [fileManager:shouldLinkItemAtPath:toPath:](filemanager%28__shouldlinkitematpath_topath_%29.md): Asks the delegate if a hard link should be created between the items at the two paths.
- [fileManager:shouldProceedAfterError:linkingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.
