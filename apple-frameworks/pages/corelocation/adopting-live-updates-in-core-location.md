> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/adopting-live-updates-in-core-location](https://developer.apple.com/documentation/corelocation/adopting-live-updates-in-core-location)

# Adopting live updates in Core Location

**Framework:** Core Location  
**Kind:** Sample Code  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · Xcode 15.3+

Simplify location delivery using asynchronous events in Swift.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC24 session 10212: [What’s new in location authorization](https://developer.apple.com/wwdc24/10212/) and WWDC23 session 10180: [Discover streamlined location updates](https://developer.apple.com/wwdc23/10180/).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

The live updates sample requires Xcode 16 or later and iOS 18 or later.

## See Also

### Essentials

- [Configuring your app to use location services](configuring-your-app-to-use-location-services.md): Prepare your app to start collecting location data.
- [Supporting live updates in SwiftUI and Mac Catalyst apps](supporting-live-updates-in-swiftui-and-mac-catalyst-apps.md): Enable background events by adding lifecycle event support.
- [CLLocationManager](cllocationmanager.md): The object you use to start and stop the delivery of location-related events to your app.
- [CLBackgroundActivitySession](clbackgroundactivitysession-3mzv3.md): An object that manages a visual indicator that keeps your app in use in the background, allowing it to receive updates or events.
- [CLLocationUpdate](cllocationupdate.md): A structure that contains the location information the framework delivers with each update.
- [Monitoring location changes with Core Location](monitoring-location-changes-with-core-location.md): Define boundaries and act on user location updates.
