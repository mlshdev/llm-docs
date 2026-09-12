> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/metadatapurge(_:)](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/metadatapurge(_:))

# metadataPurge(\_:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronously purges the given ranges from the buffer cache.

## Declaration

```swift
func metadataPurge(_ rangesToPurge: [FSMetadataRange]) throws
```

## Parameters

- `rangesToPurge`: The metadata ranges to purge.

<a id="discussion"></a>

## Discussion

This method removes the given ranges from the resource’s buffer cache. This process drops any dirty data in the cache, preventing the data from reaching the device.

## See Also

### Reading and writing data with kernel buffer cache

- [metadataRead(into:startingAt:length:)](metadataread%28into_startingat_length_%29.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWrite(from:startingAt:length:)](metadatawrite%28from_startingat_length_%29.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWrite(from:startingAt:length:)](delayedmetadatawrite%28from_startingat_length_%29.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [metadataFlush()](metadataflush%28%29.md): Synchronously flushes the resource’s buffer cache.
- [asynchronousMetadataFlush()](asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataClear(\_:withDelayedWrites:)](metadataclear%28__withdelayedwrites_%29.md): Clears the given ranges within the buffer cache.
- [FSMetadataRange](../fsmetadatarange.md): A range that describes contiguous metadata segments on disk.

# metadataPurge:error: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronously purges the given ranges from the buffer cache.

## Declaration

```objectivec
- (BOOL) metadataPurge:(NSArray<FSMetadataRange *> *) rangesToPurge error:(NSError **) error;
```

## Parameters

- `rangesToPurge`: The metadata ranges to purge.
- `error`: On return, any error encountered while writing data, or `nil` if no error occurred. This value is `EINVAL` if `rangesToPurge` is invalid.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether purging the metadata succeeded.

<a id="discussion"></a>

## Discussion

This method removes the given ranges from the resource’s buffer cache. This process drops any dirty data in the cache, preventing the data from reaching the device.

## See Also

### Reading and writing data with kernel buffer cache

- [metadataReadInto:startingAt:length:error:](metadatareadinto_startingat_length_error_.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWriteFrom:startingAt:length:error:](metadatawritefrom_startingat_length_error_.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWriteFrom:startingAt:length:error:](delayedmetadatawritefrom_startingat_length_error_.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [metadataFlushWithError:](metadataflush%28%29.md): Synchronously flushes the resource’s buffer cache.
- [asynchronousMetadataFlushWithError:](asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataClear:withDelayedWrites:error:](metadataclear%28__withdelayedwrites_%29.md): Clears the given ranges within the buffer cache.
- [FSMetadataRange](../fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
