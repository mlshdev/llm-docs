> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudiosource/loops](https://developer.apple.com/documentation/scenekit/scnaudiosource/loops)

# loops (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the audio source should play repeatedly.

## Declaration

```swift
var loops: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), audio players using this source automatically begin playing again after playback has finished. If this value is [false](https://developer.apple.com/documentation/swift/false) (the default), the audio source plays exactly once.

## See Also

### Setting Default Playback Parameters

- [volume](volume.md): The default playback volume for the audio source.
- [rate](rate.md): The default playback rate for the audio source.
- [reverbBlend](reverbblend.md): The default blend of blend of unmodified and reverb-processed (also called dry and wet) audio for playback of the audio source.
- [shouldStream](shouldstream.md): A Boolean value that determines whether the audio source should stream content from its source URL when playing.

# loops (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the audio source should play repeatedly.

## Declaration

```objectivec
@property (nonatomic) BOOL loops;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), audio players using this source automatically begin playing again after playback has finished. If this value is [false](https://developer.apple.com/documentation/swift/false) (the default), the audio source plays exactly once.

## See Also

### Setting Default Playback Parameters

- [volume](volume.md): The default playback volume for the audio source.
- [rate](rate.md): The default playback rate for the audio source.
- [reverbBlend](reverbblend.md): The default blend of blend of unmodified and reverb-processed (also called dry and wet) audio for playback of the audio source.
- [shouldStream](shouldstream.md): A Boolean value that determines whether the audio source should stream content from its source URL when playing.
