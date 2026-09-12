> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintenthandling](https://developer.apple.com/documentation/intents/ingetcarlockstatusintenthandling)

# INGetCarLockStatusIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for requesting the current status of the car’s locks.

## Declaration

```swift
protocol INGetCarLockStatusIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the `INGetCarLockStatusIntentHandling` protocol to resolve, confirm, and handle requests for the current status of the car’s locks. Adopt this protocol in an object of your Intents extension that’s capable of accessing the status of the car’s locks.

Siri delivers an [INGetCarLockStatusIntent](ingetcarlockstatusintent.md) object to your handler when the user asks whether the car is locked or unlocked. The provided intent object can contain the car’s name (if specified).

## Topics

### Resolving the Intent Parameters

- [resolveCarName(for:with:)](ingetcarlockstatusintenthandling/resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.

### Confirming the Response

- [confirm(intent:completion:)](ingetcarlockstatusintenthandling/confirm%28intent_completion_%29.md): Confirms that you can access the status of the car’s locks.

### Handling the Intent

- [handle(intent:completion:)](ingetcarlockstatusintenthandling/handle%28intent_completion_%29.md): Accesses and returns the current status of the car’s locks.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md)

## See Also

### Get Car Lock Status

- [INGetCarLockStatusIntent](ingetcarlockstatusintent.md): A request to get the lock status of the user’s car.
- [INGetCarLockStatusIntentResponse](ingetcarlockstatusintentresponse.md): Your app’s response to a request to get the car’s lock status.

# INGetCarLockStatusIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for requesting the current status of the car’s locks.

## Declaration

```objectivec
@protocol INGetCarLockStatusIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the `INGetCarLockStatusIntentHandling` protocol to resolve, confirm, and handle requests for the current status of the car’s locks. Adopt this protocol in an object of your Intents extension that’s capable of accessing the status of the car’s locks.

Siri delivers an [INGetCarLockStatusIntent](ingetcarlockstatusintent.md) object to your handler when the user asks whether the car is locked or unlocked. The provided intent object can contain the car’s name (if specified).

## Topics

### Resolving the Intent Parameters

- [resolveCarNameForGetCarLockStatus:withCompletion:](ingetcarlockstatusintenthandling/resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.

### Confirming the Response

- [confirmGetCarLockStatus:completion:](ingetcarlockstatusintenthandling/confirm%28intent_completion_%29.md): Confirms that you can access the status of the car’s locks.

### Handling the Intent

- [handleGetCarLockStatus:completion:](ingetcarlockstatusintenthandling/handle%28intent_completion_%29.md): Accesses and returns the current status of the car’s locks.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md)

## See Also

### Get Car Lock Status

- [INGetCarLockStatusIntent](ingetcarlockstatusintent.md): A request to get the lock status of the user’s car.
- [INGetCarLockStatusIntentResponse](ingetcarlockstatusintentresponse.md): Your app’s response to a request to get the car’s lock status.
