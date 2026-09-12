> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/timedoutwaitingforaccessory](https://developer.apple.com/documentation/homekit/hmerror/timedoutwaitingforaccessory)

# timedOutWaitingForAccessory

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An accessory did not respond timely.

## Declaration

```swift
static var timedOutWaitingForAccessory: HMError.Code { get }
```

## See Also

### Detecting communication errors

- [accessDenied](accessdenied.md): An error indicating the current user doesn’t have privileges to perform the operation.
- [accessoryCommunicationFailure](accessorycommunicationfailure.md): The accessory failed to communicate.
- [accessoryPairingFailed](accessorypairingfailed.md): An attempt to pair with the accessory has failed.
- [accessorySentInvalidResponse](accessorysentinvalidresponse.md): An error indicating the accessory sent an invalid response.
- [clientRequestError](clientrequesterror.md): An error with the client request.
- [communicationFailure](communicationfailure.md): A communication failure.
- [dataResetFailure](dataresetfailure.md): An attempt to reset the data failed.
- [partialCommunicationFailure](partialcommunicationfailure.md)
