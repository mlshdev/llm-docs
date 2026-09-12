> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/size](https://developer.apple.com/documentation/diskimagekit/diskimage/size)

# size

**Framework:** DiskImageKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The logical size of the disk image in bytes.

## Declaration

```swift
var size: Int { get }
```

<a id="discussion"></a>

## Discussion

This is equivalent to [blockCount](blockcount.md) × [blockSize](blocksize-swift.property.md).
