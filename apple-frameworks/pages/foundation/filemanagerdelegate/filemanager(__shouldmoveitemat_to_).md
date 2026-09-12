> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldmoveitemat:to:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldmoveitemat:to:))

# fileManager(\_:shouldMoveItemAt:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the file manager should move the specified item to the new URL.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldMoveItemAt srcURL: URL, to dstURL: URL) -> Bool
```

## Parameters

- `fileManager`: The file manager object that is attempting to move the file or directory.
- `srcURL`: The URL of the file or directory that the file manager wants to move.
- `dstURL`: The URL specifying the new location for the file or directory.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be moved or [false](https://developer.apple.com/documentation/swift/false) if it should not be moved. If you do not implement this method, the file manager assumes a response of [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is called only once for the item being moved, regardless of whether the item is a file, directory, or symbolic link.

This method performs the same task as the [fileManager(\_:shouldMoveItemAtPath:toPath:)](filemanager%28__shouldmoveitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [moveItem(atPath:toPath:)](../filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.
- [moveItem(at:to:)](../filemanager/moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.

### Moving  an Item

- [fileManager(\_:shouldMoveItemAtPath:toPath:)](filemanager%28__shouldmoveitematpath_topath_%29.md): Asks the delegate if the file manager should move the specified item to the new path.
- [fileManager(\_:shouldProceedAfterError:movingItemAt:to:)](filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:movingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified path.

# fileManager:shouldMoveItemAtURL:toURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the file manager should move the specified item to the new URL.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldMoveItemAtURL:(NSURL *) srcURL toURL:(NSURL *) dstURL;
```

## Parameters

- `fileManager`: The file manager object that is attempting to move the file or directory.
- `srcURL`: The URL of the file or directory that the file manager wants to move.
- `dstURL`: The URL specifying the new location for the file or directory.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be moved or [false](https://developer.apple.com/documentation/swift/false) if it should not be moved. If you do not implement this method, the file manager assumes a response of [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is called only once for the item being moved, regardless of whether the item is a file, directory, or symbolic link.

This method performs the same task as the [fileManager:shouldMoveItemAtPath:toPath:](filemanager%28__shouldmoveitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [moveItemAtPath:toPath:error:](../filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.
- [moveItemAtURL:toURL:error:](../filemanager/moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.

### Moving  an Item

- [fileManager:shouldMoveItemAtPath:toPath:](filemanager%28__shouldmoveitematpath_topath_%29.md): Asks the delegate if the file manager should move the specified item to the new path.
- [fileManager:shouldProceedAfterError:movingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified URL.
- [fileManager:shouldProceedAfterError:movingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified path.
