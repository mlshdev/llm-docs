> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:movingitematpath:topath:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:movingitematpath:topath:))

# fileManager(\_:shouldProceedAfterError:movingItemAtPath:toPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified path.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldProceedAfterError error: any Error, movingItemAtPath srcPath: String, toPath dstPath: String) -> Bool
```

## Parameters

- `fileManager`: The file manager object that attempted to move the item.
- `error`: The error that occurred while trying to move the item in `srcPath`.
- `srcPath`: The path of the file or directory that the file manager tried to move.
- `dstPath`: The path of the intended destination for the item in `srcPath`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem moving the item to the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager proceeds to remove the item from its current location as if the move operation had completed successfully.

This method performs the same task as the [fileManager(\_:shouldProceedAfterError:movingItemAt:to:)](filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [moveItem(atPath:toPath:)](../filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.
- [moveItem(at:to:)](../filemanager/moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.

### Moving  an Item

- [fileManager(\_:shouldMoveItemAt:to:)](filemanager%28__shouldmoveitemat_to_%29.md): Asks the delegate if the file manager should move the specified item to the new URL.
- [fileManager(\_:shouldMoveItemAtPath:toPath:)](filemanager%28__shouldmoveitematpath_topath_%29.md): Asks the delegate if the file manager should move the specified item to the new path.
- [fileManager(\_:shouldProceedAfterError:movingItemAt:to:)](filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified URL.

# fileManager:shouldProceedAfterError:movingItemAtPath:toPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified path.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldProceedAfterError:(NSError *) error movingItemAtPath:(NSString *) srcPath toPath:(NSString *) dstPath;
```

## Parameters

- `fileManager`: The file manager object that attempted to move the item.
- `error`: The error that occurred while trying to move the item in `srcPath`.
- `srcPath`: The path of the file or directory that the file manager tried to move.
- `dstPath`: The path of the intended destination for the item in `srcPath`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem moving the item to the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager proceeds to remove the item from its current location as if the move operation had completed successfully.

This method performs the same task as the [fileManager:shouldProceedAfterError:movingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [moveItemAtPath:toPath:error:](../filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.
- [moveItemAtURL:toURL:error:](../filemanager/moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.

### Moving  an Item

- [fileManager:shouldMoveItemAtURL:toURL:](filemanager%28__shouldmoveitemat_to_%29.md): Asks the delegate if the file manager should move the specified item to the new URL.
- [fileManager:shouldMoveItemAtPath:toPath:](filemanager%28__shouldmoveitematpath_topath_%29.md): Asks the delegate if the file manager should move the specified item to the new path.
- [fileManager:shouldProceedAfterError:movingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified URL.
