> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/metadataread(into:startingat:length:)](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/metadataread(into:startingat:length:))

# metadataRead(into:startingAt:length:)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronously reads file system metadata from the resource into a buffer.

## Declaration

```swift
func metadataRead(into buffer: UnsafeMutableRawBufferPointer, startingAt offset: off_t, length: Int) throws
```

## Parameters

- `buffer`: A buffer to receive the data.
- `offset`: The offset into the resource from which to start reading.
- `length`: The number of bytes to read.

<a id="discussion"></a>

## Discussion

This method provides access to the Kernel Buffer Cache, which is the primary system cache for file system metadata. Unlike equivalent kernel APIs, this method doesn’t hold any kernel-level claim to the underlying buffers.

For the read to succeed, requests must conform to any transfer requirements of the underlying resource. Disk drives typically require sector-addressed operations of one or more sector-aligned offsets, where a sector equals `physicalBlockSize`.

This method doesn’t support partial reading of metadata.

> **Throws**

> Any error encountered while reading data.

## See Also

### Reading and writing data with kernel buffer cache

- [metadataWrite(from:startingAt:length:)](metadatawrite%28from_startingat_length_%29.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWrite(from:startingAt:length:)](delayedmetadatawrite%28from_startingat_length_%29.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [metadataFlush()](metadataflush%28%29.md): Synchronously flushes the resource’s buffer cache.
- [asynchronousMetadataFlush()](asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataClear(\_:withDelayedWrites:)](metadataclear%28__withdelayedwrites_%29.md): Clears the given ranges within the buffer cache.
- [metadataPurge(\_:)](metadatapurge%28__%29.md): Synchronously purges the given ranges from the buffer cache.
- [FSMetadataRange](../fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
