> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintent](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent)

# INSetSeatSettingsInCarIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A request to change the seat-related settings in a CarPlay-enabled vehicle.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetSeatSettingsInCarIntent
```

<a id="overview"></a>

## Overview

Automotive venders can add support for this intent to an Intents extension that they ship with their automotive apps. When the user asks Siri to change a seat-related setting, Siri creates an [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md) object and delivers it to the app’s Intents extension. You use the intent to identify which setting the user wants to change.

This class contains properties for multiple types of seat-related settings, but a given instance of this class contains changes for only one setting at a time. When resolving and confirming the parameters of this intent, use the specified properties to modify your vehicle’s seat settings. Assume no changes for other settings. If your vehicle doesn’t support a particular setting, offer a reasonable fallback setting and ask the user for confirmation.

The object that handles this intent must adopt the [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md) protocol. Use this intent object to identify which setting changed and to create an [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md) object indicating the results of changing the seat settings.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (in conjunction with CarPlay) |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to change the seat settings in a vehicle in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Turn on the passenger seat heater | Set the driver’s seat cooler to level 2 |
| zh_CN | 打开乘客加热座椅 | 把座位温度调到2级 |
| zh_HK | 打開乘客加熱座椅 | 將通風座椅溫度調到level 2 |
| zh_TW | 打開乘客加熱座椅 | 把座位溫度調到2級 |
| yue_CN | 打开乘客加热座椅 | 将通风座椅温度调到level 2 |
| ar | شغل تدفئة المقاعد للركاب | ضبط تهوية المقاعد إلى المستوى ٢ |
| da | forsæde varme til niveau tre | bagsædevarme til niveau 2 |
| de | Schalte Beifahrersitzheizung ein | Schalte Fahrersitzheizung ein auf 2 |
| es | Prende el calentador de asientos del copiloto | Activa el calentador de asientos |
| fi | Laita matkustajan istuimen lämmitin päälle | Aseta kuljettajan istuimen viilennys tasoon 2 |
| fr | chauffage du siège avant sur position 3 | Mets le chauffage du siège du passager avant sur 2 |
| he | קירור המושב הקדמי למצב 3 | תכווני את חימום המושב הקדמי למצב 3 |
| it | Accendi il riscaldamento del sedile passeggero | Imposta il raffreddamento del sedile guidatore a livello due |
| ja | 前の助手席の座席ヒーターをオン | 運転席のシートクーラーの強さを2に設定 |
| ko | 탑승자 시트 히터 켜줘 | 운전자 시트 쿨러 레벨 2로 설정해줘 |
| ms | Hidupkan penghangat kerusi penumpang | Setkan pendingin kerusi pemandu kepada posisi 2 |
| nb | Skru på varme i passasjersetet | Sett setekjøler i førersetet til 2 |
| nl | Zet de stoelverwarming van de passagier aan | Stel de stoelverkoeling op niveau 2 in |
| pt | Ligue o aquecedor de assento do carona | Coloque o resfriador de assento do motorista no nível 2 |
| ru | Включи подогрев сиденья пассажира | Установи охлаждение сиденья водителя на уровень 2 |
| sv | Sätt på sätesvärmaren för passageraren | Sätt chaufförens säteskylare till nivå 2 |
| th | เปิดเบาะอุ่นที่นั่งผู้โดยสาร | ปรับความเย็นที่นั่งคนขับเป็นระดับ 2 |
| tr | Yolcu koltuğunun ısıtıcısını aç | Sürücü koltuğu soğutucusunu 1’e getir |

When managing CarPlay features, users don’t need to include the name of the app in the phrases that they speak. Siri knows automatically when CarPlay is active and routes CarPlay-related intents to the app of the corresponding automotive vendor.

## Topics

### Initializing the Intent Object

- [init(enableHeating:enableCooling:enableMassage:seat:level:relativeLevel:carName:)](insetseatsettingsincarintent/init%28enableheating_enablecooling_enablemassage_seat_level_relativelevel_carname_%29.md): Deprecated. Initializes the intent object with the specified climate settings information.

### Getting the Seat Position

- [seat](insetseatsettingsincarintent/seat.md): Deprecated. The seat position whose settings you want to modify.

### Getting the New Settings

- [enableCooling](insetseatsettingsincarintent/enablecooling-8qqx3.md): Deprecated. A Boolean value indicating whether to enable the seat cooling system.
- [enableHeating](insetseatsettingsincarintent/enableheating-8auz2.md): Deprecated. A Boolean value indicating whether to enable the seat heating system.
- [enableMassage](insetseatsettingsincarintent/enablemassage-46ndx.md): Deprecated. A Boolean value indicating whether to enable the seat massage system.
- [level](insetseatsettingsincarintent/level-94975.md): Deprecated. An integer value indicating the desired level for the seat setting.
- [relativeLevelSetting](insetseatsettingsincarintent/relativelevelsetting.md): Deprecated. A relative change to the level value.

### Getting the Car Name

- [carName](insetseatsettingsincarintent/carname.md): Deprecated. The name of the car you applied the settings to.

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

### CarPlay Seat Settings

- [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s seat-related settings.
- [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md): Deprecated. Your app’s response to a set seat settings in car intent.

# INSetSeatSettingsInCarIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A request to change the seat-related settings in a CarPlay-enabled vehicle.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetSeatSettingsInCarIntent : INIntent
```

