> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816tag/sendcommand(apdu:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso7816tag/sendcommand(apdu:completionhandler:))

# sendCommand(apdu:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends an application protocol data unit (APDU) to the tag and receives a response APDU.

## Declaration

```swift
func sendCommand(apdu: NFCISO7816APDU, completionHandler: @escaping @Sendable (Data, UInt8, UInt8, (any Error)?) -> Void)
```

```swift
func sendCommand(apdu: NFCISO7816APDU) async throws -> (Data, UInt8, UInt8)
```

## Parameters

- `apdu`: An application protocol data unit to send to the tag.
- `completionHandler`: A handler that the reader session invokes after the operation completes. The handler has the following parameters:

  - **responseData**: The response data, which may be empty even if the operation completes successfully.
  - **sw1**: The SW1 command-processing status byte. This value is always valid.
  - **sw2**: The SW2 command-processing status byte. This value is always valid.
  - **error**: `nil` when the operation completes successfully; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object when there’s a communication issue with the tag.

<a id="Discussion"></a>

## Discussion

When you send a `SELECT` command with a [p1Parameter](../nfciso7816apdu/p1parameter.md) value of `0x04`, your app must support one of the applications listed in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) property list key. Otherwise, the `completionHandler` receives an [NFCReaderError.Code.readerErrorSecurityViolation](../nfcreadererror-swift.struct/code/readererrorsecurityviolation.md) error.

The session calls `completionHandler` on the dispatch queue that you provided when creating the [NFCTagReaderSession](../nfctagreadersession.md) object.

## Default Implementations

### NFCISO7816Tag Implementations

- [sendCommand(apdu:)](sendcommand%28apdu_%29.md)

## See Also

### Sending a Command

- [sendCommand(apdu:resultHandler:)](sendcommand%28apdu_resulthandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [NFCISO7816APDU](../nfciso7816apdu.md): An object representing an ISO 7816 application protocol data unit (APDU).
- [NFCISO7816ResponseAPDU](../nfciso7816responseapdu.md): An object containing the response from the tag.

# sendCommandAPDU:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends an application protocol data unit (APDU) to the tag and receives a response APDU.

## Declaration

```objectivec
- (void) sendCommandAPDU:(NFCISO7816APDU *) apdu completionHandler:(void (^)(NSData *responseData, uint8_t sw1, uint8_t sw2, NSError *error)) completionHandler;
```

## Parameters

- `apdu`: An application protocol data unit to send to the tag.
- `completionHandler`: A handler that the reader session invokes after the operation completes. The handler has the following parameters:

  - **responseData**: The response data, which may be empty even if the operation completes successfully.
  - **sw1**: The SW1 command-processing status byte. This value is always valid.
  - **sw2**: The SW2 command-processing status byte. This value is always valid.
  - **error**: `nil` when the operation completes successfully; otherwise, an [NSError](https://developer.apple.com/documentation/foundation/nserror) object when there’s a communication issue with the tag.

<a id="Discussion"></a>

## Discussion

When you send a `SELECT` command with a [p1Parameter](../nfciso7816apdu/p1parameter.md) value of `0x04`, your app must support one of the applications listed in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) property list key. Otherwise, the `completionHandler` receives an [NFCReaderErrorSecurityViolation](../nfcreadererror-swift.struct/code/readererrorsecurityviolation.md) error.

The session calls `completionHandler` on the dispatch queue that you provided when creating the [NFCTagReaderSession](../nfctagreadersession.md) object.

## Default Implementations

### NFCISO7816Tag Implementations

- [sendCommand(apdu:)](sendcommand%28apdu_%29.md)

## See Also

### Sending a Command

- [NFCISO7816APDU](../nfciso7816apdu.md): An object representing an ISO 7816 application protocol data unit (APDU).
