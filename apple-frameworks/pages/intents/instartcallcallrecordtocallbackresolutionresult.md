> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcallrecordtocallbackresolutionresult](https://developer.apple.com/documentation/intents/instartcallcallrecordtocallbackresolutionresult)

# INStartCallCallRecordToCallBackResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

A resolution result for the redial capabilities of a missed call.

## Declaration

```swift
class INStartCallCallRecordToCallBackResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INStartCallCallRecordToCallBackResolutionResult` object when resolving parameters containing an [INCallRecord](incallrecord.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully. The resolved value can be different from the original [INCallRecord](incallrecord.md). This flexibility allows app extensions to apply business logic constraints.

Use [notRequired()](inintentresolutionresult/notrequired%28%29.md) to continue with a `nil` value. For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Initializers

- [init(callRecordResolutionResult:)](instartcallcallrecordtocallbackresolutionresult/init%28callrecordresolutionresult_%29.md): Creates an object whose resolution involves successfully redialing a call.

### Type Methods

- [unsupported(forReason:)](instartcallcallrecordtocallbackresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request, because your app is unable to support the current request.

## Relationships

### Inherits From

- [INCallRecordResolutionResult](incallrecordresolutionresult.md)

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
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.

# INStartCallCallRecordToCallBackResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

A resolution result for the redial capabilities of a missed call.

## Declaration

```objectivec
@interface INStartCallCallRecordToCallBackResolutionResult : INCallRecordResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INStartCallCallRecordToCallBackResolutionResult` object when resolving parameters containing an [INCallRecord](incallrecord.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully. The resolved value can be different from the original [INCallRecord](incallrecord.md). This flexibility allows app extensions to apply business logic constraints.

Use [notRequired](inintentresolutionresult/notrequired%28%29.md) to continue with a `nil` value. For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Instance Methods

- [initWithCallRecordResolutionResult:](instartcallcallrecordtocallbackresolutionresult/init%28callrecordresolutionresult_%29.md): Creates an object whose resolution involves successfully redialing a call.

### Type Methods

- [unsupportedForReason:](instartcallcallrecordtocallbackresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request, because your app is unable to support the current request.

## Relationships

### Inherits From

- [INCallRecordResolutionResult](incallrecordresolutionresult.md)

## See Also

### Resolution Results

- [INCallRecordResolutionResult](incallrecordresolutionresult.md): A resolution result for the details of a call.
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md): A resolution result for the destination type of a call.
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
