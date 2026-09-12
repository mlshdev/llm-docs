> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:copyingitematpath:topath:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldproceedaftererror:copyingitematpath:topath:))

# fileManager(\_:shouldProceedAfterError:copyingItemAtPath:toPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified path.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldProceedAfterError error: any Error, copyingItemAtPath srcPath: String, toPath dstPath: String) -> Bool
```

## Parameters

- `fileManager`: The `NSFileManager` object that sent this message.
- `error`: The error that occurred during the attempt to copy.
- `srcPath`: The path or a file or directory that `fileManager` is attempting to copy.
- `dstPath`: The path or a file or directory to which `fileManager` is attempting to copy.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem copying the item to the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager continues copying any other items and ignores the error.

This method performs the same task as the [fileManager(\_:shouldProceedAfterError:copyingItemAt:to:)](filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [copyItem(atPath:toPath:)](../filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [copyItem(at:to:)](../filemanager/copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.

### Copying  an Item

- [fileManager(\_:shouldCopyItemAt:to:)](filemanager%28__shouldcopyitemat_to_%29.md): Asks the delegate if the file manager should copy the specified item to the new URL.
- [fileManager(\_:shouldCopyItemAtPath:toPath:)](filemanager%28__shouldcopyitematpath_topath_%29.md): Asks the delegate if the file manager should copy the specified item to the new path.
- [fileManager(\_:shouldProceedAfterError:copyingItemAt:to:)](filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified URL.

# fileManager:shouldProceedAfterError:copyingItemAtPath:toPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified path.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldProceedAfterError:(NSError *) error copyingItemAtPath:(NSString *) srcPath toPath:(NSString *) dstPath;
```

## Parameters

- `fileManager`: The `NSFileManager` object that sent this message.
- `error`: The error that occurred during the attempt to copy.
- `srcPath`: The path or a file or directory that `fileManager` is attempting to copy.
- `dstPath`: The path or a file or directory to which `fileManager` is attempting to copy.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation should proceed or [false](https://developer.apple.com/documentation/swift/false) if it should be aborted. If you do not implement this method, the file manager assumes a response of [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The file manager calls this method when there is a problem copying the item to the specified location. If you return [true](https://developer.apple.com/documentation/swift/true), the file manager continues copying any other items and ignores the error.

This method performs the same task as the [fileManager:shouldProceedAfterError:copyingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [copyItemAtPath:toPath:error:](../filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [copyItemAtURL:toURL:error:](../filemanager/copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.

### Copying  an Item

- [fileManager:shouldCopyItemAtURL:toURL:](filemanager%28__shouldcopyitemat_to_%29.md): Asks the delegate if the file manager should copy the specified item to the new URL.
- [fileManager:shouldCopyItemAtPath:toPath:](filemanager%28__shouldcopyitematpath_topath_%29.md): Asks the delegate if the file manager should copy the specified item to the new path.
- [fileManager:shouldProceedAfterError:copyingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified URL.
