> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine](https://developer.apple.com/documentation/corehaptics/chhapticengine)

# CHHapticEngine (Swift)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An object that represents the connection to the haptic server.

## Declaration

```swift
class CHHapticEngine
```

## Mentioned In

- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md)
- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md)

<a id="overview"></a>

## Overview

If you want your app to play custom haptics, you need to create a haptic engine. The haptic engine establishes the connection between your app and the underlying device hardware. Even though you can define a haptic pattern without an engine, you need the engine to play that pattern.

![A dictionary defines a pattern, from which the haptic engine creates a pattern player for playing the haptic.](https://developer.apple.com/images/com.apple.corehaptics/media-3242669@2x.png)

Even though your app makes a request through the haptic engine, the operating system could still override the request with system services, like haptics from system notifications.

<a id="Prepare-Your-App-To-Play-Haptics"></a>

### Prepare Your App To Play Haptics

To prepare your app to play haptics, follow these steps, as demonstrated in the code below:

1. Create a haptic engine instance. Maintain a strong reference to it so it doesn’t go out of scope while the haptic is playing.
2. Call the haptic engine’s [start(completionHandler:)](chhapticengine/start%28completionhandler_%29.md) for an asynchronous start, or [start()](chhapticengine/start%28%29.md) to start the engine synchronously (immediately).
3. Stop the engine by calling [stop(completionHandler:)](chhapticengine/stop%28completionhandler_%29.md) when your app finishes haptic playback.

**Swift**

```swift
do {
    // 1. Create a haptic engine instance.
    hapticEngine = try CHHapticEngine()

    // 2. Start the haptic engine.
    try hapticEngine.start()
} catch let error {
    print("Engine Error: \(error)")
}

// 3. Stop the engine.
hapticEngine.stop(completionHandler: { (_) -> Void in
    // Insert code to call after engine stops.
})
```

**Objective-C**

```objc
// Create an error variable through which the engine returns error information.
NSError* error = nil;

// (1.) Create an instance of a haptic engine.
self.hapticEngine = [[CHHapticEngine alloc] initAndReturnError:&error];

// (2.) Start the haptic engine.
[self.hapticEngine startAndReturnError:&error];

// (3.) Stop the engine.
[self.hapticEngine stopWithCompletionHandler:^(NSError* error){
    // Insert code to call after engine stops.
}];
```

Although it’s possible to create content—[CHHapticPattern](chhapticpattern.md) instances—independent of a CHHapticEngine, your app must use an engine to play that content.

## Topics

### Initializing a Haptic Engine

- [init()](chhapticengine/init%28%29.md): Creates an instance of the haptic engine.
- [init(audioSession:)](chhapticengine/init%28audiosession_%29.md): Creates a haptic engine from an audio session.

### Starting and Stopping the Haptic Engine

- [start()](chhapticengine/start%28%29.md): Synchronously starts the haptic engine.
- [start(completionHandler:)](chhapticengine/start%28completionhandler_%29.md): Asynchronously starts the haptic engine.
- [stop(completionHandler:)](chhapticengine/stop%28completionhandler_%29.md): Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.
- [CHHapticEngine.CompletionHandler](chhapticengine/completionhandler.md): A typealias for a completion handler that the engine calls after starting or stopping.

### Creating Haptic Pattern Players

Factory methods for creating player objects for haptic playback.

- [makePlayer(with:)](chhapticengine/makeplayer%28with_%29.md): Creates a standard haptic pattern player from a haptic pattern.
- [makeAdvancedPlayer(with:)](chhapticengine/makeadvancedplayer%28with_%29.md): Creates an advanced haptic pattern player from a haptic pattern.

### Modifying Playback Properties

- [playsAudioOnly](chhapticengine/playsaudioonly.md): A Boolean value that indicates whether the engine ignores haptic events and plays audio events only.
- [playsHapticsOnly](chhapticengine/playshapticsonly.md): A Boolean value that indicates whether the engine ignores audio events.
- [isMutedForAudio](chhapticengine/ismutedforaudio.md): A Boolean value that indicates whether the engine mutes audio.
- [isMutedForHaptics](chhapticengine/ismutedforhaptics.md): A Boolean value that indicates whether the engine mutes haptics.

### Playing a Pattern

- [playPattern(from:)](chhapticengine/playpattern%28from_%29-6m9m5.md): Plays a pattern that’s defined in a file at the specified URL.
- [playPattern(from:)](chhapticengine/playpattern%28from_%29-7u8se.md): Plays a pattern from the specified data.

### Registering Audio Resources

- [registerAudioResource(\_:options:)](chhapticengine/registeraudioresource%28__options_%29.md): Registers an external audio to use as a custom waveform.
- [unregisterAudioResource(\_:)](chhapticengine/unregisteraudioresource%28__%29.md): Unregisters an external audio file that you previously registered with the engine.
- [CHHapticAudioResourceID](chhapticaudioresourceid.md): A type that identifies a custom audio resource.

### Monitoring Finished Playback

- [notifyWhenPlayersFinished(finishedHandler:)](chhapticengine/notifywhenplayersfinished%28finishedhandler_%29.md): Notifies you when all haptic pattern players have finished playing their haptic patterns.
- [CHHapticEngine.FinishedHandler](chhapticengine/finishedhandler.md): A type alias for a completion handler to execute after finishing haptic playback.
- [CHHapticEngine.FinishedAction](chhapticengine/finishedaction.md): Possible actions to take after the haptic engine finishes execution.

### Handling Haptic Engine Resets

- [resetHandler](chhapticengine/resethandler-swift.property.md): A block that the haptic engine calls after recovering from a haptic server error.
- [CHHapticEngine.ResetHandler](chhapticengine/resethandler-swift.typealias.md): A typealias for the block that the haptic engine calls after being reset.

### Handling Haptic Engine Stoppages

- [stoppedHandler](chhapticengine/stoppedhandler-swift.property.md): A closure the haptic engine calls when it stops due to external causes.
- [CHHapticEngine.StoppedHandler](chhapticengine/stoppedhandler-swift.typealias.md): A typealias for the block that the haptic engine calls after it stops due to an external cause.
- [CHHapticEngine.StoppedReason](chhapticengine/stoppedreason.md): The enumeration of reasons the haptic engine stopped running.

### Getting the Current Media Time

- [currentTime](chhapticengine/currenttime.md): The absolute time, in seconds, to use for scheduling haptic and audio events.
- [CHHapticTimeImmediate](chhaptictimeimmediate.md): A time constant used to schedule a command immediately.

### Querying System Capabilities

- [capabilitiesForHardware()](chhapticengine/capabilitiesforhardware%28%29.md): Returns a device capability object that describes the device’s haptic support and limitations.
- [CHHapticDeviceCapability](chhapticdevicecapability.md): A protocol that defines haptics and audio capabilities of a device.
- [CHHapticParameterAttributes](chhapticparameterattributes.md): A protocol for providing default, mininum, and maximum values of a parameter.
- [attributes(forDynamicParameter:)](chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.

### Managing Power

- [isAutoShutdownEnabled](chhapticengine/isautoshutdownenabled.md): A Boolean value that indicates whether the haptic engine starts and stops automatically on request from one of its pattern players, or when idle.

### Initializers

- [init(andReturnError:)](chhapticengine/init%28andreturnerror_%29.md)

### Instance Properties

- [intendedSpatialExperience](chhapticengine/intendedspatialexperience-55ca0.md): The CHHapticEngine’s intended [SpatialAudioExperience](../audiotoolbox/spatialaudioexperience.md).

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

## See Also

### Essentials

- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md): Set up your app to play haptics.
- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md): Create and play a transient haptic pattern from a dictionary literal inline.
- [CHHapticPattern](chhapticpattern.md): An object representing a haptic waveform.
- [CHHapticPatternPlayer](chhapticpatternplayer.md): A protocol that defines a standard pattern player capable of playing haptic patterns with fixed parameters.
- [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md): A protocol that defines an advanced pattern player capable of looping, seeking, pausing, and resuming haptic playback.

