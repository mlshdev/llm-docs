> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/communicationfailure](https://developer.apple.com/documentation/homekit/hmerror/communicationfailure)

# communicationFailure

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A communication failure.

## Declaration

```swift
static var communicationFailure: HMError.Code { get }
```

## See Also

### Detecting communication errors

- [accessDenied](accessdenied.md): An error indicating the current user doesn’t have privileges to perform the operation.
- [accessoryCommunicationFailure](accessorycommunicationfailure.md): The accessory failed to communicate.
- [accessoryPairingFailed](accessorypairingfailed.md): An attempt to pair with the accessory has failed.
- [accessorySentInvalidResponse](accessorysentinvalidresponse.md): An error indicating the accessory sent an invalid response.
- [clientRequestError](clientrequesterror.md): An error with the client request.
- [dataResetFailure](dataresetfailure.md): An attempt to reset the data failed.
- [timedOutWaitingForAccessory](timedoutwaitingforaccessory.md): An accessory did not respond timely.
- [partialCommunicationFailure](partialcommunicationfailure.md)
