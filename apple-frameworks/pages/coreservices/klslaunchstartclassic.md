> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klslaunchstartclassic](https://developer.apple.com/documentation/coreservices/klslaunchstartclassic)

# kLSLaunchStartClassic

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.11)

A request that the system starts up the Classic emulation environment if the app requires it. If this flag is not set and the app requires the Classic environment, the launch fails.

## Declaration

```swift
var kLSLaunchStartClassic: Int { get }
```

## See Also

### Deprecated Variables

- [kLSLaunchHasUntrustedContents](klslaunchhasuntrustedcontents.md): Deprecated. A request that the system marks the launch items as untrustworthy.
- [kLSLaunchNoParams](klslaunchnoparams.md): Deprecated. A request that the system uses the app’s information property to determine the launch parameters.
- [kLSLaunchInhibitBGOnly](klslaunchinhibitbgonly.md): Deprecated. A request that the system fails the launch if the app is background-only.
- [kLSLaunchInClassic](klslaunchinclassic.md): Deprecated. A request that the system forces the app to launch in the Classic emulation environment.
- [kLSItemQuarantineProperties](klsitemquarantineproperties.md): Deprecated.
- [kLSSharedFileListFavoriteItems](klssharedfilelistfavoriteitems.md): Deprecated.
- [kLSSharedFileListFavoriteVolumes](klssharedfilelistfavoritevolumes.md): Deprecated.
- [kLSSharedFileListItemBeforeFirst](klssharedfilelistitembeforefirst.md): Deprecated.
- [kLSSharedFileListItemHidden](klssharedfilelistitemhidden.md): Deprecated.
- [kLSSharedFileListItemLast](klssharedfilelistitemlast.md): Deprecated.
- [kLSSharedFileListLoginItemHidden](klssharedfilelistloginitemhidden.md): Deprecated.
- [kLSSharedFileListRecentApplicationItems](klssharedfilelistrecentapplicationitems.md): Deprecated.
- [kLSSharedFileListRecentDocumentItems](klssharedfilelistrecentdocumentitems.md): Deprecated.
- [kLSSharedFileListRecentItemsMaxAmount](klssharedfilelistrecentitemsmaxamount.md): Deprecated.
- [kLSSharedFileListRecentServerItems](klssharedfilelistrecentserveritems.md): Deprecated.
- [kLSSharedFileListSessionLoginItems](klssharedfilelistsessionloginitems.md): Deprecated.
- [kLSSharedFileListVolumesComputerVisible](klssharedfilelistvolumescomputervisible.md): Deprecated.
- [kLSSharedFileListVolumesNetworkVisible](klssharedfilelistvolumesnetworkvisible.md): Deprecated.
