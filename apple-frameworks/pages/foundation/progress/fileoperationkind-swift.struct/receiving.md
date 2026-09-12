> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/fileoperationkind-swift.struct/receiving](https://developer.apple.com/documentation/foundation/progress/fileoperationkind-swift.struct/receiving)

# receiving (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The progress is tracking the receipt of a file from another source.

## Declaration

```swift
static let receiving: Progress.FileOperationKind
```

## See Also

### Recognizing Kinds of File Operations

- [copying](copying.md): The progress is tracking the copying of a file from source to destination.
- [decompressingAfterDownloading](decompressingafterdownloading.md): The progress is tracking file decompression after a download.
- [downloading](downloading.md): The progress is tracking a file download operation.
- [uploading](uploading.md): The progress is tracking a file upload operation.

# NSProgressFileOperationKindReceiving (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The progress is tracking the receipt of a file from another source.

## Declaration

```objectivec
extern NSProgressFileOperationKind const NSProgressFileOperationKindReceiving;
```

## See Also

### Recognizing Kinds of File Operations

- [NSProgressFileOperationKindCopying](copying.md): The progress is tracking the copying of a file from source to destination.
- [NSProgressFileOperationKindDecompressingAfterDownloading](decompressingafterdownloading.md): The progress is tracking file decompression after a download.
- [NSProgressFileOperationKindDownloading](downloading.md): The progress is tracking a file download operation.
- [NSProgressFileOperationKindUploading](uploading.md): The progress is tracking a file upload operation.
