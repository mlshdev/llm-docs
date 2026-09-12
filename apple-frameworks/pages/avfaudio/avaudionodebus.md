> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionodebus](https://developer.apple.com/documentation/avfaudio/avaudionodebus)

# AVAudioNodeBus (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The index of a bus on an audio node.

## Declaration

```swift
typealias AVAudioNodeBus = Int
```

<a id="Discussion"></a>

## Discussion

An [AVAudioNodeBus](avaudionodebus.md) represents a bus as a zero-based index. [AVAudioNode](avaudionode.md) objects potentially have multiple input and output busses.

## See Also

### Configuring an Input Format Bus

- [inputFormat(forBus:)](avaudionode/inputformat%28forbus_%29.md): Gets the input format for the bus you specify.
- [name(forInputBus:)](avaudionode/name%28forinputbus_%29.md): Gets the name of the input bus you specify.
- [numberOfInputs](avaudionode/numberofinputs.md): The number of input busses for the node.

# AVAudioNodeBus (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The index of a bus on an audio node.

## Declaration

```objectivec
typedef NSUInteger AVAudioNodeBus;
```

<a id="Discussion"></a>

## Discussion

An [AVAudioNodeBus](avaudionodebus.md) represents a bus as a zero-based index. [AVAudioNode](avaudionode.md) objects potentially have multiple input and output busses.

## See Also

### Configuring an Input Format Bus

- [inputFormatForBus:](avaudionode/inputformat%28forbus_%29.md): Gets the input format for the bus you specify.
- [nameForInputBus:](avaudionode/name%28forinputbus_%29.md): Gets the name of the input bus you specify.
- [numberOfInputs](avaudionode/numberofinputs.md): The number of input busses for the node.
