> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetdefrostersettingsincarintenthandling](https://developer.apple.com/documentation/intents/insetdefrostersettingsincarintenthandling)

# INSetDefrosterSettingsInCarIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a vehicle’s defroster settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSetDefrosterSettingsInCarIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Automotive vendors can support the [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to change the vehicle’s defroster settings. Your extension should be able to communicate with the vehicle and make the necessary climate control changes.

Siri delivers an [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md) object to your handler when the user asks to change the defroster change. The intent object contains information that you use to determine the new defroster settings and to make the change.

## Topics

### Resolving the Intent Parameters

- [resolveEnable(for:with:)](insetdefrostersettingsincarintenthandling/resolveenable%28for_with_%29.md): Deprecated. Resolves whether you can enable or disable the defroster setting.
- [resolveDefroster(for:with:)](insetdefrostersettingsincarintenthandling/resolvedefroster%28for_with_%29.md): Deprecated. Resolves which defroster to change.
- [resolveCarName(for:with:)](insetdefrostersettingsincarintenthandling/resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

### Confirming the Response

- [confirm(intent:completion:)](insetdefrostersettingsincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the defroster settings.

### Handling the Intent

- [handle(intent:completion:)](insetdefrostersettingsincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the defroster settings.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Defroster Settings

- [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md): Deprecated. A request to change the defroster settings in a CarPlay-enabled vehicle.
- [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md): Deprecated. Your app’s response to a set defroster settings in car intent.

# INSetDefrosterSettingsInCarIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a vehicle’s defroster settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSetDefrosterSettingsInCarIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Automotive vendors can support the [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to change the vehicle’s defroster settings. Your extension should be able to communicate with the vehicle and make the necessary climate control changes.

Siri delivers an [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md) object to your handler when the user asks to change the defroster change. The intent object contains information that you use to determine the new defroster settings and to make the change.

## Topics

### Resolving the Intent Parameters

- [resolveEnableForSetDefrosterSettingsInCar:withCompletion:](insetdefrostersettingsincarintenthandling/resolveenable%28for_with_%29.md): Deprecated. Resolves whether you can enable or disable the defroster setting.
- [resolveDefrosterForSetDefrosterSettingsInCar:withCompletion:](insetdefrostersettingsincarintenthandling/resolvedefroster%28for_with_%29.md): Deprecated. Resolves which defroster to change.
- [resolveCarNameForSetDefrosterSettingsInCar:withCompletion:](insetdefrostersettingsincarintenthandling/resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

### Confirming the Response

- [confirmSetDefrosterSettingsInCar:completion:](insetdefrostersettingsincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the defroster settings.

### Handling the Intent

- [handleSetDefrosterSettingsInCar:completion:](insetdefrostersettingsincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the defroster settings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Defroster Settings

- [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md): Deprecated. A request to change the defroster settings in a CarPlay-enabled vehicle.
- [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md): Deprecated. Your app’s response to a set defroster settings in car intent.
