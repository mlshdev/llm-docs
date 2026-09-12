> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/disablemanualrenderingmode()](https://developer.apple.com/documentation/avfaudio/avaudioengine/disablemanualrenderingmode())

# disableManualRenderingMode() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sets the engine to render to or from an audio device.

## Declaration

```swift
func disableManualRenderingMode()
```

## See Also

### Manually Rendering an Audio Engine

- [enableManualRenderingMode(\_:format:maximumFrameCount:)](enablemanualrenderingmode%28__format_maximumframecount_%29.md): Sets the engine to operate in manual rendering mode with the render format and maximum frame count you specify.
- [renderOffline(\_:to:)](renderoffline%28__to_%29.md): Makes a render call to the engine operating in the offline manual rendering mode.

# disableManualRenderingMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sets the engine to render to or from an audio device.

## Declaration

```objectivec
- (void) disableManualRenderingMode;
```

## See Also

### Manually Rendering an Audio Engine

- [enableManualRenderingMode:format:maximumFrameCount:error:](enablemanualrenderingmode%28__format_maximumframecount_%29.md): Sets the engine to operate in manual rendering mode with the render format and maximum frame count you specify.
- [renderOffline:toBuffer:error:](renderoffline%28__to_%29.md): Makes a render call to the engine operating in the offline manual rendering mode.
