> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-maps](https://developer.apple.com/documentation/appintents/app-schema-domain-maps)

# Maps

**Framework:** App Intents  
**Kind:** API Collection

Make your navigation app’s actions available to Apple Intelligence and Siri by adopting schemas for common navigation actions.

<a id="overview"></a>

## Overview

The `.maps` domain defines app schemas that provide a structured representation for common navigation actions and content. Apply schemas in the `.maps` domain to make your app’s navigation functionality available to Apple Intelligence and Siri. Each schema defines the requirements for intents, parameters, and results so people get a consistent experience across navigation apps. For example, a person can start a route on different apps that support the [startNavigation](appschema/mapsintent/startnavigation.md) schema with the same phrases.

The following table maps example phrases that apply to each schema:

| Maps intent schemas | Example phrases |
| --- | --- |
| [startNavigation](appschema/mapsintent/startnavigation.md) | “Navigate to work.” or “Take me home.” |
| [updateNavigationWaypoints](appschema/mapsintent/updatenavigationwaypoints.md) | “Add a stop.” or “Update my route to include my office.” |
| [stopNavigation](appschema/mapsintent/stopnavigation.md) | “Stop navigation.” or “Cancel directions.” |
| [shareETA](appschema/mapsintent/shareeta.md) | “Share my ETA.” or “Send my ETA to Anne.” |
| [stopShareETA](appschema/mapsintent/stopshareeta.md) | “Stop sharing my ETA.” |
| [reportIncident](appschema/mapsintent/reportincident.md) | “Report an accident.” or “There’s a crash ahead.” |

> **Tip**

> Xcode generates a template implementation when you type `maps_` and select a schema from the suggestions list.

For more information about making your app’s actions available to Apple Intelligence and Siri, see [Apple Intelligence and Siri AI](apple-intelligence-and-siri-ai.md).

## Topics

### Actions

- [reportIncident](appschema/mapsintent/reportincident.md): An intent schema that reports a traffic incident on the route.
- [shareETA](appschema/mapsintent/shareeta.md): An intent schema that shares ETA to a contact while navigating.
- [startNavigation](appschema/mapsintent/startnavigation.md): An intent schema that starts navigation.
- [stopNavigation](appschema/mapsintent/stopnavigation.md): An intent schema that ends navigation.
- [stopShareETA](appschema/mapsintent/stopshareeta.md): An intent schema that stops sharing ETA.
- [updateNavigationWaypoints](appschema/mapsintent/updatenavigationwaypoints.md): An intent schema that updates the list of waypoints for a navigation session.
- [AppSchema.MapsIntent](appschema/mapsintent.md): Identifies intent schemas in the maps domain.

### Content and parameter types

- [currentLocation](appschema/mapsentity/currentlocation.md): An entity schema for a current location.
- [navigationSession](appschema/mapsentity/navigationsession.md): An entity schema for a navigation session.
- [operatingHours](appschema/mapsentity/operatinghours.md): An entity schema for an operating hours.
- [operatingTimeRange](appschema/mapsentity/operatingtimerange.md): An entity schema for an operating time range.
- [place](appschema/mapsentity/place.md): An entity schema for a place.
- [rating](appschema/mapsentity/rating.md): An entity schema for a rating.
- [AppSchema.MapsEntity](appschema/mapsentity.md): Identifies entity schemas in the maps domain.

### Types for static parameters

- [amenity](appschema/mapsenum/amenity.md): An enum schema for an amenity parameter.
- [incident](appschema/mapsenum/incident.md): An enum schema for an incident parameter.
- [navigationPreferences](appschema/mapsenum/navigationpreferences.md): An enum schema for a navigation preferences parameter.
- [operatingStatus](appschema/mapsenum/operatingstatus.md): An enum schema for an operating status parameter.
- [priceRange](appschema/mapsenum/pricerange.md): An enum schema for a price range parameter.
- [ratingDescriptor](appschema/mapsenum/ratingdescriptor.md): An enum schema for a rating descriptor parameter.
- [transportType](appschema/mapsenum/transporttype.md): An enum schema for a transport type parameter.
- [AppSchema.MapsEnum](appschema/mapsenum.md): Identifies enum schemas in the maps domain.

## See Also

### Primary domains

- [Audio](app-schema-domain-audio.md): Make your audio app’s actions available to Apple Intelligence and Siri by adopting schemas for common audio playback actions.
- [Calendar](app-schema-domain-calendar.md): Make your calendar app’s actions available to Apple Intelligence and Siri by adopting schemas for common calendar actions.
- [Camera](app-schema-domain-camera.md): Make your camera app’s actions available to Apple Intelligence and Siri by adopting schemas for common camera actions.
- [Clock](app-schema-domain-clock.md): Make your clock app’s actions available to Apple Intelligence and Siri by adopting schemas for common alarm and timer actions.
- [Mail](app-schema-domain-mail.md): Make your email app’s actions available to Apple Intelligence and Siri by adopting schemas for common email actions.
- [Messages](app-schema-domain-messages.md): Make your messaging app’s actions available to Apple Intelligence and Siri by adopting schemas for common messaging actions.
- [Notes](app-schema-domain-notes.md): Make your note-taking app’s actions available to Apple Intelligence and Siri by adopting schemas for common note actions.
- [Phone](app-schema-domain-phone.md): Make your phone app’s actions available to Apple Intelligence and Siri by adopting schemas for calling actions.
- [Photos](app-schema-domain-photos.md): Make your photo and video app’s actions available to Apple Intelligence and Siri by adopting schemas for common photo and video actions.
- [Reminders](app-schema-domain-reminders.md): Make your reminder app’s actions available to Apple Intelligence and Siri by adopting schemas for common reminder actions.
- [System and in-app search](app-schema-domain-system-and-in-app-search.md): Make your app’s actions available to Apple Intelligence and Siri by adopting schemas for in-app search and content access.
