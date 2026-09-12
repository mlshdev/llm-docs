> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/fileoperationname/recycleoperation](https://developer.apple.com/documentation/appkit/nsworkspace/fileoperationname/recycleoperation)

# recycleOperation (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Move file to trash.

> Use -\[NSWorkspace recycleURLs:completionHandler:\] instead.

## Declaration

```swift
static let recycleOperation: NSWorkspace.FileOperationName
```

<a id="discussion"></a>

## Discussion

The file is moved to the trash folder on the volume containing the file using the same semantics as [moveOperation](moveoperation.md). If a file with the same name currently exists in the trash folder, the new file is renamed. If no trash folder exists on the volume containing the file, the operation fails.

## See Also

### Type Properties

- [compressOperation](compressoperation.md): Deprecated. Compress file. This operation always returns an error.
- [copyOperation](copyoperation.md): Deprecated. Copy file to destination.
- [decompressOperation](decompressoperation.md): Deprecated. Decompress file. This operation always returns an error.
- [decryptOperation](decryptoperation.md): Deprecated. Decrypt file. This operation always returns an error.
- [destroyOperation](destroyoperation.md): Deprecated. Destroy file.
- [duplicateOperation](duplicateoperation.md): Deprecated. Duplicate file in source directory.
- [encryptOperation](encryptoperation.md): Deprecated. Encrypt file. This operation always returns an error.
- [linkOperation](linkoperation.md): Deprecated. Create hard link to file in destination.
- [moveOperation](moveoperation.md): Deprecated. Move file to destination.

# NSWorkspaceRecycleOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Move file to trash.

> Use -\[NSWorkspace recycleURLs:completionHandler:\] instead.

## Declaration

```objectivec
extern NSWorkspaceFileOperationName NSWorkspaceRecycleOperation;
```

<a id="discussion"></a>

## Discussion

The file is moved to the trash folder on the volume containing the file using the same semantics as [NSWorkspaceMoveOperation](moveoperation.md). If a file with the same name currently exists in the trash folder, the new file is renamed. If no trash folder exists on the volume containing the file, the operation fails.

## See Also

### Type Properties

- [NSWorkspaceCompressOperation](compressoperation.md): Deprecated. Compress file. This operation always returns an error.
- [NSWorkspaceCopyOperation](copyoperation.md): Deprecated. Copy file to destination.
- [NSWorkspaceDecompressOperation](decompressoperation.md): Deprecated. Decompress file. This operation always returns an error.
- [NSWorkspaceDecryptOperation](decryptoperation.md): Deprecated. Decrypt file. This operation always returns an error.
- [NSWorkspaceDestroyOperation](destroyoperation.md): Deprecated. Destroy file.
- [NSWorkspaceDuplicateOperation](duplicateoperation.md): Deprecated. Duplicate file in source directory.
- [NSWorkspaceEncryptOperation](encryptoperation.md): Deprecated. Encrypt file. This operation always returns an error.
- [NSWorkspaceLinkOperation](linkoperation.md): Deprecated. Create hard link to file in destination.
- [NSWorkspaceMoveOperation](moveoperation.md): Deprecated. Move file to destination.
