> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintenthandling](https://developer.apple.com/documentation/intents/insetradiostationintenthandling)

# INSetRadioStationIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSetRadioStationIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSetRadioStationIntentHandling](insetradiostationintenthandling.md) protocol to resolve, confirm, and handle requests to change radio stations from your app. Your extension should be able to change the radio station based on the provided information. For example, automotive vendors should be able to use the information to update the settings of a vehicle’s entertainment system.

Siri delivers an [INSetRadioStationIntent](insetradiostationintent.md) object to your handler when the user asks to change the current radio station. The provided intent object contains information that you use to determine the new station.

## Topics

### Resolving the Intent Parameters

- [resolveRadioType(for:with:)](insetradiostationintenthandling/resolveradiotype%28for_with_%29.md): Deprecated. Resolves the radio type.
- [resolveFrequency(for:with:)](insetradiostationintenthandling/resolvefrequency%28for_with_%29.md): Deprecated. Resolves the radio station frequency.
- [resolveStationName(for:with:)](insetradiostationintenthandling/resolvestationname%28for_with_%29.md): Deprecated. Resolves the name of the radio station.
- [resolveChannel(for:with:)](insetradiostationintenthandling/resolvechannel%28for_with_%29.md): Deprecated. Resolves the channel number for the radio station.
- [resolvePresetNumber(for:with:)](insetradiostationintenthandling/resolvepresetnumber%28for_with_%29.md): Deprecated. Resolves the preset number used to select the radio station.

### Confirming the Response

- [confirm(intent:completion:)](insetradiostationintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the radio station.

### Handling the Intent

- [handle(intent:completion:)](insetradiostationintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the radio station.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRadioDomainHandling](inradiodomainhandling.md)

## See Also

### CarPlay Radio Station Settings

- [INSetRadioStationIntent](insetradiostationintent.md): Deprecated. A request to change the current radio station.
- [INSetRadioStationIntentResponse](insetradiostationintentresponse.md): Deprecated. Your app’s response to a set radio station intent.

# INSetRadioStationIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSetRadioStationIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSetRadioStationIntentHandling](insetradiostationintenthandling.md) protocol to resolve, confirm, and handle requests to change radio stations from your app. Your extension should be able to change the radio station based on the provided information. For example, automotive vendors should be able to use the information to update the settings of a vehicle’s entertainment system.

Siri delivers an [INSetRadioStationIntent](insetradiostationintent.md) object to your handler when the user asks to change the current radio station. The provided intent object contains information that you use to determine the new station.

## Topics

### Resolving the Intent Parameters

- [resolveRadioTypeForSetRadioStation:withCompletion:](insetradiostationintenthandling/resolveradiotype%28for_with_%29.md): Deprecated. Resolves the radio type.
- [resolveFrequencyForSetRadioStation:withCompletion:](insetradiostationintenthandling/resolvefrequency%28for_with_%29.md): Deprecated. Resolves the radio station frequency.
- [resolveStationNameForSetRadioStation:withCompletion:](insetradiostationintenthandling/resolvestationname%28for_with_%29.md): Deprecated. Resolves the name of the radio station.
- [resolveChannelForSetRadioStation:withCompletion:](insetradiostationintenthandling/resolvechannel%28for_with_%29.md): Deprecated. Resolves the channel number for the radio station.
- [resolvePresetNumberForSetRadioStation:withCompletion:](insetradiostationintenthandling/resolvepresetnumber%28for_with_%29.md): Deprecated. Resolves the preset number used to select the radio station.

### Confirming the Response

- [confirmSetRadioStation:completion:](insetradiostationintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the radio station.

### Handling the Intent

- [handleSetRadioStation:completion:](insetradiostationintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the radio station.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRadioDomainHandling](inradiodomainhandling.md)

## See Also

### CarPlay Radio Station Settings

- [INSetRadioStationIntent](insetradiostationintent.md): Deprecated. A request to change the current radio station.
- [INSetRadioStationIntentResponse](insetradiostationintentresponse.md): Deprecated. Your app’s response to a set radio station intent.
