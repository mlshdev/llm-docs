> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldremoveitemat:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldremoveitemat:))

# fileManager(\_:shouldRemoveItemAt:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate whether the item at the specified URL should be deleted.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldRemoveItemAt URL: URL) -> Bool
```

## Parameters

- `fileManager`: The file manager object that is attempting to remove the file or directory.
- `URL`: The URL indicating the file or directory that the file manager is attempting to delete.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified item should be removed or [false](https://developer.apple.com/documentation/swift/false) if it should not be removed.

<a id="Discussion"></a>

## Discussion

Removed items are deleted immediately and not placed in the Trash. If the specified item is a directory, returning [false](https://developer.apple.com/documentation/swift/false) prevents both the directory and its children from being deleted.

This method performs the same task as the [fileManager(\_:shouldRemoveItemAtPath:)](filemanager%28__shouldremoveitematpath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [removeItem(atPath:)](../filemanager/removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [removeItem(at:)](../filemanager/removeitem%28at_%29.md): Removes the file or directory at the specified URL.

### Removing an Item

- [fileManager(\_:shouldRemoveItemAtPath:)](filemanager%28__shouldremoveitematpath_%29.md): Asks the delegate whether the item at the specified path should be deleted.
- [fileManager(\_:shouldProceedAfterError:removingItemAt:)](filemanager%28__shouldproceedaftererror_removingitemat_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:removingItemAtPath:)](filemanager%28__shouldproceedaftererror_removingitematpath_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified path.

# fileManager:shouldRemoveItemAtURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate whether the item at the specified URL should be deleted.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldRemoveItemAtURL:(NSURL *) URL;
```

## Parameters

- `fileManager`: The file manager object that is attempting to remove the file or directory.
- `URL`: The URL indicating the file or directory that the file manager is attempting to delete.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified item should be removed or [false](https://developer.apple.com/documentation/swift/false) if it should not be removed.

<a id="Discussion"></a>

## Discussion

Removed items are deleted immediately and not placed in the Trash. If the specified item is a directory, returning [false](https://developer.apple.com/documentation/swift/false) prevents both the directory and its children from being deleted.

This method performs the same task as the [fileManager:shouldRemoveItemAtPath:](filemanager%28__shouldremoveitematpath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [removeItemAtPath:error:](../filemanager/removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [removeItemAtURL:error:](../filemanager/removeitem%28at_%29.md): Removes the file or directory at the specified URL.

### Removing an Item

- [fileManager:shouldRemoveItemAtPath:](filemanager%28__shouldremoveitematpath_%29.md): Asks the delegate whether the item at the specified path should be deleted.
- [fileManager:shouldProceedAfterError:removingItemAtURL:](filemanager%28__shouldproceedaftererror_removingitemat_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified URL.
- [fileManager:shouldProceedAfterError:removingItemAtPath:](filemanager%28__shouldproceedaftererror_removingitematpath_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified path.
