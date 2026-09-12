> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordresolutionresult](https://developer.apple.com/documentation/intents/incallrecordresolutionresult)

# INCallRecordResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the details of a call.

## Declaration

```swift
class INCallRecordResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INCallRecordResolutionResult` object when resolving parameters containing an [INCallRecord](incallrecord.md) value. The `resolvedCallRecord` can be different than the original `INCallRecord`. This flexibility allows app extensions to apply business logic constraints.

Use [notRequired()](inintentresolutionresult/notrequired%28%29.md) to continue with a `nil` value. For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Type Methods

- [confirmationRequired(with:)](incallrecordresolutionresult/confirmationrequired%28with_%29.md): Creates a result that requires the user to confirm the value before proceeding.
- [disambiguation(with:)](incallrecordresolutionresult/disambiguation%28with_%29.md): Creates a result that requires the user to select from an array of choices.
- [success(with:)](incallrecordresolutionresult/success%28with_%29.md): Creates a result that contains the call record that matches the users request.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md): A resolution result for the destination type of a call.
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.

# INCallRecordResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the details of a call.

## Declaration

```objectivec
@interface INCallRecordResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INCallRecordResolutionResult` object when resolving parameters containing an [INCallRecord](incallrecord.md) value. The `resolvedCallRecord` can be different than the original `INCallRecord`. This flexibility allows app extensions to apply business logic constraints.

Use [notRequired](inintentresolutionresult/notrequired%28%29.md) to continue with a `nil` value. For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Type Methods

- [confirmationRequiredWithCallRecordToConfirm:](incallrecordresolutionresult/confirmationrequired%28with_%29.md): Creates a result that requires the user to confirm the value before proceeding.
- [disambiguationWithCallRecordsToDisambiguate:](incallrecordresolutionresult/disambiguation%28with_%29.md): Creates a result that requires the user to select from an array of choices.
- [successWithResolvedCallRecord:](incallrecordresolutionresult/success%28with_%29.md): Creates a result that contains the call record that matches the users request.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md)

## See Also

### Resolution Results

- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md): A resolution result for the destination type of a call.
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.
