> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession](https://developer.apple.com/documentation/avfaudio/avaudiosession)

# AVAudioSession (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that communicates to the system how you intend to use audio in your app.

## Declaration

```swift
class AVAudioSession
```

## Mentioned In

- [Handling audio interruptions](handling-audio-interruptions.md)
- [Responding to audio route changes](responding-to-audio-route-changes.md)

<a id="overview"></a>

## Overview

An audio session acts as an intermediary between your app and the operating system — and, in turn, the underlying audio hardware. You use an audio session to communicate to the operating system the general nature of your app’s audio without detailing the specific behavior or required interactions with the audio hardware. You delegate the management of those details to the audio session, which ensures that the operating system can best manage the user’s audio experience.

All iOS, tvOS, and watchOS apps have a default audio session that comes preconfigured with the following behavior:

- It supports audio playback, but disallows audio recording.
- When the app plays audio, it silences any other background audio.
- In iOS, setting the Ring/Silent switch to silent mode silences any audio the app is playing.
- In iOS, locking a device silences the app’s audio.

Although the default audio session provides useful behavior, it generally doesn’t provide the audio behavior a media app needs. To change the default behavior, you configure your app’s audio session category.

There are six possible categories you can use, but [playback](avaudiosession/category-swift.struct/playback.md) is the one that playback apps most commonly use. This category indicates that audio playback is a central feature of your app. When you specify this category, your app’s audio continues with the Ring/Silent switch set to silent mode (iOS only). Using this category, you can also play background audio if you’re using the Audio, AirPlay, and Picture in Picture background mode. For more information, see `Enabling Background Audio`.

You use an [AVAudioSession](avaudiosession.md) object to configure your app’s audio session. This class is a singleton object used to set the audio session’s category, mode, and other configurations. You can interact with the audio session throughout your app’s life cycle, but it’s often useful to perform this configuration at app launch, as shown in the following example.

```swift
func configureAudioSession() {
    // Retrieve the shared audio session.
    let audioSession = AVAudioSession.sharedInstance()
    do {
        // Set the audio session category and mode.
        try audioSession.setCategory(.playback, mode: .moviePlayback)
    } catch {
        print("Failed to set the audio session configuration")
    }
}
```

The audio session uses this configuration when you activate the session using the [setActive:error:](avaudiosession/setactive_error_.md) or [setActive(\_:options:)](avaudiosession/setactive%28__options_%29.md) method.

> **Note**

>  You can activate the audio session at any time after setting its category, but it’s generally preferable to defer this call until your app begins audio playback. Deferring the call ensures that you won’t prematurely interrupt any other background audio that may be in progress.

## Topics

### Accessing the shared audio session

- [sharedInstance()](avaudiosession/sharedinstance%28%29.md): Returns the shared audio session instance.

### Configuring standard audio behaviors

- [setCategory(\_:mode:policy:options:)](avaudiosession/setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory(\_:mode:options:)](avaudiosession/setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory(\_:options:)](avaudiosession/setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setCategory(\_:)](avaudiosession/setcategory%28__%29.md): Sets the audio session’s category.
- [setMode(\_:)](avaudiosession/setmode%28__%29.md): Sets the audio session’s mode.

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](avaudiosession/intendedspatialexperience-1bpnq.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience(\_:)](avaudiosession/setintendedspatialexperience%28__%29.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](avaudiosessionspatialexperience-swift.protocol.md)
- [AVAudioSession.SoundStageSize](avaudiosession/soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [AVAudioSession.AnchoringStrategy](avaudiosession/anchoringstrategy.md): Constants that specify how to set the origin of audio in a head-tracked spatial experience.
- [isNowPlayingCandidate](avaudiosession/isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate(\_:)](avaudiosession/setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

### Activating the audio configuration

- [setActive(\_:options:)](avaudiosession/setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activate(options:completionHandler:)](avaudiosession/activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivate(options:completionHandler:)](avaudiosession/deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession

### Observing activation lifecycle

- [didBecomeActiveNotification](avaudiosession/didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [didBecomeInactiveNotification](avaudiosession/didbecomeinactivenotification.md): Notification sent when the audio session becomes inactive.
- [resumptionRecommendationNotification](avaudiosession/resumptionrecommendationnotification.md): Notification sent when the system provides a resumption recommendation.
- [deactivationContextKey](avaudiosession/deactivationcontextkey.md): Keys for [didBecomeInactiveNotification](avaudiosession/didbecomeinactivenotification.md) Value is an [AVAudioSession.DeactivationContext](avaudiosession/deactivationcontext.md) object describing the deactivation.
- [resumptionContextKey](avaudiosession/resumptioncontextkey.md): Keys for [resumptionRecommendationNotification](avaudiosession/resumptionrecommendationnotification.md) Value is an [AVAudioSession.ResumptionContext](avaudiosession/resumptioncontext.md) describing the resumption recommendation.
- [AVAudioSession.DidBecomeActiveMessage](avaudiosession/didbecomeactivemessage.md)
- [AVAudioSession.DidBecomeInactiveMessage](avaudiosession/didbecomeinactivemessage.md)
- [AVAudioSession.ResumptionRecommendationMessage](avaudiosession/resumptionrecommendationmessage.md)
- [AVAudioSession.DeactivationResult](avaudiosession/deactivationresult.md): Type-safe representation of audio session deactivation results.
- [AVAudioSession.DeactivationContext](avaudiosession/deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSession.DeactivationSource](avaudiosession/deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSession.InterruptionContext](avaudiosession/interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSession.ResumptionContext](avaudiosession/resumptioncontext.md): An object that provides context when resumption becomes available.
- [AVAudioSession.ResumptionRecommendation](avaudiosession/resumptionrecommendation.md): The system’s recommendation on whether to resume playback.

### Inspecting the category configuration

- [category](avaudiosession/category-swift.property.md): The current audio session category.
- [availableCategories](avaudiosession/availablecategories.md): The audio session categories available on the current device.
- [AVAudioSession.Category](avaudiosession/category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](avaudiosession/categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSession.CategoryOptions](avaudiosession/categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [farFieldInput](avaudiosession/categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](avaudiosession/category-swift.struct/playandrecord.md), [record](avaudiosession/category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](avaudiosession/mode-swift.struct/dualroute.md).

### Inspecting mode configuration

- [mode](avaudiosession/mode-swift.property.md): The current audio session’s mode.
- [availableModes](avaudiosession/availablemodes.md): The audio session modes available on the device.
- [AVAudioSession.Mode](avaudiosession/mode-swift.struct.md): Audio session mode identifiers.

### Inspecting rendering mode and capabilities

- [renderingMode](avaudiosession/renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSession.RenderingMode](avaudiosession/renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [renderingModeChangeNotification](avaudiosession/renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [supportedOutputChannelLayouts](avaudiosession/supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
- [renderingCapabilitiesChangeNotification](avaudiosession/renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.

### Inspecting the route sharing policy

- [routeSharingPolicy](avaudiosession/routesharingpolicy-swift.property.md): The active route-sharing policy.
- [AVAudioSession.RouteSharingPolicy](avaudiosession/routesharingpolicy-swift.enum.md): Cases that indicate the possible route-sharing policies for an audio session.

### Mixing with other audio

- [isOtherAudioPlaying](avaudiosession/isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [secondaryAudioShouldBeSilencedHint](avaudiosession/secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [silenceSecondaryAudioHintNotification](avaudiosession/silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [allowHapticsAndSystemSoundsDuringRecording](avaudiosession/allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
- [setAllowHapticsAndSystemSoundsDuringRecording(\_:)](avaudiosession/setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.

### Managing audio routing

- [Audio routing](audio-routing.md): Inspect and configure audio routes, ports, and data sources.

### Preparing for long-form video playback

- [prepareRouteSelectionForPlayback(completionHandler:)](avaudiosession/preparerouteselectionforplayback%28completionhandler_%29.md): Prepares the route selection for long-form video playback.
- [AVAudioSession.RouteSelection](avaudiosession/routeselection.md): Constants used to define the active route selection.

### Handling interruptions

- [prefersNoInterruptionsFromSystemAlerts](avaudiosession/prefersnointerruptionsfromsystemalerts.md): A Boolean value that indicates a preference for not interrupting the session with system alerts.
- [setPrefersNoInterruptionsFromSystemAlerts(\_:)](avaudiosession/setprefersnointerruptionsfromsystemalerts%28__%29.md): Sets the preference for not interrupting the audio session with system alerts.
- [prefersInterruptionOnRouteDisconnect](avaudiosession/prefersinterruptiononroutedisconnect.md): A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.
- [setPrefersInterruptionOnRouteDisconnect(\_:)](avaudiosession/setprefersinterruptiononroutedisconnect%28__%29.md): Sets a preference to interrupt the audio session when the active route disconnects.
- [interruptionNotification](avaudiosession/interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.

### Monitoring spatial capabilities

- [spatialPlaybackCapabilitiesChangedNotification](avaudiosession/spatialplaybackcapabilitieschangednotification.md): A notification the system posts when its spatial playback capabilities change.

### Inspecting the audio prompt style

- [promptStyle](avaudiosession/promptstyle-swift.property.md): A hint to audio sessions that use voice prompt mode to alter the type of prompts they issue in response to other system audio, such as Siri and phone calls.
- [AVAudioSession.PromptStyle](avaudiosession/promptstyle-swift.enum.md): Constants that indicate the prompt style to use.

### Enabling stereo recording

- [inputOrientation](avaudiosession/inputorientation.md): An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.
- [preferredInputOrientation](avaudiosession/preferredinputorientation.md): The audio session’s preferred stereo input orientation.
- [setPreferredInputOrientation(\_:)](avaudiosession/setpreferredinputorientation%28__%29.md): Sets the audio session’s preferred stereo input orientation.
- [AVAudioSession.StereoOrientation](avaudiosession/stereoorientation.md): Constants that define the supported stereo orientations.

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](avaudiosession/ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [preferredMicrophoneInjectionMode](avaudiosession/preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [setPreferredMicrophoneInjectionMode(\_:)](avaudiosession/setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSession.MicrophoneInjectionMode](avaudiosession/microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
- [microphoneInjectionCapabilitiesChangeNotification](avaudiosession/microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.

### Configuring echo cancellation

- [isEchoCancelledInputAvailable](avaudiosession/isechocancelledinputavailable.md): A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.
- [isEchoCancelledInputEnabled](avaudiosession/isechocancelledinputenabled.md): A Boolean value that indicates whether an echo-canceled input is in an enabled state.
- [setPrefersEchoCancelledInput(\_:)](avaudiosession/setprefersechocancelledinput%28__%29.md): Sets a preference to enable echo-canceled input on supported hardware.
- [prefersEchoCancelledInput](avaudiosession/prefersechocancelledinput.md): A Boolean value that indicates the audio session’s preference for using an echo-canceled input.

### Configuring audio muting

- [isOutputMuted](avaudiosession/isoutputmuted.md): A Boolean value that indicates whether audio output is in a muted state.
- [setOutputMuted(\_:)](avaudiosession/setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [outputMuteStateChangeNotification](avaudiosession/outputmutestatechangenotification.md): Notification sent to registered listeners when session’s output mute state changes.
- [muteStateKey](avaudiosession/mutestatekey.md): Keys for [outputMuteStateChangeNotification](avaudiosession/outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
- [userIntentToUnmuteOutputNotification](avaudiosession/userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [userIntentToUnmuteOutputNotification](avaudiosession/userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [muteStateKey](avaudiosession/mutestatekey.md): Keys for [outputMuteStateChangeNotification](avaudiosession/outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)

### Configuring device settings

- [Audio hardware](audio-hardware.md): Inspect and configure audio device settings including input gain, sample rate, and channel counts.

### Setting the aggregated I/O preference

- [setAggregatedIOPreference(\_:)](avaudiosession/setaggregatediopreference%28__%29.md): Sets the audio session’s aggregated I/O configuration preference.
- [AVAudioSession.IOType](avaudiosession/iotype.md): Constant values used to specify the audio session’s aggregated I/O behavior.

### Handling a change of media services

- [mediaServicesWereResetNotification](avaudiosession/mediaserviceswereresetnotification.md): A notification the system posts when the media server restarts.
- [mediaServicesWereLostNotification](avaudiosession/mediaserviceswerelostnotification.md): A notification the system posts when it terminates the media server.

### Errors

- [AVAudioSession.ErrorCode](../coreaudiotypes/avaudiosession/errorcode.md): Codes that describe error conditions that may occur when performing audio session operations.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Structures

- [AVAudioSession.BypassedSpatialExperience](avaudiosession/bypassedspatialexperience.md): An experience that bypasses system-provided audio spatialization.
- [AVAudioSession.FixedSpatialExperience](avaudiosession/fixedspatialexperience.md): An experience where the sound has a size dictated by its sound stage and is head-locked relative to the user.
- [AVAudioSession.HeadTrackedSpatialExperience](avaudiosession/headtrackedspatialexperience.md): An experience where the sound a size dictated by its sound stage and location dictated by its anchoring strategy.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### System audio

- [Handling audio interruptions](handling-audio-interruptions.md): Observe audio session notifications to ensure that your app responds appropriately to interruptions.
- [Responding to audio route changes](responding-to-audio-route-changes.md): Observe audio session notifications to ensure that your app responds appropriately to route changes.
- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md): Map audio channels to specific devices in multiroute sessions for recording and playback.
- [Adding synthesized speech to calls](adding-synthesized-speech-to-calls.md): Provide a more accessible experience by adding your app’s audio to a call.
- [Capturing stereo audio from built-In microphones](capturing-stereo-audio-from-built-in-microphones.md): Configure an iOS device’s built-in microphones to add stereo recording capabilities to your app.
- [AVAudioApplication](avaudioapplication.md): An object that manages one or more audio sessions that belong to an app.
- [AVAudioRoutingArbiter](avaudioroutingarbiter.md): An object for configuring macOS apps to participate in AirPods Automatic Switching.

# AVAudioSession (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that communicates to the system how you intend to use audio in your app.

## Declaration

```objectivec
@interface AVAudioSession : NSObject
```

## Mentioned In

- [Handling audio interruptions](handling-audio-interruptions.md)
- [Responding to audio route changes](responding-to-audio-route-changes.md)

<a id="overview"></a>

## Overview

An audio session acts as an intermediary between your app and the operating system — and, in turn, the underlying audio hardware. You use an audio session to communicate to the operating system the general nature of your app’s audio without detailing the specific behavior or required interactions with the audio hardware. You delegate the management of those details to the audio session, which ensures that the operating system can best manage the user’s audio experience.

All iOS, tvOS, and watchOS apps have a default audio session that comes preconfigured with the following behavior:

- It supports audio playback, but disallows audio recording.
- When the app plays audio, it silences any other background audio.
- In iOS, setting the Ring/Silent switch to silent mode silences any audio the app is playing.
- In iOS, locking a device silences the app’s audio.

Although the default audio session provides useful behavior, it generally doesn’t provide the audio behavior a media app needs. To change the default behavior, you configure your app’s audio session category.

There are six possible categories you can use, but [AVAudioSessionCategoryPlayback](avaudiosession/category-swift.struct/playback.md) is the one that playback apps most commonly use. This category indicates that audio playback is a central feature of your app. When you specify this category, your app’s audio continues with the Ring/Silent switch set to silent mode (iOS only). Using this category, you can also play background audio if you’re using the Audio, AirPlay, and Picture in Picture background mode. For more information, see `Enabling Background Audio`.

You use an [AVAudioSession](avaudiosession.md) object to configure your app’s audio session. This class is a singleton object used to set the audio session’s category, mode, and other configurations. You can interact with the audio session throughout your app’s life cycle, but it’s often useful to perform this configuration at app launch, as shown in the following example.

```swift
func configureAudioSession() {
    // Retrieve the shared audio session.
    let audioSession = AVAudioSession.sharedInstance()
    do {
        // Set the audio session category and mode.
        try audioSession.setCategory(.playback, mode: .moviePlayback)
    } catch {
        print("Failed to set the audio session configuration")
    }
}
```

The audio session uses this configuration when you activate the session using the [setActive:error:](avaudiosession/setactive_error_.md) or [setActive:withOptions:error:](avaudiosession/setactive%28__options_%29.md) method.

> **Note**

>  You can activate the audio session at any time after setting its category, but it’s generally preferable to defer this call until your app begins audio playback. Deferring the call ensures that you won’t prematurely interrupt any other background audio that may be in progress.

## Topics

### Accessing the shared audio session

- [sharedInstance](avaudiosession/sharedinstance%28%29.md): Returns the shared audio session instance.

### Configuring standard audio behaviors

- [setCategory:mode:routeSharingPolicy:options:error:](avaudiosession/setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.
- [setCategory:mode:options:error:](avaudiosession/setcategory%28__mode_options_%29.md): Sets the audio session’s category, mode, and options.
- [setCategory:withOptions:error:](avaudiosession/setcategory%28__options_%29.md): Sets the audio session’s category with the specified options.
- [setCategory:error:](avaudiosession/setcategory%28__%29.md): Sets the audio session’s category.
- [setMode:error:](avaudiosession/setmode%28__%29.md): Sets the audio session’s mode.

### Configuring the spatial experience in visionOS

- [intendedSpatialExperience](avaudiosession/intendedspatialexperience-qlty.md): The spatial audio experience your app intends to provide the user.
- [setIntendedSpatialExperience:options:error:](avaudiosession/setintendedspatialexperience_options_error_.md): Sets the spatial audio experience your app intends to provide the user.
- [AVAudioSessionSpatialExperience](avaudiosessionspatialexperience-c.enum.md)
- [AVAudioSessionSoundStageSize](avaudiosession/soundstagesize.md): Constants that specify the perceived size of sounds the audio session plays.
- [intendedSpatialExperienceOptions](avaudiosession/intendedspatialexperienceoptions.md): A dictionary of options that customize the spatial experience.
- [AVAudioSessionSpatialExperienceOption](avaudiosessionspatialexperienceoption.md): A key that configures one characteristic of a spatial experience, such as its sound stage size or anchoring.
- [isNowPlayingCandidate](avaudiosession/isnowplayingcandidate.md): A Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.
- [setIsNowPlayingCandidate:error:](avaudiosession/setisnowplayingcandidate%28__%29.md): Sets a Boolean value that indicates whether the audio session is a candidate to be the Now Playing session.

### Activating the audio configuration

- [setActive:error:](avaudiosession/setactive_error_.md): Activates or deactivates your app’s audio session.
- [setActive:withOptions:error:](avaudiosession/setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activateWithOptions:completionHandler:](avaudiosession/activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivateWithOptions:completionHandler:](avaudiosession/deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession

### Observing activation lifecycle

- [AVAudioSessionDidBecomeActiveNotification](avaudiosession/didbecomeactivenotification.md): Notification sent when the audio session becomes active.
- [AVAudioSessionDidBecomeInactiveNotification](avaudiosession/didbecomeinactivenotification.md): Notification sent when the audio session becomes inactive.
- [AVAudioSessionResumptionRecommendationNotification](avaudiosession/resumptionrecommendationnotification.md): Notification sent when the system provides a resumption recommendation.
- [AVAudioSessionDeactivationContextKey](avaudiosession/deactivationcontextkey.md): Keys for [AVAudioSessionDidBecomeInactiveNotification](avaudiosession/didbecomeinactivenotification.md) Value is an [AVAudioSessionDeactivationContext](avaudiosession/deactivationcontext.md) object describing the deactivation.
- [AVAudioSessionResumptionContextKey](avaudiosession/resumptioncontextkey.md): Keys for [AVAudioSessionResumptionRecommendationNotification](avaudiosession/resumptionrecommendationnotification.md) Value is an [AVAudioSessionResumptionContext](avaudiosession/resumptioncontext.md) describing the resumption recommendation.
- [AVAudioSessionDeactivationContext](avaudiosession/deactivationcontext.md): An object that describes why and how the audio session deactivated.
- [AVAudioSessionDeactivationSource](avaudiosession/deactivationsource.md): The source of the audio session deactivation.
- [AVAudioSessionInterruptionContext](avaudiosession/interruptioncontext.md): An object that provides context about an audio session interruption.
- [AVAudioSessionResumptionContext](avaudiosession/resumptioncontext.md): An object that provides context when resumption becomes available.
- [AVAudioSessionResumptionRecommendation](avaudiosession/resumptionrecommendation.md): The system’s recommendation on whether to resume playback.

### Inspecting the category configuration

- [category](avaudiosession/category-swift.property.md): The current audio session category.
- [availableCategories](avaudiosession/availablecategories.md): The audio session categories available on the current device.
- [AVAudioSessionCategory](avaudiosession/category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](avaudiosession/categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSessionCategoryOptions](avaudiosession/categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
- [AVAudioSessionCategoryOptionFarFieldInput](avaudiosession/categoryoptions-swift.struct/farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](avaudiosession/category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](avaudiosession/category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](avaudiosession/mode-swift.struct/dualroute.md).

### Inspecting mode configuration

- [mode](avaudiosession/mode-swift.property.md): The current audio session’s mode.
- [availableModes](avaudiosession/availablemodes.md): The audio session modes available on the device.
- [AVAudioSessionMode](avaudiosession/mode-swift.struct.md): Audio session mode identifiers.

### Inspecting rendering mode and capabilities

- [renderingMode](avaudiosession/renderingmode-swift.property.md): The current audio session’s rendering mode.
- [AVAudioSessionRenderingMode](avaudiosession/renderingmode-swift.enum.md): Audio session rendering mode identifiers.
- [AVAudioSessionRenderingModeChangeNotification](avaudiosession/renderingmodechangenotification.md): A notification the system posts when the rendering mode changes.
- [supportedOutputChannelLayouts](avaudiosession/supportedoutputchannellayouts.md): The array of channel layouts that the current route supports.
- [AVAudioSessionRenderingCapabilitiesChangeNotification](avaudiosession/renderingcapabilitieschangenotification.md): A notification the system posts when the rendering capabilities change.

### Inspecting the route sharing policy

- [routeSharingPolicy](avaudiosession/routesharingpolicy-swift.property.md): The active route-sharing policy.
- [AVAudioSessionRouteSharingPolicy](avaudiosession/routesharingpolicy-swift.enum.md): Cases that indicate the possible route-sharing policies for an audio session.

### Mixing with other audio

- [otherAudioPlaying](avaudiosession/isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [secondaryAudioShouldBeSilencedHint](avaudiosession/secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [AVAudioSessionSilenceSecondaryAudioHintNotification](avaudiosession/silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [allowHapticsAndSystemSoundsDuringRecording](avaudiosession/allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
- [setAllowHapticsAndSystemSoundsDuringRecording:error:](avaudiosession/setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.

### Managing audio routing

- [Audio routing](audio-routing.md): Inspect and configure audio routes, ports, and data sources.

### Preparing for long-form video playback

- [prepareRouteSelectionForPlaybackWithCompletionHandler:](avaudiosession/preparerouteselectionforplayback%28completionhandler_%29.md): Prepares the route selection for long-form video playback.
- [AVAudioSessionRouteSelection](../avkit/avaudiosessionrouteselection.md): Constants that indicate the audio route selection.

### Handling interruptions

- [prefersNoInterruptionsFromSystemAlerts](avaudiosession/prefersnointerruptionsfromsystemalerts.md): A Boolean value that indicates a preference for not interrupting the session with system alerts.
- [setPrefersNoInterruptionsFromSystemAlerts:error:](avaudiosession/setprefersnointerruptionsfromsystemalerts%28__%29.md): Sets the preference for not interrupting the audio session with system alerts.
- [prefersInterruptionOnRouteDisconnect](avaudiosession/prefersinterruptiononroutedisconnect.md): A Boolean value that indicates whether the system interrupts the audio session when the active route disconnects.
- [setPrefersInterruptionOnRouteDisconnect:error:](avaudiosession/setprefersinterruptiononroutedisconnect%28__%29.md): Sets a preference to interrupt the audio session when the active route disconnects.
- [AVAudioSessionInterruptionNotification](avaudiosession/interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.

### Monitoring spatial capabilities

- [AVAudioSessionSpatialPlaybackCapabilitiesChangedNotification](avaudiosession/spatialplaybackcapabilitieschangednotification.md): A notification the system posts when its spatial playback capabilities change.

### Inspecting the audio prompt style

- [promptStyle](avaudiosession/promptstyle-swift.property.md): A hint to audio sessions that use voice prompt mode to alter the type of prompts they issue in response to other system audio, such as Siri and phone calls.
- [AVAudioSessionPromptStyle](avaudiosession/promptstyle-swift.enum.md): Constants that indicate the prompt style to use.

### Enabling stereo recording

- [inputOrientation](avaudiosession/inputorientation.md): An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.
- [preferredInputOrientation](avaudiosession/preferredinputorientation.md): The audio session’s preferred stereo input orientation.
- [setPreferredInputOrientation:error:](avaudiosession/setpreferredinputorientation%28__%29.md): Sets the audio session’s preferred stereo input orientation.
- [AVAudioStereoOrientation](avaudiosession/stereoorientation.md): Constants that define the supported stereo orientations.

### Enabling adding audio to calls

- [isMicrophoneInjectionAvailable](avaudiosession/ismicrophoneinjectionavailable.md): A Boolean value that indicates whether microphone injection is available.
- [preferredMicrophoneInjectionMode](avaudiosession/preferredmicrophoneinjectionmode.md): The preferred mode of injecting audio into another app’s input stream.
- [setPreferredMicrophoneInjectionMode:error:](avaudiosession/setpreferredmicrophoneinjectionmode%28__%29.md): Sets the preferred mode of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionMode](avaudiosession/microphoneinjectionmode.md): The modes of injecting audio into another app’s input stream.
- [AVAudioSessionMicrophoneInjectionCapabilitiesChangeNotification](avaudiosession/microphoneinjectioncapabilitieschangenotification.md): A notification the system posts when its capability to inject audio into an input stream changes.

### Configuring echo cancellation

- [isEchoCancelledInputAvailable](avaudiosession/isechocancelledinputavailable.md): A Boolean value that indicates whether the built-in microphone and speaker route supports echo cancellation.
- [isEchoCancelledInputEnabled](avaudiosession/isechocancelledinputenabled.md): A Boolean value that indicates whether an echo-canceled input is in an enabled state.
- [setPrefersEchoCancelledInput:error:](avaudiosession/setprefersechocancelledinput%28__%29.md): Sets a preference to enable echo-canceled input on supported hardware.
- [prefersEchoCancelledInput](avaudiosession/prefersechocancelledinput.md): A Boolean value that indicates the audio session’s preference for using an echo-canceled input.

### Configuring audio muting

- [outputMuted](avaudiosession/isoutputmuted.md): A Boolean value that indicates whether audio output is in a muted state.
- [setOutputMuted:error:](avaudiosession/setoutputmuted%28__%29.md): Sets a Boolean value to inform the system to mute the session’s output audio. The default value is false (unmuted).
- [AVAudioSessionOutputMuteStateChangeNotification](avaudiosession/outputmutestatechangenotification.md): Notification sent to registered listeners when session’s output mute state changes.
- [AVAudioSessionMuteStateKey](avaudiosession/mutestatekey.md): Keys for [AVAudioSessionOutputMuteStateChangeNotification](avaudiosession/outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)
- [AVAudioSessionUserIntentToUnmuteOutputNotification](avaudiosession/userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [AVAudioSessionUserIntentToUnmuteOutputNotification](avaudiosession/userintenttounmuteoutputnotification.md): Notification sent to registered listeners when the application’s output is muted and user hints to unmute.
- [AVAudioSessionMuteStateKey](avaudiosession/mutestatekey.md): Keys for [AVAudioSessionOutputMuteStateChangeNotification](avaudiosession/outputmutestatechangenotification.md) Value is `NSNumber` type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)

### Configuring device settings

- [Audio hardware](audio-hardware.md): Inspect and configure audio device settings including input gain, sample rate, and channel counts.

### Setting the aggregated I/O preference

- [setAggregatedIOPreference:error:](avaudiosession/setaggregatediopreference%28__%29.md): Sets the audio session’s aggregated I/O configuration preference.
- [AVAudioSessionIOType](avaudiosession/iotype.md): Constant values used to specify the audio session’s aggregated I/O behavior.

### Handling a change of media services

- [AVAudioSessionMediaServicesWereResetNotification](avaudiosession/mediaserviceswereresetnotification.md): A notification the system posts when the media server restarts.
- [AVAudioSessionMediaServicesWereLostNotification](avaudiosession/mediaserviceswerelostnotification.md): A notification the system posts when it terminates the media server.

### Errors

- [AVAudioSessionErrorCode](../coreaudiotypes/avaudiosession/errorcode.md): Codes that describe error conditions that may occur when performing audio session operations.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### System audio

- [Handling audio interruptions](handling-audio-interruptions.md): Observe audio session notifications to ensure that your app responds appropriately to interruptions.
- [Responding to audio route changes](responding-to-audio-route-changes.md): Observe audio session notifications to ensure that your app responds appropriately to route changes.
- [Routing audio to specific devices in multidevice sessions](routing-audio-to-specific-devices-in-multidevice-sessions.md): Map audio channels to specific devices in multiroute sessions for recording and playback.
- [Adding synthesized speech to calls](adding-synthesized-speech-to-calls.md): Provide a more accessible experience by adding your app’s audio to a call.
- [Capturing stereo audio from built-In microphones](capturing-stereo-audio-from-built-in-microphones.md): Configure an iOS device’s built-in microphones to add stereo recording capabilities to your app.
- [AVAudioApplication](avaudioapplication.md): An object that manages one or more audio sessions that belong to an app.
- [AVAudioRoutingArbiter](avaudioroutingarbiter.md): An object for configuring macOS apps to participate in AirPods Automatic Switching.
