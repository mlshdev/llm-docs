> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/underwaterdepth](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/underwaterdepth)

# underwaterDepth (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity sample that records a person’s depth underwater.

## Declaration

```swift
static let underwaterDepth: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Apple Watch Ultra automatically records these samples during dive sessions.

Underwater depth samples use length units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

## See Also

### Diving

- [waterTemperature](watertemperature.md): A quantity sample that records the water temperature.

# HKQuantityTypeIdentifierUnderwaterDepth (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A quantity sample that records a person’s depth underwater.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierUnderwaterDepth;
```

<a id="Discussion"></a>

## Discussion

Apple Watch Ultra automatically records these samples during dive sessions.

Underwater depth samples use length units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)). Sample data may be condensed and/or coalesced by HealthKit. For more information, see [Accessing condensed workout samples](../accessing-condensed-workout-samples.md).

## See Also

### Diving

- [HKQuantityTypeIdentifierWaterTemperature](watertemperature.md): A quantity sample that records the water temperature.
