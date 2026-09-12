> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlooper](https://developer.apple.com/documentation/avfoundation/avplayerlooper)

# AVPlayerLooper (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An object that loops media content using a queue player.

## Declaration

```swift
class AVPlayerLooper
```

<a id="overview"></a>

## Overview

You can manually implement looping playback in your app using [AVQueuePlayer](avqueueplayer.md), but `AVPlayerLooper` provides a much simpler interface to loop a single [AVPlayerItem](avplayeritem.md). You create a player looper by passing it a reference to your [AVQueuePlayer](avqueueplayer.md) and a template [AVPlayerItem](avplayeritem.md) and the looper automatically manages the looping playback of this content (see example).

```swift
let asset = // AVAsset with its 'duration' property value loaded
let playerItem = AVPlayerItem(asset: asset)
 
// Create a new player looper with the queue player and template item
playerLooper = AVPlayerLooper(player: queuePlayer, templateItem: playerItem)
 
// Begin looping playback
queuePlayer.play()
```

## Topics

### Creating a player looper

- [init(player:templateItem:timeRange:existingItemsOrdering:)](avplayerlooper/init%28player_templateitem_timerange_existingitemsordering_%29.md): Creates a player looper that continuously plays the full duration of a player item while adhering to the specified ordering of existing items in the queue.
- [init(player:templateItem:)](avplayerlooper/init%28player_templateitem_%29.md): Creates a player looper that continuously plays the full duration of a player item.
- [init(player:templateItem:timeRange:)](avplayerlooper/init%28player_templateitem_timerange_%29.md): Creates a player looper that continuously plays the specified time range of a player item.

### Configuring looping

- [loopingPlayerItems](avplayerlooper/loopingplayeritems.md): An array containing replicas of the template player item used to accomplish the looping.
- [disableLooping()](avplayerlooper/disablelooping%28%29.md): Disables looping for the player queue.

### Observing looping state

- [loopCount](avplayerlooper/loopcount.md): The number of times the object played the media.
- [status](avplayerlooper/status-swift.property.md): A status that indicates the object’s ability to loop playback.
- [AVPlayerLooper.Status](avplayerlooper/status-swift.enum.md): Status constants that indicate whether a looper can successfully perform looping playback.

### Monitoring errors

- [error](avplayerlooper/error.md): An error that describes the reason looping failed.

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

### Playback control

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md): Keep your user interface in sync with state changes from playback objects.
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md): Play, pause, and seek through a media presentation.
- [Creating a seamless multiview playback experience](creating-a-seamless-multiview-playback-experience.md): Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.
- [AVPlayer](avplayer.md): An object that provides the interface to control the player’s transport behavior.
- [AVPlayerItem](avplayeritem.md): An object that models the timing and presentation state of an asset during playback.
- [AVPlayerItemTrack](avplayeritemtrack.md): An object that represents the presentation state of an asset track during playback.
- [AVQueuePlayer](avqueueplayer.md): An object that plays a sequence of player items.

# AVPlayerLooper (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An object that loops media content using a queue player.

## Declaration

```objectivec
@interface AVPlayerLooper : NSObject
```

<a id="overview"></a>

## Overview

You can manually implement looping playback in your app using [AVQueuePlayer](avqueueplayer.md), but `AVPlayerLooper` provides a much simpler interface to loop a single [AVPlayerItem](avplayeritem.md). You create a player looper by passing it a reference to your [AVQueuePlayer](avqueueplayer.md) and a template [AVPlayerItem](avplayeritem.md) and the looper automatically manages the looping playback of this content (see example).

```swift
let asset = // AVAsset with its 'duration' property value loaded
let playerItem = AVPlayerItem(asset: asset)
 
// Create a new player looper with the queue player and template item
playerLooper = AVPlayerLooper(player: queuePlayer, templateItem: playerItem)
 
// Begin looping playback
queuePlayer.play()
```

## Topics

### Creating a player looper

- [initWithPlayer:templateItem:timeRange:existingItemsOrdering:](avplayerlooper/init%28player_templateitem_timerange_existingitemsordering_%29.md): Creates a player looper that continuously plays the full duration of a player item while adhering to the specified ordering of existing items in the queue.
- [playerLooperWithPlayer:templateItem:](avplayerlooper/init%28player_templateitem_%29.md): Creates a player looper that continuously plays the full duration of a player item.
- [initWithPlayer:templateItem:timeRange:](avplayerlooper/init%28player_templateitem_timerange_%29.md): Creates a player looper that continuously plays the specified time range of a player item.
- [playerLooperWithPlayer:templateItem:timeRange:](avplayerlooper/playerlooperwithplayer_templateitem_timerange_.md): Returns player looper that continuously plays the specified time range of a player item.

### Configuring looping

- [loopingPlayerItems](avplayerlooper/loopingplayeritems.md): An array containing replicas of the template player item used to accomplish the looping.
- [disableLooping](avplayerlooper/disablelooping%28%29.md): Disables looping for the player queue.

### Observing looping state

- [loopCount](avplayerlooper/loopcount.md): The number of times the object played the media.
- [status](avplayerlooper/status-swift.property.md): A status that indicates the object’s ability to loop playback.
- [AVPlayerLooperStatus](avplayerlooper/status-swift.enum.md): Status constants that indicate whether a looper can successfully perform looping playback.

### Monitoring errors

- [error](avplayerlooper/error.md): An error that describes the reason looping failed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Playback control

- [Observing playback state in SwiftUI](observing-playback-state-in-swiftui.md): Keep your user interface in sync with state changes from playback objects.
- [Controlling the transport behavior of a player](controlling-the-transport-behavior-of-a-player.md): Play, pause, and seek through a media presentation.
- [Creating a seamless multiview playback experience](creating-a-seamless-multiview-playback-experience.md): Build advanced multiview playback experiences with the AVFoundation and AVRouting frameworks.
- [AVPlayer](avplayer.md): An object that provides the interface to control the player’s transport behavior.
- [AVPlayerItem](avplayeritem.md): An object that models the timing and presentation state of an asset during playback.
- [AVPlayerItemTrack](avplayeritemtrack.md): An object that represents the presentation state of an asset track during playback.
- [AVQueuePlayer](avqueueplayer.md): An object that plays a sequence of player items.
