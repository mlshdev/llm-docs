> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/appstoresettings](https://developer.apple.com/documentation/managedsettings/appstoresettings)

# AppStoreSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constraints on a user’s App Store settings.

## Declaration

```swift
struct AppStoreSettings
```

<a id="overview"></a>

## Overview

Use `AppStoreSettings` to manage a user’s App Store settings. You can set a maximum age rating for apps, deny in-app purchases, and require passwords for purchases.

## Topics

### Denying In-App Purchases

- [denyInAppPurchases](appstoresettings/denyinapppurchases-swift.property.md): A Boolean value that indicates whether to deny the user permission to make in-app purchases.
- [denyInAppPurchases](appstoresettings/denyinapppurchases-swift.type.property.md): The metadata associated with the setting to deny in-app purchases.

### Setting an app rating limit

- [maximumRating](appstoresettings/maximumrating-swift.property.md): The maximum app rating the user can download.
- [maximumRating](appstoresettings/maximumrating-swift.type.property.md): The metadata associated with the maximum app rating setting.

### Requiring a password

- [requirePasswordForPurchases](appstoresettings/requirepasswordforpurchases-swift.property.md): A Boolean value that indicates whether to require the user’s password to make App Store transactions.
- [requirePasswordForPurchases](appstoresettings/requirepasswordforpurchases-swift.type.property.md): The metadata associated with the setting that requires a password for App Store purchases.

## Relationships

### Conforms To

- [ManagedSettingsGroup](managedsettingsgroup.md)

## See Also

### Filtering media content

- [appStore](managedsettingsstore/appstore.md): Settings that affect the App Store.
- [application](managedsettingsstore/application.md): Settings that affect applications.
- [ApplicationSettings](applicationsettings.md): Constraints on the apps and categories of apps a user can run on their device.
- [effectiveMaximumMovieRating](managedsettingsstore/effectivemaximummovierating.md): The movie rating constraint that is active on this device.
- [effectiveMaximumTVShowRating](managedsettingsstore/effectivemaximumtvshowrating.md): The TV rating constraint that is active on this device.
- [gameCenter](managedsettingsstore/gamecenter.md): Settings that affect Game Center.
- [GameCenterSettings](gamecentersettings.md): Constraints on the user’s Game Center settings.
- [media](managedsettingsstore/media.md): Settings that affect media.
- [MediaSettings](mediasettings.md): Constraints on the media content the user can access.
