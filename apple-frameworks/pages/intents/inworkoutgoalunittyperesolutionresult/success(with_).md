> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inworkoutgoalunittyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```swift
class func success(with resolvedWorkoutGoalUnitType: INWorkoutGoalUnitType) -> Self
```

## Parameters

- `resolvedWorkoutGoalUnitType`: The value that resolves the intent’s requested parameter. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INWorkoutGoalUnitTypeResolutionResult](../inworkoutgoalunittyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the goal type and can use it to track the user’s progress.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the workout unit goal value before proceeding.

# successWithResolvedWorkoutGoalUnitType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedWorkoutGoalUnitType:(INWorkoutGoalUnitType) resolvedWorkoutGoalUnitType;
```

## Parameters

- `resolvedWorkoutGoalUnitType`: The value that resolves the intent’s requested parameter. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INWorkoutGoalUnitTypeResolutionResult](../inworkoutgoalunittyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the goal type and can use it to track the user’s progress.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithWorkoutGoalUnitTypeToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the workout unit goal value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
