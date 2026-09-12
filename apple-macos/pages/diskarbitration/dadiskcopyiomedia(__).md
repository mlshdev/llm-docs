> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskcopyiomedia(_:)](https://developer.apple.com/documentation/diskarbitration/dadiskcopyiomedia(_:))

# DADiskCopyIOMedia(\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtains the I/O Kit media object for the specified disk.

## Declaration

```swift
func DADiskCopyIOMedia(_ disk: DADisk) -> io_service_t
```

## Parameters

- `disk`: The DADisk for which to obtain the I/O Kit media object.

<a id="return-value"></a>

## Return Value

The disk’s I/O Kit media object.

<a id="Discussion"></a>

## Discussion

The caller of this function receives a reference to the returned object. The caller also implicitly retains the object and is responsible for releasing it with IOObjectRelease().

## See Also

### Miscellaneous

- [DADiskCopyDescription(\_:)](dadiskcopydescription%28__%29.md): Obtains the Disk Arbitration description of the specified disk.
- [DADiskCopyWholeDisk(\_:)](dadiskcopywholedisk%28__%29.md): Obtain the associated whole disk object for the specified disk.
- [DADiskCreateFromBSDName(\_:\_:\_:)](dadiskcreatefrombsdname%28______%29.md): Creates a new disk object.
- [DADiskCreateFromIOMedia(\_:\_:\_:)](dadiskcreatefromiomedia%28______%29.md): Creates a new disk object.
- [DADiskCreateFromVolumePath(\_:\_:\_:)](dadiskcreatefromvolumepath%28______%29.md): Creates a new disk object.
- [DADiskGetBSDName(\_:)](dadiskgetbsdname%28__%29.md): Obtains the BSD device name for the specified disk.
- [DADiskGetTypeID()](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.

# DADiskCopyIOMedia (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtains the I/O Kit media object for the specified disk.

## Declaration

```objectivec
extern io_service_t DADiskCopyIOMedia(DADiskRef disk);
```

## Parameters

- `disk`: The DADisk for which to obtain the I/O Kit media object.

<a id="return-value"></a>

## Return Value

The disk’s I/O Kit media object.

<a id="Discussion"></a>

## Discussion

The caller of this function receives a reference to the returned object. The caller also implicitly retains the object and is responsible for releasing it with IOObjectRelease().

## See Also

### Miscellaneous

- [DADiskCopyDescription](dadiskcopydescription%28__%29.md): Obtains the Disk Arbitration description of the specified disk.
- [DADiskCopyWholeDisk](dadiskcopywholedisk%28__%29.md): Obtain the associated whole disk object for the specified disk.
- [DADiskCreateFromBSDName](dadiskcreatefrombsdname%28______%29.md): Creates a new disk object.
- [DADiskCreateFromIOMedia](dadiskcreatefromiomedia%28______%29.md): Creates a new disk object.
- [DADiskCreateFromVolumePath](dadiskcreatefromvolumepath%28______%29.md): Creates a new disk object.
- [DADiskGetBSDName](dadiskgetbsdname%28__%29.md): Obtains the BSD device name for the specified disk.
- [DADiskGetTypeID](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.
