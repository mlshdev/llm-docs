> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/error/invalidrecipient

# MMSService.Error.invalidRecipient

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

The message contained one or more unknown or malformed recipients.

## Declaration

```swift
case invalidRecipient
```

## See Also

### Identifying errors

- [MMSService.Error.unknown](unknown.md): An unknown problem caused the error.
- [MMSService.Error.notSupported](notsupported.md): The operation isn’t supported.
- [MMSService.Error.invalidMessageParts](invalidmessageparts.md): The message conteined one or more unknown or malformed parts.
- [MMSService.Error.internalError](internalerror.md): The framework encountered an unknown internal error.
- [MMSService.Error.mmsNotReady](mmsnotready.md): The framework isn’t ready to send MMS messages.
- [MMSService.Error.mmsNotConfiguredForCarrier](mmsnotconfiguredforcarrier.md): The carrier isn’t currently configured to handle MMS.
- [MMSService.Error.maximumSizeExceeded](maximumsizeexceeded.md): The MMS message exceeded the maximum allowed size.
