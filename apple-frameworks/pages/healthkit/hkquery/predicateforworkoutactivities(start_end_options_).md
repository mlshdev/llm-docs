> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkoutactivities(start:end:options:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkoutactivities(start:end:options:))

# predicateForWorkoutActivities(start:end:options:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for workout activities that occur between the start and end date.

## Declaration

```swift
class func predicateForWorkoutActivities(start startDate: Date?, end endDate: Date?, options: HKQueryOptions = []) -> NSPredicate
```

## Parameters

- `startDate`: The start date for the target time interval.
- `endDate`: The end date for the target time interval.
- `options`: A constant that specifies how HealthKit compares the sample’s start and end date with the target time interval. For a list of possible values, see [HKQueryOptions](../hkqueryoptions.md).

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workout activities that occur between the specified start and end dates. To use this predicate, call [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following sample creates a predicate for workout activities within the last 30 minutes.

```swift
let end = Date()
let start = end.advanced(by: -30.0 * 60.0)

let recentActivityPredicate =
HKQuery.predicateForWorkoutActivities(start: start, end: end)

let workoutPredicate =
HKQuery.predicateForWorkouts(activityPredicate: recentActivityPredicate)
```

## See Also

### Creating workout activity predicates

- [predicateForWorkoutActivities(workoutActivityType:)](predicateforworkoutactivities%28workoutactivitytype_%29.md): Returns a predicate for workout activities based on the type of activity performed.
- [predicateForWorkoutActivities(operatorType:duration:)](predicateforworkoutactivities%28operatortype_duration_%29.md): Returns a predicate for matching workout activities based on their duration.
- [predicateForWorkoutActivities(operatorType:quantityType:averageQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:maximumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:minimumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivities(operatorType:quantityType:sumQuantity:)](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.

# predicateForWorkoutActivitiesWithStartDate:endDate:options: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a predicate for workout activities that occur between the start and end date.

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutActivitiesWithStartDate:(NSDate *) startDate endDate:(NSDate *) endDate options:(HKQueryOptions) options;
```

## Parameters

- `startDate`: The start date for the target time interval.
- `endDate`: The end date for the target time interval.
- `options`: A constant that specifies how HealthKit compares the sample’s start and end date with the target time interval. For a list of possible values, see [HKQueryOptions](../hkqueryoptions.md).

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches workout activities that occur between the specified start and end dates. To use this predicate, call [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md) to wrap this predicate inside a workout predicate. You can then use the workout predicate in your query.

The following sample creates a predicate for workout activities within the last 30 minutes.

```swift
let end = Date()
let start = end.advanced(by: -30.0 * 60.0)

let recentActivityPredicate =
HKQuery.predicateForWorkoutActivities(start: start, end: end)

let workoutPredicate =
HKQuery.predicateForWorkouts(activityPredicate: recentActivityPredicate)
```

## See Also

### Creating workout activity predicates

- [predicateForWorkoutActivitiesWithWorkoutActivityType:](predicateforworkoutactivities%28workoutactivitytype_%29.md): Returns a predicate for workout activities based on the type of activity performed.
- [predicateForWorkoutActivitiesWithOperatorType:duration:](predicateforworkoutactivities%28operatortype_duration_%29.md): Returns a predicate for matching workout activities based on their duration.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:averageQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workout activities based the average value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:maximumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:minimumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutActivitiesWithOperatorType:quantityType:sumQuantity:](predicateforworkoutactivities%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
