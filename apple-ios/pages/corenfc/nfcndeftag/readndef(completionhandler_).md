> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcndeftag/readndef(completionhandler:)

# readNDEF(completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Retrieves an NDEF message from the tag.

## Declaration

```swift
func readNDEF(completionHandler: @escaping @Sendable (NFCNDEFMessage?, (any Error)?) -> Void)
```

```swift
func readNDEF() async throws -> NFCNDEFMessage
```

## Parameters

- `completionHandler`: The handler invoked by the reader session that provides the NDEF message. The handler has the following parameters:

  - **message**: An [NFCNDEFMessage](../nfcndefmessage.md) object, or `nil` if an error occurs while retrieving the message.
  - **error**: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object if the read request fails; otherwise, `nil`.

  The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

# readNDEFWithCompletionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Retrieves an NDEF message from the tag.

## Declaration

```objectivec
- (void) readNDEFWithCompletionHandler:(void (^)(NFCNDEFMessage *, NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: The handler invoked by the reader session that provides the NDEF message. The handler has the following parameters:

  - **message**: An [NFCNDEFMessage](../nfcndefmessage.md) object, or `nil` if an error occurs while retrieving the message.
  - **error**: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object if the read request fails; otherwise, `nil`.

  The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).
