> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/readwriteoperations/read(from:at:length:into:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/readwriteoperations/read(from:at:length:into:replyhandler:))

# read(from:at:length:into:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Reads the contents of the given file item.

## Declaration

```swift
func read(from item: FSItem, at offset: off_t, length: Int, into buffer: FSMutableFileDataBuffer, replyHandler reply: @escaping @Sendable (Int, (any Error)?) -> Void)
```

```swift
func read(from item: FSItem, at offset: off_t, length: Int, into buffer: FSMutableFileDataBuffer) async throws -> Int
```

## Parameters

- `item`: The item from which to read. FSKit guarantees this item will be of type [FSItem.ItemType.file](../../fsitem/itemtype/file.md).
- `offset`: The offset in the file from which to start reading.
- `length`: The number of bytes to read.
- `buffer`: A buffer to receive the bytes read from the file.
- `reply`: A block or closure to indicate success or failure. If reading succeeds, pass the number of bytes read and a `nil` error. If reading fails, pass the number of bytes read prior to the error along with the relevant error. For an `async` Swift implementation, there’s no reply handler; simply return the byte count or throw an error.

<a id="discussion"></a>

## Discussion

If the number of bytes requested exceeds the number of bytes available before the end of the file, then the call copies only those bytes to `buffer`. If `offset` points past the last valid byte of the file, don’t reply with an error but set `actuallyRead` to `0`.

## See Also

### Reading and writing

- [FSMutableFileDataBuffer](../../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [write(contents:to:at:replyHandler:)](write%28contents_to_at_replyhandler_%29.md): Deprecated. Writes contents to the given file item.

# readFromFile:offset:length:intoBuffer:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Reads the contents of the given file item.

## Declaration

```objectivec
- (void) readFromFile:(FSItem *) item offset:(off_t) offset length:(size_t) length intoBuffer:(FSMutableFileDataBuffer *) buffer replyHandler:(void (^)(size_t actuallyRead, NSError *error)) reply;
```

## Parameters

- `item`: The item from which to read. FSKit guarantees this item will be of type [FSItemTypeFile](../../fsitem/itemtype/file.md).
- `offset`: The offset in the file from which to start reading.
- `length`: The number of bytes to read.
- `buffer`: A buffer to receive the bytes read from the file.
- `reply`: A block or closure to indicate success or failure. If reading succeeds, pass the number of bytes read and a `nil` error. If reading fails, pass the number of bytes read prior to the error along with the relevant error. For an `async` Swift implementation, there’s no reply handler; simply return the byte count or throw an error.

<a id="discussion"></a>

## Discussion

If the number of bytes requested exceeds the number of bytes available before the end of the file, then the call copies only those bytes to `buffer`. If `offset` points past the last valid byte of the file, don’t reply with an error but set `actuallyRead` to `0`.

## See Also

### Reading and writing

- [FSMutableFileDataBuffer](../../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [writeContents:toFile:atOffset:replyHandler:](write%28contents_to_at_replyhandler_%29.md): Deprecated. Writes contents to the given file item.
