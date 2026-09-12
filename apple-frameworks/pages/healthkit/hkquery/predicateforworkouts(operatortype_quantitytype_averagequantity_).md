> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkouts(operatortype:quantitytype:averagequantity:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkouts(operatortype:quantitytype:averagequantity:))

# predicateForWorkouts(operatorType:quantityType:averageQuantity:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workouts based the average value of an associated quantity type.

## Declaration

```swift
class func predicateForWorkouts(operatorType: NSComparisonPredicate.Operator, quantityType: HKQuantityType, averageQuantity: HKQuantity) -> NSPredicate
```

## Parameters

- `operatorType`: The operator type to use when comparing the quantity.
- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the average quantity.
- `averageQuantity`: The target value for the average quantity.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workouts with the specified average quantity. For more information on how HealthKit calculates statistics for [HKWorkout](../hkworkout.md) objects, see [statistics(for:)](../hkworkout/statistics%28for_%29.md) .

The following sample creates a predicate for workouts with an average heart rate of 150 bmp or higher.

```swift
let quantityType = HKQuantityType(.heartRate)

let expectedQuantity =
HKQuantity(unit: .count().unitDivided(by: .minute()),
           doubleValue: 150.0)

let heartRatePredicate = HKQuery.predicateForWorkouts(
    operatorType: .greaterThanOrEqualTo,
    quantityType: quantityType,
    averageQuantity: expectedQuantity)
```

## See Also

### Creating workout predicates

- [predicateForObjects(from:)](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkouts(with:)](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkouts(with:duration:)](predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkouts(operatorType:quantityType:maximumQuantity:)](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:minimumQuantity:)](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:sumQuantity:)](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkouts(with:totalDistance:)](predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkouts(with:totalEnergyBurned:)](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkouts(with:totalFlightsClimbed:)](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkouts(with:totalSwimmingStrokeCount:)](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

# predicateForWorkoutsWithOperatorType:quantityType:averageQuantity: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workouts based the average value of an associated quantity type.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutsWithOperatorType:(NSPredicateOperatorType) operatorType quantityType:(HKQuantityType *) quantityType averageQuantity:(HKQuantity *) averageQuantity;
```

## Parameters

- `operatorType`: The operator type to use when comparing the quantity.
- `quantityType`: The type of [HKQuantitySample](../hkquantitysample.md) objects used to calculate the average quantity.
- `averageQuantity`: The target value for the average quantity.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workouts with the specified average quantity. For more information on how HealthKit calculates statistics for [HKWorkout](../hkworkout.md) objects, see [statisticsForType:](../hkworkout/statistics%28for_%29.md) .

The following sample creates a predicate for workouts with an average heart rate of 150 bmp or higher.

```swift
let quantityType = HKQuantityType(.heartRate)

let expectedQuantity =
HKQuantity(unit: .count().unitDivided(by: .minute()),
           doubleValue: 150.0)

let heartRatePredicate = HKQuery.predicateForWorkouts(
    operatorType: .greaterThanOrEqualTo,
    quantityType: quantityType,
    averageQuantity: expectedQuantity)
```

## See Also

### Creating workout predicates

- [predicateForObjectsFromWorkout:](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkoutsWithWorkoutActivityType:](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkoutsWithOperatorType:duration:](predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkoutsWithOperatorType:quantityType:maximumQuantity:](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:minimumQuantity:](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:sumQuantity:](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:totalDistance:](predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkoutsWithOperatorType:totalEnergyBurned:](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkoutsWithOperatorType:totalFlightsClimbed:](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount:](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.
