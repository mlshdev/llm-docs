> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskpeekcallback](https://developer.apple.com/documentation/diskarbitration/dadiskpeekcallback)

# DADiskPeekCallback (Swift)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Type of the callback function used by DARegisterDiskPeekCallback().

## Declaration

```swift
typealias DADiskPeekCallback = (DADisk, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `disk`: A disk object.
- `context`: The user-defined context parameter given to the registration function.

<a id="Discussion"></a>

## Discussion

The peek callback functions are called in a specific order, from lowest order to highest order. DADiskClaim() could be used here to claim the disk object and DADiskSetOptions() could be used here to set up options on the disk object.

## See Also

### Callbacks

- [DADiskAppearedCallback](dadiskappearedcallback.md): Type of the callback function used by DARegisterDiskAppearedCallback().
- [DADiskClaimCallback](dadiskclaimcallback.md): Type of the callback function used by DADiskClaim().
- [DADiskClaimReleaseCallback](dadiskclaimreleasecallback.md): Type of the callback function used by DADiskClaim().
- [DADiskDescriptionChangedCallback](dadiskdescriptionchangedcallback.md): Type of the callback function used by DARegisterDiskDescriptionChangedCallback().
- [DADiskDisappearedCallback](dadiskdisappearedcallback.md): Type of the callback function used by DARegisterDiskDisappearedCallback().
- [DADiskEjectApprovalCallback](dadiskejectapprovalcallback.md): Type of the callback function used by DARegisterDiskEjectApprovalCallback().
- [DADiskEjectCallback](dadiskejectcallback.md): Type of the callback function used by DADiskEject().
- [DADiskMountApprovalCallback](dadiskmountapprovalcallback.md): Type of the callback function used by DARegisterDiskMountApprovalCallback().
- [DADiskMountCallback](dadiskmountcallback.md): Type of the callback function used by DADiskMount().
- [DADiskRenameCallback](dadiskrenamecallback.md): Type of the callback function used by DADiskRename().
- [DADiskUnmountApprovalCallback](dadiskunmountapprovalcallback.md): Type of the callback function used by DARegisterDiskUnmountApprovalCallback().
- [DADiskUnmountCallback](dadiskunmountcallback.md): Type of the callback function used by DADiskUnmount().

# DADiskPeekCallback (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Type of the callback function used by DARegisterDiskPeekCallback().

## Declaration

```objectivec
typedef void (*)(struct __DADisk *, void *) DADiskPeekCallback;
```

## Parameters

- `disk`: A disk object.
- `context`: The user-defined context parameter given to the registration function.

<a id="Discussion"></a>

## Discussion

The peek callback functions are called in a specific order, from lowest order to highest order. DADiskClaim() could be used here to claim the disk object and DADiskSetOptions() could be used here to set up options on the disk object.

## See Also

### Callbacks

- [DADiskAppearedCallback](dadiskappearedcallback.md): Type of the callback function used by DARegisterDiskAppearedCallback().
- [DADiskClaimCallback](dadiskclaimcallback.md): Type of the callback function used by DADiskClaim().
- [DADiskClaimReleaseCallback](dadiskclaimreleasecallback.md): Type of the callback function used by DADiskClaim().
- [DADiskDescriptionChangedCallback](dadiskdescriptionchangedcallback.md): Type of the callback function used by DARegisterDiskDescriptionChangedCallback().
- [DADiskDisappearedCallback](dadiskdisappearedcallback.md): Type of the callback function used by DARegisterDiskDisappearedCallback().
- [DADiskEjectApprovalCallback](dadiskejectapprovalcallback.md): Type of the callback function used by DARegisterDiskEjectApprovalCallback().
- [DADiskEjectCallback](dadiskejectcallback.md): Type of the callback function used by DADiskEject().
- [DADiskMountApprovalCallback](dadiskmountapprovalcallback.md): Type of the callback function used by DARegisterDiskMountApprovalCallback().
- [DADiskMountCallback](dadiskmountcallback.md): Type of the callback function used by DADiskMount().
- [DADiskRenameCallback](dadiskrenamecallback.md): Type of the callback function used by DADiskRename().
- [DADiskUnmountApprovalCallback](dadiskunmountapprovalcallback.md): Type of the callback function used by DARegisterDiskUnmountApprovalCallback().
- [DADiskUnmountCallback](dadiskunmountcallback.md): Type of the callback function used by DADiskUnmount().
