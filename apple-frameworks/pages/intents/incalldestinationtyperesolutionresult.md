> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incalldestinationtyperesolutionresult](https://developer.apple.com/documentation/intents/incalldestinationtyperesolutionresult)

# INCallDestinationTypeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the destination type of a call.

## Declaration

```swift
class INCallDestinationTypeResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INCallDestinationTypeResolutionResult` object when resolving parameters containing an [INCallDestinationType](incalldestinationtype.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](incalldestinationtyperesolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](incalldestinationtyperesolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

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

- [INCallRecordResolutionResult](incallrecordresolutionresult.md): A resolution result for the details of a call.
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.

# INCallDestinationTypeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the destination type of a call.

## Declaration

```objectivec
@interface INCallDestinationTypeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INCallDestinationTypeResolutionResult` object when resolving parameters containing an [INCallDestinationType](incalldestinationtype.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedCallDestinationType:](incalldestinationtyperesolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithCallDestinationTypeToConfirm:](incalldestinationtyperesolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INCallRecordResolutionResult](incallrecordresolutionresult.md): A resolution result for the details of a call.
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.
