> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofilequeueplayer](https://developer.apple.com/documentation/watchkit/wkaudiofilequeueplayer)

# WKAudioFileQueuePlayer (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An object that controls playback of one or more audio items.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```swift
class WKAudioFileQueuePlayer
```

<a id="overview"></a>

## Overview

Items are stored in a queue and played sequentially. When playback of the current item ends, playback of the next item begins automatically.

Because this class is a subclass of [WKAudioFilePlayer](wkaudiofileplayer.md), it inherits the same playback controls and state information as its superclass. You can use the inherited methods to start and stop playback or change the playback rate. You can also get information about the current status of the player, including the elapsed playback time for the currently playing item. This method also implements the inherited [replaceCurrentItem(with:)](wkaudiofileplayer/replacecurrentitem%28with_%29.md) method and uses it to end playback of one item and start playback of another.

## Topics

### Creating a Queue Player

- [init(items:)](wkaudiofilequeueplayer/init%28items_%29.md): Deprecated. Creates and returns a player initialized with an array of items.

### Managing Items

- [items](wkaudiofilequeueplayer/items.md): Deprecated. The array of queued items.
- [advanceToNextItem()](wkaudiofilequeueplayer/advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [appendItem(\_:)](wkaudiofilequeueplayer/appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeItem(\_:)](wkaudiofilequeueplayer/removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
- [removeAllItems()](wkaudiofilequeueplayer/removeallitems%28%29.md): Deprecated. Removes all items from the queue.

## Relationships

### Inherits From

- [WKAudioFilePlayer](wkaudiofileplayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Audio

- [Playing Background Audio](playing-background-audio.md): Enable background audio in your app to provide a seamless playback experience.
- [Adding a Now Playing View](adding-a-now-playing-view.md): Provide a view that controls the currently playing audio from your app.
- [WKInterfaceVolumeControl](wkinterfacevolumecontrol.md): An interface element that provides control of the audio volume from the watch or a paired iPhone.
- [PUICAutoLaunchAudioOptOut](https://developer.apple.com/documentation/bundleresources/information-property-list/puicautolaunchaudiooptout): A Boolean value that indicates whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.
- [WKAudioFilePlayer](wkaudiofileplayer.md): Deprecated. An object that controls playback of a single audio item.
- [WKAudioFilePlayerItem](wkaudiofileplayeritem.md): Deprecated. An object that manages the presentation state of an audio file while it is playing.
- [WKAudioFileAsset](wkaudiofileasset.md): Deprecated. An object that stores a reference to an audio file and provides metadata information about that file.

# WKAudioFileQueuePlayer (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An object that controls playback of one or more audio items.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```objectivec
@interface WKAudioFileQueuePlayer : WKAudioFilePlayer
```

<a id="overview"></a>

## Overview

Items are stored in a queue and played sequentially. When playback of the current item ends, playback of the next item begins automatically.

Because this class is a subclass of [WKAudioFilePlayer](wkaudiofileplayer.md), it inherits the same playback controls and state information as its superclass. You can use the inherited methods to start and stop playback or change the playback rate. You can also get information about the current status of the player, including the elapsed playback time for the currently playing item. This method also implements the inherited [replaceCurrentItemWithPlayerItem:](wkaudiofileplayer/replacecurrentitem%28with_%29.md) method and uses it to end playback of one item and start playback of another.

## Topics

### Creating a Queue Player

- [queuePlayerWithItems:](wkaudiofilequeueplayer/init%28items_%29.md): Deprecated. Creates and returns a player initialized with an array of items.

### Managing Items

- [items](wkaudiofilequeueplayer/items.md): Deprecated. The array of queued items.
- [advanceToNextItem](wkaudiofilequeueplayer/advancetonextitem%28%29.md): Deprecated. Ends playback of the current item and begins playing the next item in the queue.
- [appendItem:](wkaudiofilequeueplayer/appenditem%28__%29.md): Deprecated. Adds the specified item to the end of the queue.
- [removeItem:](wkaudiofilequeueplayer/removeitem%28__%29.md): Deprecated. Removes the specified item from the queue.
- [removeAllItems](wkaudiofilequeueplayer/removeallitems%28%29.md): Deprecated. Removes all items from the queue.

## Relationships

### Inherits From

- [WKAudioFilePlayer](wkaudiofileplayer.md)

## See Also

### Audio

- [Playing Background Audio](playing-background-audio.md): Enable background audio in your app to provide a seamless playback experience.
- [Adding a Now Playing View](adding-a-now-playing-view.md): Provide a view that controls the currently playing audio from your app.
- [WKInterfaceVolumeControl](wkinterfacevolumecontrol.md): An interface element that provides control of the audio volume from the watch or a paired iPhone.
- [PUICAutoLaunchAudioOptOut](https://developer.apple.com/documentation/bundleresources/information-property-list/puicautolaunchaudiooptout): A Boolean value that indicates whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.
- [WKAudioFilePlayer](wkaudiofileplayer.md): Deprecated. An object that controls playback of a single audio item.
- [WKAudioFilePlayerItem](wkaudiofileplayeritem.md): Deprecated. An object that manages the presentation state of an audio file while it is playing.
- [WKAudioFileAsset](wkaudiofileasset.md): Deprecated. An object that stores a reference to an audio file and provides metadata information about that file.
