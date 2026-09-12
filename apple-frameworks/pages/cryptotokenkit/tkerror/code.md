> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tkerror/code](https://developer.apple.com/documentation/cryptotokenkit/tkerror/code)

# TKError.Code (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Error codes from CryptoTokenKit.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [TKError.Code.notImplemented](code/notimplemented.md): The functionality is not implemented.
- [TKError.Code.communicationError](code/communicationerror.md): A communication error occurred.
- [TKError.Code.corruptedData](code/corrupteddata.md): The data was corrupted.
- [TKError.Code.canceledByUser](code/canceledbyuser.md): The operation was canceled by the user.
- [TKError.Code.authenticationFailed](code/authenticationfailed.md): Authentication failed.
- [TKError.Code.objectNotFound](code/objectnotfound.md): The object was not found.
- [TKError.Code.tokenNotFound](code/tokennotfound.md): The token was not found.
- [TKError.Code.badParameter](code/badparameter.md): An invalid parameter was provided.
- [TKError.Code.authenticationNeeded](code/authenticationneeded.md): Authentication is needed.
- [TKErrorAuthenticationFailed](code/tkerrorauthenticationfailed.md): Deprecated.
- [TKErrorObjectNotFound](code/tkerrorobjectnotfound.md): Deprecated.
- [TKErrorTokenNotFound](code/tkerrortokennotfound.md): Deprecated.

### Enumeration Cases

- [TKError.Code.invalidatedDeviceKey](code/invalidateddevicekey.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [TKError](../tkerror.md): An error specific to the CryptoTokenKit framework.
- [TKErrorDomain](../tkerrordomain.md): The domain for all CryptoTokenKit framework errors.

# TKErrorCode (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Error codes from CryptoTokenKit.

## Declaration

```objectivec
enum TKErrorCode : NSInteger;
```

## Topics

### Error Codes

- [TKErrorCodeNotImplemented](code/notimplemented.md): The functionality is not implemented.
- [TKErrorCodeCommunicationError](code/communicationerror.md): A communication error occurred.
- [TKErrorCodeCorruptedData](code/corrupteddata.md): The data was corrupted.
- [TKErrorCodeCanceledByUser](code/canceledbyuser.md): The operation was canceled by the user.
- [TKErrorCodeAuthenticationFailed](code/authenticationfailed.md): Authentication failed.
- [TKErrorCodeObjectNotFound](code/objectnotfound.md): The object was not found.
- [TKErrorCodeTokenNotFound](code/tokennotfound.md): The token was not found.
- [TKErrorCodeBadParameter](code/badparameter.md): An invalid parameter was provided.
- [TKErrorCodeAuthenticationNeeded](code/authenticationneeded.md): Authentication is needed.

### Enumeration Cases

- [TKErrorCodeInvalidatedDeviceKey](code/invalidateddevicekey.md)
- [TKErrorAuthenticationFailed](../tkerrorcode/tkerrorauthenticationfailed.md): Deprecated.
- [TKErrorObjectNotFound](../tkerrorcode/tkerrorobjectnotfound.md): Deprecated.
- [TKErrorTokenNotFound](../tkerrorcode/tkerrortokennotfound.md): Deprecated.

## See Also

### Errors

- [TKErrorDomain](../tkerrordomain.md): The domain for all CryptoTokenKit framework errors.