<a id="overview"></a>

## Overview

Automotive venders can add support for this intent to an Intents extension that they ship with their automotive apps. When the user asks Siri to change a seat-related setting, Siri creates an [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md) object and delivers it to the app’s Intents extension. You use the intent to identify which setting the user wants to change.

This class contains properties for multiple types of seat-related settings, but a given instance of this class contains changes for only one setting at a time. When resolving and confirming the parameters of this intent, use the specified properties to modify your vehicle’s seat settings. Assume no changes for other settings. If your vehicle doesn’t support a particular setting, offer a reasonable fallback setting and ask the user for confirmation.

The object that handles this intent must adopt the [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md) protocol. Use this intent object to identify which setting changed and to create an [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md) object indicating the results of changing the seat settings.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (in conjunction with CarPlay) |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to change the seat settings in a vehicle in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Turn on the passenger seat heater | Set the driver’s seat cooler to level 2 |
| zh_CN | 打开乘客加热座椅 | 把座位温度调到2级 |
| zh_HK | 打開乘客加熱座椅 | 將通風座椅溫度調到level 2 |
| zh_TW | 打開乘客加熱座椅 | 把座位溫度調到2級 |
| yue_CN | 打开乘客加热座椅 | 将通风座椅温度调到level 2 |
| ar | شغل تدفئة المقاعد للركاب | ضبط تهوية المقاعد إلى المستوى ٢ |
| da | forsæde varme til niveau tre | bagsædevarme til niveau 2 |
| de | Schalte Beifahrersitzheizung ein | Schalte Fahrersitzheizung ein auf 2 |
| es | Prende el calentador de asientos del copiloto | Activa el calentador de asientos |
| fi | Laita matkustajan istuimen lämmitin päälle | Aseta kuljettajan istuimen viilennys tasoon 2 |
| fr | chauffage du siège avant sur position 3 | Mets le chauffage du siège du passager avant sur 2 |
| he | קירור המושב הקדמי למצב 3 | תכווני את חימום המושב הקדמי למצב 3 |
| it | Accendi il riscaldamento del sedile passeggero | Imposta il raffreddamento del sedile guidatore a livello due |
| ja | 前の助手席の座席ヒーターをオン | 運転席のシートクーラーの強さを2に設定 |
| ko | 탑승자 시트 히터 켜줘 | 운전자 시트 쿨러 레벨 2로 설정해줘 |
| ms | Hidupkan penghangat kerusi penumpang | Setkan pendingin kerusi pemandu kepada posisi 2 |
| nb | Skru på varme i passasjersetet | Sett setekjøler i førersetet til 2 |
| nl | Zet de stoelverwarming van de passagier aan | Stel de stoelverkoeling op niveau 2 in |
| pt | Ligue o aquecedor de assento do carona | Coloque o resfriador de assento do motorista no nível 2 |
| ru | Включи подогрев сиденья пассажира | Установи охлаждение сиденья водителя на уровень 2 |
| sv | Sätt på sätesvärmaren för passageraren | Sätt chaufförens säteskylare till nivå 2 |
| th | เปิดเบาะอุ่นที่นั่งผู้โดยสาร | ปรับความเย็นที่นั่งคนขับเป็นระดับ 2 |
| tr | Yolcu koltuğunun ısıtıcısını aç | Sürücü koltuğu soğutucusunu 1’e getir |

When managing CarPlay features, users don’t need to include the name of the app in the phrases that they speak. Siri knows automatically when CarPlay is active and routes CarPlay-related intents to the app of the corresponding automotive vendor.

## Topics

### Initializing the Intent Object

- [initWithEnableHeating:enableCooling:enableMassage:seat:level:relativeLevelSetting:carName:](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/initwithenableheating:enablecooling:enablemassage:seat:level:relativelevelsetting:carname:): Deprecated. Initializes the intent object with the specified climate settings information.
- [initWithEnableHeating:enableCooling:enableMassage:seat:level:relativeLevelSetting:](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/initwithenableheating:enablecooling:enablemassage:seat:level:relativelevelsetting:): Deprecated. Initializes the intent object with the specified climate settings information.

### Getting the Seat Position

- [seat](insetseatsettingsincarintent/seat.md): Deprecated. The seat position whose settings you want to modify.

### Getting the New Settings

- [enableCooling](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/enablecooling-6bcu7): Deprecated. A Boolean value indicating whether to enable the seat cooling system.
- [enableHeating](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/enableheating-5qj7i): Deprecated. A Boolean value indicating whether to enable the seat heating system.
- [enableMassage](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/enablemassage-5jf2s): Deprecated. A Boolean value indicating whether to enable the seat massage system.
- [level](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/level-5i2i): Deprecated. An integer value indicating the desired level for the seat setting.
- [relativeLevelSetting](insetseatsettingsincarintent/relativelevelsetting.md): Deprecated. A relative change to the level value.

### Getting the Car Name

- [carName](insetseatsettingsincarintent/carname.md): Deprecated. The name of the car you applied the settings to.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### CarPlay Seat Settings

- [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s seat-related settings.
- [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md): Deprecated. Your app’s response to a set seat settings in car intent.
