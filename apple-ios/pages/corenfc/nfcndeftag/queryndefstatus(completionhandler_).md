> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndeftag/queryndefstatus(completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcndeftag/queryndefstatus(completionhandler:))

# queryNDEFStatus(completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Asks the reader session for the NDEF support status of the tag.

## Declaration

```swift
func queryNDEFStatus(completionHandler: @escaping @Sendable (NFCNDEFStatus, Int, (any Error)?) -> Void)
```

```swift
func queryNDEFStatus() async throws -> (NFCNDEFStatus, Int)
```

## Parameters

- `completionHandler`: The handler invoked by the reader session that provides the NDEF support status. The handler has the following parameters:

  - **status**: The [NFCNDEFStatus](../nfcndefstatus.md) of the tag.
  - **capacity**: Indicates the maximum NDEF message size, in bytes, that you can store on the tag.
  - **error**: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object if the query fails; otherwise, `nil`.

  The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

## See Also

### Getting the Tag Status

- [isAvailable](isavailable.md): A Boolean value that determines whether the NDEF tag is available in the current reader session.
- [NFCNDEFStatus](../nfcndefstatus.md): Constants that indicate status for an NDEF tag.

# queryNDEFStatusWithCompletionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Asks the reader session for the NDEF support status of the tag.

## Declaration

```objectivec
- (void) queryNDEFStatusWithCompletionHandler:(void (^)(NFCNDEFStatus status, NSUInteger capacity, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The handler invoked by the reader session that provides the NDEF support status. The handler has the following parameters:

  - **status**: The [NFCNDEFStatus](../nfcndefstatus.md) of the tag.
  - **capacity**: Indicates the maximum NDEF message size, in bytes, that you can store on the tag.
  - **error**: An [NSError](https://developer.apple.com/documentation/foundation/nserror) object if the query fails; otherwise, `nil`.

  The session calls `completionHandler` on the dispatch queue provided when creating the [NFCNDEFReaderSession](../nfcndefreadersession.md).

## See Also

### Getting the Tag Status

- [available](isavailable.md): A Boolean value that determines whether the NDEF tag is available in the current reader session.
- [NFCNDEFStatus](../nfcndefstatus.md): Constants that indicate status for an NDEF tag.
