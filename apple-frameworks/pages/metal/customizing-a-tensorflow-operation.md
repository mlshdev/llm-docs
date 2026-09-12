> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/customizing-a-tensorflow-operation](https://developer.apple.com/documentation/metal/customizing-a-tensorflow-operation)

# Customizing a TensorFlow operation

**Interface languages:** Swift, Objective-C

**Framework:** Metal  
**Kind:** Sample Code

Implement a custom operation that uses Metal kernels to accelerate neural-network training performance.

<a id="overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC22 session [10063: Accelerate machine learning with Metal](https://developer.apple.com/wwdc22/10063/).

<a id="Configure-the-sample-code"></a>

### Configure the sample code

1. Follow the instructions in [Getting started with tensorflow-metal](https://developer.apple.com/metal/tensorflow-plugin/).
2. Install ffmpeg using `brew`.

```shell
brew install ffmpeg
```

3. Install the required Python packages.

```shell
pip install -r requirements.txt
```

4. Use `make` to build the custom operation with Xcode.

```shell
cd hash_encoder
make
cd ..
```

5. Run the sample.

```shell
python tiny_nerf_hash.py
```

6. View the resutls in the `result_nerf_hash` folder.

- To compare the performance benefits provided by this sample, you can run the original NeRF sample code included with the project.  View the resutls in the `result_nerf_mlp` folder.

```shell
python tiny_nerf_mlp.py
```

> **Note**

> The sample uses low-resolution (100x100) images by default. You can alternatively use a high-resolution version of the data to produce a clearer rendering.

## See Also

### Compute workflows

- [Performing calculations on a GPU](performing-calculations-on-a-gpu.md): Use Metal to find GPUs and perform calculations on them.
- [Selecting device objects for compute processing](selecting-device-objects-for-compute-processing.md): Switch dynamically between multiple GPUs to efficiently execute a compute-intensive simulation.
- [Customizing a PyTorch operation](customizing-a-pytorch-operation.md): Implement a custom operation in PyTorch that uses Metal kernels to improve performance.
