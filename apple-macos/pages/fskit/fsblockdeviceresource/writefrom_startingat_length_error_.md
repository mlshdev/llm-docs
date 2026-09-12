> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockdeviceresource/writefrom:startingat:length:error:](https://developer.apple.com/documentation/fskit/fsblockdeviceresource/writefrom:startingat:length:error:)

# writeFrom:startingAt:length:error:

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Synchronously writes data from from a buffer to the resource and executes a block afterwards.

## Declaration

```objectivec
- (size_t) writeFrom:(void *) buffer startingAt:(off_t) offset length:(size_t) length error:(NSError **) error;
```

## Parameters

- `buffer`: A buffer to provide the data.
- `offset`: The offset into the resource from which to start writing.
- `length`: A maximum number of bytes to write. The completion handler receives a parameter with the actual number of bytes write.
- `error`: On return, any error encountered while writing data, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

The actual number of bytes written.

<a id="discussion"></a>

## Discussion

This is a synchronous version of [writeFrom:startingAt:length:completionHandler:](writefrom_startingat_length_completionhandler_.md).

> **Note**

> In some cases, this method performs a partial write. In this case, the return value is shorter than the requested length, and the `error` is set to `nil`.

## See Also

### Reading and writing data

- [readInto:startingAt:length:error:](readinto_startingat_length_error_.md): Synchronously reads data from the resource into a buffer.
- [readInto:startingAt:length:completionHandler:](readinto_startingat_length_completionhandler_.md): Reads data from the resource into a buffer and executes a block afterwards.
- [writeFrom:startingAt:length:completionHandler:](writefrom_startingat_length_completionhandler_.md): Writes data from from a buffer to the resource and executes a block afterwards.
