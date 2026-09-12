> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/read(into:startingat:length:)-5yozi](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/read(into:startingat:length:)-5yozi)

# read(into:startingAt:length:)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Asychronously reads data from the resource into a buffer.

## Declaration

```swift
func read(into buffer: UnsafeMutableRawBufferPointer, startingAt offset: off_t, length: Int) async throws -> Int
```

## Parameters

- `buffer`: A buffer to receive the data.
- `offset`: The offset into the resource from which to start reading.
- `length`: A maximum number of bytes to read. The completion handler receives a parameter with the actual number of bytes read.

<a id="return-value"></a>

## Return Value

The actual number of bytes read.

<a id="discussion"></a>

## Discussion

For the read to succeed, requests must conform to any transfer requirements of the underlying resource. Disk drives typically require sector (`physicalBlockSize`) addressed operations of one or more sector-aligned offsets.

> **Throws**

> An error describing any read error. This value is `EFAULT` if `buffer` is `NULL`, or `errno` if reading from the resource failed.

## See Also

### Reading and writing data

- [read(into:startingAt:length:)](read%28into_startingat_length_%29-4ax6s.md): Synchronously reads data from the resource into a buffer.
- [read(into:startingAt:length:completionHandler:)](read%28into_startingat_length_completionhandler_%29.md): Reads data from the resource into a buffer and executes a closure afterwards.
- [write(from:startingAt:length:)](write%28from_startingat_length_%29-2fmgt.md): Synchronously writes data from from a buffer to the resource and executes a block afterwards.
- [write(from:startingAt:length:)](write%28from_startingat_length_%29-9oa1x.md): Asynchronously writes data from from a buffer to the resource.
- [write(from:startingAt:length:completionHandler:)](write%28from_startingat_length_completionhandler_%29.md): Writes data from from a buffer to the resource and executes a closure afterwards.
