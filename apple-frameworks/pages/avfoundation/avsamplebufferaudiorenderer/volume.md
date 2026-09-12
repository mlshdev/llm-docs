> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorenderer/volume](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/volume)

# volume (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The current audio volume for the audio renderer.

## Declaration

```swift
var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property for frequent vloume changes; for example, a volume knob or fader. A value of `0.0` silences all audio while a value of `1.0` plays all audio at full volume.

## See Also

### Managing audio output

- [isMuted](ismuted.md): A Boolean value that indicates whether audio for the renderer is in a muted state.
- [audioOutputDeviceUniqueID](audiooutputdeviceuniqueid.md): The unique identifier of the output device used to play audio.

# volume (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The current audio volume for the audio renderer.

## Declaration

```objectivec
@property (nonatomic) float volume;
```

<a id="Discussion"></a>

## Discussion

Use this property for frequent vloume changes; for example, a volume knob or fader. A value of `0.0` silences all audio while a value of `1.0` plays all audio at full volume.

## See Also

### Managing audio output

- [muted](ismuted.md): A Boolean value that indicates whether audio for the renderer is in a muted state.
- [audioOutputDeviceUniqueID](audiooutputdeviceuniqueid.md): The unique identifier of the output device used to play audio.
