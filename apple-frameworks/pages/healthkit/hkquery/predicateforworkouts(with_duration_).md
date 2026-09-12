> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkouts(with:duration:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkouts(with:duration:))

# predicateForWorkouts(with:duration:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate for matching workouts based on their duration.

## Declaration

```swift
class func predicateForWorkouts(with operatorType: NSComparisonPredicate.Operator, duration: TimeInterval) -> NSPredicate
```

## Parameters

- `operatorType`: The operator type to use when comparing the duration.
- `duration`: The target duration.

<a id="return-value"></a>

## Return Value

A predicate for matching workouts based on their duration. This predicate works only on workouts.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against a workout’s duration. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
// Predicate matching workouts equal to or longer than 30 minutes
let workout = HKQuery.predicateForWorkoutsWithOperatorType(
    .GreaterThanOrEqualToPredicateOperatorType,
    duration: 60.0 * 30.0)
 
 
let explicitWorkout = NSPredicate(format: "%K >= %d",
                                  HKPredicateKeyPathWorkoutDuration, 60 * 30)
```

**Objective-C**

```objc
// Predicate matching workouts equal to or longer than 30 minutes
NSPredicate *workout =
    [HKQuery predicateForWorkoutsWithOperatorType:
 
     NSGreaterThanOrEqualToPredicateOperatorType
      duration:60.0 * 30.0];
 
NSPredicate *explicitWorkout =
[NSPredicate predicateWithFormat:@"%K >= %d",
 HKPredicateKeyPathWorkoutDuration,
 60 * 30];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutDuration](../hkpredicatekeypathworkoutduration.md): The key path for accessing the workout’s duration.
- [duration](../hkworkout/duration.md): The workout’s duration.

### Creating workout predicates

- [predicateForObjects(from:)](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkouts(with:)](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkouts(operatorType:quantityType:averageQuantity:)](predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:maximumQuantity:)](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:minimumQuantity:)](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:sumQuantity:)](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkouts(with:totalDistance:)](predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkouts(with:totalEnergyBurned:)](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkouts(with:totalFlightsClimbed:)](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkouts(with:totalSwimmingStrokeCount:)](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

# predicateForWorkoutsWithOperatorType:duration: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate for matching workouts based on their duration.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutsWithOperatorType:(NSPredicateOperatorType) operatorType duration:(NSTimeInterval) duration;
```

## Parameters

- `operatorType`: The operator type to use when comparing the duration.
- `duration`: The target duration.

<a id="return-value"></a>

## Return Value

A predicate for matching workouts based on their duration. This predicate works only on workouts.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against a workout’s duration. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
// Predicate matching workouts equal to or longer than 30 minutes
let workout = HKQuery.predicateForWorkoutsWithOperatorType(
    .GreaterThanOrEqualToPredicateOperatorType,
    duration: 60.0 * 30.0)
 
 
let explicitWorkout = NSPredicate(format: "%K >= %d",
                                  HKPredicateKeyPathWorkoutDuration, 60 * 30)
```

**Objective-C**

```objc
// Predicate matching workouts equal to or longer than 30 minutes
NSPredicate *workout =
    [HKQuery predicateForWorkoutsWithOperatorType:
 
     NSGreaterThanOrEqualToPredicateOperatorType
      duration:60.0 * 30.0];
 
NSPredicate *explicitWorkout =
[NSPredicate predicateWithFormat:@"%K >= %d",
 HKPredicateKeyPathWorkoutDuration,
 60 * 30];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutDuration](../hkpredicatekeypathworkoutduration.md): The key path for accessing the workout’s duration.
- [duration](../hkworkout/duration.md): The workout’s duration.

### Creating workout predicates

- [predicateForObjectsFromWorkout:](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkoutsWithWorkoutActivityType:](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkoutsWithOperatorType:quantityType:averageQuantity:](predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:maximumQuantity:](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:minimumQuantity:](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:sumQuantity:](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:totalDistance:](predicateforworkouts%28with_totaldistance_%29.md): Deprecated. Returns a predicate for matching workouts based on the total distance traveled.
- [predicateForWorkoutsWithOperatorType:totalEnergyBurned:](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkoutsWithOperatorType:totalFlightsClimbed:](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount:](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.
