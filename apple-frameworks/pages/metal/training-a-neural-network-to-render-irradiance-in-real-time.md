> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/training-a-neural-network-to-render-irradiance-in-real-time](https://developer.apple.com/documentation/metal/training-a-neural-network-to-render-irradiance-in-real-time)

# Training a neural network to render irradiance in real time

**Interface languages:** Swift, Objective-C

**Framework:** Metal  
**Kind:** Sample Code  
**Availability:** macOS 26.0+ · Xcode 26.0+

Train a small neural network on the GPU to approximate diffuse irradiance, and compare the result against Monte Carlo integration and a pre-trained ML model.

<a id="overview"></a>

## Overview

This sample renders a PBR sphere lit by an HDR environment map, computing per-pixel diffuse irradiance using three different techniques that you can switch between at runtime:

- **Monte Carlo** integrates the hemisphere per pixel each frame, producing a ground-truth reference.
- **MPP** trains a lightweight MLP on the GPU at launch using Metal Performance Primitives cooperative matrix operations, then evaluates it per pixel.
- **ML Encoder** dispatches a pre-trained Core ML model through `MTL4MachineLearningCommandEncoder`.

The renderer uses a three-pass deferred approach. A geometry pass rasterizes world-space normals and material parameters to textures. The selected irradiance technique then takes the normals as input and outputs a tensor with the irradiance values. A composite pass then evaluates direct lighting with a Cook-Torrance BRDF, adds indirect lighting from the irradiance tensor, then tone-maps the result.

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

To run this sample, you need:

- A Mac running macOS 26 or later
- Xcode 26 or later

> **Note**

> This sample requires Metal 4.

<a id="Training-on-the-GPU"></a>

### Training on the GPU

When the MPP technique is selected, the sample generates 512 ground-truth normal/irradiance pairs via Monte Carlo integration, then runs multiple training iterations per frame using a three-layer MLP. The MLP has 3 inputs (normal xyz), 2 hidden layers of 16 neurons, and 3 outputs (irradiance rgb). The input layer is padded to 16 elements, the output layer is padded to 8 elements, and irradiance values are converted to and from log space for numerical stability.

The forward pass uses tensor ops and cooperative tensors to evaluate the network cooperatively across a SIMD group, where 32 threads process 32 pixels simultaneously. The backward pass works in a similar way to compute weight gradients and propagate activation gradients through each layer, with Adam as the optimizer.

<a id="Training-offline-with-PyTorch"></a>

### Training offline with PyTorch

When the ML Encoder technique is selected, a `MTL4MachineLearningCommandEncoder` is used to execute a pre-trained version of the same MLP network. Unlike the MPP approach, the pre-trained network does not skip empty pixels, so this technique is less efficient yet is much simpler.

The `train_irradiance.py` script has an implementation of the Monte Carlo integration from `Irradiance.metal`, and can be used to regenerate the offline model (`Irradiance.mtlpackage`) using PyTorch. Run it with:

```
uv run ./train_irradiance.py
```

## See Also

### Machine learning workflows

- [Running a machine learning model on the GPU timeline](running-a-machine-learning-model-on-the-gpu-timeline.md): Dispatch model inference commands with a machine learning pass in a Metal 4 command buffer.
- [Running inline ML operations in a shader with Metal 4](running-inline-ml-operations-in-a-shader-with-metal-4.md): Multiply matrices across multiple GPU cores with inline tensor operations.
