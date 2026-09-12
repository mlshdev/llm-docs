> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute](https://developer.apple.com/documentation/mlcompute)

# ML Compute (Swift)

**Framework:** ML Compute  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

Accelerate training and validation of neural networks across the CPU and one or more GPUs.

> ML Compute is deprecated. Instead, use [BNNS](accelerate/bnns.md) for CPU tasks, [Metal Performance Shaders](metalperformanceshaders.md) for GPU work, and [Core ML](coreml.md) for tensor APIs.

<a id="overview"></a>

## Overview

ML Compute uses high performance [BNNS](accelerate/bnns.md) primitives from the Accelerate framework for the CPU, and [Metal Performance Shaders](metalperformanceshaders.md) for the GPU.

## Topics

### Components

- [MLCTensor](mlcompute/mlctensor.md): Deprecated. The data object you use throughout the framework.
- [MLCPlatform](mlcompute/mlcplatform.md): Deprecated. A utility class for setting global properties in the framework.
- [Layers](mlcompute/layers.md): Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.
- [Training and Validation](mlcompute/training-and-validation.md): Create, train, and validate a graph to produce acceptable prediction results.

# ML Compute (Objective-C)

**Framework:** ML Compute  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

Accelerate training and validation of neural networks across the CPU and one or more GPUs.

> ML Compute is deprecated. Instead, use [BNNS](accelerate/bnns.md) for CPU tasks, [Metal Performance Shaders](metalperformanceshaders.md) for GPU work, and [Core ML](coreml.md) for tensor APIs.

<a id="overview"></a>

## Overview

ML Compute uses high performance [BNNS](accelerate/bnns.md) primitives from the Accelerate framework for the CPU, and [Metal Performance Shaders](metalperformanceshaders.md) for the GPU.

## Topics

### Components

- [MLCTensor](mlcompute/mlctensor.md): Deprecated. The data object you use throughout the framework.
- [MLCPlatform](mlcompute/mlcplatform.md): Deprecated. A utility class for setting global properties in the framework.
- [Layers](mlcompute/layers.md): Create and inspect layers that encapsulate operations and configuration details to receive, process, and output tensors.
- [Training and Validation](mlcompute/training-and-validation.md): Create, train, and validate a graph to produce acceptable prediction results.

### Macros

- [MLCOMPUTE_AVAILABLE_STARTING](mlcompute/mlcompute_available_starting.md)
- [MLCOMPUTE_AVAILABLE_STARTING_BUT_DEPRECATED](mlcompute/mlcompute_available_starting_but_deprecated.md)
- [MLCOMPUTE_AVAILABLE_STARTING_BUT_DEPRECATED_MACOS14](mlcompute/mlcompute_available_starting_but_deprecated_macos14.md)
- [MLCOMPUTE_CLASS_AVAILABLE_STARTING](mlcompute/mlcompute_class_available_starting.md)
- [MLCOMPUTE_ENUM_AVAILABLE_STARTING](mlcompute/mlcompute_enum_available_starting.md)
- [MLCOMPUTE_ENUM_AVAILABLE_STARTING_BUT_DEPRECATED](mlcompute/mlcompute_enum_available_starting_but_deprecated.md)
- [MLCOMPUTE_PROTOCOL_AVAILABLE_STARTING](mlcompute/mlcompute_protocol_available_starting.md)
- [MLCOMPUTE_UNAVAILABLE](mlcompute/mlcompute_unavailable.md)
- [MLComputeTypes_h](mlcompute/mlcomputetypes_h.md)

### Enumerations

- [MLCPaddingPolicy](mlcompute/mlcpaddingpolicy-14ba7.md): A padding policy that you specify for a convolution or pooling layer.
