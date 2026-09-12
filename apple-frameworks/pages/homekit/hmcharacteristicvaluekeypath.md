> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicvaluekeypath](https://developer.apple.com/documentation/homekit/hmcharacteristicvaluekeypath)

# HMCharacteristicValueKeyPath (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the key path for a characteristic value in a predicate.

## Declaration

```swift
let HMCharacteristicValueKeyPath: String
```

## See Also

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
- [HMPresenceKeyPath](hmpresencekeypath.md): Specifies the key path for a presence event in a predicate.

# HMCharacteristicValueKeyPath (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the key path for a characteristic value in a predicate.

## Declaration

```objectivec
extern NSString * const HMCharacteristicValueKeyPath;
```

## See Also

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
- [HMPresenceKeyPath](hmpresencekeypath.md): Specifies the key path for a presence event in a predicate.
