> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayer](https://developer.apple.com/documentation/watchkit/wkaudiofileplayer)

# WKAudioFilePlayer (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An object that controls playback of a single audio item.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```swift
class WKAudioFilePlayer
```

<a id="overview"></a>

## Overview

Use a player object to start and stop playback and to control the rate of playback. (The [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md) subclass extends the basic behavior to support playback of more than one item.)

The value of the player’s presentation-related properties are not valid until the underlying asset is loaded. Use the value of the [status](wkaudiofileplayer/status.md) property to determine when it is valid to get the values of other properties. Specifically, wait until the status changes to [WKAudioFilePlayerStatus.readyToPlay](wkaudiofileplayerstatus/readytoplay.md) to access relevant properties.

The [WKAudioFilePlayer](wkaudiofileplayer.md) class is key-value observing compliant for the [currentItem](wkaudiofileplayer/currentitem.md), [status](wkaudiofileplayer/status.md), and [rate](wkaudiofileplayer/rate.md) properties. You can use an observer to detect changes to those properties and react accordingly. For information on how to observe properties using key-value observing, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## Topics

### Creating a Player

- [init(playerItem:)](wkaudiofileplayer/init%28playeritem_%29.md): Deprecated. Creates and returns a player initialized with the specified player item.
- [replaceCurrentItem(with:)](wkaudiofileplayer/replacecurrentitem%28with_%29.md): Deprecated. Replaces the current player item with a different one.

### Configuring and Controlling Playback

- [play()](wkaudiofileplayer/play%28%29.md): Deprecated. Begins playback of the current item.
- [pause()](wkaudiofileplayer/pause%28%29.md): Deprecated. Pauses playback of the associated item.
- [rate](wkaudiofileplayer/rate.md): Deprecated. The current rate of playback.

### Getting Information About the Player

- [currentItem](wkaudiofileplayer/currentitem.md): Deprecated. The player’s current item.
- [status](wkaudiofileplayer/status.md): Deprecated. The status of the player.
- [error](wkaudiofileplayer/error.md): Deprecated. An error that describes the cause of a failure.

### Getting Timing Information

- [currentTime](wkaudiofileplayer/currenttime.md): Deprecated. The elapsed time for the current playing item.

### Constants

- [WKAudioFilePlayerStatus](wkaudiofileplayerstatus.md): Deprecated. Constants that represent the status of the player.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md)

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
- [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md): Deprecated. An object that controls playback of one or more audio items.
- [WKAudioFilePlayerItem](wkaudiofileplayeritem.md): Deprecated. An object that manages the presentation state of an audio file while it is playing.
- [WKAudioFileAsset](wkaudiofileasset.md): Deprecated. An object that stores a reference to an audio file and provides metadata information about that file.

# WKAudioFilePlayer (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An object that controls playback of a single audio item.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```objectivec
@interface WKAudioFilePlayer : NSObject
```

<a id="overview"></a>

## Overview

Use a player object to start and stop playback and to control the rate of playback. (The [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md) subclass extends the basic behavior to support playback of more than one item.)

The value of the player’s presentation-related properties are not valid until the underlying asset is loaded. Use the value of the [status](wkaudiofileplayer/status.md) property to determine when it is valid to get the values of other properties. Specifically, wait until the status changes to [WKAudioFilePlayerStatusReadyToPlay](wkaudiofileplayerstatus/readytoplay.md) to access relevant properties.

The [WKAudioFilePlayer](wkaudiofileplayer.md) class is key-value observing compliant for the [currentItem](wkaudiofileplayer/currentitem.md), [status](wkaudiofileplayer/status.md), and [rate](wkaudiofileplayer/rate.md) properties. You can use an observer to detect changes to those properties and react accordingly. For information on how to observe properties using key-value observing, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## Topics

### Creating a Player

- [playerWithPlayerItem:](wkaudiofileplayer/init%28playeritem_%29.md): Deprecated. Creates and returns a player initialized with the specified player item.
- [replaceCurrentItemWithPlayerItem:](wkaudiofileplayer/replacecurrentitem%28with_%29.md): Deprecated. Replaces the current player item with a different one.

### Configuring and Controlling Playback

- [play](wkaudiofileplayer/play%28%29.md): Deprecated. Begins playback of the current item.
- [pause](wkaudiofileplayer/pause%28%29.md): Deprecated. Pauses playback of the associated item.
- [rate](wkaudiofileplayer/rate.md): Deprecated. The current rate of playback.

### Getting Information About the Player

- [currentItem](wkaudiofileplayer/currentitem.md): Deprecated. The player’s current item.
- [status](wkaudiofileplayer/status.md): Deprecated. The status of the player.
- [error](wkaudiofileplayer/error.md): Deprecated. An error that describes the cause of a failure.

### Getting Timing Information

- [currentTime](wkaudiofileplayer/currenttime.md): Deprecated. The elapsed time for the current playing item.

### Constants

- [WKAudioFilePlayerStatus](wkaudiofileplayerstatus.md): Deprecated. Constants that represent the status of the player.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md)

## See Also

### Audio

- [Playing Background Audio](playing-background-audio.md): Enable background audio in your app to provide a seamless playback experience.
- [Adding a Now Playing View](adding-a-now-playing-view.md): Provide a view that controls the currently playing audio from your app.
- [WKInterfaceVolumeControl](wkinterfacevolumecontrol.md): An interface element that provides control of the audio volume from the watch or a paired iPhone.
- [PUICAutoLaunchAudioOptOut](https://developer.apple.com/documentation/bundleresources/information-property-list/puicautolaunchaudiooptout): A Boolean value that indicates whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.
- [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md): Deprecated. An object that controls playback of one or more audio items.
- [WKAudioFilePlayerItem](wkaudiofileplayeritem.md): Deprecated. An object that manages the presentation state of an audio file while it is playing.
- [WKAudioFileAsset](wkaudiofileasset.md): Deprecated. An object that stores a reference to an audio file and provides metadata information about that file.
