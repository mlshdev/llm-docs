> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/game-center-activity-images](https://developer.apple.com/documentation/appstoreconnectapi/game-center-activity-images)

# Game Center activity images

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage images for your Game Center activities.

<a id="overview"></a>

## Overview

To manage Game Center activity images, be sure you have one of the following user roles:

- `ADMIN`
- `APP MANAGER`
- `MARKETING`

## Topics

### Managing Game Center activities

- [Read activity image information](get-v1-gamecenteractivityimages-_id_.md): Get information for a specific Game Center activity image.
- [Create an Activity Image](post-v1-gamecenteractivityimages.md): Reserve an image for a Game Center activity.
- [Commit an Image for an Activity](patch-v1-gamecenteractivityimages-_id_.md): Commit an uploaded image asset as a Game Center activity image.
- [Delete an Activity Image](delete-v1-gamecenteractivityimages-_id_.md): Remove a specific image from a Game Center activity.

### Objects

- [GameCenterActivityImage](gamecenteractivityimage.md): An image asset representing a Game Center activity in the player interface.
- [GameCenterActivityImageCreateRequest](gamecenteractivityimagecreaterequest.md): The request body for creating an image asset for a Game Center activity.
- [GameCenterActivityImageResponse](gamecenteractivityimageresponse.md): A response containing a single image asset for a Game Center activity.
- [GameCenterActivityImageUpdateRequest](gamecenteractivityimageupdaterequest.md): The request body you use to update an activity.

## See Also

### Activities

- [Configuring Game center activities](configuring-game-center-activities.md): Setup and configure a way for players to compete on a specific task or part of your game.
- [Game Center activities](game-center-activities.md): Manage Game Center activities for your apps.
- [Game Center activity versions](game-center-activity-versions.md): Manage versions for your Game Center activities.
- [Game Center activity version releases](game-center-activity-version-releases.md): Manage version releases for your Game Center activities.
- [Game Center activity localizations](game-center-activity-localizations.md): Manage localizations for your Game Center activities.
