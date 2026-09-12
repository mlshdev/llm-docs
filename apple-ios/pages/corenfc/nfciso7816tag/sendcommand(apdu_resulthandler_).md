> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816tag/sendcommand(apdu:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfciso7816tag/sendcommand(apdu:resulthandler:))

# sendCommand(apdu:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Sends an application protocol data unit (APDU) to the tag and receives a response APDU.

## Declaration

```swift
@preconcurrency func sendCommand(apdu: NFCISO7816APDU, resultHandler: @escaping @Sendable (Result<NFCISO7816ResponseAPDU, any Error>) -> Void)
```

```swift
func sendCommand(apdu: NFCISO7816APDU, resultHandler: @escaping (Result<NFCISO7816ResponseAPDU, any Error>) -> Void)
```

## Parameters

- `apdu`: An application protocol data unit to send to the tag.
- `resultHandler`: A handler that the reader session invokes after the operation completes. The handler receives a [Result](https://developer.apple.com/documentation/swift/result) with the cases:

  - **`success`**: A instance of [NFCISO7816ResponseAPDU](../nfciso7816responseapdu.md) containing the response from the tag.
  - **`failure`**: An [Error](https://developer.apple.com/documentation/swift/error) object indicating that a communication issue with the tag occurred.

<a id="Discussion"></a>

## Discussion

When you send a `SELECT` command with a [p1Parameter](../nfciso7816apdu/p1parameter.md) value of `0x04`, your app must support one of the applications listed in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) property list key. Otherwise, the `resultHandler` receives an [NFCReaderError.Code.readerErrorSecurityViolation](../nfcreadererror-swift.struct/code/readererrorsecurityviolation.md) error.

The session calls `resultHandler` on the dispatch queue that you provided when creating the [NFCTagReaderSession](../nfctagreadersession.md) object.

## See Also

### Sending a Command

- [sendCommand(apdu:completionHandler:)](sendcommand%28apdu_completionhandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [NFCISO7816APDU](../nfciso7816apdu.md): An object representing an ISO 7816 application protocol data unit (APDU).
- [NFCISO7816ResponseAPDU](../nfciso7816responseapdu.md): An object containing the response from the tag.
