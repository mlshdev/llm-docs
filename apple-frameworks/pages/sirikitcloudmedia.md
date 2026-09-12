> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia](https://developer.apple.com/documentation/sirikitcloudmedia)

# SiriKit Cloud Media

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Web Service  
**Availability:** SiriKit Cloud Media 1.0.2+

Stream music directly to HomePod speakers from your media service.

<a id="overview"></a>

## Overview

When the user asks an authorized HomePod speaker to play some media, the media device can contact your `SiriKitCloudMedia` service directly, rather than send requests through an intermediary iOS device.

Download the SiriKit Cloud Media [OpenAPI Specification](https://developer.apple.com/sample-code/siri/sirikit-cloud-media-open-api.zip). For details about applying for the SiriKit Media Intents on HomePod program, see the HomePod section of [Siri for Developers](https://developer.apple.com/siri).

<a id="Configure-the-Users-HomePod"></a>

### Configure the User’s HomePod

Authorize HomePod speakers to contact your media service by adopting [Media Setup](mediasetup.md) in your iOS app and vending tokens from an OAuth service. After the user enables your service for devices in their home, they can manage access in the Home app.

Provide a HomePod speaker with details about sending requests to your service by implementing the configuration endpoint. Include paths and required headers for the endpoints you support. See  [Configure Your Service Endpoints](sirikitcloudmedia/configuration-resource.md) for more information.

> **Note**

>  During a single session, some requests may come from a different HomePod speaker or an Apple TV within the user’s home. Respond to these requests the same as you do when a single device sends all of them. Use the [Session](sirikitcloudmedia/session.md) object to maintain continuity.

<a id="Respond-to-a-Siri-Intent-with-a-Media-Playback-Queue"></a>

### Respond to a Siri Intent with a Media Playback Queue

Implement the [Process a Play Media Intent](sirikitcloudmedia/playmedia-1g2o9.md) endpoint to receive the user’s request, resolve the media they want to play, and handle the intent. Respond with a [UserActivity](sirikitcloudmedia/useractivity.md), which the client uses to request a [Queue](sirikitcloudmedia/queue.md) of media [Content](sirikitcloudmedia/content.md) from the [Get a Media Queue](sirikitcloudmedia/playmedia-1onzj.md) endpoint.

Manage how frequently the user can skip content in a queue, and what playback controls are available with each piece of content, with the [PlayMediaControl](sirikitcloudmedia/playmediacontrol.md) you include in each queue. Monitor user interactions and playback progress with periodic updates on the [Report Playback Progress and Activity](sirikitcloudmedia/updateactivity.md) endpoint. You may optionally respond to [Report Playback Progress and Activity](sirikitcloudmedia/updateactivity.md) requests with a queue segment to replace or modify the current playback queue.

<a id="Adapt-to-the-Users-Tastes"></a>

### Adapt to the User’s Tastes

Empower the user to customize their library and playlists with the [Process an Add Media Intent](sirikitcloudmedia/addmedia.md) endpoint. They might ask Siri to add a certain artist’s latest album to their library, or to add the currently playing song to their Karaoke Practice playlist.

You can also tune algorithmic playlists by incorporating the preferences users share as [Process an Update Media Affinity Intent](sirikitcloudmedia/updatemediaaffinity.md) intents. For example, if the user says “I like rock-and-roll,” you might include more songs from that genre the next time they ask to play some music. Or if they say “I don’t like this song,” you might exclude the currently playing song from future recommendations.

## Topics

### Device Configuration

- [Configure Your Service Endpoints](sirikitcloudmedia/configuration-resource.md): Provide configuration details for your media server’s endpoints to a HomePod speaker or an Apple TV.
- [ExtensionConfigTag](sirikitcloudmedia/extensionconfigtag.md): A unique identifier for a specific media service configuration.
- [ExtensionConfig](sirikitcloudmedia/extensionconfig.md): Instructions for accessing your media service’s endpoints.
- [PlayMediaControlActivity](sirikitcloudmedia/playmediacontrolactivity.md): Options for reporting playback progress.

### Media Play Queues

- [Process a Play Media Intent](sirikitcloudmedia/playmedia-1g2o9.md): Interpret the user’s request to play a media item, and provide instructions to access a corresponding playback queue.
- [Get a Media Queue](sirikitcloudmedia/playmedia-1onzj.md): Provide a playback queue from a successfully processed play media intent.

### Content Protection

- [Retrieve an Asset’s Content Protection Key](sirikitcloudmedia/contentprotectionkey.md): Provide the content key for a specific protected asset.
- [ContentProtectionKeyRequest](sirikitcloudmedia/contentprotectionkeyrequest.md): A request for an item’s content protection key.
- [ContentProtectionKeyResponse](sirikitcloudmedia/contentprotectionkeyresponse.md): A response to a request for an item’s content protection key.
- [ContentProtectionKeySystem](sirikitcloudmedia/contentprotectionkeysystem.md): The content protection key systems that SiriKit Cloud Media supports.

### Playback Events

- [QueueActivityReportEvent](sirikitcloudmedia/queueactivityreportevent.md): An event that occurs during content playback.
- [Report Playback Progress and Activity](sirikitcloudmedia/updateactivity.md): Monitor progress through the playback queue.
- [UpdateActivityRequest](sirikitcloudmedia/updateactivityrequest.md): A report of the client’s current playback state and recent user interaction, and an opportunity for your service to modify the client’s playback queue.
- [UpdateActivityResponse](sirikitcloudmedia/updateactivityresponse.md): Updates to the client’s queue and user activity in response to a report of playback progress.
- [Process an Update Media Affinity Intent](sirikitcloudmedia/updatemediaaffinity.md): Record the user’s preference for a specific media item or a broader category of media.

### Playback Failure

- [Recover from Content Playback Failure](sirikitcloudmedia/contentplaybackfailure.md): Provide a recovery queue that allows the client to resume playback after an error.
- [ContentFailure](sirikitcloudmedia/contentfailure.md): An object that describes why the client can’t play a specific piece of content.
- [ContentPlaybackFailureRequest](sirikitcloudmedia/contentplaybackfailurerequest.md): A request the client sends to recover from failed content playback.
- [ContentPlaybackFailureResponse](sirikitcloudmedia/contentplaybackfailureresponse.md): A response that allows the client to recover from failed content playback.

### Library and Playlists

- [Process an Add Media Intent](sirikitcloudmedia/addmedia.md): Add media items to the user’s library or to a playlist.

### Media Items

- [MediaItem](sirikitcloudmedia/mediaitem.md): A particular piece of media that an intent references, such as a song, podcast episode, or playlist.
- [MediaReference](sirikitcloudmedia/mediareference.md): A way of identifying the current media item rather than with metadata.
- [MediaSearch](sirikitcloudmedia/mediasearch.md): A description of the media items the user wants to play, add to a playlist, or express a preference for.
- [MediaItemType](sirikitcloudmedia/mediaitemtype.md): Types of media items or media searches.

### Requests

- [Invocation](sirikitcloudmedia/invocation.md): Properties that clients include in requests to all intent endpoints.
- [Session](sirikitcloudmedia/session.md): Information the client provides about a sequence of requests and responses to process an intent.
- [Constraints](sirikitcloudmedia/constraints.md): Client-originated limitations on how to process a request, such as including explicit content and how much content the client device can receive in a response.
- [PlayerContext](sirikitcloudmedia/playercontext.md): Information about the current playback content.
- [InvocationResponse](sirikitcloudmedia/invocationresponse.md): Properties to include in responses from all intent endpoints.

### Intents

Common objects for processing intents.

- [Intent](sirikitcloudmedia/intent.md): A user request for your service to fulfill.
- [IntentResponse](sirikitcloudmedia/intentresponse.md): Your service’s response to an intent.
- [UserActivity](sirikitcloudmedia/useractivity.md): The context for playing a media queue.
- [IntentResolutionResult](sirikitcloudmedia/intentresolutionresult.md): An object that matches a parameter of an intent, or information about why your service can’t determine a value for the parameter.
- [BooleanResolutionResult](sirikitcloudmedia/booleanresolutionresult.md): A Boolean value that matches an intent parameter, or information about why your service can’t determine the value.

### Exceptions

- [ProtocolExceptionInvocationResponse](sirikitcloudmedia/protocolexceptioninvocationresponse.md): A response object that indicates when the service fails to process the client’s request.
- [ProtocolException](sirikitcloudmedia/protocolexception.md): An exception response from a media service.
- [ProtocolExceptionReason](sirikitcloudmedia/protocolexceptionreason.md): Categories of exceptions a service can encounter.

### Errors

- [UnderlyingError](sirikitcloudmedia/underlyingerror.md): An object that describes a system framework error.
