> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inworkoutlocationtyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedWorkoutLocationType: INWorkoutLocationType) -> Self
```

## Parameters

- `resolvedWorkoutLocationType`: The object that resolves the intent’s requested parameter. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INWorkoutLocationTypeResolutionResult](../inworkoutlocationtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the specified workout location.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedWorkoutLocationType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedWorkoutLocationType:(INWorkoutLocationType) resolvedWorkoutLocationType;
```

## Parameters

- `resolvedWorkoutLocationType`: The object that resolves the intent’s requested parameter. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INWorkoutLocationTypeResolutionResult](../inworkoutlocationtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the specified workout location.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithWorkoutLocationTypeToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
