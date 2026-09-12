> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/endevents](https://developer.apple.com/documentation/homekit/hmeventtrigger/endevents)

# endEvents (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The events associated with the end of scene represented by this trigger.

## Declaration

```swift
var endEvents: [HMEvent] { get }
```

<a id="Discussion"></a>

## Discussion

HomeKit restores the previously active scene when the events in this array trigger. For example, you can use end events to execute a scene for 10 minutes by specifying an [HMDurationEvent](../hmdurationevent.md) in the list of [endEvents](endevents.md). This restores the previous scene when the duration event triggers.

You can also use [HMCharacteristicEvent](../hmcharacteristicevent.md) and [HMCharacteristicThresholdRangeEvent](../hmcharacteristicthresholdrangeevent.md) objects as end events.

## See Also

### Restoring the previous scene after an event

- [updateEndEvents(\_:completionHandler:)](updateendevents%28__completionhandler_%29.md): Updates the set of end events associated with the event trigger.

# endEvents (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The events associated with the end of scene represented by this trigger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMEvent *> * endEvents;
```

<a id="Discussion"></a>

## Discussion

HomeKit restores the previously active scene when the events in this array trigger. For example, you can use end events to execute a scene for 10 minutes by specifying an [HMDurationEvent](../hmdurationevent.md) in the list of [endEvents](endevents.md). This restores the previous scene when the duration event triggers.

You can also use [HMCharacteristicEvent](../hmcharacteristicevent.md) and [HMCharacteristicThresholdRangeEvent](../hmcharacteristicthresholdrangeevent.md) objects as end events.

## See Also

### Restoring the previous scene after an event

- [updateEndEvents:completionHandler:](updateendevents%28__completionhandler_%29.md): Updates the set of end events associated with the event trigger.
