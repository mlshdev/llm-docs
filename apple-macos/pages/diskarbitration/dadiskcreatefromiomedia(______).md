> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskcreatefromiomedia(_:_:_:)](https://developer.apple.com/documentation/diskarbitration/dadiskcreatefromiomedia(_:_:_:))

# DADiskCreateFromIOMedia(\_:\_:\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Creates a new disk object.

## Declaration

```swift
func DADiskCreateFromIOMedia(_ allocator: CFAllocator?, _ session: DASession, _ media: io_service_t) -> DADisk?
```

## Parameters

- `allocator`: The allocator object to be used to allocate memory.
- `session`: The DASession in which to contact Disk Arbitration.
- `media`: The I/O Kit media object.

<a id="return-value"></a>

## Return Value

A reference to a new DADisk.

<a id="Discussion"></a>

## Discussion

The caller of this function receives a reference to the returned object. The caller also implicitly retains the object and is responsible for releasing it with CFRelease().

## See Also

### Miscellaneous

- [DADiskCopyDescription(\_:)](dadiskcopydescription%28__%29.md): Obtains the Disk Arbitration description of the specified disk.
- [DADiskCopyIOMedia(\_:)](dadiskcopyiomedia%28__%29.md): Obtains the I/O Kit media object for the specified disk.
- [DADiskCopyWholeDisk(\_:)](dadiskcopywholedisk%28__%29.md): Obtain the associated whole disk object for the specified disk.
- [DADiskCreateFromBSDName(\_:\_:\_:)](dadiskcreatefrombsdname%28______%29.md): Creates a new disk object.
- [DADiskCreateFromVolumePath(\_:\_:\_:)](dadiskcreatefromvolumepath%28______%29.md): Creates a new disk object.
- [DADiskGetBSDName(\_:)](dadiskgetbsdname%28__%29.md): Obtains the BSD device name for the specified disk.
- [DADiskGetTypeID()](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.

# DADiskCreateFromIOMedia (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Creates a new disk object.

## Declaration

```objectivec
extern DADiskRefDADiskCreateFromIOMedia(CFAllocatorRef allocator, DASessionRef session, io_service_t media);
```

## Parameters

- `allocator`: The allocator object to be used to allocate memory.
- `session`: The DASession in which to contact Disk Arbitration.
- `media`: The I/O Kit media object.

<a id="return-value"></a>

## Return Value

A reference to a new DADisk.

<a id="Discussion"></a>

## Discussion

The caller of this function receives a reference to the returned object. The caller also implicitly retains the object and is responsible for releasing it with CFRelease().

## See Also

### Miscellaneous

- [DADiskCopyDescription](dadiskcopydescription%28__%29.md): Obtains the Disk Arbitration description of the specified disk.
- [DADiskCopyIOMedia](dadiskcopyiomedia%28__%29.md): Obtains the I/O Kit media object for the specified disk.
- [DADiskCopyWholeDisk](dadiskcopywholedisk%28__%29.md): Obtain the associated whole disk object for the specified disk.
- [DADiskCreateFromBSDName](dadiskcreatefrombsdname%28______%29.md): Creates a new disk object.
- [DADiskCreateFromVolumePath](dadiskcreatefromvolumepath%28______%29.md): Creates a new disk object.
- [DADiskGetBSDName](dadiskgetbsdname%28__%29.md): Obtains the BSD device name for the specified disk.
- [DADiskGetTypeID](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.
