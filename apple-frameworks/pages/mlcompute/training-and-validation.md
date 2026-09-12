> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/training-and-validation](https://developer.apple.com/documentation/mlcompute/training-and-validation)

# Training and Validation

**Interface languages:** Swift, Objective-C

**Framework:** ML Compute  
**Kind:** API Collection

Create, train, and validate a graph to produce acceptable prediction results.

## Topics

### Devices

- [MLCDevice](mlcdevice.md): Deprecated. An object that represents the CPU or one or more GPUs the framework uses to execute a neural network.

### Graphs

- [MLCGraph](mlcgraph.md): Deprecated. A graph of layers you use to build a training or inference graph.
- [MLCTrainingGraph](mlctraininggraph.md): Deprecated. A training graph that you create from one or more graph objects plus additional layers you add directly to the training graph.
- [MLCInferenceGraph](mlcinferencegraph.md): Deprecated. An inference graph created from one or more MLCGraph instances plus additional layers added directly to the inference graph.

## See Also

### Components

- [MLCTensor](mlctensor.md): Deprecated. The data object you use throughout the framework.
- [MLCPlatform](mlcplatform.md): Deprecated. A utility class for setting global properties in the framework.
- [Layers](layers.md): Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.
