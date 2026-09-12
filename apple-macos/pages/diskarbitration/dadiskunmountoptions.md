> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskunmountoptions](https://developer.apple.com/documentation/diskarbitration/dadiskunmountoptions)

# DADiskUnmountOptions (Swift)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Options for DADiskUnmount().

## Declaration

```swift
typealias DADiskUnmountOptions = UInt32
```

## Topics

### Constants

- [kDADiskUnmountOptionForce](kdadiskunmountoptionforce.md): Unmount the volume even if files are still active.
- [kDADiskUnmountOptionWhole](kdadiskunmountoptionwhole.md): Unmount the volumes tied to the whole disk object.

## See Also

### Data Types

- [DADiskClaimOptions](dadiskclaimoptions.md): Options for DADiskClaim().
- [DADiskEjectOptions](dadiskejectoptions.md): Options for DADiskEject().
- [DADiskMountOptions](dadiskmountoptions.md): Options for DADiskMount().
- [DADiskOptions](dadiskoptions.md): Options for DADiskGetOptions() and DADiskSetOptions().
- [DADiskRenameOptions](dadiskrenameoptions.md): Options for DADiskRename().
- [DAReturn](dareturn.md): A return code.

# DADiskUnmountOptions (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Options for DADiskUnmount().

## Declaration

```objectivec
typedef UInt32 DADiskUnmountOptions;
```

## Topics

### Constants

- [kDADiskUnmountOptionForce](kdadiskunmountoptionforce.md): Unmount the volume even if files are still active.
- [kDADiskUnmountOptionWhole](kdadiskunmountoptionwhole.md): Unmount the volumes tied to the whole disk object.

## See Also

### Data Types

- [DAApprovalSessionRef](daapprovalsessionref.md)
- [DADiskClaimOptions](dadiskclaimoptions.md): Options for DADiskClaim().
- [DADiskEjectOptions](dadiskejectoptions.md): Options for DADiskEject().
- [DADiskMountOptions](dadiskmountoptions.md): Options for DADiskMount().
- [DADiskOptions](dadiskoptions.md): Options for DADiskGetOptions() and DADiskSetOptions().
- [DADiskRenameOptions](dadiskrenameoptions.md): Options for DADiskRename().
- [DAReturn](dareturn.md): A return code.
