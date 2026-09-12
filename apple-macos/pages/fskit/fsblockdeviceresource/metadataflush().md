> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/metadataflush()](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/metadataflush())

# metadataFlush() (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronously flushes the resource’s buffer cache.

## Declaration

```swift
func metadataFlush() throws
```

<a id="discussion"></a>

## Discussion

This method flushes data previously written with [delayedMetadataWriteFrom:startingAt:length:error:](delayedmetadatawritefrom_startingat_length_error_.md) to the resource.

## See Also

### Reading and writing data with kernel buffer cache

- [metadataRead(into:startingAt:length:)](metadataread%28into_startingat_length_%29.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWrite(from:startingAt:length:)](metadatawrite%28from_startingat_length_%29.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWrite(from:startingAt:length:)](delayedmetadatawrite%28from_startingat_length_%29.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [asynchronousMetadataFlush()](asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataClear(\_:withDelayedWrites:)](metadataclear%28__withdelayedwrites_%29.md): Clears the given ranges within the buffer cache.
- [metadataPurge(\_:)](metadatapurge%28__%29.md): Synchronously purges the given ranges from the buffer cache.
- [FSMetadataRange](../fsmetadatarange.md): A range that describes contiguous metadata segments on disk.

# metadataFlushWithError: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronously flushes the resource’s buffer cache.

## Declaration

```objectivec
- (BOOL) metadataFlushWithError:(NSError **) error;
```

## Parameters

- `error`: On return, any error encountered while writing data, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the metadata flush succeeded.

<a id="discussion"></a>

## Discussion

This method flushes data previously written with [delayedMetadataWriteFrom:startingAt:length:error:](delayedmetadatawritefrom_startingat_length_error_.md) to the resource.

## See Also

### Reading and writing data with kernel buffer cache

- [metadataReadInto:startingAt:length:error:](metadatareadinto_startingat_length_error_.md): Synchronously reads file system metadata from the resource into a buffer.
- [metadataWriteFrom:startingAt:length:error:](metadatawritefrom_startingat_length_error_.md): Synchronously writes file system metadata from a buffer to the resource.
- [delayedMetadataWriteFrom:startingAt:length:error:](delayedmetadatawritefrom_startingat_length_error_.md): Writes file system metadata from a buffer to a cache, prior to flushing it to the resource.
- [asynchronousMetadataFlushWithError:](asynchronousmetadataflush%28%29.md): Asynchronously flushes the resource’s buffer cache.
- [metadataClear:withDelayedWrites:error:](metadataclear%28__withdelayedwrites_%29.md): Clears the given ranges within the buffer cache.
- [metadataPurge:error:](metadatapurge%28__%29.md): Synchronously purges the given ranges from the buffer cache.
- [FSMetadataRange](../fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
