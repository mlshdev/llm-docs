> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyerrorcode](https://developer.apple.com/documentation/carkey/carkeyerrorcode)

# CarKeyErrorCode

**Framework:** CarKey  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

The errors that can occur when you perform remote-keyless entry operations on a vehicle.

## Declaration

```swift
enum CarKeyErrorCode
```

## Topics

### Getting the Error Code

- [CarKeyErrorCode.AnotherRequestInProgress](carkeyerrorcode/anotherrequestinprogress.md): An error that indicates a previous request is still in progress.
- [CarKeyErrorCode.ClientInBackground](carkeyerrorcode/clientinbackground.md): An error that indicates the operation occurred when the app was in the background.
- [CarKeyErrorCode.EnduringRequestUsingEventMethod](carkeyerrorcode/enduringrequestusingeventmethod.md): An error that indicates a mismatch between the initial request type and the results.
- [CarKeyErrorCode.FeatureNotSupported](carkeyerrorcode/featurenotsupported.md): An error that indicates the specified feature isn’t supported in the current environment.
- [CarKeyErrorCode.FunctionUnknown](carkeyerrorcode/functionunknown.md): An error that indicates the vehicle didn’t recognize the specified function identifier.
- [CarKeyErrorCode.Internal](carkeyerrorcode/internal.md): An error that indicates an unknown error occurred.
- [CarKeyErrorCode.MessageTooLong](carkeyerrorcode/messagetoolong.md): An error that indicates the command you sent was too long.
- [CarKeyErrorCode.RequestNotInProgress](carkeyerrorcode/requestnotinprogress.md): An error that indicates an enduring operation wasn’t running.
- [CarKeyErrorCode.RequestTimedOut](carkeyerrorcode/requesttimedout.md): An error that indicates the request didn’t complete in time.
- [CarKeyErrorCode.SecurityViolation](carkeyerrorcode/securityviolation.md): An error that indicates your app doesn’t have the required entitlements.
- [CarKeyErrorCode.SessionNotActive](carkeyerrorcode/sessionnotactive.md): An error that indicates an active session is currently inactive.
- [CarKeyErrorCode.VehicleNotConnected](carkeyerrorcode/vehiclenotconnected.md): An error that indicates the vehicle isn’t available to respond to the request.
- [CarKeyErrorCode.VehicleNotFound](carkeyerrorcode/vehiclenotfound.md): An error that indicates a vehicle with the specified ID wasn’t found.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
