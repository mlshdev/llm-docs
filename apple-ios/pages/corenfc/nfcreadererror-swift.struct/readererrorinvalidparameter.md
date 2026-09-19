> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct/readererrorinvalidparameter

# readerErrorInvalidParameter

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An input parameter is invalid.

## Declaration

```swift
static var readerErrorInvalidParameter: NFCReaderError.Code { get }
```

## See Also

### Other Errors

- [readerErrorUnsupportedFeature](readererrorunsupportedfeature.md): The reader session does not support this feature.
- [readerErrorInvalidParameterLength](readererrorinvalidparameterlength.md): The length of an input parameter is invalid.
- [readerErrorParameterOutOfBound](readererrorparameteroutofbound.md): A parameter value is outside of the acceptable boundary.
- [readerErrorRadioDisabled](readererrorradiodisabled.md): The NFC wireless radio on the device is disabled.
- [readerErrorSecurityViolation](readererrorsecurityviolation.md): A security violation associated with the reader session has occurred.
