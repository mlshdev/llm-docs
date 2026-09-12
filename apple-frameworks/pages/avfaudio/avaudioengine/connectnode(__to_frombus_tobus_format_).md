> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/connectnode(_:to:frombus:tobus:format:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/connectnode(_:to:frombus:tobus:format:))

# connectNode(\_:to:fromBus:toBus:format:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func connectNode(_ node1: AVAudioNode, to node2: AVAudioNode, fromBus bus1: AVAudioNodeBus, toBus bus2: AVAudioNodeBus, format: AVAudioFormat?) throws
```

## Parameters

- `node1`: The source node
- `node2`: The destination node
- `bus1`: The output bus on the source node
- `bus2`: The input bus on the destination node
- `format`: If non-nil, the format of the source node’s output bus is set to this format. In all cases, the format of the destination node’s input bus is set to match that of the source node’s output bus.

<a id="discussion"></a>

## Discussion

Establish a connection between two nodes.

Nodes have input and output buses (AVAudioNodeBus). Use this method to establish one-to-one connections betweeen nodes. Connections made using this method are always one-to-one, never one-to-many or many-to-one.

Note that any pre-existing connection(s) involving the source’s output bus or the destination’s input bus will be broken.

## See Also

### Connecting and Disconnecting Audio Nodes

- [connectNode(\_:to:format:)](connectnode%28__to_format_%29.md)
- [connectNode(\_:to:fromBus:format:)](connectnode%28__to_frombus_format_%29.md)
- [connect(\_:to:format:)](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect(\_:to:fromBus:toBus:format:)](connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput(\_:)](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput(\_:bus:)](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput(\_:)](disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput(\_:bus:)](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.

# connect:to:fromBus:toBus:format:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (BOOL) connect:(AVAudioNode *) node1 to:(AVAudioNode *) node2 fromBus:(AVAudioNodeBus) bus1 toBus:(AVAudioNodeBus) bus2 format:(AVAudioFormat *) format error:(NSError **) error;
```

## Parameters

- `node1`: The source node
- `node2`: The destination node
- `bus1`: The output bus on the source node
- `bus2`: The input bus on the destination node
- `format`: If non-nil, the format of the source node’s output bus is set to this format. In all cases, the format of the destination node’s input bus is set to match that of the source node’s output bus.
- `error`: On exit, if an error occurs, a description of the error

<a id="return-value"></a>

## Return Value

YES for success

<a id="discussion"></a>

## Discussion

Establish a connection between two nodes.

Nodes have input and output buses (AVAudioNodeBus). Use this method to establish one-to-one connections betweeen nodes. Connections made using this method are always one-to-one, never one-to-many or many-to-one.

Note that any pre-existing connection(s) involving the source’s output bus or the destination’s input bus will be broken.

## See Also

### Connecting and Disconnecting Audio Nodes

- [connect:to:format:error:](connectnode%28__to_format_%29.md)
- [connect:toConnectionPoints:fromBus:format:error:](connectnode%28__to_frombus_format_%29.md)
- [connect:to:format:](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect:to:fromBus:toBus:format:](connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput:](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput:bus:](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput:](disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput:bus:](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.
