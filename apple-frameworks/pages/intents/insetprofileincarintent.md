> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintent](https://developer.apple.com/documentation/intents/insetprofileincarintent)

# INSetProfileInCarIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A request to change the user’s vehicle environment settings to the ones from the specified profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSetProfileInCarIntent
```

<a id="overview"></a>

## Overview

Automotive vendors whose cars support the saving of seat and other environment settings can add support for this intent to an Intents extension that they ship with their automotive apps. When users want to restore settings from a profile, SiriKit creates an [INSetProfileInCarIntent](insetprofileincarintent.md) object and delivers it to the app’s Intents extension. You use the intent object to get the name or index of the profile whose settings you use to configure the vehicle.

You’re responsible for determining which settings to save and restore with user profiles. You can restore seat-related settings, climate control settings, defroster settings, radio settings, other settings in your vehicle, or any combination of those settings. Siri handles only the name or index of the profile and doesn’t ask you to provide a list of the settings that you restored. Users can restore settings regardless for whether the profile was originally created through Siri or through your vehicle’s built-in interface.

The object that handles this intent must adopt the [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md) protocol. Use this intent object to resolve the profile information and to create an [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md) object indicating the results of restoring the profile.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (in conjunction with CarPlay) |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to restore profile settings in a vehicle in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Activate profile 1 | Restore profile 3 |
| zh_CN | 打开设置 | 重设设置 |
| zh_HK | 打開資料 | 恢復資料 |
| zh_TW | 打開一號設定檔 |  |
| yue_CN | 打开资料 | 恢复资料 |
| ar | تفعيل الملف الشخصي | تمكين الملف الشخصي |
| da | Aktiver profil 1 | Indlæs profil 2 |
| de | Aktiviere Profil Urlaub | Profil Urlaub aktivieren |
| es | Activa el perfil ‘día soleado’ | Pon la configuración ‘paseo familiar’ |
| fi | Lataa asetukset nimellä 1 | Lataa asetukset 3 |
| fr | Active le profil 1 | Charge le profil virée en voiture |
| he |  |  |
| it | Attiva profilo uno | Rimetti il profilo tre |
| ja | プロファイル1を使用する | プロファイル3をリストアする |
| ko | 프로파일 1 켜줘 | 프로파일 3 작동 시켜 |
| ms | Aktifkan profil 1 | Buka profil 2 |
| nb | Aktiver profil 1 | Still inn profil 3 |
| nl | Activeer profiel 1 | Herstel profiel 3 |
| pt | Ativar perfil 1 | Restaurar perfil 3 |
| ru | Активируй профиль 1 | Загрузи профиль 1 |
| sv | namnge profilen semester | spara profilen som helgresan |
| th | ใช้งานโปรไฟล์ 1 | โหลดโปรไฟล์ 3 |
| tr | Profil 1’i etkinleştir | Profil 1’i aktif hale getir |

When managing CarPlay features, users don’t need to include the name of the app in the phrases that they speak. Siri knows automatically when CarPlay is active and routes CarPlay-related intents to the app of the corresponding automotive vendor.

## Topics

### Initializing the Intent Object

- [init(profileNumber:profileName:isDefaultProfile:carName:)](insetprofileincarintent/init%28profilenumber_profilename_isdefaultprofile_carname_%29.md): Deprecated. Initializes the intent object with the specified profile name and index information.
- [init(profileNumber:profileLabel:defaultProfile:)](insetprofileincarintent/init%28profilenumber_profilelabel_defaultprofile_%29.md): Deprecated. Creates the intent object with the specified profile name and index information.
- [init(defaultProfile:)](insetprofileincarintent/init%28defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileLabel:)](insetprofileincarintent/init%28profilelabel_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileLabel:defaultProfile:)](insetprofileincarintent/init%28profilelabel_defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileLabel:isDefaultProfile:)](insetprofileincarintent/init%28profilelabel_isdefaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileName:defaultProfile:)](insetprofileincarintent/init%28profilename_defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileNumber:defaultProfile:)](insetprofileincarintent/init%28profilenumber_defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileNumber:profileLabel:)](insetprofileincarintent/init%28profilenumber_profilelabel_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileNumber:profileLabel:isDefaultProfile:)](insetprofileincarintent/init%28profilenumber_profilelabel_isdefaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileNumber:profileName:defaultProfile:)](insetprofileincarintent/init%28profilenumber_profilename_defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.

### Getting the Profile Information

- [isDefaultProfile](insetprofileincarintent/isdefaultprofile.md): Deprecated. A Boolean value indicating whether to make the profile the default profile.
- [profileName](insetprofileincarintent/profilename.md): Deprecated. The name assigned to the profile.
- [profileNumber](insetprofileincarintent/profilenumber-37vj8.md): Deprecated. The profile index from which to restore the settings.
- [profileLabel](insetprofileincarintent/profilelabel.md): Deprecated. The name assigned to the profile.

### Getting the Car Name

- [carName](insetprofileincarintent/carname.md): Deprecated. The name of the car associated with the profile.

### Instance Properties

- [defaultProfile](insetprofileincarintent/defaultprofile-19jwc.md): Deprecated.

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

### CarPlay Profile Settings

- [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md): Deprecated. The handler interface for restoring vehicle environment settings from a user-specified profile.
- [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md): Deprecated. Your app’s response to a set profile in car intent.

# INSetProfileInCarIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A request to change the user’s vehicle environment settings to the ones from the specified profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSetProfileInCarIntent : INIntent
```

<a id="overview"></a>

## Overview

Automotive vendors whose cars support the saving of seat and other environment settings can add support for this intent to an Intents extension that they ship with their automotive apps. When users want to restore settings from a profile, SiriKit creates an [INSetProfileInCarIntent](insetprofileincarintent.md) object and delivers it to the app’s Intents extension. You use the intent object to get the name or index of the profile whose settings you use to configure the vehicle.

You’re responsible for determining which settings to save and restore with user profiles. You can restore seat-related settings, climate control settings, defroster settings, radio settings, other settings in your vehicle, or any combination of those settings. Siri handles only the name or index of the profile and doesn’t ask you to provide a list of the settings that you restored. Users can restore settings regardless for whether the profile was originally created through Siri or through your vehicle’s built-in interface.

The object that handles this intent must adopt the [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md) protocol. Use this intent object to resolve the profile information and to create an [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md) object indicating the results of restoring the profile.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (in conjunction with CarPlay) |
| Always requires unlocked device | Yes |

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to restore profile settings in a vehicle in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Activate profile 1 | Restore profile 3 |
| zh_CN | 打开设置 | 重设设置 |
| zh_HK | 打開資料 | 恢復資料 |
| zh_TW | 打開一號設定檔 |  |
| yue_CN | 打开资料 | 恢复资料 |
| ar | تفعيل الملف الشخصي | تمكين الملف الشخصي |
| da | Aktiver profil 1 | Indlæs profil 2 |
| de | Aktiviere Profil Urlaub | Profil Urlaub aktivieren |
| es | Activa el perfil ‘día soleado’ | Pon la configuración ‘paseo familiar’ |
| fi | Lataa asetukset nimellä 1 | Lataa asetukset 3 |
| fr | Active le profil 1 | Charge le profil virée en voiture |
| he |  |  |
| it | Attiva profilo uno | Rimetti il profilo tre |
| ja | プロファイル1を使用する | プロファイル3をリストアする |
| ko | 프로파일 1 켜줘 | 프로파일 3 작동 시켜 |
| ms | Aktifkan profil 1 | Buka profil 2 |
| nb | Aktiver profil 1 | Still inn profil 3 |
| nl | Activeer profiel 1 | Herstel profiel 3 |
| pt | Ativar perfil 1 | Restaurar perfil 3 |
| ru | Активируй профиль 1 | Загрузи профиль 1 |
| sv | namnge profilen semester | spara profilen som helgresan |
| th | ใช้งานโปรไฟล์ 1 | โหลดโปรไฟล์ 3 |
| tr | Profil 1’i etkinleştir | Profil 1’i aktif hale getir |

When managing CarPlay features, users don’t need to include the name of the app in the phrases that they speak. Siri knows automatically when CarPlay is active and routes CarPlay-related intents to the app of the corresponding automotive vendor.

## Topics

### Initializing the Intent Object

- [initWithProfileNumber:profileName:defaultProfile:carName:](https://developer.apple.com/documentation/intents/insetprofileincarintent/initwithprofilenumber:profilename:defaultprofile:carname:): Deprecated. Initializes the intent object with the specified profile name and index information.
- [initWithProfileNumber:profileName:defaultProfile:](https://developer.apple.com/documentation/intents/insetprofileincarintent/initwithprofilenumber:profilename:defaultprofile:): Deprecated. Initializes the intent object with the specified profile name and index information.
- [initWithProfileNumber:profileLabel:defaultProfile:](https://developer.apple.com/documentation/intents/insetprofileincarintent/initwithprofilenumber:profilelabel:defaultprofile:): Deprecated. Initializes the intent object with the specified profile name and index information.

### Getting the Profile Information

- [defaultProfile](https://developer.apple.com/documentation/intents/insetprofileincarintent/defaultprofile-4ztep): Deprecated. A Boolean value indicating whether to make the profile the default profile.
- [profileName](insetprofileincarintent/profilename.md): Deprecated. The name assigned to the profile.
- [profileLabel](insetprofileincarintent/profilelabel.md): Deprecated. The name assigned to the profile.
- [profileNumber](https://developer.apple.com/documentation/intents/insetprofileincarintent/profilenumber-50f30): Deprecated. The profile index from which to restore the settings.

### Getting the Car Name

- [carName](insetprofileincarintent/carname.md): Deprecated. The name of the car associated with the profile.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### CarPlay Profile Settings

- [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md): Deprecated. The handler interface for restoring vehicle environment settings from a user-specified profile.
- [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md): Deprecated. Your app’s response to a set profile in car intent.
