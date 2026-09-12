> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clservicesessiondiagnostic](https://developer.apple.com/documentation/corelocation/clservicesessiondiagnostic)

# CLServiceSessionDiagnostic

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@interface CLServiceSessionDiagnostic : NSObject
```

## Topics

### Instance Properties

- [alwaysAuthorizationDenied](clservicesessiondiagnostic/alwaysauthorizationdenied.md): A Boolean value that indicates someone has not granted the always authorization to your app.
- [authorizationDenied](clservicesessiondiagnostic/authorizationdenied.md)
- [authorizationDeniedGlobally](clservicesessiondiagnostic/authorizationdeniedglobally.md)
- [authorizationRequestInProgress](clservicesessiondiagnostic/authorizationrequestinprogress.md)
- [authorizationRestricted](clservicesessiondiagnostic/authorizationrestricted.md)
- [fullAccuracyDenied](clservicesessiondiagnostic/fullaccuracydenied.md)
- [insufficientlyInUse](clservicesessiondiagnostic/insufficientlyinuse.md)
- [serviceSessionRequired](clservicesessiondiagnostic/servicesessionrequired.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Location updates

- [Getting the current location of a device](getting-the-current-location-of-a-device.md): Start location services and provide information the system needs to optimize power usage for those services.
- [Handling location updates in the background](handling-location-updates-in-the-background.md): Configure your app to receive location updates when it isn’t running in the foreground.
- [Creating a location push service extension](creating-a-location-push-service-extension.md): Add and configure an extension to enable your location-sharing app to access a person’s location in response to a request from someone else.
- [CLLocation](cllocation.md): The latitude, longitude, and course information reported by the system.
- [CLLocationCoordinate2D](cllocationcoordinate2d.md): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.
- [CLFloor](clfloor.md): The floor of a building on which the user’s device is located.
- [CLVisit](clvisit.md): Information about the user’s location during a specific period of time.
- [CLLocationSourceInformation](cllocationsourceinformation.md): Information about the source that provides a location.
- [CLServiceSession](clservicesession-2ddhd.md)
- [CLBackgroundActivitySessionDiagnostic](clbackgroundactivitysessiondiagnostic.md)
- [CLLocationUpdater](cllocationupdater.md): An object that provides device location updates.
