> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1645929-anonymous/klslaunchinclassic](https://developer.apple.com/documentation/coreservices/1645929-anonymous/klslaunchinclassic)

# kLSLaunchInClassic

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.11)

A request that the system forces the app to launch in the Classic emulation environment.

## Declaration

```objectivec
kLSLaunchInClassic = 0x00040000
```

## See Also

### Deprecated Variables

- [kLSLaunchHasUntrustedContents](klslaunchhasuntrustedcontents.md): Deprecated. A request that the system marks the launch items as untrustworthy.
- [kLSLaunchNoParams](klslaunchnoparams.md): Deprecated. A request that the system uses the app’s information property to determine the launch parameters.
- [kLSLaunchInhibitBGOnly](klslaunchinhibitbgonly.md): Deprecated. A request that the system fails the launch if the app is background-only.
- [kLSLaunchStartClassic](klslaunchstartclassic.md): Deprecated. A request that the system starts up the Classic emulation environment if the app requires it. If this flag is not set and the app requires the Classic environment, the launch fails.
- [kLSItemQuarantineProperties](../klsitemquarantineproperties.md): Deprecated.
- [kLSSharedFileListFavoriteItems](../klssharedfilelistfavoriteitems.md): Deprecated.
- [kLSSharedFileListFavoriteVolumes](../klssharedfilelistfavoritevolumes.md): Deprecated.
- [kLSSharedFileListGlobalLoginItems](../klssharedfilelistgloballoginitems.md): Deprecated.
- [kLSSharedFileListItemBeforeFirst](../klssharedfilelistitembeforefirst.md): Deprecated.
- [kLSSharedFileListItemHidden](../klssharedfilelistitemhidden.md): Deprecated.
- [kLSSharedFileListItemLast](../klssharedfilelistitemlast.md): Deprecated.
- [kLSSharedFileListLoginItemHidden](../klssharedfilelistloginitemhidden.md): Deprecated.
- [kLSSharedFileListRecentApplicationItems](../klssharedfilelistrecentapplicationitems.md): Deprecated.
- [kLSSharedFileListRecentDocumentItems](../klssharedfilelistrecentdocumentitems.md): Deprecated.
- [kLSSharedFileListRecentItemsMaxAmount](../klssharedfilelistrecentitemsmaxamount.md): Deprecated.
- [kLSSharedFileListRecentServerItems](../klssharedfilelistrecentserveritems.md): Deprecated.
- [kLSSharedFileListSessionLoginItems](../klssharedfilelistsessionloginitems.md): Deprecated.
- [kLSSharedFileListVolumesComputerVisible](../klssharedfilelistvolumescomputervisible.md): Deprecated.
- [kLSSharedFileListVolumesIDiskVisible](../klssharedfilelistvolumesidiskvisible.md): Deprecated.
- [kLSSharedFileListVolumesNetworkVisible](../klssharedfilelistvolumesnetworkvisible.md): Deprecated.
