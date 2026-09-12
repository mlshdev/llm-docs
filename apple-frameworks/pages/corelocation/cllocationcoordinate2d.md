> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationcoordinate2d](https://developer.apple.com/documentation/corelocation/cllocationcoordinate2d)

# CLLocationCoordinate2D (Swift)

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The latitude and longitude associated with a location, specified using the WGS 84 reference frame.

## Declaration

```swift
struct CLLocationCoordinate2D
```

## Topics

### Creating a location coordinate

- [init()](cllocationcoordinate2d/init%28%29.md): Creates a location coordinate object.
- [init(latitude:longitude:)](cllocationcoordinate2d/init%28latitude_longitude_%29.md): Creates a location coordination object with the specified latitude and longitude values.
- [CLLocationCoordinate2DMake(\_:\_:)](cllocationcoordinate2dmake%28____%29.md): Formats a latitude and longitude value into a coordinate data structure format.

### Getting the geographic coordinates

- [latitude](cllocationcoordinate2d/latitude.md): The latitude in degrees.
- [longitude](cllocationcoordinate2d/longitude.md): The longitude in degrees.

### Validating a coordinate

- [CLLocationCoordinate2DIsValid(\_:)](cllocationcoordinate2disvalid%28__%29.md): Returns a Boolean value indicating whether the specified coordinate is valid.
- [kCLLocationCoordinate2DInvalid](kcllocationcoordinate2dinvalid.md): An invalid coordinate value.

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Location updates

- [Getting the current location of a device](getting-the-current-location-of-a-device.md): Start location services and provide information the system needs to optimize power usage for those services.
- [Handling location updates in the background](handling-location-updates-in-the-background.md): Configure your app to receive location updates when it isn’t running in the foreground.
- [Creating a location push service extension](creating-a-location-push-service-extension.md): Add and configure an extension to enable your location-sharing app to access a person’s location in response to a request from someone else.
- [CLLocation](cllocation.md): The latitude, longitude, and course information reported by the system.
- [CLFloor](clfloor.md): The floor of a building on which the user’s device is located.
- [CLVisit](clvisit.md): Information about the user’s location during a specific period of time.
- [CLLocationSourceInformation](cllocationsourceinformation.md): Information about the source that provides a location.
- [Monitoring location changes with Core Location](monitoring-location-changes-with-core-location.md): Define boundaries and act on user location updates.
- [CLServiceSession](clservicesession-pt7n.md): An object that provides diagnostics about an app’s authorization to use location services.

# CLLocationCoordinate2D (Objective-C)

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The latitude and longitude associated with a location, specified using the WGS 84 reference frame.

## Declaration

```objectivec
struct CLLocationCoordinate2D;
```

## Topics

### Creating a location coordinate

- [CLLocationCoordinate2DMake](cllocationcoordinate2dmake%28____%29.md): Formats a latitude and longitude value into a coordinate data structure format.

### Getting the geographic coordinates

- [latitude](cllocationcoordinate2d/latitude.md): The latitude in degrees.
- [longitude](cllocationcoordinate2d/longitude.md): The longitude in degrees.

### Validating a coordinate

- [CLLocationCoordinate2DIsValid](cllocationcoordinate2disvalid%28__%29.md): Returns a Boolean value indicating whether the specified coordinate is valid.
- [kCLLocationCoordinate2DInvalid](kcllocationcoordinate2dinvalid.md): An invalid coordinate value.

## Relationships

### Conforms To

- [Animatable](https://developer.apple.com/documentation/swiftui/animatable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Location updates

- [Getting the current location of a device](getting-the-current-location-of-a-device.md): Start location services and provide information the system needs to optimize power usage for those services.
- [Handling location updates in the background](handling-location-updates-in-the-background.md): Configure your app to receive location updates when it isn’t running in the foreground.
- [Creating a location push service extension](creating-a-location-push-service-extension.md): Add and configure an extension to enable your location-sharing app to access a person’s location in response to a request from someone else.
- [CLLocation](cllocation.md): The latitude, longitude, and course information reported by the system.
- [CLFloor](clfloor.md): The floor of a building on which the user’s device is located.
- [CLVisit](clvisit.md): Information about the user’s location during a specific period of time.
- [CLLocationSourceInformation](cllocationsourceinformation.md): Information about the source that provides a location.
- [CLServiceSession](clservicesession-2ddhd.md)
- [CLServiceSessionDiagnostic](clservicesessiondiagnostic.md)
- [CLBackgroundActivitySessionDiagnostic](clbackgroundactivitysessiondiagnostic.md)
- [CLLocationUpdater](cllocationupdater.md): An object that provides device location updates.
