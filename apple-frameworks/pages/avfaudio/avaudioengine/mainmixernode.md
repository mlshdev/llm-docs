> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/mainmixernode](https://developer.apple.com/documentation/avfaudio/avaudioengine/mainmixernode)

# mainMixerNode (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio engine’s optional singleton main mixer node.

## Declaration

```swift
var mainMixerNode: AVAudioMixerNode { get }
```

<a id="Discussion"></a>

## Discussion

The audio engine constructs a singleton main mixer and connects it to the [outputNode](outputnode.md) when first accessing this property. You can then connect additional audio nodes to the mixer.

If the client never sets the connection format between the `mainMixerNode` and the `outputNode`, the engine always updates the format to track the format of the `outputNode` on startup or restart, even after an [AVAudioEngineConfigurationChangeNotification](../avaudioengineconfigurationchangenotification.md). Otherwise, it’s the client’s responsibility to update the connection format after an [AVAudioEngineConfigurationChangeNotification](../avaudioengineconfigurationchangenotification.md).

By default, the mixer’s output format (sample rate and channel count) tracks the format of the output node.

## See Also

### Getting the Input, Output, and Main Mixer Nodes

- [inputNode](inputnode.md): The audio engine’s singleton input audio node.
- [outputNode](outputnode.md): The audio engine’s singleton output audio node.

# mainMixerNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The audio engine’s optional singleton main mixer node.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioMixerNode * mainMixerNode;
```

<a id="Discussion"></a>

## Discussion

The audio engine constructs a singleton main mixer and connects it to the [outputNode](outputnode.md) when first accessing this property. You can then connect additional audio nodes to the mixer.

If the client never sets the connection format between the `mainMixerNode` and the `outputNode`, the engine always updates the format to track the format of the `outputNode` on startup or restart, even after an [AVAudioEngineConfigurationChangeNotification](../avaudioengineconfigurationchangenotification.md). Otherwise, it’s the client’s responsibility to update the connection format after an [AVAudioEngineConfigurationChangeNotification](../avaudioengineconfigurationchangenotification.md).

By default, the mixer’s output format (sample rate and channel count) tracks the format of the output node.

## See Also

### Getting the Input, Output, and Main Mixer Nodes

- [inputNode](inputnode.md): The audio engine’s singleton input audio node.
- [outputNode](outputnode.md): The audio engine’s singleton output audio node.
