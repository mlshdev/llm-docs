> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/augraphnewnodesubgraph(_:_:)](https://developer.apple.com/documentation/audiotoolbox/augraphnewnodesubgraph(_:_:))

# AUGraphNewNodeSubGraph(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 27.0)

Creates a node object to represent a subgraph.

> no longer supported

## Declaration

```swift
func AUGraphNewNodeSubGraph(_ inGraph: AUGraph, _ outNode: UnsafeMutablePointer<AUNode>) -> OSStatus
```

## Parameters

- `inGraph`: The AUGraph object that you want to add a subgraph to.
- `outNode`: The node that represents the subgraph.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

This function creates a node that represents a subgraph. The subgraph can be retrieved with the [AUGraphGetNodeInfoSubGraph(\_:\_:\_:)](augraphgetnodeinfosubgraph%28______%29.md) function. The subgraph is owned by the parent graph and will be disposed when the parent graph is disposed or when the node is removed from the parent graph.

## See Also

### Audio Unit Processing Graph Services Functions

- [AUGraphAddNode(\_:\_:\_:)](augraphaddnode%28______%29.md): Deprecated. Adds a node to an audio processing graph.
- [AUGraphAddRenderNotify(\_:\_:\_:)](augraphaddrendernotify%28______%29.md): Deprecated. Adds a render notification callback to an audio processing graph.
- [AUGraphClearConnections(\_:)](augraphclearconnections%28__%29.md): Deprecated. Clears all of the interactions in an audio unit processing graph.
- [AUGraphClose(\_:)](augraphclose%28__%29.md): Deprecated. Closes an audio unit processing graph.
- [AUGraphConnectNodeInput(\_:\_:\_:\_:\_:)](augraphconnectnodeinput%28__________%29.md): Deprecated. Connects one node’s output to another node’s input.
- [AUGraphCountNodeInteractions(\_:\_:\_:)](augraphcountnodeinteractions%28______%29.md): Deprecated. Retrieves the number of interactions of an audio processing graph’s node.
- [AUGraphDisconnectNodeInput(\_:\_:\_:)](augraphdisconnectnodeinput%28______%29.md): Deprecated. Disconnects a node’s input.
- [AUGraphGetCPULoad(\_:\_:)](augraphgetcpuload%28____%29.md): Deprecated. Obtains the short-term running average of the current CPU load of the audio processing graph.
- [AUGraphGetIndNode(\_:\_:\_:)](augraphgetindnode%28______%29.md): Deprecated. Gets the audio processing graph node at a given index.
- [AUGraphGetInteractionInfo(\_:\_:\_:)](augraphgetinteractioninfo%28______%29.md): Deprecated. Retrieves information about a particular interaction in an audio processing graph.
- [AUGraphGetMaxCPULoad(\_:\_:)](augraphgetmaxcpuload%28____%29.md): Deprecated. Obtains the maximum CPU load of an audio processing graph since this call was last made or since the graph was last started.
- [AUGraphGetNodeCount(\_:\_:)](augraphgetnodecount%28____%29.md): Deprecated. The number of nodes in an audio processing graph.
- [AUGraphGetNodeInfoSubGraph(\_:\_:\_:)](augraphgetnodeinfosubgraph%28______%29.md): Deprecated. Gets the audio processing subgraph object represented by a node.
- [AUGraphGetNodeInteractions(\_:\_:\_:\_:)](augraphgetnodeinteractions%28________%29.md): Deprecated. Retrieves information about the interactions in an audio processing graph for a given node.
- [AUGraphGetNumberOfInteractions(\_:\_:)](augraphgetnumberofinteractions%28____%29.md): Deprecated. Retrieves the number of interactions for an audio processing graph.

# AUGraphNewNodeSubGraph (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 27.0)

Creates a node object to represent a subgraph.

> no longer supported

## Declaration

```objectivec
extern OSStatus AUGraphNewNodeSubGraph(AUGraph inGraph, AUNode *outNode);
```

## Parameters

- `inGraph`: The AUGraph object that you want to add a subgraph to.
- `outNode`: The node that represents the subgraph.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

This function creates a node that represents a subgraph. The subgraph can be retrieved with the [AUGraphGetNodeInfoSubGraph](augraphgetnodeinfosubgraph%28______%29.md) function. The subgraph is owned by the parent graph and will be disposed when the parent graph is disposed or when the node is removed from the parent graph.

## See Also

### Audio Unit Processing Graph Services Functions

- [AUGraphAddNode](augraphaddnode%28______%29.md): Deprecated. Adds a node to an audio processing graph.
- [AUGraphAddRenderNotify](augraphaddrendernotify%28______%29.md): Deprecated. Adds a render notification callback to an audio processing graph.
- [AUGraphClearConnections](augraphclearconnections%28__%29.md): Deprecated. Clears all of the interactions in an audio unit processing graph.
- [AUGraphClose](augraphclose%28__%29.md): Deprecated. Closes an audio unit processing graph.
- [AUGraphConnectNodeInput](augraphconnectnodeinput%28__________%29.md): Deprecated. Connects one node’s output to another node’s input.
- [AUGraphCountNodeConnections](augraphcountnodeconnections.md): Deprecated. Deprecated in OS X v10.5. Instead, use [AUGraphCountNodeInteractions](augraphcountnodeinteractions%28______%29.md).
- [AUGraphCountNodeInteractions](augraphcountnodeinteractions%28______%29.md): Deprecated. Retrieves the number of interactions of an audio processing graph’s node.
- [AUGraphDisconnectNodeInput](augraphdisconnectnodeinput%28______%29.md): Deprecated. Disconnects a node’s input.
- [AUGraphGetConnectionInfo](augraphgetconnectioninfo.md): Deprecated. Deprecated in OS X v10.5. Instead, use [AUGraphGetInteractionInfo](augraphgetinteractioninfo%28______%29.md).
- [AUGraphGetCPULoad](augraphgetcpuload%28____%29.md): Deprecated. Obtains the short-term running average of the current CPU load of the audio processing graph.
- [AUGraphGetIndNode](augraphgetindnode%28______%29.md): Deprecated. Gets the audio processing graph node at a given index.
- [AUGraphGetInteractionInfo](augraphgetinteractioninfo%28______%29.md): Deprecated. Retrieves information about a particular interaction in an audio processing graph.
- [AUGraphGetMaxCPULoad](augraphgetmaxcpuload%28____%29.md): Deprecated. Obtains the maximum CPU load of an audio processing graph since this call was last made or since the graph was last started.
- [AUGraphGetNodeConnections](augraphgetnodeconnections.md): Deprecated. Deprecated in OS X v10.5. Instead, use [AUGraphGetNodeInteractions](augraphgetnodeinteractions%28________%29.md).
- [AUGraphGetNodeCount](augraphgetnodecount%28____%29.md): Deprecated. The number of nodes in an audio processing graph.
