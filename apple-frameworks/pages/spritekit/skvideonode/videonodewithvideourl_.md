> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skvideonode/videonodewithvideourl:](https://developer.apple.com/documentation/spritekit/skvideonode/videonodewithvideourl:)

# videoNodeWithVideoURL:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates and initializes a video node using a URL that points to a video file.

> Use [videoNodeWithURL:](videonodewithurl_.md) instead.

## Declaration

```objectivec
+ (SKVideoNode *) videoNodeWithVideoURL:(NSURL *) videoURL;
```

## Parameters

- `videoURL`: The URL for the video to play.

<a id="return-value"></a>

## Return Value

An initialized video node.

## See Also

### Type Methods

- [videoNodeWithVideoFileNamed:](videonodewithvideofilenamed_.md): Deprecated. Creates and initializes a new video node using a video file stored in the app bundle.
