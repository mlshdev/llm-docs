> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/disconnectnodeoutput(_:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/disconnectnodeoutput(_:))

# disconnectNodeOutput(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all output connections of a node.

## Declaration

```swift
func disconnectNodeOutput(_ node: AVAudioNode)
```

## Parameters

- `node`: The audio node with the outputs to disconnect.

## See Also

### Connecting and Disconnecting Audio Nodes

- [connectNode(\_:to:format:)](connectnode%28__to_format_%29.md)
- [connectNode(\_:to:fromBus:toBus:format:)](connectnode%28__to_frombus_tobus_format_%29.md)
- [connectNode(\_:to:fromBus:format:)](connectnode%28__to_frombus_format_%29.md)
- [connect(\_:to:format:)](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect(\_:to:fromBus:toBus:format:)](connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput(\_:)](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput(\_:bus:)](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput(\_:bus:)](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.

# disconnectNodeOutput: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all output connections of a node.

## Declaration

```objectivec
- (void) disconnectNodeOutput:(AVAudioNode *) node;
```

## Parameters

- `node`: The audio node with the outputs to disconnect.

## See Also

### Connecting and Disconnecting Audio Nodes

- [connect:to:format:error:](connectnode%28__to_format_%29.md)
- [connect:to:fromBus:toBus:format:error:](connectnode%28__to_frombus_tobus_format_%29.md)
- [connect:toConnectionPoints:fromBus:format:error:](connectnode%28__to_frombus_format_%29.md)
- [connect:to:format:](connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect:to:fromBus:toBus:format:](connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
- [disconnectNodeInput:](disconnectnodeinput%28__%29.md): Removes all input connections of the node.
- [disconnectNodeInput:bus:](disconnectnodeinput%28__bus_%29.md): Removes the input connection of a node on the specified bus.
- [disconnectNodeOutput:bus:](disconnectnodeoutput%28__bus_%29.md): Removes the output connection of a node on the specified bus.
