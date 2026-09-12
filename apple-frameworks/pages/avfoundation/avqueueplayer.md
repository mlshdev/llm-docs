> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueueplayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer)

# AVQueuePlayer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that plays a sequence of player items.

## Declaration

```swift
class AVQueuePlayer
```

## Mentioned In

- [Implementing simple enhanced buffering for your content](implementing-simple-enhanced-buffering-for-your-content.md)
- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md)
- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)

<a id="overview"></a>

## Overview

Use an instance of this class to manage a queue of player items.

## Topics

### Creating a queue player

- [init(items:)](avqueueplayer/init%28items_%29.md): Creates an object that plays a queue of items.

### Managing the player queue

- [items()](avqueueplayer/items%28%29.md): Returns an array of the currently enqueued items.
- [advanceToNextItem()](avqueueplayer/advancetonextitem%28%29.md): Ends playback of the current item and starts playback of the next item in the player’s queue.
- [canInsert(\_:after:)](avqueueplayer/caninsert%28__after_%29.md): Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.
- [insert(\_:after:)](avqueueplayer/insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [remove(\_:)](avqueueplayer/remove%28__%29.md): Removes a given player item from the queue.
- [removeAllItems()](avqueueplayer/removeallitems%28%29.md): Removes all player items from the queue.

## Relationships

### Inherits From

- [AVPlayer](avplayer.md)

### Conforms To

- [AVRoutingPlaybackParticipant](../avrouting/avroutingplaybackparticipant.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playback control

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md): Keep your user interface in sync with state changes from playback objects.
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md): Play, pause, and seek through a media presentation.
- [Creating a seamless multiview playback experience](creating-a-seamless-multiview-playback-experience.md): Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.
- [AVPlayer](avplayer.md): An object that provides the interface to control the player’s transport behavior.
- [AVPlayerItem](avplayeritem.md): An object that models the timing and presentation state of an asset during playback.
- [AVPlayerItemTrack](avplayeritemtrack.md): An object that represents the presentation state of an asset track during playback.
- [AVPlayerLooper](avplayerlooper.md): An object that loops media content using a queue player.

# AVQueuePlayer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that plays a sequence of player items.

## Declaration

```objectivec
@interface AVQueuePlayer : AVPlayer
```

## Mentioned In

- [Implementing simple enhanced buffering for your content](implementing-simple-enhanced-buffering-for-your-content.md)
- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md)
- [Supporting AirPlay in your app](supporting-airplay-in-your-app.md)

<a id="overview"></a>

## Overview

Use an instance of this class to manage a queue of player items.

## Topics

### Creating a queue player

- [queuePlayerWithItems:](avqueueplayer/queueplayerwithitems_.md): Returns an object that plays a queue of items.
- [initWithItems:](avqueueplayer/init%28items_%29.md): Creates an object that plays a queue of items.

### Managing the player queue

- [items](avqueueplayer/items%28%29.md): Returns an array of the currently enqueued items.
- [advanceToNextItem](avqueueplayer/advancetonextitem%28%29.md): Ends playback of the current item and starts playback of the next item in the player’s queue.
- [canInsertItem:afterItem:](avqueueplayer/caninsert%28__after_%29.md): Returns a Boolean value that indicates whether you can insert a player item into the player’s queue.
- [insertItem:afterItem:](avqueueplayer/insert%28__after_%29.md): Inserts a player item after another player item in the queue.
- [removeItem:](avqueueplayer/remove%28__%29.md): Removes a given player item from the queue.
- [removeAllItems](avqueueplayer/removeallitems%28%29.md): Removes all player items from the queue.

## Relationships

### Inherits From

- [AVPlayer](avplayer.md)

## See Also

### Playback control

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md): Keep your user interface in sync with state changes from playback objects.
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md): Play, pause, and seek through a media presentation.
- [Creating a seamless multiview playback experience](creating-a-seamless-multiview-playback-experience.md): Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.
- [AVPlayer](avplayer.md): An object that provides the interface to control the player’s transport behavior.
- [AVPlayerItem](avplayeritem.md): An object that models the timing and presentation state of an asset during playback.
- [AVPlayerItemTrack](avplayeritemtrack.md): An object that represents the presentation state of an asset track during playback.
- [AVPlayerLooper](avplayerlooper.md): An object that loops media content using a queue player.
