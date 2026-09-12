> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer](https://developer.apple.com/documentation/avfoundation/avplayer)

# AVPlayer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that provides the interface to control the player’s transport behavior.

## Declaration

```swift
@MainActor class AVPlayer
```

## Mentioned In

- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md)
- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md)
- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)
- [Implementing simple enhanced buffering for your content](implementing-simple-enhanced-buffering-for-your-content.md)
- [Monitoring playback progress in your app](monitoring-playback-progress-in-your-app.md)
- [Presenting chapter markers](presenting-chapter-markers.md)
- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md)

<a id="overview"></a>

## Overview

A player is a controller object that manages the playback and timing of a media asset. Use an instance of [AVPlayer](avplayer.md) to play local and remote file-based media, such as QuickTime movies and MP3 audio files, as well as audiovisual media served using HTTP Live Streaming.

Use a player object to play a single media asset. You can reuse the player instance to play additional media assets using its [replaceCurrentItem(with:)](avplayer/replacecurrentitem%28with_%29.md) method, but it manages the playback of only a single media asset at a time. The framework also provides a subclass called [AVQueuePlayer](avqueueplayer.md) that you can use to manage the playback of a queue of media assets.

You use an [AVPlayer](avplayer.md) to play media assets, which AVFoundation represents using the [AVAsset](avasset.md) class. [AVAsset](avasset.md) only models the *static* aspects of the media, such as its duration or creation date, and on its own, isn’t suitable for playback with an [AVPlayer](avplayer.md). To play an asset, you create an instance of its *dynamic* counterpart found in [AVPlayerItem](avplayeritem.md). This object models the timing and presentation state of an asset played by an instance of [AVPlayer](avplayer.md). See the [AVPlayerItem](avplayeritem.md) reference for more details.

[AVPlayer](avplayer.md) is a dynamic object whose state continuously changes. There are two approaches you can use to observe a player’s state:

- **General State Observations:** You can use key-value observing (KVO) to observe state changes to many of the player’s dynamic properties, such as its [currentItem](avplayer/currentitem.md) or its playback [rate](avplayer/rate.md).
- **Timed State Observations:** KVO works well for general state observations, but isn’t intended for observing continuously changing state like the player’s time. [AVPlayer](avplayer.md) provides two methods to observe time changes:
- [addPeriodicTimeObserver(forInterval:queue:using:)](avplayer/addperiodictimeobserver%28forinterval_queue_using_%29.md)
- [addBoundaryTimeObserver(forTimes:queue:using:)](avplayer/addboundarytimeobserver%28fortimes_queue_using_%29.md)

These methods let you observe time changes either periodically or by boundary, respectively. As changes occur, invoke the callback block or closure you supply to these methods to give you the opportunity to take some action such as updating the state of your player’s user interface.

[AVPlayer](avplayer.md) and [AVPlayerItem](avplayeritem.md) are nonvisual objects, meaning that on their own they’re unable to present an asset’s video onscreen. There are two primary approaches you use to present your video content onscreen:

- **AVKit:** The best way to present your video content is with the AVKit framework’s [AVPlayerViewController](../avkit/avplayerviewcontroller.md) class in iOS and tvOS, or the [AVPlayerView](../avkit/avplayerview.md) class in macOS. These classes present the video content, along with playback controls and other media features giving you a full-featured playback experience.
- **AVPlayerLayer:** When building a custom interface for your player, use [AVPlayerLayer](avplayerlayer.md). You can set this layer a view’s backing layer or add it directly to the layer hierarchy. Unlike [AVPlayerView](../avkit/avplayerview.md) and [AVPlayerViewController](../avkit/avplayerviewcontroller.md), a player layer doesn’t present any playback controls—it only presents the visual content onscreen. It’s up to you to build the playback transport controls to play, pause, and seek through the media.

