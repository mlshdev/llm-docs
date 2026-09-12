> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/energykiterror/ratelimitexceeded](https://developer.apple.com/documentation/energykit/energykiterror/ratelimitexceeded)

# EnergyKitError.rateLimitExceeded

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

An error that indicates the app exceeds the rate limit for using the framework.

## Declaration

```swift
case rateLimitExceeded
```

## Mentioned In

- [Providing charging history for electric vehicles](../providing-informative-charging-history-for-electric-vehicles.md)

<a id="discussion"></a>

## Discussion

The framework throws this error if the app calls the EnergyKit API (such as submitting load events) too frequently.

## See Also

### Viewing error reasons

- [EnergyKitError.guidanceUnavailable](guidanceunavailable.md): An error that indicates the framework fails to provide guidance for a location.
- [EnergyKitError.inProgress](inprogress.md): An error that indicates a request is already in progress.
- [EnergyKitError.invalidLoadEvent](invalidloadevent.md): An error that indicates an invalid load event.
- [EnergyKitError.permissionDenied](permissiondenied.md): An error that indicates the client doesn’t have permission to access a requested API.
- [EnergyKitError.serviceUnavailable](serviceunavailable.md): An error that indicates when a requested service fails to start.
- [EnergyKitError.venueUnavailable](venueunavailable.md): An error that indicates a referenced venue is invalid, nonexistent, or restricted by the person.
- [EnergyKitError.locationServicesDenied](locationservicesdenied.md): An error that indicates that Location Services is off in the home’s settings.
- [EnergyKitError.unsupportedRegion](unsupportedregion.md): An error that indicates the device resides in an unsupported region.
