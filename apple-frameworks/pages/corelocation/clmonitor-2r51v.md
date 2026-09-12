> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v)

# CLMonitor

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An object that monitors the conditions you add to it.

## Declaration

```swift
actor CLMonitor
```

## Mentioned In

- [Handling location updates in the background](handling-location-updates-in-the-background.md)

<a id="overview"></a>

## Overview

Use `CLMonitor` to monitor for and observe events such as the entry to a specific geographic area or proximity to a beacon with characteristics that you specify.

This service is unavailable in a compatible iPad or iPhone app running in visionOS.

## Topics

### Creating a monitor

- [init(\_:)](clmonitor-2r51v/init%28__%29.md): Creates a location monitor with the name you specify.

### Adding and removing conditions

- [add(\_:identifier:)](clmonitor-2r51v/add%28__identifier_%29.md): Adds the given condition for monitoring.
- [add(\_:identifier:assuming:)](clmonitor-2r51v/add%28__identifier_assuming_%29.md): Adds the monitoring condition with the identifier and initial state you specify.
- [record(for:)](clmonitor-2r51v/record%28for_%29.md): A record that contains a condition and the most recent event your app receives.
- [remove(\_:)](clmonitor-2r51v/remove%28__%29.md): Removes the condition and its enclosed record associated with the identifier you provide.

### Accessing the location monitor’s identifiers

- [identifiers](clmonitor-2r51v/identifiers.md): An array that contains the identifiers of the conditions the framework is monitoring.

### Accessing the monitor’s events

- [events](clmonitor-2r51v/events-swift.property.md): An asynchronous sequence of events that represent the conditions the monitor object observes.

### Monitor conditions

- [CLMonitor.BeaconIdentityCondition](clmonitor-2r51v/beaconidentitycondition.md): A condition that describes the characteristics of a beacon.
- [CLMonitor.CircularGeographicCondition](clmonitor-2r51v/circulargeographiccondition.md): A condition that describes a circular geographic area that a center point and radius define.

### Monitor events

- [CLMonitor.Event](clmonitor-2r51v/event.md): An event object that the framework passes to the events sequence in the monitor.
- [CLMonitor.Record](clmonitor-2r51v/record.md): A structure that represents a condition and its associated event information that the framework is monitoring.
- [CLMonitor.Events](clmonitor-2r51v/events-swift.struct.md): A type that represents an asynchronous sequence of events.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
