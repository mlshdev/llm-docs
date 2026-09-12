> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbackgroundactivitysession-4nl4y](https://developer.apple.com/documentation/corelocation/clbackgroundactivitysession-4nl4y)

# CLBackgroundActivitySession

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that manages a visual indicator that keeps your app in use in the background, allowing it to receive updates or events.

## Declaration

```objectivec
@interface CLBackgroundActivitySession : NSObject
```

<a id="overview"></a>

## Overview

Use `CLBackgroundActivitySession` to start a background activity session that allows a when-in-use authorized app to receive location updates or monitoring events.

## Topics

### Creating a background activity session

- [backgroundActivitySession](clbackgroundactivitysession-4nl4y/backgroundactivitysession.md): Creates a new background activity session.

### Ending the session

- [invalidate](clbackgroundactivitysession-4nl4y/invalidate.md): Invalidates the background activity session.

### Type Methods

- [backgroundActivitySessionWithQueue:handler:](clbackgroundactivitysession-4nl4y/backgroundactivitysessionwithqueue_handler_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Configuring your app to use location services](configuring-your-app-to-use-location-services.md): Prepare your app to start collecting location data.
- [Supporting live updates in SwiftUI and Mac Catalyst apps](supporting-live-updates-in-swiftui-and-mac-catalyst-apps.md): Enable background events by adding lifecycle event support.
- [CLLocationManager](cllocationmanager.md): The object you use to start and stop the delivery of location-related events to your app.
