> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/moveitem(atpath:topath:)](https://developer.apple.com/documentation/foundation/filemanager/moveitem(atpath:topath:))

# moveItem(atPath:toPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Moves the file or directory at the specified path to a new location synchronously.

## Declaration

```swift
func moveItem(atPath srcPath: String, toPath dstPath: String) throws
```

## Parameters

- `srcPath`: The path to the file or directory you want to move. This parameter must not be `nil`.
- `dstPath`: The new path for the item in `srcPath`. This path must include the name of the file or directory in its new location. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

When moving items, the current process must have permission to read the item at `srcPath` and write the parent directory of `dstPath`. If the item at `srcPath` is a directory, this method moves the directory and all of its contents, including any hidden files. If an item with the same name already exists at `dstPath`, this method stops the move attempt and returns an appropriate error. If the last component of `srcPath` is a symbolic link, only the link is moved to the new path; the item pointed to by the link remains at its current location.

Prior to moving the item, the file manager asks its delegate if it should actually move it. It does this by calling the [fileManager(\_:shouldMoveItemAt:to:)](../filemanagerdelegate/filemanager%28__shouldmoveitemat_to_%29.md) method; if that method is not implemented it calls the [fileManager(\_:shouldMoveItemAtPath:toPath:)](../filemanagerdelegate/filemanager%28__shouldmoveitematpath_topath_%29.md) method instead. If the item being moved is a directory, the file manager notifies the delegate only for the directory itself and not for any of its contents. If the delegate method returns [true](https://developer.apple.com/documentation/swift/true), or if the delegate does not implement the appropriate methods, the file manager moves the file. If there is an error moving one out of several items, the file manager may also call the delegate’s [fileManager(\_:shouldProceedAfterError:movingItemAt:to:)](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md) or [fileManager(\_:shouldProceedAfterError:movingItemAtPath:toPath:)](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md) method to determine how to proceed.

If the source and destination of the move operation are not on the same volume, this method copies the item first and then removes it from its current location. This behavior may trigger additional delegate notifications related to copying and removing individual items.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [removeItem(atPath:)](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.

### Moving and copying items

- [copyItem(at:to:)](copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.
- [copyItem(atPath:toPath:)](copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [moveItem(at:to:)](moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.

# moveItemAtPath:toPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Moves the file or directory at the specified path to a new location synchronously.

## Declaration

```objectivec
- (BOOL) moveItemAtPath:(NSString *) srcPath toPath:(NSString *) dstPath error:(NSError **) error;
```

## Parameters

- `srcPath`: The path to the file or directory you want to move. This parameter must not be `nil`.
- `dstPath`: The new path for the item in `srcPath`. This path must include the name of the file or directory in its new location. This parameter must not be `nil`.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item was moved successfully or the file manager’s delegate stopped the operation deliberately. Returns [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

When moving items, the current process must have permission to read the item at `srcPath` and write the parent directory of `dstPath`. If the item at `srcPath` is a directory, this method moves the directory and all of its contents, including any hidden files. If an item with the same name already exists at `dstPath`, this method stops the move attempt and returns an appropriate error. If the last component of `srcPath` is a symbolic link, only the link is moved to the new path; the item pointed to by the link remains at its current location.

Prior to moving the item, the file manager asks its delegate if it should actually move it. It does this by calling the [fileManager:shouldMoveItemAtURL:toURL:](../filemanagerdelegate/filemanager%28__shouldmoveitemat_to_%29.md) method; if that method is not implemented it calls the [fileManager:shouldMoveItemAtPath:toPath:](../filemanagerdelegate/filemanager%28__shouldmoveitematpath_topath_%29.md) method instead. If the item being moved is a directory, the file manager notifies the delegate only for the directory itself and not for any of its contents. If the delegate method returns [true](https://developer.apple.com/documentation/swift/true), or if the delegate does not implement the appropriate methods, the file manager moves the file. If there is an error moving one out of several items, the file manager may also call the delegate’s [fileManager:shouldProceedAfterError:movingItemAtURL:toURL:](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md) or [fileManager:shouldProceedAfterError:movingItemAtPath:toPath:](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md) method to determine how to proceed.

If the source and destination of the move operation are not on the same volume, this method copies the item first and then removes it from its current location. This behavior may trigger additional delegate notifications related to copying and removing individual items.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [removeItemAtPath:error:](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.

### Moving and copying items

- [copyItemAtURL:toURL:error:](copyitem%28at_to_%29.md): Copies the file at the specified URL to a new location synchronously.
- [copyItemAtPath:toPath:error:](copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [moveItemAtURL:toURL:error:](moveitem%28at_to_%29.md): Moves the file or directory at the specified URL to a new location synchronously.
