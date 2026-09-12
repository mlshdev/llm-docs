> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/game-center-activity-localizations](https://developer.apple.com/documentation/appstoreconnectapi/game-center-activity-localizations)

# Game Center activity localizations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage localizations for your Game Center activities.

<a id="overview"></a>

## Overview

To manage Game Center activity localizations, be sure you have one of the following user roles:

- `ADMIN`
- `APP MANAGER`
- `MARKETING`

## Topics

### Managing Game Center activities

- [Read Activity Localization Information](get-v1-gamecenteractivitylocalizations-_id_.md): Get information for a specific Game Center activity localization.
- [Read Image Information for an Activity Localization](get-v1-gamecenteractivitylocalizations-_id_-image.md): Get details about the image for a specific Game Center activity localization.
- [Get the image ID for a Game Center activity localization](get-v1-gamecenteractivitylocalizations-_id_-relationships-image.md)
- [Add an Activity Localization](post-v1-gamecenteractivitylocalizations.md): Add a localization for a specific Game Center activity.
- [Modify an Activity Localization](patch-v1-gamecenteractivitylocalizations-_id_.md): Update localization information for a specific Game Center activity.
- [Delete an Activity Localization](delete-v1-gamecenteractivitylocalizations-_id_.md): Remove a specific localization from a Game Center activity.

### Objects

- [GameCenterActivityLocalization](gamecenteractivitylocalization.md): The localized name, description, and image for a Game Center activity in a specific language.
- [GameCenterActivityLocalizationCreateRequest](gamecenteractivitylocalizationcreaterequest.md): The request body for creating a localization for a Game Center activity.
- [GameCenterActivityLocalizationResponse](gamecenteractivitylocalizationresponse.md): A response containing a single localization for a Game Center activity.
- [GameCenterActivityLocalizationUpdateRequest](gamecenteractivitylocalizationupdaterequest.md): The request body you use to update an activity localization.
- [GameCenterActivityLocalizationsResponse](gamecenteractivitylocalizationsresponse.md): A response containing a list of localizations for a Game Center activity.
- [GameCenterActivityLocalizationImageLinkageResponse](gamecenteractivitylocalizationimagelinkageresponse.md)

## See Also

### Activities

- [Configuring Game center activities](configuring-game-center-activities.md): Setup and configure a way for players to compete on a specific task or part of your game.
- [Game Center activities](game-center-activities.md): Manage Game Center activities for your apps.
- [Game Center activity versions](game-center-activity-versions.md): Manage versions for your Game Center activities.
- [Game Center activity version releases](game-center-activity-version-releases.md): Manage version releases for your Game Center activities.
- [Game Center activity images](game-center-activity-images.md): Manage images for your Game Center activities.
