> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/copyitem(at:to:)](https://developer.apple.com/documentation/foundation/filemanager/copyitem(at:to:))

# copyItem(at:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the file at the specified URL to a new location synchronously.

## Declaration

```swift
func copyItem(at srcURL: URL, to dstURL: URL) throws
```

## Parameters

- `srcURL`: The file URL that identifies the file you want to copy. The URL in this parameter must not be a file reference URL. This parameter must not be `nil`.
- `dstURL`: The URL at which to place the copy of `srcURL`. The URL in this parameter must not be a file reference URL and must include the name of the file in its new location. This parameter must not be `nil`.

## Mentioned In

- [About Apple File System](../about-apple-file-system.md)

<a id="Discussion"></a>

## Discussion

When copying items, the current process must have permission to read the file or directory at `srcURL` and write the parent directory of `dstURL`. If the item at `srcURL` is a directory, this method copies the directory and all of its contents, including any hidden files. If a file with the same name already exists at `dstURL`, this method stops the copy attempt and returns an appropriate error. If the last component of `srcURL` is a symbolic link, only the link is copied to the new path.

Prior to copying each item, the file manager asks its delegate if it should actually do so. It does this by calling the [fileManager(\_:shouldCopyItemAt:to:)](../filemanagerdelegate/filemanager%28__shouldcopyitemat_to_%29.md) method; if that method is not implemented (or the process is running in OS X 10.5 or earlier) it calls the [fileManager(\_:shouldCopyItemAtPath:toPath:)](../filemanagerdelegate/filemanager%28__shouldcopyitematpath_topath_%29.md) method instead. If the delegate method returns [true](https://developer.apple.com/documentation/swift/true), or if the delegate does not implement the appropriate methods, the file manager proceeds to copy the file or directory. If there is an error copying an item, the file manager may also call the delegate’s [fileManager(\_:shouldProceedAfterError:copyingItemAt:to:)](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md) or [fileManager(\_:shouldProceedAfterError:copyingItemAtPath:toPath:)](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_copyingitematpath_topath_%29.md) method to determine how to proceed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Moving and copying items

- [copyItem(atPath:toPath:)](copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [moveItem(at:to:)](moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.
- [moveItem(atPath:toPath:)](moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.

# copyItemAtURL:toURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the file at the specified URL to a new location synchronously.

## Declaration

```objectivec
- (BOOL) copyItemAtURL:(NSURL *) srcURL toURL:(NSURL *) dstURL error:(NSError **) error;
```

## Parameters

- `srcURL`: The file URL that identifies the file you want to copy. The URL in this parameter must not be a file reference URL. This parameter must not be `nil`.
- `dstURL`: The URL at which to place the copy of `srcURL`. The URL in this parameter must not be a file reference URL and must include the name of the file in its new location. This parameter must not be `nil`.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item was copied successfully or the file manager’s delegate stopped the operation deliberately. Returns [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

## Mentioned In

- [About Apple File System](../about-apple-file-system.md)

<a id="Discussion"></a>

## Discussion

When copying items, the current process must have permission to read the file or directory at `srcURL` and write the parent directory of `dstURL`. If the item at `srcURL` is a directory, this method copies the directory and all of its contents, including any hidden files. If a file with the same name already exists at `dstURL`, this method stops the copy attempt and returns an appropriate error. If the last component of `srcURL` is a symbolic link, only the link is copied to the new path.

Prior to copying each item, the file manager asks its delegate if it should actually do so. It does this by calling the [fileManager:shouldCopyItemAtURL:toURL:](../filemanagerdelegate/filemanager%28__shouldcopyitemat_to_%29.md) method; if that method is not implemented (or the process is running in OS X 10.5 or earlier) it calls the [fileManager:shouldCopyItemAtPath:toPath:](../filemanagerdelegate/filemanager%28__shouldcopyitematpath_topath_%29.md) method instead. If the delegate method returns [true](https://developer.apple.com/documentation/swift/true), or if the delegate does not implement the appropriate methods, the file manager proceeds to copy the file or directory. If there is an error copying an item, the file manager may also call the delegate’s [fileManager:shouldProceedAfterError:copyingItemAtURL:toURL:](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md) or [fileManager:shouldProceedAfterError:copyingItemAtPath:toPath:](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_copyingitematpath_topath_%29.md) method to determine how to proceed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Moving and copying items

- [copyItemAtPath:toPath:error:](copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [moveItemAtURL:toURL:error:](moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.
- [moveItemAtPath:toPath:error:](moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.
