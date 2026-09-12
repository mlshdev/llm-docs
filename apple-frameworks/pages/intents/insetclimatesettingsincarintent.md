> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent)

# INSetClimateSettingsInCarIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A request to change the climate settings in a CarPlay-enabled vehicle.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetClimateSettingsInCarIntent
```

<a id="overview"></a>

## Overview

Automotive vendors can add support for this intent to an Intents extension that they ship with their automotive apps. When the user asks Siri to change a setting related to the vehicle’s climate control, Siri creates an [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md) object and delivers it to the app’s Intents extension. You use the intent to identify which setting the user wants to change.

This class contains properties for multiple types of climate settings, but a given instance of this class contains changes for only one system at a time. When resolving and confirming the parameters of this intent, use the specified properties to modify your vehicle’s settings. Assume no changes for other settings. If your vehicle doesn’t support a particular setting, offer a reasonable fallback setting and ask the user for confirmation.

The object that handles this intent must adopt the [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md) protocol. Use this intent object to identify which setting changed and to create an [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md) object indicating the results of changing the climate settings.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (in conjunction with CarPlay) |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to change the climate settings in a vehicle in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Turn on the AC | Turn the fan to max |
| zh_CN | 打开空调 | 空调调到最高 |
| zh_HK | 打開空調 | 空調較到最大 |
| zh_TW | 打開空調 | 空調調到最強 |
| yue_CN | 打开空调 | 空调较到最大 |
| ar | شغل تكييف الهواء | أطفأ التحكم بالمناخ |
| da | tænd for klimaanlægget | Skru blæseren op på max |
| de | Klimaanlage einschalten | Schalte Klimaanlage ein |
| es | Prende el aire acondicionado | Pon el climatizador a 20 grados |
| fi | Laita ilmastointi päälle | Laita tuuletin täysille |
| fr | Allume le chauffage | Branche le chauffage |
| he | תרימי את הבקרת אקלים |  |
| it | Accendi l’aria condizionata | Metti la ventola al massimo |
| ja | エアコンをオンにして | ファンを最大にして |
| ko | 에어콘 켜줘 | 팬을 최대로 틀어줘 |
| ms | Hidupkan pendingin hawa | Setkan kipas ke posisi maksimum |
| nb | Skru på klimaanlegget | Skru viften opp til maks |
| nl | Zet de airconditioning aan | Zet de ventilator op het maximum |
| pt | Ligar o ar condicionado | Coloque o ventilador no máximo |
| ru | Включи кондиционер | Сделай обдув на максимум |
| sv | ändra klimatkontrollen till auto | byt klimat till automatiskt |
| th | เปิดแอร์ | เปิดพัดลมระดับสูงสุด |
| tr | Klimayı aç | Fanı sonuna kadar aç |

When managing CarPlay features, users don’t need to include the name of the app in the phrases that they speak. Siri knows automatically when CarPlay is active and routes CarPlay-related intents to the app of the corresponding automotive vendor.

## Topics

### Initializing the Intent Object

- [init(enableFan:enableAirConditioner:enableClimateControl:enableAutoMode:airCirculationMode:fanSpeedIndex:fanSpeedPercentage:relativeFanSpeedSetting:temperature:relativeTemperatureSetting:climateZone:carName:)](insetclimatesettingsincarintent/init%28enablefan_enableairconditioner_enableclimatecontrol_enableautomode_aircirculationmode_fanspeedindex_fanspeedpercentage_relativefanspeedsetting_temperature_relativetemperatures~84210dc4.md): Deprecated. Creates the intent object with the specified climate settings information.

### Getting the Car Name

- [carName](insetclimatesettingsincarintent/carname.md): Deprecated. A name that identifies the user’s car.

### Getting the Climate Control Settings

- [enableClimateControl](insetclimatesettingsincarintent/enableclimatecontrol-4y9iz.md): Deprecated. A Boolean value indicating whether to turn on the climate control system.
- [enableAutoMode](insetclimatesettingsincarintent/enableautomode-31bzq.md): Deprecated. A Boolean value indicating whether to enable automatic mode for the climate control system.
- [airCirculationMode](insetclimatesettingsincarintent/aircirculationmode.md): Deprecated. The air circulation mode for the climate control system.
- [temperature](insetclimatesettingsincarintent/temperature.md): Deprecated. The specific temperature to set for the climate control system.
- [relativeTemperatureSetting](insetclimatesettingsincarintent/relativetemperaturesetting.md): Deprecated. A relative temperature setting.
- [climateZone](insetclimatesettingsincarintent/climatezone.md): Deprecated. The seat position to have its climate settings modified.

### Getting the Fan Settings

- [enableFan](insetclimatesettingsincarintent/enablefan-5srs9.md): Deprecated. A Boolean value indicating whether to turn on the cabin fan system.
- [fanSpeedIndex](insetclimatesettingsincarintent/fanspeedindex-wz49.md): Deprecated. An integer value indicating the desired fan speed position.
- [fanSpeedPercentage](insetclimatesettingsincarintent/fanspeedpercentage-7i2hq.md): Deprecated. A floating-point value indicating the requested fan speed specified as a percentage of the maximum speed.
- [relativeFanSpeedSetting](insetclimatesettingsincarintent/relativefanspeedsetting.md): Deprecated. A relative fan speed setting.

### Getting the Air Conditioner Settings

- [enableAirConditioner](insetclimatesettingsincarintent/enableairconditioner-9q3dr.md): Deprecated. A Boolean value indicating whether to turn on the air conditioner system.

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

### CarPlay Climate Settings

- [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s climate control settings.
- [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md): Deprecated. Your app’s response to a set climate settings in car intent.

# INSetClimateSettingsInCarIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A request to change the climate settings in a CarPlay-enabled vehicle.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetClimateSettingsInCarIntent : INIntent
```

