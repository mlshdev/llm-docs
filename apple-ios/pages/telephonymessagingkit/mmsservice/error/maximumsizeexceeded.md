> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/error/maximumsizeexceeded](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/error/maximumsizeexceeded)

# MMSService.Error.maximumSizeExceeded

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

The MMS message exceeded the maximum allowed size.

## Declaration

```swift
case maximumSizeExceeded
```

## See Also

### Identifying errors

- [MMSService.Error.unknown](unknown.md): An unknown problem caused the error.
- [MMSService.Error.notSupported](notsupported.md): The operation isn’t supported.
- [MMSService.Error.invalidRecipient](invalidrecipient.md): The message contained one or more unknown or malformed recipients.
- [MMSService.Error.invalidMessageParts](invalidmessageparts.md): The message conteined one or more unknown or malformed parts.
- [MMSService.Error.internalError](internalerror.md): The framework encountered an unknown internal error.
- [MMSService.Error.mmsNotReady](mmsnotready.md): The framework isn’t ready to send MMS messages.
- [MMSService.Error.mmsNotConfiguredForCarrier](mmsnotconfiguredforcarrier.md): The carrier isn’t currently configured to handle MMS.
