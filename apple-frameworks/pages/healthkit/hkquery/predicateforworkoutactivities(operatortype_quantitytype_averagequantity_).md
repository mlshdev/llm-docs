> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:quantitytype:averagequantity:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:quantitytype:averagequantity:))

# predicateForWorkoutActivities(operatorType:quantityType:averageQuantity:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workout activities based the average value of an associated quantity type.

## Declaration

```swift
class func predicateForWorkoutActivities(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, averageQuantity: HKQuantity) -> NSPredicate
```

## Parameters

- `operatorType`: The operator type to use when comparing the average quantity.
- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the average quantity.
- `averageQuantity`: The target value for the average quantity.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workouts with the specified average quantity. To use this predicate, call [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following sample creates a predicate for workout activities with an average heart rate of 150 bmp or higher.

```swift
let quantityType = HKQuantityType(.heartRate)

let expectedQuantity =
HKQuantity(unit: .count().unitDivided(by: .minute()),
           doubleValue: 150.0)

let heartRatePredicate =
HKQuery.predicateForWorkoutActivities(
    operatorType: .greaterThanOrEqualTo,
    quantityType: quantityType,
    averageQuantity:
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
- [predicateForWorkoutActivities(operatorType:quantityType:maximumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:minimumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:sumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.

# predicateForWorkoutActivitiesWithOperatorType:quantityType:averageQuantity: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workout activities based the average value of an associated quantity type.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutActivitiesWithOperatorType:(NSPredicateOperatorType) operatorType quantityType:(HKQuantityType *) quantityType averageQuantity:(HKQuantity *) averageQuantity;
```

## Parameters

- `operatorType`: The operator type to use when comparing the average quantity.
- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the average quantity.
- `averageQuantity`: The target value for the average quantity.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workouts with the specified average quantity. To use this predicate, call [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following sample creates a predicate for workout activities with an average heart rate of 150 bmp or higher.

```swift
let quantityType = HKQuantityType(.heartRate)

let expectedQuantity =
HKQuantity(unit: .count().unitDivided(by: .minute()),
           doubleValue: 150.0)

let heartRatePredicate =
HKQuery.predicateForWorkoutActivities(
    operatorType: .greaterThanOrEqualTo,
    quantityType: quantityType,
    averageQuantity:
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
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:maximumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:minimumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:sumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
