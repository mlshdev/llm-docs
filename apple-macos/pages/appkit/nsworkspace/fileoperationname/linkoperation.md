> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/fileoperationname/linkoperation](https://developer.apple.com/documentation/appkit/nsworkspace/fileoperationname/linkoperation)

# linkOperation (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Create hard link to file in destination.

> Use -\[NSFileManager linkItemAtURL:toURL:error:\] instead.

## Declaration

```swift
static let linkOperation: NSWorkspace.FileOperationName
```

<a id="discussion"></a>

## Discussion

Behaves the same as [linkItem(at:to:)](https://developer.apple.com/documentation/foundation/filemanager/linkitem%28at:to:%29).

## See Also

### Type Properties

- [compressOperation](compressoperation.md): Deprecated. Compress file. This operation always returns an error.
- [copyOperation](copyoperation.md): Deprecated. Copy file to destination.
- [decompressOperation](decompressoperation.md): Deprecated. Decompress file. This operation always returns an error.
- [decryptOperation](decryptoperation.md): Deprecated. Decrypt file. This operation always returns an error.
- [destroyOperation](destroyoperation.md): Deprecated. Destroy file.
- [duplicateOperation](duplicateoperation.md): Deprecated. Duplicate file in source directory.
- [encryptOperation](encryptoperation.md): Deprecated. Encrypt file. This operation always returns an error.
- [moveOperation](moveoperation.md): Deprecated. Move file to destination.
- [recycleOperation](recycleoperation.md): Deprecated. Move file to trash.

# NSWorkspaceLinkOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Create hard link to file in destination.

> Use -\[NSFileManager linkItemAtURL:toURL:error:\] instead.

## Declaration

```objectivec
extern NSWorkspaceFileOperationName NSWorkspaceLinkOperation;
```

<a id="discussion"></a>

## Discussion

Behaves the same as [linkItemAtURL:toURL:error:](https://developer.apple.com/documentation/foundation/filemanager/linkitem%28at:to:%29).

## See Also

### Type Properties

- [NSWorkspaceCompressOperation](compressoperation.md): Deprecated. Compress file. This operation always returns an error.
- [NSWorkspaceCopyOperation](copyoperation.md): Deprecated. Copy file to destination.
- [NSWorkspaceDecompressOperation](decompressoperation.md): Deprecated. Decompress file. This operation always returns an error.
- [NSWorkspaceDecryptOperation](decryptoperation.md): Deprecated. Decrypt file. This operation always returns an error.
- [NSWorkspaceDestroyOperation](destroyoperation.md): Deprecated. Destroy file.
- [NSWorkspaceDuplicateOperation](duplicateoperation.md): Deprecated. Duplicate file in source directory.
- [NSWorkspaceEncryptOperation](encryptoperation.md): Deprecated. Encrypt file. This operation always returns an error.
- [NSWorkspaceMoveOperation](moveoperation.md): Deprecated. Move file to destination.
- [NSWorkspaceRecycleOperation](recycleoperation.md): Deprecated. Move file to trash.
