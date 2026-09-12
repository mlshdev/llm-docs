> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer](https://developer.apple.com/documentation/mediaplayer)

# Media Player (Swift)

**Framework:** Media Player  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.12.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Find and play songs, audio podcasts, audio books, and more from within your app.

<a id="overview"></a>

## Overview

Use the Media Player framework, which is part of [MusicKit](https://developer.apple.com/musickit/), to control playback of the user’s media from your app. If your app incorporates music, you can use this framework to search for audio content, such as songs, podcasts, and books, in the user’s library. You can then play that content directly or ask the system Music app to play it. For example, a game might give users the option to play their own music while completing a particular game level.

> **Important**

>  To protect user privacy, users need to grant permission for your app to access their media library. Add the [NSAppleMusicUsageDescription](bundleresources/information-property-list/nsapplemusicusagedescription.md) key to your app’s `Info.plist` file, and include a description of how you intend to use the user’s library. If this key isn’t present, the system terminates your app when it tries to access the user’s library.

To play content from the user’s library using the Media Player framework, use one of the built-in [MPMusicPlayerController](mediaplayer/mpmusicplayercontroller.md) objects:

- An *application player* plays music locally within your app. Use this player when you want greater control over the audio you play for the user. This player doesn’t change the state of the built-in Music app.
- The *system player* employs the Music app to play audio on your behalf. Use this player when you want audio to continue playing even when the user switches away from your app.

Use media queries to retrieve the items you want to play and to populate the queue for the media player you select. After a user gives your app permission to access their Apple Music account, it can add songs, create playlists, and play songs from Apple Music. If your app detects that the user isn’t an Apple Music subscriber, it can offer a trial.

You can’t play video media items directly using the Media Player framework. To play videos containing [MPMediaItem](mediaplayer/mpmediaitem.md) objects, use an [AVPlayer](avfoundation/avplayer.md) object from [AVFoundation](avfoundation.md). The system player also provides a way to play video items using the system apps.

> **Important**

>  Only use this framework to facilitate playback of the user’s audio content within your app. Don’t gather information about the user’s audio content for any other purpose. For more information about accessing Apple Music content, see the [App Store review guidelines](https://developer.apple.com/app-store/review/guidelines/#apple-sites-and-services).

## Topics

### Essentials

- [NSAppleMusicUsageDescription](bundleresources/information-property-list/nsapplemusicusagedescription.md): A message that tells people why the app is requesting access to their media library.

### Built-in music playback

- [Playing audio using the built-in music player](mediaplayer/playing-audio-using-the-built-in-music-player.md): Create a media player inside your app to play audio from the user’s media library.
- [MPMusicPlayerController](mediaplayer/mpmusicplayercontroller.md): An object that plays audio media items from the device’s Music app library.
- [MPMediaPlayback](mediaplayer/mpmediaplayback.md): A protocol that defines the interface for controlling audio media playback.
- [MPSystemMusicPlayerController](mediaplayer/mpsystemmusicplayercontroller.md): A protocol for playing videos in the Music app.

### Media library synchronization

- [MPMediaLibrary](mediaplayer/mpmedialibrary.md): An object that represents the state of synced media items on a device.

### Media item queries

- [Using filters to create specialized queries](mediaplayer/using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuery](mediaplayer/mpmediaquery.md): A query that specifies a set of media items from the device’s media library using a filter and a grouping type.
- [MPMediaQuerySection](mediaplayer/mpmediaquerysection.md): A range of media items or media item collections from within a media query.
- [MPMediaPropertyPredicate](mediaplayer/mpmediapropertypredicate.md): A set of predicates for defining a filter in a media query.
- [MPMediaPredicate](mediaplayer/mpmediapredicate.md): An abstract class that defines classes for filtering media in a media query.

### Media player queues

- [MPMusicPlayerControllerQueue](mediaplayer/mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerControllerMutableQueue](mediaplayer/mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mediaplayer/mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mediaplayer/mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mediaplayer/mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mediaplayer/mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mediaplayer/mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.

### Media items and playlists

- [Providing animated artwork for media items](mediaplayer/providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mediaplayer/mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mediaplayer/mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mediaplayer/mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mediaplayer/mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mediaplayer/mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mediaplayer/mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mediaplayer/mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.

### Media player user interface

- [Displaying a media picker from your app](mediaplayer/displaying-a-media-picker-from-your-app.md): Let users choose the music they want to play by displaying a media picker interface from within your app.
- [MPMediaPickerController](mediaplayer/mpmediapickercontroller.md): A specialized view controller that provides a graphical interface for selecting media items.
- [MPVolumeView](mediaplayer/mpvolumeview.md): A slider control for setting the system audio output volume, and a button for choosing the audio output route.

### Now Playing information

Provide information about the current track.

- [Becoming a now playable app](mediaplayer/becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPNowPlayingSession](mediaplayer/mpnowplayingsession.md): An object that manages Now Playing information and remote commands for multiple players.
- [MPNowPlayingInfoCenter](mediaplayer/mpnowplayinginfocenter.md): An object for setting the Now Playing information for media that your app plays.
- [MPNowPlayingInfoLanguageOption](mediaplayer/mpnowplayinginfolanguageoption.md): A set of interfaces for setting the language option for the Now Playing item.
- [MPNowPlayingInfoLanguageOptionGroup](mediaplayer/mpnowplayinginfolanguageoptiongroup.md): A grouped set of language options where only a single language option can be active at a time.
- [Language option characteristic constants](mediaplayer/language-option-characteristic-constants.md): The constants for defining language characteristics.

### External player and system event handling

Support playback controls on external media players or system-provided controls.

- [Handling external player events notifications](mediaplayer/handling-external-player-events-notifications.md): Handle events for external media players.
- [Remote command center events](mediaplayer/remote-command-center-events.md): Set up the remote command center to handle media player events.
- [Track navigation events](mediaplayer/track-navigation-events.md): Respond to requests to change which part of a media item plays.
- [Media playback mode events](mediaplayer/media-playback-mode-events.md): Respond to changes in the way media items play.
- [Feedback and rating events](mediaplayer/feedback-and-rating-events.md): Respond to incoming feedback and rating events.

### External media player items

Provide content and interact with external media players.

- [MPContentItem](mediaplayer/mpcontentitem.md): An object that contains the information for a displayed media item.

### Media player errors

- [MPError](mediaplayer/mperror.md): A structure that represents a framework error.

### Deprecated

- [Deprecated types](mediaplayer/deprecated-types.md): Review deprecated symbols and avoid using them in your app.

### Classes

- [MPAppEntityIdentifier](mediaplayer/mpappentityidentifier.md)

### Variables

- [MPNowPlayingInfoPropertyAppEntityIdentifiers](mediaplayer/mpnowplayinginfopropertyappentityidentifiers.md)

# Media Player (Objective-C)

**Framework:** Media Player  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.12.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Find and play songs, audio podcasts, audio books, and more from within your app.

<a id="overview"></a>

## Overview

Use the Media Player framework, which is part of [MusicKit](https://developer.apple.com/musickit/), to control playback of the user’s media from your app. If your app incorporates music, you can use this framework to search for audio content, such as songs, podcasts, and books, in the user’s library. You can then play that content directly or ask the system Music app to play it. For example, a game might give users the option to play their own music while completing a particular game level.

> **Important**

>  To protect user privacy, users need to grant permission for your app to access their media library. Add the [NSAppleMusicUsageDescription](bundleresources/information-property-list/nsapplemusicusagedescription.md) key to your app’s `Info.plist` file, and include a description of how you intend to use the user’s library. If this key isn’t present, the system terminates your app when it tries to access the user’s library.

To play content from the user’s library using the Media Player framework, use one of the built-in [MPMusicPlayerController](mediaplayer/mpmusicplayercontroller.md) objects:

- An *application player* plays music locally within your app. Use this player when you want greater control over the audio you play for the user. This player doesn’t change the state of the built-in Music app.
- The *system player* employs the Music app to play audio on your behalf. Use this player when you want audio to continue playing even when the user switches away from your app.

Use media queries to retrieve the items you want to play and to populate the queue for the media player you select. After a user gives your app permission to access their Apple Music account, it can add songs, create playlists, and play songs from Apple Music. If your app detects that the user isn’t an Apple Music subscriber, it can offer a trial.

You can’t play video media items directly using the Media Player framework. To play videos containing [MPMediaItem](mediaplayer/mpmediaitem.md) objects, use an [AVPlayer](avfoundation/avplayer.md) object from [AVFoundation](avfoundation.md). The system player also provides a way to play video items using the system apps.

> **Important**

>  Only use this framework to facilitate playback of the user’s audio content within your app. Don’t gather information about the user’s audio content for any other purpose. For more information about accessing Apple Music content, see the [App Store review guidelines](https://developer.apple.com/app-store/review/guidelines/#apple-sites-and-services).

## Topics

### Essentials

- [NSAppleMusicUsageDescription](bundleresources/information-property-list/nsapplemusicusagedescription.md): A message that tells people why the app is requesting access to their media library.

### Built-in music playback

- [Playing audio using the built-in music player](mediaplayer/playing-audio-using-the-built-in-music-player.md): Create a media player inside your app to play audio from the user’s media library.
- [MPMusicPlayerController](mediaplayer/mpmusicplayercontroller.md): An object that plays audio media items from the device’s Music app library.
- [MPMediaPlayback](mediaplayer/mpmediaplayback.md): A protocol that defines the interface for controlling audio media playback.
- [MPSystemMusicPlayerController](mediaplayer/mpsystemmusicplayercontroller.md): A protocol for playing videos in the Music app.

### Media library synchronization

- [MPMediaLibrary](mediaplayer/mpmedialibrary.md): An object that represents the state of synced media items on a device.

### Media item queries

- [Using filters to create specialized queries](mediaplayer/using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuery](mediaplayer/mpmediaquery.md): A query that specifies a set of media items from the device’s media library using a filter and a grouping type.
- [MPMediaQuerySection](mediaplayer/mpmediaquerysection.md): A range of media items or media item collections from within a media query.
- [MPMediaPropertyPredicate](mediaplayer/mpmediapropertypredicate.md): A set of predicates for defining a filter in a media query.
- [MPMediaPredicate](mediaplayer/mpmediapredicate.md): An abstract class that defines classes for filtering media in a media query.

### Media player queues

- [MPMusicPlayerControllerQueue](mediaplayer/mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerControllerMutableQueue](mediaplayer/mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mediaplayer/mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mediaplayer/mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mediaplayer/mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mediaplayer/mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mediaplayer/mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.

### Media items and playlists

- [Providing animated artwork for media items](mediaplayer/providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mediaplayer/mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mediaplayer/mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mediaplayer/mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mediaplayer/mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mediaplayer/mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mediaplayer/mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mediaplayer/mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.

### Media player user interface

- [Displaying a media picker from your app](mediaplayer/displaying-a-media-picker-from-your-app.md): Let users choose the music they want to play by displaying a media picker interface from within your app.
- [MPMediaPickerController](mediaplayer/mpmediapickercontroller.md): A specialized view controller that provides a graphical interface for selecting media items.
- [MPVolumeView](mediaplayer/mpvolumeview.md): A slider control for setting the system audio output volume, and a button for choosing the audio output route.

### Now Playing information

Provide information about the current track.

- [Becoming a now playable app](mediaplayer/becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPNowPlayingSession](mediaplayer/mpnowplayingsession.md): An object that manages Now Playing information and remote commands for multiple players.
- [MPNowPlayingInfoCenter](mediaplayer/mpnowplayinginfocenter.md): An object for setting the Now Playing information for media that your app plays.
- [MPNowPlayingInfoLanguageOption](mediaplayer/mpnowplayinginfolanguageoption.md): A set of interfaces for setting the language option for the Now Playing item.
- [MPNowPlayingInfoLanguageOptionGroup](mediaplayer/mpnowplayinginfolanguageoptiongroup.md): A grouped set of language options where only a single language option can be active at a time.
- [Language option characteristic constants](mediaplayer/language-option-characteristic-constants.md): The constants for defining language characteristics.

### External player and system event handling

Support playback controls on external media players or system-provided controls.

- [Handling external player events notifications](mediaplayer/handling-external-player-events-notifications.md): Handle events for external media players.
- [Remote command center events](mediaplayer/remote-command-center-events.md): Set up the remote command center to handle media player events.
- [Track navigation events](mediaplayer/track-navigation-events.md): Respond to requests to change which part of a media item plays.
- [Media playback mode events](mediaplayer/media-playback-mode-events.md): Respond to changes in the way media items play.
- [Feedback and rating events](mediaplayer/feedback-and-rating-events.md): Respond to incoming feedback and rating events.

### External media player items

Provide content and interact with external media players.

- [MPContentItem](mediaplayer/mpcontentitem.md): An object that contains the information for a displayed media item.

### Deprecated

- [Deprecated types](mediaplayer/deprecated-types.md): Review deprecated symbols and avoid using them in your app.

### Variables

- [MPNowPlayingInfoPropertyAppEntityIdentifiers](mediaplayer/mpnowplayinginfopropertyappentityidentifiers.md)

### Macros

- [MP_API](mediaplayer/mp_api.md)
- [MP_API_BEGIN](mediaplayer/mp_api_begin.md)
- [MP_API_END](mediaplayer/mp_api_end.md)
- [MP_COMPLETION](mediaplayer/mp_completion.md)
- [MP_DEPRECATED](mediaplayer/mp_deprecated.md)
- [MP_DEPRECATED_BEGIN](mediaplayer/mp_deprecated_begin.md)
- [MP_DEPRECATED_END](mediaplayer/mp_deprecated_end.md)
- [MP_DEPRECATED_WITH_REPLACEMENT](mediaplayer/mp_deprecated_with_replacement.md)
- [MP_DEPRECATED_WITH_REPLACEMENT_BEGIN](mediaplayer/mp_deprecated_with_replacement_begin.md)
- [MP_DEPRECATED_WITH_REPLACEMENT_END](mediaplayer/mp_deprecated_with_replacement_end.md)
- [MP_EXTERN](mediaplayer/mp_extern.md)
- [MP_FALLTHROUGH](mediaplayer/mp_fallthrough.md)
- [MP_FINAL_CLASS](mediaplayer/mp_final_class.md)
- [MP_HAS](mediaplayer/mp_has.md)
- [MP_HAS_HEADER](mediaplayer/mp_has_header.md)
- [MP_INIT_UNAVAILABLE](mediaplayer/mp_init_unavailable.md)
- [MP_OVERLOAD](mediaplayer/mp_overload.md)
- [MP_SWIFT_ERROR_NULLABLE_RESULT](mediaplayer/mp_swift_error_nullable_result.md)
- [MP_SWIFT_MAIN_ACTOR](mediaplayer/mp_swift_main_actor.md)
- [MP_TYPE_PROTOCOL](mediaplayer/mp_type_protocol.md)
- [MP_UNAVAILABLE](mediaplayer/mp_unavailable.md)
- [MP_UNAVAILABLE_BEGIN](mediaplayer/mp_unavailable_begin.md)
- [MP_UNAVAILABLE_END](mediaplayer/mp_unavailable_end.md)
