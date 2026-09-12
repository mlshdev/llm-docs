> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkouts(activitypredicate:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkouts(activitypredicate:))

# predicateForWorkouts(activityPredicate:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workouts based on the associated workout activities.

## Declaration

```swift
class func predicateForWorkouts(activityPredicate: NSPredicate) -> NSPredicate
```

## Parameters

- `activityPredicate`: A predicate that matches a particular set of workout activities.

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

The following example creates a predicate that matches workouts with an associated [HKWorkoutActivityType.running](../hkworkoutactivitytype/running.md) activity type.

```swift
let runningActivityPredicate =
HKQuery.predicateForWorkoutActivities(workoutActivityType: .running)

let workoutPredicate =
HKQuery.predicateForWorkouts(activityPredicate: runningActivityPredicate)
```

## See Also

### Creating workout predicates

- [predicateForObjects(from:)](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkouts(with:)](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkouts(with:duration:)](predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkouts(operatorType:quantityType:averageQuantity:)](predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:maximumQuantity:)](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:minimumQuantity:)](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:sumQuantity:)](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkouts(with:totalDistance:)](predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkouts(with:totalEnergyBurned:)](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkouts(with:totalFlightsClimbed:)](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkouts(with:totalSwimmingStrokeCount:)](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

# predicateForWorkoutsWithActivityPredicate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workouts based on the associated workout activities.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutsWithActivityPredicate:(NSPredicate *) activityPredicate;
```

## Parameters

- `activityPredicate`: A predicate that matches a particular set of workout activities.

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

The following example creates a predicate that matches workouts with an associated [HKWorkoutActivityTypeRunning](../hkworkoutactivitytype/running.md) activity type.

```swift
let runningActivityPredicate =
HKQuery.predicateForWorkoutActivities(workoutActivityType: .running)

let workoutPredicate =
HKQuery.predicateForWorkouts(activityPredicate: runningActivityPredicate)
```

## See Also

### Creating workout predicates

- [predicateForObjectsFromWorkout:](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkoutsWithWorkoutActivityType:](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkoutsWithOperatorType:duration:](predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkoutsWithOperatorType:quantityType:averageQuantity:](predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:maximumQuantity:](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:minimumQuantity:](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:sumQuantity:](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:totalDistance:](predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkoutsWithOperatorType:totalEnergyBurned:](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkoutsWithOperatorType:totalFlightsClimbed:](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount:](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.
