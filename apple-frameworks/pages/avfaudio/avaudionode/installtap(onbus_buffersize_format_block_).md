> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/installtap(onbus:buffersize:format:block:)](https://developer.apple.com/documentation/avfaudio/avaudionode/installtap(onbus:buffersize:format:block:))

# installTap(onBus:bufferSize:format:block:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.

## Declaration

```swift
func installTap(onBus bus: AVAudioNodeBus, bufferSize: AVAudioFrameCount, format: AVAudioFormat?, block tapBlock: @escaping AVAudioNodeTapBlock)
```

## Parameters

- `bus`: The output bus to attach the tap to.
- `bufferSize`: The size of the incoming buffers. The implementation may choose another size.
- `format`: If non-`nil`, the framework applies this format to the output bus you specify. An error occurs when attaching to an output bus that’s already in a connected state. The tap and connection formats (if non-`nil`) on the bus need to be identical. Otherwise, the latter operation overrides the previous format.

  For `AVAudioOutputNode`, you must specify the tap format as `nil`.
- `tapBlock`: A block the framework calls with audio buffers.

<a id="Discussion"></a>

## Discussion

You can install and remove taps while the engine is in a running state. You can install only one tap on any bus.

```objc
AVAudioEngine *engine = [[AVAudioEngine alloc] init];
AVAudioInputNode *input = [engine inputNode];
AVAudioFormat *format = [input outputFormatForBus: 0];
[input installTapOnBus: 0 bufferSize: 8192 format: format block: ^(AVAudioPCMBuffer *buf, AVAudioTime *when) {
// __'__buf' contains captured audio from the node at time 'when'
}];
....
// start engine
```

> **Important**

>  The framework may invoke the `tapBlock` on a thread other than the main thread.

## See Also

### Installing and Removing an Audio Tap

- [installAudioTap(onBus:bufferSize:format:tapProvider:)](installaudiotap%28onbus_buffersize_format_tapprovider_%29.md): Install a tap on a bus using a sendable block
- [removeTap(onBus:)](removetap%28onbus_%29.md): Removes an audio tap on a bus you specify.
- [AVAudioNodeTapBlock](../avaudionodetapblock.md): The block that receives copies of the output of an audio node.

# installTapOnBus:bufferSize:format:block: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Installs an audio tap on a bus you specify to record, monitor, and observe the output of the node.

## Declaration

```objectivec
- (void) installTapOnBus:(AVAudioNodeBus) bus bufferSize:(AVAudioFrameCount) bufferSize format:(AVAudioFormat *) format block:(AVAudioNodeTapBlock) tapBlock;
```

## Parameters

- `bus`: The output bus to attach the tap to.
- `bufferSize`: The size of the incoming buffers. The implementation may choose another size.
- `format`: If non-`nil`, the framework applies this format to the output bus you specify. An error occurs when attaching to an output bus that’s already in a connected state. The tap and connection formats (if non-`nil`) on the bus need to be identical. Otherwise, the latter operation overrides the previous format.

  For `AVAudioOutputNode`, you must specify the tap format as `nil`.
- `tapBlock`: A block the framework calls with audio buffers.

<a id="Discussion"></a>

## Discussion

You can install and remove taps while the engine is in a running state. You can install only one tap on any bus.

```objc
AVAudioEngine *engine = [[AVAudioEngine alloc] init];
AVAudioInputNode *input = [engine inputNode];
AVAudioFormat *format = [input outputFormatForBus: 0];
[input installTapOnBus: 0 bufferSize: 8192 format: format block: ^(AVAudioPCMBuffer *buf, AVAudioTime *when) {
// __'__buf' contains captured audio from the node at time 'when'
}];
....
// start engine
```

> **Important**

>  The framework may invoke the `tapBlock` on a thread other than the main thread.

## See Also

### Installing and Removing an Audio Tap

- [removeTapOnBus:](removetap%28onbus_%29.md): Removes an audio tap on a bus you specify.
- [AVAudioNodeTapBlock](../avaudionodetapblock.md): The block that receives copies of the output of an audio node.
