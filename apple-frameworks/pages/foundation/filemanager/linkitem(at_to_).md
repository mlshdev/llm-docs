> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/linkitem(at:to:)](https://developer.apple.com/documentation/foundation/filemanager/linkitem(at:to:))

# linkItem(at:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a hard link between the items at the specified URLs.

## Declaration

```swift
func linkItem(at srcURL: URL, to dstURL: URL) throws
```

## Parameters

- `srcURL`: The file URL that identifies the source of the link. The URL in this parameter must not be a file reference URL; it must specify the actual path to the item. The value in this parameter must not be `nil`.
- `dstURL`: The file URL that specifies where you want to create the hard link. The URL in this parameter must not be a file reference URL; it must specify the actual path to the item. The value in this parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to create hard links between files in the current file system. If `srcURL` is a directory, this method creates a new directory at `dstURL` and then creates hard links for the items in that directory. If `srcURL` is (or contains) a symbolic link, the symbolic link is copied and not converted to a hard link at `dstURL`.

Prior to linking each item, the file manager asks its delegate if it should actually create the link. It does this by calling the [fileManager(\_:shouldLinkItemAt:to:)](../filemanagerdelegate/filemanager%28__shouldlinkitemat_to_%29.md) method; if that method is not implemented it calls the [fileManager(\_:shouldLinkItemAtPath:toPath:)](../filemanagerdelegate/filemanager%28__shouldlinkitematpath_topath_%29.md) method instead. If the delegate method returns [true](https://developer.apple.com/documentation/swift/true), or if the delegate does not implement the appropriate methods, the file manager creates the hard link. If there is an error linking one out of several items, the file manager may also call the delegate’s [fileManager(\_:shouldProceedAfterError:linkingItemAt:to:)](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md) or [fileManager(\_:shouldProceedAfterError:linkingItemAtPath:toPath:)](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md) method to determine how to proceed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating symbolic and hard links

- [createSymbolicLink(at:withDestinationURL:)](createsymboliclink%28at_withdestinationurl_%29.md): Creates a symbolic link at the specified URL that points to an item at the given URL.
- [createSymbolicLink(atPath:withDestinationPath:)](createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [linkItem(atPath:toPath:)](linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
- [destinationOfSymbolicLink(atPath:)](destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.

# linkItemAtURL:toURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a hard link between the items at the specified URLs.

## Declaration

```objectivec
- (BOOL) linkItemAtURL:(NSURL *) srcURL toURL:(NSURL *) dstURL error:(NSError **) error;
```

## Parameters

- `srcURL`: The file URL that identifies the source of the link. The URL in this parameter must not be a file reference URL; it must specify the actual path to the item. The value in this parameter must not be `nil`.
- `dstURL`: The file URL that specifies where you want to create the hard link. The URL in this parameter must not be a file reference URL; it must specify the actual path to the item. The value in this parameter must not be `nil`.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the hard link was created or [false](https://developer.apple.com/documentation/swift/false) if an error occurred. This method also returns [false](https://developer.apple.com/documentation/swift/false) if a file, directory, or link already exists at `dstURL`.

<a id="Discussion"></a>

## Discussion

Use this method to create hard links between files in the current file system. If `srcURL` is a directory, this method creates a new directory at `dstURL` and then creates hard links for the items in that directory. If `srcURL` is (or contains) a symbolic link, the symbolic link is copied and not converted to a hard link at `dstURL`.

Prior to linking each item, the file manager asks its delegate if it should actually create the link. It does this by calling the [fileManager:shouldLinkItemAtURL:toURL:](../filemanagerdelegate/filemanager%28__shouldlinkitemat_to_%29.md) method; if that method is not implemented it calls the [fileManager:shouldLinkItemAtPath:toPath:](../filemanagerdelegate/filemanager%28__shouldlinkitematpath_topath_%29.md) method instead. If the delegate method returns [true](https://developer.apple.com/documentation/swift/true), or if the delegate does not implement the appropriate methods, the file manager creates the hard link. If there is an error linking one out of several items, the file manager may also call the delegate’s [fileManager:shouldProceedAfterError:linkingItemAtURL:toURL:](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md) or [fileManager:shouldProceedAfterError:linkingItemAtPath:toPath:](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md) method to determine how to proceed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating symbolic and hard links

- [createSymbolicLinkAtURL:withDestinationURL:error:](createsymboliclink%28at_withdestinationurl_%29.md): Creates a symbolic link at the specified URL that points to an item at the given URL.
- [createSymbolicLinkAtPath:withDestinationPath:error:](createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [linkItemAtPath:toPath:error:](linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
- [destinationOfSymbolicLinkAtPath:error:](destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.
