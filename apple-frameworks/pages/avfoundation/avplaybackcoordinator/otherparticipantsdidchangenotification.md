> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/otherparticipantsdidchangenotification

# otherParticipantsDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification that the coordinator posts when its other participants change.

## Declaration

```swift
class let otherParticipantsDidChangeNotification: NSNotification.Name
```

## See Also

### Observing other participants

- [otherParticipants](otherparticipants.md): The identifiers of the other participants in a group.
- [AVCoordinatedPlaybackParticipant](../avcoordinatedplaybackparticipant.md): An object that represents a participant in a coordinated playback session.

# AVPlaybackCoordinatorOtherParticipantsDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification that the coordinator posts when its other participants change.

## Declaration

```objectivec
extern NSNotificationName const AVPlaybackCoordinatorOtherParticipantsDidChangeNotification;
```

## See Also

### Observing other participants

- [otherParticipants](otherparticipants.md): The identifiers of the other participants in a group.
- [AVCoordinatedPlaybackParticipant](../avcoordinatedplaybackparticipant.md): An object that represents a participant in a coordinated playback session.
