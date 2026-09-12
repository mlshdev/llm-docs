> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate/filemanager(_:shouldcopyitemat:to:)](https://developer.apple.com/documentation/foundation/filemanagerdelegate/filemanager(_:shouldcopyitemat:to:))

# fileManager(\_:shouldCopyItemAt:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the file manager should copy the specified item to the new URL.

## Declaration

```swift
optional func fileManager(_ fileManager: FileManager, shouldCopyItemAt srcURL: URL, to dstURL: URL) -> Bool
```

## Parameters

- `fileManager`: The file manager object that is attempting to copy the file or directory.
- `srcURL`: The URL of the file or directory that the file manager wants to copy.
- `dstURL`: The URL specifying the location for the copied file or directory.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be copied or [false](https://developer.apple.com/documentation/swift/false) if the file manager should stop copying items associated with the current operation. If you do not implement this method, the file manager assumes a response of [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is called once for each item that needs to be copied. Thus, for a directory, this method is called once for the directory and once for each item in the directory.

This method performs the same task as the [fileManager(\_:shouldCopyItemAtPath:toPath:)](filemanager%28__shouldcopyitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [copyItem(atPath:toPath:)](../filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [copyItem(at:to:)](../filemanager/copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.

### Copying  an Item

- [fileManager(\_:shouldCopyItemAtPath:toPath:)](filemanager%28__shouldcopyitematpath_topath_%29.md): Asks the delegate if the file manager should copy the specified item to the new path.
- [fileManager(\_:shouldProceedAfterError:copyingItemAt:to:)](filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:copyingItemAtPath:toPath:)](filemanager%28__shouldproceedaftererror_copyingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified path.

# fileManager:shouldCopyItemAtURL:toURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asks the delegate if the file manager should copy the specified item to the new URL.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fileManager shouldCopyItemAtURL:(NSURL *) srcURL toURL:(NSURL *) dstURL;
```

## Parameters

- `fileManager`: The file manager object that is attempting to copy the file or directory.
- `srcURL`: The URL of the file or directory that the file manager wants to copy.
- `dstURL`: The URL specifying the location for the copied file or directory.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item should be copied or [false](https://developer.apple.com/documentation/swift/false) if the file manager should stop copying items associated with the current operation. If you do not implement this method, the file manager assumes a response of [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is called once for each item that needs to be copied. Thus, for a directory, this method is called once for the directory and once for each item in the directory.

This method performs the same task as the [fileManager:shouldCopyItemAtPath:toPath:](filemanager%28__shouldcopyitematpath_topath_%29.md) method and is preferred over that method in macOS 10.6 and later.

## See Also

### Related Documentation

- [copyItemAtPath:toPath:error:](../filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [copyItemAtURL:toURL:error:](../filemanager/copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.

### Copying  an Item

- [fileManager:shouldCopyItemAtPath:toPath:](filemanager%28__shouldcopyitematpath_topath_%29.md): Asks the delegate if the file manager should copy the specified item to the new path.
- [fileManager:shouldProceedAfterError:copyingItemAtURL:toURL:](filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified URL.
- [fileManager:shouldProceedAfterError:copyingItemAtPath:toPath:](filemanager%28__shouldproceedaftererror_copyingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified path.
