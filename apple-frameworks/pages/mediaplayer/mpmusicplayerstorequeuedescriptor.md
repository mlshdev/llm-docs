> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerstorequeuedescriptor](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerstorequeuedescriptor)

# MPMusicPlayerStoreQueueDescriptor (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.

## Declaration

```swift
class MPMusicPlayerStoreQueueDescriptor
```

<a id="overview"></a>

## Overview

Use this class to modify the player queue created by a query before the queue begins to play. You can modify when individual items start and stop playing, along with setting the first item to play.

## Topics

### Creating a new store queue descriptor

- [init(storeIDs:)](mpmusicplayerstorequeuedescriptor/init%28storeids_%29.md): Creates a new queue descriptor using the designated store identifiers.

### Store identifier queue descriptor properties

- [startItemID](mpmusicplayerstorequeuedescriptor/startitemid.md): The item identified by the store identifier to play first.
- [storeIDs](mpmusicplayerstorequeuedescriptor/storeids.md): An array containing the store identifiers found by the query used to create the queue descriptor.

### Setting start and end times

- [setStartTime(\_:forItemWithStoreID:)](mpmusicplayerstorequeuedescriptor/setstarttime%28__foritemwithstoreid_%29.md): Sets the time the designated store item is to start playing.
- [setEndTime(\_:forItemWithStoreID:)](mpmusicplayerstorequeuedescriptor/setendtime%28__foritemwithstoreid_%29.md): Sets the time the designated store item is to stop playing.

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
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.

# MPMusicPlayerStoreQueueDescriptor (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A set of properties and methods for modifying items, based on their store identifier, in the player’s queue.

## Declaration

```objectivec
@interface MPMusicPlayerStoreQueueDescriptor : MPMusicPlayerQueueDescriptor
```

<a id="overview"></a>

## Overview

Use this class to modify the player queue created by a query before the queue begins to play. You can modify when individual items start and stop playing, along with setting the first item to play.

## Topics

### Creating a new store queue descriptor

- [initWithStoreIDs:](mpmusicplayerstorequeuedescriptor/init%28storeids_%29.md): Creates a new queue descriptor using the designated store identifiers.

### Store identifier queue descriptor properties

- [startItemID](mpmusicplayerstorequeuedescriptor/startitemid.md): The item identified by the store identifier to play first.
- [storeIDs](mpmusicplayerstorequeuedescriptor/storeids.md): An array containing the store identifiers found by the query used to create the queue descriptor.

### Setting start and end times

- [setStartTime:forItemWithStoreID:](mpmusicplayerstorequeuedescriptor/setstarttime%28__foritemwithstoreid_%29.md): Sets the time the designated store item is to start playing.
- [setEndTime:forItemWithStoreID:](mpmusicplayerstorequeuedescriptor/setendtime%28__foritemwithstoreid_%29.md): Sets the time the designated store item is to stop playing.

## Relationships

### Inherits From

- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md)

## See Also

### Media player queues

- [MPMusicPlayerControllerQueue](mpmusicplayercontrollerqueue.md): An immutable queue containing the media items to play.
- [MPMusicPlayerControllerMutableQueue](mpmusicplayercontrollermutablequeue.md): A mutable queue containing the media items to play.
- [MPMusicPlayerApplicationController](mpmusicplayerapplicationcontroller.md): A media player object that you use to revise the queue that’s currently playing.
- [MPMusicPlayerMediaItemQueueDescriptor](mpmusicplayermediaitemqueuedescriptor.md): A set of properties and methods for modifying audio media items in the player’s media queue.
- [MPMusicPlayerPlayParametersQueueDescriptor](mpmusicplayerplayparametersqueuedescriptor.md): A set of properties and methods for modifying how to play items, based on play parameters the framework returns.
- [MPMusicPlayerQueueDescriptor](mpmusicplayerqueuedescriptor.md): The abstract base class for audio media item and store queue descriptors.
