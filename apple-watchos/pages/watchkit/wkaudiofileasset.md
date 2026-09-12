> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileasset](https://developer.apple.com/documentation/watchkit/wkaudiofileasset)

# WKAudioFileAsset (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An object that stores a reference to an audio file and provides metadata information about that file.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```swift
class WKAudioFileAsset
```

<a id="overview"></a>

## Overview

You create assets when you want to play audio from your watchOS app. Use the audio file asset object to store the location of the file and any Now Playing information you want displayed while the audio is playing.

Audio assets must refer to files on the local file system. If you have audio files that are stored on a server, you must download them to the user’s Apple Watch before attempting to play them using an audio file asset object.

It is recommended that you encode audio files using 32 kbps stereo AAC. You may use other bit rates, or the LPCM encoding, as preferred for your content.

To play an audio file asset, wrap it in a [WKAudioFilePlayerItem](wkaudiofileplayeritem.md) object. The player item object stores information about the playback status of the asset and works with a [WKAudioFilePlayer](wkaudiofileplayer.md) object to coordinate playback. If you want to queue several audio files for playback, you manage those items using a [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md) object.

## Topics

### Creating an Asset

- [init(url:)](wkaudiofileasset/init%28url_%29-8ndda.md): Deprecated. Returns an asset for the audio file at the specified URL.
- [init(url:title:albumTitle:artist:)](wkaudiofileasset/init%28url_title_albumtitle_artist_%29-447fg.md): Deprecated. Returns an audio file asset and sets the metadata for that item.

### Getting the Asset’s Properties

- [url](wkaudiofileasset/url.md): Deprecated. The URL of the audio file.
- [duration](wkaudiofileasset/duration.md): Deprecated. The duration (in seconds) of the audio file.
- [title](wkaudiofileasset/title.md): Deprecated. The title information for the audio file.
- [albumTitle](wkaudiofileasset/albumtitle.md): Deprecated. The album title information for the audio file.
- [artist](wkaudiofileasset/artist.md): Deprecated. The artist information for the audio file.

### Initializers

- [init(URL:)](wkaudiofileasset/init%28url_%29-49spv.md): Deprecated.
- [init(URL:title:albumTitle:artist:)](wkaudiofileasset/init%28url_title_albumtitle_artist_%29-5zloc.md): Deprecated.

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
- [WKAudioFilePlayerItem](wkaudiofileplayeritem.md): Deprecated. An object that manages the presentation state of an audio file while it is playing.

# WKAudioFileAsset (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

An object that stores a reference to an audio file and provides metadata information about that file.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```objectivec
@interface WKAudioFileAsset : NSObject
```

<a id="overview"></a>

## Overview

You create assets when you want to play audio from your watchOS app. Use the audio file asset object to store the location of the file and any Now Playing information you want displayed while the audio is playing.

Audio assets must refer to files on the local file system. If you have audio files that are stored on a server, you must download them to the user’s Apple Watch before attempting to play them using an audio file asset object.

It is recommended that you encode audio files using 32 kbps stereo AAC. You may use other bit rates, or the LPCM encoding, as preferred for your content.

To play an audio file asset, wrap it in a [WKAudioFilePlayerItem](wkaudiofileplayeritem.md) object. The player item object stores information about the playback status of the asset and works with a [WKAudioFilePlayer](wkaudiofileplayer.md) object to coordinate playback. If you want to queue several audio files for playback, you manage those items using a [WKAudioFileQueuePlayer](wkaudiofilequeueplayer.md) object.

## Topics

### Creating an Asset

- [assetWithURL:](wkaudiofileasset/init%28url_%29-8ndda.md): Deprecated. Returns an asset for the audio file at the specified URL.
- [assetWithURL:title:albumTitle:artist:](wkaudiofileasset/init%28url_title_albumtitle_artist_%29-447fg.md): Deprecated. Returns an audio file asset and sets the metadata for that item.

### Getting the Asset’s Properties

- [URL](wkaudiofileasset/url.md): Deprecated. The URL of the audio file.
- [duration](wkaudiofileasset/duration.md): Deprecated. The duration (in seconds) of the audio file.
- [title](wkaudiofileasset/title.md): Deprecated. The title information for the audio file.
- [albumTitle](wkaudiofileasset/albumtitle.md): Deprecated. The album title information for the audio file.
- [artist](wkaudiofileasset/artist.md): Deprecated. The artist information for the audio file.

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
- [WKAudioFilePlayerItem](wkaudiofileplayeritem.md): Deprecated. An object that manages the presentation state of an audio file while it is playing.