<a id="overview"></a>

## Overview

Automotive vendors can add support for this intent to an Intents extension that they ship with their automotive apps. When the user asks Siri to change a setting related to the vehicle’s climate control, Siri creates an [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md) object and delivers it to the app’s Intents extension. You use the intent to identify which setting the user wants to change.

This class contains properties for multiple types of climate settings, but a given instance of this class contains changes for only one system at a time. When resolving and confirming the parameters of this intent, use the specified properties to modify your vehicle’s settings. Assume no changes for other settings. If your vehicle doesn’t support a particular setting, offer a reasonable fallback setting and ask the user for confirmation.

The object that handles this intent must adopt the [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md) protocol. Use this intent object to identify which setting changed and to create an [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md) object indicating the results of changing the climate settings.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (in conjunction with CarPlay) |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to change the climate settings in a vehicle in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Turn on the AC | Turn the fan to max |
| zh_CN | 打开空调 | 空调调到最高 |
| zh_HK | 打開空調 | 空調較到最大 |
| zh_TW | 打開空調 | 空調調到最強 |
| yue_CN | 打开空调 | 空调较到最大 |
| ar | شغل تكييف الهواء | أطفأ التحكم بالمناخ |
| da | tænd for klimaanlægget | Skru blæseren op på max |
| de | Klimaanlage einschalten | Schalte Klimaanlage ein |
| es | Prende el aire acondicionado | Pon el climatizador a 20 grados |
| fi | Laita ilmastointi päälle | Laita tuuletin täysille |
| fr | Allume le chauffage | Branche le chauffage |
| he | תרימי את הבקרת אקלים |  |
| it | Accendi l’aria condizionata | Metti la ventola al massimo |
| ja | エアコンをオンにして | ファンを最大にして |
| ko | 에어콘 켜줘 | 팬을 최대로 틀어줘 |
| ms | Hidupkan pendingin hawa | Setkan kipas ke posisi maksimum |
| nb | Skru på klimaanlegget | Skru viften opp til maks |
| nl | Zet de airconditioning aan | Zet de ventilator op het maximum |
| pt | Ligar o ar condicionado | Coloque o ventilador no máximo |
| ru | Включи кондиционер | Сделай обдув на максимум |
| sv | ändra klimatkontrollen till auto | byt klimat till automatiskt |
| th | เปิดแอร์ | เปิดพัดลมระดับสูงสุด |
| tr | Klimayı aç | Fanı sonuna kadar aç |

When managing CarPlay features, users don’t need to include the name of the app in the phrases that they speak. Siri knows automatically when CarPlay is active and routes CarPlay-related intents to the app of the corresponding automotive vendor.

## Topics

### Initializing the Intent Object

- [initWithEnableFan:enableAirConditioner:enableClimateControl:enableAutoMode:airCirculationMode:fanSpeedIndex:fanSpeedPercentage:relativeFanSpeedSetting:temperature:relativeTemperatureSetting:climateZone:carName:](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/initwithenablefan:enableairconditioner:enableclimatecontrol:enableautomode:aircirculationmode:fanspeedindex:fanspeedpercentage:relativefanspeedsetting:temperature:relativetemperaturesetting:climatezone:carname:): Deprecated. Initializes the intent object with the specified climate settings information.
- [initWithEnableFan:enableAirConditioner:enableClimateControl:enableAutoMode:airCirculationMode:fanSpeedIndex:fanSpeedPercentage:relativeFanSpeedSetting:temperature:relativeTemperatureSetting:climateZone:](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/initwithenablefan:enableairconditioner:enableclimatecontrol:enableautomode:aircirculationmode:fanspeedindex:fanspeedpercentage:relativefanspeedsetting:temperature:relativetemperaturesetting:climatezone:): Deprecated. Initializes the intent object with the specified climate settings information.

### Getting the Car Name

- [carName](insetclimatesettingsincarintent/carname.md): Deprecated. A name that identifies the user’s car.

### Getting the Climate Control Settings

- [enableClimateControl](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableclimatecontrol-tviy): Deprecated. A Boolean value indicating whether to turn on the climate control system.
- [enableAutoMode](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableautomode-6ye2n): Deprecated. A Boolean value indicating whether to enable automatic mode for the climate control system.
- [airCirculationMode](insetclimatesettingsincarintent/aircirculationmode.md): Deprecated. The air circulation mode for the climate control system.
- [temperature](insetclimatesettingsincarintent/temperature.md): Deprecated. The specific temperature to set for the climate control system.
- [relativeTemperatureSetting](insetclimatesettingsincarintent/relativetemperaturesetting.md): Deprecated. A relative temperature setting.
- [climateZone](insetclimatesettingsincarintent/climatezone.md): Deprecated. The seat position to have its climate settings modified.

### Getting the Fan Settings

- [enableFan](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enablefan-3bu9e): Deprecated. A Boolean value indicating whether to turn on the cabin fan system.
- [fanSpeedIndex](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/fanspeedindex-4c1rr): Deprecated. An integer value indicating the desired fan speed position.
- [fanSpeedPercentage](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/fanspeedpercentage-ep0u): Deprecated. A floating-point value indicating the requested fan speed specified as a percentage of the maximum speed.
- [relativeFanSpeedSetting](insetclimatesettingsincarintent/relativefanspeedsetting.md): Deprecated. A relative fan speed setting.

### Getting the Air Conditioner Settings

- [enableAirConditioner](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableairconditioner-3prnk): Deprecated. A Boolean value indicating whether to turn on the air conditioner system.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### CarPlay Climate Settings

- [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md): Deprecated. The handler interface for changing a vehicle’s climate control settings.
- [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md): Deprecated. Your app’s response to a set climate settings in car intent.
