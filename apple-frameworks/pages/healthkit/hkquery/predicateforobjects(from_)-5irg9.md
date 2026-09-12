> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjects(from:)-5irg9](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjects(from:)-5irg9)

# predicateForObjects(from:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches any objects that have been associated with the provided workout.

## Declaration

```swift
class func predicateForObjects(from workout: HKWorkout) -> NSPredicate
```

## Parameters

- `workout`: The workout you are searching for.

<a id="return-value"></a>

## Return Value

A predicate that matches any objects that have been added to the provided workout.

## Mentioned In

- [Adding samples to a workout](../adding-samples-to-a-workout.md)

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches all the HealthKit objects for a given workout. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let workoutObjects = HKQuery.predicateForObjectsFromWorkout(workout)
 
let explicitWorkoutObjects =
    NSPredicate(format: "%K == %@", HKPredicateKeyPathWorkout, workout)
```

**Objective-C**

```objc
NSPredicate *workoutObjects = [HKQuery predicateForObjectsFromWorkout:workout];
 
NSPredicate *explicitWorkoutObjects =
[NSPredicate predicateWithFormat:@"%K == %@",
 HKPredicateKeyPathWorkout,
 workout];
```

## See Also

### Related Documentation

- [add(\_:to:completion:)](../hkhealthstore/add%28__to_completion_%29.md): Deprecated. Associates the provided samples with the specified workout.

### Creating workout predicates

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
- [predicateForWorkouts(with:totalSwimmingStrokeCount:)](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

# predicateForObjectsFromWorkout: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches any objects that have been associated with the provided workout.

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsFromWorkout:(HKWorkout *) workout;
```

## Parameters

- `workout`: The workout you are searching for.

<a id="return-value"></a>

## Return Value

A predicate that matches any objects that have been added to the provided workout.

## Mentioned In

- [Adding samples to a workout](../adding-samples-to-a-workout.md)

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches all the HealthKit objects for a given workout. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let workoutObjects = HKQuery.predicateForObjectsFromWorkout(workout)
 
let explicitWorkoutObjects =
    NSPredicate(format: "%K == %@", HKPredicateKeyPathWorkout, workout)
```

**Objective-C**

```objc
NSPredicate *workoutObjects = [HKQuery predicateForObjectsFromWorkout:workout];
 
NSPredicate *explicitWorkoutObjects =
[NSPredicate predicateWithFormat:@"%K == %@",
 HKPredicateKeyPathWorkout,
 workout];
```

## See Also

### Related Documentation

- [addSamples:toWorkout:completion:](../hkhealthstore/add%28__to_completion_%29.md): Deprecated. Associates the provided samples with the specified workout.

### Creating workout predicates

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
- [predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount:](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.
