> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadiskcreatefromvolumepath(_:_:_:)](https://developer.apple.com/documentation/diskarbitration/dadiskcreatefromvolumepath(_:_:_:))

# DADiskCreateFromVolumePath(\_:\_:\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Creates a new disk object.

## Declaration

```swift
func DADiskCreateFromVolumePath(_ allocator: CFAllocator?, _ session: DASession, _ path: CFURL) -> DADisk?
```

## Parameters

- `allocator`: The allocator object to be used to allocate memory.
- `session`: The DASession in which to contact Disk Arbitration.
- `path`: The BSD mount point.

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
- [DADiskCreateFromIOMedia(\_:\_:\_:)](dadiskcreatefromiomedia%28______%29.md): Creates a new disk object.
- [DADiskGetBSDName(\_:)](dadiskgetbsdname%28__%29.md): Obtains the BSD device name for the specified disk.
- [DADiskGetTypeID()](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.

# DADiskCreateFromVolumePath (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Creates a new disk object.

## Declaration

```objectivec
extern DADiskRefDADiskCreateFromVolumePath(CFAllocatorRef allocator, DASessionRef session, CFURLRef path);
```

## Parameters

- `allocator`: The allocator object to be used to allocate memory.
- `session`: The DASession in which to contact Disk Arbitration.
- `path`: The BSD mount point.

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
- [DADiskCreateFromIOMedia](dadiskcreatefromiomedia%28______%29.md): Creates a new disk object.
- [DADiskGetBSDName](dadiskgetbsdname%28__%29.md): Obtains the BSD device name for the specified disk.
- [DADiskGetTypeID](dadiskgettypeid%28%29.md): Returns the type identifier of all DADisk instances.
