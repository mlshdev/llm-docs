> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor](https://developer.apple.com/documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor)

# MPMusicPlayerMediaItemQueueDescriptor (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of properties and methods for modifying audio media items in the player’s media queue.

## Declaration

```swift
class MPMusicPlayerMediaItemQueueDescriptor
```

<a id="overview"></a>

## Overview

Use this class to modify the player queue created by a query before the queue begins to play. You can modify when individual items start and stop playing, along with setting the first item to play.

## Topics

### Creating a new media item queue descriptor

- [init(itemCollection:)](mpmusicplayermediaitemqueuedescriptor/init%28itemcollection_%29.md): Creates a new queue descriptor using the designated collection.
- [init(query:)](mpmusicplayermediaitemqueuedescriptor/init%28query_%29.md): Creates a new queue descriptor using the designated query.

### Media item queue descriptor properties

- [itemCollection](mpmusicplayermediaitemqueuedescriptor/itemcollection.md): Contains the media item collection used to create the queue descriptor.
- [query](mpmusicplayermediaitemqueuedescriptor/query.md): Contains the media items found by the query used to create the queue descriptor.
- [startItem](mpmusicplayermediaitemqueuedescriptor/startitem.md): Designates the media item to play first.

### Setting start and end times

- [setStartTime(\_:for:)](mpmusicplayermediaitemqueuedescriptor/setstarttime%28__for_%29.md): The time the designated media item is to start playing.
- [setEndTime(\_:for:)](mpmusicplayermediaitemqueuedescriptor/setendtime%28__for_%29.md): The time the designated media item is to stop playing.

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
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.

# MPMusicPlayerMediaItemQueueDescriptor (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of properties and methods for modifying audio media items in the player’s media queue.

## Declaration

```objectivec
@interface MPMusicPlayerMediaItemQueueDescriptor : MPMusicPlayerQueueDescriptor
```

<a id="overview"></a>

## Overview

Use this class to modify the player queue created by a query before the queue begins to play. You can modify when individual items start and stop playing, along with setting the first item to play.

## Topics

### Creating a new media item queue descriptor

- [initWithItemCollection:](mpmusicplayermediaitemqueuedescriptor/init%28itemcollection_%29.md): Creates a new queue descriptor using the designated collection.
- [initWithQuery:](mpmusicplayermediaitemqueuedescriptor/init%28query_%29.md): Creates a new queue descriptor using the designated query.

### Media item queue descriptor properties

- [itemCollection](mpmusicplayermediaitemqueuedescriptor/itemcollection.md): Contains the media item collection used to create the queue descriptor.
- [query](mpmusicplayermediaitemqueuedescriptor/query.md): Contains the media items found by the query used to create the queue descriptor.
- [startItem](mpmusicplayermediaitemqueuedescriptor/startitem.md): Designates the media item to play first.

### Setting start and end times

- [setStartTime:forItem:](mpmusicplayermediaitemqueuedescriptor/setstarttime%28__for_%29.md): The time the designated media item is to start playing.
- [setEndTime:forItem:](mpmusicplayermediaitemqueuedescriptor/setendtime%28__for_%29.md): The time the designated media item is to stop playing.

## Relationships

### Inherits From

- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerStoreQueueDescriptor](mpmusicplayerstorequeuedescriptor.md): A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.
