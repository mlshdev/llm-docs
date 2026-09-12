> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/fileoperationname/duplicateoperation](https://developer.apple.com/documentation/appkit/nsworkspace/fileoperationname/duplicateoperation)

# duplicateOperation (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Duplicate file in source directory.

> Use -\[NSWorkspace duplicateURLs:completionHandler:\] instead.

## Declaration

```swift
static let duplicateOperation: NSWorkspace.FileOperationName
```

## See Also

### Type Properties

- [compressOperation](compressoperation.md): Deprecated. Compress file. This operation always returns an error.
- [copyOperation](copyoperation.md): Deprecated. Copy file to destination.
- [decompressOperation](decompressoperation.md): Deprecated. Decompress file. This operation always returns an error.
- [decryptOperation](decryptoperation.md): Deprecated. Decrypt file. This operation always returns an error.
- [destroyOperation](destroyoperation.md): Deprecated. Destroy file.
- [encryptOperation](encryptoperation.md): Deprecated. Encrypt file. This operation always returns an error.
- [linkOperation](linkoperation.md): Deprecated. Create hard link to file in destination.
- [moveOperation](moveoperation.md): Deprecated. Move file to destination.
- [recycleOperation](recycleoperation.md): Deprecated. Move file to trash.

# NSWorkspaceDuplicateOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Duplicate file in source directory.

> Use -\[NSWorkspace duplicateURLs:completionHandler:\] instead.

## Declaration

```objectivec
extern NSWorkspaceFileOperationName NSWorkspaceDuplicateOperation;
```

## See Also

### Type Properties

- [NSWorkspaceCompressOperation](compressoperation.md): Deprecated. Compress file. This operation always returns an error.
- [NSWorkspaceCopyOperation](copyoperation.md): Deprecated. Copy file to destination.
- [NSWorkspaceDecompressOperation](decompressoperation.md): Deprecated. Decompress file. This operation always returns an error.
- [NSWorkspaceDecryptOperation](decryptoperation.md): Deprecated. Decrypt file. This operation always returns an error.
- [NSWorkspaceDestroyOperation](destroyoperation.md): Deprecated. Destroy file.
- [NSWorkspaceEncryptOperation](encryptoperation.md): Deprecated. Encrypt file. This operation always returns an error.
- [NSWorkspaceLinkOperation](linkoperation.md): Deprecated. Create hard link to file in destination.
- [NSWorkspaceMoveOperation](moveoperation.md): Deprecated. Move file to destination.
- [NSWorkspaceRecycleOperation](recycleoperation.md): Deprecated. Move file to trash.
