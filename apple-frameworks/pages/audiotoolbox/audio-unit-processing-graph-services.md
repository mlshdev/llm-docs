> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-unit-processing-graph-services](https://developer.apple.com/documentation/audiotoolbox/audio-unit-processing-graph-services)

# Audio Unit Processing Graph Services (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Audio Unit Processing Graph Services provide interfaces for representing a set of audio units, connections between their inputs and outputs, and callbacks used to provide inputs. It also enables the embedding of sub (or child) processing graphs within parent graphs to allow for a logical organization of parts of an overall signal chain.

<a id="overview"></a>

## Overview

An audio processing graph object (of type `AUGraph`) is a complete description of an audio signal processing network. Audio Unit Processing Graph Services may manage the instantiated audio units if the `AUGraphOpen` function is called.

An audio processing graph object may be introspected to get complete information about all of the audio units in the graph. The various node objects (each of type `AUNode`) in the graph, each representing an audio unit or a sub graph, may be added or removed, and the interactions between them modified.

A graph object’s state can be manipulated in both the rendering thread and in other threads. Consequently, any activities that affect the state of the graph are guarded with locks and a messaging model between any calling thread and the thread upon which the graph object’s output unit is called (the render thread).

A graph object will have a single head node––an output unit. The output unit is used to both start and stop the rendering operations of a graph, and is the dispatch point for the safe manipulation of the state of the graph while it is running.

## Topics

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
- [AUGraphInitialize(\_:)](augraphinitialize%28__%29.md): Deprecated. Initializes an audio processing graph.
- [AUGraphIsInitialized(\_:\_:)](augraphisinitialized%28____%29.md): Deprecated. Determines whether an audio processing graph is initialized.
- [AUGraphIsNodeSubGraph(\_:\_:\_:)](augraphisnodesubgraph%28______%29.md): Deprecated. Determines whether a node object represent an audio processing graph or an audio unit.
- [AUGraphIsOpen(\_:\_:)](augraphisopen%28____%29.md): Deprecated. Determines whether an audio processing graph is open.
- [AUGraphIsRunning(\_:\_:)](augraphisrunning%28____%29.md): Deprecated. Determines whether an audio processing graph running.
- [AUGraphNewNodeSubGraph(\_:\_:)](augraphnewnodesubgraph%28____%29.md): Deprecated. Creates a node object to represent a subgraph.
- [AUGraphNodeInfo(\_:\_:\_:\_:)](augraphnodeinfo%28________%29.md): Deprecated. Returns information about a node object.
- [AUGraphOpen(\_:)](augraphopen%28__%29.md): Deprecated. Opens an audio processing graph.
- [AUGraphRemoveNode(\_:\_:)](augraphremovenode%28____%29.md): Deprecated. Removes a node from an audio processing graph.
- [AUGraphRemoveRenderNotify(\_:\_:\_:)](augraphremoverendernotify%28______%29.md): Deprecated. Removes a notification callback from an audio processing graph.
- [AUGraphSetNodeInputCallback(\_:\_:\_:\_:)](augraphsetnodeinputcallback%28________%29.md): Deprecated. Sets an input callback function for a node.
- [AUGraphStart(\_:)](augraphstart%28__%29.md): Deprecated. Starts an audio processing graph.
- [AUGraphStop(\_:)](augraphstop%28__%29.md): Deprecated. Stops an audio processing graph.
- [AUGraphUninitialize(\_:)](augraphuninitialize%28__%29.md): Deprecated. Uninitializes an audio processing graph.
- [AUGraphUpdate(\_:\_:)](augraphupdate%28____%29.md): Deprecated. Updates the state of a running audio processing graph.
- [DisposeAUGraph(\_:)](disposeaugraph%28__%29.md): Deprecated. Disposes of an audio processing graph.
- [NewAUGraph(\_:)](newaugraph%28__%29.md): Deprecated. Creates a new audio processing graph.

### Data Types

- [AudioUnitNodeConnection](audiounitnodeconnection.md): A connection between two node objects in an audio processing graph.
- [AUGraph](augraph.md): An opaque type representing an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeInteraction](aunodeinteraction.md): Describes the interaction between two node objects.
- [AUNodeRenderCallback](aunoderendercallback.md): A callback used to provide input to an audio unit.

