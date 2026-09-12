> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avroutingplaybackarbiter](https://developer.apple.com/documentation/avrouting/avroutingplaybackarbiter)

# AVRoutingPlaybackArbiter (Swift)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

An object that manages playback routing preferences.

## Declaration

```swift
class AVRoutingPlaybackArbiter
```

<a id="overview"></a>

## Overview

This object manages instances of [AVRoutingPlaybackParticipant](avroutingplaybackparticipant.md) for arbitration of media playback routing priorities and preferences on restricted playback interfaces. The playback routing arbiter is responsible for collecting and applying preferences, such as priorities in non-mixable audio routes and external playback states where the number of allowed players is limited.

## Topics

### Instance Properties

- [preferredParticipantForExternalPlayback](avroutingplaybackarbiter/preferredparticipantforexternalplayback.md): The participant that has priority to play on external playback interfaces.
- [preferredParticipantForNonMixableAudioRoutes](avroutingplaybackarbiter/preferredparticipantfornonmixableaudioroutes.md): The participant that has priority to play audio when it’s not possible to play multiple audio sources concurrently.

### Type Methods

- [shared()](avroutingplaybackarbiter/shared%28%29.md): Returns the singleton playback arbiter instance.

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

### Playback arbitration

- [AVRoutingPlaybackParticipant](avroutingplaybackparticipant.md): A protocol for objects that participate in playback routing arbitration.

# AVRoutingPlaybackArbiter (Objective-C)

**Framework:** AVRouting  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

An object that manages playback routing preferences.

## Declaration

```objectivec
@interface AVRoutingPlaybackArbiter : NSObject
```

<a id="overview"></a>

## Overview

This object manages instances of [AVRoutingPlaybackParticipant](avroutingplaybackparticipant.md) for arbitration of media playback routing priorities and preferences on restricted playback interfaces. The playback routing arbiter is responsible for collecting and applying preferences, such as priorities in non-mixable audio routes and external playback states where the number of allowed players is limited.

## Topics

### Instance Properties

- [preferredParticipantForExternalPlayback](avroutingplaybackarbiter/preferredparticipantforexternalplayback.md): The participant that has priority to play on external playback interfaces.
- [preferredParticipantForNonMixableAudioRoutes](avroutingplaybackarbiter/preferredparticipantfornonmixableaudioroutes.md): The participant that has priority to play audio when it’s not possible to play multiple audio sources concurrently.

### Type Methods

- [sharedRoutingPlaybackArbiter](avroutingplaybackarbiter/shared%28%29.md): Returns the singleton playback arbiter instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Playback arbitration

- [AVRoutingPlaybackParticipant](avroutingplaybackparticipant.md): A protocol for objects that participate in playback routing arbitration.
