> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvasresponse/errorcode](https://developer.apple.com/documentation/corenfc/nfcvasresponse/errorcode)

# NFCVASResponse.ErrorCode (Swift)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

## Declaration

```swift
enum ErrorCode
```

## Topics

### Enumeration Cases

- [NFCVASResponse.ErrorCode.dataNotActivated](errorcode/datanotactivated.md)
- [NFCVASResponse.ErrorCode.dataNotFound](errorcode/datanotfound.md)
- [NFCVASResponse.ErrorCode.incorrectData](errorcode/incorrectdata.md)
- [NFCVASResponse.ErrorCode.success](errorcode/success.md)
- [NFCVASResponse.ErrorCode.unsupportedApplicationVersion](errorcode/unsupportedapplicationversion.md)
- [NFCVASResponse.ErrorCode.userIntervention](errorcode/userintervention.md)
- [NFCVASResponse.ErrorCode.wrongLCField](errorcode/wronglcfield.md)
- [NFCVASResponse.ErrorCode.wrongParameters](errorcode/wrongparameters.md)

### Initializers

- [init(rawValue:)](errorcode/init%28rawvalue_%29.md)

### Type Properties

- [VASErrorCodeDataNotActivated](errorcode/vaserrorcodedatanotactivated.md): Deprecated. A constant indicating that the data isn’t activated.
- [VASErrorCodeDataNotFound](errorcode/vaserrorcodedatanotfound.md): Deprecated. A constant indicating that data wasn’t found.
- [VASErrorCodeIncorrectData](errorcode/vaserrorcodeincorrectdata.md): Deprecated. A constant indicating that the data is incorrect.
- [VASErrorCodeSuccess](errorcode/vaserrorcodesuccess.md): Deprecated. A constant indicating that the `GET VAS DATA` command was successful.
- [VASErrorCodeUnsupportedApplicationVersion](errorcode/vaserrorcodeunsupportedapplicationversion.md): Deprecated. A constant indicating an unsupported application version.
- [VASErrorCodeUserIntervention](errorcode/vaserrorcodeuserintervention.md): Deprecated. A constant indicating that the tag requires user intervention.
- [VASErrorCodeWrongLCField](errorcode/vaserrorcodewronglcfield.md): Deprecated. A constant indicating that the value in the Length Count field is wrong.
- [VASErrorCodeWrongParameters](errorcode/vaserrorcodewrongparameters.md): Deprecated. A constant indicating that VAS command parameters are wrong.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NFCFeliCaEncryptionId](../nfcfelicaencryptionid.md)
- [NFCFeliCaPollingRequestCode](../nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](../nfcfelicapollingtimeslot.md)
- [NFCISO15693RequestFlag](../nfciso15693requestflag.md)
- [NFCISO15693ResponseFlag](../nfciso15693responseflag.md)
- [NFCVASCommandConfiguration.Mode](../nfcvascommandconfiguration/mode-swift.enum.md)

# NFCVASErrorCode (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
enum NFCVASErrorCode : NSInteger;
```

## Topics

### Enumeration Cases

- [VASErrorCodeDataNotActivated](errorcode/vaserrorcodedatanotactivated.md): Deprecated. A constant indicating that the data isn’t activated.
- [VASErrorCodeDataNotFound](errorcode/vaserrorcodedatanotfound.md): Deprecated. A constant indicating that data wasn’t found.
- [VASErrorCodeIncorrectData](errorcode/vaserrorcodeincorrectdata.md): Deprecated. A constant indicating that the data is incorrect.
- [VASErrorCodeSuccess](errorcode/vaserrorcodesuccess.md): Deprecated. A constant indicating that the `GET VAS DATA` command was successful.
- [VASErrorCodeUnsupportedApplicationVersion](errorcode/vaserrorcodeunsupportedapplicationversion.md): Deprecated. A constant indicating an unsupported application version.
- [VASErrorCodeUserIntervention](errorcode/vaserrorcodeuserintervention.md): Deprecated. A constant indicating that the tag requires user intervention.
- [VASErrorCodeWrongLCField](errorcode/vaserrorcodewronglcfield.md): Deprecated. A constant indicating that the value in the Length Count field is wrong.
- [VASErrorCodeWrongParameters](errorcode/vaserrorcodewrongparameters.md): Deprecated. A constant indicating that VAS command parameters are wrong.
- [NFCVASErrorCodeDataNotActivated](errorcode/datanotactivated.md)
- [NFCVASErrorCodeDataNotFound](errorcode/datanotfound.md)
- [NFCVASErrorCodeIncorrectData](errorcode/incorrectdata.md)
- [NFCVASErrorCodeSuccess](errorcode/success.md)
- [NFCVASErrorCodeUnsupportedApplicationVersion](errorcode/unsupportedapplicationversion.md)
- [NFCVASErrorCodeUserIntervention](errorcode/userintervention.md)
- [NFCVASErrorCodeWrongLCField](errorcode/wronglcfield.md)
- [NFCVASErrorCodeWrongParameters](errorcode/wrongparameters.md)

## See Also

### Enumerations

- [NFCFeliCaEncryptionId](../nfcfelicaencryptionid.md)
- [NFCFeliCaPollingRequestCode](../nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](../nfcfelicapollingtimeslot.md)
- [NFCISO15693RequestFlag](../nfciso15693requestflag.md)
- [NFCISO15693ResponseFlag](../nfciso15693responseflag.md)
- [NFCVASMode](../nfcvascommandconfiguration/mode-swift.enum.md)
