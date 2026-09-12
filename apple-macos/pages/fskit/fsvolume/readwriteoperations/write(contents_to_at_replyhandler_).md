> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/readwriteoperations/write(contents:to:at:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/readwriteoperations/write(contents:to:at:replyhandler:))

# write(contents:to:at:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Writes contents to the given file item.

## Declaration

```swift
func write(contents: Data, to item: FSItem, at offset: off_t, replyHandler reply: @escaping @Sendable (Int, (any Error)?) -> Void)
```

```swift
func write(contents: Data, to item: FSItem, at offset: off_t) async throws -> Int
```

## Parameters

- `contents`: A buffer containing the data to write to the file.
- `item`: The item to which to write. FSKit guarantees this item will be of type [FSItem.ItemType.file](../../fsitem/itemtype/file.md).
- `offset`: The offset in the file from which to start writing.
- `reply`: A block or closure to indicate success or failure. If writing succeeds, pass the number of bytes written and a `nil` error. If writing fails, pass the number of bytes written prior to the error along with the relevant error. For an `async` Swift implementation, there’s no reply handler; simply return the byte count or throw an error.

<a id="discussion"></a>

## Discussion

FSKit expects this routine to allocate space in the file system to extend the file as necessary.

If the volume experiences an out-of-space condition, reply with an error of domain [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and code `ENOSPC`.

## See Also

### Reading and writing

- [read(from:at:length:into:replyHandler:)](read%28from_at_length_into_replyhandler_%29.md): Deprecated. Reads the contents of the given file item.
- [FSMutableFileDataBuffer](../../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.

# writeContents:toFile:atOffset:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Writes contents to the given file item.

## Declaration

```objectivec
- (void) writeContents:(NSData *) contents toFile:(FSItem *) item atOffset:(off_t) offset replyHandler:(void (^)(size_t actuallyWritten, NSError *error)) reply;
```

## Parameters

- `contents`: A buffer containing the data to write to the file.
- `item`: The item to which to write. FSKit guarantees this item will be of type [FSItemTypeFile](../../fsitem/itemtype/file.md).
- `offset`: The offset in the file from which to start writing.
- `reply`: A block or closure to indicate success or failure. If writing succeeds, pass the number of bytes written and a `nil` error. If writing fails, pass the number of bytes written prior to the error along with the relevant error. For an `async` Swift implementation, there’s no reply handler; simply return the byte count or throw an error.

<a id="discussion"></a>

## Discussion

FSKit expects this routine to allocate space in the file system to extend the file as necessary.

If the volume experiences an out-of-space condition, reply with an error of domain [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and code `ENOSPC`.

## See Also

### Reading and writing

- [readFromFile:offset:length:intoBuffer:replyHandler:](read%28from_at_length_into_replyhandler_%29.md): Deprecated. Reads the contents of the given file item.
- [FSMutableFileDataBuffer](../../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
