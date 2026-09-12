> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/fsaliasinfo](https://developer.apple.com/documentation/coreservices/fsaliasinfo)

# FSAliasInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.2+

Defines an information block passed to the `FSCopyAliasInfo` function.

## Declaration

```objectivec
typedef struct FSAliasInfo {
    ...
} FSAliasInfo;
```

## Topics

### Instance Properties

- [fileCreator](fsaliasinfo/1444368-filecreator.md): The creator code of the target.
- [fileType](fsaliasinfo/1444341-filetype.md): The file type of the target.
- [filesystemID](fsaliasinfo/1444355-filesystemid.md): The filesystem ID.
- [isDirectory](fsaliasinfo/1444331-isdirectory.md): A Boolean value indicating whether the alias target is a directory.
- [nodeID](fsaliasinfo/1444299-nodeid.md): The ID of the file or directory that is the alias target.
- [parentDirID](fsaliasinfo/1444444-parentdirid.md): The directory ID of the target’s parent directory.
- [signature](fsaliasinfo/1444305-signature.md): The volume signature of the volume on which the target resides.
- [targetCreateDate](fsaliasinfo/1444351-targetcreatedate.md): The creation date of the alias target.
- [volumeCreateDate](fsaliasinfo/1444411-volumecreatedate.md): The creation date of the volume on which the alias target resides.
- [volumeHasPersistentFileIDs](fsaliasinfo/1444322-volumehaspersistentfileids.md): A Boolean value indicating whether the volume has persistent file ID’s.
- [volumeIsAutomounted](fsaliasinfo/1444329-volumeisautomounted.md): A Boolean value indicating whether the volume is automounted.
- [volumeIsBootVolume](fsaliasinfo/1444347-volumeisbootvolume.md): A Boolean value indicating whether the volume is the boot volume.
- [volumeIsEjectable](fsaliasinfo/1444281-volumeisejectable.md): A Boolean value indicating whether the volume is ejectable.
