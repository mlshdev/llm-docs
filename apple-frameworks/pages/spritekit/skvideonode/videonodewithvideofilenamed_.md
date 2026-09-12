> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/videonodewithvideofilenamed:](https://developer.apple.com/documentation/spritekit/skvideonode/videonodewithvideofilenamed:)

# videoNodeWithVideoFileNamed:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates and initializes a new video node using a video file stored in the app bundle.

> Use [videoNodeWithFileNamed:](videonodewithfilenamed_.md) instead.

## Declaration

```objectivec
+ (SKVideoNode *) videoNodeWithVideoFileNamed:(NSString *) videoFile;
```

## Parameters

- `videoFile`: The name of the video file.

<a id="return-value"></a>

## Return Value

A new video node.

## See Also

### Type Methods

- [videoNodeWithVideoURL:](videonodewithvideourl_.md): Deprecated. Creates and initializes a video node using a URL that points to a video file.
