> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/energykiterror](https://developer.apple.com/documentation/energykit/energykiterror)

# EnergyKitError

**Framework:** EnergyKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A specialized error that provides localized messages describing the error and why it occurred.

## Declaration

```swift
enum EnergyKitError
```

## Mentioned In

- [Providing charging history for electric vehicles](providing-informative-charging-history-for-electric-vehicles.md)

## Topics

### Viewing error reasons

- [EnergyKitError.guidanceUnavailable](energykiterror/guidanceunavailable.md): An error that indicates the framework fails to provide guidance for a location.
- [EnergyKitError.inProgress](energykiterror/inprogress.md): An error that indicates a request is already in progress.
- [EnergyKitError.invalidLoadEvent](energykiterror/invalidloadevent.md): An error that indicates an invalid load event.
- [EnergyKitError.permissionDenied](energykiterror/permissiondenied.md): An error that indicates the client doesn’t have permission to access a requested API.
- [EnergyKitError.serviceUnavailable](energykiterror/serviceunavailable.md): An error that indicates when a requested service fails to start.
- [EnergyKitError.venueUnavailable](energykiterror/venueunavailable.md): An error that indicates a referenced venue is invalid, nonexistent, or restricted by the person.
- [EnergyKitError.locationServicesDenied](energykiterror/locationservicesdenied.md): An error that indicates that Location Services is off in the home’s settings.
- [EnergyKitError.rateLimitExceeded](energykiterror/ratelimitexceeded.md): An error that indicates the app exceeds the rate limit for using the framework.
- [EnergyKitError.unsupportedRegion](energykiterror/unsupportedregion.md): An error that indicates the device resides in an unsupported region.

### Reading error messages

- [errorDescription](energykiterror/errordescription.md): A localized message describing what error occurred.
- [failureReason](energykiterror/failurereason.md): A localized message providing text if the person requests help.
- [helpAnchor](energykiterror/helpanchor.md): A localized message providing text if the user requests help
- [recoverySuggestion](energykiterror/recoverysuggestion.md): A localized message describing how to recover from the failure.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [ElectricityFlowDirection](electricityflowdirection.md): Information about which direction the electricity moves.
