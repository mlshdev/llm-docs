> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/gamecentersettings](https://developer.apple.com/documentation/managedsettings/gamecentersettings)

# GameCenterSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constraints on the user’s Game Center settings.

## Declaration

```swift
struct GameCenterSettings
```

<a id="overview"></a>

## Overview

Use `GameCenterSettings` to prevent the user from changing Game Center’s settings for adding friends and joining multiplayer games.

## Topics

### Denying the ability to join multiplayer games

- [denyMultiplayerGaming](gamecentersettings/denymultiplayergaming-swift.property.md): A Boolean value that indicates whether your app prevents the user joining multiplayer games.
- [denyMultiplayerGaming](gamecentersettings/denymultiplayergaming-swift.type.property.md): The metadata associated with the setting that prevents users from joining multiplayer games.

### Denying the ability to add friends

- [denyAddingFriends](gamecentersettings/denyaddingfriends-swift.property.md): A Boolean value that indicates whether to prevent the user from adding Game Center friends.
- [denyAddingFriends](gamecentersettings/denyaddingfriends-swift.type.property.md): The metadata for the setting that prevents the user from adding friends in Game Center.

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
- [media](managedsettingsstore/media.md): Settings that affect media.
- [MediaSettings](mediasettings.md): Constraints on the media content the user can access.
