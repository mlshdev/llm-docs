> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/installaudiotap(onbus:buffersize:format:tapprovider:)](https://developer.apple.com/documentation/avfaudio/avaudionode/installaudiotap(onbus:buffersize:format:tapprovider:))

# installAudioTap(onBus:bufferSize:format:tapProvider:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Install a tap on a bus using a sendable block

## Declaration

```swift
func installAudioTap(onBus bus: AVAudioNodeBus, bufferSize: AVAudioFrameCount, format: AVAudioFormat?, tapProvider: @escaping @Sendable (AVReadOnlyAudioPCMBuffer, AVAudioTime) -> Void) throws
```

## Parameters

- `bus`: The node output bus to which to attach the tap
- `bufferSize`: The requested size of incoming buffers in sample frames. Supported range is \[100, 400\] ms.
- `format`: If non-nil, attempts to apply this as the format of the specified output bus
- `tapProvider`: A sendable closure to be called with read-only audio buffers

<a id="discussion"></a>

## Discussion

This method installs a tap that receives read-only buffers safe for concurrent use. The tap block is sendable and can be safely called from any isolation domain.

Only one tap may be installed on any bus. Taps may be safely installed and removed while the engine is running.

## See Also

### Installing and Removing an Audio Tap

- [installTap(onBus:bufferSize:format:block:)](installtap%28onbus_buffersize_format_block_%29.md): Deprecated. Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.
- [removeTap(onBus:)](removetap%28onbus_%29.md): Removes an audio tap on a bus you specify.
- [AVAudioNodeTapBlock](../avaudionodetapblock.md): The block that receives copies of the output of an audio node.
