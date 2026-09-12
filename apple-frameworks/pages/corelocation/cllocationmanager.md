> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager](https://developer.apple.com/documentation/corelocation/cllocationmanager)

# CLLocationManager (Swift)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object you use to start and stop the delivery of location-related events to your app.

## Declaration

```swift
class CLLocationManager
```

## Mentioned In

- [Determining the proximity to an iBeacon device](determining-the-proximity-to-an-ibeacon-device.md)
- [Configuring your app to use location services](configuring-your-app-to-use-location-services.md)
- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md)
- [Getting heading and course information](getting-heading-and-course-information.md)
- [Getting the current location of a device](getting-the-current-location-of-a-device.md)
- [Requesting authorization to use location services](requesting-authorization-to-use-location-services.md)
- [Monitoring the user’s proximity to geographic regions](monitoring-the-user-s-proximity-to-geographic-regions.md)
- [Supporting live updates in SwiftUI and Mac Catalyst apps](supporting-live-updates-in-swiftui-and-mac-catalyst-apps.md)

<a id="overview"></a>

## Overview

A [CLLocationManager](cllocationmanager.md) object is the central place to manage your app’s location-related behaviors. Use a location-manager object to configure, start, and stop location services. You might use these services to:

- Track large or small changes in the user’s current location with a configurable degree of accuracy.
- Report heading changes from the onboard compass.
- Monitor geographical regions of interest and generate events when someone enters or leaves those regions.
- Report the range to nearby Bluetooth beacons.

Create one or more location-manager objects in your app and use them where you need location data. After you create a location-manager object, configure it so that Core Location knows how often to report location changes. In particular, configure the [distanceFilter](cllocationmanager/distancefilter.md) and [desiredAccuracy](cllocationmanager/desiredaccuracy.md) properties with values that reflect your app’s needs.

A [CLLocationManager](cllocationmanager.md) object reports all location-related updates to its [delegate](cllocationmanager/delegate.md) object, which is an object that conforms to the [CLLocationManagerDelegate](cllocationmanagerdelegate.md) protocol. Assign the delegate immediately when you configure your location manager, because the system reports the app’s authorization status to the delegate’s [locationManagerDidChangeAuthorization(\_:)](cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md) method after the location manager finishes initializing itself.  Core Location calls the methods of your delegate object using the [RunLoop](../foundation/runloop.md) of the thread on which you initialized the [CLLocationManager](cllocationmanager.md) object. That thread must itself have an active [RunLoop](../foundation/runloop.md), like the one found in your app’s main thread.

For more information, see [Configuring your app to use location services](configuring-your-app-to-use-location-services.md).