Alongside the visual content presented with AVKit or [AVPlayerLayer](avplayerlayer.md), you can also present animated content synchronized with the player’s timing using [AVSynchronizedLayer](avsynchronizedlayer.md). Use a synchronized layer pass along player timing to its layer subtree. You can use [AVSynchronizedLayer](avsynchronizedlayer.md) to build custom effects in Core Animation, such as animated lower thirds or video transitions, and have them play in sync with the timing of the player’s current [AVPlayerItem](avplayeritem.md).

## Topics

### Creating a player

- [init(url:)](avplayer/init%28url_%29-87cxx.md): Creates a new player to play a single audiovisual resource referenced by a given URL.
- [init(playerItem:)](avplayer/init%28playeritem_%29.md): Creates a new player to play the specified player item.
- [init()](avplayer/init%28%29.md): Creates a player object.

### Managing the player item

- [currentItem](avplayer/currentitem.md): The item for which the player is currently controlling playback.
- [replaceCurrentItem(with:)](avplayer/replacecurrentitem%28with_%29.md): Replaces the current item with a new item.

### Determining player readiness

- [status](avplayer/status-swift.property.md): A value that indicates the readiness of a player object for playback.
- [AVPlayer.Status](avplayer/status-swift.enum.md): Status values that indicate whether a player can successfully play media.
- [error](avplayer/error.md): An error that caused a failure.

### Controlling playback

