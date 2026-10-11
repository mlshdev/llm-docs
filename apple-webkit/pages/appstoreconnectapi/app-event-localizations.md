> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/app-event-localizations

# App Event Localizations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Create and update in-app event metadata that’s localized.

<a id="overview"></a>

## Overview

> **Note**

>  The in-app event screenshot and in-app event video clip relationships are deprecated. Manage in-app event media with the [App Asset Library](app-asset-library.md) and [placements](app-asset-library-placements.md) instead.

## Topics

### Endpoints

- [Read app event localization information](get-v1-appeventlocalizations-_id_.md): Get information about a specific app event localization.
- [List all video clips for an app event localization](get-v1-appeventlocalizations-_id_-appeventvideoclips.md): Deprecated. Get a list of video clips for a specific app event localization.
- [List app event video clip IDs for an app event localization](get-v1-appeventlocalizations-_id_-relationships-appeventvideoclips.md): Deprecated.
- [List all screenshots for an app event localization](get-v1-appeventlocalizations-_id_-appeventscreenshots.md): Deprecated. Get a list of screenshots for a specific app event localization.
- [List app event screenshot IDs for an app event localization](get-v1-appeventlocalizations-_id_-relationships-appeventscreenshots.md): Deprecated.
- [Modify an app event localization](patch-v1-appeventlocalizations-_id_.md): Update the localized metadata for a specific in-app event.
- [Create an app event localization](post-v1-appeventlocalizations.md): Add a new localization for an in-app event.
- [Delete an app event localization](delete-v1-appeventlocalizations-_id_.md): Delete localized metadata that you configured for an in-app event.
- [List related placements](get-v1-appeventlocalizations-_id_-placements.md): List the placements for an in-app event localization.
- [List the placement IDs for an in-app event localization](get-v1-appeventlocalizations-_id_-relationships-placements.md): Get a list of placement resource IDs for a specific in-app event localization.

### Objects

- [AppEventLocalization](appeventlocalization.md): The localized name, short description, and long description for an App Store app event in a specific language.
- [AppEventLocalizationCreateRequest](appeventlocalizationcreaterequest.md): The request body you use to create an app event localization.
- [AppEventLocalizationResponse](appeventlocalizationresponse.md): The response body for endpoints that create, read, or modify a localized in-app event entry.
- [AppEventLocalizationUpdateRequest](appeventlocalizationupdaterequest.md): The request body you use to update an app event localization update request.
- [AppEventLocalizationsResponse](appeventlocalizationsresponse.md): The response body for endpoints that list localized entries for an in-app event.
- [AppEventLocalizationAppEventScreenshotsLinkagesResponse](appeventlocalizationappeventscreenshotslinkagesresponse.md)
- [AppEventLocalizationAppEventVideoClipsLinkagesResponse](appeventlocalizationappeventvideoclipslinkagesresponse.md)
- [AppEventLocalizationsLinkagesResponse](appeventlocalizationslinkagesresponse.md)
- [AppEventLocalizationPlacementsLinkagesResponse](appeventlocalizationplacementslinkagesresponse.md): A response body that contains a list of related resource IDs.

## See Also

### Managing App Event Metadata

- [App Event Video Clips](app-event-video-clips.md): Create and update video clips your product page uses for the card or detail view of an in-app event.
- [App Event Screenshots](app-event-screenshots.md): Create and update screenshots your product page uses for the card or detail view of an in-app event.
