> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconnectionpoint](https://developer.apple.com/documentation/avfaudio/avaudioconnectionpoint)

# AVAudioConnectionPoint (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of either a source or destination connection point in the audio engine.

## Declaration

```swift
class AVAudioConnectionPoint
```

<a id="overview"></a>

## Overview

Instances of this class are immutable.

## Topics

### Creating a Connection Point

- [init(node:bus:)](avaudioconnectionpoint/init%28node_bus_%29.md): Creates a connection point object.

### Getting Connection Point Properties

- [inputConnectionPoint(for:inputBus:)](avaudioengine/inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPoints(for:outputBus:)](avaudioengine/outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.
- [bus](avaudioconnectionpoint/bus.md): The bus on the node in the connection point.
- [node](avaudioconnectionpoint/node.md): The node in the connection point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using Connection Points

- [connect(\_:to:fromBus:format:)](avaudioengine/connect%28__to_frombus_format_%29.md): Deprecated. Establishes a connection between a source node and multiple destination nodes.
- [inputConnectionPoint(for:inputBus:)](avaudioengine/inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPoints(for:outputBus:)](avaudioengine/outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.

# AVAudioConnectionPoint (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of either a source or destination connection point in the audio engine.

## Declaration

```objectivec
@interface AVAudioConnectionPoint : NSObject
```

<a id="overview"></a>

## Overview

Instances of this class are immutable.

## Topics

### Creating a Connection Point

- [initWithNode:bus:](avaudioconnectionpoint/init%28node_bus_%29.md): Creates a connection point object.

### Getting Connection Point Properties

- [inputConnectionPointForNode:inputBus:](avaudioengine/inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPointsForNode:outputBus:](avaudioengine/outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.
- [bus](avaudioconnectionpoint/bus.md): The bus on the node in the connection point.
- [node](avaudioconnectionpoint/node.md): The node in the connection point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Using Connection Points

- [connect:toConnectionPoints:fromBus:format:](avaudioengine/connect%28__to_frombus_format_%29.md): Deprecated. Establishes a connection between a source node and multiple destination nodes.
- [inputConnectionPointForNode:inputBus:](avaudioengine/inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPointsForNode:outputBus:](avaudioengine/outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.
