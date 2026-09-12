> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:duration:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkoutactivities(operatortype:duration:))

# predicateForWorkoutActivities(operatorType:duration:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workout activities based on their duration.

## Declaration

```swift
class func predicateForWorkoutActivities(operatorType: NSComparisonPredicate.Operator, duration: TimeInterval) -> NSPredicate
```

## Parameters

- `operatorType`: The operator type to use when comparing the duration.
- `duration`: The target duration.

<a id="return-value"></a>

## Return Value

A predicate for matching workout activities based on their duration. This predicate works only on workout activities.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against an activity’s duration. To use this predicate, call [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following sample creates a predicate for matching workout activities with a duration of 30 minutes or longer.

```swift
let longWorkoutActivityPredicate = HKQuery.predicateForWorkoutActivities(operatorType: .greaterThanOrEqualTo, duration: 60.0 * 30.0)

// Wrap the activity predicate inside a workout predicate.
let workoutPredicate = HKQuery.predicateForWorkouts(activityPredicate: longWorkoutActivityPredicate)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutDuration](../hkpredicatekeypathworkoutduration.md): The key path for accessing the workout’s duration.
- [duration](../hkworkout/duration.md): The workout’s duration.

### Creating workout activity predicates

- [predicateForWorkoutActivities(workoutActivityType:)](predicateforworkoutactivities%28workoutactivitytype_%29.md): Returns a predicate for workout activities based on the type of activity performed.
- [predicateForWorkoutActivities(start:end:options:)](predicateforworkoutactivities%28start_end_options_%29.md): Returns a predicate for workout activities that occur between the start and end date.
- [predicateForWorkoutActivities(operatorType:quantityType:averageQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:maximumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:minimumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:sumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.

# predicateForWorkoutActivitiesWithOperatorType:duration: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for matching workout activities based on their duration.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutActivitiesWithOperatorType:(NSPredicateOperatorType) operatorType duration:(NSTimeInterval) duration;
```

## Parameters

- `operatorType`: The operator type to use when comparing the duration.
- `duration`: The target duration.

<a id="return-value"></a>

## Return Value

A predicate for matching workout activities based on their duration. This predicate works only on workout activities.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against an activity’s duration. To use this predicate, call [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following sample creates a predicate for matching workout activities with a duration of 30 minutes or longer.

```swift
let longWorkoutActivityPredicate = HKQuery.predicateForWorkoutActivities(operatorType: .greaterThanOrEqualTo, duration: 60.0 * 30.0)

// Wrap the activity predicate inside a workout predicate.
let workoutPredicate = HKQuery.predicateForWorkouts(activityPredicate: longWorkoutActivityPredicate)
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutDuration](../hkpredicatekeypathworkoutduration.md): The key path for accessing the workout’s duration.
- [duration](../hkworkout/duration.md): The workout’s duration.

### Creating workout activity predicates

- [predicateForWorkoutActivitiesWithWorkoutActivityType:](predicateforworkoutactivities%28workoutactivitytype_%29.md): Returns a predicate for workout activities based on the type of activity performed.
- [predicateForWorkoutActivitiesWithStartDate:endDate:options:](predicateforworkoutactivities%28start_end_options_%29.md): Returns a predicate for workout activities that occur between the start and end date.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:averageQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:maximumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:minimumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:sumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
