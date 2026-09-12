> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/accessorycommunicationfailure](https://developer.apple.com/documentation/homekit/hmerror/accessorycommunicationfailure)

# accessoryCommunicationFailure

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The accessory failed to communicate.

## Declaration

```swift
static var accessoryCommunicationFailure: HMError.Code { get }
```

## See Also

### Detecting communication errors

- [accessDenied](accessdenied.md): An error indicating the current user doesn’t have privileges to perform the operation.
- [accessoryPairingFailed](accessorypairingfailed.md): An attempt to pair with the accessory has failed.
- [accessorySentInvalidResponse](accessorysentinvalidresponse.md): An error indicating the accessory sent an invalid response.
- [clientRequestError](clientrequesterror.md): An error with the client request.
- [communicationFailure](communicationfailure.md): A communication failure.
- [dataResetFailure](dataresetfailure.md): An attempt to reset the data failed.
- [timedOutWaitingForAccessory](timedoutwaitingforaccessory.md): An accessory did not respond timely.
- [partialCommunicationFailure](partialcommunicationfailure.md)
