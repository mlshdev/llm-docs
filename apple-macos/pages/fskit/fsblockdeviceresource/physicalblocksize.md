> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/physicalblocksize](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/physicalblocksize)

# physicalBlockSize (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The sector size of the device.

## Declaration

```swift
var physicalBlockSize: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

This is equivalent to the `DKIOCGETPHYSICALBLOCKSIZE` device parameter.

## See Also

### Accessing resource properties

- [bsdName](bsdname.md): The device name of the resource.
- [isWritable](iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockCount](blockcount.md): The block count on this resource.
- [blockSize](blocksize.md): The logical block size, the size of data blocks used by the file system.

# physicalBlockSize (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The sector size of the device.

## Declaration

```objectivec
@property (readonly) uint64_t physicalBlockSize;
```

<a id="discussion"></a>

## Discussion

This is equivalent to the `DKIOCGETPHYSICALBLOCKSIZE` device parameter.

## See Also

### Accessing resource properties

- [BSDName](bsdname.md): The device name of the resource.
- [writable](iswritable.md): A Boolean property that indicates whether the resource can write data to the device.
- [blockCount](blockcount.md): The block count on this resource.
- [blockSize](blocksize.md): The logical block size, the size of data blocks used by the file system.
