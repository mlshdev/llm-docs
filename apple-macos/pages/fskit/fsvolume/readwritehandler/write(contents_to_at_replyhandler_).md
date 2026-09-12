> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/readwritehandler/write(contents:to:at:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/readwritehandler/write(contents:to:at:replyhandler:))

# write(contents:to:at:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Writes contents to the given file item.

## Declaration

```swift
func write(contents: Data, to item: FSItem, at offset: off_t, replyHandler reply: @escaping @Sendable (FSWriteFileResult?, (any Error)?) -> Void)
```

```swift
func write(contents: Data, to item: FSItem, at offset: off_t) async throws -> FSWriteFileResult
```

## Parameters

- `contents`: A buffer containing the data to write to the file.
- `item`: The item to which to write. FSKit guarantees this item will be of type [FSItem.ItemType.file](../../fsitem/itemtype/file.md).
- `offset`: The offset in the file from which to start writing.
- `reply`: A block or closure to indicate success or failure. If writing succeeds, pass an instance of [FSWriteFileResult](../../fswritefileresult.md) containing the number of bytes written, the updated [FSItem.Attributes](../../fsitem/attributes.md) of the file, and the volume’s updated free space, along with a `nil` error. If writing fails, pass the relevant error as the second parameter; FSKit ignores the [FSWriteFileResult](../../fswritefileresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

FSKit expects this routine to allocate space in the file system to extend the file as necessary.

If the volume experiences an out-of-space condition, reply with an error of domain [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and code `ENOSPC`.

## See Also

### Reading and writing

- [read(from:at:length:into:replyHandler:)](read%28from_at_length_into_replyhandler_%29.md): Reads the contents of the given file item.
- [FSMutableFileDataBuffer](../../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [FSReadFileResult](../../fsreadfileresult.md): The result of a read-file call.
- [FSWriteFileResult](../../fswritefileresult.md): The result of a read-file call.

# writeContents:toFile:atOffset:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Writes contents to the given file item.

## Declaration

```objectivec
- (void) writeContents:(NSData *) contents toFile:(FSItem *) item atOffset:(off_t) offset replyHandler:(void (^)(FSWriteFileResult *result, NSError *error)) reply;
```

## Parameters

- `contents`: A buffer containing the data to write to the file.
- `item`: The item to which to write. FSKit guarantees this item will be of type [FSItemTypeFile](../../fsitem/itemtype/file.md).
- `offset`: The offset in the file from which to start writing.
- `reply`: A block or closure to indicate success or failure. If writing succeeds, pass an instance of [FSWriteFileResult](../../fswritefileresult.md) containing the number of bytes written, the updated [FSItemAttributes](../../fsitem/attributes.md) of the file, and the volume’s updated free space, along with a `nil` error. If writing fails, pass the relevant error as the second parameter; FSKit ignores the [FSWriteFileResult](../../fswritefileresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

FSKit expects this routine to allocate space in the file system to extend the file as necessary.

If the volume experiences an out-of-space condition, reply with an error of domain [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and code `ENOSPC`.

## See Also

### Reading and writing

- [readFromFile:offset:length:intoBuffer:replyHandler:](read%28from_at_length_into_replyhandler_%29.md): Reads the contents of the given file item.
- [FSMutableFileDataBuffer](../../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [FSReadFileResult](../../fsreadfileresult.md): The result of a read-file call.
- [FSWriteFileResult](../../fswritefileresult.md): The result of a read-file call.
