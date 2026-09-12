> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayeritem](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritem)

# WKAudioFilePlayerItem (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An object that manages the presentation state of an audio file while it is playing.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```swift
class WKAudioFilePlayerItem
```

<a id="overview"></a>

## Overview

Create a player item for each [WKAudioFileAsset](wkaudiofileasset.md) object you want to play and use the player item to observe the state of the audio during playback. You can then associate the player item with an audio queue or player object to control the playback.

The value of the player item’s presentation-related properties are not valid until the underlying asset is loaded. Use the value of the [status](wkaudiofileplayeritem/status.md) property to determine when it is valid to get the values of other properties. Specifically, wait until the status changes to [WKAudioFilePlayerItemStatus.readyToPlay](wkaudiofileplayeritemstatus/readytoplay.md) to access relevant properties.

If you want to play an asset more than once within a queue of items, you must create separate player items for each placement in the queue.

## Topics

### Creating a Player Item

- [init(asset:)](wkaudiofileplayeritem/init%28asset_%29.md): Deprecated. Creates and returns a player item for the specified audio file asset.

### Getting Information About the Item

- [asset](wkaudiofileplayeritem/asset.md): Deprecated. The audio file asset being managed.
- [status](wkaudiofileplayeritem/status.md): Deprecated. The status of the player item.
- [error](wkaudiofileplayeritem/error.md): Deprecated. An error that describes the cause of a failure.

### Managing the Playback Position

- [currentTime](wkaudiofileplayeritem/currenttime.md): Deprecated. The current playback point, measured in seconds, from the beginning of the audio file.
- [setCurrentTime(\_:)](wkaudiofileplayeritem/setcurrenttime%28__%29.md): Deprecated. Sets the playback point, measured in seconds, from the beginning of the audio file.

### Accessing the Item’s Status

- [WKAudioFilePlayerItemStatus](wkaudiofileplayeritemstatus.md): Deprecated. Constants that represent the status of a player item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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
- [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md): Deprecated. An object that controls playback of one or more audio items.
- [WKAudioFileAsset](wkaudiofileasset.md): Deprecated. An object that stores a reference to an audio file and provides metadata information about that file.

# WKAudioFilePlayerItem (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An object that manages the presentation state of an audio file while it is playing.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```objectivec
@interface WKAudioFilePlayerItem : NSObject
```

<a id="overview"></a>

## Overview

Create a player item for each [WKAudioFileAsset](wkaudiofileasset.md) object you want to play and use the player item to observe the state of the audio during playback. You can then associate the player item with an audio queue or player object to control the playback.

The value of the player item’s presentation-related properties are not valid until the underlying asset is loaded. Use the value of the [status](wkaudiofileplayeritem/status.md) property to determine when it is valid to get the values of other properties. Specifically, wait until the status changes to [WKAudioFilePlayerItemStatusReadyToPlay](wkaudiofileplayeritemstatus/readytoplay.md) to access relevant properties.

If you want to play an asset more than once within a queue of items, you must create separate player items for each placement in the queue.

## Topics

### Creating a Player Item

- [playerItemWithAsset:](wkaudiofileplayeritem/init%28asset_%29.md): Deprecated. Creates and returns a player item for the specified audio file asset.

### Getting Information About the Item

- [asset](wkaudiofileplayeritem/asset.md): Deprecated. The audio file asset being managed.
- [status](wkaudiofileplayeritem/status.md): Deprecated. The status of the player item.
- [error](wkaudiofileplayeritem/error.md): Deprecated. An error that describes the cause of a failure.

### Managing the Playback Position

- [currentTime](wkaudiofileplayeritem/currenttime.md): Deprecated. The current playback point, measured in seconds, from the beginning of the audio file.
- [setCurrentTime:](wkaudiofileplayeritem/setcurrenttime%28__%29.md): Deprecated. Sets the playback point, measured in seconds, from the beginning of the audio file.

### Accessing the Item’s Status

- [WKAudioFilePlayerItemStatus](wkaudiofileplayeritemstatus.md): Deprecated. Constants that represent the status of a player item.

### Receiving Notifications

- [WKAudioFilePlayerItemTimeJumpedNotification](wkaudiofileplayeritemtimejumpednotification.md): Deprecated. A notification that the item’s current time has changed discontinuously.
- [WKAudioFilePlayerItemDidPlayToEndTimeNotification](wkaudiofileplayeritemdidplaytoendtimenotification.md): Deprecated. A notification that the item has played successfully to its end.
- [WKAudioFilePlayerItemFailedToPlayToEndTimeNotification](wkaudiofileplayeritemfailedtoplaytoendtimenotification.md): Deprecated. A notification that the item failed to play to its end.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Audio

- [Playing Background Audio](playing-background-audio.md): Enable background audio in your app to provide a seamless playback experience.
- [Adding a Now Playing View](adding-a-now-playing-view.md): Provide a view that controls the currently playing audio from your app.
- [WKInterfaceVolumeControl](wkinterfacevolumecontrol.md): An interface element that provides control of the audio volume from the watch or a paired iPhone.
- [PUICAutoLaunchAudioOptOut](https://developer.apple.com/documentation/bundleresources/information-property-list/puicautolaunchaudiooptout): A Boolean value that indicates whether a watchOS app should opt out of automatically launching when its companion iOS app starts playing audio content.
- [WKAudioFilePlayer](wkaudiofileplayer.md): Deprecated. An object that controls playback of a single audio item.
- [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md): Deprecated. An object that controls playback of one or more audio items.
- [WKAudioFileAsset](wkaudiofileasset.md): Deprecated. An object that stores a reference to an audio file and provides metadata information about that file.
