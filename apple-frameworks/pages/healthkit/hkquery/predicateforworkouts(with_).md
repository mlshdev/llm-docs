> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkouts(with:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkouts(with:))

# predicateForWorkouts(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate for matching workouts based on the type of activity.

## Declaration

```swift
class func predicateForWorkouts(with workoutActivityType: HKWorkoutActivityType) -> NSPredicate
```

## Parameters

- `workoutActivityType`: The type of activity. For a list of valid workout activities, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).

<a id="return-value"></a>

## Return Value

A predicate for matching workouts based on the type of activity.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workouts based on their activity. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let workout = HKQuery.predicateForWorkouts(with: .curling)
 
 
let explicitWorkout = NSPredicate(format: "%K == %d",
                                  HKPredicateKeyPathWorkoutType,
                                  HKWorkoutActivityType.curling.rawValue)
```

**Objective-C**

```objc
NSPredicate *workout =
    [HKQuery predicateForWorkoutsWithWorkoutActivityType:
     HKWorkoutActivityTypeCurling];
 
NSPredicate *explicitWorkout =
[NSPredicate predicateWithFormat:@"%K == %d",
 HKPredicateKeyPathWorkoutType,
 HKWorkoutActivityTypeCurling];
```

## See Also

### Related Documentation

- [workoutActivityType](../hkworkout/workoutactivitytype.md): The type of activity performed during the workout.
- [HKPredicateKeyPathWorkoutType](../hkpredicatekeypathworkouttype.md): The key path for accessing the workout’s type.

### Creating workout predicates

- [predicateForObjects(from:)](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
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

# predicateForWorkoutsWithWorkoutActivityType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate for matching workouts based on the type of activity.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutsWithWorkoutActivityType:(HKWorkoutActivityType) workoutActivityType;
```

## Parameters

- `workoutActivityType`: The type of activity. For a list of valid workout activities, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).

<a id="return-value"></a>

## Return Value

A predicate for matching workouts based on the type of activity.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workouts based on their activity. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let workout = HKQuery.predicateForWorkouts(with: .curling)
 
 
let explicitWorkout = NSPredicate(format: "%K == %d",
                                  HKPredicateKeyPathWorkoutType,
                                  HKWorkoutActivityType.curling.rawValue)
```

**Objective-C**

```objc
NSPredicate *workout =
    [HKQuery predicateForWorkoutsWithWorkoutActivityType:
     HKWorkoutActivityTypeCurling];
 
NSPredicate *explicitWorkout =
[NSPredicate predicateWithFormat:@"%K == %d",
 HKPredicateKeyPathWorkoutType,
 HKWorkoutActivityTypeCurling];
```

## See Also

### Related Documentation

- [workoutActivityType](../hkworkout/workoutactivitytype.md): The type of activity performed during the workout.
- [HKPredicateKeyPathWorkoutType](../hkpredicatekeypathworkouttype.md): The key path for accessing the workout’s type.

### Creating workout predicates

- [predicateForObjectsFromWorkout:](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
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
