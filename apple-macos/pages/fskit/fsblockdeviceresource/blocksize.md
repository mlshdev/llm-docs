> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/blocksize](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/blocksize)

# blockSize (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The logical block size, the size of data blocks used by the file system.

## Declaration

```swift
var blockSize: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

This is equivalent to the `DKIOCGETBLOCKSIZE` device parameter.

## See Also

### Accessing resource properties

- [bsdName](bsdname.md): The device name of the resource.
- [isWritable](iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockCount](blockcount.md): The block count on this resource.
- [physicalBlockSize](physicalblocksize.md): The sector size of the device.

# blockSize (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The logical block size, the size of data blocks used by the file system.

## Declaration

```objectivec
@property (readonly) uint64_t blockSize;
```

<a id="discussion"></a>

## Discussion

This is equivalent to the `DKIOCGETBLOCKSIZE` device parameter.

## See Also

### Accessing resource properties

- [BSDName](bsdname.md): The device name of the resource.
- [writable](iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockCount](blockcount.md): The block count on this resource.
- [physicalBlockSize](physicalblocksize.md): The sector size of the device.
