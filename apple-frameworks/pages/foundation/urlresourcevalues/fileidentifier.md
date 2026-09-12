> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/fileidentifier](https://developer.apple.com/documentation/foundation/urlresourcevalues/fileidentifier)

# fileIdentifier

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The file system’s internal inode identifier for the item.

## Declaration

```swift
var fileIdentifier: UInt64? { get }
```

<a id="Discussion"></a>

## Discussion

This value isn’t stable for all file systems or across all mounts. Use this value sparingly and don’t persist it. You can use it, for example, to match URLs from the URL enumerator with paths from `FSEvents`.

## See Also

### File values

- [documentIdentifier](documentidentifier.md): A value that the kernel assigns to identify a document.
- [fileContentIdentifier](filecontentidentifier.md): A value APFS assigns that identifies a file’s content data stream.
- [fileAllocatedSize](fileallocatedsize.md): The total allocated size on-disk for the file, in bytes.
- [fileProtection](fileprotection.md): The protection level for the file.
- [fileResourceIdentifier](fileresourceidentifier.md): An identifier for comparing two file system objects for equality.
- [fileResourceType](fileresourcetype.md): The type of the file system object.
- [fileSecurity](filesecurity.md): The file system object’s security information.
- [fileSize](filesize.md): The total file size, in bytes.
- [isPurgeable](ispurgeable.md): A Boolean value that indicates whether the file system can delete a file when the system needs to free space.
- [isSparse](issparse.md): A Boolean value that indicates whether the file has sparse regions.
- [mayHaveExtendedAttributes](mayhaveextendedattributes.md): A Boolean value that indicates the file may have extended attributes.
- [isExecutable](isexecutable.md): A Boolean value that indicates whether you can execute the file resource or search a directory resource.
- [isRegularFile](isregularfile.md): A Boolean value that indicates whether the resource is a regular file.
- [mayShareFileContent](maysharefilecontent.md): A Boolean value that indicates whether the cloned files and their original files may share data blocks.
- [totalFileAllocatedSize](totalfileallocatedsize.md): The total allocated size of the file, in bytes.
