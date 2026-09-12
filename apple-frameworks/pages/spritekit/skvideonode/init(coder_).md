> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/init(coder:)](https://developer.apple.com/documentation/spritekit/skvideonode/init(coder:))

# init(coder:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells you when to initialize a video node that was created from an archive.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

<a id="Discussion"></a>

## Discussion

Do not call this initializer yourself; it is called by the system when you should intialize a video node that was created from an archive.

## See Also

### Creating a Video Node

- [init(avPlayer:)](init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.
- [init(fileNamed:)](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [init(url:)](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [init(videoFileNamed:)](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [init(videoURL:)](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.

# initWithCoder: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells you when to initialize a video node that was created from an archive.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

<a id="Discussion"></a>

## Discussion

Do not call this initializer yourself; it is called by the system when you should intialize a video node that was created from an archive.

## See Also

### Creating a Video Node

- [videoNodeWithFileNamed:](videonodewithfilenamed_.md): Creates and initializes a new video node using a video file stored in the app bundle.
- [videoNodeWithAVPlayer:](videonodewithavplayer_.md): Creates and initializes a video node using an existing video player object.
- [videoNodeWithURL:](videonodewithurl_.md): Creates and initializes a video node using a URL that points to a video file.
- [initWithAVPlayer:](init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.
- [initWithFileNamed:](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [initWithURL:](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [initWithVideoFileNamed:](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [initWithVideoURL:](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.
