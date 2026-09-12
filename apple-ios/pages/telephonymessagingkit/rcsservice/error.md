> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/error](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/error)

# RCSService.Error

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

A type to define errors that can occur when performing RCS operations.

## Declaration

```swift
enum Error
```

## Topics

### Identifying errors

- [RCSService.Error.serviceUnavailable](error/serviceunavailable.md): The service is unavailable.
- [RCSService.Error.invalidArgument](error/invalidargument.md): A method call provided an invalid argument.
- [RCSService.Error.decodingFailed](error/decodingfailed.md): Decoding an incoming RCS message failed.
- [RCSService.Error.notSupported](error/notsupported.md): The operation isn’t supported.
- [RCSService.Error.unknown](error/unknown.md): An unknown problem caused the error.
- [RCSService.Error.temporaryError](error/temporaryerror.md): The operation failed temporarily.
- [RCSService.Error.permanentError](error/permanenterror.md): The operation failed permanently.
- [RCSService.Error.internalError](error/internalerror.md): The framework encountered an unknown internal error.
- [RCSService.Error.notFound](error/notfound.md): A required resource wasn’t found.
- [RCSService.Error.maximumSizeExceeded](error/maximumsizeexceeded.md): The RCS message exceeded the maximum allowed size.
- [RCSService.Error.endToEndEncryptionNotSupported](error/endtoendencryptionnotsupported.md): The operation does not support end-to-end encryption.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
