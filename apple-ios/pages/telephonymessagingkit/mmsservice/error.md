> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/error](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/error)

# MMSService.Error

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

Enumeration for errors that can occur when performing MMS operations.

## Declaration

```swift
enum Error
```

## Topics

### Identifying errors

- [MMSService.Error.unknown](error/unknown.md): An unknown problem caused the error.
- [MMSService.Error.notSupported](error/notsupported.md): The operation isn’t supported.
- [MMSService.Error.invalidRecipient](error/invalidrecipient.md): The message contained one or more unknown or malformed recipients.
- [MMSService.Error.invalidMessageParts](error/invalidmessageparts.md): The message conteined one or more unknown or malformed parts.
- [MMSService.Error.internalError](error/internalerror.md): The framework encountered an unknown internal error.
- [MMSService.Error.mmsNotReady](error/mmsnotready.md): The framework isn’t ready to send MMS messages.
- [MMSService.Error.mmsNotConfiguredForCarrier](error/mmsnotconfiguredforcarrier.md): The carrier isn’t currently configured to handle MMS.
- [MMSService.Error.maximumSizeExceeded](error/maximumsizeexceeded.md): The MMS message exceeded the maximum allowed size.

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
