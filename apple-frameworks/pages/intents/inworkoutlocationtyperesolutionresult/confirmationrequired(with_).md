> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inworkoutlocationtyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with workoutLocationTypeToConfirm: INWorkoutLocationType) -> Self
```

## Parameters

- `workoutLocationTypeToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INWorkoutLocationTypeResolutionResult](../inworkoutlocationtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a similar workout location and want the user to confirm that location choice.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithWorkoutLocationTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithWorkoutLocationTypeToConfirm:(INWorkoutLocationType) workoutLocationTypeToConfirm;
```

## Parameters

- `workoutLocationTypeToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INWorkoutLocationTypeResolutionResult](../inworkoutlocationtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a similar workout location and want the user to confirm that location choice.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedWorkoutLocationType:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
