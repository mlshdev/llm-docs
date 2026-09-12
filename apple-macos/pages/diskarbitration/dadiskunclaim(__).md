> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskunclaim(_:)](https://developer.apple.com/documentation/diskarbitration/dadiskunclaim(_:))

# DADiskUnclaim(\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Unclaims the specified disk object.

## Declaration

```swift
func DADiskUnclaim(_ disk: DADisk)
```

## Parameters

- `disk`: The disk object.

## See Also

### Miscellaneous

- [DADiskClaim(\_:\_:\_:\_:\_:\_:)](dadiskclaim%28____________%29.md): Claims the specified disk object for exclusive use.
- [DADiskEject(\_:\_:\_:\_:)](dadiskeject%28________%29.md): Ejects the specified disk object.
- [DADiskGetOptions(\_:)](dadiskgetoptions%28__%29.md): Obtains the options for the specified disk.
- [DADiskIsClaimed(\_:)](dadiskisclaimed%28__%29.md): Reports whether or not the disk is claimed.
- [DADiskMount(\_:\_:\_:\_:\_:)](dadiskmount%28__________%29.md): Mounts the volume at the specified disk object.
- [DADiskMountWithArguments(\_:\_:\_:\_:\_:\_:)](dadiskmountwitharguments%28____________%29.md): Mounts the volume at the specified disk object, with the specified mount options.
- [DADiskRename(\_:\_:\_:\_:\_:)](dadiskrename%28__________%29.md): Renames the volume at the specified disk object.
- [DADiskSetOptions(\_:\_:\_:)](dadisksetoptions%28______%29.md): Sets the options for the specified disk.
- [DADiskUnmount(\_:\_:\_:\_:)](dadiskunmount%28________%29.md): Unmounts the volume at the specified disk object.
- [DARegisterDiskAppearedCallback(\_:\_:\_:\_:)](daregisterdiskappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has appeared.
- [DARegisterDiskDescriptionChangedCallback(\_:\_:\_:\_:\_:)](daregisterdiskdescriptionchangedcallback%28__________%29.md): Registers a callback function to be called whenever a disk description has changed.
- [DARegisterDiskDisappearedCallback(\_:\_:\_:\_:)](daregisterdiskdisappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has disappeared.
- [DARegisterDiskEjectApprovalCallback(\_:\_:\_:\_:)](daregisterdiskejectapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be ejected.
- [DARegisterDiskMountApprovalCallback(\_:\_:\_:\_:)](daregisterdiskmountapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be mounted.
- [DARegisterDiskPeekCallback(\_:\_:\_:\_:\_:)](daregisterdiskpeekcallback%28__________%29.md): Registers a callback function to be called whenever a disk has been probed.

# DADiskUnclaim (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Unclaims the specified disk object.

## Declaration

```objectivec
extern void DADiskUnclaim(DADiskRef disk);
```

## Parameters

- `disk`: The disk object.

## See Also

### Miscellaneous

- [DADiskClaim](dadiskclaim%28____________%29.md): Claims the specified disk object for exclusive use.
- [DADiskEject](dadiskeject%28________%29.md): Ejects the specified disk object.
- [DADiskGetOptions](dadiskgetoptions%28__%29.md): Obtains the options for the specified disk.
- [DADiskIsClaimed](dadiskisclaimed%28__%29.md): Reports whether or not the disk is claimed.
- [DADiskMount](dadiskmount%28__________%29.md): Mounts the volume at the specified disk object.
- [DADiskMountWithArguments](dadiskmountwitharguments%28____________%29.md): Mounts the volume at the specified disk object, with the specified mount options.
- [DADiskRename](dadiskrename%28__________%29.md): Renames the volume at the specified disk object.
- [DADiskSetOptions](dadisksetoptions%28______%29.md): Sets the options for the specified disk.
- [DADiskUnmount](dadiskunmount%28________%29.md): Unmounts the volume at the specified disk object.
- [DARegisterDiskAppearedCallback](daregisterdiskappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has appeared.
- [DARegisterDiskDescriptionChangedCallback](daregisterdiskdescriptionchangedcallback%28__________%29.md): Registers a callback function to be called whenever a disk description has changed.
- [DARegisterDiskDisappearedCallback](daregisterdiskdisappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has disappeared.
- [DARegisterDiskEjectApprovalCallback](daregisterdiskejectapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be ejected.
- [DARegisterDiskMountApprovalCallback](daregisterdiskmountapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be mounted.
- [DARegisterDiskPeekCallback](daregisterdiskpeekcallback%28__________%29.md): Registers a callback function to be called whenever a disk has been probed.
