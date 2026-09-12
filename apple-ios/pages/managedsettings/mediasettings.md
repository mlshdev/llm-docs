> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/mediasettings](https://developer.apple.com/documentation/managedsettings/mediasettings)

# MediaSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constraints on the media content the user can access.

## Declaration

```swift
struct MediaSettings
```

## Topics

### Limiting movie and TV show ratings

- [maximumMovieRating](mediasettings/maximummovierating-swift.property.md): The maximum movie rating the user may view.
- [maximumTVShowRating](mediasettings/maximumtvshowrating-swift.property.md): The maximum TV show rating that the user may view.
- [maximumMovieRating](mediasettings/maximummovierating-swift.type.property.md): The metadata for the setting that controls the maximum movie rating.
- [maximumTVShowRating](mediasettings/maximumtvshowrating-swift.type.property.md): The metadata for the setting that controls the maximum TV show rating.

### Denying explicit media

- [denyExplicitContent](mediasettings/denyexplicitcontent-swift.property.md): A Boolean value that indicates whether to prevent the user from accessing explicit content.
- [denyExplicitContent](mediasettings/denyexplicitcontent-swift.type.property.md): The metadata for the setting that denies explicit content.

### Denying the Apple Music Service

- [denyMusicService](mediasettings/denymusicservice-swift.property.md): A Boolean value that indicates whether to prevent the user from accessing Apple Music’s streaming content.
- [denyMusicService](mediasettings/denymusicservice-swift.type.property.md): The metadata associated with denying access to Apple Music.

### Constraining content in the Books app

- [denyBookstoreErotica](mediasettings/denybookstoreerotica-swift.property.md): A Boolean value that indicates whether to deny media categorized as erotica in the Books store.
- [denyBookstoreErotica](mediasettings/denybookstoreerotica-swift.type.property.md): The metadata associated with the setting that denies access to content in the Books store categorized as erotica.

## Relationships

### Conforms To

- [ManagedSettingsGroup](managedsettingsgroup.md)

## See Also

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
