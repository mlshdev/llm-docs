> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/blockcount](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/blockcount)

# blockCount (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The block count on this resource.

## Declaration

```swift
var blockCount: UInt64 { get }
```

## See Also

### Accessing resource properties

- [bsdName](bsdname.md): The device name of the resource.
- [isWritable](iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockSize](blocksize.md): The logical block size, the size of data blocks used by the file system.
- [physicalBlockSize](physicalblocksize.md): The sector size of the device.

# blockCount (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The block count on this resource.

## Declaration

```objectivec
@property (readonly) uint64_t blockCount;
```

## See Also

### Accessing resource properties

- [BSDName](bsdname.md): The device name of the resource.
- [writable](iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockSize](blocksize.md): The logical block size, the size of data blocks used by the file system.
- [physicalBlockSize](physicalblocksize.md): The sector size of the device.
