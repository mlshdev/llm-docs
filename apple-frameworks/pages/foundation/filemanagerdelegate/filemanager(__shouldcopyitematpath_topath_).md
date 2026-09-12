> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldcopyitematpath:topath:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldcopyitematpath:topath:))

# fileManager(\_:shouldCopyItemAtPath:toPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the file manager should copy the specified item to the new path.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldCopyItemAtPath srcPath: String, toPath dstPath: String) -> Bool
```

## Parameters

- `fileManager`: The file manager object that is attempting to copy the file or directory.
- `srcPath`: The path to the file or directory that the file manager wants to copy.
- `dstPath`: The new path for the copied file or directory.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be copied or [false](https://developer.apple.com/documentation/swift/false) if the file manager should stop copying items associated with the current operation. If you do not implement this method, the file manager assumes a response of [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is called once for each item that needs to be copied. Thus, for a directory, this method is called once for the directory and once for each item in the directory.

This method performs the same task as the [fileManager(\_:shouldCopyItemAt:to:)](filemanager%28__shouldcopyitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [copyItem(atPath:toPath:)](../filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [copyItem(at:to:)](../filemanager/copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.

### Copying  an Item

- [fileManager(\_:shouldCopyItemAt:to:)](filemanager%28__shouldcopyitemat_to_%29.md): Asks the delegate if the file manager should copy the specified item to the new URL.
- [fileManager(\_:shouldProceedAfterError:copyingItemAt:to:)](filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:copyingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_copyingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified path.

# fileManager:shouldCopyItemAtPath:toPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the file manager should copy the specified item to the new path.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldCopyItemAtPath:(NSString *) srcPath toPath:(NSString *) dstPath;
```

## Parameters

- `fileManager`: The file manager object that is attempting to copy the file or directory.
- `srcPath`: The path to the file or directory that the file manager wants to copy.
- `dstPath`: The new path for the copied file or directory.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be copied or [false](https://developer.apple.com/documentation/swift/false) if the file manager should stop copying items associated with the current operation. If you do not implement this method, the file manager assumes a response of [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is called once for each item that needs to be copied. Thus, for a directory, this method is called once for the directory and once for each item in the directory.

This method performs the same task as the [fileManager:shouldCopyItemAtURL:toURL:](filemanager%28__shouldcopyitemat_to_%29.md) method, which is preferred over this method in macOS 10.6 and later.

## See Also

### Related Documentation

- [copyItemAtPath:toPath:error:](../filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [copyItemAtURL:toURL:error:](../filemanager/copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.

### Copying  an Item

- [fileManager:shouldCopyItemAtURL:toURL:](filemanager%28__shouldcopyitemat_to_%29.md): Asks the delegate if the file manager should copy the specified item to the new URL.
- [fileManager:shouldProceedAfterError:copyingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified URL.
- [fileManager:shouldProceedAfterError:copyingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_copyingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified path.
