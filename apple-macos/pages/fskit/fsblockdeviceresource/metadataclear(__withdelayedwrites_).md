> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/metadataclear(_:withdelayedwrites:)](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/metadataclear(_:withdelayedwrites:))

# metadataClear(\_:withDelayedWrites:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Clears the given ranges within the buffer cache.

## Declaration

```swift
func metadataClear(_ rangesToClear: [FSMetadataRange], withDelayedWrites: Bool) throws
```

## Parameters

- `rangesToClear`: The metadata ranges to clear.
- `withDelayedWrites`: A Boolean value that determines whether to perform the clear operation with delayed writes. The delay works in the same manner as [delayedMetadataWriteFrom:startingAt:length:error:](delayedmetadatawritefrom_startingat_length_error_.md). When using delayed writes, the client can flush the metadata with [metadataFlush()](metadataflush%28%29.md) or [asynchronousMetadataFlush()](asynchronousmetadataflush%28%29.md). The system also flushes stale data in the buffer cache periodically.

<a id="discussion"></a>

## Discussion

This method clears the specified ranges in the resource’s buffer cache by writing zeroes into them.

## See Also

### Reading and writing data with kernel buffer cache

- [metadataRead(into:startingAt:length:)](metadataread%28into_startingat_length_%29.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWrite(from:startingAt:length:)](metadatawrite%28from_startingat_length_%29.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWrite(from:startingAt:length:)](delayedmetadatawrite%28from_startingat_length_%29.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [metadataFlush()](metadataflush%28%29.md): Synchronously flushes the resource’s buffer cache.
- [asynchronousMetadataFlush()](asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataPurge(\_:)](metadatapurge%28__%29.md): Synchronously purges the given ranges from the buffer cache.
- [FSMetadataRange](../fsmetadatarange.md): A range that describes contiguous metadata segments on disk.

# metadataClear:withDelayedWrites:error: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Clears the given ranges within the buffer cache.

## Declaration

```objectivec
- (BOOL) metadataClear:(NSArray<FSMetadataRange *> *) rangesToClear withDelayedWrites:(BOOL) withDelayedWrites error:(NSError **) error;
```

## Parameters

- `rangesToClear`: The metadata ranges to clear.
- `withDelayedWrites`: A Boolean value that determines whether to perform the clear operation with delayed writes. The delay works in the same manner as [delayedMetadataWriteFrom:startingAt:length:error:](delayedmetadatawritefrom_startingat_length_error_.md). When using delayed writes, the client can flush the metadata with [metadataFlushWithError:](metadataflush%28%29.md) or [asynchronousMetadataFlushWithError:](asynchronousmetadataflush%28%29.md). The system also flushes stale data in the buffer cache periodically.
- `error`: On return, any error encountered while writing data, or `nil` if no error occurred. This value is `EINVAL` if `rangesToClear` is invalid.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether clearing the metadata succeeded.

<a id="discussion"></a>

## Discussion

This method clears the specified ranges in the resource’s buffer cache by writing zeroes into them.

## See Also

### Reading and writing data with kernel buffer cache

- [metadataReadInto:startingAt:length:error:](metadatareadinto_startingat_length_error_.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWriteFrom:startingAt:length:error:](metadatawritefrom_startingat_length_error_.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWriteFrom:startingAt:length:error:](delayedmetadatawritefrom_startingat_length_error_.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [metadataFlushWithError:](metadataflush%28%29.md): Synchronously flushes the resource’s buffer cache.
- [asynchronousMetadataFlushWithError:](asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataPurge:error:](metadatapurge%28__%29.md): Synchronously purges the given ranges from the buffer cache.
- [FSMetadataRange](../fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
