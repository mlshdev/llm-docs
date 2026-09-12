> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/fileoperationkind-swift.struct](https://developer.apple.com/documentation/foundation/progress/fileoperationkind-swift.struct)

# Progress.FileOperationKind (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The kind of file operation.

## Declaration

```swift
struct FileOperationKind
```

<a id="Discussion"></a>

## Discussion

When tracking file operations with the progress [kind](kind.md) set to [file](../progresskind/file.md), provide a value for the [fileOperationKindKey](../progressuserinfokey/fileoperationkindkey.md) in the user info dictionary.

To specify the kind of file operation, provide one of the following values:

- [copying](fileoperationkind-swift.struct/copying.md)
- [decompressingAfterDownloading](fileoperationkind-swift.struct/decompressingafterdownloading.md)
- [downloading](fileoperationkind-swift.struct/downloading.md)
- [uploading](fileoperationkind-swift.struct/uploading.md)
- [receiving](fileoperationkind-swift.struct/receiving.md)

## Topics

### Creating Kinds of File Operation

- [init(\_:)](fileoperationkind-swift.struct/init%28__%29.md): Creates a new kind of file operation using the specified string.
- [init(rawValue:)](fileoperationkind-swift.struct/init%28rawvalue_%29.md): Creates a new kind of file operation using the raw value of a string you specify.

### Recognizing Kinds of File Operations

- [copying](fileoperationkind-swift.struct/copying.md): The progress is tracking the copying of a file from source to destination.
- [decompressingAfterDownloading](fileoperationkind-swift.struct/decompressingafterdownloading.md): The progress is tracking file decompression after a download.
- [downloading](fileoperationkind-swift.struct/downloading.md): The progress is tracking a file download operation.
- [uploading](fileoperationkind-swift.struct/uploading.md): The progress is tracking a file upload operation.
- [receiving](fileoperationkind-swift.struct/receiving.md): The progress is tracking the receipt of a file from another source.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting File Operation Progress Information

- [fileOperationKind](fileoperationkind-swift.property.md): The kind of file operation for the progress object.
- [fileURL](fileurl.md): A URL that represents the file for the current progress object.
- [fileTotalCount](filetotalcount.md): The total number of files for a file progress object.
- [fileCompletedCount](filecompletedcount.md): The number of completed files for a file progress object.

# NSProgressFileOperationKind (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The kind of file operation.

## Declaration

```objectivec
typedef NSString * NSProgressFileOperationKind;
```

<a id="Discussion"></a>

## Discussion

When tracking file operations with the progress [kind](kind.md) set to [NSProgressKindFile](../progresskind/file.md), provide a value for the [NSProgressFileOperationKindKey](../progressuserinfokey/fileoperationkindkey.md) in the user info dictionary.

To specify the kind of file operation, provide one of the following values:

- [NSProgressFileOperationKindCopying](fileoperationkind-swift.struct/copying.md)
- [NSProgressFileOperationKindDecompressingAfterDownloading](fileoperationkind-swift.struct/decompressingafterdownloading.md)
- [NSProgressFileOperationKindDownloading](fileoperationkind-swift.struct/downloading.md)
- [NSProgressFileOperationKindUploading](fileoperationkind-swift.struct/uploading.md)
- [NSProgressFileOperationKindReceiving](fileoperationkind-swift.struct/receiving.md)

## Topics

### Recognizing Kinds of File Operations

- [NSProgressFileOperationKindCopying](fileoperationkind-swift.struct/copying.md): The progress is tracking the copying of a file from source to destination.
- [NSProgressFileOperationKindDecompressingAfterDownloading](fileoperationkind-swift.struct/decompressingafterdownloading.md): The progress is tracking file decompression after a download.
- [NSProgressFileOperationKindDownloading](fileoperationkind-swift.struct/downloading.md): The progress is tracking a file download operation.
- [NSProgressFileOperationKindUploading](fileoperationkind-swift.struct/uploading.md): The progress is tracking a file upload operation.
- [NSProgressFileOperationKindReceiving](fileoperationkind-swift.struct/receiving.md): The progress is tracking the receipt of a file from another source.

## See Also

### Inspecting File Operation Progress Information

- [fileOperationKind](fileoperationkind-swift.property.md): The kind of file operation for the progress object.
- [fileURL](fileurl.md): A URL that represents the file for the current progress object.
- [fileTotalCount](../nsprogress/filetotalcount.md): The total number of files for a file progress object.
- [fileCompletedCount](../nsprogress/filecompletedcount.md): The number of completed files for a file progress object.
