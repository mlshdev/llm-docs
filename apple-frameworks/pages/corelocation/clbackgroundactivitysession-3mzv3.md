> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbackgroundactivitysession-3mzv3](https://developer.apple.com/documentation/corelocation/clbackgroundactivitysession-3mzv3)

# CLBackgroundActivitySession

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that manages a visual indicator that keeps your app in use in the background, allowing it to receive updates or events.

## Declaration

```swift
final class CLBackgroundActivitySession
```

## Mentioned In

- [Handling location updates in the background](handling-location-updates-in-the-background.md)
- [Supporting live updates in SwiftUI and Mac Catalyst apps](supporting-live-updates-in-swiftui-and-mac-catalyst-apps.md)

<a id="overview"></a>

## Overview

Use `CLBackgroundActivitySession` to start a background activity session that allows a when-in-use authorized app to receive location updates or monitoring events.

## Topics

### Creating a background activity session

- [init()](clbackgroundactivitysession-3mzv3/init%28%29.md): Creates a new background activity session.

### Ending the session

- [invalidate()](clbackgroundactivitysession-3mzv3/invalidate%28%29.md): Invalidates the background activity session.

### Classes

- [CLBackgroundActivitySession.Diagnostics](clbackgroundactivitysession-3mzv3/diagnostics-swift.class.md)

### Structures

- [CLBackgroundActivitySession.Diagnostic](clbackgroundactivitysession-3mzv3/diagnostic.md)

### Instance Properties

- [diagnostics](clbackgroundactivitysession-3mzv3/diagnostics-swift.property.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Configuring your app to use location services](configuring-your-app-to-use-location-services.md): Prepare your app to start collecting location data.
- [Supporting live updates in SwiftUI and Mac Catalyst apps](supporting-live-updates-in-swiftui-and-mac-catalyst-apps.md): Enable background events by adding lifecycle event support.
- [CLLocationManager](cllocationmanager.md): The object you use to start and stop the delivery of location-related events to your app.
- [CLLocationUpdate](cllocationupdate.md): A structure that contains the location information the framework delivers with each update.
- [Adopting live updates in Core Location](adopting-live-updates-in-core-location.md): Simplify location delivery using asynchronous events in Swift.
- [Monitoring location changes with Core Location](monitoring-location-changes-with-core-location.md): Define boundaries and act on user location updates.
