> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosinknode/init(receiverblock:)](https://developer.apple.com/documentation/avfaudio/avaudiosinknode/init(receiverblock:))

# init(receiverBlock:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an audio sink node with a block that receives audio data.

## Declaration

```swift
init(receiverBlock block: @escaping AVAudioSinkNodeReceiverBlock)
```

## Parameters

- `block`: The block that receives audio data from the input.

<a id="Discussion"></a>

## Discussion

When connecting the audio sink node to another node, the system uses the connection format to set the audio format for the input bus.

The system calls the block on the real-time thread when receiving input data. Avoid making blocking calls within the block.

When receiving data, the system sets the audio format using the node’s input format.

## See Also

### Creating an Audio Sink Node

- [AVAudioSinkNodeReceiverBlock](../avaudiosinknodereceiverblock.md): A block that receives audio data from an audio sink node.

# initWithReceiverBlock: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an audio sink node with a block that receives audio data.

## Declaration

```objectivec
- (instancetype) initWithReceiverBlock:(AVAudioSinkNodeReceiverBlock) block;
```

## Parameters

- `block`: The block that receives audio data from the input.

<a id="Discussion"></a>

## Discussion

When connecting the audio sink node to another node, the system uses the connection format to set the audio format for the input bus.

The system calls the block on the real-time thread when receiving input data. Avoid making blocking calls within the block.

When receiving data, the system sets the audio format using the node’s input format.

## See Also

### Creating an Audio Sink Node

- [AVAudioSinkNodeReceiverBlock](../avaudiosinknodereceiverblock.md): A block that receives audio data from an audio sink node.
