> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/outputconnectionpoints(for:outputbus:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/outputconnectionpoints(for:outputbus:))

# outputConnectionPoints(for:outputBus:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns connection information about a node’s output bus.

## Declaration

```swift
func outputConnectionPoints(for node: AVAudioNode, outputBus bus: AVAudioNodeBus) -> [AVAudioConnectionPoint]
```

## Parameters

- `node`: The node with the output connections you’re querying.
- `bus`: The node’s output bus for connections you’re querying.

<a id="return-value"></a>

## Return Value

An array of `AVAudioConnectionPoint` objects with connection information on the node’s output bus.

<a id="Discussion"></a>

## Discussion

Connections are always one-to-one or one-to-many. This method returns an empty array if there are no connections on the node’s specified output bus.

## See Also

### Using Connection Points

- [AVAudioConnectionPoint](../avaudioconnectionpoint.md): A representation of either a source or destination connection point in the audio engine.
- [connect(\_:to:fromBus:format:)](connect%28__to_frombus_format_%29.md): Deprecated. Establishes a connection between a source node and multiple destination nodes.
- [inputConnectionPoint(for:inputBus:)](inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.

# outputConnectionPointsForNode:outputBus: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns connection information about a node’s output bus.

## Declaration

```objectivec
- (NSArray<AVAudioConnectionPoint *> *) outputConnectionPointsForNode:(AVAudioNode *) node outputBus:(AVAudioNodeBus) bus;
```

## Parameters

- `node`: The node with the output connections you’re querying.
- `bus`: The node’s output bus for connections you’re querying.

<a id="return-value"></a>

## Return Value

An array of `AVAudioConnectionPoint` objects with connection information on the node’s output bus.

<a id="Discussion"></a>

## Discussion

Connections are always one-to-one or one-to-many. This method returns an empty array if there are no connections on the node’s specified output bus.

## See Also

### Using Connection Points

- [AVAudioConnectionPoint](../avaudioconnectionpoint.md): A representation of either a source or destination connection point in the audio engine.
- [connect:toConnectionPoints:fromBus:format:](connect%28__to_frombus_format_%29.md): Deprecated. Establishes a connection between a source node and multiple destination nodes.
- [inputConnectionPointForNode:inputBus:](inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
