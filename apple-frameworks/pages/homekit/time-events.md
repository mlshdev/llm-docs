> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/time-events](https://developer.apple.com/documentation/homekit/time-events)

# Time events (Swift)

**Framework:** HomeKit  
**Kind:** API Collection

Events based on time, significant occurrences, and time durations.

## Topics

### Dates and times

- [HMCalendarEvent](hmcalendarevent.md): An event that fires at a specified time.
- [HMMutableCalendarEvent](hmmutablecalendarevent.md): A mutable event that fires at a specified time.
- [HMTimeEvent](hmtimeevent.md): An abstract superclass for time-based events.

### Significant events

- [HMSignificantEvent](hmsignificantevent.md): An event that represents significant time-based events, including sunrise and sunset.
- [HMSignificantTimeEvent](hmsignificanttimeevent.md): An event that fires at a time offset from a significant time-based event.
- [HMMutableSignificantTimeEvent](hmmutablesignificanttimeevent.md): A mutable event that fires at the specified temporal offset to a significant event.

### Durations

- [HMDurationEvent](hmdurationevent.md): An event that ends after the specified time duration.
- [HMMutableDurationEvent](hmmutabledurationevent.md): A mutable event that fires after the specified time duration.

## See Also

### Setting trigger events

- [events](hmeventtrigger/events.md): The events that activate the trigger.
- [updateEvents(\_:completionHandler:)](hmeventtrigger/updateevents%28__completionhandler_%29.md): Updates the set of trigger events.
- [Location events](location-events.md): Events that represent the user’s movement among regions.
- [Characteristic events](characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](presence-events.md): Events based on the user’s presence in a home.
- [HMEvent](hmevent.md): The abstract base class for a HomeKit event.

# Time events (Objective-C)

**Framework:** HomeKit  
**Kind:** API Collection

Events based on time, significant occurrences, and time durations.

## Topics

### Dates and times

- [HMCalendarEvent](hmcalendarevent.md): An event that fires at a specified time.
- [HMMutableCalendarEvent](hmmutablecalendarevent.md): A mutable event that fires at a specified time.
- [HMTimeEvent](hmtimeevent.md): An abstract superclass for time-based events.

### Significant events

- [HMSignificantEvent](hmsignificantevent.md): An event that represents significant time-based events, including sunrise and sunset.
- [HMSignificantTimeEvent](hmsignificanttimeevent.md): An event that fires at a time offset from a significant time-based event.
- [HMMutableSignificantTimeEvent](hmmutablesignificanttimeevent.md): A mutable event that fires at the specified temporal offset to a significant event.

### Durations

- [HMDurationEvent](hmdurationevent.md): An event that ends after the specified time duration.
- [HMMutableDurationEvent](hmmutabledurationevent.md): A mutable event that fires after the specified time duration.

## See Also

### Setting trigger events

- [events](hmeventtrigger/events.md): The events that activate the trigger.
- [updateEvents:completionHandler:](hmeventtrigger/updateevents%28__completionhandler_%29.md): Updates the set of trigger events.
- [Location events](location-events.md): Events that represent the user’s movement among regions.
- [Characteristic events](characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](presence-events.md): Events based on the user’s presence in a home.
- [HMEvent](hmevent.md): The abstract base class for a HomeKit event.
