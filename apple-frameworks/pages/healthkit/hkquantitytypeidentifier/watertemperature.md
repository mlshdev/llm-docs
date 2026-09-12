> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/watertemperature](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/watertemperature)

# waterTemperature (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity sample that records the water temperature.

## Declaration

```swift
static let waterTemperature: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Apple Watch Ultra automatically records these samples during dive sessions and swimming workouts.

Water temperature samples use temperature units (see [HKUnit](../hkunit.md)) and measure discrete values (see [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

## See Also

### Diving

- [underwaterDepth](underwaterdepth.md): A quantity sample that records a person’s depth underwater.

# HKQuantityTypeIdentifierWaterTemperature (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity sample that records the water temperature.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierWaterTemperature;
```

<a id="Discussion"></a>

## Discussion

Apple Watch Ultra automatically records these samples during dive sessions and swimming workouts.

Water temperature samples use temperature units (see [HKUnit](../hkunit.md)) and measure discrete values (see [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

## See Also

### Diving

- [HKQuantityTypeIdentifierUnderwaterDepth](underwaterdepth.md): A quantity sample that records a person’s depth underwater.
