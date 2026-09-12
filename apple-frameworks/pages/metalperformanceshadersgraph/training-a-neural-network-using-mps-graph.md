> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/training-a-neural-network-using-mps-graph](https://developer.apple.com/documentation/metalperformanceshadersgraph/training-a-neural-network-using-mps-graph)

# Training a neural network using MPSGraph

**Interface languages:** Swift, Objective-C

**Framework:** Metal Performance Shaders Graph  
**Kind:** Sample Code  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · Xcode 14.3+

Train a simple neural network digit classifier.

<a id="overview"></a>

## Overview

The sample code describes how to write a neural network using [`MPSGraph`](mpsgraph.md) and how to train the network to recognize a digit in an image. The sample trains a network for 300 iterations on a batch size of 40 images. You’ll see how to set up training of weights and biases using data sources, including how to initialize and update weights. You’ll also see how to validate the network using a test dataset.

> **Note**

> This sample code project is associated with WWDC 2020 session [10677: Build customized ML models with the Metal Performance Shaders Graph](https://developer.apple.com/wwdc20/10677/).

You can use any dataset of your choice to train this model.  The following dataset works well for this purpose:

[MNIST Dataset](http://yann.lecun.com/exdb/mnist/)

Please note that Apple doesn’t own the copyright to this dataset nor makes any representations about the applicable terms of use for this dataset.

If you choose to use this dataset, the sample includes a script that downloads the dataset from that location and pass it as input to the model.

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

This sample requires the following system and software configuration:

- macOS 11 or later
- iOS 14 or later
- Xcode 12 or later

## See Also

### Essentials

- [Adding custom functions to a shader graph](adding-custom-functions-to-a-shader-graph.md): Run your own graph functions on the GPU by building the function programmatically.
- [Filtering images with MPSGraph FFT operations](filtering-images-with-mpsgraph-fft-operations.md): Filter an image with MPSGraph fast Fourier transforms using the convolutional theorem.
