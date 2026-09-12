> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldlinkitemat:to:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldlinkitemat:to:))

# fileManager(\_:shouldLinkItemAt:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if a hard link should be created between the items at the two URLs.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldLinkItemAt srcURL: URL, to dstURL: URL) -> Bool
```

## Parameters

- `fileManager`: The file manager object that is attempting to create the link.
- `srcURL`: The URL identifying the new hard link to be created.
- `dstURL`: The URL identifying the destination of the link.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the link should be created or [false](https://developer.apple.com/documentation/swift/false) if it should not be created.

<a id="Discussion"></a>

## Discussion

If the item specified by `destURL` is a directory, returning [false](https://developer.apple.com/documentation/swift/false) prevents links from being created to both the directory and its children.

This method performs the same task as the [fileManager(\_:shouldLinkItemAtPath:toPath:)](filemanager%28__shouldlinkitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [linkItem(at:to:)](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItem(atPath:toPath:)](../filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

### Linking an Item

- [fileManager(\_:shouldLinkItemAtPath:toPath:)](filemanager%28__shouldlinkitematpath_topath_%29.md): Asks the delegate if a hard link should be created between the items at the two paths.
- [fileManager(\_:shouldProceedAfterError:linkingItemAt:to:)](filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:linkingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.

# fileManager:shouldLinkItemAtURL:toURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if a hard link should be created between the items at the two URLs.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldLinkItemAtURL:(NSURL *) srcURL toURL:(NSURL *) dstURL;
```

## Parameters

- `fileManager`: The file manager object that is attempting to create the link.
- `srcURL`: The URL identifying the new hard link to be created.
- `dstURL`: The URL identifying the destination of the link.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the link should be created or [false](https://developer.apple.com/documentation/swift/false) if it should not be created.

<a id="Discussion"></a>

## Discussion

If the item specified by `destURL` is a directory, returning [false](https://developer.apple.com/documentation/swift/false) prevents links from being created to both the directory and its children.

This method performs the same task as the [fileManager:shouldLinkItemAtPath:toPath:](filemanager%28__shouldlinkitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [linkItemAtURL:toURL:error:](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItemAtPath:toPath:error:](../filemanager/linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

### Linking an Item

- [fileManager:shouldLinkItemAtPath:toPath:](filemanager%28__shouldlinkitematpath_topath_%29.md): Asks the delegate if a hard link should be created between the items at the two paths.
- [fileManager:shouldProceedAfterError:linkingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.
- [fileManager:shouldProceedAfterError:linkingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.
