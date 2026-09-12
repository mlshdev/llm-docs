> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtriggertypeoptionsresolutionresult](https://developer.apple.com/documentation/intents/intemporaleventtriggertypeoptionsresolutionresult)

# INTemporalEventTriggerTypeOptionsResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A resolution result that adds a temporal event trigger.

## Declaration

```swift
class INTemporalEventTriggerTypeOptionsResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INTemporalEventTriggerTypeOptionsResolutionResult](intemporaleventtriggertypeoptionsresolutionresult.md) object when resolving parameters containing an [INTemporalEventTriggerTypeOptions](intemporaleventtriggertypeoptions.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](intemporaleventtriggertypeoptionsresolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified parameter.
- [confirmationRequired(with:)](intemporaleventtriggertypeoptionsresolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the value before proceeding.

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

### Event Triggers

- [INSpatialEventTrigger](inspatialeventtrigger.md): A trigger condition based on the user’s arrival or departure from a given location.
- [INTemporalEventTrigger](intemporaleventtrigger.md): A trigger condition based on a date or time.
- [INDayOfWeekOptions](indayofweekoptions.md): Days of the week.

# INTemporalEventTriggerTypeOptionsResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A resolution result that adds a temporal event trigger.

## Declaration

```objectivec
@interface INTemporalEventTriggerTypeOptionsResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INTemporalEventTriggerTypeOptionsResolutionResult](intemporaleventtriggertypeoptionsresolutionresult.md) object when resolving parameters containing an [INTemporalEventTriggerTypeOptions](intemporaleventtriggertypeoptions.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedTemporalEventTriggerTypeOptions:](intemporaleventtriggertypeoptionsresolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified parameter.
- [confirmationRequiredWithTemporalEventTriggerTypeOptionsToConfirm:](intemporaleventtriggertypeoptionsresolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Event Triggers

- [INSpatialEventTrigger](inspatialeventtrigger.md): A trigger condition based on the user’s arrival or departure from a given location.
- [INTemporalEventTrigger](intemporaleventtrigger.md): A trigger condition based on a date or time.
- [INDayOfWeekOptions](indayofweekoptions.md): Days of the week.
