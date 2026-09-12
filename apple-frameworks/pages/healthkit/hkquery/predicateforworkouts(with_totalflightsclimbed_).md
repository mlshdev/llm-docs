> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkouts(with:totalflightsclimbed:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkouts(with:totalflightsclimbed:))

# predicateForWorkouts(with:totalFlightsClimbed:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 4.0+ (deprecated in 11.0)

Returns a predicate that matches workout samples based on the number of flights climbed.

> Use predicateForWorkoutsWithOperatorType:quantityType:sumQuantity: passing the HKQuantityType for HKQuantityTypeIdentifierFlightsClimbed

## Declaration

```swift
class func predicateForWorkouts(with operatorType: NSComparisonPredicate.Operator, totalFlightsClimbed: HKQuantity) -> NSPredicate
```

## Parameters

- `operatorType`: The operator to use when comparing the sample to the target number of flights climbed.
- `totalFlightsClimbed`: A quantity representing the target number of flights climbed.

<a id="return-value"></a>

## Return Value

A predicate that matches workouts based on the number of flights climbed.

<a id="Discussion"></a>

## Discussion

This convenience method creates a predicate that compares the total flights climbed during a workout with a target number of flights climbed. The following sample uses the convenience method and a predicate format string to create equivalent predicates.

```swift
let flightsClimbed = HKQuantity(unit: HKUnit.count(), doubleValue: 10.0)
let tenFlightsClimbed = HKQuery.predicateForWorkouts(with: .greaterThanOrEqualTo, totalFlightsClimbed: flightsClimbed)

// Creating a predicate using a predicate format string.
let explicitTenFlightsClimbed = NSPredicate(format: "%K >= %@",
                                            HKPredicateKeyPathWorkoutTotalFlightsClimbed,
                                            flightsClimbed)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutTotalFlightsClimbed](../hkpredicatekeypathworkouttotalflightsclimbed.md): Deprecated. The key path for accessing the total number of flights of stairs climbed during the workout.

### Creating workout predicates

- [predicateForObjects(from:)](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkouts(with:)](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkouts(with:duration:)](predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkouts(operatorType:quantityType:averageQuantity:)](predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:maximumQuantity:)](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:minimumQuantity:)](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:sumQuantity:)](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkouts(with:totalDistance:)](predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkouts(with:totalEnergyBurned:)](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkouts(with:totalSwimmingStrokeCount:)](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

# predicateForWorkoutsWithOperatorType:totalFlightsClimbed: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 4.0+ (deprecated in 11.0)

Returns a predicate that matches workout samples based on the number of flights climbed.

> Use predicateForWorkoutsWithOperatorType:quantityType:sumQuantity: passing the HKQuantityType for HKQuantityTypeIdentifierFlightsClimbed

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutsWithOperatorType:(NSPredicateOperatorType) operatorType totalFlightsClimbed:(HKQuantity *) totalFlightsClimbed;
```

## Parameters

- `operatorType`: The operator to use when comparing the sample to the target number of flights climbed.
- `totalFlightsClimbed`: A quantity representing the target number of flights climbed.

<a id="return-value"></a>

## Return Value

A predicate that matches workouts based on the number of flights climbed.

<a id="Discussion"></a>

## Discussion

This convenience method creates a predicate that compares the total flights climbed during a workout with a target number of flights climbed. The following sample uses the convenience method and a predicate format string to create equivalent predicates.

```swift
let flightsClimbed = HKQuantity(unit: HKUnit.count(), doubleValue: 10.0)
let tenFlightsClimbed = HKQuery.predicateForWorkouts(with: .greaterThanOrEqualTo, totalFlightsClimbed: flightsClimbed)

// Creating a predicate using a predicate format string.
let explicitTenFlightsClimbed = NSPredicate(format: "%K >= %@",
                                            HKPredicateKeyPathWorkoutTotalFlightsClimbed,
                                            flightsClimbed)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutTotalFlightsClimbed](../hkpredicatekeypathworkouttotalflightsclimbed.md): Deprecated. The key path for accessing the total number of flights of stairs climbed during the workout.

### Creating workout predicates

- [predicateForObjectsFromWorkout:](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkoutsWithWorkoutActivityType:](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkoutsWithOperatorType:duration:](predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkoutsWithOperatorType:quantityType:averageQuantity:](predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:maximumQuantity:](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:minimumQuantity:](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:sumQuantity:](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:totalDistance:](predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkoutsWithOperatorType:totalEnergyBurned:](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount:](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.
