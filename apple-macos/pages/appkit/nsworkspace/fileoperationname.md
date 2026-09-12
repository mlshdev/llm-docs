> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/fileoperationname](https://developer.apple.com/documentation/appkit/nsworkspace/fileoperationname)

# NSWorkspace.FileOperationName (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Constants that define types of file operations.

> Use [FileManager](https://developer.apple.com/documentation/foundation/filemanager) methods instead.

## Declaration

```swift
struct FileOperationName
```

<a id="overview"></a>

## Overview

These constants specify different types of file operations used by [performFileOperation(\_:source:destination:files:tag:)](performfileoperation%28__source_destination_files_tag_%29.md).

## Topics

### Type Properties

- [compressOperation](fileoperationname/compressoperation.md): Deprecated. Compress file. This operation always returns an error.
- [copyOperation](fileoperationname/copyoperation.md): Deprecated. Copy file to destination.
- [decompressOperation](fileoperationname/decompressoperation.md): Deprecated. Decompress file. This operation always returns an error.
- [decryptOperation](fileoperationname/decryptoperation.md): Deprecated. Decrypt file. This operation always returns an error.
- [destroyOperation](fileoperationname/destroyoperation.md): Deprecated. Destroy file.
- [duplicateOperation](fileoperationname/duplicateoperation.md): Deprecated. Duplicate file in source directory.
- [encryptOperation](fileoperationname/encryptoperation.md): Deprecated. Encrypt file. This operation always returns an error.
- [linkOperation](fileoperationname/linkoperation.md): Deprecated. Create hard link to file in destination.
- [moveOperation](fileoperationname/moveoperation.md): Deprecated. Move file to destination.
- [recycleOperation](fileoperationname/recycleoperation.md): Deprecated. Move file to trash.

### Initializers

- [init(rawValue:)](fileoperationname/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Types

- [NSWorkspace.LaunchOptions](launchoptions.md): Constants specifying how you want to launch an app
- [NSWorkspace.LaunchConfigurationKey](launchconfigurationkey.md): Deprecated. The following keys can be used in the configuration dictionary of the [launchApplication(at:options:configuration:)](launchapplication%28at_options_configuration_%29.md) method. Each key is optional, and if omitted, default behavior is applied.

# NSWorkspaceFileOperationName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Constants that define types of file operations.

> Use [NSFileManager](https://developer.apple.com/documentation/foundation/filemanager) methods instead.

## Declaration

```objectivec
typedef NSString * NSWorkspaceFileOperationName;
```

<a id="overview"></a>

## Overview

These constants specify different types of file operations used by [performFileOperation:source:destination:files:tag:](performfileoperation%28__source_destination_files_tag_%29.md).

## Topics

### Type Properties

- [NSWorkspaceCompressOperation](fileoperationname/compressoperation.md): Deprecated. Compress file. This operation always returns an error.
- [NSWorkspaceCopyOperation](fileoperationname/copyoperation.md): Deprecated. Copy file to destination.
- [NSWorkspaceDecompressOperation](fileoperationname/decompressoperation.md): Deprecated. Decompress file. This operation always returns an error.
- [NSWorkspaceDecryptOperation](fileoperationname/decryptoperation.md): Deprecated. Decrypt file. This operation always returns an error.
- [NSWorkspaceDestroyOperation](fileoperationname/destroyoperation.md): Deprecated. Destroy file.
- [NSWorkspaceDuplicateOperation](fileoperationname/duplicateoperation.md): Deprecated. Duplicate file in source directory.
- [NSWorkspaceEncryptOperation](fileoperationname/encryptoperation.md): Deprecated. Encrypt file. This operation always returns an error.
- [NSWorkspaceLinkOperation](fileoperationname/linkoperation.md): Deprecated. Create hard link to file in destination.
- [NSWorkspaceMoveOperation](fileoperationname/moveoperation.md): Deprecated. Move file to destination.
- [NSWorkspaceRecycleOperation](fileoperationname/recycleoperation.md): Deprecated. Move file to trash.

## See Also

### Types

- [NSWorkspaceLaunchOptions](launchoptions.md): Constants specifying how you want to launch an app
- [NSWorkspaceLaunchConfigurationKey](launchconfigurationkey.md): Deprecated. The following keys can be used in the configuration dictionary of the [launchApplicationAtURL:options:configuration:error:](launchapplication%28at_options_configuration_%29.md) method. Each key is optional, and if omitted, default behavior is applied.
