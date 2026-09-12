> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtypeoptionsresolutionresult](https://developer.apple.com/documentation/intents/incallrecordtypeoptionsresolutionresult)

# INCallRecordTypeOptionsResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the call types to include in a search.

## Declaration

```swift
class INCallRecordTypeOptionsResolutionResult
```

<a id="overview"></a>

## Overview

An `INCallRecordTypeOptionsResolutionResult` object is what you return when resolving parameters containing a value of type [INCallRecordTypeOptions](incallrecordtypeoptions.md). Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](incallrecordtypeoptionsresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](incallrecordtypeoptionsresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

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
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md): A resolution result for the destination type of a call.
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.

# INCallRecordTypeOptionsResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the call types to include in a search.

## Declaration

```objectivec
@interface INCallRecordTypeOptionsResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An `INCallRecordTypeOptionsResolutionResult` object is what you return when resolving parameters containing a value of type [INCallRecordTypeOptions](incallrecordtypeoptions.md). Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedCallRecordTypeOptions:](incallrecordtypeoptionsresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithCallRecordTypeOptionsToConfirm:](incallrecordtypeoptionsresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INCallRecordResolutionResult](incallrecordresolutionresult.md): A resolution result for the details of a call.
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md): A resolution result for the destination type of a call.
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md): A resolution result for the contact for the call.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.
