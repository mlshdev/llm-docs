> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybackparticipant](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant)

# AVCoordinatedPlaybackParticipant (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that represents a participant in a coordinated playback session.

## Declaration

```swift
class AVCoordinatedPlaybackParticipant
```

<a id="overview"></a>

## Overview

Access the other participants in a session through the playback coordinator’s [otherParticipants](avplaybackcoordinator/otherparticipants.md) property to determine their playback readiness and suspension reasons.

## Topics

### Accessing participant status

- [identifier](avcoordinatedplaybackparticipant/identifier.md): A unique identifier for the participant.
- [isReadyToPlay](avcoordinatedplaybackparticipant/isreadytoplay.md): A Boolean value that indicates whether the participant is ready to start coordinated playback.
- [suspensionReasons](avcoordinatedplaybackparticipant/suspensionreasons.md): The reasons a participant isn’t currently participating in coordinated playback.

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

### Observing other participants

- [otherParticipants](avplaybackcoordinator/otherparticipants.md): The identifiers of the other participants in a group.
- [otherParticipantsDidChangeNotification](avplaybackcoordinator/otherparticipantsdidchangenotification.md): A notification that the coordinator posts when its other participants change.

# AVCoordinatedPlaybackParticipant (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that represents a participant in a coordinated playback session.

## Declaration

```objectivec
@interface AVCoordinatedPlaybackParticipant : NSObject
```

<a id="overview"></a>

## Overview

Access the other participants in a session through the playback coordinator’s [otherParticipants](avplaybackcoordinator/otherparticipants.md) property to determine their playback readiness and suspension reasons.

## Topics

### Accessing participant status

- [identifier](avcoordinatedplaybackparticipant/identifier.md): A unique identifier for the participant.
- [readyToPlay](avcoordinatedplaybackparticipant/isreadytoplay.md): A Boolean value that indicates whether the participant is ready to start coordinated playback.
- [suspensionReasons](avcoordinatedplaybackparticipant/suspensionreasons.md): The reasons a participant isn’t currently participating in coordinated playback.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Observing other participants

- [otherParticipants](avplaybackcoordinator/otherparticipants.md): The identifiers of the other participants in a group.
- [AVPlaybackCoordinatorOtherParticipantsDidChangeNotification](avplaybackcoordinator/otherparticipantsdidchangenotification.md): A notification that the coordinator posts when its other participants change.