### Constants

- [kAUNodeInteraction_Connection](1537633-kaunodeinteraction-connection.md): The different types of node interactions.

### Result Codes

This table lists the result codes defined for Audio Unit Processing Graph Services.

- [kAUGraphErr_NodeNotFound](kaugrapherr_nodenotfound.md): The specified node cannot be found.
- [kAUGraphErr_InvalidConnection](kaugrapherr_invalidconnection.md): The attempted connection between two nodes cannot be made.
- [kAUGraphErr_OutputNodeErr](kaugrapherr_outputnodeerr.md): Audio processing graphs can only contain one output unit. This error is returned if trying to add a second output unit or if the graph’s output unit is removed while the graph is running.
- [kAUGraphErr_CannotDoInCurrentContext](kaugrapherr_cannotdoincurrentcontext.md): To avoid spinning or waiting in the render thread (a bad idea!), many of the calls to AUGraph can return: `kAUGraphErr_CannotDoInCurrentContext`. This result is only generated when you call an AUGraph API from its render callback. It means that the lock that it required was held at that time, by another thread. If you see this result code, you can generally attempt the action again - typically the NEXT render cycle (so in the mean time the lock can be cleared), or you can delegate that call to another thread in your app. You should not spin or put-to-sleep the render thread.
- [kAUGraphErr_InvalidAudioUnit](kaugrapherr_invalidaudiounit.md)

# Audio Unit Processing Graph Services (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Audio Unit Processing Graph Services provide interfaces for representing a set of audio units, connections between their inputs and outputs, and callbacks used to provide inputs. It also enables the embedding of sub (or child) processing graphs within parent graphs to allow for a logical organization of parts of an overall signal chain.

<a id="overview"></a>

## Overview

An audio processing graph object (of type `AUGraph`) is a complete description of an audio signal processing network. Audio Unit Processing Graph Services may manage the instantiated audio units if the `AUGraphOpen` function is called.

An audio processing graph object may be introspected to get complete information about all of the audio units in the graph. The various node objects (each of type `AUNode`) in the graph, each representing an audio unit or a sub graph, may be added or removed, and the interactions between them modified.

A graph object’s state can be manipulated in both the rendering thread and in other threads. Consequently, any activities that affect the state of the graph are guarded with locks and a messaging model between any calling thread and the thread upon which the graph object’s output unit is called (the render thread).

A graph object will have a single head node––an output unit. The output unit is used to both start and stop the rendering operations of a graph, and is the dispatch point for the safe manipulation of the state of the graph while it is running.