## Topics

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable()](cllocationmanager/significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable()](cllocationmanager/headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [isAuthorizedForWidgetUpdates](cllocationmanager/isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](cllocationmanager/accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailable(for:)](cllocationmanager/ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable()](cllocationmanager/israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled()](cllocationmanager/locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.

### Receiving data from location services

- [delegate](cllocationmanager/delegate.md): The delegate object to receive update events.
- [CLLocationManagerDelegate](cllocationmanagerdelegate.md): The methods you use to receive events from an associated location-manager object.

### Requesting authorization for location services

- [requestWhenInUseAuthorization()](cllocationmanager/requestwheninuseauthorization%28%29.md): Requests the user’s permission to use location services while the app is in use.
- [requestAlwaysAuthorization()](cllocationmanager/requestalwaysauthorization%28%29.md): Requests the user’s permission to use location services regardless of whether the app is in use.
- [requestTemporaryFullAccuracyAuthorization(withPurposeKey:completion:)](cllocationmanager/requesttemporaryfullaccuracyauthorization%28withpurposekey_completion_%29.md): Requests permission to temporarily use location services with full accuracy and reports the results to the provided completion handler.
- [requestTemporaryFullAccuracyAuthorization(withPurposeKey:)](cllocationmanager/requesttemporaryfullaccuracyauthorization%28withpurposekey_%29.md): Requests permission to temporarily use location services with full accuracy.
- [authorizationStatus](cllocationmanager/authorizationstatus-swift.property.md): The current authorization status for the app.
- [CLAuthorizationStatus](clauthorizationstatus.md): Constants that indicate the app’s authorization to use location services.
- [NSLocationDefaultAccuracyReduced](../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.

### Specifying distance and accuracy

- [distanceFilter](cllocationmanager/distancefilter.md): The minimum distance in meters the device must move horizontally before an update event is generated.
- [CLLocationDistanceMax](cllocationdistancemax.md): A constant indicating the maximum distance.
- [kCLDistanceFilterNone](kcldistancefilternone.md): A constant indicating that all movement should be reported.
- [CLLocationDistance](cllocationdistance.md): A distance in meters from an existing location.
- [desiredAccuracy](cllocationmanager/desiredaccuracy.md): The accuracy of the location data that your app wants to receive.
- [CLLocationAccuracy](cllocationaccuracy.md): The accuracy of a geographical coordinate.

### Running the standard location service

- [startUpdatingLocation()](cllocationmanager/startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [stopUpdatingLocation()](cllocationmanager/stopupdatinglocation%28%29.md): Stops the generation of location updates.
- [requestLocation()](cllocationmanager/requestlocation%28%29.md): Requests the one-time delivery of the user’s current location.
- [pausesLocationUpdatesAutomatically](cllocationmanager/pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [allowsBackgroundLocationUpdates](cllocationmanager/allowsbackgroundlocationupdates.md): A Boolean value that indicates whether the app receives location updates when running in the background.
- [showsBackgroundLocationIndicator](cllocationmanager/showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](cllocationmanager/activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
- [CLActivityType](clactivitytype.md): Constants that indicate the type of activity associated with location updates.

### Running the significant change location service

- [startMonitoringSignificantLocationChanges()](cllocationmanager/startmonitoringsignificantlocationchanges%28%29.md): Starts the generation of updates based on significant location changes.
- [stopMonitoringSignificantLocationChanges()](cllocationmanager/stopmonitoringsignificantlocationchanges%28%29.md): Stops the delivery of location events based on significant location changes.

### Running the visits location service

- [startMonitoringVisits()](cllocationmanager/startmonitoringvisits%28%29.md): Starts the delivery of visit-related events.
- [stopMonitoringVisits()](cllocationmanager/stopmonitoringvisits%28%29.md): Stops the delivery of visit-related events.

### Running the heading service

- [startUpdatingHeading()](cllocationmanager/startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading()](cllocationmanager/stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay()](cllocationmanager/dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](cllocationmanager/headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](cllocationmanager/headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](cldeviceorientation.md): Constants indicating the physical orientation of the device.

### Running the region-monitoring service

- [monitoredRegions](cllocationmanager/monitoredregions.md): The set of shared regions monitored by all location-manager objects.
- [maximumRegionMonitoringDistance](cllocationmanager/maximumregionmonitoringdistance.md): The largest boundary distance that can be assigned to a region.

### Performing beacon ranging

- [startRangingBeacons(satisfying:)](cllocationmanager/startrangingbeacons%28satisfying_%29.md): Starts the delivery of notifications for the specified beacon constraints.
- [stopRangingBeacons(satisfying:)](cllocationmanager/stoprangingbeacons%28satisfying_%29.md): Stops the delivery of notifications for the specified beacon constraints.
- [rangedBeaconConstraints](cllocationmanager/rangedbeaconconstraints.md): The set of beacon constraints currently being tracked using ranging.

### Monitoring location push notifications

- [startMonitoringLocationPushes(completion:)](cllocationmanager/startmonitoringlocationpushes%28completion_%29.md): Starts monitoring for the delivery of Apple Push Notification service (APNs) location pushes, and provides a device-specific token for sending pushes.
- [stopMonitoringLocationPushes()](cllocationmanager/stopmonitoringlocationpushes%28%29.md): Stops monitoring for Apple Push Notification service (APNs) location pushes.

### Getting recent location and heading data

- [location](cllocationmanager/location.md): The most recently retrieved user location.
- [heading](cllocationmanager/heading.md): The most recently reported heading.

### Deferring location updates

- [CLTimeIntervalMax](cltimeintervalmax.md): A value representing an unlimited amount of time.

### Deprecated

- [Deprecated symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [requestHistoricalLocations(purposeKey:sampleCount:completionHandler:)](cllocationmanager/requesthistoricallocations%28purposekey_samplecount_completionhandler_%29.md)

### Instance Properties

- [headingBody](cllocationmanager/headingbody.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Configuring your app to use location services](configuring-your-app-to-use-location-services.md): Prepare your app to start collecting location data.
- [Supporting live updates in SwiftUI and Mac Catalyst apps](supporting-live-updates-in-swiftui-and-mac-catalyst-apps.md): Enable background events by adding lifecycle event support.
- [CLBackgroundActivitySession](clbackgroundactivitysession-3mzv3.md): An object that manages a visual indicator that keeps your app in use in the background, allowing it to receive updates or events.
- [CLLocationUpdate](cllocationupdate.md): A structure that contains the location information the framework delivers with each update.
- [Adopting live updates in Core Location](adopting-live-updates-in-core-location.md): Simplify location delivery using asynchronous events in Swift.
- [Monitoring location changes with Core Location](monitoring-location-changes-with-core-location.md): Define boundaries and act on user location updates.

# CLLocationManager (Objective-C)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object you use to start and stop the delivery of location-related events to your app.

## Declaration

```objectivec
@interface CLLocationManager : NSObject
```

## Mentioned In

- [Determining the proximity to an iBeacon device](determining-the-proximity-to-an-ibeacon-device.md)
- [Configuring your app to use location services](configuring-your-app-to-use-location-services.md)
- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md)
- [Getting heading and course information](getting-heading-and-course-information.md)
- [Getting the current location of a device](getting-the-current-location-of-a-device.md)
- [Requesting authorization to use location services](requesting-authorization-to-use-location-services.md)
- [Monitoring the user’s proximity to geographic regions](monitoring-the-user-s-proximity-to-geographic-regions.md)
- [Supporting live updates in SwiftUI and Mac Catalyst apps](supporting-live-updates-in-swiftui-and-mac-catalyst-apps.md)

<a id="overview"></a>

## Overview

A [CLLocationManager](cllocationmanager.md) object is the central place to manage your app’s location-related behaviors. Use a location-manager object to configure, start, and stop location services. You might use these services to:

- Track large or small changes in the user’s current location with a configurable degree of accuracy.
- Report heading changes from the onboard compass.
- Monitor geographical regions of interest and generate events when someone enters or leaves those regions.
- Report the range to nearby Bluetooth beacons.

Create one or more location-manager objects in your app and use them where you need location data. After you create a location-manager object, configure it so that Core Location knows how often to report location changes. In particular, configure the [distanceFilter](cllocationmanager/distancefilter.md) and [desiredAccuracy](cllocationmanager/desiredaccuracy.md) properties with values that reflect your app’s needs.

A [CLLocationManager](cllocationmanager.md) object reports all location-related updates to its [delegate](cllocationmanager/delegate.md) object, which is an object that conforms to the [CLLocationManagerDelegate](cllocationmanagerdelegate.md) protocol. Assign the delegate immediately when you configure your location manager, because the system reports the app’s authorization status to the delegate’s [locationManagerDidChangeAuthorization:](cllocationmanagerdelegate/locationmanagerdidchangeauthorization%28__%29.md) method after the location manager finishes initializing itself.  Core Location calls the methods of your delegate object using the [NSRunLoop](../foundation/runloop.md) of the thread on which you initialized the [CLLocationManager](cllocationmanager.md) object. That thread must itself have an active [NSRunLoop](../foundation/runloop.md), like the one found in your app’s main thread.

For more information, see [Configuring your app to use location services](configuring-your-app-to-use-location-services.md).

## Topics

### Determining the availability of services

- [significantLocationChangeMonitoringAvailable](cllocationmanager/significantlocationchangemonitoringavailable%28%29.md): Returns a Boolean value indicating whether the significant-change location service is available on the device.
- [headingAvailable](cllocationmanager/headingavailable%28%29.md): Returns a Boolean value indicating whether the location manager is able to generate heading-related events.
- [authorizedForWidgetUpdates](cllocationmanager/isauthorizedforwidgetupdates.md): A Boolean value that indicates whether a widget is eligible to receive location updates.
- [accuracyAuthorization](cllocationmanager/accuracyauthorization.md): A value that indicates the level of location accuracy the app has permission to use.
- [isMonitoringAvailableForClass:](cllocationmanager/ismonitoringavailable%28for_%29.md): Returns a Boolean value indicating whether the device supports region monitoring using the specified class.
- [isRangingAvailable](cllocationmanager/israngingavailable%28%29.md): Returns a Boolean value indicating whether the device supports ranging of beacons that use the iBeacon protocol.
- [locationServicesEnabled](cllocationmanager/locationservicesenabled%28%29.md): Returns a Boolean value indicating whether location services are enabled on the device.

### Receiving data from location services

- [delegate](cllocationmanager/delegate.md): The delegate object to receive update events.
- [CLLocationManagerDelegate](cllocationmanagerdelegate.md): The methods you use to receive events from an associated location-manager object.

### Requesting authorization for location services

- [requestWhenInUseAuthorization](cllocationmanager/requestwheninuseauthorization%28%29.md): Requests the user’s permission to use location services while the app is in use.
- [requestAlwaysAuthorization](cllocationmanager/requestalwaysauthorization%28%29.md): Requests the user’s permission to use location services regardless of whether the app is in use.
- [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:completion:](cllocationmanager/requesttemporaryfullaccuracyauthorization%28withpurposekey_completion_%29.md): Requests permission to temporarily use location services with full accuracy and reports the results to the provided completion handler.
- [requestTemporaryFullAccuracyAuthorizationWithPurposeKey:](cllocationmanager/requesttemporaryfullaccuracyauthorization%28withpurposekey_%29.md): Requests permission to temporarily use location services with full accuracy.
- [authorizationStatus](cllocationmanager/authorizationstatus-swift.property.md): The current authorization status for the app.
- [CLAuthorizationStatus](clauthorizationstatus.md): Constants that indicate the app’s authorization to use location services.
- [NSLocationDefaultAccuracyReduced](../bundleresources/information-property-list/nslocationdefaultaccuracyreduced.md): A Boolean value that indicates whether the app requests reduced location accuracy by default.
- [NSLocationAlwaysAndWhenInUseUsageDescription](../bundleresources/information-property-list/nslocationalwaysandwheninuseusagedescription.md): A message that tells people why the app is requesting access to their location information at all times.

### Specifying distance and accuracy

- [distanceFilter](cllocationmanager/distancefilter.md): The minimum distance in meters the device must move horizontally before an update event is generated.
- [CLLocationDistanceMax](cllocationdistancemax.md): A constant indicating the maximum distance.
- [kCLDistanceFilterNone](kcldistancefilternone.md): A constant indicating that all movement should be reported.
- [CLLocationDistance](cllocationdistance.md): A distance in meters from an existing location.
- [desiredAccuracy](cllocationmanager/desiredaccuracy.md): The accuracy of the location data that your app wants to receive.
- [CLLocationAccuracy](cllocationaccuracy.md): The accuracy of a geographical coordinate.

### Running the standard location service

- [startUpdatingLocation](cllocationmanager/startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [stopUpdatingLocation](cllocationmanager/stopupdatinglocation%28%29.md): Stops the generation of location updates.
- [requestLocation](cllocationmanager/requestlocation%28%29.md): Requests the one-time delivery of the user’s current location.
- [pausesLocationUpdatesAutomatically](cllocationmanager/pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [allowsBackgroundLocationUpdates](cllocationmanager/allowsbackgroundlocationupdates.md): A Boolean value that indicates whether the app receives location updates when running in the background.
- [showsBackgroundLocationIndicator](cllocationmanager/showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](cllocationmanager/activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
- [CLActivityType](clactivitytype.md): Constants that indicate the type of activity associated with location updates.

### Running the significant change location service

- [startMonitoringSignificantLocationChanges](cllocationmanager/startmonitoringsignificantlocationchanges%28%29.md): Starts the generation of updates based on significant location changes.
- [stopMonitoringSignificantLocationChanges](cllocationmanager/stopmonitoringsignificantlocationchanges%28%29.md): Stops the delivery of location events based on significant location changes.

### Running the visits location service

- [startMonitoringVisits](cllocationmanager/startmonitoringvisits%28%29.md): Starts the delivery of visit-related events.
- [stopMonitoringVisits](cllocationmanager/stopmonitoringvisits%28%29.md): Stops the delivery of visit-related events.

### Running the heading service

- [startUpdatingHeading](cllocationmanager/startupdatingheading%28%29.md): Starts the generation of updates that report the user’s current heading.
- [stopUpdatingHeading](cllocationmanager/stopupdatingheading%28%29.md): Stops the generation of heading updates.
- [dismissHeadingCalibrationDisplay](cllocationmanager/dismissheadingcalibrationdisplay%28%29.md): Dismisses the heading calibration view from the screen immediately.
- [headingFilter](cllocationmanager/headingfilter.md): The minimum angular change in degrees required to generate new heading events.
- [kCLHeadingFilterNone](kclheadingfilternone.md): A constant indicating that all header values should be reported.
- [CLLocationDegrees](cllocationdegrees.md): A latitude or longitude value specified in degrees.
- [headingOrientation](cllocationmanager/headingorientation.md): Deprecated. The device orientation to use when computing heading values.
- [CLDeviceOrientation](cldeviceorientation.md): Constants indicating the physical orientation of the device.

### Running the region-monitoring service

- [monitoredRegions](cllocationmanager/monitoredregions.md): The set of shared regions monitored by all location-manager objects.
- [maximumRegionMonitoringDistance](cllocationmanager/maximumregionmonitoringdistance.md): The largest boundary distance that can be assigned to a region.

### Performing beacon ranging

- [startRangingBeaconsSatisfyingConstraint:](cllocationmanager/startrangingbeacons%28satisfying_%29.md): Starts the delivery of notifications for the specified beacon constraints.
- [stopRangingBeaconsSatisfyingConstraint:](cllocationmanager/stoprangingbeacons%28satisfying_%29.md): Stops the delivery of notifications for the specified beacon constraints.
- [rangedBeaconConstraints](cllocationmanager/rangedbeaconconstraints.md): The set of beacon constraints currently being tracked using ranging.

### Monitoring location push notifications

- [startMonitoringLocationPushesWithCompletion:](cllocationmanager/startmonitoringlocationpushes%28completion_%29.md): Starts monitoring for the delivery of Apple Push Notification service (APNs) location pushes, and provides a device-specific token for sending pushes.
- [stopMonitoringLocationPushes](cllocationmanager/stopmonitoringlocationpushes%28%29.md): Stops monitoring for Apple Push Notification service (APNs) location pushes.

### Getting recent location and heading data

- [location](cllocationmanager/location.md): The most recently retrieved user location.
- [heading](cllocationmanager/heading.md): The most recently reported heading.

### Deferring location updates

- [CLTimeIntervalMax](cltimeintervalmax.md): A value representing an unlimited amount of time.

### Deprecated

- [Deprecated symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [requestHistoricalLocationsWithPurposeKey:sampleCount:completionHandler:](cllocationmanager/requesthistoricallocations%28purposekey_samplecount_completionhandler_%29.md)

### Instance Properties

- [headingBody](cllocationmanager/headingbody.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Configuring your app to use location services](configuring-your-app-to-use-location-services.md): Prepare your app to start collecting location data.
- [Supporting live updates in SwiftUI and Mac Catalyst apps](supporting-live-updates-in-swiftui-and-mac-catalyst-apps.md): Enable background events by adding lifecycle event support.
- [CLBackgroundActivitySession](clbackgroundactivitysession-4nl4y.md): An object that manages a visual indicator that keeps your app in use in the background, allowing it to receive updates or events.
