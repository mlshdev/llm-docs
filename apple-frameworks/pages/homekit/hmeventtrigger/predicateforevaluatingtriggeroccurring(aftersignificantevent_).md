> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/predicateforevaluatingtriggeroccurring(aftersignificantevent:)](https://developer.apple.com/documentation/homekit/hmeventtrigger/predicateforevaluatingtriggeroccurring(aftersignificantevent:))

# predicateForEvaluatingTriggerOccurring(afterSignificantEvent:) (Swift)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a predicate that evaluates whether the event occurred after a significant event.

## Declaration

```swift
class func predicateForEvaluatingTriggerOccurring(afterSignificantEvent significantEvent: HMSignificantTimeEvent) -> NSPredicate
```

## Parameters

- `significantEvent`: The significant event to compare against.

<a id="return-value"></a>

## Return Value

A predicate object that represents a condition to evaluate before executing the scene.

## See Also

### Creating predicates

- [predicateForEvaluatingTriggerOccurring(beforeSignificantEvent:)](predicateforevaluatingtriggeroccurring%28beforesignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred before a significant event.
- [predicate(forEvaluatingTriggerOccurringBetweenSignificantEvent:secondSignificantEvent:)](predicate%28forevaluatingtriggeroccurringbetweensignificantevent_secondsignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred between two significant events.
- [predicateForEvaluatingTrigger(occurringBefore:)](predicateforevaluatingtrigger%28occurringbefore_%29.md): Creates a predicate that evaluates whether the event occurred before the specified time.
- [predicateForEvaluatingTrigger(occurringOn:)](predicateforevaluatingtrigger%28occurringon_%29.md): Creates a predicate that evaluates whether the event occurred at the specified time.
- [predicateForEvaluatingTrigger(occurringAfter:)](predicateforevaluatingtrigger%28occurringafter_%29.md): Creates a predicate that evaluates whether the event occurred at or after the specified time.
- [predicateForEvaluatingTriggerOccurringBetweenDate(with:secondDateWith:)](predicateforevaluatingtriggeroccurringbetweendate%28with_seconddatewith_%29.md): Creates a predicate that evaluates whether the event occurred between the specified times.
- [predicateForEvaluatingTrigger(\_:relatedBy:toValue:)](predicateforevaluatingtrigger%28__relatedby_tovalue_%29.md): Creates a predicate that evaluates whether a characteristic value relates to the specified value.
- [predicateForEvaluatingTrigger(withPresence:)](predicateforevaluatingtrigger%28withpresence_%29.md): Creates a predicate that evaluates the current user presence against that specified in the presence event.
- [HMCharacteristicKeyPath](../hmcharacteristickeypath.md): Specifies the key path for a characteristic in a predicate.
- [HMCharacteristicValueKeyPath](../hmcharacteristicvaluekeypath.md): Specifies the key path for a characteristic value in a predicate.
- [HMPresenceKeyPath](../hmpresencekeypath.md): Specifies the key path for a presence event in a predicate.

# predicateForEvaluatingTriggerOccurringAfterSignificantEvent: (Objective-C)

**Framework:** HomeKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a predicate that evaluates whether the event occurred after a significant event.

## Declaration

```objectivec
+ (NSPredicate *) predicateForEvaluatingTriggerOccurringAfterSignificantEvent:(HMSignificantTimeEvent *) significantEvent;
```

## Parameters

- `significantEvent`: The significant event to compare against.

<a id="return-value"></a>

## Return Value

A predicate object that represents a condition to evaluate before executing the scene.

## See Also

### Creating predicates

- [predicateForEvaluatingTriggerOccurringBeforeSignificantEvent:](predicateforevaluatingtriggeroccurring%28beforesignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred before a significant event.
- [predicateForEvaluatingTriggerOccurringBetweenSignificantEvent:secondSignificantEvent:](predicate%28forevaluatingtriggeroccurringbetweensignificantevent_secondsignificantevent_%29.md): Creates a predicate that evaluates whether the event occurred between two significant events.
- [predicateForEvaluatingTriggerOccurringBeforeDateWithComponents:](predicateforevaluatingtrigger%28occurringbefore_%29.md): Creates a predicate that evaluates whether the event occurred before the specified time.
- [predicateForEvaluatingTriggerOccurringOnDateWithComponents:](predicateforevaluatingtrigger%28occurringon_%29.md): Creates a predicate that evaluates whether the event occurred at the specified time.
- [predicateForEvaluatingTriggerOccurringAfterDateWithComponents:](predicateforevaluatingtrigger%28occurringafter_%29.md): Creates a predicate that evaluates whether the event occurred at or after the specified time.
- [predicateForEvaluatingTriggerOccurringBetweenDateWithComponents:secondDateWithComponents:](predicateforevaluatingtriggeroccurringbetweendate%28with_seconddatewith_%29.md): Creates a predicate that evaluates whether the event occurred between the specified times.
- [predicateForEvaluatingTriggerWithCharacteristic:relatedBy:toValue:](predicateforevaluatingtrigger%28__relatedby_tovalue_%29.md): Creates a predicate that evaluates whether a characteristic value relates to the specified value.
- [predicateForEvaluatingTriggerWithPresence:](predicateforevaluatingtrigger%28withpresence_%29.md): Creates a predicate that evaluates the current user presence against that specified in the presence event.
- [HMCharacteristicKeyPath](../hmcharacteristickeypath.md): Specifies the key path for a characteristic in a predicate.
- [HMCharacteristicValueKeyPath](../hmcharacteristicvaluekeypath.md): Specifies the key path for a characteristic value in a predicate.
- [HMPresenceKeyPath](../hmpresencekeypath.md): Specifies the key path for a presence event in a predicate.
