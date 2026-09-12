> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/timeindaylight](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/timeindaylight)

# timeInDaylight (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

A quantity sample type that measures amount of time the user spent in daylight.

## Declaration

```swift
static let timeInDaylight: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use time units (described in [HKUnit](../hkunit.md)) and measure cumulative values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### UV exposure

- [uvExposure](uvexposure.md): A quantity sample type that measures the user’s exposure to UV radiation.

# HKQuantityTypeIdentifierTimeInDaylight (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

A quantity sample type that measures amount of time the user spent in daylight.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierTimeInDaylight;
```

<a id="Discussion"></a>

## Discussion

These samples use time units (described in [HKUnit](../hkunit.md)) and measure cumulative values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### UV exposure

- [HKQuantityTypeIdentifierUVExposure](uvexposure.md): A quantity sample type that measures the user’s exposure to UV radiation.
