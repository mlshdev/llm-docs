> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentreadererror](https://developer.apple.com/documentation/proximityreader/mobiledocumentreadererror)

# MobileDocumentReaderError

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An error type that indicates problems when preparing a mobile document reader session and performing document requests.

## Declaration

```swift
enum MobileDocumentReaderError
```

## Mentioned In

- [Adopting the Verifier API in your iPhone app](adopting-the-verifier-api-in-your-iphone-app.md)

## Topics

### Getting the error code

- [MobileDocumentReaderError.cancelled](mobiledocumentreadererror/cancelled.md): An error that indicates the mobile document request was canceled.
- [MobileDocumentReaderError.invalidRequest](mobiledocumentreadererror/invalidrequest.md): An error that indicates the request isn’t valid.
- [MobileDocumentReaderError.invalidResponse](mobiledocumentreadererror/invalidresponse.md): An error that indicates the response isn’t valid.
- [MobileDocumentReaderError.invalidToken](mobiledocumentreadererror/invalidtoken.md): An error that indicates the provided reader token for framework’s prepare method isn’t valid.
- [MobileDocumentReaderError.networkUnavailable](mobiledocumentreadererror/networkunavailable.md): An error that indicates the system can’t reach the network.
- [MobileDocumentReaderError.notAllowed](mobiledocumentreadererror/notallowed.md): An error that indicates the device isn’t allowed to perform the mobile document request.
- [MobileDocumentReaderError.notSupported](mobiledocumentreadererror/notsupported.md): An error that indicates mobile document reading isn’t supported on the current device.
- [MobileDocumentReaderError.serviceUnavailable](mobiledocumentreadererror/serviceunavailable.md): An error that occurs when mobile document reader service is unavailable.
- [MobileDocumentReaderError.sessionExpired](mobiledocumentreadererror/sessionexpired.md): An error that indicates the current reader session has expired.
- [MobileDocumentReaderError.systemBusy](mobiledocumentreadererror/systembusy.md): An error that indicates the system is busy.
- [MobileDocumentReaderError.unknown](mobiledocumentreadererror/unknown.md): An error that indicates the framework encountered a problem which the system can’t interpret.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [PaymentCardReaderError](paymentcardreadererror.md): An error type that indicates problems with the configuration of the reader.
