> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpatternplayer](https://developer.apple.com/documentation/corehaptics/chhapticpatternplayer)

# CHHapticPatternPlayer (Swift)

**Framework:** Core Haptics  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines a standard pattern player capable of playing haptic patterns with fixed parameters.

## Declaration

```swift
protocol CHHapticPatternPlayer : NSObjectProtocol
```

## Mentioned In

- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md)

<a id="overview"></a>

## Overview

Create instances of a pattern player through a [CHHapticEngine](chhapticengine.md) object by calling a factory method such as [makePlayer(with:)](chhapticengine/makeplayer%28with_%29.md). When you ask a pattern player to play a haptic pattern, the player submits those commands to the haptic engine on your behalf.

Use the advanced pattern player, [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md), when your haptic pattern needs to change during playback, or when you’d like to sync your haptic with a custom audio track. The advanced player allows your app to dynamically change haptic characteristics such as intensity and sharpness through dynamic parameters and parameter curves, capabilities not found in the standard player.

## Topics

### Starting and Stopping Playback

- [start(atTime:)](chhapticpatternplayer/start%28attime_%29.md): Starts playing the pattern at the specified time.
- [stop(atTime:)](chhapticpatternplayer/stop%28attime_%29.md): Stops playing the pattern at the specified time.
- [cancel()](chhapticpatternplayer/cancel%28%29.md): Stops the pattern player immediately and returns the specified error.

### Sending Parameters to a Haptic

- [sendParameters(\_:atTime:)](chhapticpatternplayer/sendparameters%28__attime_%29.md): Sends an array of haptic parameters, starting at the specified time.
- [scheduleParameterCurve(\_:atTime:)](chhapticpatternplayer/scheduleparametercurve%28__attime_%29.md): Schedules a parameter curve to begin transitioning a parameter at a certain time.

### Silencing Haptic Playback

- [isMuted](chhapticpatternplayer/ismuted.md): A Boolean value that indicates whether to silences all haptic and audio output from the player.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md)

## See Also

### Essentials

- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md): Set up your app to play haptics.
- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md): Create and play a transient haptic pattern from a dictionary literal inline.
- [CHHapticEngine](chhapticengine.md): An object that represents the connection to the haptic server.
- [CHHapticPattern](chhapticpattern.md): An object representing a haptic waveform.
- [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md): A protocol that defines an advanced pattern player capable of looping, seeking, pausing, and resuming haptic playback.

# CHHapticPatternPlayer (Objective-C)

**Framework:** Core Haptics  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines a standard pattern player capable of playing haptic patterns with fixed parameters.

## Declaration

```objectivec
@protocol CHHapticPatternPlayer <NSObject>
```

## Mentioned In

- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md)

<a id="overview"></a>

## Overview

Create instances of a pattern player through a [CHHapticEngine](chhapticengine.md) object by calling a factory method such as [createPlayerWithPattern:error:](chhapticengine/makeplayer%28with_%29.md). When you ask a pattern player to play a haptic pattern, the player submits those commands to the haptic engine on your behalf.

Use the advanced pattern player, [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md), when your haptic pattern needs to change during playback, or when you’d like to sync your haptic with a custom audio track. The advanced player allows your app to dynamically change haptic characteristics such as intensity and sharpness through dynamic parameters and parameter curves, capabilities not found in the standard player.

## Topics

### Starting and Stopping Playback

- [startAtTime:error:](chhapticpatternplayer/start%28attime_%29.md): Starts playing the pattern at the specified time.
- [stopAtTime:error:](chhapticpatternplayer/stop%28attime_%29.md): Stops playing the pattern at the specified time.
- [cancelAndReturnError:](chhapticpatternplayer/cancel%28%29.md): Stops the pattern player immediately and returns the specified error.

### Sending Parameters to a Haptic

- [sendParameters:atTime:error:](chhapticpatternplayer/sendparameters%28__attime_%29.md): Sends an array of haptic parameters, starting at the specified time.
- [scheduleParameterCurve:atTime:error:](chhapticpatternplayer/scheduleparametercurve%28__attime_%29.md): Schedules a parameter curve to begin transitioning a parameter at a certain time.

### Silencing Haptic Playback

- [isMuted](chhapticpatternplayer/ismuted.md): A Boolean value that indicates whether to silences all haptic and audio output from the player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md)

## See Also

### Essentials

- [Preparing your app to play haptics](preparing-your-app-to-play-haptics.md): Set up your app to play haptics.
- [Playing a single-tap haptic pattern](playing-a-single-tap-haptic-pattern.md): Create and play a transient haptic pattern from a dictionary literal inline.
- [CHHapticEngine](chhapticengine.md): An object that represents the connection to the haptic server.
- [CHHapticPattern](chhapticpattern.md): An object representing a haptic waveform.
- [CHHapticAdvancedPatternPlayer](chhapticadvancedpatternplayer.md): A protocol that defines an advanced pattern player capable of looping, seeking, pausing, and resuming haptic playback.