## Topics

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
- [AUGraphGetNodeInfo](augraphgetnodeinfo.md): Deprecated. Deprecated in OS X v10.5. Instead, use [AUGraphNodeInfo](augraphnodeinfo%28________%29.md).
- [AUGraphGetNodeInfoSubGraph](augraphgetnodeinfosubgraph%28______%29.md): Deprecated. Gets the audio processing subgraph object represented by a node.
- [AUGraphGetNodeInteractions](augraphgetnodeinteractions%28________%29.md): Deprecated. Retrieves information about the interactions in an audio processing graph for a given node.
- [AUGraphGetNumberOfConnections](augraphgetnumberofconnections.md): Deprecated. Deprecated in OS X v10.5. Instead, use [AUGraphGetNumberOfInteractions](augraphgetnumberofinteractions%28____%29.md).
- [AUGraphGetNumberOfInteractions](augraphgetnumberofinteractions%28____%29.md): Deprecated. Retrieves the number of interactions for an audio processing graph.
- [AUGraphInitialize](augraphinitialize%28__%29.md): Deprecated. Initializes an audio processing graph.
- [AUGraphIsInitialized](augraphisinitialized%28____%29.md): Deprecated. Determines whether an audio processing graph is initialized.
- [AUGraphIsNodeSubGraph](augraphisnodesubgraph%28______%29.md): Deprecated. Determines whether a node object represent an audio processing graph or an audio unit.
- [AUGraphIsOpen](augraphisopen%28____%29.md): Deprecated. Determines whether an audio processing graph is open.
- [AUGraphIsRunning](augraphisrunning%28____%29.md): Deprecated. Determines whether an audio processing graph running.
- [AUGraphNewNode](augraphnewnode.md): Deprecated. Deprecated in OS X v10.5. Instead, use [AUGraphAddNode](augraphaddnode%28______%29.md).
- [AUGraphNewNodeSubGraph](augraphnewnodesubgraph%28____%29.md): Deprecated. Creates a node object to represent a subgraph.
- [AUGraphNodeInfo](augraphnodeinfo%28________%29.md): Deprecated. Returns information about a node object.
- [AUGraphOpen](augraphopen%28__%29.md): Deprecated. Opens an audio processing graph.
- [AUGraphRemoveNode](augraphremovenode%28____%29.md): Deprecated. Removes a node from an audio processing graph.
- [AUGraphRemoveRenderNotify](augraphremoverendernotify%28______%29.md): Deprecated. Removes a notification callback from an audio processing graph.
- [AUGraphSetNodeInputCallback](augraphsetnodeinputcallback%28________%29.md): Deprecated. Sets an input callback function for a node.
- [AUGraphStart](augraphstart%28__%29.md): Deprecated. Starts an audio processing graph.
- [AUGraphStop](augraphstop%28__%29.md): Deprecated. Stops an audio processing graph.
- [AUGraphUninitialize](augraphuninitialize%28__%29.md): Deprecated. Uninitializes an audio processing graph.
- [AUGraphUpdate](augraphupdate%28____%29.md): Deprecated. Updates the state of a running audio processing graph.
- [DisposeAUGraph](disposeaugraph%28__%29.md): Deprecated. Disposes of an audio processing graph.
- [NewAUGraph](newaugraph%28__%29.md): Deprecated. Creates a new audio processing graph.

### Data Types

- [AudioUnitNodeConnection](audiounitnodeconnection.md): A connection between two node objects in an audio processing graph.
- [AUGraph](augraph.md): An opaque type representing an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeInteraction](aunodeinteraction.md): Describes the interaction between two node objects.
- [AUNodeRenderCallback](aunoderendercallback.md): A callback used to provide input to an audio unit.

### Constants

- [kAUNodeInteraction_Connection](1537633-kaunodeinteraction-connection.md): The different types of node interactions.

### Result Codes

This table lists the result codes defined for Audio Unit Processing Graph Services.

- [kAUGraphErr_NodeNotFound](kaugrapherr_nodenotfound.md): The specified node cannot be found.
- [kAUGraphErr_InvalidConnection](kaugrapherr_invalidconnection.md): The attempted connection between two nodes cannot be made.
- [kAUGraphErr_OutputNodeErr](kaugrapherr_outputnodeerr.md): Audio processing graphs can only contain one output unit. This error is returned if trying to add a second output unit or if the graph’s output unit is removed while the graph is running.
- [kAUGraphErr_CannotDoInCurrentContext](kaugrapherr_cannotdoincurrentcontext.md): To avoid spinning or waiting in the render thread (a bad idea!), many of the calls to AUGraph can return: `kAUGraphErr_CannotDoInCurrentContext`. This result is only generated when you call an AUGraph API from its render callback. It means that the lock that it required was held at that time, by another thread. If you see this result code, you can generally attempt the action again - typically the NEXT render cycle (so in the mean time the lock can be cleared), or you can delegate that call to another thread in your app. You should not spin or put-to-sleep the render thread.
- [kAUGraphErr_InvalidAudioUnit](kaugrapherr_invalidaudiounit.md)
