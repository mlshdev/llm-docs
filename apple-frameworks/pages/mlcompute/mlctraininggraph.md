> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph](https://developer.apple.com/documentation/mlcompute/mlctraininggraph)

# MLCTrainingGraph (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A training graph that you create from one or more graph objects plus additional layers you add directly to the training graph.

## Declaration

```swift
class MLCTrainingGraph
```

<a id="overview"></a>

## Overview

The framework provides a family of graph-execution methods to execute a full training iteration, and methods to execute the forward pass, the gradient pass, and optimizer update, individually.

Use one of the `execute` methods to execute a full training iteration to accelerate an ML model represented as a single training graph.

Use one of the `executeForward`, `executeGradient`, or `executeOptimizerUpdatemethods` to accelerate an ML library that separates the forward pass, gradient pass, and optimizer update as separate phases.

## Topics

### Creating Training Graphs

- [init(graphObjects:lossLayer:optimizer:)](mlctraininggraph/init%28graphobjects_losslayer_optimizer_%29.md): Deprecated. Creates a training graph with the layers from the graph objects, loss layer, and optimizer you specify.
- [Optimizers](optimizers.md): Create an optimizer to use with the training graph.
- [MLCTensorParameter](mlctensorparameter.md): Deprecated. A tensor parameter object.

### Preparing Training Graphs

- [addInputs(\_:lossLabels:)](mlctraininggraph/addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](mlctraininggraph/addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs(\_:)](mlctraininggraph/addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradient(for:)](mlctraininggraph/stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer(\_:)](mlctraininggraph/compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compile(options:device:)](mlctraininggraph/compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [compile(options:device:inputTensors:inputTensorsData:)](mlctraininggraph/compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [link(with:)](mlctraininggraph/link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradient(for:)](mlctraininggraph/allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

### Executing Training Iterations

- [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](mlctraininggraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, batch size, execution options, and completion handler you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:)](mlctraininggraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, output data, batch size, execution options, and completion handler that you specify.
- [synchronizeUpdates()](mlctraininggraph/synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters(\_:)](mlctraininggraph/settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

### Executing Forward, Gradient, and Optimizer Updates

- [executeForward(batchSize:options:completionHandler:)](mlctraininggraph/executeforward%28batchsize_options_completionhandler_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, and completion handler you specify.
- [executeForward(batchSize:options:outputsData:completionHandler:)](mlctraininggraph/executeforward%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeForward(batchSize:options:outputsData:)](mlctraininggraph/executeforward%28batchsize_options_outputsdata_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, and output data you specify.
- [executeGradient(batchSize:options:completionHandler:)](mlctraininggraph/executegradient%28batchsize_options_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, and completion handler you specify.
- [executeGradient(batchSize:options:outputsData:completionHandler:)](mlctraininggraph/executegradient%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeGradient(batchSize:options:outputsData:)](mlctraininggraph/executegradient%28batchsize_options_outputsdata_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, and output data you specify.
- [executeOptimizerUpdate(options:completionHandler:)](mlctraininggraph/executeoptimizerupdate%28options_completionhandler_%29.md): Deprecated. Executes the optimizer update pass of the training graph with the execution options and completion handler you specify.
- [executeOptimizerUpdate(options:)](mlctraininggraph/executeoptimizerupdate%28options_%29.md): Deprecated. Executes the optimizer update pass of the training graph with the execution options you specify.
- [synchronizeUpdates()](mlctraininggraph/synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters(\_:)](mlctraininggraph/settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

### Inspecting Training Graphs

- [bindOptimizerData(\_:deviceData:with:)](mlctraininggraph/bindoptimizerdata%28__devicedata_with_%29.md): Deprecated. Associates the optimizer and device data you specify along with the tensor.
- [optimizer](mlctraininggraph/optimizer.md): Deprecated. The optimizer to use with the training graph.
- [deviceMemorySize](mlctraininggraph/devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors for forward, gradient passes, and optimizer updates for all layers in the training graph.
- [gradientTensor(forInput:)](mlctraininggraph/gradienttensor%28forinput_%29.md): Deprecated. Gets the gradient tensor for the input tensor you specify.
- [sourceGradientTensors(for:)](mlctraininggraph/sourcegradienttensors%28for_%29.md): Deprecated. Gets the source gradient tensors for the layer in the training graph you specify.
- [resultGradientTensors(for:)](mlctraininggraph/resultgradienttensors%28for_%29.md): Deprecated. Gets the result gradient tensors for the layer in the training graph you specify.
- [gradientData(forParameter:layer:)](mlctraininggraph/gradientdata%28forparameter_layer_%29.md): Deprecated. Gets the gradient data for the trainable parameter and associated layer you specify.

## Relationships

### Inherits From

- [MLCGraph](mlcgraph.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Graphs

- [MLCGraph](mlcgraph.md): Deprecated. A graph of layers you use to build a training or inference graph.
- [MLCInferenceGraph](mlcinferencegraph.md): Deprecated. An inference graph created from one or more MLCGraph instances plus additional layers added directly to the inference graph.

# MLCTrainingGraph (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A training graph that you create from one or more graph objects plus additional layers you add directly to the training graph.

## Declaration

```objectivec
@interface MLCTrainingGraph : MLCGraph
```

<a id="overview"></a>

## Overview

The framework provides a family of graph-execution methods to execute a full training iteration, and methods to execute the forward pass, the gradient pass, and optimizer update, individually.

Use one of the `execute` methods to execute a full training iteration to accelerate an ML model represented as a single training graph.

Use one of the `executeForward`, `executeGradient`, or `executeOptimizerUpdatemethods` to accelerate an ML library that separates the forward pass, gradient pass, and optimizer update as separate phases.

## Topics

### Creating Training Graphs

- [graphWithGraphObjects:lossLayer:optimizer:](mlctraininggraph/init%28graphobjects_losslayer_optimizer_%29.md): Deprecated. Creates a training graph with the layers from the graph objects, loss layer, and optimizer you specify.
- [Optimizers](optimizers.md): Create an optimizer to use with the training graph.
- [MLCTensorParameter](mlctensorparameter.md): Deprecated. A tensor parameter object.

### Preparing Training Graphs

- [addInputs:lossLabels:](mlctraininggraph/addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs:lossLabels:lossLabelWeights:](mlctraininggraph/addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs:](mlctraininggraph/addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradientForTensors:](mlctraininggraph/stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer:](mlctraininggraph/compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compileWithOptions:device:](mlctraininggraph/compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [compileWithOptions:device:inputTensors:inputTensorsData:](mlctraininggraph/compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](mlctraininggraph/link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradientForTensor:](mlctraininggraph/allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

### Executing Training Iterations

- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:](mlctraininggraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, batch size, execution options, and completion handler you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:](mlctraininggraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, output data, batch size, execution options, and completion handler that you specify.
- [synchronizeUpdates](mlctraininggraph/synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters:](mlctraininggraph/settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

### Executing Forward, Gradient, and Optimizer Updates

- [executeForwardWithBatchSize:options:completionHandler:](mlctraininggraph/executeforward%28batchsize_options_completionhandler_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, and completion handler you specify.
- [executeForwardWithBatchSize:options:outputsData:completionHandler:](mlctraininggraph/executeforward%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeGradientWithBatchSize:options:completionHandler:](mlctraininggraph/executegradient%28batchsize_options_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, and completion handler you specify.
- [executeGradientWithBatchSize:options:outputsData:completionHandler:](mlctraininggraph/executegradient%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeOptimizerUpdateWithOptions:completionHandler:](mlctraininggraph/executeoptimizerupdate%28options_completionhandler_%29.md): Deprecated. Executes the optimizer update pass of the training graph with the execution options and completion handler you specify.
- [synchronizeUpdates](mlctraininggraph/synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters:](mlctraininggraph/settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

### Inspecting Training Graphs

- [bindOptimizerData:deviceData:withTensor:](mlctraininggraph/bindoptimizerdata%28__devicedata_with_%29.md): Deprecated. Associates the optimizer and device data you specify along with the tensor.
- [optimizer](mlctraininggraph/optimizer.md): Deprecated. The optimizer to use with the training graph.
- [deviceMemorySize](mlctraininggraph/devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors for forward, gradient passes, and optimizer updates for all layers in the training graph.
- [gradientTensorForInput:](mlctraininggraph/gradienttensor%28forinput_%29.md): Deprecated. Gets the gradient tensor for the input tensor you specify.
- [sourceGradientTensorsForLayer:](mlctraininggraph/sourcegradienttensors%28for_%29.md): Deprecated. Gets the source gradient tensors for the layer in the training graph you specify.
- [resultGradientTensorsForLayer:](mlctraininggraph/resultgradienttensors%28for_%29.md): Deprecated. Gets the result gradient tensors for the layer in the training graph you specify.
- [gradientDataForParameter:layer:](mlctraininggraph/gradientdata%28forparameter_layer_%29.md): Deprecated. Gets the gradient data for the trainable parameter and associated layer you specify.

## Relationships

### Inherits From

- [MLCGraph](mlcgraph.md)

## See Also

### Graphs

- [MLCGraph](mlcgraph.md): Deprecated. A graph of layers you use to build a training or inference graph.
- [MLCInferenceGraph](mlcinferencegraph.md): Deprecated. An inference graph created from one or more MLCGraph instances plus additional layers added directly to the inference graph.
