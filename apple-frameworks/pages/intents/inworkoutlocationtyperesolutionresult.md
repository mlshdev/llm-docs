> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inworkoutlocationtyperesolutionresult](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult)

# INWorkoutLocationTypeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the location type where the workout occurs.

## Declaration

```swift
class INWorkoutLocationTypeResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INWorkoutLocationTypeResolutionResult](inworkoutlocationtyperesolutionresult.md) object when resolving parameters containing a [INWorkoutLocationType](inworkoutlocationtype.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inworkoutlocationtyperesolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inworkoutlocationtyperesolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

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

- [INWorkoutGoalUnitTypeResolutionResult](inworkoutgoalunittyperesolutionresult.md): A resolution result for the units of a workout goal.

# INWorkoutLocationTypeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the location type where the workout occurs.

## Declaration

```objectivec
@interface INWorkoutLocationTypeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INWorkoutLocationTypeResolutionResult](inworkoutlocationtyperesolutionresult.md) object when resolving parameters containing a [INWorkoutLocationType](inworkoutlocationtype.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedWorkoutLocationType:](inworkoutlocationtyperesolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithWorkoutLocationTypeToConfirm:](inworkoutlocationtyperesolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inworkoutlocationtyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INWorkoutGoalUnitTypeResolutionResult](inworkoutgoalunittyperesolutionresult.md): A resolution result for the units of a workout goal.
