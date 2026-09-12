> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentreadererror/networkunavailable](https://developer.apple.com/documentation/proximityreader/mobiledocumentreadererror/networkunavailable)

# MobileDocumentReaderError.networkUnavailable

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An error that indicates the system can’t reach the network.

## Declaration

```swift
case networkUnavailable
```

<a id="discussion"></a>

## Discussion

Check the device’s network connection.

## See Also

### Getting the error code

- [MobileDocumentReaderError.cancelled](cancelled.md): An error that indicates the mobile document request was canceled.
- [MobileDocumentReaderError.invalidRequest](invalidrequest.md): An error that indicates the request isn’t valid.
- [MobileDocumentReaderError.invalidResponse](invalidresponse.md): An error that indicates the response isn’t valid.
- [MobileDocumentReaderError.invalidToken](invalidtoken.md): An error that indicates the provided reader token for framework’s prepare method isn’t valid.
- [MobileDocumentReaderError.notAllowed](notallowed.md): An error that indicates the device isn’t allowed to perform the mobile document request.
- [MobileDocumentReaderError.notSupported](notsupported.md): An error that indicates mobile document reading isn’t supported on the current device.
- [MobileDocumentReaderError.serviceUnavailable](serviceunavailable.md): An error that occurs when mobile document reader service is unavailable.
- [MobileDocumentReaderError.sessionExpired](sessionexpired.md): An error that indicates the current reader session has expired.
- [MobileDocumentReaderError.systemBusy](systembusy.md): An error that indicates the system is busy.
- [MobileDocumentReaderError.unknown](unknown.md): An error that indicates the framework encountered a problem which the system can’t interpret.
