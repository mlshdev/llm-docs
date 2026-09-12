> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/writefrom:startingat:length:completionhandler:](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/writefrom:startingat:length:completionhandler:)

# writeFrom:startingAt:length:completionHandler:

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Writes data from from a buffer to the resource and executes a block afterwards.

## Declaration

```objectivec
- (void) writeFrom:(void *) buffer startingAt:(off_t) offset length:(size_t) length completionHandler:(void (^)(size_t actuallyWritten, NSError *error)) completionHandler;
```

## Parameters

- `buffer`: A buffer to provide the data.
- `offset`: The offset into the resource from which to start writing.
- `length`: A maximum number of bytes to write. The completion handler receives a parameter with the actual number of bytes write.
- `completionHandler`: A block that executes after the write operation completes. If successful, the first parameter contains the number of bytes actually written. In the case of an error, the second parameter contains a non-`nil` error. This value is `EFAULT` if `buffer` is `NULL`, or `errno` if writing to the resource failed.

<a id="discussion"></a>

## Discussion

For the write to succeed, requests must conform to any transfer requirements of the underlying resource. Disk drives typically require sector (`physicalBlockSize`) addressed operations of one or more sector-aligned offsets.

## See Also

### Reading and writing data

- [readInto:startingAt:length:error:](readinto_startingat_length_error_.md): Synchronously reads data from the resource into a buffer.
- [readInto:startingAt:length:completionHandler:](readinto_startingat_length_completionhandler_.md): Reads data from the resource into a buffer and executes a block afterwards.
- [writeFrom:startingAt:length:error:](writefrom_startingat_length_error_.md): Synchronously writes data from from a buffer to the resource and executes a block afterwards.
