> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/accessdenied](https://developer.apple.com/documentation/homekit/hmerror/accessdenied)

# accessDenied

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the current user doesn’t have privileges to perform the operation.

## Declaration

```swift
static var accessDenied: HMError.Code { get }
```

## See Also

### Detecting communication errors

- [accessoryCommunicationFailure](accessorycommunicationfailure.md): The accessory failed to communicate.
- [accessoryPairingFailed](accessorypairingfailed.md): An attempt to pair with the accessory has failed.
- [accessorySentInvalidResponse](accessorysentinvalidresponse.md): An error indicating the accessory sent an invalid response.
- [clientRequestError](clientrequesterror.md): An error with the client request.
- [communicationFailure](communicationfailure.md): A communication failure.
- [dataResetFailure](dataresetfailure.md): An attempt to reset the data failed.
- [timedOutWaitingForAccessory](timedoutwaitingforaccessory.md): An accessory did not respond timely.
- [partialCommunicationFailure](partialcommunicationfailure.md)
