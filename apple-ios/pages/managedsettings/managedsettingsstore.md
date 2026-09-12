> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/managedsettingsstore](https://developer.apple.com/documentation/managedsettings/managedsettingsstore)

# ManagedSettingsStore

**Framework:** Managed Settings  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 26.0+

A data store that applies settings to the current user or device.

## Declaration

```swift
class ManagedSettingsStore
```

## Mentioned In

- [Confirming the effective TV and movie ratings](readingmedia.md)

<a id="overview"></a>

## Overview

The Managed Settings data store groups settings according to function. Each group contains relevant data about its associated settings, for example, a default value and minimum and maximum possible values.

<a id="Configure-Settings"></a>

### Configure Settings

Use the settings objects to inspect your application’s current configurations as well as apply new configurations. Changing the value of a setting to `nil` deletes your app’s configuration for that setting from the device. The system doesn’t guarantee that the settings you specify govern the device’s behavior. The system is responsible for determining its effective state based on all the settings it receives.

<a id="Examine-Effective-Settings"></a>

### Examine Effective Settings

In a few cases, you can also access the effective settings. For example, a media app can access the effective rating settings to filter the content it offers, even though it doesn’t provide configurations for these or any other settings. Subscribe to [$effectiveMaximumTVShowRating](managedsettingsstore/$effectivemaximumtvshowrating.md) or [$effectiveMaximumMovieRating](managedsettingsstore/$effectivemaximummovierating.md) to determine what TV shows or movies to offer.

## Topics

### Creating the store

- [init()](managedsettingsstore/init%28%29.md): Creates a new instance of a store.

### Managing a settings group

- [ManagedSettingsGroup](managedsettingsgroup.md): A group of settings to manage.

### Restricting device settings

- [account](managedsettingsstore/account.md): Settings that affect accounts.
- [AccountSettings](accountsettings.md): An object that configures whether a user can modify their device’s account settings.
- [cellular](managedsettingsstore/cellular.md): Settings that affect cellular networking.
- [CellularSettings](cellularsettings.md): Constraints on the user’s cellular networking settings.
- [dateAndTime](managedsettingsstore/dateandtime.md): Settings that affect the date and time.
- [DateAndTimeSettings](dateandtimesettings.md): Constraints on the device’s date and time settings.
- [passcode](managedsettingsstore/passcode.md): Settings that affect the device passcode.
- [PasscodeSettings](passcodesettings.md): Constraints on a user’s ability to change their device’s passcode.
- [shield](managedsettingsstore/shield.md): Settings that affect what activities the system covers with a shielding view on this device.
- [ShieldSettings](shieldsettings.md): Constraints that indicate what apps and websites to cover with a shielding view.
- [siri](managedsettingsstore/siri.md): Settings that affect Siri.
- [SiriSettings](sirisettings.md): Constraints on the device’s Siri settings.

### Filtering media content

- [appStore](managedsettingsstore/appstore.md): Settings that affect the App Store.
- [AppStoreSettings](appstoresettings.md): Constraints on a user’s App Store settings.
- [application](managedsettingsstore/application.md): Settings that affect applications.
- [ApplicationSettings](applicationsettings.md): Constraints on the apps and categories of apps a user can run on their device.
- [effectiveMaximumMovieRating](managedsettingsstore/effectivemaximummovierating.md): The movie rating constraint that is active on this device.
- [effectiveMaximumTVShowRating](managedsettingsstore/effectivemaximumtvshowrating.md): The TV rating constraint that is active on this device.
- [gameCenter](managedsettingsstore/gamecenter.md): Settings that affect Game Center.
- [GameCenterSettings](gamecentersettings.md): Constraints on the user’s Game Center settings.
- [media](managedsettingsstore/media.md): Settings that affect media.
- [MediaSettings](mediasettings.md): Constraints on the media content the user can access.

### Restricting web content

- [safari](managedsettingsstore/safari.md): Settings that affect Safari’s search results and cookie policies.
- [SafariSettings](safarisettings.md): Constraints on Safari’s AutoFill and cookie behaviors.
- [webContent](managedsettingsstore/webcontent.md): Settings that affect web content.
- [WebContentSettings](webcontentsettings.md): An object that configures which websites a user can access.

### Accessing metadata

- [BoundedSettingMetadata](boundedsettingmetadata.md): Additional information about a bounded setting.
- [SettingMetadata](settingmetadata.md): Additional information about a configurable setting.

### Observing current settings

- [effectiveMaximumMovieRating](managedsettingsstore/effectivemaximummovierating.md): The movie rating constraint that is active on this device.
- [$effectiveMaximumTVShowRating](managedsettingsstore/$effectivemaximumtvshowrating.md)

### Structures

- [ManagedSettingsStore.Name](managedsettingsstore/name.md): The unique name of a store.
- [ManagedSettingsStore.TokenExpiryMessage](managedsettingsstore/tokenexpirymessage.md): A message that is posted in NotificationCenter when ManagedSettingsStore tokens are expired

### Initializers

- [init(named:)](managedsettingsstore/init%28named_%29.md): Creates a new instance of a store with a custom name.

### Instance Properties

- [$effectiveDenyExplicitContent](managedsettingsstore/$effectivedenyexplicitcontent.md)
- [$effectiveMaximumMovieRating](managedsettingsstore/$effectivemaximummovierating.md)
- [effectiveDenyExplicitContent](managedsettingsstore/effectivedenyexplicitcontent.md): The deny explicit content constraint that is active on this device.
- [isActive](managedsettingsstore/isactive.md): Property that controls whether the store is active

### Instance Methods

- [clearAllSettings()](managedsettingsstore/clearallsettings%28%29.md): Clears all settings for this store.
- [deleteStore()](managedsettingsstore/deletestore%28%29.md): Deletes this store

### Type Properties

- [stores](managedsettingsstore/stores.md): Get the name of all the stores configured by your app

### Type Methods

- [deleteStores(\_:)](managedsettingsstore/deletestores%28__%29.md): Deletes the given stores configured by your app if they exist
- [refresh(\_:)](managedsettingsstore/refresh%28__%29-4v4xe.md): Refresh expired ActivityCategoryTokens
- [refresh(\_:)](managedsettingsstore/refresh%28__%29-65mti.md): Refresh expired ApplicationTokens
- [refresh(\_:)](managedsettingsstore/refresh%28__%29-s5s3.md): Refresh expired WebDomainTokens

## Relationships

### Conforms To

- [ObservableObject](https://developer.apple.com/documentation/combine/observableobject)
