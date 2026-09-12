> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/isdownloading](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/isdownloading)

# isDownloading (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the item is currently downloading from your remote server.

## Declaration

```swift
optional var isDownloading: Bool { get }
```

## See Also

### Monitoring File Transfers

- [isUploading](isuploading.md): A Boolean value that indicates whether the item is currently uploading to your remote server.
- [isUploaded](isuploaded.md): A Boolean value that indicates whether the item has been uploaded to your remote server.
- [uploadingError](uploadingerror.md): An object describing an error that occurred while uploading the item.
- [isDownloaded](isdownloaded.md): A Boolean value that indicates whether the item has been downloaded from your remote server.
- [downloadingError](downloadingerror.md): An object describing an error that occurred while downloading the item.

# downloading (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the item is currently downloading from your remote server.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDownloading) BOOL downloading;
```

## See Also

### Monitoring File Transfers

- [uploading](isuploading.md): A Boolean value that indicates whether the item is currently uploading to your remote server.
- [uploaded](isuploaded.md): A Boolean value that indicates whether the item has been uploaded to your remote server.
- [uploadingError](uploadingerror.md): An object describing an error that occurred while uploading the item.
- [downloaded](isdownloaded.md): A Boolean value that indicates whether the item has been downloaded from your remote server.
- [downloadingError](downloadingerror.md): An object describing an error that occurred while downloading the item.
