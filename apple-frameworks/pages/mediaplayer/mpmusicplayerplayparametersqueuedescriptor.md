> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor)

# MPMusicPlayerPlayParametersQueueDescriptor (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A set of properties and methods for modifying how to play items, based on play parameters the framework returns.

## Declaration

```swift
class MPMusicPlayerPlayParametersQueueDescriptor
```

<a id="overview"></a>

## Overview

Use this class to modify the player queue created by a query before the queue begins to play. You can modify when individual items start and stop playing, along with setting the first item for playing.

## Topics

### Creating a new play parameters queue descriptor

- [init(playParametersQueue:)](mpmusicplayerplayparametersqueuedescriptor/init%28playparametersqueue_%29.md): Creates a new queue descriptor using the designated queue of play parameters.
- [MPMusicPlayerPlayParameters](mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

### Accessing the play parameters

- [playParametersQueue](mpmusicplayerplayparametersqueuedescriptor/playparametersqueue.md): An array containing the play parameters returned from querying MusicKit.
- [startItemPlayParameters](mpmusicplayerplayparametersqueuedescriptor/startitemplayparameters.md): The item identified by the play parameters to play first.
- [MPMusicPlayerPlayParameters](mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

### Setting start and end times

- [setStartTime(\_:forItemWith:)](mpmusicplayerplayparametersqueuedescriptor/setstarttime%28__foritemwith_%29.md): Sets the time the item with the associated play parameters is to start playing.
- [setEndTime(\_:forItemWith:)](mpmusicplayerplayparametersqueuedescriptor/setendtime%28__foritemwith_%29.md): Sets the time the item with the associated play parameters is to stop playing.

## Relationships

### Inherits From

- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md)

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
- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.

# MPMusicPlayerPlayParametersQueueDescriptor (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A set of properties and methods for modifying how to play items, based on play parameters the framework returns.

## Declaration

```objectivec
@interface MPMusicPlayerPlayParametersQueueDescriptor : MPMusicPlayerQueueDescriptor
```

<a id="overview"></a>

## Overview

Use this class to modify the player queue created by a query before the queue begins to play. You can modify when individual items start and stop playing, along with setting the first item for playing.

## Topics

### Creating a new play parameters queue descriptor

- [initWithPlayParametersQueue:](mpmusicplayerplayparametersqueuedescriptor/init%28playparametersqueue_%29.md): Creates a new queue descriptor using the designated queue of play parameters.
- [MPMusicPlayerPlayParameters](mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

### Accessing the play parameters

- [playParametersQueue](mpmusicplayerplayparametersqueuedescriptor/playparametersqueue.md): An array containing the play parameters returned from querying MusicKit.
- [startItemPlayParameters](mpmusicplayerplayparametersqueuedescriptor/startitemplayparameters.md): The item identified by the play parameters to play first.
- [MPMusicPlayerPlayParameters](mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

### Setting start and end times

- [setStartTime:forItemWithPlayParameters:](mpmusicplayerplayparametersqueuedescriptor/setstarttime%28__foritemwith_%29.md): Sets the time the item with the associated play parameters is to start playing.
- [setEndTime:forItemWithPlayParameters:](mpmusicplayerplayparametersqueuedescriptor/setendtime%28__foritemwith_%29.md): Sets the time the item with the associated play parameters is to stop playing.

## Relationships

### Inherits From

- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.
