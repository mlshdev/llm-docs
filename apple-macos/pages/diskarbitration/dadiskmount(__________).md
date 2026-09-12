> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskmount(_:_:_:_:_:)](https://developer.apple.com/documentation/diskarbitration/dadiskmount(_:_:_:_:_:))

# DADiskMount(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Mounts the volume at the specified disk object.

## Declaration

```swift
func DADiskMount(_ disk: DADisk, _ path: CFURL?, _ options: DADiskMountOptions, _ callback: DADiskMountCallback?, _ context: UnsafeMutableRawPointer?)
```

## Parameters

- `disk`: The disk object.
- `path`: The mount path. Pass NULL for a “standard” mount path.
- `options`: The mount options.
- `callback`: The callback function to call once the mount completes.
- `context`: The user-defined context parameter to pass to the callback function.

## See Also

### Miscellaneous

- [DADiskClaim(\_:\_:\_:\_:\_:\_:)](dadiskclaim%28____________%29.md): Claims the specified disk object for exclusive use.
- [DADiskEject(\_:\_:\_:\_:)](dadiskeject%28________%29.md): Ejects the specified disk object.
- [DADiskGetOptions(\_:)](dadiskgetoptions%28__%29.md): Obtains the options for the specified disk.
- [DADiskIsClaimed(\_:)](dadiskisclaimed%28__%29.md): Reports whether or not the disk is claimed.
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

# DADiskMount (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Mounts the volume at the specified disk object.

## Declaration

```objectivec
extern void DADiskMount(DADiskRef disk, CFURLRef path, DADiskMountOptions options, DADiskMountCallback callback, void *context);
```

## Parameters

- `disk`: The disk object.
- `path`: The mount path. Pass NULL for a “standard” mount path.
- `options`: The mount options.
- `callback`: The callback function to call once the mount completes.
- `context`: The user-defined context parameter to pass to the callback function.

## See Also

### Miscellaneous

- [DADiskClaim](dadiskclaim%28____________%29.md): Claims the specified disk object for exclusive use.
- [DADiskEject](dadiskeject%28________%29.md): Ejects the specified disk object.
- [DADiskGetOptions](dadiskgetoptions%28__%29.md): Obtains the options for the specified disk.
- [DADiskIsClaimed](dadiskisclaimed%28__%29.md): Reports whether or not the disk is claimed.
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
