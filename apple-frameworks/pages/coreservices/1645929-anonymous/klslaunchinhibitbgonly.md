> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1645929-anonymous/klslaunchinhibitbgonly](https://developer.apple.com/documentation/coreservices/1645929-anonymous/klslaunchinhibitbgonly)

# kLSLaunchInhibitBGOnly

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.12)

A request that the system fails the launch if the app is background-only.

## Declaration

```objectivec
kLSLaunchInhibitBGOnly = 0x00000080
```

## See Also

### Deprecated Variables

- [kLSLaunchHasUntrustedContents](klslaunchhasuntrustedcontents.md): Deprecated. A request that the system marks the launch items as untrustworthy.
- [kLSLaunchNoParams](klslaunchnoparams.md): Deprecated. A request that the system uses the app’s information property to determine the launch parameters.
- [kLSLaunchInClassic](klslaunchinclassic.md): Deprecated. A request that the system forces the app to launch in the Classic emulation environment.
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
