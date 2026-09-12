> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/inputconnectionpoint(for:inputbus:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/inputconnectionpoint(for:inputbus:))

# inputConnectionPoint(for:inputBus:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns connection information about a node’s input bus.

## Declaration

```swift
func inputConnectionPoint(for node: AVAudioNode, inputBus bus: AVAudioNodeBus) -> AVAudioConnectionPoint?
```

## Parameters

- `node`: The node with the input connection you’re querying.
- `bus`: The node’s input bus for the connection you’re querying.

<a id="return-value"></a>

## Return Value

An `AVAudioConnectionPoint` object with connection information on the node’s input bus.

<a id="Discussion"></a>

## Discussion

Connections are always one-to-one or one-to-many. This method returns `nil` if there’s no connection on the node’s specified input bus.

## See Also

### Using Connection Points

- [AVAudioConnectionPoint](../avaudioconnectionpoint.md): A representation of either a source or destination connection point in the audio engine.
- [connect(\_:to:fromBus:format:)](connect%28__to_frombus_format_%29.md): Deprecated. Establishes a connection between a source node and multiple destination nodes.
- [outputConnectionPoints(for:outputBus:)](outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.

# inputConnectionPointForNode:inputBus: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns connection information about a node’s input bus.

## Declaration

```objectivec
- (AVAudioConnectionPoint *) inputConnectionPointForNode:(AVAudioNode *) node inputBus:(AVAudioNodeBus) bus;
```

## Parameters

- `node`: The node with the input connection you’re querying.
- `bus`: The node’s input bus for the connection you’re querying.

<a id="return-value"></a>

## Return Value

An `AVAudioConnectionPoint` object with connection information on the node’s input bus.

<a id="Discussion"></a>

## Discussion

Connections are always one-to-one or one-to-many. This method returns `nil` if there’s no connection on the node’s specified input bus.

## See Also

### Using Connection Points

- [AVAudioConnectionPoint](../avaudioconnectionpoint.md): A representation of either a source or destination connection point in the audio engine.
- [connect:toConnectionPoints:fromBus:format:](connect%28__to_frombus_format_%29.md): Deprecated. Establishes a connection between a source node and multiple destination nodes.
- [outputConnectionPointsForNode:outputBus:](outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.
