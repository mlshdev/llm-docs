> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/media](https://developer.apple.com/documentation/sirikit/media)

# Media (Swift)

**Framework:** Intents  
**Kind:** API Collection

Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.

<a id="overview"></a>

## Overview

With the Media domain, users can play and control audio media in your app. Your Intents app extension directs any media-related requests to your app, which then handles the request.

Siri can suggest shortcuts to audio available in your app when the user wants to listen to the content. For example, Siri may suggest a playlist to the user after they connect headphones to their iPhone. These suggestions give the user a convenient way to play the media in your app.

In order for Siri to suggest media content, you should donate an [INPlayMediaIntent](../intents/inplaymediaintent.md) object to Siri after the user plays the content (see [Donating Shortcuts](donating-shortcuts.md)). To have Siri suggest new media that might be of interest to the user, save [INPlayMediaIntent](../intents/inplaymediaintent.md) shortcuts for the new content to the [INUpcomingMediaManager](../intents/inupcomingmediamanager.md).

## Topics

### Essentials

- [Improving Siri Media Interactions and App Selection](improving-siri-media-interactions-and-app-selection.md): Fine-tune voice controls and improve Siri Suggestions by sharing app capabilities, customized names, and listening habits with the system.
- [Managing Audio with SiriKit](managing-audio-with-sirikit.md): Control audio playback and handle requests to add media using SiriKit Media Intents.

### Playable Media Intents

- [INPlayMediaIntentHandling](../intents/inplaymediaintenthandling.md): The interface an object implements to confirm and handle play media intents.
- [INPlayMediaIntent](../intents/inplaymediaintent.md): An intent that contains information about media playable from your app.
- [INPlayMediaIntentResponse](../intents/inplaymediaintentresponse.md): An intents handler’s response to a play media intent.

### Add Media

- [INAddMediaIntentHandling](../intents/inaddmediaintenthandling.md): The handler interface that adds media.
- [INAddMediaIntent](../intents/inaddmediaintent.md): A request to add a media item.
- [INAddMediaIntentResponse](../intents/inaddmediaintentresponse.md): An intents handler’s response to an add media intent.

### Search for Media

- [INSearchForMediaIntentHandling](../intents/insearchformediaintenthandling.md): The interface that handles media search requests.
- [INSearchForMediaIntent](../intents/insearchformediaintent.md): A request to search for a media item.
- [INSearchForMediaIntentResponse](../intents/insearchformediaintentresponse.md): An intents handler’s response to a search media intent.

### Update Media Affinity

- [INUpdateMediaAffinityIntentHandling](../intents/inupdatemediaaffinityintenthandling.md): The interface that handles requests to update the user’s preference for a media item.
- [INUpdateMediaAffinityIntent](../intents/inupdatemediaaffinityintent.md): A request to update the user’s affinity for a media item.
- [INUpdateMediaAffinityIntentResponse](../intents/inupdatemediaaffinityintentresponse.md): An intents handler’s response to an update media affinity intent.

### User Context

- [INUserContext](../intents/inusercontext.md): An object that provides user information to Siri.
- [INMediaUserContext](../intents/inmediausercontext.md): An object that provides user information to Siri.

### Data Objects

- [INMediaItem](../intents/inmediaitem.md): An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.
- [INMediaSearch](../intents/inmediasearch.md): An object that describes a media type to search for, such as a station name, song name, or album name.

### Upcoming Media

- [INUpcomingMediaManager](../intents/inupcomingmediamanager.md): The manager object you use to suggest media to the user.

### Resolution Results

- [INAddMediaMediaDestinationResolutionResult](../intents/inaddmediamediadestinationresolutionresult.md): A resolution result for the types of destinations when adding media.
- [INAddMediaMediaItemResolutionResult](../intents/inaddmediamediaitemresolutionresult.md): A resolution result for the media item to add.
- [INMediaDestinationResolutionResult](../intents/inmediadestinationresolutionresult.md): A resolution result for the media destination types.
- [INMediaItemResolutionResult](../intents/inmediaitemresolutionresult.md): A resolution result for media item types.
- [INMediaAffinityTypeResolutionResult](../intents/inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](../intents/inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlayMediaPlaybackSpeedResolutionResult](../intents/inplaymediaplaybackspeedresolutionresult.md): A resolution result that determines the playback speed of a media item.
- [INPlaybackRepeatModeResolutionResult](../intents/inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INPlaybackQueueLocationResolutionResult](../intents/inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](../intents/insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](../intents/inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.

## See Also

### Standard Intents

- [Car Commands](car-commands.md): Manage vehicle door locks and get the vehicle’s status.
- [Lists and Notes](lists-and-notes.md): Create and manage notes and to-do list items.
- [Messaging](messaging.md): Send messages and search the user’s received messages.
- [Payments](payments.md): Send payments between users or pay bills.
- [Restaurant Reservations](restaurant-reservations.md): Create and manage restaurant reservations with help from the Maps app.
- [Ride Booking](ride-booking.md): Book rides and report their status.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Workouts](workouts.md): Start, end, and manage fitness routines.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.

# Media (Objective-C)

**Framework:** Intents  
**Kind:** API Collection

Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.

<a id="overview"></a>

## Overview

With the Media domain, users can play and control audio media in your app. Your Intents app extension directs any media-related requests to your app, which then handles the request.

Siri can suggest shortcuts to audio available in your app when the user wants to listen to the content. For example, Siri may suggest a playlist to the user after they connect headphones to their iPhone. These suggestions give the user a convenient way to play the media in your app.

In order for Siri to suggest media content, you should donate an [INPlayMediaIntent](../intents/inplaymediaintent.md) object to Siri after the user plays the content (see [Donating Shortcuts](donating-shortcuts.md)). To have Siri suggest new media that might be of interest to the user, save [INPlayMediaIntent](../intents/inplaymediaintent.md) shortcuts for the new content to the [INUpcomingMediaManager](../intents/inupcomingmediamanager.md).

## Topics

### Essentials

- [Improving Siri Media Interactions and App Selection](improving-siri-media-interactions-and-app-selection.md): Fine-tune voice controls and improve Siri Suggestions by sharing app capabilities, customized names, and listening habits with the system.

### Playable Media Intents

- [INPlayMediaIntentHandling](../intents/inplaymediaintenthandling.md): The interface an object implements to confirm and handle play media intents.
- [INPlayMediaIntent](../intents/inplaymediaintent.md): An intent that contains information about media playable from your app.
- [INPlayMediaIntentResponse](../intents/inplaymediaintentresponse.md): An intents handler’s response to a play media intent.

### Add Media

- [INAddMediaIntentHandling](../intents/inaddmediaintenthandling.md): The handler interface that adds media.
- [INAddMediaIntent](../intents/inaddmediaintent.md): A request to add a media item.
- [INAddMediaIntentResponse](../intents/inaddmediaintentresponse.md): An intents handler’s response to an add media intent.

### Search for Media

- [INSearchForMediaIntentHandling](../intents/insearchformediaintenthandling.md): The interface that handles media search requests.
- [INSearchForMediaIntent](../intents/insearchformediaintent.md): A request to search for a media item.
- [INSearchForMediaIntentResponse](../intents/insearchformediaintentresponse.md): An intents handler’s response to a search media intent.

### Update Media Affinity

- [INUpdateMediaAffinityIntentHandling](../intents/inupdatemediaaffinityintenthandling.md): The interface that handles requests to update the user’s preference for a media item.
- [INUpdateMediaAffinityIntent](../intents/inupdatemediaaffinityintent.md): A request to update the user’s affinity for a media item.
- [INUpdateMediaAffinityIntentResponse](../intents/inupdatemediaaffinityintentresponse.md): An intents handler’s response to an update media affinity intent.

### User Context

- [INUserContext](../intents/inusercontext.md): An object that provides user information to Siri.
- [INMediaUserContext](../intents/inmediausercontext.md): An object that provides user information to Siri.

### Data Objects

- [INMediaItem](../intents/inmediaitem.md): An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.
- [INMediaSearch](../intents/inmediasearch.md): An object that describes a media type to search for, such as a station name, song name, or album name.

### Upcoming Media

- [INUpcomingMediaManager](../intents/inupcomingmediamanager.md): The manager object you use to suggest media to the user.

### Resolution Results

- [INAddMediaMediaDestinationResolutionResult](../intents/inaddmediamediadestinationresolutionresult.md): A resolution result for the types of destinations when adding media.
- [INAddMediaMediaItemResolutionResult](../intents/inaddmediamediaitemresolutionresult.md): A resolution result for the media item to add.
- [INMediaDestinationResolutionResult](../intents/inmediadestinationresolutionresult.md): A resolution result for the media destination types.
- [INMediaItemResolutionResult](../intents/inmediaitemresolutionresult.md): A resolution result for media item types.
- [INMediaAffinityTypeResolutionResult](../intents/inmediaaffinitytyperesolutionresult.md): A resolution result for the user’s affinity for a media item.
- [INPlayMediaMediaItemResolutionResult](../intents/inplaymediamediaitemresolutionresult.md): A resolution result for the media item to play.
- [INPlayMediaPlaybackSpeedResolutionResult](../intents/inplaymediaplaybackspeedresolutionresult.md): A resolution result that determines the playback speed of a media item.
- [INPlaybackRepeatModeResolutionResult](../intents/inplaybackrepeatmoderesolutionresult.md): A resolution result for the playback repeat modes of a media item.
- [INPlaybackQueueLocationResolutionResult](../intents/inplaybackqueuelocationresolutionresult.md): A resolution result for the requested playback queue location.
- [INSearchForMediaMediaItemResolutionResult](../intents/insearchformediamediaitemresolutionresult.md): A resolution result for the media item for which to search.
- [INUpdateMediaAffinityMediaItemResolutionResult](../intents/inupdatemediaaffinitymediaitemresolutionresult.md): A resolution result for updating the user’s affinity for a media item.

## See Also

### Standard Intents

- [Car Commands](car-commands.md): Manage vehicle door locks and get the vehicle’s status.
- [Lists and Notes](lists-and-notes.md): Create and manage notes and to-do list items.
- [Messaging](messaging.md): Send messages and search the user’s received messages.
- [Payments](payments.md): Send payments between users or pay bills.
- [Restaurant Reservations](restaurant-reservations.md): Create and manage restaurant reservations with help from the Maps app.
- [Ride Booking](ride-booking.md): Book rides and report their status.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Workouts](workouts.md): Start, end, and manage fitness routines.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.
