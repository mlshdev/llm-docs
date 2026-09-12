> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskappearedcallback](https://developer.apple.com/documentation/diskarbitration/dadiskappearedcallback)

# DADiskAppearedCallback (Swift)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Type of the callback function used by DARegisterDiskAppearedCallback().

## Declaration

```swift
typealias DADiskAppearedCallback = (DADisk, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `disk`: A disk object.
- `context`: The user-defined context parameter given to the registration function.

## See Also

### Callbacks

- [DADiskClaimCallback](dadiskclaimcallback.md): Type of the callback function used by DADiskClaim().
- [DADiskClaimReleaseCallback](dadiskclaimreleasecallback.md): Type of the callback function used by DADiskClaim().
- [DADiskDescriptionChangedCallback](dadiskdescriptionchangedcallback.md): Type of the callback function used by DARegisterDiskDescriptionChangedCallback().
- [DADiskDisappearedCallback](dadiskdisappearedcallback.md): Type of the callback function used by DARegisterDiskDisappearedCallback().
- [DADiskEjectApprovalCallback](dadiskejectapprovalcallback.md): Type of the callback function used by DARegisterDiskEjectApprovalCallback().
- [DADiskEjectCallback](dadiskejectcallback.md): Type of the callback function used by DADiskEject().
- [DADiskMountApprovalCallback](dadiskmountapprovalcallback.md): Type of the callback function used by DARegisterDiskMountApprovalCallback().
- [DADiskMountCallback](dadiskmountcallback.md): Type of the callback function used by DADiskMount().
- [DADiskPeekCallback](dadiskpeekcallback.md): Type of the callback function used by DARegisterDiskPeekCallback().
- [DADiskRenameCallback](dadiskrenamecallback.md): Type of the callback function used by DADiskRename().
- [DADiskUnmountApprovalCallback](dadiskunmountapprovalcallback.md): Type of the callback function used by DARegisterDiskUnmountApprovalCallback().
- [DADiskUnmountCallback](dadiskunmountcallback.md): Type of the callback function used by DADiskUnmount().

# DADiskAppearedCallback (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Type of the callback function used by DARegisterDiskAppearedCallback().

## Declaration

```objectivec
typedef void (*)(struct __DADisk *, void *) DADiskAppearedCallback;
```

## Parameters

- `disk`: A disk object.
- `context`: The user-defined context parameter given to the registration function.

## See Also

### Callbacks

- [DADiskClaimCallback](dadiskclaimcallback.md): Type of the callback function used by DADiskClaim().
- [DADiskClaimReleaseCallback](dadiskclaimreleasecallback.md): Type of the callback function used by DADiskClaim().
- [DADiskDescriptionChangedCallback](dadiskdescriptionchangedcallback.md): Type of the callback function used by DARegisterDiskDescriptionChangedCallback().
- [DADiskDisappearedCallback](dadiskdisappearedcallback.md): Type of the callback function used by DARegisterDiskDisappearedCallback().
- [DADiskEjectApprovalCallback](dadiskejectapprovalcallback.md): Type of the callback function used by DARegisterDiskEjectApprovalCallback().
- [DADiskEjectCallback](dadiskejectcallback.md): Type of the callback function used by DADiskEject().
- [DADiskMountApprovalCallback](dadiskmountapprovalcallback.md): Type of the callback function used by DARegisterDiskMountApprovalCallback().
- [DADiskMountCallback](dadiskmountcallback.md): Type of the callback function used by DADiskMount().
- [DADiskPeekCallback](dadiskpeekcallback.md): Type of the callback function used by DARegisterDiskPeekCallback().
- [DADiskRenameCallback](dadiskrenamecallback.md): Type of the callback function used by DADiskRename().
- [DADiskUnmountApprovalCallback](dadiskunmountapprovalcallback.md): Type of the callback function used by DARegisterDiskUnmountApprovalCallback().
- [DADiskUnmountCallback](dadiskunmountcallback.md): Type of the callback function used by DADiskUnmount().
