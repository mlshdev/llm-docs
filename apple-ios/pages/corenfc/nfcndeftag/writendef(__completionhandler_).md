> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndeftag/writendef(_:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcndeftag/writendef(_:completionhandler:))

# writeNDEF(\_:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Saves an NDEF message to a writable tag.

## Declaration

```swift
func writeNDEF(_ ndefMessage: NFCNDEFMessage, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeNDEF(_ ndefMessage: NFCNDEFMessage) async throws
```

## Parameters

- `ndefMessage`: The NDEF message to write to the tag.
- `completionHandler`: The handler invoked by the reader session after completing the write request. The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

  The handler has the following parameter:

  - **error**: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object if the write request fails. A value of `nil` indicates that the write was successful.

<a id="Discussion"></a>

## Discussion

To determine whether the tag is writable, call [queryNDEFStatus(completionHandler:)](queryndefstatus%28completionhandler_%29.md) and check that the `status` is [NFCNDEFStatus.readWrite](../nfcndefstatus/readwrite.md).

## See Also

### Writing to the Tag

- [writeLock(completionHandler:)](writelock%28completionhandler_%29.md): Changes the NDEF tag status to read-only, preventing future write operations.

# writeNDEF:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Saves an NDEF message to a writable tag.

## Declaration

```objectivec
- (void) writeNDEF:(NFCNDEFMessage *) ndefMessage completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `ndefMessage`: The NDEF message to write to the tag.
- `completionHandler`: The handler invoked by the reader session after completing the write request. The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

  The handler has the following parameter:

  - **error**: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object if the write request fails. A value of `nil` indicates that the write was successful.

<a id="Discussion"></a>

## Discussion

To determine whether the tag is writable, call [queryNDEFStatusWithCompletionHandler:](queryndefstatus%28completionhandler_%29.md) and check that the `status` is [NFCNDEFStatusReadWrite](../nfcndefstatus/readwrite.md).

## See Also

### Writing to the Tag

- [writeLockWithCompletionHandler:](writelock%28completionhandler_%29.md): Changes the NDEF tag status to read-only, preventing future write operations.
