> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/predicateforevaluatingtrigger(occurringbefore:applyingoffset:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/predicateforevaluatingtrigger(occurringbefore:applyingoffset:))

# predicateForEvaluatingTrigger(occurringBefore:applyingOffset:) (Swift)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Creates a predicate that evaluates whether the event occurred before a significant event.

> Use [predicateForEvaluatingTriggerOccurring(beforeSignificantEvent:)](predicateforevaluatingtriggeroccurring%28beforesignificantevent_%29.md) instead.

## Declaration

```swift
class func predicateForEvaluatingTrigger(occurringBefore significantEvent: String, applyingOffset offset: DateComponents?) -> NSPredicate
```

## Parameters

- `significantEvent`: The significant event to compare against. Valid values for this parameter are `HMSignificantEventSunrise` and `HMSignificantEventSunset`.
- `offset`: An offset from the time of the significant event. To specify an offset before a significant event, the properties of the [NSDateComponents](../../foundation/nsdatecomponents.md) object must be negative values. For example, to specify 30 minutes before sunset, set the [minute](../../foundation/nsdatecomponents/minute.md) property to `-30`.

<a id="return-value"></a>

## Return Value

A predicate object that represents a condition to evaluate before executing the scene.

## See Also

### Deprecated symbols

- [addEvent(\_:completionHandler:)](addevent%28__completionhandler_%29.md): Deprecated. Adds a new event to the event trigger.
- [removeEvent(\_:completionHandler:)](removeevent%28__completionhandler_%29.md): Deprecated. Removes the specified event from the event trigger.
- [predicateForEvaluatingTrigger(occurringAfter:applyingOffset:)](predicateforevaluatingtrigger%28occurringafter_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.

# predicateForEvaluatingTriggerOccurringBeforeSignificantEvent:applyingOffset: (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Creates a predicate that evaluates whether the event occurred before a significant event.

> Use [predicateForEvaluatingTriggerOccurringBeforeSignificantEvent:](predicateforevaluatingtriggeroccurring%28beforesignificantevent_%29.md) instead.

## Declaration

```objectivec
+ (NSPredicate *) predicateForEvaluatingTriggerOccurringBeforeSignificantEvent:(NSString *) significantEvent applyingOffset:(NSDateComponents *) offset;
```

## Parameters

- `significantEvent`: The significant event to compare against. Valid values for this parameter are `HMSignificantEventSunrise` and `HMSignificantEventSunset`.
- `offset`: An offset from the time of the significant event. To specify an offset before a significant event, the properties of the [NSDateComponents](../../foundation/nsdatecomponents.md) object must be negative values. For example, to specify 30 minutes before sunset, set the [minute](../../foundation/nsdatecomponents/minute.md) property to `-30`.

<a id="return-value"></a>

## Return Value

A predicate object that represents a condition to evaluate before executing the scene.

## See Also

### Deprecated symbols

- [addEvent:completionHandler:](addevent%28__completionhandler_%29.md): Deprecated. Adds a new event to the event trigger.
- [removeEvent:completionHandler:](removeevent%28__completionhandler_%29.md): Deprecated. Removes the specified event from the event trigger.
- [predicateForEvaluatingTriggerOccurringAfterSignificantEvent:applyingOffset:](predicateforevaluatingtrigger%28occurringafter_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.
