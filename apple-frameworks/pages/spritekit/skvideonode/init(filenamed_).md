> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/init(filenamed:)](https://developer.apple.com/documentation/spritekit/skvideonode/init(filenamed:))

# init(fileNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a video node using a video file stored in the app bundle.

## Declaration

```swift
init(fileNamed videoFile: String)
```

## Parameters

- `videoFile`: The name of the video file.

<a id="return-value"></a>

## Return Value

An initialized video node.

## See Also

### Creating a Video Node

- [init(avPlayer:)](init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.
- [init(url:)](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [init(coder:)](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [init(videoFileNamed:)](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [init(videoURL:)](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.

# initWithFileNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a video node using a video file stored in the app bundle.

## Declaration

```objectivec
- (instancetype) initWithFileNamed:(NSString *) videoFile;
```

## Parameters

- `videoFile`: The name of the video file.

<a id="return-value"></a>

## Return Value

An initialized video node.

## See Also

### Creating a Video Node

- [videoNodeWithFileNamed:](videonodewithfilenamed_.md): Creates and initializes a new video node using a video file stored in the app bundle.
- [videoNodeWithAVPlayer:](videonodewithavplayer_.md): Creates and initializes a video node using an existing video player object.
- [videoNodeWithURL:](videonodewithurl_.md): Creates and initializes a video node using a URL that points to a video file.
- [initWithAVPlayer:](init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.
- [initWithURL:](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [initWithVideoFileNamed:](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [initWithVideoURL:](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.
