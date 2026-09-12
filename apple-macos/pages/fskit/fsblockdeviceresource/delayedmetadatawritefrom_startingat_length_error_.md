> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/delayedmetadatawritefrom:startingat:length:error:](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/delayedmetadatawritefrom:startingat:length:error:)

# delayedMetadataWriteFrom:startingAt:length:error:

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.

## Declaration

```objectivec
- (BOOL) delayedMetadataWriteFrom:(void *) buffer startingAt:(off_t) offset length:(size_t) length error:(NSError **) error;
```

## Parameters

- `buffer`: A buffer to provide the data.
- `offset`: The offset into the resource from which to start writing.
- `length`: The number of bytes to writing.
- `error`: On return, any error encountered while writing data, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the metadata write succeeded.

<a id="discussion"></a>

## Discussion

This method provides access to the Kernel Buffer Cache, which is the primary system cache for file system metadata. Unlike equivalent kernel APIs, this method doesn’t hold any kernel-level claim to the underlying buffers.

This method is equivalent to [metadataWriteFrom:startingAt:length:error:](metadatawritefrom_startingat_length_error_.md), except that it writes data to the resource’s buffer cache instead of writing to disk immediately. To ensure writing data to disk, the client must flush the metadata by calling [metadataFlushWithError:](metadataflush%28%29.md) or [asynchronousMetadataFlushWithError:](asynchronousmetadataflush%28%29.md).

Delayed writes offer two significant advantages:

- Delayed writes are more performant, since the file system can avoid waiting for the actual write, reducing I/O latency.
- When writing to a specific range repeatedly, delayed writes allow the file system to flush data to the disk only when necessary. This reduces disk usage by eliminating unnecessary writes.

For the write to succeed, requests must conform to any transfer requirements of the underlying resource. Disk drives typically require sector (`physicalBlockSize`) addressed operations of one or more sector-aligned offsets.

> **Important**

> The Kernel Buffer Cache is keyed by offset alone and doesn’t detect overlapping byte ranges between buffers. As a result, the byte ranges of any two metadata operations must never intersect. All accesses to a given disk region must use the same (offset, length) pair.

## See Also

### Reading and writing data with kernel buffer cache

- [metadataReadInto:startingAt:length:error:](metadatareadinto_startingat_length_error_.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWriteFrom:startingAt:length:error:](metadatawritefrom_startingat_length_error_.md): Synchronously writes file system metadata from a buffer to the resource.
- [metadataFlushWithError:](metadataflush%28%29.md): Synchronously flushes the resource’s buffer cache.
- [asynchronousMetadataFlushWithError:](asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataClear:withDelayedWrites:error:](metadataclear%28__withdelayedwrites_%29.md): Clears the given ranges within the buffer cache.
- [metadataPurge:error:](metadatapurge%28__%29.md): Synchronously purges the given ranges from the buffer cache.
- [FSMetadataRange](../fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
