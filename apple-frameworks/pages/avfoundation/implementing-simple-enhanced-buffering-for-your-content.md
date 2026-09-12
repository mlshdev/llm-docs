> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/implementing-simple-enhanced-buffering-for-your-content](https://developer.apple.com/documentation/avfoundation/implementing-simple-enhanced-buffering-for-your-content)

# Implementing simple enhanced buffering for your content (Swift)

**Framework:** AVFoundation  
**Kind:** Article

Configure your app for simple enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.

<a id="overview"></a>

## Overview

The [AVPlayer](avplayer.md) and [AVQueuePlayer](avqueueplayer.md) classes provide the simplest way to enhance buffering for your content with AirPlay 2.

To implement simple enhanced buffering, complete the following steps.

1. Create a player.

```swift
let player = AVQueuePlayer()
```

2. Identify a URL that points to local or cloud content that you want to play.
3. Create an [AVAsset](avasset.md) instance with a URL, and then create an [AVPlayerItem](avplayeritem.md) instance with that asset.

```swift
let url = URL(string: "http://www.examplecontenturl.com")!
let asset = AVAsset(url: url)
let item = AVPlayerItem(asset: asset)
```

4. Give the player item to the player.

```swift
player.insert(item, after: nil)
```

5. Start playback.

```swift
player.play()
```

## See Also

### Buffered playback

- [Implementing flexible enhanced buffering for your content](implementing-flexible-enhanced-buffering-for-your-content.md): Configure your app for flexible enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.
- [Integrating AirPlay for long-form video apps](integrating-airplay-for-long-form-video-apps.md): Integrate AirPlay features and implement a dedicated external playback experience by preparing the routing system for long-form video playback.

# Implementing simple enhanced buffering for your content (Objective-C)

**Framework:** AVFoundation  
**Kind:** Article

Configure your app for simple enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.

<a id="overview"></a>

## Overview

The [AVPlayer](avplayer.md) and [AVQueuePlayer](avqueueplayer.md) classes provide the simplest way to enhance buffering for your content with AirPlay 2.

To implement simple enhanced buffering, complete the following steps.

1. Create a player.

```swift
let player = AVQueuePlayer()
```

2. Identify a URL that points to local or cloud content that you want to play.
3. Create an [AVAsset](avasset.md) instance with a URL, and then create an [AVPlayerItem](avplayeritem.md) instance with that asset.

```swift
let url = URL(string: "http://www.examplecontenturl.com")!
let asset = AVAsset(url: url)
let item = AVPlayerItem(asset: asset)
```

4. Give the player item to the player.

```swift
player.insert(item, after: nil)
```

5. Start playback.

```swift
player.play()
```

## See Also

### Buffered playback

- [Implementing flexible enhanced buffering for your content](implementing-flexible-enhanced-buffering-for-your-content.md): Configure your app for flexible enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.
