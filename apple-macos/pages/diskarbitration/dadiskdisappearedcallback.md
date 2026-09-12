> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskdisappearedcallback](https://developer.apple.com/documentation/diskarbitration/dadiskdisappearedcallback)

# DADiskDisappearedCallback (Swift)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Type of the callback function used by DARegisterDiskDisappearedCallback().

## Declaration

```swift
typealias DADiskDisappearedCallback = (DADisk, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `disk`: A disk object.
- `context`: The user-defined context parameter given to the registration function.

## See Also

### Callbacks

- [DADiskAppearedCallback](dadiskappearedcallback.md): Type of the callback function used by DARegisterDiskAppearedCallback().
- [DADiskClaimCallback](dadiskclaimcallback.md): Type of the callback function used by DADiskClaim().
- [DADiskClaimReleaseCallback](dadiskclaimreleasecallback.md): Type of the callback function used by DADiskClaim().
- [DADiskDescriptionChangedCallback](dadiskdescriptionchangedcallback.md): Type of the callback function used by DARegisterDiskDescriptionChangedCallback().
- [DADiskEjectApprovalCallback](dadiskejectapprovalcallback.md): Type of the callback function used by DARegisterDiskEjectApprovalCallback().
- [DADiskEjectCallback](dadiskejectcallback.md): Type of the callback function used by DADiskEject().
- [DADiskMountApprovalCallback](dadiskmountapprovalcallback.md): Type of the callback function used by DARegisterDiskMountApprovalCallback().
- [DADiskMountCallback](dadiskmountcallback.md): Type of the callback function used by DADiskMount().
- [DADiskPeekCallback](dadiskpeekcallback.md): Type of the callback function used by DARegisterDiskPeekCallback().
- [DADiskRenameCallback](dadiskrenamecallback.md): Type of the callback function used by DADiskRename().
- [DADiskUnmountApprovalCallback](dadiskunmountapprovalcallback.md): Type of the callback function used by DARegisterDiskUnmountApprovalCallback().
- [DADiskUnmountCallback](dadiskunmountcallback.md): Type of the callback function used by DADiskUnmount().

# DADiskDisappearedCallback (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Type of the callback function used by DARegisterDiskDisappearedCallback().

## Declaration

```objectivec
typedef void (*)(struct __DADisk *, void *) DADiskDisappearedCallback;
```

## Parameters

- `disk`: A disk object.
- `context`: The user-defined context parameter given to the registration function.

## See Also

### Callbacks

- [DADiskAppearedCallback](dadiskappearedcallback.md): Type of the callback function used by DARegisterDiskAppearedCallback().
- [DADiskClaimCallback](dadiskclaimcallback.md): Type of the callback function used by DADiskClaim().
- [DADiskClaimReleaseCallback](dadiskclaimreleasecallback.md): Type of the callback function used by DADiskClaim().
- [DADiskDescriptionChangedCallback](dadiskdescriptionchangedcallback.md): Type of the callback function used by DARegisterDiskDescriptionChangedCallback().
- [DADiskEjectApprovalCallback](dadiskejectapprovalcallback.md): Type of the callback function used by DARegisterDiskEjectApprovalCallback().
- [DADiskEjectCallback](dadiskejectcallback.md): Type of the callback function used by DADiskEject().
- [DADiskMountApprovalCallback](dadiskmountapprovalcallback.md): Type of the callback function used by DARegisterDiskMountApprovalCallback().
- [DADiskMountCallback](dadiskmountcallback.md): Type of the callback function used by DADiskMount().
- [DADiskPeekCallback](dadiskpeekcallback.md): Type of the callback function used by DARegisterDiskPeekCallback().
- [DADiskRenameCallback](dadiskrenamecallback.md): Type of the callback function used by DADiskRename().
- [DADiskUnmountApprovalCallback](dadiskunmountapprovalcallback.md): Type of the callback function used by DARegisterDiskUnmountApprovalCallback().
- [DADiskUnmountCallback](dadiskunmountcallback.md): Type of the callback function used by DADiskUnmount().
