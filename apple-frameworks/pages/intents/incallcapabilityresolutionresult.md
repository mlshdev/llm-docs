> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallcapabilityresolutionresult](https://developer.apple.com/documentation/intents/incallcapabilityresolutionresult)

# INCallCapabilityResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the call capability for the call.

## Declaration

```swift
class INCallCapabilityResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INCallCapabilityResolutionResult` object when resolving parameters containing an [INCallCapability](incallcapability.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully. The resolved value can be different than the original [INCallCapability](incallcapability.md). This flexibility allows app extensions to apply business logic constraints.

Use [notRequired()](inintentresolutionresult/notrequired%28%29.md) to continue with a `nil` value. For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](incallcapabilityresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified call capability.
- [confirmationRequired(with:)](incallcapabilityresolutionresult/confirmationrequired%28with_%29.md): Creates a result that asks Siri to verify the request that the user wants to continue.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INCallRecordResolutionResult](incallrecordresolutionresult.md): A resolution result for the details of a call.
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md): A resolution result for the destination type of a call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.

# INCallCapabilityResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the call capability for the call.

## Declaration

```objectivec
@interface INCallCapabilityResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INCallCapabilityResolutionResult` object when resolving parameters containing an [INCallCapability](incallcapability.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully. The resolved value can be different than the original [INCallCapability](incallcapability.md). This flexibility allows app extensions to apply business logic constraints.

Use [notRequired](inintentresolutionresult/notrequired%28%29.md) to continue with a `nil` value. For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedCallCapability:](incallcapabilityresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified call capability.
- [confirmationRequiredWithCallCapabilityToConfirm:](incallcapabilityresolutionresult/confirmationrequired%28with_%29.md): Creates a result that asks Siri to verify the request that the user wants to continue.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md)

## See Also

### Resolution Results

- [INCallRecordResolutionResult](incallrecordresolutionresult.md): A resolution result for the details of a call.
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md): A resolution result for the destination type of a call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.
