> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/icloud-constants](https://developer.apple.com/documentation/corefoundation/icloud-constants)

# iCloud Constants

**Interface languages:** Swift, Objective-C

**Framework:** Core Foundation  
**Kind:** API Collection

These constants can be used to determining whether a file is stored in the cloud and to obtain information about its status.

## Topics

### Constants

- [kCFURLIsUbiquitousItemKey](kcfurlisubiquitousitemkey.md): A `CFBoolean` value that tells whether the item is synced to the cloud. (read-only)
- [kCFURLUbiquitousItemHasUnresolvedConflictsKey](kcfurlubiquitousitemhasunresolvedconflictskey.md): A `CFBoolean` value that tells whether the item has conflicts outstanding. (read-only)
- [kCFURLUbiquitousItemIsDownloadedKey](kcfurlubiquitousitemisdownloadedkey.md): Deprecated. A `CFBoolean` value that tells whether there is local data present for the item. (read-only)
- [kCFURLUbiquitousItemIsDownloadingKey](kcfurlubiquitousitemisdownloadingkey.md): A `CFBoolean` value that tells whether data for the item is being downloaded. (read-only)
- [kCFURLUbiquitousItemIsUploadedKey](kcfurlubiquitousitemisuploadedkey.md): A `CFBoolean` value that tells whether there is data present in the cloud for this item. (read-only)
- [kCFURLUbiquitousItemIsUploadingKey](kcfurlubiquitousitemisuploadingkey.md): A `CFBoolean` value that tells whether data for the item is being uploaded. (read-only)
- [kCFURLUbiquitousItemPercentDownloadedKey](kcfurlubiquitousitempercentdownloadedkey.md): Deprecated.
- [kCFURLUbiquitousItemPercentUploadedKey](kcfurlubiquitousitempercentuploadedkey.md): Deprecated.

## See Also

### File System Constants

- [Common File System Resource Keys](common-file-system-resource-keys.md): Keys that are applicable to file system URLs.
- [File Resource Types](file-resource-types.md): Possible values for the [kCFURLFileResourceTypeKey](kcfurlfileresourcetypekey.md) key.
- [File Property Keys](file-property-keys.md): Keys that apply to properties of files.
- [Volume Property Keys](volume-property-keys.md): Keys that apply to volumes.
- [CFError userInfo Dictionary Keys](cferror-userinfo-dictionary-keys.md): Keys in the userInfo dictionary of a `CFError` object when certain CFURL functions return an error.
