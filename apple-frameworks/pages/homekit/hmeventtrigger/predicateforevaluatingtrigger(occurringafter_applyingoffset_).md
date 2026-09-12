> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/predicateforevaluatingtrigger(occurringafter:applyingoffset:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/predicateforevaluatingtrigger(occurringafter:applyingoffset:))

# predicateForEvaluatingTrigger(occurringAfter:applyingOffset:) (Swift)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Creates a predicate that evaluates whether the event occurred before a significant event.

> Use [predicateForEvaluatingTriggerOccurring(afterSignificantEvent:)](predicateforevaluatingtriggeroccurring%28aftersignificantevent_%29.md) instead.

## Declaration

```swift
class func predicateForEvaluatingTrigger(occurringAfter significantEvent: String, applyingOffset offset: DateComponents?) -> NSPredicate
```

## Parameters

- `significantEvent`: The significant event to compare against. Valid values for this parameter are `HMSignificantEventSunrise` and `HMSignificantEventSunset`.
- `offset`: An offset from the time of the significant event. To specify an offset after a significant event, the properties of the [NSDateComponents](../../foundation/nsdatecomponents.md) object must be positive values. For example, to specify 30 minutes after sunset, set the [minute](../../foundation/nsdatecomponents/minute.md) property to `30`.

<a id="return-value"></a>

## Return Value

A predicate object that represents a condition to evaluate before executing the scene.

## See Also

### Deprecated symbols

- [addEvent(\_:completionHandler:)](addevent%28__completionhandler_%29.md): Deprecated. Adds a new event to the event trigger.
- [removeEvent(\_:completionHandler:)](removeevent%28__completionhandler_%29.md): Deprecated. Removes the specified event from the event trigger.
- [predicateForEvaluatingTrigger(occurringBefore:applyingOffset:)](predicateforevaluatingtrigger%28occurringbefore_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.

# predicateForEvaluatingTriggerOccurringAfterSignificantEvent:applyingOffset: (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Creates a predicate that evaluates whether the event occurred before a significant event.

> Use [predicateForEvaluatingTriggerOccurringAfterSignificantEvent:](predicateforevaluatingtriggeroccurring%28aftersignificantevent_%29.md) instead.

## Declaration

```objectivec
+ (NSPredicate *) predicateForEvaluatingTriggerOccurringAfterSignificantEvent:(NSString *) significantEvent applyingOffset:(NSDateComponents *) offset;
```

## Parameters

- `significantEvent`: The significant event to compare against. Valid values for this parameter are `HMSignificantEventSunrise` and `HMSignificantEventSunset`.
- `offset`: An offset from the time of the significant event. To specify an offset after a significant event, the properties of the [NSDateComponents](../../foundation/nsdatecomponents.md) object must be positive values. For example, to specify 30 minutes after sunset, set the [minute](../../foundation/nsdatecomponents/minute.md) property to `30`.

<a id="return-value"></a>

## Return Value

A predicate object that represents a condition to evaluate before executing the scene.

## See Also

### Deprecated symbols

- [addEvent:completionHandler:](addevent%28__completionhandler_%29.md): Deprecated. Adds a new event to the event trigger.
- [removeEvent:completionHandler:](removeevent%28__completionhandler_%29.md): Deprecated. Removes the specified event from the event trigger.
- [predicateForEvaluatingTriggerOccurringBeforeSignificantEvent:applyingOffset:](predicateforevaluatingtrigger%28occurringbefore_applyingoffset_%29.md): Deprecated. Creates a predicate that evaluates whether the event occurred before a significant event.
