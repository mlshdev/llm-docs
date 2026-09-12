> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityname](https://developer.apple.com/documentation/deviceactivity/deviceactivityname)

# DeviceActivityName

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The unique name of an activity.

## Declaration

```swift
struct DeviceActivityName
```

<a id="overview"></a>

## Overview

Use `DeviceActivityName` to associate an activity with some of your application’s data. It’s not possible to have multiple activities with the same name. Monitoring a second activity with the same name as a previous activity overwrites the schedule for the first one.

## Topics

### Creating an Instance

- [init(rawValue:)](deviceactivityname/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [init(\_:)](deviceactivityname/init%28__%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Manage activities

- [DeviceActivityEvent](deviceactivityevent.md): An event that represents an application, category, or website activity.
- [DeviceActivitySchedule](deviceactivityschedule.md): A calendar-based schedule for when to monitor a device’s activity.
- [DeviceActivityCenter](deviceactivitycenter.md): A class that enables an application’s extension to start monitoring scheduled device activity.
