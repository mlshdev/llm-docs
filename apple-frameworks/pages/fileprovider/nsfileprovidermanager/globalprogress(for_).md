> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/globalprogress(for:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/globalprogress(for:))

# globalProgress(for:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

## Declaration

```swift
func globalProgress(for kind: Progress.FileOperationKind) -> Progress
```

## Parameters

- `kind`: The kind of operation. This method only accepts two values: [uploading](../../foundation/progress/fileoperationkind-swift.struct/uploading.md) and [downloading](../../foundation/progress/fileoperationkind-swift.struct/downloading.md).

<a id="Discussion"></a>

## Discussion

The returned progress instance tracks ongoing operations. This method supports two kinds of operations:

- **[uploading](../../foundation/progress/fileoperationkind-swift.struct/uploading.md)**: Uploading items from the local storage to the remote storage.
- **[downloading](../../foundation/progress/fileoperationkind-swift.struct/downloading.md)**: Downloading items from the remote storage to the local storage.

The progress instance has its [fileOperationKind](../../foundation/progress/fileoperationkind-swift.property.md) property set. It also provides the number of items to upload or download, the number of bytes already transferred, and the total number of bytes to transfer. The grand total is reset to `0` when there are no operations left.

If new matching operations begin while the progress instance is running, it adds the new operations to the existing data. By default, when there are no matching operations, the progress has its values set to `1` and its state set to finished.

The system updates the progress instance on the main queue. You must retain the progress item, and observe its changes through key-value observing. For more information, see `Using Key-Value Observing in Swift`.

## See Also

### Performing actions

- [placeholderURL(for:)](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholder(at:withMetadata:)](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [register(\_:forItemWithIdentifier:completionHandler:)](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumerator(for:completionHandler:)](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChanges(below:completionHandler:)](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.

# globalProgressForKind: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

## Declaration

```objectivec
- (NSProgress *) globalProgressForKind:(NSProgressFileOperationKind) kind;
```

## Parameters

- `kind`: The kind of operation. This method only accepts two values: [NSProgressFileOperationKindUploading](../../foundation/progress/fileoperationkind-swift.struct/uploading.md) and [NSProgressFileOperationKindDownloading](../../foundation/progress/fileoperationkind-swift.struct/downloading.md).

<a id="Discussion"></a>

## Discussion

The returned progress instance tracks ongoing operations. This method supports two kinds of operations:

- **[NSProgressFileOperationKindUploading](../../foundation/progress/fileoperationkind-swift.struct/uploading.md)**: Uploading items from the local storage to the remote storage.
- **[NSProgressFileOperationKindDownloading](../../foundation/progress/fileoperationkind-swift.struct/downloading.md)**: Downloading items from the remote storage to the local storage.

The progress instance has its [fileOperationKind](../../foundation/progress/fileoperationkind-swift.property.md) property set. It also provides the number of items to upload or download, the number of bytes already transferred, and the total number of bytes to transfer. The grand total is reset to `0` when there are no operations left.

If new matching operations begin while the progress instance is running, it adds the new operations to the existing data. By default, when there are no matching operations, the progress has its values set to `1` and its state set to finished.

The system updates the progress instance on the main queue. You must retain the progress item, and observe its changes through key-value observing. For more information, see `Using Key-Value Observing in Swift`.

## See Also

### Performing actions

- [placeholderURLForURL:](placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholderAtURL:withMetadata:error:](writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [registerURLSessionTask:forItemWithIdentifier:completionHandler:](register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumeratorForContainerItemIdentifier:completionHandler:](signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChangesOnItemsBelowItemWithIdentifier:completionHandler:](waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
