> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/inputformat(forbus:)](https://developer.apple.com/documentation/avfaudio/avaudionode/inputformat(forbus:))

# inputFormat(forBus:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the input format for the bus you specify.

## Declaration

```swift
func inputFormat(forBus bus: AVAudioNodeBus) -> AVAudioFormat
```

## Parameters

- `bus`: An audio node bus.

<a id="return-value"></a>

## Return Value

An [AVAudioFormat](../avaudioformat.md) instance that represents the input format of the bus.

## See Also

### Related Documentation

- [AVFoundation Programming Guide](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AVFoundationPG/Articles/00_Introduction.html#//apple_ref/doc/uid/TP40010188)

### Configuring an Input Format Bus

- [AVAudioNodeBus](../avaudionodebus.md): The index of a bus on an audio node.
- [name(forInputBus:)](name%28forinputbus_%29.md): Gets the name of the input bus you specify.
- [numberOfInputs](numberofinputs.md): The number of input busses for the node.

# inputFormatForBus: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the input format for the bus you specify.

## Declaration

```objectivec
- (AVAudioFormat *) inputFormatForBus:(AVAudioNodeBus) bus;
```

## Parameters

- `bus`: An audio node bus.

<a id="return-value"></a>

## Return Value

An [AVAudioFormat](../avaudioformat.md) instance that represents the input format of the bus.

## See Also

### Related Documentation

- [AVFoundation Programming Guide](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AVFoundationPG/Articles/00_Introduction.html#//apple_ref/doc/uid/TP40010188)

### Configuring an Input Format Bus

- [AVAudioNodeBus](../avaudionodebus.md): The index of a bus on an audio node.
- [nameForInputBus:](name%28forinputbus_%29.md): Gets the name of the input bus you specify.
- [numberOfInputs](numberofinputs.md): The number of input busses for the node.
