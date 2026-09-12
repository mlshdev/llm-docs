> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/write(from:startingat:length:)-2fmgt](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/write(from:startingat:length:)-2fmgt)

# write(from:startingAt:length:)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronously writes data from from a buffer to the resource and executes a block afterwards.

## Declaration

```swift
func write(from buffer: UnsafeRawBufferPointer, startingAt offset: off_t, length: Int) throws -> Int
```

## Parameters

- `buffer`: A buffer to provide the data.
- `offset`: The offset into the resource from which to start writing.
- `length`: A maximum number of bytes to write. The completion handler receives a parameter with the actual number of bytes write.

<a id="return-value"></a>

## Return Value

The actual number of bytes written.

<a id="discussion"></a>

## Discussion

This method is a synchronous version of [writeFrom:startingAt:length:completionHandler:](writefrom_startingat_length_completionhandler_.md).

In some cases, this method performs a partial write. In this case, the return value is shorter than the requested length, and the `error` is set to `nil`.

> **Throws**

> Any error encountered while writing data.

## See Also

### Reading and writing data

- [read(into:startingAt:length:)](read%28into_startingat_length_%29-4ax6s.md): Synchronously reads data from the resource into a buffer.
- [read(into:startingAt:length:)](read%28into_startingat_length_%29-5yozi.md): Asychronously reads data from the resource into a buffer.
- [read(into:startingAt:length:completionHandler:)](read%28into_startingat_length_completionhandler_%29.md): Reads data from the resource into a buffer and executes a closure afterwards.
- [write(from:startingAt:length:)](write%28from_startingat_length_%29-9oa1x.md): Asynchronously writes data from from a buffer to the resource.
- [write(from:startingAt:length:completionHandler:)](write%28from_startingat_length_completionhandler_%29.md): Writes data from from a buffer to the resource and executes a closure afterwards.
