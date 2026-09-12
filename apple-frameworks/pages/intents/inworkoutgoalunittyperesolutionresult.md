> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inworkoutgoalunittyperesolutionresult](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult)

# INWorkoutGoalUnitTypeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the units of a workout goal.

## Declaration

```swift
class INWorkoutGoalUnitTypeResolutionResult
```

<a id="overview"></a>

## Overview

An [INWorkoutGoalUnitTypeResolutionResult](inworkoutgoalunittyperesolutionresult.md) object is what you return when resolving parameters that contain a [INWorkoutGoalUnitType](inworkoutgoalunittype.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inworkoutgoalunittyperesolutionresult/success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [confirmationRequired(with:)](inworkoutgoalunittyperesolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the workout unit goal value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INWorkoutLocationTypeResolutionResult](inworkoutlocationtyperesolutionresult.md): A resolution result for the location type where the workout occurs.

# INWorkoutGoalUnitTypeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the units of a workout goal.

## Declaration

```objectivec
@interface INWorkoutGoalUnitTypeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INWorkoutGoalUnitTypeResolutionResult](inworkoutgoalunittyperesolutionresult.md) object is what you return when resolving parameters that contain a [INWorkoutGoalUnitType](inworkoutgoalunittype.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedWorkoutGoalUnitType:](inworkoutgoalunittyperesolutionresult/success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [confirmationRequiredWithWorkoutGoalUnitTypeToConfirm:](inworkoutgoalunittyperesolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the workout unit goal value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inworkoutgoalunittyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INWorkoutLocationTypeResolutionResult](inworkoutlocationtyperesolutionresult.md): A resolution result for the location type where the workout occurs.
