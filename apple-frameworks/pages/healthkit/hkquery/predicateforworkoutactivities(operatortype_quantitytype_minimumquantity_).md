> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:quantitytype:minimumquantity:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:quantitytype:minimumquantity:))

# predicateForWorkoutActivities(operatorType:quantityType:minimumQuantity:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workout activities based the minimum value of an associated quantity type.

## Declaration

```swift
class func predicateForWorkoutActivities(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, minimumQuantity: HKQuantity) -> NSPredicate
```

## Parameters

- `operatorType`: The operator type to use when comparing the minimum quantity.
- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the minimum quantity.
- `minimumQuantity`: The target value for the minimum quantity.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workout activities with the specified minimum quantity. To use this predicate, call [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following sample creates a predicate for workout activities with a minimum heart rate of 150 bmp or higher.

```swift
let quantityType = HKQuantityType(.heartRate)

let expectedQuantity =
HKQuantity(unit: .count().unitDivided(by: .minute()),
           doubleValue: 150.0)

let heartRatePredicate =
HKQuery.predicateForWorkoutActivities(
    operatorType: .greaterThanOrEqualTo,
    quantityType: quantityType,
    minimumQuantity:
        expectedQuantity
)

// Wrap the activity predicate inside a workout predicate.
let workoutPredicate = HKQuery.predicateForWorkouts(activityPredicate: heartRatePredicate)
```

For more information on how HealthKit calculates statistics for [HKWorkoutActivity](../hkworkoutactivity.md) objects, see [statistics(for:)](../hkworkoutactivity/statistics%28for_%29.md).

## See Also

### Creating workout activity predicates

- [predicateForWorkoutActivities(workoutActivityType:)](predicateforworkoutactivities%28workoutactivitytype_%29.md): Returns a predicate for workout activities based on the type of activity performed.
- [predicateForWorkoutActivities(operatorType:duration:)](predicateforworkoutactivities%28operatortype_duration_%29.md): Returns a predicate for matching workout activities based on their duration.
- [predicateForWorkoutActivities(start:end:options:)](predicateforworkoutactivities%28start_end_options_%29.md): Returns a predicate for workout activities that occur between the start and end date.
- [predicateForWorkoutActivities(operatorType:quantityType:averageQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:maximumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:sumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.

# predicateForWorkoutActivitiesWithOperatorType:quantityType:minimumQuantity: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workout activities based the minimum value of an associated quantity type.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutActivitiesWithOperatorType:(NSPredicateOperatorType) operatorType quantityType:(HKQuantityType *) quantityType minimumQuantity:(HKQuantity *) minimumQuantity;
```

## Parameters

- `operatorType`: The operator type to use when comparing the minimum quantity.
- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the minimum quantity.
- `minimumQuantity`: The target value for the minimum quantity.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workout activities with the specified minimum quantity. To use this predicate, call [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following sample creates a predicate for workout activities with a minimum heart rate of 150 bmp or higher.

```swift
let quantityType = HKQuantityType(.heartRate)

let expectedQuantity =
HKQuantity(unit: .count().unitDivided(by: .minute()),
           doubleValue: 150.0)

let heartRatePredicate =
HKQuery.predicateForWorkoutActivities(
    operatorType: .greaterThanOrEqualTo,
    quantityType: quantityType,
    minimumQuantity:
        expectedQuantity
)

// Wrap the activity predicate inside a workout predicate.
let workoutPredicate = HKQuery.predicateForWorkouts(activityPredicate: heartRatePredicate)
```

For more information on how HealthKit calculates statistics for [HKWorkoutActivity](../hkworkoutactivity.md) objects, see [statisticsForType:](../hkworkoutactivity/statistics%28for_%29.md).

## See Also

### Creating workout activity predicates

- [predicateForWorkoutActivitiesWithWorkoutActivityType:](predicateforworkoutactivities%28workoutactivitytype_%29.md): Returns a predicate for workout activities based on the type of activity performed.
- [predicateForWorkoutActivitiesWithOperatorType:duration:](predicateforworkoutactivities%28operatortype_duration_%29.md): Returns a predicate for matching workout activities based on their duration.
- [predicateForWorkoutActivitiesWithStartDate:endDate:options:](predicateforworkoutactivities%28start_end_options_%29.md): Returns a predicate for workout activities that occur between the start and end date.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:averageQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:maximumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:sumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
