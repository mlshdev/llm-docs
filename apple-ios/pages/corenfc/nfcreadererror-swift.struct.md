> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadererror-swift.struct](https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct)

# NFCReaderError

**Framework:** Core NFC  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

An error type that indicates problems with reader sessions or tags.

## Declaration

```swift
struct NFCReaderError
```

## Topics

### Session Errors

- [readerSessionInvalidationErrorFirstNDEFTagRead](nfcreadererror-swift.struct/readersessioninvalidationerrorfirstndeftagread.md): The first NDEF tag read by this session is invalid.
- [readerSessionInvalidationErrorSessionTerminatedUnexpectedly](nfcreadererror-swift.struct/readersessioninvalidationerrorsessionterminatedunexpectedly.md): The reader session terminated unexpectedly.
- [readerSessionInvalidationErrorSessionTimeout](nfcreadererror-swift.struct/readersessioninvalidationerrorsessiontimeout.md): The reader session timed out.
- [readerSessionInvalidationErrorSystemIsBusy](nfcreadererror-swift.struct/readersessioninvalidationerrorsystemisbusy.md): The reader session failed because the system is busy.
- [readerSessionInvalidationErrorUserCanceled](nfcreadererror-swift.struct/readersessioninvalidationerrorusercanceled.md): The user canceled the reader session.

### NDEF Tag Errors

- [ndefReaderSessionErrorTagNotWritable](nfcreadererror-swift.struct/ndefreadersessionerrortagnotwritable.md): The NDEF tag isn’t writable.
- [ndefReaderSessionErrorTagSizeTooSmall](nfcreadererror-swift.struct/ndefreadersessionerrortagsizetoosmall.md): The NDEF tag memory size is too small to store the data.
- [ndefReaderSessionErrorTagUpdateFailure](nfcreadererror-swift.struct/ndefreadersessionerrortagupdatefailure.md): The reader session failed to update the NDEF tag.
- [ndefReaderSessionErrorZeroLengthMessage](nfcreadererror-swift.struct/ndefreadersessionerrorzerolengthmessage.md): The NDEF tag doesn’t contain an NDEF message.

### Transceive Errors

- [readerTransceiveErrorRetryExceeded](nfcreadererror-swift.struct/readertransceiveerrorretryexceeded.md): Too many retries have occurred.
- [readerTransceiveErrorTagConnectionLost](nfcreadererror-swift.struct/readertransceiveerrortagconnectionlost.md): The reader lost the connection to the tag.
- [readerTransceiveErrorTagNotConnected](nfcreadererror-swift.struct/readertransceiveerrortagnotconnected.md): The tag isn’t in the connected state.
- [readerTransceiveErrorTagResponseError](nfcreadererror-swift.struct/readertransceiveerrortagresponseerror.md): The tag has responded with an error.
- [readerTransceiveErrorSessionInvalidated](nfcreadererror-swift.struct/readertransceiveerrorsessioninvalidated.md): The reader session is invalid.
- [readerTransceiveErrorPacketTooLong](nfcreadererror-swift.struct/readertransceiveerrorpackettoolong.md): The packet length exceeds the limit supported by the tag.

### Tag Command Configuration Error

- [tagCommandConfigurationErrorInvalidParameters](nfcreadererror-swift.struct/tagcommandconfigurationerrorinvalidparameters.md): The tag has been configured with invalid parameters.

### Other Errors

- [readerErrorUnsupportedFeature](nfcreadererror-swift.struct/readererrorunsupportedfeature.md): The reader session does not support this feature.
- [readerErrorInvalidParameter](nfcreadererror-swift.struct/readererrorinvalidparameter.md): An input parameter is invalid.
- [readerErrorInvalidParameterLength](nfcreadererror-swift.struct/readererrorinvalidparameterlength.md): The length of an input parameter is invalid.
- [readerErrorParameterOutOfBound](nfcreadererror-swift.struct/readererrorparameteroutofbound.md): A parameter value is outside of the acceptable boundary.
- [readerErrorRadioDisabled](nfcreadererror-swift.struct/readererrorradiodisabled.md): The NFC wireless radio on the device is disabled.
- [readerErrorSecurityViolation](nfcreadererror-swift.struct/readererrorsecurityviolation.md): A security violation associated with the reader session has occurred.

### Error Domain

- [NFCErrorDomain](nfcerrordomain.md): The domain for errors associated with Core NFC APIs.

### Type Properties

- [errorDomain](nfcreadererror-swift.struct/errordomain.md)
- [paymentTagReaderSessionErrorLocationAuthorizationDenied](nfcreadererror-swift.struct/paymenttagreadersessionerrorlocationauthorizationdenied.md)
- [paymentTagReaderSessionErrorLocationServiceRestricted](nfcreadererror-swift.struct/paymenttagreadersessionerrorlocationservicerestricted.md)
- [paymentTagReaderSessionErrorOnDeviceLocationUnavailable](nfcreadererror-swift.struct/paymenttagreadersessionerrorondevicelocationunavailable.md)
- [readerErrorAccessNotAccepted](nfcreadererror-swift.struct/readererroraccessnotaccepted.md)
- [readerErrorIneligible](nfcreadererror-swift.struct/readererrorineligible.md)

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NFCReaderError.Code](nfcreadererror-swift.struct/code.md): Reader session and tag error codes.
- [NFCErrorDomain](nfcerrordomain.md): The domain for errors associated with Core NFC APIs.
- [NFCTagResponseUnexpectedLengthErrorKey](nfctagresponseunexpectedlengtherrorkey.md): A user-information dictionary key that indicates an invalid received response packet length.
