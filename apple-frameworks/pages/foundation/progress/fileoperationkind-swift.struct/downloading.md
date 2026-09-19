> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progress/fileoperationkind-swift.struct/downloading

# downloading (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The progress is tracking a file download operation.

## Declaration

```swift
static let downloading: Progress.FileOperationKind
```

## See Also

### Recognizing Kinds of File Operations

- [copying](copying.md): The progress is tracking the copying of a file from source to destination.
- [decompressingAfterDownloading](decompressingafterdownloading.md): The progress is tracking file decompression after a download.
- [uploading](uploading.md): The progress is tracking a file upload operation.
- [receiving](receiving.md): The progress is tracking the receipt of a file from another source.

# NSProgressFileOperationKindDownloading (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The progress is tracking a file download operation.

## Declaration

```objectivec
extern NSProgressFileOperationKind const NSProgressFileOperationKindDownloading;
```

## See Also

### Recognizing Kinds of File Operations

- [NSProgressFileOperationKindCopying](copying.md): The progress is tracking the copying of a file from source to destination.
- [NSProgressFileOperationKindDecompressingAfterDownloading](decompressingafterdownloading.md): The progress is tracking file decompression after a download.
- [NSProgressFileOperationKindUploading](uploading.md): The progress is tracking a file upload operation.
- [NSProgressFileOperationKindReceiving](receiving.md): The progress is tracking the receipt of a file from another source.
