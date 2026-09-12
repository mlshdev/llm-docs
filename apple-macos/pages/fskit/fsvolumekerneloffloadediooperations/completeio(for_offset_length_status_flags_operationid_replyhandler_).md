> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumekerneloffloadediooperations/completeio(for:offset:length:status:flags:operationid:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolumekerneloffloadediooperations/completeio(for:offset:length:status:flags:operationid:replyhandler:))

# completeIO(for:offset:length:status:flags:operationID:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Completes an I/O operation for a given file.

## Declaration

```swift
func completeIO(for file: FSItem, offset: off_t, length: Int, status: any Error, flags: FSCompleteIOFlags, operationID: FSOperationID, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func completeIO(for file: FSItem, offset: off_t, length: Int, status: any Error, flags: FSCompleteIOFlags, operationID: FSOperationID) async throws
```

## Parameters

- `file`: The file for which the I/O operation completed.
- `offset`: The starting logical offset at which I/O started.
- `length`: The length of the I/O range (in bytes).
- `status`: Any error that occurred during the operation. If no error occurred, this parameter is `nil`.
- `flags`: Flags that affect the behavior of the complete I/O operation.
- `operationID`: A unique identifier of the blockmap call. Any value other than `0` (Objective-C) or [unspecified](../fsoperationid/unspecified.md) (Swift) corresponds to a previous call to `blockmapFile(_:offset:length:flags:operationID:packer:)` with the same `operationID`.
- `reply`: A block or closure to indicate success or failure. If completing I/O fails, pass an error as the one parameter to the reply handler. If completing I/O succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

Implement this method by updating a file’s metadata, such as its size and modification time.

FSKit may call this method without an earlier call to `blockmapFile(_:offset:length:flags:operationID:packer:)`. In this case, the `operationID` is `0` (Objective-C) or [unspecified](../fsoperationid/unspecified.md) (Swift).

## See Also

### Performing mapped I/O

- [blockmapFile(\_:offset:length:flags:operationID:packer:replyHandler:)](blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Deprecated. Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](../fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](../fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.

# completeIOForFile:offset:length:status:flags:operationID:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Completes an I/O operation for a given file.

## Declaration

```objectivec
- (void) completeIOForFile:(FSItem *) file offset:(off_t) offset length:(size_t) length status:(NSError *) status flags:(FSCompleteIOFlags) flags operationID:(FSOperationID) operationID replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `file`: The file for which the I/O operation completed.
- `offset`: The starting logical offset at which I/O started.
- `length`: The length of the I/O range (in bytes).
- `status`: Any error that occurred during the operation. If no error occurred, this parameter is `nil`.
- `flags`: Flags that affect the behavior of the complete I/O operation.
- `operationID`: A unique identifier of the blockmap call. Any value other than `0` (Objective-C) or [FSOperationIDUnspecified](../fsoperationid/unspecified.md) (Swift) corresponds to a previous call to `blockmapFile(_:offset:length:flags:operationID:packer:)` with the same `operationID`.
- `reply`: A block or closure to indicate success or failure. If completing I/O fails, pass an error as the one parameter to the reply handler. If completing I/O succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

Implement this method by updating a file’s metadata, such as its size and modification time.

FSKit may call this method without an earlier call to `blockmapFile(_:offset:length:flags:operationID:packer:)`. In this case, the `operationID` is `0` (Objective-C) or [FSOperationIDUnspecified](../fsoperationid/unspecified.md) (Swift).

## See Also

### Performing mapped I/O

- [blockmapFile:offset:length:flags:operationID:packer:replyHandler:](blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Deprecated. Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](../fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](../fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
