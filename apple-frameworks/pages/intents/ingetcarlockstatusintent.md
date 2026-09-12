> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintent](https://developer.apple.com/documentation/intents/ingetcarlockstatusintent)

# INGetCarLockStatusIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to get the lock status of the user’s car.

## Declaration

```swift
class INGetCarLockStatusIntent
```

<a id="overview"></a>

## Overview

When the user asks for the car’s lock status, Siri creates an `INGetCarLockStatusIntent` object . This intent object can contain the name of the user’s car. Use this object to provide information about the car’s current lock status.

To handle this intent, the handler object in your Intents extension must adopt the [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md) protocol. Your handler should confirm the request and create an [INGetCarLockStatusIntentResponse](ingetcarlockstatusintentresponse.md) object with the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device? | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri their car’s locked status in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive, and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Is my truck locked? | Are the car doors unlocked? |
| zh_CN | 后备箱关了吗？ | 车门是不是没锁？ |
| zh_HK | 部卡車鎖咗未？ | 我部車有冇鎖? |
| zh_TW | 卡車鎖上了嗎？ | 車門有鎖了嗎？ |
| yue_CN | 部卡车锁咗未? | 我部车有冇锁? |
| ar | هل الشاحنة مقفلة؟ | هل أبواب السيارة مفتوحة؟ |
| da | Er min bil låst | Er bildørene låst op |
| de | Ist mein Auto abgeschlossen? | Sind die Autotüren offen? |
| es | ¿Está cerrada la camioneta? | ¿Están abiertas las puertas del coche? |
| fi | Onko auto lukossa | Onko auton ovet auki |
| fr | Est-ce que ma voiture est fermée ? | Est-ce que ma voiture est ouverte ? |
| he | האם הרכב שלי נעול | האם הרכב שלי פתוח |
| it | È chiusa la mia auto? | Le portiere della mia auto sono aperte? |
| ja | トラックはロックされている? | 車のロックは解除されている? |
| ko | 내 트럭 잠겼어? | 차 도어록 열려 있어? |
| ms | Adakah trak saya dikunci? | Adakah pintu kereta tidak dikunci? |
| nb | Er bilen min låst? | Er dørene på bilen min låst? |
| nl | Is mijn auto op slot? | Zijn de autodeuren open? |
| pt | Meu carro está trancado? | As portas do carro estão destrancadas? |
| ru | Закрыт ли мой грузовик? | Открыты ли двери машины? |
| sv | Är min lastbil låst? | Är bilens dörrar olåsta? |
| th | รถล็อคอยู่ไหม | ประตูรถล็อคอยู่หรือไม่ |
| tr | Aracım kilitli mi? | Arabamın kapıları kilitli mi? |

Unlike other SiriKit intents, these phrases do not always require your app’s name. Siri infers the app’s name when possible (for example, based on unique user vocabulary registered by your app). If necessary, Siri verifies the app’s name before launching your extension.

## Topics

### Initializing the Intent Object

- [init(carName:)](ingetcarlockstatusintent/init%28carname_%29.md): Initializes an intent to get the lock status of the named car.

### Getting the Car Name

- [carName](ingetcarlockstatusintent/carname.md): A name that identifies the user’s car.

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

### Get Car Lock Status

- [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md): The handler interface for requesting the current status of the car’s locks.
- [INGetCarLockStatusIntentResponse](ingetcarlockstatusintentresponse.md): Your app’s response to a request to get the car’s lock status.

# INGetCarLockStatusIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to get the lock status of the user’s car.

## Declaration

```objectivec
@interface INGetCarLockStatusIntent : INIntent
```

<a id="overview"></a>

## Overview

When the user asks for the car’s lock status, Siri creates an `INGetCarLockStatusIntent` object . This intent object can contain the name of the user’s car. Use this object to provide information about the car’s current lock status.

To handle this intent, the handler object in your Intents extension must adopt the [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md) protocol. Your handler should confirm the request and create an [INGetCarLockStatusIntentResponse](ingetcarlockstatusintentresponse.md) object with the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device? | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri their car’s locked status in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive, and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Is my truck locked? | Are the car doors unlocked? |
| zh_CN | 后备箱关了吗？ | 车门是不是没锁？ |
| zh_HK | 部卡車鎖咗未？ | 我部車有冇鎖? |
| zh_TW | 卡車鎖上了嗎？ | 車門有鎖了嗎？ |
| yue_CN | 部卡车锁咗未? | 我部车有冇锁? |
| ar | هل الشاحنة مقفلة؟ | هل أبواب السيارة مفتوحة؟ |
| da | Er min bil låst | Er bildørene låst op |
| de | Ist mein Auto abgeschlossen? | Sind die Autotüren offen? |
| es | ¿Está cerrada la camioneta? | ¿Están abiertas las puertas del coche? |
| fi | Onko auto lukossa | Onko auton ovet auki |
| fr | Est-ce que ma voiture est fermée ? | Est-ce que ma voiture est ouverte ? |
| he | האם הרכב שלי נעול | האם הרכב שלי פתוח |
| it | È chiusa la mia auto? | Le portiere della mia auto sono aperte? |
| ja | トラックはロックされている? | 車のロックは解除されている? |
| ko | 내 트럭 잠겼어? | 차 도어록 열려 있어? |
| ms | Adakah trak saya dikunci? | Adakah pintu kereta tidak dikunci? |
| nb | Er bilen min låst? | Er dørene på bilen min låst? |
| nl | Is mijn auto op slot? | Zijn de autodeuren open? |
| pt | Meu carro está trancado? | As portas do carro estão destrancadas? |
| ru | Закрыт ли мой грузовик? | Открыты ли двери машины? |
| sv | Är min lastbil låst? | Är bilens dörrar olåsta? |
| th | รถล็อคอยู่ไหม | ประตูรถล็อคอยู่หรือไม่ |
| tr | Aracım kilitli mi? | Arabamın kapıları kilitli mi? |

Unlike other SiriKit intents, these phrases do not always require your app’s name. Siri infers the app’s name when possible (for example, based on unique user vocabulary registered by your app). If necessary, Siri verifies the app’s name before launching your extension.

## Topics

### Initializing the Intent Object

- [initWithCarName:](ingetcarlockstatusintent/init%28carname_%29.md): Initializes an intent to get the lock status of the named car.

### Getting the Car Name

- [carName](ingetcarlockstatusintent/carname.md): A name that identifies the user’s car.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Get Car Lock Status

- [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md): The handler interface for requesting the current status of the car’s locks.
- [INGetCarLockStatusIntentResponse](ingetcarlockstatusintentresponse.md): Your app’s response to a request to get the car’s lock status.
