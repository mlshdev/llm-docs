> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionodetapblock](https://developer.apple.com/documentation/avfaudio/avaudionodetapblock)

# AVAudioNodeTapBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The block that receives copies of the output of an audio node.

## Declaration

```swift
typealias AVAudioNodeTapBlock = (AVAudioPCMBuffer, AVAudioTime) -> Void
```

## Parameters

- `buffer`: A buffer of audio the system captures from the output of an audio node`.`
- `when`: The time the system captures the buffer.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The framework may invoke this callback on a thread other than the main thread.

## See Also

### Installing and Removing an Audio Tap

- [installAudioTap(onBus:bufferSize:format:tapProvider:)](avaudionode/installaudiotap%28onbus_buffersize_format_tapprovider_%29.md): Install a tap on a bus using a sendable block
- [installTap(onBus:bufferSize:format:block:)](avaudionode/installtap%28onbus_buffersize_format_block_%29.md): Deprecated. Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.
- [removeTap(onBus:)](avaudionode/removetap%28onbus_%29.md): Removes an audio tap on a bus you specify.

# AVAudioNodeTapBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The block that receives copies of the output of an audio node.

## Declaration

```objectivec
typedef void (^)(AVAudioPCMBuffer *, AVAudioTime *) AVAudioNodeTapBlock;
```

## Parameters

- `buffer`: A buffer of audio the system captures from the output of an audio node`.`
- `when`: The time the system captures the buffer.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The framework may invoke this callback on a thread other than the main thread.

## See Also

### Installing and Removing an Audio Tap

- [installTapOnBus:bufferSize:format:block:](avaudionode/installtap%28onbus_buffersize_format_block_%29.md): Deprecated. Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.
- [removeTapOnBus:](avaudionode/removetap%28onbus_%29.md): Removes an audio tap on a bus you specify.
