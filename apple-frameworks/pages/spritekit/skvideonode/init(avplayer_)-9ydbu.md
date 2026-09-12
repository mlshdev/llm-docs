> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/init(avplayer:)-9ydbu](https://developer.apple.com/documentation/spritekit/skvideonode/init(avplayer:)-9ydbu)

# init(avPlayer:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.

## Declaration

```swift
init(avPlayer player: AVPlayer)
```

## Parameters

- `player`: A player object.

<a id="return-value"></a>

## Return Value

An initialized video node.

<a id="Discussion"></a>

## Discussion

You can use the [AVPlayer](../../avfoundation/avplayer.md) object to control playback.

Listing 1 shows, in Swift, how you can create a video node using the [init(avPlayer:)](init%28avplayer_%29-9ydbu.md) initializer.

Listing 1. Creating a video node with an AV Player

```swift
var videoNode: SKVideoNode? = {
    guard let urlString = Bundle.main.path(forResource: "sample", ofType: "mov") else {
        return nil
    }
    
    let url = URL(fileURLWithPath: urlString)
    let item = AVPlayerItem(url: url)
    let player = AVPlayer(playerItem: item)
    
    return SKVideoNode(avPlayer: player)
}()
```

## See Also

### Creating a Video Node

- [init(fileNamed:)](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [init(url:)](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [init(coder:)](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [init(videoFileNamed:)](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [init(videoURL:)](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.

# initWithAVPlayer: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.

## Declaration

```objectivec
- (instancetype) initWithAVPlayer:(AVPlayer *) player;
```

## Parameters

- `player`: A player object.

<a id="return-value"></a>

## Return Value

An initialized video node.

<a id="Discussion"></a>

## Discussion

You can use the [AVPlayer](../../avfoundation/avplayer.md) object to control playback.

Listing 1 shows, in Swift, how you can create a video node using the [initWithAVPlayer:](init%28avplayer_%29-9ydbu.md) initializer.

Listing 1. Creating a video node with an AV Player

```swift
var videoNode: SKVideoNode? = {
    guard let urlString = Bundle.main.path(forResource: "sample", ofType: "mov") else {
        return nil
    }
    
    let url = URL(fileURLWithPath: urlString)
    let item = AVPlayerItem(url: url)
    let player = AVPlayer(playerItem: item)
    
    return SKVideoNode(avPlayer: player)
}()
```

## See Also

### Creating a Video Node

- [videoNodeWithFileNamed:](videonodewithfilenamed_.md): Creates and initializes a new video node using a video file stored in the app bundle.
- [videoNodeWithAVPlayer:](videonodewithavplayer_.md): Creates and initializes a video node using an existing video player object.
- [videoNodeWithURL:](videonodewithurl_.md): Creates and initializes a video node using a URL that points to a video file.
- [initWithFileNamed:](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [initWithURL:](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [initWithVideoFileNamed:](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [initWithVideoURL:](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.
