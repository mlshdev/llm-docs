> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/game-center-enabled-versions](https://developer.apple.com/documentation/appstoreconnectapi/game-center-enabled-versions)

# Game Center Enabled Versions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage compatible Game Center-enabled versions.

<a id="overview"></a>

## Overview

Use a `gameCenterEnabledVersions` resource to indicate which versions of your app support Game Center. For more information see [Game Center Configuration Guide for App Store Connect](https://developer.apple.com/help/app-store-connect/configure-game-center/overview-of-game-center).

## Topics

### Listing Versions

- [List all game center enabled versions for an app](get-v1-apps-_id_-gamecenterenabledversions.md): Deprecated. Get a list of Game Center enabled versions for a specific app.
- [List all compatible versions for a game center enabled version](get-v1-gamecenterenabledversions-_id_-compatibleversions.md): Deprecated.

### Getting and Adding Compatible Versions

- [Get all compatible version ids for a game center enabled version](get-v1-gamecenterenabledversions-_id_-relationships-compatibleversions.md): Deprecated.
- [Add compatible versions to a game center enabled version](post-v1-gamecenterenabledversions-_id_-relationships-compatibleversions.md): Deprecated.

### Removing and Replacing Compatible Versions

- [Replace all compatible versions for a game center enabled version](patch-v1-gamecenterenabledversions-_id_-relationships-compatibleversions.md): Deprecated.
- [Remove compatible versions from a game center enabled version](delete-v1-gamecenterenabledversions-_id_-relationships-compatibleversions.md): Deprecated.

### Objects

- [GameCenterEnabledVersion](gamecenterenabledversion.md): Deprecated. An app version with Game Center enabled. Deprecated in API version 3.0; use [GameCenterAppVersion](gamecenterappversion.md) instead.
- [GameCenterEnabledVersionCompatibleVersionsLinkagesRequest](gamecenterenabledversioncompatibleversionslinkagesrequest.md): Deprecated. A request body you use to add or remove compatible versions from a Game Center-enabled version.
- [GameCenterEnabledVersionCompatibleVersionsLinkagesResponse](gamecenterenabledversioncompatibleversionslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
- [GameCenterEnabledVersionsResponse](gamecenterenabledversionsresponse.md): Deprecated. A response containing a list of app versions with Game Center enabled (deprecated; use GameCenterAppVersion).
- [AppGameCenterEnabledVersionsLinkagesResponse](appgamecenterenabledversionslinkagesresponse.md): Deprecated.
