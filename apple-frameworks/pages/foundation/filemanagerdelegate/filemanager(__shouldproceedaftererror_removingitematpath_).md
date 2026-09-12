> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:removingitematpath:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:removingitematpath:))

# fileManager(\_:shouldProceedAfterError:removingItemAtPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the operation should continue after an error occurs while removing the item at the specified path.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldProceedAfterError error: any Error, removingItemAtPath path: String) -> Bool
```

## Parameters

- `fileManager`: The file manager object that attempted to remove the item.
- `error`: The error that occurred during the attempt to copy.
- `path`: The path for the file or directory that the file manager tried to delete.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem deleting the item to the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager continues deleting any remaining items and ignores the error.

This method performs the same task as the [fileManager(\_:shouldProceedAfterError:removingItemAt:)](filemanager%28__shouldproceedaftererror_removingitemat_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [removeItem(atPath:)](../filemanager/removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [removeItem(at:)](../filemanager/removeitem%28at_%29.md): Removes the file or directory at the specified URL.

### Removing an Item

- [fileManager(\_:shouldRemoveItemAt:)](filemanager%28__shouldremoveitemat_%29.md): Asks the delegate whether the item at the specified URL should be deleted.
- [fileManager(\_:shouldRemoveItemAtPath:)](filemanager%28__shouldremoveitematpath_%29.md): Asks the delegate whether the item at the specified path should be deleted.
- [fileManager(\_:shouldProceedAfterError:removingItemAt:)](filemanager%28__shouldproceedaftererror_removingitemat_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified URL.

# fileManager:shouldProceedAfterError:removingItemAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the operation should continue after an error occurs while removing the item at the specified path.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldProceedAfterError:(NSError *) error removingItemAtPath:(NSString *) path;
```

## Parameters

- `fileManager`: The file manager object that attempted to remove the item.
- `error`: The error that occurred during the attempt to copy.
- `path`: The path for the file or directory that the file manager tried to delete.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem deleting the item to the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager continues deleting any remaining items and ignores the error.

This method performs the same task as the [fileManager:shouldProceedAfterError:removingItemAtURL:](filemanager%28__shouldproceedaftererror_removingitemat_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [removeItemAtPath:error:](../filemanager/removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [removeItemAtURL:error:](../filemanager/removeitem%28at_%29.md): Removes the file or directory at the specified URL.

### Removing an Item

- [fileManager:shouldRemoveItemAtURL:](filemanager%28__shouldremoveitemat_%29.md): Asks the delegate whether the item at the specified URL should be deleted.
- [fileManager:shouldRemoveItemAtPath:](filemanager%28__shouldremoveitematpath_%29.md): Asks the delegate whether the item at the specified path should be deleted.
- [fileManager:shouldProceedAfterError:removingItemAtURL:](filemanager%28__shouldproceedaftererror_removingitemat_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified URL.
