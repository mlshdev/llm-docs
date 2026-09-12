> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/error/mmsnotconfiguredforcarrier](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/error/mmsnotconfiguredforcarrier)

# MMSService.Error.mmsNotConfiguredForCarrier

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

The carrier isn’t currently configured to handle MMS.

## Declaration

```swift
case mmsNotConfiguredForCarrier
```

<a id="discussion"></a>

## Discussion

This error might mean the carrier isn’t currently configured to handle MMS, or doesn’t support MMS at all.

## See Also

### Identifying errors

- [MMSService.Error.unknown](unknown.md): An unknown problem caused the error.
- [MMSService.Error.notSupported](notsupported.md): The operation isn’t supported.
- [MMSService.Error.invalidRecipient](invalidrecipient.md): The message contained one or more unknown or malformed recipients.
- [MMSService.Error.invalidMessageParts](invalidmessageparts.md): The message conteined one or more unknown or malformed parts.
- [MMSService.Error.internalError](internalerror.md): The framework encountered an unknown internal error.
- [MMSService.Error.mmsNotReady](mmsnotready.md): The framework isn’t ready to send MMS messages.
- [MMSService.Error.maximumSizeExceeded](maximumsizeexceeded.md): The MMS message exceeded the maximum allowed size.
