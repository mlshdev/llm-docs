> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/outputformat(forbus:)](https://developer.apple.com/documentation/avfaudio/avaudionode/outputformat(forbus:))

# outputFormat(forBus:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the output format for the bus you specify.

## Declaration

```swift
func outputFormat(forBus bus: AVAudioNodeBus) -> AVAudioFormat
```

## Parameters

- `bus`: An audio node bus.

<a id="return-value"></a>

## Return Value

An [AVAudioFormat](../avaudioformat.md) instance that represents the output format of the bus.

## See Also

### Creating an Output Format Bus

- [name(forOutputBus:)](name%28foroutputbus_%29.md): Retrieves the name of the output bus you specify.
- [numberOfOutputs](numberofoutputs.md): The number of output busses for the node.

# outputFormatForBus: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the output format for the bus you specify.

## Declaration

```objectivec
- (AVAudioFormat *) outputFormatForBus:(AVAudioNodeBus) bus;
```

## Parameters

- `bus`: An audio node bus.

<a id="return-value"></a>

## Return Value

An [AVAudioFormat](../avaudioformat.md) instance that represents the output format of the bus.

## See Also

### Creating an Output Format Bus

- [nameForOutputBus:](name%28foroutputbus_%29.md): Retrieves the name of the output bus you specify.
- [numberOfOutputs](numberofoutputs.md): The number of output busses for the node.
