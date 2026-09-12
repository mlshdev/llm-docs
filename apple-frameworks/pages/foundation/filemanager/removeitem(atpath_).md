> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/removeitem(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/removeitem(atpath:))

# removeItem(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the file or directory at the specified path.

## Declaration

```swift
func removeItem(atPath path: String) throws
```

## Parameters

- `path`: A path string indicating the file or directory to remove. If the path specifies a directory, the contents of that directory are recursively removed. You may specify `nil` for this parameter in Objective-C.

<a id="Discussion"></a>

## Discussion

Prior to removing each item, the file manager asks its delegate if it should actually do so. It does this by calling the [fileManager(\_:shouldRemoveItemAt:)](../filemanagerdelegate/filemanager%28__shouldremoveitemat_%29.md) method; if that method is not implemented (or the process is running in OS X 10.5 or earlier) it calls the [fileManager(\_:shouldRemoveItemAtPath:)](../filemanagerdelegate/filemanager%28__shouldremoveitematpath_%29.md) method instead. If the delegate method returns [true](https://developer.apple.com/documentation/swift/true), or if the delegate does not implement the appropriate methods, the file manager proceeds to remove the file or directory. If there is an error removing an item, the file manager may also call the delegate’s [fileManager(\_:shouldProceedAfterError:removingItemAt:)](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_removingitemat_%29.md) or [fileManager(\_:shouldProceedAfterError:removingItemAtPath:)](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_removingitematpath_%29.md) method to determine how to proceed.

Removing an item also removes all old versions of that item, invalidating any URLs returned by the [url(forPublishingUbiquitousItemAt:expiration:)](url%28forpublishingubiquitousitemat_expiration_%29.md) method to old versions.

## See Also

### Creating and deleting items

- [createDirectory(at:withIntermediateDirectories:attributes:)](createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createDirectory(atPath:withIntermediateDirectories:attributes:)](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [createFile(atPath:contents:attributes:)](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [trashItem(at:resultingItemURL:)](trashitem%28at_resultingitemurl_%29.md): Moves an item to the trash.

# removeItemAtPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the file or directory at the specified path.

## Declaration

```objectivec
- (BOOL) removeItemAtPath:(NSString *) path error:(NSError **) error;
```

## Parameters

- `path`: A path string indicating the file or directory to remove. If the path specifies a directory, the contents of that directory are recursively removed. You may specify `nil` for this parameter in Objective-C.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item was removed successfully or if `path` was `nil`. Returns [false](https://developer.apple.com/documentation/swift/false) if an error occurred. If the delegate stops the operation for a file, this method returns [true](https://developer.apple.com/documentation/swift/true). However, if the delegate stops the operation for a directory, this method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Prior to removing each item, the file manager asks its delegate if it should actually do so. It does this by calling the [fileManager:shouldRemoveItemAtURL:](../filemanagerdelegate/filemanager%28__shouldremoveitemat_%29.md) method; if that method is not implemented (or the process is running in OS X 10.5 or earlier) it calls the [fileManager:shouldRemoveItemAtPath:](../filemanagerdelegate/filemanager%28__shouldremoveitematpath_%29.md) method instead. If the delegate method returns [true](https://developer.apple.com/documentation/swift/true), or if the delegate does not implement the appropriate methods, the file manager proceeds to remove the file or directory. If there is an error removing an item, the file manager may also call the delegate’s [fileManager:shouldProceedAfterError:removingItemAtURL:](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_removingitemat_%29.md) or [fileManager:shouldProceedAfterError:removingItemAtPath:](../filemanagerdelegate/filemanager%28__shouldproceedaftererror_removingitematpath_%29.md) method to determine how to proceed.

Removing an item also removes all old versions of that item, invalidating any URLs returned by the [URLForPublishingUbiquitousItemAtURL:expirationDate:error:](url%28forpublishingubiquitousitemat_expiration_%29.md) method to old versions.

## See Also

### Creating and deleting items

- [createDirectoryAtURL:withIntermediateDirectories:attributes:error:](createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createDirectoryAtPath:withIntermediateDirectories:attributes:error:](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [createFileAtPath:contents:attributes:](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [removeItemAtURL:error:](removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [trashItemAtURL:resultingItemURL:error:](trashitem%28at_resultingitemurl_%29.md): Moves an item to the trash.
