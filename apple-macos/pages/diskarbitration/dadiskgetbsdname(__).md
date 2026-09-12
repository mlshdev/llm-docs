> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskgetbsdname(_:)](https://developer.apple.com/documentation/diskarbitration/dadiskgetbsdname(_:))

# DADiskGetBSDName(\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtains the BSD device name for the specified disk.

## Declaration

```swift
func DADiskGetBSDName(_ disk: DADisk) -> UnsafePointer<CChar>?
```

## Parameters

- `disk`: The DADisk for which to obtain the BSD device name.

<a id="return-value"></a>

## Return Value

The disk’s BSD device name.

<a id="Discussion"></a>

## Discussion

The BSD device name can be used with opendev() to open the BSD device.

## See Also

### Miscellaneous

- [DADiskCopyDescription(\_:)](dadiskcopydescription%28__%29.md): Obtains the Disk Arbitration description of the specified disk.
- [DADiskCopyIOMedia(\_:)](dadiskcopyiomedia%28__%29.md): Obtains the I/O Kit media object for the specified disk.
- [DADiskCopyWholeDisk(\_:)](dadiskcopywholedisk%28__%29.md): Obtain the associated whole disk object for the specified disk.
- [DADiskCreateFromBSDName(\_:\_:\_:)](dadiskcreatefrombsdname%28______%29.md): Creates a new disk object.
- [DADiskCreateFromIOMedia(\_:\_:\_:)](dadiskcreatefromiomedia%28______%29.md): Creates a new disk object.
- [DADiskCreateFromVolumePath(\_:\_:\_:)](dadiskcreatefromvolumepath%28______%29.md): Creates a new disk object.
- [DADiskGetTypeID()](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.

# DADiskGetBSDName (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtains the BSD device name for the specified disk.

## Declaration

```objectivec
extern const char *DADiskGetBSDName(DADiskRef disk);
```

## Parameters

- `disk`: The DADisk for which to obtain the BSD device name.

<a id="return-value"></a>

## Return Value

The disk’s BSD device name.

<a id="Discussion"></a>

## Discussion

The BSD device name can be used with opendev() to open the BSD device.

## See Also

### Miscellaneous

- [DADiskCopyDescription](dadiskcopydescription%28__%29.md): Obtains the Disk Arbitration description of the specified disk.
- [DADiskCopyIOMedia](dadiskcopyiomedia%28__%29.md): Obtains the I/O Kit media object for the specified disk.
- [DADiskCopyWholeDisk](dadiskcopywholedisk%28__%29.md): Obtain the associated whole disk object for the specified disk.
- [DADiskCreateFromBSDName](dadiskcreatefrombsdname%28______%29.md): Creates a new disk object.
- [DADiskCreateFromIOMedia](dadiskcreatefromiomedia%28______%29.md): Creates a new disk object.
- [DADiskCreateFromVolumePath](dadiskcreatefromvolumepath%28______%29.md): Creates a new disk object.
- [DADiskGetTypeID](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.
