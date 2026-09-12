> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/name(foroutputbus:)](https://developer.apple.com/documentation/avfaudio/avaudionode/name(foroutputbus:))

# name(forOutputBus:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the name of the output bus you specify.

## Declaration

```swift
func name(forOutputBus bus: AVAudioNodeBus) -> String?
```

## Parameters

- `bus`: The output bus from an audio node.

<a id="return-value"></a>

## Return Value

The name of the output bus.

## See Also

### Creating an Output Format Bus

- [outputFormat(forBus:)](outputformat%28forbus_%29.md): Retrieves the output format for the bus you specify.
- [numberOfOutputs](numberofoutputs.md): The number of output busses for the node.

# nameForOutputBus: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the name of the output bus you specify.

## Declaration

```objectivec
- (NSString *) nameForOutputBus:(AVAudioNodeBus) bus;
```

## Parameters

- `bus`: The output bus from an audio node.

<a id="return-value"></a>

## Return Value

The name of the output bus.

## See Also

### Creating an Output Format Bus

- [outputFormatForBus:](outputformat%28forbus_%29.md): Retrieves the output format for the bus you specify.
- [numberOfOutputs](numberofoutputs.md): The number of output busses for the node.
