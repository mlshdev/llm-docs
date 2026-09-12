> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityevent](https://developer.apple.com/documentation/deviceactivity/deviceactivityevent)

# DeviceActivityEvent

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An event that represents an application, category, or website activity.

## Declaration

```swift
struct DeviceActivityEvent
```

<a id="overview"></a>

## Overview

Device activity is the amount of time an application, category, or web domain is frontmost on the screen and accumulates based on the time zone of the scheduled start date. Web domain activity includes domains visited in Safari or any third-party browser that contributes web usage via a `STWebpageController`.

## Topics

### Creating an Event

- [init(applications:categories:webDomains:threshold:)](deviceactivityevent/init%28applications_categories_webdomains_threshold_%29.md): Creates a new event.
- [DeviceActivityEvent.Name](deviceactivityevent/name.md): The unique name of an event.
- [includesAllActivity](deviceactivityevent/includesallactivity.md): A Boolean value that indicates whether the event includes all applications, categories, and web domains.

### Including Objects in an Event

- [applications](deviceactivityevent/applications.md): The applications that the event includes.
- [categories](deviceactivityevent/categories.md): The categories that the event includes.
- [webDomains](deviceactivityevent/webdomains.md): The web domains that the event includes.
- [threshold](deviceactivityevent/threshold.md): The amount of time to monitor the provided applications, categories, and web domains.

### Initializers

- [init(applications:categories:webDomains:threshold:includesPastActivity:)](deviceactivityevent/init%28applications_categories_webdomains_threshold_includespastactivity_%29.md): Creates a new event.

### Instance Properties

- [includesPastActivity](deviceactivityevent/includespastactivity.md): Whether the system takes into account the person’s device activity before your app starts monitoring the event.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Manage activities

- [DeviceActivityName](deviceactivityname.md): The unique name of an activity.
- [DeviceActivitySchedule](deviceactivityschedule.md): A calendar-based schedule for when to monitor a device’s activity.
- [DeviceActivityCenter](deviceactivitycenter.md): A class that enables an application’s extension to start monitoring scheduled device activity.
