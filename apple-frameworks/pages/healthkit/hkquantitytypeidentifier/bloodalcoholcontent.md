> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/bloodalcoholcontent](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/bloodalcoholcontent)

# bloodAlcoholContent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s blood alcohol content.

## Declaration

```swift
static let bloodAlcoholContent: HKQuantityTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

These samples use percent units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Alcohol consumption

- [numberOfAlcoholicBeverages](numberofalcoholicbeverages.md): A quantity sample type that measures the number of standard alcoholic drinks that the user has consumed.

# HKQuantityTypeIdentifierBloodAlcoholContent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s blood alcohol content.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierBloodAlcoholContent;
```

<a id="Discussion"></a>

## Discussion

These samples use percent units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Alcohol consumption

- [HKQuantityTypeIdentifierNumberOfAlcoholicBeverages](numberofalcoholicbeverages.md): A quantity sample type that measures the number of standard alcoholic drinks that the user has consumed.
