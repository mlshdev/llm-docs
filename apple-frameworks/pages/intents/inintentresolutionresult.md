> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintentresolutionresult](https://developer.apple.com/documentation/intents/inintentresolutionresult)

# INIntentResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a parameter of an intent object.

## Declaration

```swift
class INIntentResolutionResult
```

## Mentioned In

- [Resolving the Parameters of an Intent](../sirikit/resolving-the-parameters-of-an-intent.md)

<a id="overview"></a>

## Overview

An [INIntentResolutionResult](inintentresolutionresult.md) object describes how your app resolves a parameter of an intent object. This class is abstract and you don’t create instances of it directly. Instead, you use class methods to instantiate the appropriate subclass whose type matches the type of data that you’re trying to resolve. This class defines methods that are common to all resolution result objects.

During the resolution phase of a request, each parameter you resolve requires a resolution result object of a specific type. When creating that resolution result object, use the class method that represents your resolution. Subclasses of [INIntentResolutionResult](inintentresolutionresult.md) define methods for returning a successful resolution and may contain other methods for confirming values or disambiguating from among several possible values. Use the methods of this class when a value isn’t required, when a required value is missing, or when the value specified by the user doesn’t correspond to a supported solution.

When creating resolution result objects, always strive toward successful resolutions. If needed, take advantage of information you’ve regarding the user’s behavior patterns or interactions with your app. For example, if the user always has the same workout goals, use the previous workout goals as default values rather than asking the user to specify goal information.

## Topics

### Common Results

- [needsValue()](inintentresolutionresult/needsvalue%28%29.md): Creates an object whose resolution indicates that a required parameter value is missing.
- [notRequired()](inintentresolutionresult/notrequired%28%29.md): Creates an object whose resolution indicates that you don’t need the value of the parameter.
- [unsupported()](inintentresolutionresult/unsupported%28%29.md): Creates an object whose resolution indicates that your app doesn’t support the specified value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INAccountTypeResolutionResult](inaccounttyperesolutionresult.md)
- [INBalanceTypeResolutionResult](inbalancetyperesolutionresult.md)
- [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md)
- [INBillTypeResolutionResult](inbilltyperesolutionresult.md)
- [INBooleanResolutionResult](inbooleanresolutionresult.md)
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md)
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md)
- [INCallRecordResolutionResult](incallrecordresolutionresult.md)
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md)
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md)
- [INCarAirCirculationModeResolutionResult](incaraircirculationmoderesolutionresult.md)
- [INCarAudioSourceResolutionResult](incaraudiosourceresolutionresult.md)
- [INCarDefrosterResolutionResult](incardefrosterresolutionresult.md)
- [INCarSeatResolutionResult](incarseatresolutionresult.md)
- [INCarSignalOptionsResolutionResult](incarsignaloptionsresolutionresult.md)
- [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md)
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md)
- [INDateComponentsResolutionResult](indatecomponentsresolutionresult.md)
- [INDateSearchTypeResolutionResult](indatesearchtyperesolutionresult.md)
- [INDoubleResolutionResult](indoubleresolutionresult.md)
- [INEnergyResolutionResult](inenergyresolutionresult.md)
- [INEnumResolutionResult](inenumresolutionresult.md)
- [INFileResolutionResult](infileresolutionresult.md)
- [INIntegerResolutionResult](inintegerresolutionresult.md)
- [INLengthResolutionResult](inlengthresolutionresult.md)
- [INLocationSearchTypeResolutionResult](inlocationsearchtyperesolutionresult.md)
- [INMassResolutionResult](inmassresolutionresult.md)
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md)
- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md)
- [INMediaItemResolutionResult](inmediaitemresolutionresult.md)
- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md)
- [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md)
- [INNoteContentResolutionResult](innotecontentresolutionresult.md)
- [INNoteContentTypeResolutionResult](innotecontenttyperesolutionresult.md)
- [INNoteResolutionResult](innoteresolutionresult.md)
- [INNotebookItemTypeResolutionResult](innotebookitemtyperesolutionresult.md)
- [INObjectResolutionResult](inobjectresolutionresult.md)
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md)
- [INPaymentAccountResolutionResult](inpaymentaccountresolutionresult.md)
- [INPaymentAmountResolutionResult](inpaymentamountresolutionresult.md)
- [INPaymentMethodResolutionResult](inpaymentmethodresolutionresult.md)
- [INPaymentStatusResolutionResult](inpaymentstatusresolutionresult.md)
- [INPersonResolutionResult](inpersonresolutionresult.md)
- [INPlacemarkResolutionResult](inplacemarkresolutionresult.md)
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md)
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md)
- [INRadioTypeResolutionResult](inradiotyperesolutionresult.md)
- [INRelativeReferenceResolutionResult](inrelativereferenceresolutionresult.md)
- [INRelativeSettingResolutionResult](inrelativesettingresolutionresult.md)
- [INRestaurantGuestResolutionResult](inrestaurantguestresolutionresult.md)
- [INRestaurantResolutionResult](inrestaurantresolutionresult.md)
- [INSpatialEventTriggerResolutionResult](inspatialeventtriggerresolutionresult.md)
- [INSpeakableStringResolutionResult](inspeakablestringresolutionresult.md)
- [INSpeedResolutionResult](inspeedresolutionresult.md)
- [INStringResolutionResult](instringresolutionresult.md)
- [INTaskListResolutionResult](intasklistresolutionresult.md)
- [INTaskPriorityResolutionResult](intaskpriorityresolutionresult.md)
- [INTaskResolutionResult](intaskresolutionresult.md)
- [INTaskStatusResolutionResult](intaskstatusresolutionresult.md)
- [INTemperatureResolutionResult](intemperatureresolutionresult.md)
- [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md)
- [INTemporalEventTriggerTypeOptionsResolutionResult](intemporaleventtriggertypeoptionsresolutionresult.md)
- [INTimeIntervalResolutionResult](intimeintervalresolutionresult.md)
- [INURLResolutionResult](inurlresolutionresult.md)
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md)
- [INVolumeResolutionResult](involumeresolutionresult.md)
- [INWorkoutGoalUnitTypeResolutionResult](inworkoutgoalunittyperesolutionresult.md)
- [INWorkoutLocationTypeResolutionResult](inworkoutlocationtyperesolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# INIntentResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a parameter of an intent object.

## Declaration

```objectivec
@interface INIntentResolutionResult : NSObject
```

## Mentioned In

- [Resolving the Parameters of an Intent](../sirikit/resolving-the-parameters-of-an-intent.md)

<a id="overview"></a>

## Overview

An [INIntentResolutionResult](inintentresolutionresult.md) object describes how your app resolves a parameter of an intent object. This class is abstract and you don’t create instances of it directly. Instead, you use class methods to instantiate the appropriate subclass whose type matches the type of data that you’re trying to resolve. This class defines methods that are common to all resolution result objects.

During the resolution phase of a request, each parameter you resolve requires a resolution result object of a specific type. When creating that resolution result object, use the class method that represents your resolution. Subclasses of [INIntentResolutionResult](inintentresolutionresult.md) define methods for returning a successful resolution and may contain other methods for confirming values or disambiguating from among several possible values. Use the methods of this class when a value isn’t required, when a required value is missing, or when the value specified by the user doesn’t correspond to a supported solution.

When creating resolution result objects, always strive toward successful resolutions. If needed, take advantage of information you’ve regarding the user’s behavior patterns or interactions with your app. For example, if the user always has the same workout goals, use the previous workout goals as default values rather than asking the user to specify goal information.

## Topics

### Common Results

- [confirmationRequiredWithItemToConfirm:forReason:](https://developer.apple.com/documentation/intents/inintentresolutionresult/confirmationrequiredwithitemtoconfirm:forreason:): Creates an object whose resolution indicates that your app requires confirmation of the specified value.
- [unsupportedWithReason:](https://developer.apple.com/documentation/intents/inintentresolutionresult/unsupportedwithreason:): Creates an object whose resolution indicates that your app doesn’t support the specified value.
- [needsValue](inintentresolutionresult/needsvalue%28%29.md): Creates an object whose resolution indicates that a required parameter value is missing.
- [notRequired](inintentresolutionresult/notrequired%28%29.md): Creates an object whose resolution indicates that you don’t need the value of the parameter.
- [unsupported](inintentresolutionresult/unsupported%28%29.md): Creates an object whose resolution indicates that your app doesn’t support the specified value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INAccountTypeResolutionResult](inaccounttyperesolutionresult.md)
- [INBalanceTypeResolutionResult](inbalancetyperesolutionresult.md)
- [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md)
- [INBillTypeResolutionResult](inbilltyperesolutionresult.md)
- [INBooleanResolutionResult](inbooleanresolutionresult.md)
- [INCallCapabilityResolutionResult](incallcapabilityresolutionresult.md)
- [INCallDestinationTypeResolutionResult](incalldestinationtyperesolutionresult.md)
- [INCallRecordResolutionResult](incallrecordresolutionresult.md)
- [INCallRecordTypeOptionsResolutionResult](incallrecordtypeoptionsresolutionresult.md)
- [INCallRecordTypeResolutionResult](incallrecordtyperesolutionresult.md)
- [INCarAirCirculationModeResolutionResult](incaraircirculationmoderesolutionresult.md)
- [INCarAudioSourceResolutionResult](incaraudiosourceresolutionresult.md)
- [INCarDefrosterResolutionResult](incardefrosterresolutionresult.md)
- [INCarSeatResolutionResult](incarseatresolutionresult.md)
- [INCarSignalOptionsResolutionResult](incarsignaloptionsresolutionresult.md)
- [INCurrencyAmountResolutionResult](incurrencyamountresolutionresult.md)
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md)
- [INDateComponentsResolutionResult](indatecomponentsresolutionresult.md)
- [INDateSearchTypeResolutionResult](indatesearchtyperesolutionresult.md)
- [INDoubleResolutionResult](indoubleresolutionresult.md)
- [INEnergyResolutionResult](inenergyresolutionresult.md)
- [INEnumResolutionResult](inenumresolutionresult.md)
- [INFileResolutionResult](infileresolutionresult.md)
- [INIntegerResolutionResult](inintegerresolutionresult.md)
- [INLengthResolutionResult](inlengthresolutionresult.md)
- [INLocationSearchTypeResolutionResult](inlocationsearchtyperesolutionresult.md)
- [INMassResolutionResult](inmassresolutionresult.md)
- [INMediaAffinityTypeResolutionResult](inmediaaffinitytyperesolutionresult.md)
- [INMediaDestinationResolutionResult](inmediadestinationresolutionresult.md)
- [INMediaItemResolutionResult](inmediaitemresolutionresult.md)
- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md)
- [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md)
- [INNoteContentResolutionResult](innotecontentresolutionresult.md)
- [INNoteContentTypeResolutionResult](innotecontenttyperesolutionresult.md)
- [INNoteResolutionResult](innoteresolutionresult.md)
- [INNotebookItemTypeResolutionResult](innotebookitemtyperesolutionresult.md)
- [INObjectResolutionResult](inobjectresolutionresult.md)
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md)
- [INPaymentAccountResolutionResult](inpaymentaccountresolutionresult.md)
- [INPaymentAmountResolutionResult](inpaymentamountresolutionresult.md)
- [INPaymentMethodResolutionResult](inpaymentmethodresolutionresult.md)
- [INPaymentStatusResolutionResult](inpaymentstatusresolutionresult.md)
- [INPersonResolutionResult](inpersonresolutionresult.md)
- [INPlacemarkResolutionResult](inplacemarkresolutionresult.md)
- [INPlaybackQueueLocationResolutionResult](inplaybackqueuelocationresolutionresult.md)
- [INPlaybackRepeatModeResolutionResult](inplaybackrepeatmoderesolutionresult.md)
- [INRadioTypeResolutionResult](inradiotyperesolutionresult.md)
- [INRelativeReferenceResolutionResult](inrelativereferenceresolutionresult.md)
- [INRelativeSettingResolutionResult](inrelativesettingresolutionresult.md)
- [INRestaurantGuestResolutionResult](inrestaurantguestresolutionresult.md)
- [INRestaurantResolutionResult](inrestaurantresolutionresult.md)
- [INSpatialEventTriggerResolutionResult](inspatialeventtriggerresolutionresult.md)
- [INSpeakableStringResolutionResult](inspeakablestringresolutionresult.md)
- [INSpeedResolutionResult](inspeedresolutionresult.md)
- [INStringResolutionResult](instringresolutionresult.md)
- [INTaskListResolutionResult](intasklistresolutionresult.md)
- [INTaskPriorityResolutionResult](intaskpriorityresolutionresult.md)
- [INTaskResolutionResult](intaskresolutionresult.md)
- [INTaskStatusResolutionResult](intaskstatusresolutionresult.md)
- [INTemperatureResolutionResult](intemperatureresolutionresult.md)
- [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md)
- [INTemporalEventTriggerTypeOptionsResolutionResult](intemporaleventtriggertypeoptionsresolutionresult.md)
- [INTimeIntervalResolutionResult](intimeintervalresolutionresult.md)
- [INURLResolutionResult](inurlresolutionresult.md)
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md)
- [INVolumeResolutionResult](involumeresolutionresult.md)
- [INWorkoutGoalUnitTypeResolutionResult](inworkoutgoalunittyperesolutionresult.md)
- [INWorkoutLocationTypeResolutionResult](inworkoutlocationtyperesolutionresult.md)
