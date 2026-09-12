> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspatialeventtrigger](https://developer.apple.com/documentation/intents/inspatialeventtrigger)

# INSpatialEventTrigger (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A trigger condition based on the user’s arrival or departure from a given location.

## Declaration

```swift
class INSpatialEventTrigger
```

<a id="overview"></a>

## Overview

When configuring tasks, you can add an [INSpatialEventTrigger](inspatialeventtrigger.md) object to display a reminder when the user approaches or leaves a specific location. Spatial event triggers rely on location services to generate events.

## Topics

### Initializing an Event Trigger

- [init(placemark:event:)](inspatialeventtrigger/init%28placemark_event_%29.md): Initializes the event trigger with the specified location-based information.

### Getting the Trigger Condition

- [placemark](inspatialeventtrigger/placemark.md): The location that triggers an event.
- [event](inspatialeventtrigger/event.md): The conditions which trigger an event for the specified location.
- [INSpatialEvent](inspatialevent.md): Constants indicating when to deliver location-related events.

### Initializers

- [init(coder:)](inspatialeventtrigger/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Event Triggers

- [INTemporalEventTrigger](intemporaleventtrigger.md): A trigger condition based on a date or time.
- [INTemporalEventTriggerTypeOptionsResolutionResult](intemporaleventtriggertypeoptionsresolutionresult.md): Deprecated. A resolution result that adds a temporal event trigger.
- [INDayOfWeekOptions](indayofweekoptions.md): Days of the week.

# INSpatialEventTrigger (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A trigger condition based on the user’s arrival or departure from a given location.

## Declaration

```objectivec
@interface INSpatialEventTrigger : NSObject
```

<a id="overview"></a>

## Overview

When configuring tasks, you can add an [INSpatialEventTrigger](inspatialeventtrigger.md) object to display a reminder when the user approaches or leaves a specific location. Spatial event triggers rely on location services to generate events.

## Topics

### Initializing an Event Trigger

- [initWithPlacemark:event:](inspatialeventtrigger/init%28placemark_event_%29.md): Initializes the event trigger with the specified location-based information.

### Getting the Trigger Condition

- [placemark](inspatialeventtrigger/placemark.md): The location that triggers an event.
- [event](inspatialeventtrigger/event.md): The conditions which trigger an event for the specified location.
- [INSpatialEvent](inspatialevent.md): Constants indicating when to deliver location-related events.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Event Triggers

- [INTemporalEventTrigger](intemporaleventtrigger.md): A trigger condition based on a date or time.
- [INTemporalEventTriggerTypeOptionsResolutionResult](intemporaleventtriggertypeoptionsresolutionresult.md): Deprecated. A resolution result that adds a temporal event trigger.
- [INDayOfWeekOptions](indayofweekoptions.md): Days of the week.
