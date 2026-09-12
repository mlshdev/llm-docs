> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/daunregisterapprovalcallback](https://developer.apple.com/documentation/diskarbitration/daunregisterapprovalcallback)

# DAUnregisterApprovalCallback

**Interface language:** Objective-C

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Unregisters a registered callback function.

## Declaration

```objectivec
extern void DAUnregisterApprovalCallback(DASessionRef session, void *callback, void *context);
```

## Parameters

- `session`: The session object.
- `callback`: The registered callback function.
- `context`: The user-defined context parameter.

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
- [DADiskUnclaim](dadiskunclaim%28__%29.md): Unclaims the specified disk object.
- [DADiskUnmount](dadiskunmount%28________%29.md): Unmounts the volume at the specified disk object.
- [DARegisterDiskAppearedCallback](daregisterdiskappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has appeared.
- [DARegisterDiskDescriptionChangedCallback](daregisterdiskdescriptionchangedcallback%28__________%29.md): Registers a callback function to be called whenever a disk description has changed.
- [DARegisterDiskDisappearedCallback](daregisterdiskdisappearedcallback%28________%29.md): Registers a callback function to be called whenever a disk has disappeared.
- [DARegisterDiskEjectApprovalCallback](daregisterdiskejectapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be ejected.
- [DARegisterDiskMountApprovalCallback](daregisterdiskmountapprovalcallback%28________%29.md): Registers a callback function to be called whenever a volume is to be mounted.
