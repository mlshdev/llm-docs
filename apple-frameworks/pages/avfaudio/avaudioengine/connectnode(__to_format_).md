> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/connectnode(_:to:format:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/connectnode(_:to:format:))

# connectNode(\_:to:format:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func connectNode(_ node1: AVAudioNode, to node2: AVAudioNode, format: AVAudioFormat?) throws
```

<a id="discussion"></a>

## Discussion

Establish a connection between two nodes

This calls connect:to:fromBus:toBus:format: using bus 0 on the source node, and bus 0 on the destination node, except in the case of a destination which is a mixer, in which case the destination is the mixer’s nextAvailableInputBus.

## See Also

### Connecting and Disconnecting Audio Nodes

- [connectNode(\_:to:fromBus:toBus:format:)](connectnode%28__to_frombus_tobus_format_%29.md)
- [connectNode(\_:to:fromBus:format:)](connectnode%28__to_frombus_format_%29.md)
- [connect(\_:to:format:)](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect(\_:to:fromBus:toBus:format:)](connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput(\_:)](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput(\_:bus:)](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput(\_:)](disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput(\_:bus:)](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.

# connect:to:format:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (BOOL) connect:(AVAudioNode *) node1 to:(AVAudioNode *) node2 format:(AVAudioFormat *) format error:(NSError **) error;
```

## Parameters

- `error`: On exit, if an error occurs, a description of the error

<a id="return-value"></a>

## Return Value

YES for success

<a id="discussion"></a>

## Discussion

Establish a connection between two nodes

This calls connect:to:fromBus:toBus:format: using bus 0 on the source node, and bus 0 on the destination node, except in the case of a destination which is a mixer, in which case the destination is the mixer’s nextAvailableInputBus.

## See Also

### Connecting and Disconnecting Audio Nodes

- [connect:to:fromBus:toBus:format:error:](connectnode%28__to_frombus_tobus_format_%29.md)
- [connect:toConnectionPoints:fromBus:format:error:](connectnode%28__to_frombus_format_%29.md)
- [connect:to:format:](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect:to:fromBus:toBus:format:](connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput:](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput:bus:](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput:](disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput:bus:](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.
