> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816responseapdu](https://developer.apple.com/documentation/corenfc/nfciso7816responseapdu)

# NFCISO7816ResponseAPDU

**Framework:** Core NFC  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object containing the response from the tag.

## Declaration

```swift
struct NFCISO7816ResponseAPDU
```

## Topics

### Response Data

- [payload](nfciso7816responseapdu/payload.md): A data object that contains the response data.
- [statusWord1](nfciso7816responseapdu/statusword1.md): The SW1 command-processing status byte.
- [statusWord2](nfciso7816responseapdu/statusword2.md): The SW2 command-processing status byte.

## See Also

### Sending a Command

- [sendCommand(apdu:resultHandler:)](nfciso7816tag/sendcommand%28apdu_resulthandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [sendCommand(apdu:completionHandler:)](nfciso7816tag/sendcommand%28apdu_completionhandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [NFCISO7816APDU](nfciso7816apdu.md): An object representing an ISO 7816 application protocol data unit (APDU).
