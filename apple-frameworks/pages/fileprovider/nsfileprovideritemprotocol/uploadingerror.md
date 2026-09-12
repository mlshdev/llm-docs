> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/uploadingerror](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/uploadingerror)

# uploadingError (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

An object describing an error that occurred while uploading the item.

## Declaration

```swift
optional var uploadingError: (any Error)? { get }
```

## Mentioned In

- [Handling Errors with User-Driven Actions](../handling-errors-with-user-driven-actions.md)

## See Also

### Monitoring File Transfers

- [isUploading](isuploading.md): A Boolean value that indicates whether the item is currently uploading to your remote server.
- [isUploaded](isuploaded.md): A Boolean value that indicates whether the item has been uploaded to your remote server.
- [isDownloading](isdownloading.md): A Boolean value that indicates whether the item is currently downloading from your remote server.
- [isDownloaded](isdownloaded.md): A Boolean value that indicates whether the item has been downloaded from your remote server.
- [downloadingError](downloadingerror.md): An object describing an error that occurred while downloading the item.

# uploadingError (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

An object describing an error that occurred while uploading the item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSError * uploadingError;
```

## Mentioned In

- [Handling Errors with User-Driven Actions](../handling-errors-with-user-driven-actions.md)

## See Also

### Monitoring File Transfers

- [uploading](isuploading.md): A Boolean value that indicates whether the item is currently uploading to your remote server.
- [uploaded](isuploaded.md): A Boolean value that indicates whether the item has been uploaded to your remote server.
- [downloading](isdownloading.md): A Boolean value that indicates whether the item is currently downloading from your remote server.
- [downloaded](isdownloaded.md): A Boolean value that indicates whether the item has been downloaded from your remote server.
- [downloadingError](downloadingerror.md): An object describing an error that occurred while downloading the item.
