> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/ismuted

# isMuted (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether audio for the renderer is in a muted state.

## Declaration

```swift
var isMuted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property only affects muting the renderer instance and not the device.

## See Also

### Managing audio output

- [volume](volume.md): The current audio volume for the audio renderer.
- [audioOutputDeviceUniqueID](audiooutputdeviceuniqueid.md): The unique identifier of the output device used to play audio.

# muted (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether audio for the renderer is in a muted state.

## Declaration

```objectivec
@property (nonatomic, getter=isMuted) BOOL muted;
```

<a id="Discussion"></a>

## Discussion

This property only affects muting the renderer instance and not the device.

## See Also

### Managing audio output

- [volume](volume.md): The current audio volume for the audio renderer.
- [audioOutputDeviceUniqueID](audiooutputdeviceuniqueid.md): The unique identifier of the output device used to play audio.
