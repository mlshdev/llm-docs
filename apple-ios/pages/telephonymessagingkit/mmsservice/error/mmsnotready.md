> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/error/mmsnotready](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/error/mmsnotready)

# MMSService.Error.mmsNotReady

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

The framework isn’t ready to send MMS messages.

## Declaration

```swift
case mmsNotReady
```

<a id="discussion"></a>

## Discussion

You can handle this error by making another attempt to send the MMS message later.

## See Also

### Identifying errors

- [MMSService.Error.unknown](unknown.md): An unknown problem caused the error.
- [MMSService.Error.notSupported](notsupported.md): The operation isn’t supported.
- [MMSService.Error.invalidRecipient](invalidrecipient.md): The message contained one or more unknown or malformed recipients.
- [MMSService.Error.invalidMessageParts](invalidmessageparts.md): The message conteined one or more unknown or malformed parts.
- [MMSService.Error.internalError](internalerror.md): The framework encountered an unknown internal error.
- [MMSService.Error.mmsNotConfiguredForCarrier](mmsnotconfiguredforcarrier.md): The carrier isn’t currently configured to handle MMS.
- [MMSService.Error.maximumSizeExceeded](maximumsizeexceeded.md): The MMS message exceeded the maximum allowed size.
