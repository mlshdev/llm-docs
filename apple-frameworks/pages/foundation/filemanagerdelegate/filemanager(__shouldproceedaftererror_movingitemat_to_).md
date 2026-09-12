> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:movingitemat:to:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:movingitemat:to:))

# fileManager(\_:shouldProceedAfterError:movingItemAt:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified URL.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldProceedAfterError error: any Error, movingItemAt srcURL: URL, to dstURL: URL) -> Bool
```

## Parameters

- `fileManager`: The file manager object that attempted to move the item.
- `error`: The error that occurred while trying to move the item in `srcURL`.
- `srcURL`: The URL of the file or directory that the file manager tried to move.
- `dstURL`: The URL of the intended destination for the item in `srcURL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem moving the item to the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager proceeds to remove the item from its current location as if the move operation had completed successfully.

This method performs the same task as the [fileManager(\_:shouldProceedAfterError:movingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [moveItem(atPath:toPath:)](../filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.
- [moveItem(at:to:)](../filemanager/moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.

### Moving  an Item

- [fileManager(\_:shouldMoveItemAt:to:)](filemanager%28__shouldmoveitemat_to_%29.md): Asks the delegate if the file manager should move the specified item to the new URL.
- [fileManager(\_:shouldMoveItemAtPath:toPath:)](filemanager%28__shouldmoveitematpath_topath_%29.md): Asks the delegate if the file manager should move the specified item to the new path.
- [fileManager(\_:shouldProceedAfterError:movingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified path.

# fileManager:shouldProceedAfterError:movingItemAtURL:toURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified URL.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldProceedAfterError:(NSError *) error movingItemAtURL:(NSURL *) srcURL toURL:(NSURL *) dstURL;
```

## Parameters

- `fileManager`: The file manager object that attempted to move the item.
- `error`: The error that occurred while trying to move the item in `srcURL`.
- `srcURL`: The URL of the file or directory that the file manager tried to move.
- `dstURL`: The URL of the intended destination for the item in `srcURL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem moving the item to the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager proceeds to remove the item from its current location as if the move operation had completed successfully.

This method performs the same task as the [fileManager:shouldProceedAfterError:movingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [moveItemAtPath:toPath:error:](../filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.
- [moveItemAtURL:toURL:error:](../filemanager/moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.

### Moving  an Item

- [fileManager:shouldMoveItemAtURL:toURL:](filemanager%28__shouldmoveitemat_to_%29.md): Asks the delegate if the file manager should move the specified item to the new URL.
- [fileManager:shouldMoveItemAtPath:toPath:](filemanager%28__shouldmoveitematpath_topath_%29.md): Asks the delegate if the file manager should move the specified item to the new path.
- [fileManager:shouldProceedAfterError:movingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified path.
