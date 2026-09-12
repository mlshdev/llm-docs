> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/connect(_:to:frombus:tobus:format:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/connect(_:to:frombus:tobus:format:))

# connect(\_:to:fromBus:toBus:format:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Establishes a connection between two nodes, specifying the input and output busses.

## Declaration

```swift
func connect(_ node1: AVAudioNode, to node2: AVAudioNode, fromBus bus1: AVAudioNodeBus, toBus bus2: AVAudioNodeBus, format: AVAudioFormat?)
```

## Parameters

- `node1`: The source audio node.
- `node2`: The destination audio node.
- `bus1`: The output bus of the source audio node.
- `bus2`: The input bus of the destination audio node.
- `format`: If not `NULL`, the engine uses this value for the format of the source audio node’s output bus. In all cases, the engine matches the format of the destination audio node’s input bus to the source audio node’s output bus.

<a id="Discussion"></a>

## Discussion

Audio nodes have input and output busses ([AVAudioNodeBus](../avaudionodebus.md)). Use this method to establish connections between audio nodes. Connections are always one-to-one, never one-to-many or many-to-one.

> **Note**

>  This breaks any preexisting connections that involve the source’s output bus or the destination’s input bus.

## See Also

### Connecting and Disconnecting Audio Nodes

- [connectNode(\_:to:format:)](connectnode%28__to_format_%29.md)
- [connectNode(\_:to:fromBus:toBus:format:)](connectnode%28__to_frombus_tobus_format_%29.md)
- [connectNode(\_:to:fromBus:format:)](connectnode%28__to_frombus_format_%29.md)
- [connect(\_:to:format:)](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [disconnectNodeInput(\_:)](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput(\_:bus:)](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput(\_:)](disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput(\_:bus:)](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.

# connect:to:fromBus:toBus:format: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Establishes a connection between two nodes, specifying the input and output busses.

## Declaration

```objectivec
- (void) connect:(AVAudioNode *) node1 to:(AVAudioNode *) node2 fromBus:(AVAudioNodeBus) bus1 toBus:(AVAudioNodeBus) bus2 format:(AVAudioFormat *) format;
```

## Parameters

- `node1`: The source audio node.
- `node2`: The destination audio node.
- `bus1`: The output bus of the source audio node.
- `bus2`: The input bus of the destination audio node.
- `format`: If not `NULL`, the engine uses this value for the format of the source audio node’s output bus. In all cases, the engine matches the format of the destination audio node’s input bus to the source audio node’s output bus.

<a id="Discussion"></a>

## Discussion

Audio nodes have input and output busses ([AVAudioNodeBus](../avaudionodebus.md)). Use this method to establish connections between audio nodes. Connections are always one-to-one, never one-to-many or many-to-one.

> **Note**

>  This breaks any preexisting connections that involve the source’s output bus or the destination’s input bus.

## See Also

### Connecting and Disconnecting Audio Nodes

- [connect:to:format:error:](connectnode%28__to_format_%29.md)
- [connect:to:fromBus:toBus:format:error:](connectnode%28__to_frombus_tobus_format_%29.md)
- [connect:toConnectionPoints:fromBus:format:error:](connectnode%28__to_frombus_format_%29.md)
- [connect:to:format:](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [disconnectNodeInput:](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput:bus:](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput:](disconnectnodeoutput%28__%29.md): Removes all output connections of a node.
- [disconnectNodeOutput:bus:](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.
