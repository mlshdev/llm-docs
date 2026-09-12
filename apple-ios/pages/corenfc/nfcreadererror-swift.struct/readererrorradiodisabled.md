> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadererror-swift.struct/readererrorradiodisabled](https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct/readererrorradiodisabled)

# readerErrorRadioDisabled

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The NFC wireless radio on the device is disabled.

## Declaration

```swift
static var readerErrorRadioDisabled: NFCReaderError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This condition happens, for example, when a person enables airplane mode on their device.

## See Also

### Other Errors

- [readerErrorUnsupportedFeature](readererrorunsupportedfeature.md): The reader session does not support this feature.
- [readerErrorInvalidParameter](readererrorinvalidparameter.md): An input parameter is invalid.
- [readerErrorInvalidParameterLength](readererrorinvalidparameterlength.md): The length of an input parameter is invalid.
- [readerErrorParameterOutOfBound](readererrorparameteroutofbound.md): A parameter value is outside of the acceptable boundary.
- [readerErrorSecurityViolation](readererrorsecurityviolation.md): A security violation associated with the reader session has occurred.
