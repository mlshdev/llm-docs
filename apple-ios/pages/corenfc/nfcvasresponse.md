> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvasresponse](https://developer.apple.com/documentation/corenfc/nfcvasresponse)

# NFCVASResponse (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object representing the response from a single `GET VAS DATA` command.

## Declaration

```swift
class NFCVASResponse
```

## Topics

### Getting the Response Status

- [status](nfcvasresponse/status.md): A response APDU status code.
- [VASErrorCode](vaserrorcode.md): Deprecated. Constants representing APDU status codes for a VAS response.

### Getting the VAS Data

- [vasData](nfcvasresponse/vasdata.md): A data object containing the VAS data.

### Getting the Mobile Token

- [mobileToken](nfcvasresponse/mobiletoken.md): A mobile token value.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Receiving VAS Responses

- [readerSession(\_:didReceive:)](nfcvasreadersessiondelegate/readersession%28__didreceive_%29.md): Tells the delegate that the reader session received a VAS response.

# NFCVASResponse (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object representing the response from a single `GET VAS DATA` command.

## Declaration

```objectivec
@interface NFCVASResponse : NSObject
```

## Topics

### Getting the Response Status

- [status](nfcvasresponse/status.md): A response APDU status code.
- [VASErrorCode](vaserrorcode.md): Deprecated. Constants representing APDU status codes for a VAS response.

### Getting the VAS Data

- [vasData](nfcvasresponse/vasdata.md): A data object containing the VAS data.

### Getting the Mobile Token

- [mobileToken](nfcvasresponse/mobiletoken.md): A mobile token value.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Receiving VAS Responses

- [readerSession:didReceiveVASResponses:](nfcvasreadersessiondelegate/readersession%28__didreceive_%29.md): Tells the delegate that the reader session received a VAS response.
