> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/trashitem(at:resultingitemurl:)](https://developer.apple.com/documentation/foundation/filemanager/trashitem(at:resultingitemurl:))

# trashItem(at:resultingItemURL:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Moves an item to the trash.

## Declaration

```swift
func trashItem(at url: URL, resultingItemURL outResultingURL: AutoreleasingUnsafeMutablePointer<NSURL?>?) throws
```

## Parameters

- `url`: The item to move to the trash.
- `outResultingURL`: On input, a pointer to a URL object. On output, this pointer is set to the item’s location in the trash. The actual name of the item may be changed when moving it to the trash, so use this URL to access it. You may specify `nil` for this parameter if you do not want the information.

## See Also

### Creating and deleting items

- [createDirectory(at:withIntermediateDirectories:attributes:)](createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createDirectory(atPath:withIntermediateDirectories:attributes:)](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [createFile(atPath:contents:attributes:)](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [removeItem(atPath:)](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.

# trashItemAtURL:resultingItemURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Moves an item to the trash.

## Declaration

```objectivec
- (BOOL) trashItemAtURL:(NSURL *) url resultingItemURL:(NSURL **) outResultingURL error:(NSError **) error;
```

## Parameters

- `url`: The item to move to the trash.
- `outResultingURL`: On input, a pointer to a URL object. On output, this pointer is set to the item’s location in the trash. The actual name of the item may be changed when moving it to the trash, so use this URL to access it. You may specify `nil` for this parameter if you do not want the information.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item at `url` was successfully moved to the trash, or [false](https://developer.apple.com/documentation/swift/false) if the item was not moved to the trash.

## See Also

### Creating and deleting items

- [createDirectoryAtURL:withIntermediateDirectories:attributes:error:](createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createDirectoryAtPath:withIntermediateDirectories:attributes:error:](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [createFileAtPath:contents:attributes:](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [removeItemAtURL:error:](removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [removeItemAtPath:error:](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
