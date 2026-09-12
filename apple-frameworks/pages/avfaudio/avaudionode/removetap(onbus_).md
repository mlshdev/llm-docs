> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/removetap(onbus:)](https://developer.apple.com/documentation/avfaudio/avaudionode/removetap(onbus:))

# removeTap(onBus:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes an audio tap on a bus you specify.

## Declaration

```swift
func removeTap(onBus bus: AVAudioNodeBus)
```

## Parameters

- `bus`: The node output bus with the tap to remove.

## See Also

### Installing and Removing an Audio Tap

- [installAudioTap(onBus:bufferSize:format:tapProvider:)](installaudiotap%28onbus_buffersize_format_tapprovider_%29.md): Install a tap on a bus using a sendable block
- [installTap(onBus:bufferSize:format:block:)](installtap%28onbus_buffersize_format_block_%29.md): Deprecated. Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.
- [AVAudioNodeTapBlock](../avaudionodetapblock.md): The block that receives copies of the output of an audio node.

# removeTapOnBus: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes an audio tap on a bus you specify.

## Declaration

```objectivec
- (void) removeTapOnBus:(AVAudioNodeBus) bus;
```

## Parameters

- `bus`: The node output bus with the tap to remove.

## See Also

### Installing and Removing an Audio Tap

- [installTapOnBus:bufferSize:format:block:](installtap%28onbus_buffersize_format_block_%29.md): Deprecated. Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.
- [AVAudioNodeTapBlock](../avaudionodetapblock.md): The block that receives copies of the output of an audio node.
