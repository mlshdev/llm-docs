> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekstructuredlocation](https://developer.apple.com/documentation/eventkit/ekstructuredlocation)

# EKStructuredLocation (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

`A` class that specifies a geofence to activate the alarm of a calendar item.

## Declaration

```swift
class EKStructuredLocation
```

<a id="overview"></a>

## Overview

Use [init(title:)](ekstructuredlocation/init%28title_%29.md) to create a new structured location, then set it to the [structuredLocation](ekalarm/structuredlocation.md) property of an [EKAlarm](ekalarm.md) object.

## Topics

### Creating Structured Locations

- [init(title:)](ekstructuredlocation/init%28title_%29.md): Creates a new structured location with the specified title.
- [init(mapItem:)](ekstructuredlocation/init%28mapitem_%29.md): Creates a new structured location with the specified map item.

### Accessing Structured Location Properties

- [title](ekstructuredlocation/title.md): The title of the location.
- [geoLocation](ekstructuredlocation/geolocation.md): The core location.
- [radius](ekstructuredlocation/radius.md): A minimum distance from the core location that would trigger the alarm or reminder.

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Alarms

- [Setting an alarm](setting-an-alarm.md): Alert users of events and reminders with an alarm.
- [EKAlarm](ekalarm.md): A class that represents an alarm.

# EKStructuredLocation (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

`A` class that specifies a geofence to activate the alarm of a calendar item.

## Declaration

```objectivec
@interface EKStructuredLocation : EKObject
```

<a id="overview"></a>

## Overview

Use [locationWithTitle:](ekstructuredlocation/init%28title_%29.md) to create a new structured location, then set it to the [structuredLocation](ekalarm/structuredlocation.md) property of an [EKAlarm](ekalarm.md) object.

## Topics

### Creating Structured Locations

- [locationWithTitle:](ekstructuredlocation/init%28title_%29.md): Creates a new structured location with the specified title.
- [locationWithMapItem:](ekstructuredlocation/init%28mapitem_%29.md): Creates a new structured location with the specified map item.

### Accessing Structured Location Properties

- [title](ekstructuredlocation/title.md): The title of the location.
- [geoLocation](ekstructuredlocation/geolocation.md): The core location.
- [radius](ekstructuredlocation/radius.md): A minimum distance from the core location that would trigger the alarm or reminder.

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Alarms

- [Setting an alarm](setting-an-alarm.md): Alert users of events and reminders with an alarm.
- [EKAlarm](ekalarm.md): A class that represents an alarm.
