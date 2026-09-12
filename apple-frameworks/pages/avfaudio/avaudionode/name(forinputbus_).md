> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/name(forinputbus:)](https://developer.apple.com/documentation/avfaudio/avaudionode/name(forinputbus:))

# name(forInputBus:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the name of the input bus you specify.

## Declaration

```swift
func name(forInputBus bus: AVAudioNodeBus) -> String?
```

## Parameters

- `bus`: The input bus from an audio node.

<a id="return-value"></a>

## Return Value

The name of the input bus.

## See Also

### Configuring an Input Format Bus

- [AVAudioNodeBus](../avaudionodebus.md): The index of a bus on an audio node.
- [inputFormat(forBus:)](inputformat%28forbus_%29.md): Gets the input format for the bus you specify.
- [numberOfInputs](numberofinputs.md): The number of input busses for the node.

# nameForInputBus: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the name of the input bus you specify.

## Declaration

```objectivec
- (NSString *) nameForInputBus:(AVAudioNodeBus) bus;
```

## Parameters

- `bus`: The input bus from an audio node.

<a id="return-value"></a>

## Return Value

The name of the input bus.

## See Also

### Configuring an Input Format Bus

- [AVAudioNodeBus](../avaudionodebus.md): The index of a bus on an audio node.
- [inputFormatForBus:](inputformat%28forbus_%29.md): Gets the input format for the bus you specify.
- [numberOfInputs](numberofinputs.md): The number of input busses for the node.
