> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unlocationnotificationtrigger](https://developer.apple.com/documentation/usernotifications/unlocationnotificationtrigger)

# UNLocationNotificationTrigger (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · watchOS 3.0+

A trigger condition that causes the system to deliver a notification when the user’s device enters or exits a geographic region you specify.

## Declaration

```swift
class UNLocationNotificationTrigger
```

<a id="overview"></a>

## Overview

Create a [UNLocationNotificationTrigger](unlocationnotificationtrigger.md) object when you want to schedule the delivery of a local notification when the device enters or leaves a specific geographic region. The system limits the number of location-based triggers that it schedules at the same time.

> **Important**

>  Before scheduling any notifications using this trigger, your app must have authorization to use Core Location and must have when-in-use permissions. (Because the system actually monitors the regions, you don’t need to request always permissions for your app). For information about how to request authorization, see [Requesting authorization to use location services](../corelocation/requesting-authorization-to-use-location-services.md).

When configuring the region, use the [notifyOnEntry](../corelocation/clregion/notifyonentry.md) and [notifyOnExit](../corelocation/clregion/notifyonexit.md) properties to specify whether you want the system to deliver notifications on entry, on exit, or both. Listing 1 shows the creation of a trigger that fires only once when the user’s device enters a circular region with a 2-kilometer radius.

Listing 1. Creating a location-based trigger

**Swift**

```swift
let center = CLLocationCoordinate2D(latitude: 37.335400, longitude: -122.009201)
let region = CLCircularRegion(center: center, radius: 2000.0, identifier: "Headquarters")
region.notifyOnEntry = true
region.notifyOnExit = false
let trigger = UNLocationNotificationTrigger(region: region, repeats: false)
```

**Objective-C**

```objc
CLLocationCoordinate2D center = CLLocationCoordinate2DMake(37.335400, -122.009201);

CLCircularRegion* region = [[CLCircularRegion alloc] initWithCenter:center
         isn’t  radius:2000.0 identifier:@"Headquarters"];
region.notifyOnEntry = YES;
region.notifyOnExit = NO;

UNLocationNotificationTrigger* trigger = [UNLocationNotificationTrigger
                 triggerWithRegion:region repeats:NO];
```

The system doesn’t immediately trigger region-based notifications when the edge of the boundary is crossed. The system applies heuristics to ensure that the boundary crossing represents a deliberate event and isn’t the result of spurious location data. For more information about the heuristics, see [Monitoring the user’s proximity to geographic regions](../corelocation/monitoring-the-user-s-proximity-to-geographic-regions.md).

## Topics

### Creating a Location Trigger

- [init(region:repeats:)](unlocationnotificationtrigger/init%28region_repeats_%29.md): Creates a location trigger using the region parameter.

### Accessing the Trigger Region

- [region](unlocationnotificationtrigger/region.md): The region used to determine when the system sends the notification.

## Relationships

### Inherits From

- [UNNotificationTrigger](unnotificationtrigger.md)

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

### Triggers

- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md): A trigger condition that causes a notification the system delivers at a specific date and time.
- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md): A trigger condition that causes the system to deliver a notification after the amount of time you specify elapses.
- [UNPushNotificationTrigger](unpushnotificationtrigger.md): A trigger condition that indicates Apple Push Notification Service (APNs) has sent the notification.
- [UNNotificationTrigger](unnotificationtrigger.md): The common behavior for subclasses that trigger the delivery of a local or remote notification.

# UNLocationNotificationTrigger (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · watchOS 3.0+

A trigger condition that causes the system to deliver a notification when the user’s device enters or exits a geographic region you specify.

## Declaration

```objectivec
@interface UNLocationNotificationTrigger : UNNotificationTrigger
```

<a id="overview"></a>

## Overview

Create a [UNLocationNotificationTrigger](unlocationnotificationtrigger.md) object when you want to schedule the delivery of a local notification when the device enters or leaves a specific geographic region. The system limits the number of location-based triggers that it schedules at the same time.

> **Important**

>  Before scheduling any notifications using this trigger, your app must have authorization to use Core Location and must have when-in-use permissions. (Because the system actually monitors the regions, you don’t need to request always permissions for your app). For information about how to request authorization, see [Requesting authorization to use location services](../corelocation/requesting-authorization-to-use-location-services.md).

When configuring the region, use the [notifyOnEntry](../corelocation/clregion/notifyonentry.md) and [notifyOnExit](../corelocation/clregion/notifyonexit.md) properties to specify whether you want the system to deliver notifications on entry, on exit, or both. Listing 1 shows the creation of a trigger that fires only once when the user’s device enters a circular region with a 2-kilometer radius.

Listing 1. Creating a location-based trigger

**Swift**

```swift
let center = CLLocationCoordinate2D(latitude: 37.335400, longitude: -122.009201)
let region = CLCircularRegion(center: center, radius: 2000.0, identifier: "Headquarters")
region.notifyOnEntry = true
region.notifyOnExit = false
let trigger = UNLocationNotificationTrigger(region: region, repeats: false)
```

**Objective-C**

```objc
CLLocationCoordinate2D center = CLLocationCoordinate2DMake(37.335400, -122.009201);

CLCircularRegion* region = [[CLCircularRegion alloc] initWithCenter:center
         isn’t  radius:2000.0 identifier:@"Headquarters"];
region.notifyOnEntry = YES;
region.notifyOnExit = NO;

UNLocationNotificationTrigger* trigger = [UNLocationNotificationTrigger
                 triggerWithRegion:region repeats:NO];
```

The system doesn’t immediately trigger region-based notifications when the edge of the boundary is crossed. The system applies heuristics to ensure that the boundary crossing represents a deliberate event and isn’t the result of spurious location data. For more information about the heuristics, see [Monitoring the user’s proximity to geographic regions](../corelocation/monitoring-the-user-s-proximity-to-geographic-regions.md).

## Topics

### Creating a Location Trigger

- [triggerWithRegion:repeats:](unlocationnotificationtrigger/init%28region_repeats_%29.md): Creates a location trigger using the region parameter.

### Accessing the Trigger Region

- [region](unlocationnotificationtrigger/region.md): The region used to determine when the system sends the notification.

## Relationships

### Inherits From

- [UNNotificationTrigger](unnotificationtrigger.md)

## See Also

### Triggers

- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md): A trigger condition that causes a notification the system delivers at a specific date and time.
- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md): A trigger condition that causes the system to deliver a notification after the amount of time you specify elapses.
- [UNPushNotificationTrigger](unpushnotificationtrigger.md): A trigger condition that indicates Apple Push Notification Service (APNs) has sent the notification.
- [UNNotificationTrigger](unnotificationtrigger.md): The common behavior for subclasses that trigger the delivery of a local or remote notification.
