> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/connectnode(_:to:frombus:format:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/connectnode(_:to:frombus:format:))

# connectNode(\_:to:fromBus:format:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func connectNode(_ sourceNode: AVAudioNode, to destNodes: [AVAudioConnectionPoint], fromBus sourceBus: AVAudioNodeBus, format: AVAudioFormat?) throws
```

## Parameters

- `sourceNode`: The source node
- `destNodes`: An array of AVAudioConnectionPoint objects specifying destination nodes and busses
- `sourceBus`: The output bus on source node
- `format`: If non-nil, the format of the source node’s output bus is set to this format. In all cases, the format of the destination nodes’ input bus is set to match that of the source node’s output bus

<a id="discussion"></a>

## Discussion

Establish connections between a source node and multiple destination nodes.

Use this method to establish connections from a source node to multiple destination nodes. Connections made using this method are either one-to-one (when a single destination connection is specified) or one-to-many (when multiple connections are specified), but never many-to-one.

To incrementally add a new connection to a source node, use this method with an array of AVAudioConnectionPoint objects comprising of pre-existing connections (obtained from `outputConnectionPointsForNode:outputBus:`) and the new connection.

Note that any pre-existing connection involving the destination’s input bus will be broken. And, any pre-existing connection on source node which is not a part of the specified destination connection array will also be broken.

Also note that when the output of a node is split into multiple paths, all the paths must render at the same rate until they reach a common mixer. In other words, starting from the split node until the common mixer node where all split paths terminate, you cannot have:

- any AVAudioUnitTimeEffect
- any sample rate conversion

## See Also

### Connecting and Disconnecting Audio Nodes

- [connectNode(\_:to:format:)](connectnode%28__to_format_%29.md)
- [connectNode(\_:to:fromBus:toBus:format:)](connectnode%28__to_frombus_tobus_format_%29.md)
- [connect(\_:to:format:)](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect(\_:to:fromBus:toBus:format:)](connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput(\_:)](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput(\_:bus:)](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput(\_:)](disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput(\_:bus:)](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.

# connect:toConnectionPoints:fromBus:format:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
- (BOOL) connect:(AVAudioNode *) sourceNode toConnectionPoints:(NSArray<AVAudioConnectionPoint *> *) destNodes fromBus:(AVAudioNodeBus) sourceBus format:(AVAudioFormat *) format error:(NSError **) error;
```

## Parameters

- `sourceNode`: The source node
- `destNodes`: An array of AVAudioConnectionPoint objects specifying destination nodes and busses
- `sourceBus`: The output bus on source node
- `format`: If non-nil, the format of the source node’s output bus is set to this format. In all cases, the format of the destination nodes’ input bus is set to match that of the source node’s output bus
- `error`: On exit, if an error occurs, a description of the error

<a id="return-value"></a>

## Return Value

YES for success

<a id="discussion"></a>

## Discussion

Establish connections between a source node and multiple destination nodes.

Use this method to establish connections from a source node to multiple destination nodes. Connections made using this method are either one-to-one (when a single destination connection is specified) or one-to-many (when multiple connections are specified), but never many-to-one.

To incrementally add a new connection to a source node, use this method with an array of AVAudioConnectionPoint objects comprising of pre-existing connections (obtained from `outputConnectionPointsForNode:outputBus:`) and the new connection.

Note that any pre-existing connection involving the destination’s input bus will be broken. And, any pre-existing connection on source node which is not a part of the specified destination connection array will also be broken.

Also note that when the output of a node is split into multiple paths, all the paths must render at the same rate until they reach a common mixer. In other words, starting from the split node until the common mixer node where all split paths terminate, you cannot have:

- any AVAudioUnitTimeEffect
- any sample rate conversion

## See Also

### Connecting and Disconnecting Audio Nodes

- [connect:to:format:error:](connectnode%28__to_format_%29.md)
- [connect:to:fromBus:toBus:format:error:](connectnode%28__to_frombus_tobus_format_%29.md)
- [connect:to:format:](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect:to:fromBus:toBus:format:](connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput:](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput:bus:](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput:](disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput:bus:](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.
