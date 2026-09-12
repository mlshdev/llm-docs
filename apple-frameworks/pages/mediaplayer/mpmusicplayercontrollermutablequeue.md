> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontrollermutablequeue](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontrollermutablequeue)

# MPMusicPlayerControllerMutableQueue (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A mutable queue containing the media items to play.

## Declaration

```swift
class MPMusicPlayerControllerMutableQueue
```

## Topics

### Adding and removing items

- [insert(\_:after:)](mpmusicplayercontrollermutablequeue/insert%28__after_%29.md): Inserts a modified queue after the designated media item.
- [remove(\_:)](mpmusicplayercontrollermutablequeue/remove%28__%29.md): Removes a media item from the music player’s queue.

## Relationships

### Inherits From

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.

# MPMusicPlayerControllerMutableQueue (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A mutable queue containing the media items to play.

## Declaration

```objectivec
@interface MPMusicPlayerControllerMutableQueue : MPMusicPlayerControllerQueue
```

## Topics

### Adding and removing items

- [insertQueueDescriptor:afterItem:](mpmusicplayercontrollermutablequeue/insert%28__after_%29.md): Inserts a modified queue after the designated media item.
- [removeItem:](mpmusicplayercontrollermutablequeue/remove%28__%29.md): Removes a media item from the music player’s queue.

## Relationships

### Inherits From

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.
