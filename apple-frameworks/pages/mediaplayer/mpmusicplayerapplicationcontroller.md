> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerapplicationcontroller](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerapplicationcontroller)

# MPMusicPlayerApplicationController (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A media player object that you use to revise the queue that’s currently playing.

## Declaration

```swift
class MPMusicPlayerApplicationController
```

## Topics

### Changing the queue contents

- [perform(queueTransaction:completionHandler:)](mpmusicplayerapplicationcontroller/perform%28queuetransaction_completionhandler_%29.md): Changes the contents of the media items in the queue.
- [MPMusicPlayerControllerQueueDidChange](../foundation/nsnotification/name-swift.struct/mpmusicplayercontrollerqueuedidchange.md): Indicates the music player’s queue changed.

## Relationships

### Inherits From

- [MPMusicPlayerController](mpmusicplayercontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MPMediaPlayback](mpmediaplayback.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.

# MPMusicPlayerApplicationController (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A media player object that you use to revise the queue that’s currently playing.

## Declaration

```objectivec
@interface MPMusicPlayerApplicationController : MPMusicPlayerController
```

## Topics

### Changing the queue contents

- [performQueueTransaction:completionHandler:](mpmusicplayerapplicationcontroller/perform%28queuetransaction_completionhandler_%29.md): Changes the contents of the media items in the queue.
- [MPMusicPlayerControllerQueueDidChangeNotification](mpmusicplayercontrollerqueuedidchangenotification.md): Indicates the music player’s queue changed.

## Relationships

### Inherits From

- [MPMusicPlayerController](mpmusicplayercontroller.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.
