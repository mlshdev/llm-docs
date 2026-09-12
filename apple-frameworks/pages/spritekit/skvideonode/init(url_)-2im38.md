> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/init(url:)-2im38](https://developer.apple.com/documentation/spritekit/skvideonode/init(url:)-2im38)

# init(url:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a video node using a URL.

## Declaration

```swift
init(url: URL)
```

## Parameters

- `url`: The URL for the video to play.

<a id="return-value"></a>

## Return Value

An initialized video node.

## See Also

### Creating a Video Node

- [init(avPlayer:)](init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.
- [init(fileNamed:)](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [init(coder:)](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [init(videoFileNamed:)](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [init(videoURL:)](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.

# initWithURL: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a video node using a URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL for the video to play.

<a id="return-value"></a>

## Return Value

An initialized video node.

## See Also

### Creating a Video Node

- [videoNodeWithFileNamed:](videonodewithfilenamed_.md): Creates and initializes a new video node using a video file stored in the app bundle.
- [videoNodeWithAVPlayer:](videonodewithavplayer_.md): Creates and initializes a video node using an existing video player object.
- [videoNodeWithURL:](videonodewithurl_.md): Creates and initializes a video node using a URL that points to a video file.
- [initWithAVPlayer:](init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.
- [initWithFileNamed:](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [initWithVideoFileNamed:](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [initWithVideoURL:](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.
