> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkoutactivities(workoutactivitytype:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkoutactivities(workoutactivitytype:))

# predicateForWorkoutActivities(workoutActivityType:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for workout activities based on the type of activity performed.

## Declaration

```swift
class func predicateForWorkoutActivities(workoutActivityType: HKWorkoutActivityType) -> NSPredicate
```

## Parameters

- `workoutActivityType`: The type of activity. For a list of valid workout activities, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

To use this predicate, call [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following example creates a predicate that matches workout activities with a [HKWorkoutActivityType.running](../hkworkoutactivitytype/running.md) type.

```swift
let runningActivityPredicate =
HKQuery.predicateForWorkoutActivities(workoutActivityType: .running)

let workoutPredicate =
HKQuery.predicateForWorkouts(activityPredicate: runningActivityPredicate)
```

## See Also

### Creating workout activity predicates

- [predicateForWorkoutActivities(operatorType:duration:)](predicateforworkoutactivities%28operatortype_duration_%29.md): Returns a predicate for matching workout activities based on their duration.
- [predicateForWorkoutActivities(start:end:options:)](predicateforworkoutactivities%28start_end_options_%29.md): Returns a predicate for workout activities that occur between the start and end date.
- [predicateForWorkoutActivities(operatorType:quantityType:averageQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:maximumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:minimumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:sumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.

# predicateForWorkoutActivitiesWithWorkoutActivityType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for workout activities based on the type of activity performed.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutActivitiesWithWorkoutActivityType:(HKWorkoutActivityType) workoutActivityType;
```

## Parameters

- `workoutActivityType`: The type of activity. For a list of valid workout activities, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

To use this predicate, call [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following example creates a predicate that matches workout activities with a [HKWorkoutActivityTypeRunning](../hkworkoutactivitytype/running.md) type.

```swift
let runningActivityPredicate =
HKQuery.predicateForWorkoutActivities(workoutActivityType: .running)

let workoutPredicate =
HKQuery.predicateForWorkouts(activityPredicate: runningActivityPredicate)
```

## See Also

### Creating workout activity predicates

- [predicateForWorkoutActivitiesWithOperatorType:duration:](predicateforworkoutactivities%28operatortype_duration_%29.md): Returns a predicate for matching workout activities based on their duration.
- [predicateForWorkoutActivitiesWithStartDate:endDate:options:](predicateforworkoutactivities%28start_end_options_%29.md): Returns a predicate for workout activities that occur between the start and end date.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:averageQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:maximumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:minimumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:sumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
