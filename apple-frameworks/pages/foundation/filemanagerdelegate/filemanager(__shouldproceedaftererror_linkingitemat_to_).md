> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:linkingitemat:to:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:linkingitemat:to:))

# fileManager(\_:shouldProceedAfterError:linkingItemAt:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldProceedAfterError error: any Error, linkingItemAt srcURL: URL, to dstURL: URL) -> Bool
```

## Parameters

- `fileManager`: The file manager object that attempted to create the link.
- `error`: The error that occurred during the link attempt.
- `srcURL`: The URL of the attempted link location.
- `dstURL`: The URL of the file or directory that was the destination of the hard link.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem creating a hard link to the item at the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager continues creating any other links associated with the current operation and ignores the error.

This method performs the same task as the [fileManager(\_:shouldProceedAfterError:linkingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [linkItem(at:to:)](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItem(atPath:toPath:)](../filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

### Linking an Item

- [fileManager(\_:shouldLinkItemAt:to:)](filemanager%28__shouldlinkitemat_to_%29.md): Asks the delegate if a hard link should be created between the items at the two URLs.
- [fileManager(\_:shouldLinkItemAtPath:toPath:)](filemanager%28__shouldlinkitematpath_topath_%29.md): Asks the delegate if a hard link should be created between the items at the two paths.
- [fileManager(\_:shouldProceedAfterError:linkingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.

# fileManager:shouldProceedAfterError:linkingItemAtURL:toURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldProceedAfterError:(NSError *) error linkingItemAtURL:(NSURL *) srcURL toURL:(NSURL *) dstURL;
```

## Parameters

- `fileManager`: The file manager object that attempted to create the link.
- `error`: The error that occurred during the link attempt.
- `srcURL`: The URL of the attempted link location.
- `dstURL`: The URL of the file or directory that was the destination of the hard link.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem creating a hard link to the item at the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager continues creating any other links associated with the current operation and ignores the error.

This method performs the same task as the [fileManager:shouldProceedAfterError:linkingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [linkItemAtURL:toURL:error:](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItemAtPath:toPath:error:](../filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

### Linking an Item

- [fileManager:shouldLinkItemAtURL:toURL:](filemanager%28__shouldlinkitemat_to_%29.md): Asks the delegate if a hard link should be created between the items at the two URLs.
- [fileManager:shouldLinkItemAtPath:toPath:](filemanager%28__shouldlinkitematpath_topath_%29.md): Asks the delegate if a hard link should be created between the items at the two paths.
- [fileManager:shouldProceedAfterError:linkingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.
