> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clupdate](https://developer.apple.com/documentation/corelocation/clupdate)

# CLUpdate

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that represents a location update.

## Declaration

```objectivec
@interface CLUpdate : NSObject
```

## Topics

### Update properties

- [isStationary](clupdate/isstationary.md): Deprecated. A Boolean value that indicates whether the device is stationary.
- [location](clupdate/location.md): A person’s location, if available.

### Instance Properties

- [accuracyLimited](clupdate/accuracylimited.md)
- [authorizationDenied](clupdate/authorizationdenied.md)
- [authorizationDeniedGlobally](clupdate/authorizationdeniedglobally.md)
- [authorizationRequestInProgress](clupdate/authorizationrequestinprogress.md)
- [authorizationRestricted](clupdate/authorizationrestricted.md)
- [insufficientlyInUse](clupdate/insufficientlyinuse.md)
- [locationUnavailable](clupdate/locationunavailable.md)
- [serviceSessionRequired](clupdate/servicesessionrequired.md)
- [stationary](clupdate/stationary.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Monitoring

- [CLMonitor](clmonitor-6ynwz.md): An object that monitors the conditions you add to it.
