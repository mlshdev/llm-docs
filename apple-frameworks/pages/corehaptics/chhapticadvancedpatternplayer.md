> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticadvancedpatternplayer](https://developer.apple.com/documentation/corehaptics/chhapticadvancedpatternplayer)

# CHHapticAdvancedPatternPlayer (Swift)

**Framework:** Core Haptics  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines an advanced pattern player capable of looping, seeking, pausing, and resuming haptic playback.

## Declaration

```swift
protocol CHHapticAdvancedPatternPlayer : CHHapticPatternPlayer
```

## Mentioned In

- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md)

<a id="overview"></a>

## Overview

Create instances of this pattern player through a [CHHapticEngine](chhapticengine.md) object by calling a factory method such as [makeAdvancedPlayer(with:)](chhapticengine/makeadvancedplayer%28with_%29.md). When you ask an advanced pattern player to play, pause, or resume a haptic pattern, the player submits those commands to the haptic engine on your behalf.

Unlike [CHHapticPatternPlayer](chhapticpatternplayer.md), the advanced pattern player supports looping of haptic and audio patterns, by setting [loopEnabled](chhapticadvancedpatternplayer/loopenabled.md). The advanced pattern player can also call a block when the player finishes, through its [completionHandler](chhapticadvancedpatternplayer/completionhandler.md) property.

## Topics

### Setting Playback Properties

- [loopEnabled](chhapticadvancedpatternplayer/loopenabled.md): A Boolean that determines whether the haptic repeats itself on completion.
- [loopEnd](chhapticadvancedpatternplayer/loopend.md): The time at which to end looping haptic playback.
- [playbackRate](chhapticadvancedpatternplayer/playbackrate.md): The playback rate of the haptic player.
- [completionHandler](chhapticadvancedpatternplayer/completionhandler.md): A completion block that runs after the haptic finishes playing.
- [CHHapticAdvancedPatternPlayerCompletionHandler](chhapticadvancedpatternplayercompletionhandler.md): A typealias for the completion handler to run after a haptic finishes playback.

### Controlling Playback

- [pause(atTime:)](chhapticadvancedpatternplayer/pause%28attime_%29.md): Pauses the haptic player during playback.
- [resume(atTime:)](chhapticadvancedpatternplayer/resume%28attime_%29.md): Resumes playing a paused haptic.
- [seek(toOffset:)](chhapticadvancedpatternplayer/seek%28tooffset_%29.md): Jumps to the specified offset time in playing the haptic.

### Silencing Haptic Playback

- [isMuted](chhapticadvancedpatternplayer/ismuted.md): A Boolean value that indicates whether to silences all haptic and audio output from the player.

## Relationships

### Inherits From

- [CHHapticPatternPlayer](chhapticpatternplayer.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md): Set up your app to play haptics.
- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md): Create and play a transient haptic pattern from a dictionary literal inline.
- [CHHapticEngine](chhapticengine.md): An object that represents the connection to the haptic server.
- [CHHapticPattern](chhapticpattern.md): An object representing a haptic waveform.
- [CHHapticPatternPlayer](chhapticpatternplayer.md): A protocol that defines a standard pattern player capable of playing haptic patterns with fixed parameters.

# CHHapticAdvancedPatternPlayer (Objective-C)

**Framework:** Core Haptics  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines an advanced pattern player capable of looping, seeking, pausing, and resuming haptic playback.

## Declaration

```objectivec
@protocol CHHapticAdvancedPatternPlayer <CHHapticPatternPlayer>
```

## Mentioned In

- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md)

<a id="overview"></a>

## Overview

Create instances of this pattern player through a [CHHapticEngine](chhapticengine.md) object by calling a factory method such as [createAdvancedPlayerWithPattern:error:](chhapticengine/makeadvancedplayer%28with_%29.md). When you ask an advanced pattern player to play, pause, or resume a haptic pattern, the player submits those commands to the haptic engine on your behalf.

Unlike [CHHapticPatternPlayer](chhapticpatternplayer.md), the advanced pattern player supports looping of haptic and audio patterns, by setting [loopEnabled](chhapticadvancedpatternplayer/loopenabled.md). The advanced pattern player can also call a block when the player finishes, through its [completionHandler](chhapticadvancedpatternplayer/completionhandler.md) property.

## Topics

### Setting Playback Properties

- [loopEnabled](chhapticadvancedpatternplayer/loopenabled.md): A Boolean that determines whether the haptic repeats itself on completion.
- [loopEnd](chhapticadvancedpatternplayer/loopend.md): The time at which to end looping haptic playback.
- [playbackRate](chhapticadvancedpatternplayer/playbackrate.md): The playback rate of the haptic player.
- [completionHandler](chhapticadvancedpatternplayer/completionhandler.md): A completion block that runs after the haptic finishes playing.
- [CHHapticAdvancedPatternPlayerCompletionHandler](chhapticadvancedpatternplayercompletionhandler.md): A typealias for the completion handler to run after a haptic finishes playback.

### Controlling Playback

- [pauseAtTime:error:](chhapticadvancedpatternplayer/pause%28attime_%29.md): Pauses the haptic player during playback.
- [resumeAtTime:error:](chhapticadvancedpatternplayer/resume%28attime_%29.md): Resumes playing a paused haptic.
- [seekToOffset:error:](chhapticadvancedpatternplayer/seek%28tooffset_%29.md): Jumps to the specified offset time in playing the haptic.

### Silencing Haptic Playback

- [isMuted](chhapticadvancedpatternplayer/ismuted.md): A Boolean value that indicates whether to silences all haptic and audio output from the player.

## Relationships

### Inherits From

- [CHHapticPatternPlayer](chhapticpatternplayer.md)

## See Also

### Essentials

- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md): Set up your app to play haptics.
- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md): Create and play a transient haptic pattern from a dictionary literal inline.
- [CHHapticEngine](chhapticengine.md): An object that represents the connection to the haptic server.
- [CHHapticPattern](chhapticpattern.md): An object representing a haptic waveform.
- [CHHapticPatternPlayer](chhapticpatternplayer.md): A protocol that defines a standard pattern player capable of playing haptic patterns with fixed parameters.
