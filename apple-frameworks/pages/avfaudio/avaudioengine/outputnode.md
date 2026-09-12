> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/outputnode](https://developer.apple.com/documentation/avfaudio/avaudioengine/outputnode)

# outputNode (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio engine’s singleton output audio node.

## Declaration

```swift
var outputNode: AVAudioOutputNode { get }
```

<a id="Discussion"></a>

## Discussion

The framework performs audio output through an output node. The audio engine creates a singleton on demand when first accessing this variable. Connect another node to the input of the output node, or get a mixer using the [mainMixerNode](mainmixernode.md) property.

When the engine renders to and from an audio device, the [AVAudioSession](../avaudiosession.md) category and the availability of hardware determines whether an app performs output. Check the output node’s output format (specifically, the hardware format) for a nonzero sample rate and channel count to see if output is in an enabled state.

Trying to perform output through the output node when it isn’t available or in an enabled state causes the engine to throw an error (when possible) or an exception.

In manual rendering mode, the output node’s format determines the render format of the engine. For more information about changing it, see [enableManualRenderingMode(\_:format:maximumFrameCount:)](enablemanualrenderingmode%28__format_maximumframecount_%29.md).

## See Also

### Getting the Input, Output, and Main Mixer Nodes

- [inputNode](inputnode.md): The audio engine’s singleton input audio node.
- [mainMixerNode](mainmixernode.md): The audio engine’s optional singleton main mixer node.

# outputNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio engine’s singleton output audio node.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioOutputNode * outputNode;
```

<a id="Discussion"></a>

## Discussion

The framework performs audio output through an output node. The audio engine creates a singleton on demand when first accessing this variable. Connect another node to the input of the output node, or get a mixer using the [mainMixerNode](mainmixernode.md) property.

When the engine renders to and from an audio device, the [AVAudioSession](../avaudiosession.md) category and the availability of hardware determines whether an app performs output. Check the output node’s output format (specifically, the hardware format) for a nonzero sample rate and channel count to see if output is in an enabled state.

Trying to perform output through the output node when it isn’t available or in an enabled state causes the engine to throw an error (when possible) or an exception.

In manual rendering mode, the output node’s format determines the render format of the engine. For more information about changing it, see [enableManualRenderingMode:format:maximumFrameCount:error:](enablemanualrenderingmode%28__format_maximumframecount_%29.md).

## See Also

### Getting the Input, Output, and Main Mixer Nodes

- [inputNode](inputnode.md): The audio engine’s singleton input audio node.
- [mainMixerNode](mainmixernode.md): The audio engine’s optional singleton main mixer node.
