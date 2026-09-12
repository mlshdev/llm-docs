> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkouts(with:totaldistance:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkouts(with:totaldistance:))

# predicateForWorkouts(with:totalDistance:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a predicate for matching workouts based on the total distance traveled.

> Use predicateForWorkoutsWithOperatorType:quantityType:sumQuantity: passing the HKQuantityType for the desired distance type

## Declaration

```swift
class func predicateForWorkouts(with operatorType: NSComparisonPredicate.Operator, totalDistance: HKQuantity) -> NSPredicate
```

## Parameters

- `operatorType`: The operator type to use when comparing the total distance.
- `totalDistance`: The target distance.

<a id="return-value"></a>

## Return Value

A predicate for matching workouts based on the total distance traveled. This predicate works only on workouts.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against a workout’s total distance. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
// Predicate matching workouts covering 6.5 miles or more.
let distance = HKQuantity(unit: HKUnit.mileUnit(), doubleValue: 6.5)
let workout = HKQuery.predicateForWorkoutsWithOperatorType(
    .GreaterThanOrEqualToPredicateOperatorType,
    totalDistance: distance)
 
 
let explicitWorkout = NSPredicate(format: "%K >= %@",
                                  HKPredicateKeyPathWorkoutTotalDistance, distance)
```

**Objective-C**

```objc
// Predicate matching workouts covering 6.5 miles or more.
HKQuantity *distance =
    [HKQuantity quantityWithUnit:[HKUnit mileUnit] doubleValue:6.5];
 
NSPredicate *workout =
    [HKQuery predicateForWorkoutsWithOperatorType:
     NSGreaterThanOrEqualToPredicateOperatorType
     totalDistance:distance];
 
NSPredicate *explicitWorkout =
[NSPredicate predicateWithFormat:@"%K >= %@",
 HKPredicateKeyPathWorkoutTotalDistance,
 distance];
```

## See Also

### Related Documentation

- [totalDistance](../hkworkout/totaldistance.md): Deprecated. The total distance traveled during the workout.
- [HKPredicateKeyPathWorkoutTotalDistance](../hkpredicatekeypathworkouttotaldistance.md): Deprecated. The key path for accessing the workout’s total distance.

### Creating workout predicates

- [predicateForObjects(from:)](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkouts(with:)](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkouts(activityPredicate:)](predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkouts(with:duration:)](predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkouts(operatorType:quantityType:averageQuantity:)](predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:maximumQuantity:)](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:minimumQuantity:)](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkouts(operatorType:quantityType:sumQuantity:)](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkouts(with:totalEnergyBurned:)](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkouts(with:totalFlightsClimbed:)](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkouts(with:totalSwimmingStrokeCount:)](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

# predicateForWorkoutsWithOperatorType:totalDistance: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a predicate for matching workouts based on the total distance traveled.

> Use predicateForWorkoutsWithOperatorType:quantityType:sumQuantity: passing the HKQuantityType for the desired distance type

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutsWithOperatorType:(NSPredicateOperatorType) operatorType totalDistance:(HKQuantity *) totalDistance;
```

## Parameters

- `operatorType`: The operator type to use when comparing the total distance.
- `totalDistance`: The target distance.

<a id="return-value"></a>

## Return Value

A predicate for matching workouts based on the total distance traveled. This predicate works only on workouts.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against a workout’s total distance. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
// Predicate matching workouts covering 6.5 miles or more.
let distance = HKQuantity(unit: HKUnit.mileUnit(), doubleValue: 6.5)
let workout = HKQuery.predicateForWorkoutsWithOperatorType(
    .GreaterThanOrEqualToPredicateOperatorType,
    totalDistance: distance)
 
 
let explicitWorkout = NSPredicate(format: "%K >= %@",
                                  HKPredicateKeyPathWorkoutTotalDistance, distance)
```

**Objective-C**

```objc
// Predicate matching workouts covering 6.5 miles or more.
HKQuantity *distance =
    [HKQuantity quantityWithUnit:[HKUnit mileUnit] doubleValue:6.5];
 
NSPredicate *workout =
    [HKQuery predicateForWorkoutsWithOperatorType:
     NSGreaterThanOrEqualToPredicateOperatorType
     totalDistance:distance];
 
NSPredicate *explicitWorkout =
[NSPredicate predicateWithFormat:@"%K >= %@",
 HKPredicateKeyPathWorkoutTotalDistance,
 distance];
```

## See Also

### Related Documentation

- [totalDistance](../hkworkout/totaldistance.md): Deprecated. The total distance traveled during the workout.
- [HKPredicateKeyPathWorkoutTotalDistance](../hkpredicatekeypathworkouttotaldistance.md): Deprecated. The key path for accessing the workout’s total distance.

### Creating workout predicates

- [predicateForObjectsFromWorkout:](predicateforobjects%28from_%29-5irg9.md): Returns a predicate that matches any objects that have been associated with the provided workout.
- [predicateForWorkoutsWithWorkoutActivityType:](predicateforworkouts%28with_%29.md): Returns a predicate for matching workouts based on the type of activity.
- [predicateForWorkoutsWithActivityPredicate:](predicateforworkouts%28activitypredicate_%29.md): Returns a predicate for matching workouts based on the associated workout activities.
- [predicateForWorkoutsWithOperatorType:duration:](predicateforworkouts%28with_duration_%29.md): Returns a predicate for matching workouts based on their duration.
- [predicateForWorkoutsWithOperatorType:quantityType:averageQuantity:](predicateforworkouts%28operatortype_quantitytype_averagequantity_%29.md): Returns a predicate for matching workouts based the average value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:maximumQuantity:](predicateforworkouts%28operatortype_quantitytype_maximumquantity_%29.md): Returns a predicate for matching workout activities based the maximum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:minimumQuantity:](predicateforworkouts%28operatortype_quantitytype_minimumquantity_%29.md): Returns a predicate for matching workout activities based the minimum value of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:quantityType:sumQuantity:](predicateforworkouts%28operatortype_quantitytype_sumquantity_%29.md): Returns a predicate for matching workout activities based the sum of an associated quantity type.
- [predicateForWorkoutsWithOperatorType:totalEnergyBurned:](predicateforworkouts%28with_totalenergyburned_%29.md): Deprecated. Returns a predicate for matching workouts based on the total energy burned.
- [predicateForWorkoutsWithOperatorType:totalFlightsClimbed:](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount:](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.
