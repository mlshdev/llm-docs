> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/videonodewithfilenamed:](https://developer.apple.com/documentation/spritekit/skvideonode/videonodewithfilenamed:)

# videoNodeWithFileNamed:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new video node using a video file stored in the app bundle.

## Declaration

```objectivec
+ (SKVideoNode *) videoNodeWithFileNamed:(NSString *) videoFile;
```

## Parameters

- `videoFile`: The name of the video file.

<a id="return-value"></a>

## Return Value

A new video node.

## See Also

### Creating a Video Node

- [videoNodeWithAVPlayer:](videonodewithavplayer_.md): Creates and initializes a video node using an existing video player object.
- [videoNodeWithURL:](videonodewithurl_.md): Creates and initializes a video node using a URL that points to a video file.
- [initWithAVPlayer:](init%28avplayer_%29-9ydbu.md): Initializes a video node using an existing [AVPlayer](../../avfoundation/avplayer.md) object.
- [initWithFileNamed:](init%28filenamed_%29.md): Initializes a video node using a video file stored in the app bundle.
- [initWithURL:](init%28url_%29-2im38.md): Initializes a video node using a URL.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize a video node that was created from an archive.
- [initWithVideoFileNamed:](init%28videofilenamed_%29.md): Deprecated. Initializes a video node using a video file stored in the app bundle.
- [initWithVideoURL:](init%28videourl_%29.md): Deprecated. Initializes a video node using a URL that points to a video file.
