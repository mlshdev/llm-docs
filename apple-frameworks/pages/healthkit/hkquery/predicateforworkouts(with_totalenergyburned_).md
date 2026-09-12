> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforworkouts(with:totalenergyburned:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforworkouts(with:totalenergyburned:))

# predicateForWorkouts(with:totalEnergyBurned:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 2.0+ (deprecated in 11.0)

Returns a predicate for matching workouts based on the total energy burned.

> Use predicateForWorkoutsWithOperatorType:quantityType:sumQuantity: passing the HKQuantityType for HKQuantityTypeIdentifierActiveEnergyBurned

## Declaration

```swift
class func predicateForWorkouts(with operatorType: NSComparisonPredicate.Operator, totalEnergyBurned: HKQuantity) -> NSPredicate
```

## Parameters

- `operatorType`: The operator type to use when comparing the total energy burned.
- `totalEnergyBurned`: The target amount of energy burned.

<a id="return-value"></a>

## Return Value

A predicate for matching workouts based on the total energy burned. This predicate works only on workouts.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against a workout’s total energy burned. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
// Predicate matching workouts burning 500 calories or more
let energyBurned = HKQuantity(unit: HKUnit.kilocalorieUnit(), doubleValue: 500)
let workout = HKQuery.predicateForWorkoutsWithOperatorType(
    .GreaterThanOrEqualToPredicateOperatorType,
    totalEnergyBurned: energyBurned)
 
 
let explicitWorkout = NSPredicate(format: "%K >= %@",
                                  HKPredicateKeyPathWorkoutTotalEnergyBurned, energyBurned)
```

**Objective-C**

```objc
// Predicate matching workouts burning 500 calories or more
HKQuantity *energyBurned =
[HKQuantity quantityWithUnit:[HKUnit kilocalorieUnit] doubleValue:500];
 
NSPredicate *workout =
    [HKQuery predicateForWorkoutsWithOperatorType:
     NSGreaterThanOrEqualToPredicateOperatorType
     totalEnergyBurned:energyBurned];
 
NSPredicate *explicitWorkout =
[NSPredicate predicateWithFormat:@"%K >= %@",
 HKPredicateKeyPathWorkoutTotalEnergyBurned,
 energyBurned];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutTotalEnergyBurned](../hkpredicatekeypathworkouttotalenergyburned.md): Deprecated. The key path for accessing the workout’s total energy burned.
- [totalEnergyBurned](../hkworkout/totalenergyburned.md): Deprecated. The total active energy burned during the workout.

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
- [predicateForWorkouts(with:totalFlightsClimbed:)](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkouts(with:totalSwimmingStrokeCount:)](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.

# predicateForWorkoutsWithOperatorType:totalEnergyBurned: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 2.0+ (deprecated in 11.0)

Returns a predicate for matching workouts based on the total energy burned.

> Use predicateForWorkoutsWithOperatorType:quantityType:sumQuantity: passing the HKQuantityType for HKQuantityTypeIdentifierActiveEnergyBurned

## Declaration

```objectivec
+ (NSPredicate *) predicateForWorkoutsWithOperatorType:(NSPredicateOperatorType) operatorType totalEnergyBurned:(HKQuantity *) totalEnergyBurned;
```

## Parameters

- `operatorType`: The operator type to use when comparing the total energy burned.
- `totalEnergyBurned`: The target amount of energy burned.

<a id="return-value"></a>

## Return Value

A predicate for matching workouts based on the total energy burned. This predicate works only on workouts.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches against a workout’s total energy burned. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
// Predicate matching workouts burning 500 calories or more
let energyBurned = HKQuantity(unit: HKUnit.kilocalorieUnit(), doubleValue: 500)
let workout = HKQuery.predicateForWorkoutsWithOperatorType(
    .GreaterThanOrEqualToPredicateOperatorType,
    totalEnergyBurned: energyBurned)
 
 
let explicitWorkout = NSPredicate(format: "%K >= %@",
                                  HKPredicateKeyPathWorkoutTotalEnergyBurned, energyBurned)
```

**Objective-C**

```objc
// Predicate matching workouts burning 500 calories or more
HKQuantity *energyBurned =
[HKQuantity quantityWithUnit:[HKUnit kilocalorieUnit] doubleValue:500];
 
NSPredicate *workout =
    [HKQuery predicateForWorkoutsWithOperatorType:
     NSGreaterThanOrEqualToPredicateOperatorType
     totalEnergyBurned:energyBurned];
 
NSPredicate *explicitWorkout =
[NSPredicate predicateWithFormat:@"%K >= %@",
 HKPredicateKeyPathWorkoutTotalEnergyBurned,
 energyBurned];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathWorkoutTotalEnergyBurned](../hkpredicatekeypathworkouttotalenergyburned.md): Deprecated. The key path for accessing the workout’s total energy burned.
- [totalEnergyBurned](../hkworkout/totalenergyburned.md): Deprecated. The total active energy burned during the workout.

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
- [predicateForWorkoutsWithOperatorType:totalFlightsClimbed:](predicateforworkouts%28with_totalflightsclimbed_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of flights climbed.
- [predicateForWorkoutsWithOperatorType:totalSwimmingStrokeCount:](predicateforworkouts%28with_totalswimmingstrokecount_%29.md): Deprecated. Returns a predicate that matches workout samples based on the number of strokes while swimming.
