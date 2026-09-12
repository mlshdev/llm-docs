> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger](https://developer.apple.com/documentation/homekit/hmeventtrigger)

# HMEventTrigger (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A trigger to activate an action set based on a set of events and optional conditions.

## Declaration

```swift
class HMEventTrigger
```

<a id="overview"></a>

## Overview

Use an [HMEventTrigger](hmeventtrigger.md) object to trigger the execution of a scene when a combination of characteristic or location events and conditions occur. To create an event trigger, first create one or more event objects that fire an event when the specified trigger values are met. For example, you might create an [HMCharacteristicEvent](hmcharacteristicevent.md) that fires when the front door is open. Then, you can use [HMEventTrigger](hmeventtrigger.md) convenience methods to create optional predicates that specify conditions that must be met before a scene is executed. For example, you might create a condition that ensures the scene is executed only after sunset.

## Topics

### Creating an event trigger

- [init(name:events:predicate:)](hmeventtrigger/init%28name_events_predicate_%29.md): Creates a new event trigger with the specified name, events, and predicate.
- [init(name:events:end:recurrences:predicate:)](hmeventtrigger/init%28name_events_end_recurrences_predicate_%29.md): Creates a new event trigger with the specified name, events, end events, recurrences, and predicate.

### Querying trigger activation state

- [triggerActivationState](hmeventtrigger/triggeractivationstate.md): The current activation state of the trigger.
- [HMEventTriggerActivationState](hmeventtriggeractivationstate.md): The activation state of an event trigger.

### Setting trigger events

- [events](hmeventtrigger/events.md): The events that activate the trigger.
- [updateEvents(\_:completionHandler:)](hmeventtrigger/updateevents%28__completionhandler_%29.md): Updates the set of trigger events.
- [Location events](location-events.md): Events that represent the user’s movement among regions.
- [Time events](time-events.md): Events based on time, significant occurrences, and time durations.
- [Characteristic events](characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](presence-events.md): Events based on the user’s presence in a home.
- [HMEvent](hmevent.md): The abstract base class for a HomeKit event.

### Restoring the previous scene after an event

- [endEvents](hmeventtrigger/endevents.md): The events associated with the end of scene represented by this trigger.
- [updateEndEvents(\_:completionHandler:)](hmeventtrigger/updateendevents%28__completionhandler_%29.md): Updates the set of end events associated with the event trigger.

### Controlling recurrence

- [recurrences](hmeventtrigger/recurrences.md): Specifies the days on which the trigger can execute.
- [updateRecurrences(\_:completionHandler:)](hmeventtrigger/updaterecurrences%28__completionhandler_%29.md): Updates the days of the week the trigger can repeat.
- [executeOnce](hmeventtrigger/executeonce.md): A Boolean that can execute the trigger many times.
- [updateExecuteOnce(\_:completionHandler:)](hmeventtrigger/updateexecuteonce%28__completionhandler_%29.md): Updates the repetition status of the event trigger.

### Adding a trigger condition

- [predicate](hmeventtrigger/predicate.md): The predicate to evaluate before executing the scene associated with the event trigger.
- [updatePredicate(\_:completionHandler:)](hmeventtrigger/updatepredicate%28__completionhandler_%29.md): Replaces the predicate used to evaluate execution of the scene associated with the event trigger.

### Creating predicates

- [predicateForEvaluatingTriggerOccurring(beforeSignificantEvent:)](hmeventtrigger/predicateforevaluatingtriggeroccurring%28beforesignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred before a significant event.
- [predicateForEvaluatingTriggerOccurring(afterSignificantEvent:)](hmeventtrigger/predicateforevaluatingtriggeroccurring%28aftersignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred after a significant event.
- [predicate(forEvaluatingTriggerOccurringBetweenSignificantEvent:secondSignificantEvent:)](hmeventtrigger/predicate%28forevaluatingtriggeroccurringbetweensignificantevent_secondsignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred between two significant events.
- [predicateForEvaluatingTrigger(occurringBefore:)](hmeventtrigger/predicateforevaluatingtrigger%28occurringbefore_%29.md): Creates a predicate that evaluates whether the event occurred before the specified time.
- [predicateForEvaluatingTrigger(occurringOn:)](hmeventtrigger/predicateforevaluatingtrigger%28occurringon_%29.md): Creates a predicate that evaluates whether the event occurred at the specified time.
- [predicateForEvaluatingTrigger(occurringAfter:)](hmeventtrigger/predicateforevaluatingtrigger%28occurringafter_%29.md): Creates a predicate that evaluates whether the event occurred at or after the specified time.
- [predicateForEvaluatingTriggerOccurringBetweenDate(with:secondDateWith:)](hmeventtrigger/predicateforevaluatingtriggeroccurringbetweendate%28with_seconddatewith_%29.md): Creates a predicate that evaluates whether the event occurred between the specified times.
- [predicateForEvaluatingTrigger(\_:relatedBy:toValue:)](hmeventtrigger/predicateforevaluatingtrigger%28__relatedby_tovalue_%29.md): Creates a predicate that evaluates whether a characteristic value relates to the specified value.
- [predicateForEvaluatingTrigger(withPresence:)](hmeventtrigger/predicateforevaluatingtrigger%28withpresence_%29.md): Creates a predicate that evaluates the current user presence against that specified in the presence event.
- [HMCharacteristicKeyPath](hmcharacteristickeypath.md): Specifies the key path for a characteristic in a predicate.
- [HMCharacteristicValueKeyPath](hmcharacteristicvaluekeypath.md): Specifies the key path for a characteristic value in a predicate.
- [HMPresenceKeyPath](hmpresencekeypath.md): Specifies the key path for a presence event in a predicate.

### Deprecated symbols

- [addEvent(\_:completionHandler:)](hmeventtrigger/addevent%28__completionhandler_%29.md): Deprecated. Adds a new event to the event trigger.
- [removeEvent(\_:completionHandler:)](hmeventtrigger/removeevent%28__completionhandler_%29.md): Deprecated. Removes the specified event from the event trigger.
- [predicateForEvaluatingTrigger(occurringBefore:applyingOffset:)](hmeventtrigger/predicateforevaluatingtrigger%28occurringbefore_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.
- [predicateForEvaluatingTrigger(occurringAfter:applyingOffset:)](hmeventtrigger/predicateforevaluatingtrigger%28occurringafter_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.

### Initializers

- [init(name:events:endEvents:recurrences:predicate:)](hmeventtrigger/init%28name_events_endevents_recurrences_predicate_%29.md)

## Relationships

### Inherits From

- [HMTrigger](hmtrigger.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Action Sets

- [HMActionSet](hmactionset.md): A collection of actions that you trigger as a group.
- [HMTimerTrigger](hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.

# HMEventTrigger (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A trigger to activate an action set based on a set of events and optional conditions.

## Declaration

```objectivec
@interface HMEventTrigger : HMTrigger
```

<a id="overview"></a>

## Overview

Use an [HMEventTrigger](hmeventtrigger.md) object to trigger the execution of a scene when a combination of characteristic or location events and conditions occur. To create an event trigger, first create one or more event objects that fire an event when the specified trigger values are met. For example, you might create an [HMCharacteristicEvent](hmcharacteristicevent.md) that fires when the front door is open. Then, you can use [HMEventTrigger](hmeventtrigger.md) convenience methods to create optional predicates that specify conditions that must be met before a scene is executed. For example, you might create a condition that ensures the scene is executed only after sunset.

## Topics

### Creating an event trigger

- [initWithName:events:predicate:](hmeventtrigger/init%28name_events_predicate_%29.md): Creates a new event trigger with the specified name, events, and predicate.
- [initWithName:events:endEvents:recurrences:predicate:](hmeventtrigger/init%28name_events_end_recurrences_predicate_%29.md): Creates a new event trigger with the specified name, events, end events, recurrences, and predicate.

### Querying trigger activation state

- [triggerActivationState](hmeventtrigger/triggeractivationstate.md): The current activation state of the trigger.
- [HMEventTriggerActivationState](hmeventtriggeractivationstate.md): The activation state of an event trigger.

### Setting trigger events

- [events](hmeventtrigger/events.md): The events that activate the trigger.
- [updateEvents:completionHandler:](hmeventtrigger/updateevents%28__completionhandler_%29.md): Updates the set of trigger events.
- [Location events](location-events.md): Events that represent the user’s movement among regions.
- [Time events](time-events.md): Events based on time, significant occurrences, and time durations.
- [Characteristic events](characteristic-events.md): Events based on the capabilities or characteristics of accessories.
- [Presence events](presence-events.md): Events based on the user’s presence in a home.
- [HMEvent](hmevent.md): The abstract base class for a HomeKit event.

### Restoring the previous scene after an event

- [endEvents](hmeventtrigger/endevents.md): The events associated with the end of scene represented by this trigger.
- [updateEndEvents:completionHandler:](hmeventtrigger/updateendevents%28__completionhandler_%29.md): Updates the set of end events associated with the event trigger.

### Controlling recurrence

- [recurrences](hmeventtrigger/recurrences.md): Specifies the days on which the trigger can execute.
- [updateRecurrences:completionHandler:](hmeventtrigger/updaterecurrences%28__completionhandler_%29.md): Updates the days of the week the trigger can repeat.
- [executeOnce](hmeventtrigger/executeonce.md): A Boolean that can execute the trigger many times.
- [updateExecuteOnce:completionHandler:](hmeventtrigger/updateexecuteonce%28__completionhandler_%29.md): Updates the repetition status of the event trigger.

### Adding a trigger condition

- [predicate](hmeventtrigger/predicate.md): The predicate to evaluate before executing the scene associated with the event trigger.
- [updatePredicate:completionHandler:](hmeventtrigger/updatepredicate%28__completionhandler_%29.md): Replaces the predicate used to evaluate execution of the scene associated with the event trigger.

### Creating predicates

- [predicateForEvaluatingTriggerOccurringBeforeSignificantEvent:](hmeventtrigger/predicateforevaluatingtriggeroccurring%28beforesignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred before a significant event.
- [predicateForEvaluatingTriggerOccurringAfterSignificantEvent:](hmeventtrigger/predicateforevaluatingtriggeroccurring%28aftersignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred after a significant event.
- [predicateForEvaluatingTriggerOccurringBetweenSignificantEvent:secondSignificantEvent:](hmeventtrigger/predicate%28forevaluatingtriggeroccurringbetweensignificantevent_secondsignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred between two significant events.
- [predicateForEvaluatingTriggerOccurringBeforeDateWithComponents:](hmeventtrigger/predicateforevaluatingtrigger%28occurringbefore_%29.md): Creates a predicate that evaluates whether the event occurred before the specified time.
- [predicateForEvaluatingTriggerOccurringOnDateWithComponents:](hmeventtrigger/predicateforevaluatingtrigger%28occurringon_%29.md): Creates a predicate that evaluates whether the event occurred at the specified time.
- [predicateForEvaluatingTriggerOccurringAfterDateWithComponents:](hmeventtrigger/predicateforevaluatingtrigger%28occurringafter_%29.md): Creates a predicate that evaluates whether the event occurred at or after the specified time.
- [predicateForEvaluatingTriggerOccurringBetweenDateWithComponents:secondDateWithComponents:](hmeventtrigger/predicateforevaluatingtriggeroccurringbetweendate%28with_seconddatewith_%29.md): Creates a predicate that evaluates whether the event occurred between the specified times.
- [predicateForEvaluatingTriggerWithCharacteristic:relatedBy:toValue:](hmeventtrigger/predicateforevaluatingtrigger%28__relatedby_tovalue_%29.md): Creates a predicate that evaluates whether a characteristic value relates to the specified value.
- [predicateForEvaluatingTriggerWithPresence:](hmeventtrigger/predicateforevaluatingtrigger%28withpresence_%29.md): Creates a predicate that evaluates the current user presence against that specified in the presence event.
- [HMCharacteristicKeyPath](hmcharacteristickeypath.md): Specifies the key path for a characteristic in a predicate.
- [HMCharacteristicValueKeyPath](hmcharacteristicvaluekeypath.md): Specifies the key path for a characteristic value in a predicate.
- [HMPresenceKeyPath](hmpresencekeypath.md): Specifies the key path for a presence event in a predicate.

### Deprecated symbols

- [addEvent:completionHandler:](hmeventtrigger/addevent%28__completionhandler_%29.md): Deprecated. Adds a new event to the event trigger.
- [removeEvent:completionHandler:](hmeventtrigger/removeevent%28__completionhandler_%29.md): Deprecated. Removes the specified event from the event trigger.
- [predicateForEvaluatingTriggerOccurringBeforeSignificantEvent:applyingOffset:](hmeventtrigger/predicateforevaluatingtrigger%28occurringbefore_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.
- [predicateForEvaluatingTriggerOccurringAfterSignificantEvent:applyingOffset:](hmeventtrigger/predicateforevaluatingtrigger%28occurringafter_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.

## Relationships

### Inherits From

- [HMTrigger](hmtrigger.md)

## See Also

### Action Sets

- [HMActionSet](hmactionset.md): A collection of actions that you trigger as a group.
- [HMTimerTrigger](hmtimertrigger.md): A trigger to activate an action set based on a periodic timer.
