> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tkerror](https://developer.apple.com/documentation/cryptotokenkit/tkerror)

# TKError

**Framework:** CryptoTokenKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error specific to the CryptoTokenKit framework.

## Declaration

```swift
struct TKError
```

## Topics

### Checking Error Codes

- [notImplemented](tkerror/notimplemented.md): The system doesn’t implement the requested functionality.
- [communicationError](tkerror/communicationerror.md): The system had a communication error.
- [corruptedData](tkerror/corrupteddata.md): The system idenfitied the data as corrupted.
- [canceledByUser](tkerror/canceledbyuser.md): The user canceled the operation.
- [authenticationFailed](tkerror/authenticationfailed.md): Authentication failed.
- [objectNotFound](tkerror/objectnotfound.md): The system didn’t find the object.
- [tokenNotFound](tkerror/tokennotfound.md): The system didn’t find the token.
- [badParameter](tkerror/badparameter.md): An invalid parameter was provided.
- [authenticationNeeded](tkerror/authenticationneeded.md): Authentication is needed.
- [TKErrorAuthenticationFailed](tkerror/tkerrorauthenticationfailed.md): Deprecated.
- [TKErrorObjectNotFound](tkerror/tkerrorobjectnotfound.md): Deprecated.
- [TKErrorTokenNotFound](tkerror/tkerrortokennotfound.md): Deprecated.

### Type Properties

- [errorDomain](tkerror/errordomain.md)
- [invalidatedDeviceKey](tkerror/invalidateddevicekey.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [TKErrorDomain](tkerrordomain.md): The domain for all CryptoTokenKit framework errors.
- [TKError.Code](tkerror/code.md): Error codes from CryptoTokenKit.
