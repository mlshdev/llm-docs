> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmerror/accessorypairingfailed

# accessoryPairingFailed

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to pair with the accessory has failed.

## Declaration

```swift
static var accessoryPairingFailed: HMError.Code { get }
```

## See Also

### Detecting communication errors

- [accessDenied](accessdenied.md): An error indicating the current user doesn’t have privileges to perform the operation.
- [accessoryCommunicationFailure](accessorycommunicationfailure.md): The accessory failed to communicate.
- [accessorySentInvalidResponse](accessorysentinvalidresponse.md): An error indicating the accessory sent an invalid response.
- [clientRequestError](clientrequesterror.md): An error with the client request.
- [communicationFailure](communicationfailure.md): A communication failure.
- [dataResetFailure](dataresetfailure.md): An attempt to reset the data failed.
- [timedOutWaitingForAccessory](timedoutwaitingforaccessory.md): An accessory did not respond timely.
- [partialCommunicationFailure](partialcommunicationfailure.md)
