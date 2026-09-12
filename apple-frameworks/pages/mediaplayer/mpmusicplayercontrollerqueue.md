> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontrollerqueue](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontrollerqueue)

# MPMusicPlayerControllerQueue (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

An immutable queue containing the media items to play.

## Declaration

```swift
class MPMusicPlayerControllerQueue
```

<a id="overview"></a>

## Overview

An `MPMusicPlayerControllerQueue` object contains the current queue for an application queue music player. To add or remove media items from a playing queue, use [perform(queueTransaction:completionHandler:)](mpmusicplayerapplicationcontroller/perform%28queuetransaction_completionhandler_%29.md). The results of the method is an `MPMusicPlayerControllerQueue` object that updates the playing queue. You don’t create your own instance of this class.

## Topics

### Inspecting queue media items

- [items](mpmusicplayercontrollerqueue/items.md): The media items in the queue.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.

# MPMusicPlayerControllerQueue (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

An immutable queue containing the media items to play.

## Declaration

```objectivec
@interface MPMusicPlayerControllerQueue : NSObject
```

<a id="overview"></a>

## Overview

An `MPMusicPlayerControllerQueue` object contains the current queue for an application queue music player. To add or remove media items from a playing queue, use [performQueueTransaction:completionHandler:](mpmusicplayerapplicationcontroller/perform%28queuetransaction_completionhandler_%29.md). The results of the method is an `MPMusicPlayerControllerQueue` object that updates the playing queue. You don’t create your own instance of this class.

## Topics

### Inspecting queue media items

- [items](mpmusicplayercontrollerqueue/items.md): The media items in the queue.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.
