> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskcopywholedisk(_:)](https://developer.apple.com/documentation/diskarbitration/dadiskcopywholedisk(_:))

# DADiskCopyWholeDisk(\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtain the associated whole disk object for the specified disk.

## Declaration

```swift
func DADiskCopyWholeDisk(_ disk: DADisk) -> DADisk?
```

## Parameters

- `disk`: The disk object.

<a id="return-value"></a>

## Return Value

The disk’s associated whole disk object.

<a id="Discussion"></a>

## Discussion

The caller of this function receives a reference to the returned object. The caller also implicitly retains the object and is responsible for releasing it with CFRelease().

## See Also

### Miscellaneous

- [DADiskCopyDescription(\_:)](dadiskcopydescription%28__%29.md): Obtains the Disk Arbitration description of the specified disk.
- [DADiskCopyIOMedia(\_:)](dadiskcopyiomedia%28__%29.md): Obtains the I/O Kit media object for the specified disk.
- [DADiskCreateFromBSDName(\_:\_:\_:)](dadiskcreatefrombsdname%28______%29.md): Creates a new disk object.
- [DADiskCreateFromIOMedia(\_:\_:\_:)](dadiskcreatefromiomedia%28______%29.md): Creates a new disk object.
- [DADiskCreateFromVolumePath(\_:\_:\_:)](dadiskcreatefromvolumepath%28______%29.md): Creates a new disk object.
- [DADiskGetBSDName(\_:)](dadiskgetbsdname%28__%29.md): Obtains the BSD device name for the specified disk.
- [DADiskGetTypeID()](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.

# DADiskCopyWholeDisk (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtain the associated whole disk object for the specified disk.

## Declaration

```objectivec
extern DADiskRefDADiskCopyWholeDisk(DADiskRef disk);
```

## Parameters

- `disk`: The disk object.

<a id="return-value"></a>

## Return Value

The disk’s associated whole disk object.

<a id="Discussion"></a>

## Discussion

The caller of this function receives a reference to the returned object. The caller also implicitly retains the object and is responsible for releasing it with CFRelease().

## See Also

### Miscellaneous

- [DADiskCopyDescription](dadiskcopydescription%28__%29.md): Obtains the Disk Arbitration description of the specified disk.
- [DADiskCopyIOMedia](dadiskcopyiomedia%28__%29.md): Obtains the I/O Kit media object for the specified disk.
- [DADiskCreateFromBSDName](dadiskcreatefrombsdname%28______%29.md): Creates a new disk object.
- [DADiskCreateFromIOMedia](dadiskcreatefromiomedia%28______%29.md): Creates a new disk object.
- [DADiskCreateFromVolumePath](dadiskcreatefromvolumepath%28______%29.md): Creates a new disk object.
- [DADiskGetBSDName](dadiskgetbsdname%28__%29.md): Obtains the BSD device name for the specified disk.
- [DADiskGetTypeID](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.
