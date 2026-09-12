> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/isexcludedfrombackup](https://developer.apple.com/documentation/foundation/urlresourcevalues/isexcludedfrombackup)

# isExcludedFromBackup

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

True if resource should be excluded from backups, false otherwise.

## Declaration

```swift
var isExcludedFromBackup: Bool? { get set }
```

## Mentioned In

- [Optimizing Your App’s Data for iCloud Backup](../optimizing-your-app-s-data-for-icloud-backup.md)
- [Using the file system effectively](../using-the-file-system-effectively.md)

<a id="Discussion"></a>

## Discussion

This property is only useful for excluding cache and other application support files which are not needed in a backup. Some operations commonly made to user documents will cause this property to be reset to false and so this property should not be used on user documents.

## See Also

### Universal resource values

- [addedToDirectoryDate](addedtodirectorydate.md): The date the resource was created, or renamed into or within its parent directory.
- [allValues](allvalues.md): A loosely-typed dictionary containing all keys and values.
- [attributeModificationDate](attributemodificationdate.md): The time the resource’s attributes were last modified.
- [canonicalPath](canonicalpath.md): The URL’s path as a canonical absolute file system path.
- [contentAccessDate](contentaccessdate.md): The date the resource was last accessed.
- [contentModificationDate](contentmodificationdate.md): The time the resource content was last modified.
- [creationDate](creationdate.md): The date the resource was created.
- [customIcon](customicon.md)
- [effectiveIcon](effectiveicon.md)
- [generationIdentifier](generationidentifier.md): An opaque generation identifier which can be compared using `==` to determine if the data in a document has been modified.
- [hasHiddenExtension](hashiddenextension.md): True for resources whose filename extension is removed from the localized name property.
- [isAliasFile](isaliasfile.md): true if the resource is a Finder alias file or a symlink, false otherwise
- [isHidden](ishidden.md): True for resources normally not displayed to users.
- [isPackage](ispackage.md): True for packaged directories.
- [isReadable](isreadable.md): True if this process (as determined by EUID) can read the resource.