# CHHapticEngine (Objective-C)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An object that represents the connection to the haptic server.

## Declaration

```objectivec
@interface CHHapticEngine : NSObject
```

## Mentioned In

- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md)
- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md)

<a id="overview"></a>

## Overview

If you want your app to play custom haptics, you need to create a haptic engine. The haptic engine establishes the connection between your app and the underlying device hardware. Even though you can define a haptic pattern without an engine, you need the engine to play that pattern.

![A dictionary defines a pattern, from which the haptic engine creates a pattern player for playing the haptic.](https://developer.apple.com/images/com.apple.corehaptics/media-3242669@2x.png)

Even though your app makes a request through the haptic engine, the operating system could still override the request with system services, like haptics from system notifications.

<a id="Prepare-Your-App-To-Play-Haptics"></a>

### Prepare Your App To Play Haptics

To prepare your app to play haptics, follow these steps, as demonstrated in the code below:

1. Create a haptic engine instance. Maintain a strong reference to it so it doesn’t go out of scope while the haptic is playing.
2. Call the haptic engine’s [startWithCompletionHandler:](chhapticengine/start%28completionhandler_%29.md) for an asynchronous start, or [startAndReturnError:](chhapticengine/start%28%29.md) to start the engine synchronously (immediately).
3. Stop the engine by calling [stopWithCompletionHandler:](chhapticengine/stop%28completionhandler_%29.md) when your app finishes haptic playback.

**Swift**

```swift
do {
    // 1. Create a haptic engine instance.
    hapticEngine = try CHHapticEngine()

    // 2. Start the haptic engine.
    try hapticEngine.start()
} catch let error {
    print("Engine Error: \(error)")
}

// 3. Stop the engine.
hapticEngine.stop(completionHandler: { (_) -> Void in
    // Insert code to call after engine stops.
})
```

**Objective-C**

```objc
// Create an error variable through which the engine returns error information.
NSError* error = nil;

// (1.) Create an instance of a haptic engine.
self.hapticEngine = [[CHHapticEngine alloc] initAndReturnError:&error];

// (2.) Start the haptic engine.
[self.hapticEngine startAndReturnError:&error];

// (3.) Stop the engine.
[self.hapticEngine stopWithCompletionHandler:^(NSError* error){
    // Insert code to call after engine stops.
}];
```

Although it’s possible to create content—[CHHapticPattern](chhapticpattern.md) instances—independent of a CHHapticEngine, your app must use an engine to play that content.

## Topics

### Initializing a Haptic Engine

- [initAndReturnError:](chhapticengine/init%28%29.md): Creates an instance of the haptic engine.
- [initWithAudioSession:error:](chhapticengine/init%28audiosession_%29.md): Creates a haptic engine from an audio session.

### Starting and Stopping the Haptic Engine

- [startAndReturnError:](chhapticengine/start%28%29.md): Synchronously starts the haptic engine.
- [startWithCompletionHandler:](chhapticengine/start%28completionhandler_%29.md): Asynchronously starts the haptic engine.
- [stopWithCompletionHandler:](chhapticengine/stop%28completionhandler_%29.md): Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.
- [CHHapticCompletionHandler](chhapticengine/completionhandler.md): A typealias for a completion handler that the engine calls after starting or stopping.

### Creating Haptic Pattern Players

Factory methods for creating player objects for haptic playback.

- [createPlayerWithPattern:error:](chhapticengine/makeplayer%28with_%29.md): Creates a standard haptic pattern player from a haptic pattern.
- [createAdvancedPlayerWithPattern:error:](chhapticengine/makeadvancedplayer%28with_%29.md): Creates an advanced haptic pattern player from a haptic pattern.

### Modifying Playback Properties

- [playsAudioOnly](chhapticengine/playsaudioonly.md): A Boolean value that indicates whether the engine ignores haptic events and plays audio events only.
- [playsHapticsOnly](chhapticengine/playshapticsonly.md): A Boolean value that indicates whether the engine ignores audio events.
- [isMutedForAudio](chhapticengine/ismutedforaudio.md): A Boolean value that indicates whether the engine mutes audio.
- [isMutedForHaptics](chhapticengine/ismutedforhaptics.md): A Boolean value that indicates whether the engine mutes haptics.

### Playing a Pattern

- [playPatternFromURL:error:](chhapticengine/playpattern%28from_%29-6m9m5.md): Plays a pattern that’s defined in a file at the specified URL.
- [playPatternFromData:error:](chhapticengine/playpattern%28from_%29-7u8se.md): Plays a pattern from the specified data.

### Registering Audio Resources

- [registerAudioResource:options:error:](chhapticengine/registeraudioresource%28__options_%29.md): Registers an external audio to use as a custom waveform.
- [unregisterAudioResource:error:](chhapticengine/unregisteraudioresource%28__%29.md): Unregisters an external audio file that you previously registered with the engine.
- [CHHapticAudioResourceID](chhapticaudioresourceid.md): A type that identifies a custom audio resource.

### Monitoring Finished Playback

- [notifyWhenPlayersFinished:](chhapticengine/notifywhenplayersfinished%28finishedhandler_%29.md): Notifies you when all haptic pattern players have finished playing their haptic patterns.
- [CHHapticEngineFinishedHandler](chhapticengine/finishedhandler.md): A type alias for a completion handler to execute after finishing haptic playback.
- [CHHapticEngineFinishedAction](chhapticengine/finishedaction.md): Possible actions to take after the haptic engine finishes execution.

### Handling Haptic Engine Resets

- [resetHandler](chhapticengine/resethandler-swift.property.md): A block that the haptic engine calls after recovering from a haptic server error.
- [CHHapticEngineResetHandler](chhapticengine/resethandler-swift.typealias.md): A typealias for the block that the haptic engine calls after being reset.

### Handling Haptic Engine Stoppages

- [stoppedHandler](chhapticengine/stoppedhandler-swift.property.md): A closure the haptic engine calls when it stops due to external causes.
- [CHHapticEngineStoppedHandler](chhapticengine/stoppedhandler-swift.typealias.md): A typealias for the block that the haptic engine calls after it stops due to an external cause.
- [CHHapticEngineStoppedReason](chhapticengine/stoppedreason.md): The enumeration of reasons the haptic engine stopped running.

### Getting the Current Media Time

- [currentTime](chhapticengine/currenttime.md): The absolute time, in seconds, to use for scheduling haptic and audio events.
- [CHHapticTimeImmediate](chhaptictimeimmediate.md): A time constant used to schedule a command immediately.

### Querying System Capabilities

- [capabilitiesForHardware](chhapticengine/capabilitiesforhardware%28%29.md): Returns a device capability object that describes the device’s haptic support and limitations.
- [CHHapticDeviceCapability](chhapticdevicecapability.md): A protocol that defines haptics and audio capabilities of a device.
- [CHHapticParameterAttributes](chhapticparameterattributes.md): A protocol for providing default, mininum, and maximum values of a parameter.
- [attributesForDynamicParameter:error:](chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.

### Managing Power

- [autoShutdownEnabled](chhapticengine/isautoshutdownenabled.md): A Boolean value that indicates whether the haptic engine starts and stops automatically on request from one of its pattern players, or when idle.

### Instance Properties

- [intendedSpatialExperience](chhapticengine/intendedspatialexperience-4hwkx.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md): Set up your app to play haptics.
- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md): Create and play a transient haptic pattern from a dictionary literal inline.
- [CHHapticPattern](chhapticpattern.md): An object representing a haptic waveform.
- [CHHapticPatternPlayer](chhapticpatternplayer.md): A protocol that defines a standard pattern player capable of playing haptic patterns with fixed parameters.
- [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md): A protocol that defines an advanced pattern player capable of looping, seeking, pausing, and resuming haptic playback.
