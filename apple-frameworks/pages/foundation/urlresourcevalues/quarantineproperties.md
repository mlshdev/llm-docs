> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/quarantineproperties](https://developer.apple.com/documentation/foundation/urlresourcevalues/quarantineproperties)

# quarantineProperties

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The quarantine properties as defined in LSQuarantine.h. To remove quarantine information from a file, pass `nil` as the value when setting this property.

## Declaration

```swift
var quarantineProperties: [String : Any]? { get set }
```

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
- [isExcludedFromBackup](isexcludedfrombackup.md): True if resource should be excluded from backups, false otherwise.
- [isHidden](ishidden.md): True for resources normally not displayed to users.
- [isPackage](ispackage.md): True for packaged directories.
