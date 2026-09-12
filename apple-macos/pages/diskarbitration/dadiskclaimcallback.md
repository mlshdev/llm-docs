> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskclaimcallback](https://developer.apple.com/documentation/diskarbitration/dadiskclaimcallback)

# DADiskClaimCallback (Swift)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Type of the callback function used by DADiskClaim().

## Declaration

```swift
typealias DADiskClaimCallback = (DADisk, DADissenter?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `disk`: The disk object.
- `dissenter`: A dissenter object on failure or NULL on success.
- `context`: The user-defined context parameter given to the claim function.

## See Also

### Callbacks

- [DADiskAppearedCallback](dadiskappearedcallback.md): Type of the callback function used by DARegisterDiskAppearedCallback().
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

# DADiskClaimCallback (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Type of the callback function used by DADiskClaim().

## Declaration

```objectivec
typedef void (*)(struct __DADisk *, const struct __DADissenter *, void *) DADiskClaimCallback;
```

## Parameters

- `disk`: The disk object.
- `dissenter`: A dissenter object on failure or NULL on success.
- `context`: The user-defined context parameter given to the claim function.

## See Also

### Callbacks

- [DADiskAppearedCallback](dadiskappearedcallback.md): Type of the callback function used by DARegisterDiskAppearedCallback().
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
