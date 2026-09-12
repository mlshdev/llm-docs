> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintent](https://developer.apple.com/documentation/intents/inactivatecarsignalintent)

# INActivateCarSignalIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to activate the signals on the user’s car.

## Declaration

```swift
class INActivateCarSignalIntent
```

<a id="overview"></a>

## Overview

When the user asks for an audible or visual signal from the car, Siri creates an `INActivateCarSignalIntent` object. This intent object can contain the name of the user’s car and the signal options. Use this object to trigger audible and visual signals from the car.

To handle this intent, the handler object in your Intents extension must adopt the [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md) protocol. Your handler should confirm the request and create an [INActivateCarSignalIntentResponse](inactivatecarsignalintentresponse.md) object with the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object.

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device? | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Uers can ask Siri to activate their car’s signals in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive, and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Honk my car’s horn. | Flash my car’s lights. |
| zh_CN | 按喇叭。 | 打开双闪。 |
| zh_HK | 響喇叭。 | 開死火燈。 |
| zh_TW | 按車子喇叭。 | 打開危險警示燈。 |
| yue_CN | 响喇叭 | 打开双闪灯 |
| ar | اضرب بوق سيارتي | شغل إشارات  سيارتي |
| da | Dyt med min bil | Aktiver min bils blinklys |
| de | Lass mein Auto hupen | Schalte die Warnblinkanlage ein |
| es | Toca la bocina de mi coche | Enciende los intermitentes del coche |
| fi | Tuuttaa auton torvea | Väläytä auton valoja |
| fr | Fais klaxonner ma voiture. | Mets en route les feux de détresse de la voiture. |
| he | תצפרי בצופר האוטו שלי | תפעיל את האורות אזהרה באוטו שלי |
| it | Fai suonare il clacson della mia auto. | Accendi le luci di emergenza della mia auto. |
| ja | クラクションを鳴らして | 車のハザードランプをつけて |
| ko | 경적 울려줘 | 비상등 켜줘 |
| ms | Bunyikan hon kereta saya | Kelipkan lampu kecemasan kereta saya. |
| nb | Tut med tuta | Blink med lysene til bilen min |
| ni | Claxonneer met mijn auto. | Knipper met de knipperlichten van mijn auto. |
| pt | Buzinar carro | Liga o pisca-alerta |
| ru | Нажми на клаксон моей машины. | Помигай фарами моей машины. |
| sv | Tuta min tuta. | Tänd mina varningsblinkers. |
| th | บีบแตร | เปิดไฟฉุกเฉิน |
| tr | Arabamın kornasını çal. | Arabamın dörtlülerini yak. |

Unlike other SiriKit intents, these phrases do not always require your app’s name. Siri infers the app’s name when possible (for example, based on unique user vocabulary registered by your app). If necessary, Siri verifies the app’s name before launching your extension.

## Topics

### Initializing the Intent Object

- [init(carName:signals:)](inactivatecarsignalintent/init%28carname_signals_%29.md): Initializes an intent to trigger audio or visual signals from the car.

### Getting the Car Name

- [carName](inactivatecarsignalintent/carname.md): A name that identifies the user’s car.

### Getting the Signal Information

- [signals](inactivatecarsignalintent/signals.md): The set of signals to activate.

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

### Activate Car Signal

- [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md): The handler interface for requesting to activate the car’s signals.
- [INActivateCarSignalIntentResponse](inactivatecarsignalintentresponse.md): Your app’s response to a request to activate a car’s signals.

# INActivateCarSignalIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to activate the signals on the user’s car.

## Declaration

```objectivec
@interface INActivateCarSignalIntent : INIntent
```

<a id="overview"></a>

## Overview

When the user asks for an audible or visual signal from the car, Siri creates an `INActivateCarSignalIntent` object. This intent object can contain the name of the user’s car and the signal options. Use this object to trigger audible and visual signals from the car.

To handle this intent, the handler object in your Intents extension must adopt the [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md) protocol. Your handler should confirm the request and create an [INActivateCarSignalIntentResponse](inactivatecarsignalintentresponse.md) object with the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object.

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device? | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Uers can ask Siri to activate their car’s signals in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive, and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Honk my car’s horn. | Flash my car’s lights. |
| zh_CN | 按喇叭。 | 打开双闪。 |
| zh_HK | 響喇叭。 | 開死火燈。 |
| zh_TW | 按車子喇叭。 | 打開危險警示燈。 |
| yue_CN | 响喇叭 | 打开双闪灯 |
| ar | اضرب بوق سيارتي | شغل إشارات  سيارتي |
| da | Dyt med min bil | Aktiver min bils blinklys |
| de | Lass mein Auto hupen | Schalte die Warnblinkanlage ein |
| es | Toca la bocina de mi coche | Enciende los intermitentes del coche |
| fi | Tuuttaa auton torvea | Väläytä auton valoja |
| fr | Fais klaxonner ma voiture. | Mets en route les feux de détresse de la voiture. |
| he | תצפרי בצופר האוטו שלי | תפעיל את האורות אזהרה באוטו שלי |
| it | Fai suonare il clacson della mia auto. | Accendi le luci di emergenza della mia auto. |
| ja | クラクションを鳴らして | 車のハザードランプをつけて |
| ko | 경적 울려줘 | 비상등 켜줘 |
| ms | Bunyikan hon kereta saya | Kelipkan lampu kecemasan kereta saya. |
| nb | Tut med tuta | Blink med lysene til bilen min |
| ni | Claxonneer met mijn auto. | Knipper met de knipperlichten van mijn auto. |
| pt | Buzinar carro | Liga o pisca-alerta |
| ru | Нажми на клаксон моей машины. | Помигай фарами моей машины. |
| sv | Tuta min tuta. | Tänd mina varningsblinkers. |
| th | บีบแตร | เปิดไฟฉุกเฉิน |
| tr | Arabamın kornasını çal. | Arabamın dörtlülerini yak. |

Unlike other SiriKit intents, these phrases do not always require your app’s name. Siri infers the app’s name when possible (for example, based on unique user vocabulary registered by your app). If necessary, Siri verifies the app’s name before launching your extension.

## Topics

### Initializing the Intent Object

- [initWithCarName:signals:](inactivatecarsignalintent/init%28carname_signals_%29.md): Initializes an intent to trigger audio or visual signals from the car.

### Getting the Car Name

- [carName](inactivatecarsignalintent/carname.md): A name that identifies the user’s car.

### Getting the Signal Information

- [signals](inactivatecarsignalintent/signals.md): The set of signals to activate.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Activate Car Signal

- [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md): The handler interface for requesting to activate the car’s signals.
- [INActivateCarSignalIntentResponse](inactivatecarsignalintentresponse.md): Your app’s response to a request to activate a car’s signals.
