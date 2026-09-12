> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/customizing-a-pytorch-operation](https://developer.apple.com/documentation/metal/customizing-a-pytorch-operation)

# Customizing a PyTorch operation

**Interface languages:** Swift, Objective-C

**Framework:** Metal  
**Kind:** Sample Code

Implement a custom operation in PyTorch that uses Metal kernels to improve performance.

<a id="overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC23 session 10050: [Optimize machine learning for Metal apps](https://developer.apple.com/wwdc23/10050).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

Before you run the sample code project:

1. Follow the instructions in [Accelerated PyTorch training on Mac](https://developer.apple.com/metal/pytorch/).
2. Install PyTorch nightly (Python 3.7 or later is required).

```shell
pip3 install --pre torch --index-url https://download.pytorch.org/whl/nightly/cpu
```

3. Install Ninja

```shell
pip3 install Ninja
```

4. Run the sample.

```shell
python3 run_sample.py
```

## See Also

### Compute workflows

- [Performing calculations on a GPU](performing-calculations-on-a-gpu.md): Use Metal to find GPUs and perform calculations on them.
- [Selecting device objects for compute processing](selecting-device-objects-for-compute-processing.md): Switch dynamically between multiple GPUs to efficiently execute a compute-intensive simulation.
- [Customizing a TensorFlow operation](customizing-a-tensorflow-operation.md): Implement a custom operation that uses Metal kernels to accelerate neural-network training performance.
