> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintent](https://developer.apple.com/documentation/intents/insetcarlockstatusintent)

# INSetCarLockStatusIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to lock or unlock the user’s car.

## Declaration

```swift
class INSetCarLockStatusIntent
```

<a id="overview"></a>

## Overview

When the user asks to lock or unlock the car, Siri creates an `INSetCarLockStatusIntent` object. This intent object can contain the name of the user’s car and the requested lock status. Use this object to lock or unlock the car.

To handle this intent, the handler object in your Intents extension must adopt the [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md) protocol. Your handler should confirm the request and create an [INSetCarLockStatusIntentResponse](insetcarlockstatusintentresponse.md) object with the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device? | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to lock or unlock their car in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive, and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Lock my car. | Unlock my truck. |
| zh_CN | 把车锁上。 | 给后备箱解锁。 |
| zh_HK | 幫我鎖車 | 幫手開部卡車嘅鎖 |
| zh_TW | 鎖上車子。 | 解鎖卡車。 |
| yue_CN | 帮我锁车 | 帮手开部卡车嘅锁 |
| ar | اقفل سيارتي | افتح قفل شاحنتي |
| da | Lås min bil | Lås min bil op |
| de | Schließe mein Auto ab | Schließe mein Auto auf |
| es | Cierra el coche. | Abre la camioneta. |
| fi | Lukitse auto | Avaa auto |
| fr | Ferme ma voiture. | Ouvre ma voiture. |
| he | תנעלי את הרכב שלי | פתח את הרכב שלי |
| it | Chiudi la mia auto. | Apri la mia auto. |
| ja | 車をロックして | トラックのロックを解除して |
| ko | 차 잠가줘 | 트럭 열어줘 |
| ms | Kunci kereta saya | Buka kunci trak saya |
| nb | Lås bilen min | Lås opp bilen min |
| nl | Doe mijn auto op slot. | Open mijn auto. |
| pt | Tranca meu carro | Destrancar meu carro |
| ru | Закрой мою машину. | Открой мой грузовик |
| sv | Lås min bil. | Lås upp min lastbil. |
| th | ล็อครถ | ปลดล็อครถ |
| tr | Arabamı kilitle. | Aracımın kilidini aç. |

Unlike other SiriKit intents, these phrases do not always require your app’s name. Siri infers the app name when possible (for example, based on unique user vocabulary registered by your app). If necessary, Siri verifies the app’s name before launching your extension.

## Topics

### Initializing the Intent Object

- [init(locked:carName:)](insetcarlockstatusintent/init%28locked_carname_%29.md): Initializes an intent to set the lock status of the named car.

### Getting the Car Name

- [carName](insetcarlockstatusintent/carname.md): A name that identifies the user’s car.

### Getting the Locked Status

- [locked](insetcarlockstatusintent/locked-9h0kx.md): A Boolean value that indicates whether to lock the car.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Set Car Lock Status

- [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md): The handler interface for requesting to lock or unlock a car.
- [INSetCarLockStatusIntentResponse](insetcarlockstatusintentresponse.md): Your app’s response to a request to lock or unlock the car.

# INSetCarLockStatusIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to lock or unlock the user’s car.

## Declaration

```objectivec
@interface INSetCarLockStatusIntent : INIntent
```

<a id="overview"></a>

## Overview

When the user asks to lock or unlock the car, Siri creates an `INSetCarLockStatusIntent` object. This intent object can contain the name of the user’s car and the requested lock status. Use this object to lock or unlock the car.

To handle this intent, the handler object in your Intents extension must adopt the [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md) protocol. Your handler should confirm the request and create an [INSetCarLockStatusIntentResponse](insetcarlockstatusintentresponse.md) object with the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device? | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to lock or unlock their car in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive, and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Lock my car. | Unlock my truck. |
| zh_CN | 把车锁上。 | 给后备箱解锁。 |
| zh_HK | 幫我鎖車 | 幫手開部卡車嘅鎖 |
| zh_TW | 鎖上車子。 | 解鎖卡車。 |
| yue_CN | 帮我锁车 | 帮手开部卡车嘅锁 |
| ar | اقفل سيارتي | افتح قفل شاحنتي |
| da | Lås min bil | Lås min bil op |
| de | Schließe mein Auto ab | Schließe mein Auto auf |
| es | Cierra el coche. | Abre la camioneta. |
| fi | Lukitse auto | Avaa auto |
| fr | Ferme ma voiture. | Ouvre ma voiture. |
| he | תנעלי את הרכב שלי | פתח את הרכב שלי |
| it | Chiudi la mia auto. | Apri la mia auto. |
| ja | 車をロックして | トラックのロックを解除して |
| ko | 차 잠가줘 | 트럭 열어줘 |
| ms | Kunci kereta saya | Buka kunci trak saya |
| nb | Lås bilen min | Lås opp bilen min |
| nl | Doe mijn auto op slot. | Open mijn auto. |
| pt | Tranca meu carro | Destrancar meu carro |
| ru | Закрой мою машину. | Открой мой грузовик |
| sv | Lås min bil. | Lås upp min lastbil. |
| th | ล็อครถ | ปลดล็อครถ |
| tr | Arabamı kilitle. | Aracımın kilidini aç. |

Unlike other SiriKit intents, these phrases do not always require your app’s name. Siri infers the app name when possible (for example, based on unique user vocabulary registered by your app). If necessary, Siri verifies the app’s name before launching your extension.

## Topics

### Initializing the Intent Object

- [initWithLocked:carName:](https://developer.apple.com/documentation/intents/insetcarlockstatusintent/initwithlocked:carname:): Initializes an intent to set the lock status of the named car.

### Getting the Car Name

- [carName](insetcarlockstatusintent/carname.md): A name that identifies the user’s car.

### Getting the Locked Status

- [locked](https://developer.apple.com/documentation/intents/insetcarlockstatusintent/locked-61uw4): A Boolean value that indicates whether to lock the car.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Set Car Lock Status

- [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md): The handler interface for requesting to lock or unlock a car.
- [INSetCarLockStatusIntentResponse](insetcarlockstatusintentresponse.md): Your app’s response to a request to lock or unlock the car.
