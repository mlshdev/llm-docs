> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/iswritable](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/iswritable)

# isWritable (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the resource can write data to the device.

## Declaration

```swift
var isWritable: Bool { get }
```

## See Also

### Accessing resource properties

- [bsdName](bsdname.md): The device name of the resource.
- [blockCount](blockcount.md): The block count on this resource.
- [blockSize](blocksize.md): The logical block size, the size of data blocks used by the file system.
- [physicalBlockSize](physicalblocksize.md): The sector size of the device.

# writable (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the resource can write data to the device.

## Declaration

```objectivec
@property (readonly, getter=isWritable) BOOL writable;
```

## See Also

### Accessing resource properties

- [BSDName](bsdname.md): The device name of the resource.
- [blockCount](blockcount.md): The block count on this resource.
- [blockSize](blocksize.md): The logical block size, the size of data blocks used by the file system.
- [physicalBlockSize](physicalblocksize.md): The sector size of the device.
