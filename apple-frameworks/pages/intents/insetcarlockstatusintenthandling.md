> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintenthandling](https://developer.apple.com/documentation/intents/insetcarlockstatusintenthandling)

# INSetCarLockStatusIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for requesting to lock or unlock a car.

## Declaration

```swift
protocol INSetCarLockStatusIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the `INSetCarLockStatusIntentHandling` protocol to resolve, confirm, and handle requests to lock or unlock the user’s car. Adopt this protocol in an object of your Intents extension that is capable of locking or unlocking the car.

Siri delivers an [INSetCarLockStatusIntent](insetcarlockstatusintent.md) object to your handler when the user asks to lock or unlock the car. The provided intent object can contain the car’s name (if specified), and the requested lock status (locked or unlocked).

## Topics

### Resolving the Intent Parameters

- [resolveCarName(for:with:)](insetcarlockstatusintenthandling/resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.
- [resolveLocked(for:with:)](insetcarlockstatusintenthandling/resolvelocked%28for_with_%29.md): Resolves the requested lock status (locked or unlocked).

### Confirming the Response

- [confirm(intent:completion:)](insetcarlockstatusintenthandling/confirm%28intent_completion_%29.md): Confirms that your app can lock or unlock the car.

### Handling the Intent

- [handle(intent:completion:)](insetcarlockstatusintenthandling/handle%28intent_completion_%29.md): Handles locking or unlocking the car.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md)

## See Also

### Set Car Lock Status

- [INSetCarLockStatusIntent](insetcarlockstatusintent.md): A request to lock or unlock the user’s car.
- [INSetCarLockStatusIntentResponse](insetcarlockstatusintentresponse.md): Your app’s response to a request to lock or unlock the car.

# INSetCarLockStatusIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for requesting to lock or unlock a car.

## Declaration

```objectivec
@protocol INSetCarLockStatusIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the `INSetCarLockStatusIntentHandling` protocol to resolve, confirm, and handle requests to lock or unlock the user’s car. Adopt this protocol in an object of your Intents extension that is capable of locking or unlocking the car.

Siri delivers an [INSetCarLockStatusIntent](insetcarlockstatusintent.md) object to your handler when the user asks to lock or unlock the car. The provided intent object can contain the car’s name (if specified), and the requested lock status (locked or unlocked).

## Topics

### Resolving the Intent Parameters

- [resolveCarNameForSetCarLockStatus:withCompletion:](insetcarlockstatusintenthandling/resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.
- [resolveLockedForSetCarLockStatus:withCompletion:](insetcarlockstatusintenthandling/resolvelocked%28for_with_%29.md): Resolves the requested lock status (locked or unlocked).

### Confirming the Response

- [confirmSetCarLockStatus:completion:](insetcarlockstatusintenthandling/confirm%28intent_completion_%29.md): Confirms that your app can lock or unlock the car.

### Handling the Intent

- [handleSetCarLockStatus:completion:](insetcarlockstatusintenthandling/handle%28intent_completion_%29.md): Handles locking or unlocking the car.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md)

## See Also

### Set Car Lock Status

- [INSetCarLockStatusIntent](insetcarlockstatusintent.md): A request to lock or unlock the user’s car.
- [INSetCarLockStatusIntentResponse](insetcarlockstatusintentresponse.md): Your app’s response to a request to lock or unlock the car.
