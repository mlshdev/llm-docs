> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/truncate(blockcount:)](https://developer.apple.com/documentation/diskimagekit/diskimage/truncate(blockcount:))

# truncate(blockCount:)

**Framework:** DiskImageKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Truncate or extend the disk image to a new size.

## Declaration

```swift
func truncate(blockCount: Int) throws
```

## Parameters

- `blockCount`: The new size in blocks for the disk image. `blockCount` must be greater than zero.

<a id="discussion"></a>

## Discussion

This changes the size of the disk image itself, but not its contents, such as file systems, partition map, and so on. Shrinking the disk image may cause data loss if the file system inside it exceeds the new size. The image must not be a cache image. For a stacked disk image, the top layer is truncated, as the stack size equals to its top layer’s size.

> **Throws**

> [InvalidBlockCountError](../invalidblockcounterror.md) if the block count is zero or negative. `POSIXError` if the truncate operation fails.
