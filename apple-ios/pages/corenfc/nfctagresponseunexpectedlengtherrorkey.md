> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagresponseunexpectedlengtherrorkey](https://developer.apple.com/documentation/corenfc/nfctagresponseunexpectedlengtherrorkey)

# NFCTagResponseUnexpectedLengthErrorKey (Swift)

**Framework:** Core NFC  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A user-information dictionary key that indicates an invalid received response packet length.

## Declaration

```swift
let NFCTagResponseUnexpectedLengthErrorKey: String
```

<a id="Discussion"></a>

## Discussion

If an error object’s [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) dictionary contains this key, the received response packet length is invalid.

## See Also

### Errors

- [NFCReaderError.Code](nfcreadererror-swift.struct/code.md): Reader session and tag error codes.
- [NFCReaderError](nfcreadererror-swift.struct.md): An error type that indicates problems with reader sessions or tags.
- [NFCErrorDomain](nfcerrordomain.md): The domain for errors associated with Core NFC APIs.

# NFCTagResponseUnexpectedLengthErrorKey (Objective-C)

**Framework:** Core NFC  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A user-information dictionary key that indicates an invalid received response packet length.

## Declaration

```objectivec
extern NSString * const NFCTagResponseUnexpectedLengthErrorKey;
```

<a id="Discussion"></a>

## Discussion

If an error object’s [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) dictionary contains this key, the received response packet length is invalid.

## See Also

### Errors

- [NFCReaderError](nfcreadererror-swift.struct/code.md): Reader session and tag error codes.
- [NFCErrorDomain](nfcerrordomain.md): The domain for errors associated with Core NFC APIs.
