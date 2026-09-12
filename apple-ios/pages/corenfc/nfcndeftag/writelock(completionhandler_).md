> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndeftag/writelock(completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcndeftag/writelock(completionhandler:))

# writeLock(completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Changes the NDEF tag status to read-only, preventing future write operations.

## Declaration

```swift
func writeLock(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeLock() async throws
```

## Parameters

- `completionHandler`: The handler invoked by the reader session after completing the lock request. The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

  The handler has the following parameter:

  - **error**: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object if the write request fails. A value of `nil` indicates that the session locked the tag and future write requests aren’t possible.

<a id="Discussion"></a>

## Discussion

Calling this method updates the write access condition byte in the NDEF File Control of the tag’s file system, thus locking the tag. This is a permanent action that you cannot undo. After locking the tag, you can no longer write data to it.

## See Also

### Writing to the Tag

- [writeNDEF(\_:completionHandler:)](writendef%28__completionhandler_%29.md): Saves an NDEF message to a writable tag.

# writeLockWithCompletionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Changes the NDEF tag status to read-only, preventing future write operations.

## Declaration

```objectivec
- (void) writeLockWithCompletionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: The handler invoked by the reader session after completing the lock request. The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

  The handler has the following parameter:

  - **error**: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object if the write request fails. A value of `nil` indicates that the session locked the tag and future write requests aren’t possible.

<a id="Discussion"></a>

## Discussion

Calling this method updates the write access condition byte in the NDEF File Control of the tag’s file system, thus locking the tag. This is a permanent action that you cannot undo. After locking the tag, you can no longer write data to it.

## See Also

### Writing to the Tag

- [writeNDEF:completionHandler:](writendef%28__completionhandler_%29.md): Saves an NDEF message to a writable tag.
