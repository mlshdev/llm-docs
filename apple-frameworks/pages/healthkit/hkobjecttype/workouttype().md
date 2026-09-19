> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkobjecttype/workouttype()

# workoutType() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the shared [HKWorkoutType](../hkworkouttype.md) object.

## Declaration

```swift
class func workoutType() -> HKWorkoutType
```

<a id="return-value"></a>

## Return Value

The shared [HKWorkoutType](../hkworkouttype.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKWorkoutType](../hkworkouttype.md) concrete subclass. HealthKit uses workout types to create samples that store information about individual workouts. Use workout type instances to create workout objects that you can save in the HealthKit store.  For more information, see [HKWorkoutType](../hkworkouttype.md).

In HealthKit, all workouts use the same workout type.

# workoutType (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the shared [HKWorkoutType](../hkworkouttype.md) object.

## Declaration

```objectivec
+ (HKWorkoutType *) workoutType;
```

<a id="return-value"></a>

## Return Value

The shared [HKWorkoutType](../hkworkouttype.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKWorkoutType](../hkworkouttype.md) concrete subclass. HealthKit uses workout types to create samples that store information about individual workouts. Use workout type instances to create workout objects that you can save in the HealthKit store.  For more information, see [HKWorkoutType](../hkworkouttype.md).

In HealthKit, all workouts use the same workout type.
