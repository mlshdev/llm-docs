> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/read(into:startingat:length:completionhandler:)](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/read(into:startingat:length:completionhandler:))

# read(into:startingAt:length:completionHandler:)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Reads data from the resource into a buffer and executes a closure afterwards.

## Declaration

```swift
func read(into buffer: UnsafeMutableRawBufferPointer, startingAt offset: off_t, length: Int, completionHandler: @escaping (Int, (any Error)?) -> Void)
```

## Parameters

- `buffer`: A buffer to receive the data.
- `offset`: The offset into the resource from which to start reading.
- `length`: A maximum number of bytes to read. The completion handler receives a parameter with the actual number of bytes read.
- `completionHandler`: A closure that executes after the read operation completes. If successful, the first parameter contains the number of bytes actually read. In the case of an error, the second parameter contains a non-`nil` error. This value is `EFAULT` if `buffer` is `nil`, or `errno` if reading from the resource failed.

<a id="discussion"></a>

## Discussion

For the read to succeed, requests must conform to any transfer requirements of the underlying resource. Disk drives typically require sector (`physicalBlockSize`) addressed operations of one or more sector-aligned offsets.

## See Also

### Reading and writing data

- [read(into:startingAt:length:)](read%28into_startingat_length_%29-4ax6s.md): Synchronously reads data from the resource into a buffer.
- [read(into:startingAt:length:)](read%28into_startingat_length_%29-5yozi.md): Asychronously reads data from the resource into a buffer.
- [write(from:startingAt:length:)](write%28from_startingat_length_%29-2fmgt.md): Synchronously writes data from from a buffer to the resource and executes a block afterwards.
- [write(from:startingAt:length:)](write%28from_startingat_length_%29-9oa1x.md): Asynchronously writes data from from a buffer to the resource.
- [write(from:startingAt:length:completionHandler:)](write%28from_startingat_length_completionhandler_%29.md): Writes data from from a buffer to the resource and executes a closure afterwards.
