> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconnectionpoint/bus](https://developer.apple.com/documentation/avfaudio/avaudioconnectionpoint/bus)

# bus (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The bus on the node in the connection point.

## Declaration

```swift
var bus: AVAudioNodeBus { get }
```

## See Also

### Getting Connection Point Properties

- [inputConnectionPoint(for:inputBus:)](../avaudioengine/inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPoints(for:outputBus:)](../avaudioengine/outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.
- [node](node.md): The node in the connection point.

# bus (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The bus on the node in the connection point.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioNodeBus bus;
```

## See Also

### Getting Connection Point Properties

- [inputConnectionPointForNode:inputBus:](../avaudioengine/inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPointsForNode:outputBus:](../avaudioengine/outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.
- [node](node.md): The node in the connection point.
