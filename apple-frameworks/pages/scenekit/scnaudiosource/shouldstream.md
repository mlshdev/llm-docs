> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudiosource/shouldstream](https://developer.apple.com/documentation/scenekit/scnaudiosource/shouldstream)

# shouldStream (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the audio source should stream content from its source URL when playing.

## Declaration

```swift
var shouldStream: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), audio players using this source do not preload audio buffer data, instead reading directly from the source file while playing audio. If this value is [false](https://developer.apple.com/documentation/swift/false), SceneKit loads audio buffer data upon playing audio from the source.

## See Also

### Setting Default Playback Parameters

- [volume](volume.md): The default playback volume for the audio source.
- [rate](rate.md): The default playback rate for the audio source.
- [reverbBlend](reverbblend.md): The default blend of blend of unmodified and reverb-processed (also called dry and wet) audio for playback of the audio source.
- [loops](loops.md): A Boolean value that determines whether the audio source should play repeatedly.

# shouldStream (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the audio source should stream content from its source URL when playing.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldStream;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), audio players using this source do not preload audio buffer data, instead reading directly from the source file while playing audio. If this value is [false](https://developer.apple.com/documentation/swift/false), SceneKit loads audio buffer data upon playing audio from the source.

## See Also

### Setting Default Playback Parameters

- [volume](volume.md): The default playback volume for the audio source.
- [rate](rate.md): The default playback rate for the audio source.
- [reverbBlend](reverbblend.md): The default blend of blend of unmodified and reverb-processed (also called dry and wet) audio for playback of the audio source.
- [loops](loops.md): A Boolean value that determines whether the audio source should play repeatedly.
