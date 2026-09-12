> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/diskarbitration-h](https://developer.apple.com/documentation/diskarbitration/diskarbitration-h)

# DiskArbitration.h (Swift)

**Framework:** Disk Arbitration  
**Kind:** API Collection

Register for mount/unmount notifications, and block mount/unmount events.

<a id="Overview"></a>

## Overview

See the Overview section above for header-level documentation.

<a id="Overview"></a>

## Overview

<a id="Included-Headers"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>
- \<DiskArbitration/DADisk.h\>
- \<DiskArbitration/DADissenter.h\>
- \<DiskArbitration/DASession.h\>

## Topics

### Miscellaneous

- [DADiskClaim(\_:\_:\_:\_:\_:\_:)](dadiskclaim%28____________%29.md): Claims the specified disk object for exclusive use.
- [DADiskEject(\_:\_:\_:\_:)](dadiskeject%28________%29.md): Ejects the specified disk object.
- [DADiskGetOptions(\_:)](dadiskgetoptions%28__%29.md): Obtains the options for the specified disk.
- [DADiskIsClaimed(\_:)](dadiskisclaimed%28__%29.md): Reports whether or not the disk is claimed.
- [DADiskMount(\_:\_:\_:\_:\_:)](dadiskmount%28__________%29.md): Mounts the volume at the specified disk object.
- [DADiskMountWithArguments(\_:\_:\_:\_:\_:\_:)](dadiskmountwitharguments%28____________%29.md): Mounts the volume at the specified disk object, with the specified mount options.
- [DADiskRename(\_:\_:\_:\_:\_:)](dadiskrename%28__________%29.md): Renames the volume at the specified disk object.
- [DADiskSetOptions(\_:\_:\_:)](dadisksetoptions%28______%29.md): Sets the options for the specified disk.
- [DADiskUnclaim(\_:)](dadiskunclaim%28__%29.md): Unclaims the specified disk object.
- [DADiskUnmount(\_:\_:\_:\_:)](dadiskunmount%28________%29.md): Unmounts the volume at the specified disk object.
- [DARegisterDiskAppearedCallback(\_:\_:\_:\_:)](daregisterdiskappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has appeared.
- [DARegisterDiskDescriptionChangedCallback(\_:\_:\_:\_:\_:)](daregisterdiskdescriptionchangedcallback%28__________%29.md): Registers a callback function to be called whenever a disk description has changed.
- [DARegisterDiskDisappearedCallback(\_:\_:\_:\_:)](daregisterdiskdisappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has disappeared.
- [DARegisterDiskEjectApprovalCallback(\_:\_:\_:\_:)](daregisterdiskejectapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be ejected.
- [DARegisterDiskMountApprovalCallback(\_:\_:\_:\_:)](daregisterdiskmountapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be mounted.
- [DARegisterDiskPeekCallback(\_:\_:\_:\_:\_:)](daregisterdiskpeekcallback%28__________%29.md): Registers a callback function to be called whenever a disk has been probed.
- [DARegisterDiskUnmountApprovalCallback(\_:\_:\_:\_:)](daregisterdiskunmountapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be unmounted.
- [DAUnregisterCallback(\_:\_:\_:)](daunregistercallback%28______%29.md): Unregisters a registered callback function.

### Callbacks

See the Overview section above for header-level documentation.

- [DADiskAppearedCallback](dadiskappearedcallback.md): Type of the callback function used by DARegisterDiskAppearedCallback().
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

### Constants

- [Global Variables](global-variables.md)
- [DADiskClaimOptions](dadiskclaimoptions.md): Options for DADiskClaim().
- [DADiskEjectOptions](dadiskejectoptions.md): Options for DADiskEject().
- [DADiskMountOptions](dadiskmountoptions.md): Options for DADiskMount().
- [DADiskOptions](dadiskoptions.md): Options for DADiskGetOptions() and DADiskSetOptions().
- [DADiskRenameOptions](dadiskrenameoptions.md): Options for DADiskRename().
- [DADiskUnmountOptions](dadiskunmountoptions.md): Options for DADiskUnmount().

## See Also

### Reference

- [DADisk.h](dadisk-h.md)
- [DADissenter.h](dadissenter-h.md)
- [DASession.h](dasession-h.md)
- [DiskArbitration Enumerations](diskarbitration-enumerations.md)
- [DiskArbitration Constants](diskarbitration-constants.md)
- [DiskArbitration Data Types](diskarbitration-data-types.md)

# DiskArbitration.h (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** API Collection

Register for mount/unmount notifications, and block mount/unmount events.

<a id="Overview"></a>

## Overview

See the Overview section above for header-level documentation.

<a id="Overview"></a>

## Overview

<a id="Included-Headers"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>
- \<DiskArbitration/DADisk.h\>
- \<DiskArbitration/DADissenter.h\>
- \<DiskArbitration/DASession.h\>

## Topics

### Miscellaneous

- [DADiskClaim](dadiskclaim%28____________%29.md): Claims the specified disk object for exclusive use.
- [DADiskEject](dadiskeject%28________%29.md): Ejects the specified disk object.
- [DADiskGetOptions](dadiskgetoptions%28__%29.md): Obtains the options for the specified disk.
- [DADiskIsClaimed](dadiskisclaimed%28__%29.md): Reports whether or not the disk is claimed.
- [DADiskMount](dadiskmount%28__________%29.md): Mounts the volume at the specified disk object.
- [DADiskMountWithArguments](dadiskmountwitharguments%28____________%29.md): Mounts the volume at the specified disk object, with the specified mount options.
- [DADiskRename](dadiskrename%28__________%29.md): Renames the volume at the specified disk object.
- [DADiskSetOptions](dadisksetoptions%28______%29.md): Sets the options for the specified disk.
- [DADiskUnclaim](dadiskunclaim%28__%29.md): Unclaims the specified disk object.
- [DADiskUnmount](dadiskunmount%28________%29.md): Unmounts the volume at the specified disk object.
- [DARegisterDiskAppearedCallback](daregisterdiskappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has appeared.
- [DARegisterDiskDescriptionChangedCallback](daregisterdiskdescriptionchangedcallback%28__________%29.md): Registers a callback function to be called whenever a disk description has changed.
- [DARegisterDiskDisappearedCallback](daregisterdiskdisappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has disappeared.
- [DARegisterDiskEjectApprovalCallback](daregisterdiskejectapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be ejected.
- [DARegisterDiskMountApprovalCallback](daregisterdiskmountapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be mounted.
- [DARegisterDiskPeekCallback](daregisterdiskpeekcallback%28__________%29.md): Registers a callback function to be called whenever a disk has been probed.
- [DARegisterDiskUnmountApprovalCallback](daregisterdiskunmountapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be unmounted.
- [DAUnregisterApprovalCallback](daunregisterapprovalcallback.md): Unregisters a registered callback function.
- [DAUnregisterCallback](daunregistercallback%28______%29.md): Unregisters a registered callback function.

### Callbacks

See the Overview section above for header-level documentation.

- [DADiskAppearedCallback](dadiskappearedcallback.md): Type of the callback function used by DARegisterDiskAppearedCallback().
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

### Constants

- [Global Variables](global-variables.md)
- [DADiskClaimOptions](dadiskclaimoptions.md): Options for DADiskClaim().
- [DADiskEjectOptions](dadiskejectoptions.md): Options for DADiskEject().
- [DADiskMountOptions](dadiskmountoptions.md): Options for DADiskMount().
- [DADiskOptions](dadiskoptions.md): Options for DADiskGetOptions() and DADiskSetOptions().
- [DADiskRenameOptions](dadiskrenameoptions.md): Options for DADiskRename().
- [DADiskUnmountOptions](dadiskunmountoptions.md): Options for DADiskUnmount().

## See Also

### Reference

- [DADisk.h](dadisk-h.md)
- [DADissenter.h](dadissenter-h.md)
- [DASession.h](dasession-h.md)
- [DiskArbitration Enumerations](diskarbitration-enumerations.md)
- [DiskArbitration Constants](diskarbitration-constants.md)
- [DiskArbitration Functions](diskarbitration-functions.md)
- [DiskArbitration Data Types](diskarbitration-data-types.md)
