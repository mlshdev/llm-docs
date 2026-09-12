> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplayercomponent/init(avplayer:)](https://developer.apple.com/documentation/realitykit/videoplayercomponent/init(avplayer:))

# init(avPlayer:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a video player component from an AV player object.

## Declaration

```swift
init(avPlayer: AVPlayer)
```

## Parameters

- `avPlayer`: An [AVPlayer](../../avfoundation/avplayer.md) instance.

<a id="discussion"></a>

## Discussion

> **Note**

> You can’t use the same `AVPlayer` object with more than one `VideoPlayerComponent`.

Here’s an example of setting up a video player component:

```swift
// Create an entity for display.
let videoEntity = Entity()

// Create an AV player with a URL.
let player = AVPlayer(url: "PLACEMENT_URL")

// Create a video player component with the AV player.
let videoPlayerComponent = VideoPlayerComponent(avPlayer: player)

// Attach the video player component to the entity.
videoEntity.components.set(videoPlayerComponent)
```

## See Also

### Creating a video player component

- [init(videoRenderer:)](init%28videorenderer_%29.md): Creates a video player component from a sample buffer video renderer object.
