> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/otherparticipants

# otherParticipants (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The identifiers of the other participants in a group.

## Declaration

```swift
var otherParticipants: [AVCoordinatedPlaybackParticipant] { get }
```

<a id="Discussion"></a>

## Discussion

Use this property value to create a user interface that informs the user about the state of other participants in the group.

> **Note**

>  To observe changes to this property value, register for notifications of type [otherParticipantsDidChangeNotification](otherparticipantsdidchangenotification.md).

## See Also

### Observing other participants

- [AVCoordinatedPlaybackParticipant](../avcoordinatedplaybackparticipant.md): An object that represents a participant in a coordinated playback session.
- [otherParticipantsDidChangeNotification](otherparticipantsdidchangenotification.md): A notification that the coordinator posts when its other participants change.

# otherParticipants (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The identifiers of the other participants in a group.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCoordinatedPlaybackParticipant *> * otherParticipants;
```

<a id="Discussion"></a>

## Discussion

Use this property value to create a user interface that informs the user about the state of other participants in the group.

> **Note**

>  To observe changes to this property value, register for notifications of type [AVPlaybackCoordinatorOtherParticipantsDidChangeNotification](otherparticipantsdidchangenotification.md).

## See Also

### Observing other participants

- [AVCoordinatedPlaybackParticipant](../avcoordinatedplaybackparticipant.md): An object that represents a participant in a coordinated playback session.
- [AVPlaybackCoordinatorOtherParticipantsDidChangeNotification](otherparticipantsdidchangenotification.md): A notification that the coordinator posts when its other participants change.
