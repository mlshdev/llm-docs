> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avroutingplaybackarbiter/preferredparticipantforexternalplayback](https://developer.apple.com/documentation/avrouting/avroutingplaybackarbiter/preferredparticipantforexternalplayback)

# preferredParticipantForExternalPlayback (Swift)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

The participant that has priority to play on external playback interfaces.

## Declaration

```swift
weak var preferredParticipantForExternalPlayback: (any AVRoutingPlaybackParticipant)? { get set }
```

<a id="discussion"></a>

## Discussion

This participant takes precedence over all others to play on external playback interfaces (specifically for AirPlay video and Apple Lightning Digital AV Adapters).

By default, this value is `nil`. When the value is `nil`, the arbiter doesn’t impose any priority on the participants, and the participant that is selected to playback externally falls back to the existing selection mechanism.

# preferredParticipantForExternalPlayback (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

The participant that has priority to play on external playback interfaces.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<AVRoutingPlaybackParticipant> preferredParticipantForExternalPlayback;
```

<a id="discussion"></a>

## Discussion

This participant takes precedence over all others to play on external playback interfaces (specifically for AirPlay video and Apple Lightning Digital AV Adapters).

By default, this value is `nil`. When the value is `nil`, the arbiter doesn’t impose any priority on the participants, and the participant that is selected to playback externally falls back to the existing selection mechanism.
