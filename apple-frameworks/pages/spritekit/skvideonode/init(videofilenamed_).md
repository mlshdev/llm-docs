> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/init(videofilenamed:)](https://developer.apple.com/documentation/spritekit/skvideonode/init(videofilenamed:))

# init(videoFileNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a video node using a video file stored in the app bundle.

> Use [init(fileNamed:)](init%28filenamed_%29.md) instead.

## Declaration

```swift
init(videoFileNamed videoFile: String)
```

## Parameters

- `videoFile`: The name of the video file.

<a id="return-value"></a>

## Return Value

An initialized video node.

## See Also

### Creating a Video Node

- [init(avPlayer:)](init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.
- [init(fileNamed:)](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [init(url:)](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [init(coder:)](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [init(videoURL:)](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.

# initWithVideoFileNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a video node using a video file stored in the app bundle.

> Use [initWithFileNamed:](init%28filenamed_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithVideoFileNamed:(NSString *) videoFile;
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
- [initWithFileNamed:](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [initWithURL:](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [initWithVideoURL:](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.
