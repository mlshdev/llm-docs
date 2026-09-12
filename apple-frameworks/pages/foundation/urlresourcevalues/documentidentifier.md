> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/documentidentifier](https://developer.apple.com/documentation/foundation/urlresourcevalues/documentidentifier)

# documentIdentifier

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that the kernel assigns to identify a document.

## Declaration

```swift
var documentIdentifier: Int? { get }
```

<a id="Discussion"></a>

## Discussion

The kernel uses a document identifier, which can be either a file or a directory, to identify the document regardless of where it moves on a volume.

The document identifier survives safe-save operation, and is sticky to the path the kernel assigns. [replaceItem(at:withItemAt:backupItemName:options:resultingItemURL:)](../filemanager/replaceitem%28at_withitemat_backupitemname_options_resultingitemurl_%29.md) is the preferred safe-save API. The document identifier is persistent across system restarts, and doesn’t transfer when you copy the file. Document identifiers are only unique within a single volume. Not all volumes support this property.

## See Also

### File values

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
- [totalFileSize](totalfilesize.md): The total displayable size of the file, in bytes.
