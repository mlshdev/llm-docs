> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcontactresolutionresult](https://developer.apple.com/documentation/intents/instartcallcontactresolutionresult)

# INStartCallContactResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the contact for the call.

## Declaration

```swift
class INStartCallContactResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INStartCallContactResolutionResult` object when resolving parameters containing an [INPerson](inperson.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully. The resolved value can be different than the original [INPerson](inperson.md). This flexibility allows app extensions to apply business logic constraints.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [init(personResolutionResult:)](instartcallcontactresolutionresult/init%28personresolutionresult_%29.md): Creates an object whose resolution involves the succesful start of a call with the specified contact.
- [unsupported(forReason:)](instartcallcontactresolutionresult/unsupported%28forreason_%29.md): Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.
- [INStartCallContactUnsupportedReason](instartcallcontactunsupportedreason.md): Constants indicating the reason the app can’t support starting a call with the contact.

## Relationships

### Inherits From

- [INPersonResolutionResult](inpersonresolutionresult.md)

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
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.

# INStartCallContactResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for the contact for the call.

## Declaration

```objectivec
@interface INStartCallContactResolutionResult : INPersonResolutionResult
```

<a id="overview"></a>

## Overview

You return an `INStartCallContactResolutionResult` object when resolving parameters containing an [INPerson](inperson.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully. The resolved value can be different than the original [INPerson](inperson.md). This flexibility allows app extensions to apply business logic constraints.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [initWithPersonResolutionResult:](instartcallcontactresolutionresult/init%28personresolutionresult_%29.md): Creates an object whose resolution involves the succesful start of a call with the specified contact.
- [unsupportedForReason:](instartcallcontactresolutionresult/unsupported%28forreason_%29.md): Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.
- [INStartCallContactUnsupportedReason](instartcallcontactunsupportedreason.md): Constants indicating the reason the app can’t support starting a call with the contact.

## Relationships

### Inherits From

- [INPersonResolutionResult](inpersonresolutionresult.md)

## See Also

### Resolution Results

- [INCallRecordResolutionResult](incallrecordresolutionresult.md): A resolution result for the details of a call.
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md): A resolution result for the types of calls that your app handled.
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md): A resolution result for the destination type of a call.
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md): A resolution result for the call types to include in a search.
- [INStartCallCallCapabilityResolutionResult](instartcallcallcapabilityresolutionresult.md): A resolution result for the call capability for the call.
- [INStartCallCallRecordToCallBackResolutionResult](instartcallcallrecordtocallbackresolutionresult.md): A resolution result for the redial capabilities of a missed call.
