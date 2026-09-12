> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintenthandling](https://developer.apple.com/documentation/intents/inlistcarsintenthandling)

# INListCarsIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The handler interface for requesting a list of the user’s electric vehicles.

## Declaration

```swift
protocol INListCarsIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the `INListCarsIntentHandling` protocol to confirm and handle requests from Maps for a list of the user’s electric vehicles. Adopt this protocol in an object of your Intents extension that can provide information about each of the user’s vehicles.

Maps delivers an [INListCarsIntent](inlistcarsintent.md) object to your handler when it needs to present a list of vehicles to the user. The  intent is a placeholder object and doesn’t provide any contextual information pertaining to the request.

## Topics

### Confirming the Intent

- [confirm(intent:completion:)](inlistcarsintenthandling/confirm%28intent_completion_%29.md): Confirms that you can provide a list of the user’s electric vehicles.

### Handling the Intent

- [handle(intent:completion:)](inlistcarsintenthandling/handle%28intent_completion_%29.md): Provides a list of the user’s electric vehicles.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### List Cars

- [INListCarsIntent](inlistcarsintent.md): An intent for retrieving a list of the user’s electric vehicles.
- [INListCarsIntentResponse](inlistcarsintentresponse.md): Your app’s response to a request to list the user’s electric vehicles.

# INListCarsIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The handler interface for requesting a list of the user’s electric vehicles.

## Declaration

```objectivec
@protocol INListCarsIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the `INListCarsIntentHandling` protocol to confirm and handle requests from Maps for a list of the user’s electric vehicles. Adopt this protocol in an object of your Intents extension that can provide information about each of the user’s vehicles.

Maps delivers an [INListCarsIntent](inlistcarsintent.md) object to your handler when it needs to present a list of vehicles to the user. The  intent is a placeholder object and doesn’t provide any contextual information pertaining to the request.

## Topics

### Confirming the Intent

- [confirmListCars:completion:](inlistcarsintenthandling/confirm%28intent_completion_%29.md): Confirms that you can provide a list of the user’s electric vehicles.

### Handling the Intent

- [handleListCars:completion:](inlistcarsintenthandling/handle%28intent_completion_%29.md): Provides a list of the user’s electric vehicles.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### List Cars

- [INListCarsIntent](inlistcarsintent.md): An intent for retrieving a list of the user’s electric vehicles.
- [INListCarsIntentResponse](inlistcarsintentresponse.md): Your app’s response to a request to list the user’s electric vehicles.
