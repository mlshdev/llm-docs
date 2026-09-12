> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/fsaliasinfobitmap](https://developer.apple.com/documentation/coreservices/fsaliasinfobitmap)

# FSAliasInfoBitmap

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.2+

Returned by the `FSCopyAliasInfo` function to indicate which fields of the alias information structure contain valid data.

## Declaration

```objectivec
typedef UInt32 FSAliasInfoBitmap;
```

## Topics

### Constants

- [kFSAliasInfoNone](1444335-anonymous/kfsaliasinfonone.md): Deprecated. None of the alias information is valid.
- [kFSAliasInfoVolumeCreateDate](1444335-anonymous/kfsaliasinfovolumecreatedate.md): Deprecated. The volume creation date in the `volumeCreateDate` field is valid.
- [kFSAliasInfoTargetCreateDate](1444335-anonymous/kfsaliasinfotargetcreatedate.md): Deprecated. The creation date of the alias target, in the `targetCreateDate` field, is valid.
- [kFSAliasInfoFinderInfo](1444335-anonymous/kfsaliasinfofinderinfo.md): Deprecated. The file type and creator information, in the `fileType` and `fileCreator` fields, is valid.
- [kFSAliasInfoIsDirectory](1444335-anonymous/kfsaliasinfoisdirectory.md): Deprecated. The information in the `isDirectory` field is valid.
- [kFSAliasInfoIDs](1444335-anonymous/kfsaliasinfoids.md): Deprecated. The parent directory ID and alias target ID, in the `parentDirID` and `nodeID` fields, are valid.
- [kFSAliasInfoFSInfo](1444335-anonymous/kfsaliasinfofsinfo.md): Deprecated. The filesystem ID and signature, in the `filesystemID` and `signature` fields, are valid.
- [kFSAliasInfoVolumeFlags](1444335-anonymous/kfsaliasinfovolumeflags.md): Deprecated. The volume information, in the `volumeIsBootVolume`, `volumeIsAutomounted`, `volumeIsEjectable`, and `volumeHasPersistentFileIDs` fields, is valid.
