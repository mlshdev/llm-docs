> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosourcenode/init(renderblock:)](https://developer.apple.com/documentation/avfaudio/avaudiosourcenode/init(renderblock:))

# init(renderBlock:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an audio source node with a block that supplies audio data.

## Declaration

```swift
init(renderBlock block: @escaping AVAudioSourceNodeRenderBlock)
```

## Parameters

- `block`: The block to supply audio data to the output.

<a id="Discussion"></a>

## Discussion

When connecting the audio source node to another node, the system uses the connection format to set the audio format for the output bus.

Depending on the audio engine’s operating mode, call the block on real-time or nonreal-time threads. When rendering to a device, avoid making blocking calls within the block.

The system sets the node’s output format using the audio format for the render block. When reconnecting the node with a different output format, the audio format for the block changes.

## See Also

### Creating an Audio Source Node

- [AVAudioSourceNodeRenderBlock](../avaudiosourcenoderenderblock.md): A block that supplies audio data to an audio source node.
- [init(format:renderBlock:)](init%28format_renderblock_%29.md): Creates an audio source node with the audio format and a block that supplies audio data.

# initWithRenderBlock: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an audio source node with a block that supplies audio data.

## Declaration

```objectivec
- (instancetype) initWithRenderBlock:(AVAudioSourceNodeRenderBlock) block;
```

## Parameters

- `block`: The block to supply audio data to the output.

<a id="Discussion"></a>

## Discussion

When connecting the audio source node to another node, the system uses the connection format to set the audio format for the output bus.

Depending on the audio engine’s operating mode, call the block on real-time or nonreal-time threads. When rendering to a device, avoid making blocking calls within the block.

The system sets the node’s output format using the audio format for the render block. When reconnecting the node with a different output format, the audio format for the block changes.

## See Also

### Creating an Audio Source Node

- [AVAudioSourceNodeRenderBlock](../avaudiosourcenoderenderblock.md): A block that supplies audio data to an audio source node.
- [initWithFormat:renderBlock:](init%28format_renderblock_%29.md): Creates an audio source node with the audio format and a block that supplies audio data.
