> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationsourceinformation](https://developer.apple.com/documentation/corelocation/cllocationsourceinformation)

# CLLocationSourceInformation (Swift)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information about the source that provides a location.

## Declaration

```swift
class CLLocationSourceInformation
```

<a id="overview"></a>

## Overview

[CLLocationSourceInformation](cllocationsourceinformation.md) contains information about the source that provides a [CLLocation](cllocation.md) instance, such as instances that [locationManager(\_:didUpdateLocations:)](cllocationmanagerdelegate/locationmanager%28__didupdatelocations_%29.md) delivers. For example, an app may choose to check the source information and reject locations if the [isSimulatedBySoftware](cllocationsourceinformation/issimulatedbysoftware.md) property is `true` when the developer isn’t debugging or testing the app.

## Topics

### Creating a location source information object

- [init(softwareSimulationState:andExternalAccessoryState:)](cllocationsourceinformation/init%28softwaresimulationstate_andexternalaccessorystate_%29.md): Creates an instance of location source information.

### Identifying the source of location data

- [isProducedByAccessory](cllocationsourceinformation/isproducedbyaccessory.md): A Boolean value that indicates whether the system receives the location from an external accessory.
- [isSimulatedBySoftware](cllocationsourceinformation/issimulatedbysoftware.md): A Boolean value that indicates whether the system generates the location using on-device software simulation.

### Initializers

- [init(coder:)](cllocationsourceinformation/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Location updates

- [Getting the current location of a device](getting-the-current-location-of-a-device.md): Start location services and provide information the system needs to optimize power usage for those services.
- [Handling location updates in the background](handling-location-updates-in-the-background.md): Configure your app to receive location updates when it isn’t running in the foreground.
- [Creating a location push service extension](creating-a-location-push-service-extension.md): Add and configure an extension to enable your location-sharing app to access a person’s location in response to a request from someone else.
- [CLLocation](cllocation.md): The latitude, longitude, and course information reported by the system.
- [CLLocationCoordinate2D](cllocationcoordinate2d.md): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.
- [CLFloor](clfloor.md): The floor of a building on which the user’s device is located.
- [CLVisit](clvisit.md): Information about the user’s location during a specific period of time.
- [Monitoring location changes with Core Location](monitoring-location-changes-with-core-location.md): Define boundaries and act on user location updates.
- [CLServiceSession](clservicesession-pt7n.md): An object that provides diagnostics about an app’s authorization to use location services.

# CLLocationSourceInformation (Objective-C)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information about the source that provides a location.

## Declaration

```objectivec
@interface CLLocationSourceInformation : NSObject
```

<a id="overview"></a>

## Overview

[CLLocationSourceInformation](cllocationsourceinformation.md) contains information about the source that provides a [CLLocation](cllocation.md) instance, such as instances that [locationManager:didUpdateLocations:](cllocationmanagerdelegate/locationmanager%28__didupdatelocations_%29.md) delivers. For example, an app may choose to check the source information and reject locations if the [isSimulatedBySoftware](cllocationsourceinformation/issimulatedbysoftware.md) property is `true` when the developer isn’t debugging or testing the app.

## Topics

### Creating a location source information object

- [initWithSoftwareSimulationState:andExternalAccessoryState:](cllocationsourceinformation/init%28softwaresimulationstate_andexternalaccessorystate_%29.md): Creates an instance of location source information.

### Identifying the source of location data

- [isProducedByAccessory](cllocationsourceinformation/isproducedbyaccessory.md): A Boolean value that indicates whether the system receives the location from an external accessory.
- [isSimulatedBySoftware](cllocationsourceinformation/issimulatedbysoftware.md): A Boolean value that indicates whether the system generates the location using on-device software simulation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Location updates

- [Getting the current location of a device](getting-the-current-location-of-a-device.md): Start location services and provide information the system needs to optimize power usage for those services.
- [Handling location updates in the background](handling-location-updates-in-the-background.md): Configure your app to receive location updates when it isn’t running in the foreground.
- [Creating a location push service extension](creating-a-location-push-service-extension.md): Add and configure an extension to enable your location-sharing app to access a person’s location in response to a request from someone else.
- [CLLocation](cllocation.md): The latitude, longitude, and course information reported by the system.
- [CLLocationCoordinate2D](cllocationcoordinate2d.md): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.
- [CLFloor](clfloor.md): The floor of a building on which the user’s device is located.
- [CLVisit](clvisit.md): Information about the user’s location during a specific period of time.
- [CLServiceSession](clservicesession-2ddhd.md)
- [CLServiceSessionDiagnostic](clservicesessiondiagnostic.md)
- [CLBackgroundActivitySessionDiagnostic](clbackgroundactivitysessiondiagnostic.md)
- [CLLocationUpdater](cllocationupdater.md): An object that provides device location updates.
