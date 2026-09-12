> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkouts(with:totalswimmingstrokecount:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkouts(with:totalswimmingstrokecount:))

# predicateForWorkouts(with:totalSwimmingStrokeCount:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

Returns a predicate that matches workout samples based on the number of strokes while swimming.

> Use predicateForWorkoutsWithOperatorType:quantityType:sumQuantity: passing the HKQuantityType for HKQuantityTypeIdentifierSwimmingStrokeCount

## Declaration

```swift
class func predicateForWorkouts(with operatorType: NSComparisonPredicate.Operator, totalSwimmingStrokeCount: HKQuantity) -> NSPredicate
```

## Parameters

- `operatorType`: The operator to use when comparing the sample to the target number of flights climbed.
- `totalSwimmingStrokeCount`: A quantity representing the target stroke count.

<a id="return-value"></a>

## Return Value

A predicate that matches workouts based on the number of strokes while swimming.

<a id="Discussion"></a>

## Discussion

This convenience method creates a predicate that compares the number of swimming strokes during a workout with a target number. The following sample uses the convenience method and a predicate format string to create equivalent predicates.

```swift
// Creating a predicate using the convenience method.
let swimmingStrokeCount = HKQuantity(unit: HKUnit.count(), doubleValue: 500.0)
let longSwim = HKQuery.predicateForWorkouts(with: .greaterThanOrEqualTo, totalSwimmingStrokeCount: swimmingStrokeCount)

// Creating a predicate using a predicate format string.
let explicitLongSwim = NSPredicate(format: "%K >= %@",
                                   HKPredicateKeyPathWorkoutTotalSwimmingStrokeCount,
                                   swimmingStrokeCount)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutTotalSwimmingStrokeCount](../hkpredicatekeypathworkouttotalswimmingstrokecount.md): Deprecated. The key path for accessing the number of strokes during a swimming workout.

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
- [predicateForWorkouts(with:totalFlightsClimbed:)](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.

# predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 18.0) · iPadOS 10.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 3.0+ (deprecated in 11.0)

Returns a predicate that matches workout samples based on the number of strokes while swimming.

> Use predicateForWorkoutsWithOperatorType:quantityType:sumQuantity: passing the HKQuantityType for HKQuantityTypeIdentifierSwimmingStrokeCount

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutsWithOperatorType:(NSPredicateOperatorType) operatorType totalSwimmingStrokeCount:(HKQuantity *) totalSwimmingStrokeCount;
```

## Parameters

- `operatorType`: The operator to use when comparing the sample to the target number of flights climbed.
- `totalSwimmingStrokeCount`: A quantity representing the target stroke count.

<a id="return-value"></a>

## Return Value

A predicate that matches workouts based on the number of strokes while swimming.

<a id="Discussion"></a>

## Discussion

This convenience method creates a predicate that compares the number of swimming strokes during a workout with a target number. The following sample uses the convenience method and a predicate format string to create equivalent predicates.

```swift
// Creating a predicate using the convenience method.
let swimmingStrokeCount = HKQuantity(unit: HKUnit.count(), doubleValue: 500.0)
let longSwim = HKQuery.predicateForWorkouts(with: .greaterThanOrEqualTo, totalSwimmingStrokeCount: swimmingStrokeCount)

// Creating a predicate using a predicate format string.
let explicitLongSwim = NSPredicate(format: "%K >= %@",
                                   HKPredicateKeyPathWorkoutTotalSwimmingStrokeCount,
                                   swimmingStrokeCount)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutTotalSwimmingStrokeCount](../hkpredicatekeypathworkouttotalswimmingstrokecount.md): Deprecated. The key path for accessing the number of strokes during a swimming workout.

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
- [predicateForWorkoutsWithOperatorType:totalFlightsClimbed:](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