- [defaultRate](avplayer/defaultrate.md): A default rate at which to begin playback.
- [play()](avplayer/play%28%29.md): Begins playback of the current item.
- [pause()](avplayer/pause%28%29.md): Pauses playback of the current item.
- [rate](avplayer/rate.md): The current playback rate.
- [rateDidChangeNotification](avplayer/ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [playheadReachedLiveEdge](avplayer/ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [reversePlaybackReachedStartOfSeekableRange](avplayer/ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

### Observing playback time

- [currentTime()](avplayer/currenttime%28%29.md): Returns the current time of the current player item.
- [addPeriodicTimeObserver(forInterval:queue:using:)](avplayer/addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests the periodic invocation of a given block during playback to report changing time.
- [addBoundaryTimeObserver(forTimes:queue:using:)](avplayer/addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests the invocation of a block when specified times are traversed during normal playback.
- [removeTimeObserver(\_:)](avplayer/removetimeobserver%28__%29.md): Cancels a previously registered periodic or boundary time observer.

### Seeking through media

- [seek(to:)](avplayer/seek%28to_%29-87h2r.md): Requests that the player seek to a specified time.
- [seek(to:completionHandler:)](avplayer/seek%28to_completionhandler_%29-75bls.md): Requests that the player seek to a specified time, and to notify you when the seek is complete.
- [seek(to:toleranceBefore:toleranceAfter:)](avplayer/seek%28to_tolerancebefore_toleranceafter_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.
- [seek(to:toleranceBefore:toleranceAfter:completionHandler:)](avplayer/seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seek(to:)](avplayer/seek%28to_%29-9h9qr.md): Requests that the player seek to a specified date.
- [seek(to:completionHandler:)](avplayer/seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](avplayer/automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [reasonForWaitingToPlay](avplayer/reasonforwaitingtoplay.md): The reason the player is currently waiting for playback to begin or resume.
- [AVPlayer.WaitingReason](avplayer/waitingreason.md): The reasons a player is waiting to begin or resume playback.
- [timeControlStatus](avplayer/timecontrolstatus-swift.property.md): A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.
- [AVPlayer.TimeControlStatus](avplayer/timecontrolstatus-swift.enum.md): Constants that indicate the state of playback control.
- [playImmediately(atRate:)](avplayer/playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.

### Responding when playback ends

- [actionAtItemEnd](avplayer/actionatitemend-swift.property.md): The action to perform when the current player item has finished playing.
- [AVPlayer.ActionAtItemEnd](avplayer/actionatitemend-swift.enum.md): The actions a player can take when it finishes playing.

### Configuring media selection criteria

- [appliesMediaSelectionCriteriaAutomatically](avplayer/appliesmediaselectioncriteriaautomatically.md): A Boolean value that indicates whether the receiver should apply the current selection criteria automatically to player items.
- [mediaSelectionCriteria(forMediaCharacteristic:)](avplayer/mediaselectioncriteria%28formediacharacteristic_%29.md): Returns the automatic selection criteria for media items with the specified media characteristic.
- [setMediaSelectionCriteria(\_:forMediaCharacteristic:)](avplayer/setmediaselectioncriteria%28__formediacharacteristic_%29.md): Applies automatic selection criteria for media that has the specified media characteristic.

### Accessing player output

- [videoOutput](avplayer/videooutput.md): The video output for this player.

### Configuring audio behavior

- [volume](avplayer/volume.md): The audio playback volume for the player.
- [isMuted](avplayer/ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [allowedAudioSpatializationFormats](avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [isAudioSpatializationAllowed](avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](avplayer/audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](avplayer/intendedspatialaudioexperience-1bd87.md): The player’s intended Spatial Audio experience.

### Configuring background playback

- [audiovisualBackgroundPlaybackPolicy](avplayer/audiovisualbackgroundplaybackpolicy.md): A policy that determines how playback of audiovisual media continues when the app transitions to the background.
- [AVPlayerAudiovisualBackgroundPlaybackPolicy](avplayeraudiovisualbackgroundplaybackpolicy.md): Policies that describe playback behavior when an app transitions to the background while playing video.

### Managing external playback

- [allowsExternalPlayback](avplayer/allowsexternalplayback.md): A Boolean value that indicates whether the player allows switching to external playback mode.
- [isExternalPlaybackActive](avplayer/isexternalplaybackactive.md): A Boolean value that indicates whether the player is currently playing video in external playback mode.
- [usesExternalPlaybackWhileExternalScreenIsActive](avplayer/usesexternalplaybackwhileexternalscreenisactive.md): A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.
- [externalPlaybackVideoGravity](avplayer/externalplaybackvideogravity.md): The video gravity of the player for external playback mode only.

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](avplayer/eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [availableHDRModes](avplayer/availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [AVPlayer.HDRMode](avplayer/hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.
- [eligibleForHDRPlaybackDidChangeNotification](avplayer/eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.

### Coordinating playback

- [playbackCoordinator](avplayer/playbackcoordinator.md): The playback coordinator for the player.

### Synchronizing multiple players

- [setRate(\_:time:atHostTime:)](avplayer/setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [preroll(atRate:completionHandler:)](avplayer/preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [cancelPendingPrerolls()](avplayer/cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [sourceClock](avplayer/sourceclock.md): A clock the player uses for item time bases.
- [masterClock](avplayer/masterclock.md): Deprecated. The host clock for item time bases.

### Preventing sleep and backgrounding

- [preventsDisplaySleepDuringVideoPlayback](avplayer/preventsdisplaysleepduringvideoplayback.md): A Boolean value that indicates whether video playback prevents display and device sleep.
- [preventsAutomaticBackgroundingDuringVideoPlayback](avplayer/preventsautomaticbackgroundingduringvideoplayback.md): A Boolean value that indicates whether video playback prevents the system from automatically backgrounding the app.

### Determining content protections

- [isOutputObscuredDueToInsufficientExternalProtection](avplayer/isoutputobscuredduetoinsufficientexternalprotection.md): A Boolean value that indicates whether output is being obscured because of insufficient external protection.

### Configuring audio and video devices

- [audioOutputDeviceUniqueID](avplayer/audiooutputdeviceuniqueid.md): Specifies the unique ID of the Core Audio output device used to play audio.
- [preferredVideoDecoderGPURegistryID](avplayer/preferredvideodecodergpuregistryid.md): The registry identifier for the GPU used for video decoding.

### Configuring the network resource priority

- [networkResourcePriority](avplayer/networkresourcepriority-swift.property.md): Indicates the priority of this player for network bandwidth resource distribution.
- [AVPlayer.NetworkResourcePriority](avplayer/networkresourcepriority-swift.enum.md): This defines the network resource priority for a player.

### Configuring observation

- [isObservationEnabled](avplayer/isobservationenabled.md): AVPlayer and other AVFoundation types can optionally be observed using Swift Observation.

### Configuring AirPlay behavior

- [allowsAirPlayVideo](avplayer/allowsairplayvideo.md): Deprecated. A Boolean value that indicates whether the player allows AirPlay video playback.
- [isAirPlayVideoActive](avplayer/isairplayvideoactive.md): Deprecated. A Boolean value that indicates whether the player is playing video through AirPlay.
- [usesAirPlayVideoWhileAirPlayScreenIsActive](avplayer/usesairplayvideowhileairplayscreenisactive.md): Deprecated. A Boolean value that indicates whether the player automatically switches to AirPlay Video while AirPlay Screen is active.

### Displaying closed captions

- [isClosedCaptionDisplayEnabled](avplayer/isclosedcaptiondisplayenabled.md): Deprecated. A Boolean value that indicates whether the player uses closed captioning.

### Initializers

- [init(URL:)](avplayer/init%28url_%29-8aqw0.md)
- [init(URL:)](avplayer/init%28url_%29-9cqj1.md)

### Instance Properties

- [allowsCaptureOfClearKeyVideo](avplayer/allowscaptureofclearkeyvideo.md): Indicates whether the video output of ClearKey Encrypted Video can be captured
- [disconnectedFromSystemAudio](avplayer/disconnectedfromsystemaudio.md): Indicates whether the player is disconnected from system audio.

### Instance Methods

- [setDisconnectedFromSystemAudio(\_:completionHandler:)](avplayer/setdisconnectedfromsystemaudio%28__completionhandler_%29.md): Changes whether the player is disconnected from system audio. This method allows you to dynamically change the player’s system audio connection. The operation is asynchronous. Each call to this method will invoke its own completion handler when the operation completes. When changing from `false` to `true`, you should typically call this method first, then deactivate the `AVAudioSession` to allow other audio to resume.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVQueuePlayer](avqueueplayer.md)

### Conforms To

- [AVRoutingPlaybackParticipant](../avrouting/avroutingplaybackparticipant.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Playback control

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md): Keep your user interface in sync with state changes from playback objects.
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md): Play, pause, and seek through a media presentation.
- [Creating a seamless multiview playback experience](creating-a-seamless-multiview-playback-experience.md): Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.
- [AVPlayerItem](avplayeritem.md): An object that models the timing and presentation state of an asset during playback.
- [AVPlayerItemTrack](avplayeritemtrack.md): An object that represents the presentation state of an asset track during playback.
- [AVQueuePlayer](avqueueplayer.md): An object that plays a sequence of player items.
- [AVPlayerLooper](avplayerlooper.md): An object that loops media content using a queue player.

# AVPlayer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that provides the interface to control the player’s transport behavior.

## Declaration

```objectivec
@interface AVPlayer : NSObject
```

## Mentioned In

- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md)
- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md)
- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)
- [Implementing simple enhanced buffering for your content](implementing-simple-enhanced-buffering-for-your-content.md)
- [Monitoring playback progress in your app](monitoring-playback-progress-in-your-app.md)
- [Presenting chapter markers](presenting-chapter-markers.md)
- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md)

<a id="overview"></a>

## Overview

A player is a controller object that manages the playback and timing of a media asset. Use an instance of [AVPlayer](avplayer.md) to play local and remote file-based media, such as QuickTime movies and MP3 audio files, as well as audiovisual media served using HTTP Live Streaming.

Use a player object to play a single media asset. You can reuse the player instance to play additional media assets using its [replaceCurrentItemWithPlayerItem:](avplayer/replacecurrentitem%28with_%29.md) method, but it manages the playback of only a single media asset at a time. The framework also provides a subclass called [AVQueuePlayer](avqueueplayer.md) that you can use to manage the playback of a queue of media assets.

You use an [AVPlayer](avplayer.md) to play media assets, which AVFoundation represents using the [AVAsset](avasset.md) class. [AVAsset](avasset.md) only models the *static* aspects of the media, such as its duration or creation date, and on its own, isn’t suitable for playback with an [AVPlayer](avplayer.md). To play an asset, you create an instance of its *dynamic* counterpart found in [AVPlayerItem](avplayeritem.md). This object models the timing and presentation state of an asset played by an instance of [AVPlayer](avplayer.md). See the [AVPlayerItem](avplayeritem.md) reference for more details.

[AVPlayer](avplayer.md) is a dynamic object whose state continuously changes. There are two approaches you can use to observe a player’s state:

- **General State Observations:** You can use key-value observing (KVO) to observe state changes to many of the player’s dynamic properties, such as its [currentItem](avplayer/currentitem.md) or its playback [rate](avplayer/rate.md).
- **Timed State Observations:** KVO works well for general state observations, but isn’t intended for observing continuously changing state like the player’s time. [AVPlayer](avplayer.md) provides two methods to observe time changes:
- [addPeriodicTimeObserverForInterval:queue:usingBlock:](avplayer/addperiodictimeobserver%28forinterval_queue_using_%29.md)
- [addBoundaryTimeObserverForTimes:queue:usingBlock:](avplayer/addboundarytimeobserver%28fortimes_queue_using_%29.md)

These methods let you observe time changes either periodically or by boundary, respectively. As changes occur, invoke the callback block or closure you supply to these methods to give you the opportunity to take some action such as updating the state of your player’s user interface.

[AVPlayer](avplayer.md) and [AVPlayerItem](avplayeritem.md) are nonvisual objects, meaning that on their own they’re unable to present an asset’s video onscreen. There are two primary approaches you use to present your video content onscreen:

- **AVKit:** The best way to present your video content is with the AVKit framework’s [AVPlayerViewController](../avkit/avplayerviewcontroller.md) class in iOS and tvOS, or the [AVPlayerView](../avkit/avplayerview.md) class in macOS. These classes present the video content, along with playback controls and other media features giving you a full-featured playback experience.
- **AVPlayerLayer:** When building a custom interface for your player, use [AVPlayerLayer](avplayerlayer.md). You can set this layer a view’s backing layer or add it directly to the layer hierarchy. Unlike [AVPlayerView](../avkit/avplayerview.md) and [AVPlayerViewController](../avkit/avplayerviewcontroller.md), a player layer doesn’t present any playback controls—it only presents the visual content onscreen. It’s up to you to build the playback transport controls to play, pause, and seek through the media.

Alongside the visual content presented with AVKit or [AVPlayerLayer](avplayerlayer.md), you can also present animated content synchronized with the player’s timing using [AVSynchronizedLayer](avsynchronizedlayer.md). Use a synchronized layer pass along player timing to its layer subtree. You can use [AVSynchronizedLayer](avsynchronizedlayer.md) to build custom effects in Core Animation, such as animated lower thirds or video transitions, and have them play in sync with the timing of the player’s current [AVPlayerItem](avplayeritem.md).

## Topics

### Creating a player

- [playerWithURL:](avplayer/playerwithurl_.md): Returns a new player to play a single audiovisual resource referenced by a given URL.
- [initWithURL:](avplayer/init%28url_%29-87cxx.md): Creates a new player to play a single audiovisual resource referenced by a given URL.
- [playerWithPlayerItem:](avplayer/playerwithplayeritem_.md): Returns a new player initialized to play the specified player item.
- [initWithPlayerItem:](avplayer/init%28playeritem_%29.md): Creates a new player to play the specified player item.
- [init](avplayer/init%28%29.md): Creates a player object.

### Managing the player item

- [currentItem](avplayer/currentitem.md): The item for which the player is currently controlling playback.
- [replaceCurrentItemWithPlayerItem:](avplayer/replacecurrentitem%28with_%29.md): Replaces the current item with a new item.

### Determining player readiness

- [status](avplayer/status-swift.property.md): A value that indicates the readiness of a player object for playback.
- [AVPlayerStatus](avplayer/status-swift.enum.md): Status values that indicate whether a player can successfully play media.
- [error](avplayer/error.md): An error that caused a failure.

### Controlling playback

- [defaultRate](avplayer/defaultrate.md): A default rate at which to begin playback.
- [play](avplayer/play%28%29.md): Begins playback of the current item.
- [pause](avplayer/pause%28%29.md): Pauses playback of the current item.
- [rate](avplayer/rate.md): The current playback rate.
- [AVPlayerRateDidChangeNotification](avplayer/ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [AVPlayerRateDidChangeReasonPlayheadReachedLiveEdge](avplayer/ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [AVPlayerRateDidChangeReasonReversePlaybackReachedStartOfSeekableRange](avplayer/ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

### Observing playback time

- [currentTime](avplayer/currenttime%28%29.md): Returns the current time of the current player item.
- [addPeriodicTimeObserverForInterval:queue:usingBlock:](avplayer/addperiodictimeobserver%28forinterval_queue_using_%29.md): Requests the periodic invocation of a given block during playback to report changing time.
- [addBoundaryTimeObserverForTimes:queue:usingBlock:](avplayer/addboundarytimeobserver%28fortimes_queue_using_%29.md): Requests the invocation of a block when specified times are traversed during normal playback.
- [removeTimeObserver:](avplayer/removetimeobserver%28__%29.md): Cancels a previously registered periodic or boundary time observer.

### Seeking through media

- [seekToTime:](avplayer/seek%28to_%29-87h2r.md): Requests that the player seek to a specified time.
- [seekToTime:completionHandler:](avplayer/seek%28to_completionhandler_%29-75bls.md): Requests that the player seek to a specified time, and to notify you when the seek is complete.
- [seekToTime:toleranceBefore:toleranceAfter:](avplayer/seek%28to_tolerancebefore_toleranceafter_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values.
- [seekToTime:toleranceBefore:toleranceAfter:completionHandler:](avplayer/seek%28to_tolerancebefore_toleranceafter_completionhandler_%29.md): Requests that the player seek to a specified time with the amount of accuracy specified by the time tolerance values, and to notify you when the seek is complete.
- [seekToDate:](avplayer/seek%28to_%29-9h9qr.md): Requests that the player seek to a specified date.
- [seekToDate:completionHandler:](avplayer/seek%28to_completionhandler_%29-wr1l.md): Requests that the player seek to a specified date, and to notify you when the seek is complete.

### Configuring waiting behavior

- [automaticallyWaitsToMinimizeStalling](avplayer/automaticallywaitstominimizestalling.md): A Boolean value that indicates whether the player should automatically delay playback in order to minimize stalling.
- [reasonForWaitingToPlay](avplayer/reasonforwaitingtoplay.md): The reason the player is currently waiting for playback to begin or resume.
- [AVPlayerWaitingReason](avplayer/waitingreason.md): The reasons a player is waiting to begin or resume playback.
- [timeControlStatus](avplayer/timecontrolstatus-swift.property.md): A value that indicates whether playback is in progress, paused indefinitely, or waiting for network conditions to improve.
- [AVPlayerTimeControlStatus](avplayer/timecontrolstatus-swift.enum.md): Constants that indicate the state of playback control.
- [playImmediatelyAtRate:](avplayer/playimmediately%28atrate_%29.md): Plays the available media data immediately, at the specified rate.

### Responding when playback ends

- [actionAtItemEnd](avplayer/actionatitemend-swift.property.md): The action to perform when the current player item has finished playing.
- [AVPlayerActionAtItemEnd](avplayer/actionatitemend-swift.enum.md): The actions a player can take when it finishes playing.

### Configuring media selection criteria

- [appliesMediaSelectionCriteriaAutomatically](avplayer/appliesmediaselectioncriteriaautomatically.md): A Boolean value that indicates whether the receiver should apply the current selection criteria automatically to player items.
- [mediaSelectionCriteriaForMediaCharacteristic:](avplayer/mediaselectioncriteria%28formediacharacteristic_%29.md): Returns the automatic selection criteria for media items with the specified media characteristic.
- [setMediaSelectionCriteria:forMediaCharacteristic:](avplayer/setmediaselectioncriteria%28__formediacharacteristic_%29.md): Applies automatic selection criteria for media that has the specified media characteristic.

### Accessing player output

- [videoOutput](avplayer/videooutput.md): The video output for this player.

### Configuring audio behavior

- [volume](avplayer/volume.md): The audio playback volume for the player.
- [muted](avplayer/ismuted.md): A Boolean value that indicates whether the audio output of the player is muted.
- [allowedAudioSpatializationFormats](avplayeritem/allowedaudiospatializationformats.md): The source audio channel layouts the player item supports for spatialization.
- [audioSpatializationAllowed](avplayeritem/isaudiospatializationallowed.md): Deprecated. A Boolean value that indicates whether the player item allows spatialized audio playback.
- [audioOutputSuppressedDueToNonMixableAudioRoute](avplayer/audiooutputsuppressedduetononmixableaudioroute.md): Whether the player’s audio output is suppressed due to being on a non-mixable audio route.
- [intendedSpatialAudioExperience](avplayer/intendedspatialaudioexperience-3uy8g.md): The AVPlayer’s intended spatial audio experience.

### Configuring background playback

- [audiovisualBackgroundPlaybackPolicy](avplayer/audiovisualbackgroundplaybackpolicy.md): A policy that determines how playback of audiovisual media continues when the app transitions to the background.
- [AVPlayerAudiovisualBackgroundPlaybackPolicy](avplayeraudiovisualbackgroundplaybackpolicy.md): Policies that describe playback behavior when an app transitions to the background while playing video.

### Managing external playback

- [allowsExternalPlayback](avplayer/allowsexternalplayback.md): A Boolean value that indicates whether the player allows switching to external playback mode.
- [externalPlaybackActive](avplayer/isexternalplaybackactive.md): A Boolean value that indicates whether the player is currently playing video in external playback mode.
- [usesExternalPlaybackWhileExternalScreenIsActive](avplayer/usesexternalplaybackwhileexternalscreenisactive.md): A Boolean value that indicates whether the player should automatically switch to external playback mode while the external screen mode is active.
- [externalPlaybackVideoGravity](avplayer/externalplaybackvideogravity.md): The video gravity of the player for external playback mode only.

### Determining HDR playback eligibility

- [eligibleForHDRPlayback](avplayer/eligibleforhdrplayback.md): A Boolean value that indicates whether the current device can present content to an HDR display.
- [availableHDRModes](avplayer/availablehdrmodes.md): Deprecated. The HDR modes that are available for playback.
- [AVPlayerHDRMode](avplayer/hdrmode.md): Deprecated. A bitfield type that specifies an HDR mode.
- [AVPlayerEligibleForHDRPlaybackDidChangeNotification](avplayer/eligibleforhdrplaybackdidchangenotification.md): A notification that’s posted whenever HDR playback eligibility changes.
- [AVPlayerAvailableHDRModesDidChangeNotification](avplayeravailablehdrmodesdidchangenotification.md): Deprecated. A notification that fires whenever availableHDRModes changes.

### Coordinating playback

- [playbackCoordinator](avplayer/playbackcoordinator.md): The playback coordinator for the player.

### Synchronizing multiple players

- [setRate:time:atHostTime:](avplayer/setrate%28__time_athosttime_%29.md): Synchronizes the playback rate and time of the current item with an external source.
- [prerollAtRate:completionHandler:](avplayer/preroll%28atrate_completionhandler_%29.md): Begins loading media data to prime the media pipelines for playback.
- [cancelPendingPrerolls](avplayer/cancelpendingprerolls%28%29.md): Cancels any pending preroll requests and invokes the corresponding completion handlers, if present.
- [sourceClock](avplayer/sourceclock.md): A clock the player uses for item time bases.
- [masterClock](avplayer/masterclock.md): Deprecated. The host clock for item time bases.

### Preventing sleep and backgrounding

- [preventsDisplaySleepDuringVideoPlayback](avplayer/preventsdisplaysleepduringvideoplayback.md): A Boolean value that indicates whether video playback prevents display and device sleep.
- [preventsAutomaticBackgroundingDuringVideoPlayback](avplayer/preventsautomaticbackgroundingduringvideoplayback.md): A Boolean value that indicates whether video playback prevents the system from automatically backgrounding the app.

### Determining content protections

- [outputObscuredDueToInsufficientExternalProtection](avplayer/isoutputobscuredduetoinsufficientexternalprotection.md): A Boolean value that indicates whether output is being obscured because of insufficient external protection.

### Configuring audio and video devices

- [audioOutputDeviceUniqueID](avplayer/audiooutputdeviceuniqueid.md): Specifies the unique ID of the Core Audio output device used to play audio.
- [preferredVideoDecoderGPURegistryID](avplayer/preferredvideodecodergpuregistryid.md): The registry identifier for the GPU used for video decoding.

### Configuring the network resource priority

- [networkResourcePriority](avplayer/networkresourcepriority-swift.property.md): Indicates the priority of this player for network bandwidth resource distribution.
- [AVPlayerNetworkResourcePriority](avplayer/networkresourcepriority-swift.enum.md): This defines the network resource priority for a player.

### Configuring observation

- [observationEnabled](avplayer/isobservationenabled.md): AVPlayer and other AVFoundation types can optionally be observed using Swift Observation.

### Configuring AirPlay behavior

- [allowsAirPlayVideo](avplayer/allowsairplayvideo.md): Deprecated. A Boolean value that indicates whether the player allows AirPlay video playback.
- [airPlayVideoActive](avplayer/isairplayvideoactive.md): Deprecated. A Boolean value that indicates whether the player is playing video through AirPlay.
- [usesAirPlayVideoWhileAirPlayScreenIsActive](avplayer/usesairplayvideowhileairplayscreenisactive.md): Deprecated. A Boolean value that indicates whether the player automatically switches to AirPlay Video while AirPlay Screen is active.

### Displaying closed captions

- [closedCaptionDisplayEnabled](avplayer/isclosedcaptiondisplayenabled.md): Deprecated. A Boolean value that indicates whether the player uses closed captioning.

### Instance Properties

- [allowsCaptureOfClearKeyVideo](avplayer/allowscaptureofclearkeyvideo.md): Indicates whether the video output of ClearKey Encrypted Video can be captured
- [disconnectedFromSystemAudio](avplayer/disconnectedfromsystemaudio.md): Indicates whether the player is disconnected from system audio.

### Instance Methods

- [setDisconnectedFromSystemAudio:completionHandler:](avplayer/setdisconnectedfromsystemaudio_completionhandler_.md): Changes whether the player is disconnected from system audio.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVQueuePlayer](avqueueplayer.md)

### Conforms To

- [AVRoutingPlaybackParticipant](../avrouting/avroutingplaybackparticipant.md)

## See Also

### Playback control

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md): Keep your user interface in sync with state changes from playback objects.
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md): Play, pause, and seek through a media presentation.
- [Creating a seamless multiview playback experience](creating-a-seamless-multiview-playback-experience.md): Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.
- [AVPlayerItem](avplayeritem.md): An object that models the timing and presentation state of an asset during playback.
- [AVPlayerItemTrack](avplayeritemtrack.md): An object that represents the presentation state of an asset track during playback.
- [AVQueuePlayer](avqueueplayer.md): An object that plays a sequence of player items.
- [AVPlayerLooper](avplayerlooper.md): An object that loops media content using a queue player.
