> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inworkoutgoalunittyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to confirm the workout unit goal value before proceeding.

## Declaration

```swift
class func confirmationRequired(with workoutGoalUnitTypeToConfirm: INWorkoutGoalUnitType) -> Self
```

## Parameters

- `workoutGoalUnitTypeToConfirm`: The object that resolves the request. The information in this object must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INWorkoutGoalUnitTypeResolutionResult](../inworkoutgoalunittyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a similar workout goal and want the user to confirm the change before proceeding.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.

# confirmationRequiredWithWorkoutGoalUnitTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to confirm the workout unit goal value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithWorkoutGoalUnitTypeToConfirm:(INWorkoutGoalUnitType) workoutGoalUnitTypeToConfirm;
```

## Parameters

- `workoutGoalUnitTypeToConfirm`: The object that resolves the request. The information in this object must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INWorkoutGoalUnitTypeResolutionResult](../inworkoutgoalunittyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a similar workout goal and want the user to confirm the change before proceeding.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedWorkoutGoalUnitType:](success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
