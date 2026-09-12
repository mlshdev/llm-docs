> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudionode/numberofinputs](https://developer.apple.com/documentation/avfaudio/avaudionode/numberofinputs)

# numberOfInputs (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of input busses for the node.

## Declaration

```swift
var numberOfInputs: Int { get }
```

## See Also

### Configuring an Input Format Bus

- [AVAudioNodeBus](../avaudionodebus.md): The index of a bus on an audio node.
- [inputFormat(forBus:)](inputformat%28forbus_%29.md): Gets the input format for the bus you specify.
- [name(forInputBus:)](name%28forinputbus_%29.md): Gets the name of the input bus you specify.

# numberOfInputs (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of input busses for the node.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger numberOfInputs;
```

## See Also

### Configuring an Input Format Bus

- [AVAudioNodeBus](../avaudionodebus.md): The index of a bus on an audio node.
- [inputFormatForBus:](inputformat%28forbus_%29.md): Gets the input format for the bus you specify.
- [nameForInputBus:](name%28forinputbus_%29.md): Gets the name of the input bus you specify.
