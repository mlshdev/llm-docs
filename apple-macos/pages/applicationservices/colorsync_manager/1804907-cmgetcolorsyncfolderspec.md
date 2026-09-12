> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804907-cmgetcolorsyncfolderspec](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804907-cmgetcolorsyncfolderspec)

# CMGetColorSyncFolderSpec

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the volume reference number and the directory ID for a ColorSync Profiles folder.

## Declaration

```objectivec
CMError CMGetColorSyncFolderSpec (
   short vRefNum,
   Boolean createFolder,
   short *foundVRefNum,
   long *foundDirID
);
```

## Parameters

- `vRefNum`: The location of the ColorSync profiles folder. In macOS, pass a constant that specifies one of the four possible locations for ColorSync profiles. Pass `kSystemDomain` for profiles located in:

  `/System/Library/ColorSync/Profiles`

  Pass `kLocalDomain` for profiles located in:

  `/Library/ColorSync/Profiles`

  Pass `kNetworkDomain` for profiles located in:

  `/Network/Library/ColorSync/Profiles`

  Pass `kUserDomain` for profiles located in:

  `~/Library/ColorSync/Profiles`

   In Mac OS 9, pass the reference number of the volume to examine. The volume must be mounted. The constant `kOnSystemDisk` defined in the Folders header file (`Folders.h`) specifies the active system volume.
- `createFolder`: A flag you set to `true` to direct the ColorSync Manager to create the ColorSync Profiles folder, if it does not exist. You can use the constants `kCreateFolder` and `kDontCreateFolder`, defined in the `Folders.h` header file, to assign a value to the flag.
- `foundVRefNum`: A pointer to a volume reference number. On return, the volume reference number for the volume on which the ColorSync Profiles folder resides.
- `foundDirID`: A pointer to a directory ID. On return, the directory ID for the volume on which the ColorSync Profiles folder resides.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

If the ColorSync Profiles folder does not already exist, you can use this function to create it. 

<a id="1819327"></a>

### Version-Notes

Starting with version 2.5, the name and location of the profile folder changed.

Your application should use the function [CMIterateColorSyncFolder](1804904-cmiteratecolorsyncfolder.md), available starting in ColorSync version 2.5, or one of the search functions described in “Searching for Profiles Prior to ColorSync 2.5”, to search for a profile file, even if it is only looking for one file. Do not search for a profile file by obtaining the location of the profiles folder and searching for the file directly.

## See Also

### Iterating Installed Profiles

- [CMIterateColorSyncFolder](1804904-cmiteratecolorsyncfolder.md): Iterates over the available profiles.
