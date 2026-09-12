> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/vaserrorcode](https://developer.apple.com/documentation/corenfc/vaserrorcode)

# VASErrorCode (Swift)

**Framework:** Core NFC  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Constants representing APDU status codes for a VAS response.

## Declaration

```swift
typealias VASErrorCode = NFCVASResponse.ErrorCode
```

## Topics

### Status Codes

- [VASErrorCodeSuccess](nfcvasresponse/errorcode/vaserrorcodesuccess.md): Deprecated. A constant indicating that the `GET VAS DATA` command was successful.
- [VASErrorCodeUserIntervention](nfcvasresponse/errorcode/vaserrorcodeuserintervention.md): Deprecated. A constant indicating that the tag requires user intervention.

### Data Codes

- [VASErrorCodeDataNotActivated](nfcvasresponse/errorcode/vaserrorcodedatanotactivated.md): Deprecated. A constant indicating that the data isn’t activated.
- [VASErrorCodeDataNotFound](nfcvasresponse/errorcode/vaserrorcodedatanotfound.md): Deprecated. A constant indicating that data wasn’t found.
- [VASErrorCodeIncorrectData](nfcvasresponse/errorcode/vaserrorcodeincorrectdata.md): Deprecated. A constant indicating that the data is incorrect.

### Error Codes

- [VASErrorCodeUnsupportedApplicationVersion](nfcvasresponse/errorcode/vaserrorcodeunsupportedapplicationversion.md): Deprecated. A constant indicating an unsupported application version.
- [VASErrorCodeWrongLCField](nfcvasresponse/errorcode/vaserrorcodewronglcfield.md): Deprecated. A constant indicating that the value in the Length Count field is wrong.
- [VASErrorCodeWrongParameters](nfcvasresponse/errorcode/vaserrorcodewrongparameters.md): Deprecated. A constant indicating that VAS command parameters are wrong.

## See Also

### Getting the Response Status

- [status](nfcvasresponse/status.md): A response APDU status code.

# VASErrorCode (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Constants representing APDU status codes for a VAS response.

## Declaration

```objectivec
typedef NFCVASErrorCode VASErrorCode;
```

## Topics

### Status Codes

- [VASErrorCodeSuccess](nfcvasresponse/errorcode/vaserrorcodesuccess.md): Deprecated. A constant indicating that the `GET VAS DATA` command was successful.
- [VASErrorCodeUserIntervention](nfcvasresponse/errorcode/vaserrorcodeuserintervention.md): Deprecated. A constant indicating that the tag requires user intervention.

### Data Codes

- [VASErrorCodeDataNotActivated](nfcvasresponse/errorcode/vaserrorcodedatanotactivated.md): Deprecated. A constant indicating that the data isn’t activated.
- [VASErrorCodeDataNotFound](nfcvasresponse/errorcode/vaserrorcodedatanotfound.md): Deprecated. A constant indicating that data wasn’t found.
- [VASErrorCodeIncorrectData](nfcvasresponse/errorcode/vaserrorcodeincorrectdata.md): Deprecated. A constant indicating that the data is incorrect.

### Error Codes

- [VASErrorCodeUnsupportedApplicationVersion](nfcvasresponse/errorcode/vaserrorcodeunsupportedapplicationversion.md): Deprecated. A constant indicating an unsupported application version.
- [VASErrorCodeWrongLCField](nfcvasresponse/errorcode/vaserrorcodewronglcfield.md): Deprecated. A constant indicating that the value in the Length Count field is wrong.
- [VASErrorCodeWrongParameters](nfcvasresponse/errorcode/vaserrorcodewrongparameters.md): Deprecated. A constant indicating that VAS command parameters are wrong.

## See Also

### Getting the Response Status

- [status](nfcvasresponse/status.md): A response APDU status code.
