> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/bsdname](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/bsdname)

# bsdName (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The device name of the resource.

## Declaration

```swift
var bsdName: String { get }
```

## See Also

### Accessing resource properties

- [isWritable](iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockCount](blockcount.md): The block count on this resource.
- [blockSize](blocksize.md): The logical block size, the size of data blocks used by the file system.
- [physicalBlockSize](physicalblocksize.md): The sector size of the device.

# BSDName (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The device name of the resource.

## Declaration

```objectivec
@property (copy, readonly) NSString * BSDName;
```

## See Also

### Accessing resource properties

- [writable](iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockCount](blockcount.md): The block count on this resource.
- [blockSize](blocksize.md): The logical block size, the size of data blocks used by the file system.
- [physicalBlockSize](physicalblocksize.md): The sector size of the device.
