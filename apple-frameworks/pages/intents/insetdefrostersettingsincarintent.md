> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetdefrostersettingsincarintent](https://developer.apple.com/documentation/intents/insetdefrostersettingsincarintent)

# INSetDefrosterSettingsInCarIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A request to change the defroster settings in a CarPlay-enabled vehicle.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetDefrosterSettingsInCarIntent
```

<a id="overview"></a>

## Overview

Automotive venders can add support for this intent to an Intents extension that they ship with their automotive apps. When the user asks Siri to change the defroster settings for a vehicle, SiriKit creates an [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md) object and delivers it to the app’s Intents extension. You use the intent to identify which defroster the user wants to enable or disable and to communicate the changes directly to your vehicle’s systems.

The object that handles this intent must adopt the [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md) protocol. Use this intent object to resolve the defroster details and to create an [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md) object indicating whether you were able to make the change successfully.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (in conjunction with CarPlay) |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to enable or disable the defrosters in a vehicle in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Turn on the rear defroster | Turn off the front defroster |
| zh_CN | 打开前窗除雾 | 打开后窗除雾 |
| zh_HK | 打開前面車窗除霧 | 打開後車窗嘅除霧 |
| zh_TW | 打開前窗除霧 | 打開後窗除霧 |
| yue_CN | 打开前面车窗除雾 | 打开后车窗嘅除雾 |
| ar | شغل مزيل الصقيع الخلفي | شغل مزيل الصقيع الأمامي |
| da | afrimer på fuld styrke | Sluk for afrimeren |
| de | Heckscheibenheizung einschalten | Schalte Heckscheibenheizung ein |
| es | Enciende el desempañador | Apaga el desempañador trasero |
| fi | Laita takaikkunan huurteenpoisto päälle | Laita takaikkunan huurteenpoisto pois päältä |
| fr | Allume le dégivrage arrière | Mets en marche le dégivrage arrière |
| he | שים את מפיג האדים בעוצמה הגבוהה ביותר | שימי את המוריד אדים על הכי חזק |
| it | Accendi lo sbrinatore posteriore | Spegni lo sbrinatore del parabrezza |
| ja | 後部デフロスターをオンにして | フロントデフロスターをオフにして |
| ko | 뒷 유리 서리 제거해 | 앞 유리 서리 제거해 |
| ms | Hidupkan penyahfros belakang | Matikan penyahfros depan |
| nb | Skru på defrosteren bak | Skru av defrosteren foran |
| nl | Zet de ontdooier achteraan aan | Zet de ontwasemer van voor uit |
| pt | Ligue o desembaçador traseiro | Desligar o desembaçador frontal |
| ru | Включи задний обогреватель стёкол | Выключи передний подогрев стёкол |
| sv | avfrostaren på full styrka | avfrostaren på max |
| th | เปิดตัวไล่ฝ้าด้านหลัง | ปิดที่ไล่ฝ้าด้านหน้า |
| tr | Arka buz çözücüyü başlat | Ön buz çözücüyü kapat |

When managing CarPlay features, users don’t need to include the name of the app in the phrases that they speak. Siri knows automatically when CarPlay is active and routes CarPlay-related intents to the app of the corresponding automotive vendor.

## Topics

### Initializing the Intent Object

- [init(enable:defroster:carName:)](insetdefrostersettingsincarintent/init%28enable_defroster_carname_%29.md): Deprecated. Initializes the intent object with the specified defroster information.

### Getting Details About the Defroster Settings to Set

- [enable](insetdefrostersettingsincarintent/enable-9xte9.md): Deprecated. A Boolean indicating whether to enable or disable the defroster.
- [defroster](insetdefrostersettingsincarintent/defroster.md): Deprecated. The defroster to enable or disable.

### Getting the Car Name

- [carName](insetdefrostersettingsincarintent/carname.md): Deprecated. The name of the car you applied the settings to.

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

### CarPlay Defroster Settings

- [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s defroster settings.
- [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md): Deprecated. Your app’s response to a set defroster settings in car intent.

# INSetDefrosterSettingsInCarIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A request to change the defroster settings in a CarPlay-enabled vehicle.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetDefrosterSettingsInCarIntent : INIntent
```

<a id="overview"></a>

## Overview

Automotive venders can add support for this intent to an Intents extension that they ship with their automotive apps. When the user asks Siri to change the defroster settings for a vehicle, SiriKit creates an [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md) object and delivers it to the app’s Intents extension. You use the intent to identify which defroster the user wants to enable or disable and to communicate the changes directly to your vehicle’s systems.

The object that handles this intent must adopt the [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md) protocol. Use this intent object to resolve the defroster details and to create an [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md) object indicating whether you were able to make the change successfully.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (in conjunction with CarPlay) |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to enable or disable the defrosters in a vehicle in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Turn on the rear defroster | Turn off the front defroster |
| zh_CN | 打开前窗除雾 | 打开后窗除雾 |
| zh_HK | 打開前面車窗除霧 | 打開後車窗嘅除霧 |
| zh_TW | 打開前窗除霧 | 打開後窗除霧 |
| yue_CN | 打开前面车窗除雾 | 打开后车窗嘅除雾 |
| ar | شغل مزيل الصقيع الخلفي | شغل مزيل الصقيع الأمامي |
| da | afrimer på fuld styrke | Sluk for afrimeren |
| de | Heckscheibenheizung einschalten | Schalte Heckscheibenheizung ein |
| es | Enciende el desempañador | Apaga el desempañador trasero |
| fi | Laita takaikkunan huurteenpoisto päälle | Laita takaikkunan huurteenpoisto pois päältä |
| fr | Allume le dégivrage arrière | Mets en marche le dégivrage arrière |
| he | שים את מפיג האדים בעוצמה הגבוהה ביותר | שימי את המוריד אדים על הכי חזק |
| it | Accendi lo sbrinatore posteriore | Spegni lo sbrinatore del parabrezza |
| ja | 後部デフロスターをオンにして | フロントデフロスターをオフにして |
| ko | 뒷 유리 서리 제거해 | 앞 유리 서리 제거해 |
| ms | Hidupkan penyahfros belakang | Matikan penyahfros depan |
| nb | Skru på defrosteren bak | Skru av defrosteren foran |
| nl | Zet de ontdooier achteraan aan | Zet de ontwasemer van voor uit |
| pt | Ligue o desembaçador traseiro | Desligar o desembaçador frontal |
| ru | Включи задний обогреватель стёкол | Выключи передний подогрев стёкол |
| sv | avfrostaren på full styrka | avfrostaren på max |
| th | เปิดตัวไล่ฝ้าด้านหลัง | ปิดที่ไล่ฝ้าด้านหน้า |
| tr | Arka buz çözücüyü başlat | Ön buz çözücüyü kapat |

When managing CarPlay features, users don’t need to include the name of the app in the phrases that they speak. Siri knows automatically when CarPlay is active and routes CarPlay-related intents to the app of the corresponding automotive vendor.

## Topics

### Initializing the Intent Object

- [initWithEnable:defroster:carName:](https://developer.apple.com/documentation/intents/insetdefrostersettingsincarintent/initwithenable:defroster:carname:): Deprecated. Initializes the intent object with the specified defroster information.
- [initWithEnable:defroster:](https://developer.apple.com/documentation/intents/insetdefrostersettingsincarintent/initwithenable:defroster:): Deprecated. Initializes the intent object with the specified defroster information.

### Getting Details About the Defroster Settings to Set

- [enable](https://developer.apple.com/documentation/intents/insetdefrostersettingsincarintent/enable-8tf0i): Deprecated. A Boolean indicating whether to enable or disable the defroster.
- [defroster](insetdefrostersettingsincarintent/defroster.md): Deprecated. The defroster to enable or disable.

### Getting the Car Name

- [carName](insetdefrostersettingsincarintent/carname.md): Deprecated. The name of the car you applied the settings to.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### CarPlay Defroster Settings

- [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s defroster settings.
- [INSetDefrosterSettingsInCarIntentResponse](insetdefrostersettingsincarintentresponse.md): Deprecated. Your app’s response to a set defroster settings in car intent.
