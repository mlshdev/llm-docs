> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm](https://developer.apple.com/documentation/eventkit/ekalarm)

# EKAlarm (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents an alarm.

## Declaration

```swift
class EKAlarm
```

<a id="overview"></a>

## Overview

An [EKAlarm](ekalarm.md) object represents an alarm in Event Kit. Use the [init(absoluteDate:)](ekalarm/init%28absolutedate_%29.md) and [init(relativeOffset:)](ekalarm/init%28relativeoffset_%29.md) class methods to create an alarm and use the properties to set information about an alarm. In macOS Mountain Lion, you can specify an action to trigger when the alarm fires via the `emailAddress`, `soundName`, or `url` property.

## Topics

### Creating an Alarm

- [init(absoluteDate:)](ekalarm/init%28absolutedate_%29.md): Creates and returns an alarm with an absolute date.
- [init(relativeOffset:)](ekalarm/init%28relativeoffset_%29.md): Creates and returns an alarm with a relative offset.

### Accessing Alarm Dates

- [absoluteDate](ekalarm/absolutedate.md): The absolute date for the alarm.
- [relativeOffset](ekalarm/relativeoffset.md): The offset from the start of an event, at which the alarm fires.

### Setting GeoFence-based Alarms

- [EKAlarmProximity](ekalarmproximity.md): A value indicating whether an alarm is triggered by entering or exiting a region.
- [proximity](ekalarm/proximity.md): A value indicating how a location-based alarm is triggered.
- [structuredLocation](ekalarm/structuredlocation.md): The location to trigger an alarm.

### Triggering Alarm Actions

These properties are only available in macOS 10.8 or later.

- [EKAlarmType](ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [type](ekalarm/type.md): The type of action to trigger when the alarm fires.
- [emailAddress](ekalarm/emailaddress.md): The recipient of an email to send when the alarm triggers.
- [soundName](ekalarm/soundname.md): The name of the sound to play when the alarm triggers.

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
- [EKStructuredLocation](ekstructuredlocation.md): `A` class that specifies a geofence to activate the alarm of a calendar item.

# EKAlarm (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents an alarm.

## Declaration

```objectivec
@interface EKAlarm : EKObject
```

<a id="overview"></a>

## Overview

An [EKAlarm](ekalarm.md) object represents an alarm in Event Kit. Use the [alarmWithAbsoluteDate:](ekalarm/init%28absolutedate_%29.md) and [alarmWithRelativeOffset:](ekalarm/init%28relativeoffset_%29.md) class methods to create an alarm and use the properties to set information about an alarm. In macOS Mountain Lion, you can specify an action to trigger when the alarm fires via the `emailAddress`, `soundName`, or `url` property.

## Topics

### Creating an Alarm

- [alarmWithAbsoluteDate:](ekalarm/init%28absolutedate_%29.md): Creates and returns an alarm with an absolute date.
- [alarmWithRelativeOffset:](ekalarm/init%28relativeoffset_%29.md): Creates and returns an alarm with a relative offset.

### Accessing Alarm Dates

- [absoluteDate](ekalarm/absolutedate.md): The absolute date for the alarm.
- [relativeOffset](ekalarm/relativeoffset.md): The offset from the start of an event, at which the alarm fires.

### Setting GeoFence-based Alarms

- [EKAlarmProximity](ekalarmproximity.md): A value indicating whether an alarm is triggered by entering or exiting a region.
- [proximity](ekalarm/proximity.md): A value indicating how a location-based alarm is triggered.
- [structuredLocation](ekalarm/structuredlocation.md): The location to trigger an alarm.

### Triggering Alarm Actions

These properties are only available in macOS 10.8 or later.

- [EKAlarmType](ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [type](ekalarm/type.md): The type of action to trigger when the alarm fires.
- [emailAddress](ekalarm/emailaddress.md): The recipient of an email to send when the alarm triggers.
- [soundName](ekalarm/soundname.md): The name of the sound to play when the alarm triggers.
- [url](ekalarm/url.md): Deprecated. The URL to open when the alarm triggers.

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Alarms

- [Setting an alarm](setting-an-alarm.md): Alert users of events and reminders with an alarm.
- [EKStructuredLocation](ekstructuredlocation.md): `A` class that specifies a geofence to activate the alarm of a calendar item.
