> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/applicationsettings](https://developer.apple.com/documentation/managedsettings/applicationsettings)

# ApplicationSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constraints on the apps and categories of apps a user can run on their device.

## Declaration

```swift
struct ApplicationSettings
```

## Topics

### Blocking applications

- [blockedApplications](applicationsettings/blockedapplications-swift.property.md): A set of applications for the system to block.
- [blockedApplications](applicationsettings/blockedapplications-swift.type.property.md): A description of the setting that controls which apps a user can launch on their device.

### Preventing app installation and removal

- [denyAppInstallation](applicationsettings/denyappinstallation-swift.property.md): A Boolean value that indicates whether to prevent the user from installing applications.
- [denyAppInstallation](applicationsettings/denyappinstallation-swift.type.property.md): The metadata for the setting to prevent app installation.
- [denyAppRemoval](applicationsettings/denyappremoval-swift.property.md): A Boolean value that indicates whether to prevent the user from removing applications.
- [denyAppRemoval](applicationsettings/denyappremoval-swift.type.property.md): The metadata for the setting to prevent app removal.

## Relationships

### Conforms To

- [ManagedSettingsGroup](managedsettingsgroup.md)

## See Also

### Filtering media content

- [appStore](managedsettingsstore/appstore.md): Settings that affect the App Store.
- [AppStoreSettings](appstoresettings.md): Constraints on a user’s App Store settings.
- [application](managedsettingsstore/application.md): Settings that affect applications.
- [effectiveMaximumMovieRating](managedsettingsstore/effectivemaximummovierating.md): The movie rating constraint that is active on this device.
- [effectiveMaximumTVShowRating](managedsettingsstore/effectivemaximumtvshowrating.md): The TV rating constraint that is active on this device.
- [gameCenter](managedsettingsstore/gamecenter.md): Settings that affect Game Center.
- [GameCenterSettings](gamecentersettings.md): Constraints on the user’s Game Center settings.
- [media](managedsettingsstore/media.md): Settings that affect media.
- [MediaSettings](mediasettings.md): Constraints on the media content the user can access.
