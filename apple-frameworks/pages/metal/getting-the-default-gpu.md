> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/getting-the-default-gpu](https://developer.apple.com/documentation/metal/getting-the-default-gpu)

# Getting the default GPU (Swift)

**Framework:** Metal  
**Kind:** Article

Select the system’s default GPU device on which to run your Metal code.

<a id="overview"></a>

## Overview

To use the Metal framework, start by getting a GPU device. All of the instances your app needs to interact with Metal come from an [MTLDevice](mtldevice.md) that you acquire at runtime. Some devices, such as those with iOS and tvOS have a single GPU that you can access by calling [MTLCreateSystemDefaultDevice()](mtlcreatesystemdefaultdevice%28%29.md).

```swift
if(!(device = MTLCreateSystemDefaultDevice()))
{
    NSLog(@"Failed to get the system's default Metal device.");
}
```

On macOS devices that have multiple GPUs, such as a MacBook Pro, the system default is the discrete GPU.

## See Also

### Locating and inspecting a GPU device

- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md): Use the device object’s properties to determine how you perform tasks in Metal.
- [MTLCreateSystemDefaultDevice()](mtlcreatesystemdefaultdevice%28%29.md): Returns the device instance Metal selects as the default.
- [MTLDevice](mtldevice.md): The main Metal interface to a GPU that apps use to draw graphics and run computations in parallel.
- [Multi-GPU systems](multi-gpu-systems.md): Locate and work with internal and external GPUs and their displays, video memory, and performance tradeoffs.

# Getting the default GPU (Objective-C)

**Framework:** Metal  
**Kind:** Article

Select the system’s default GPU device on which to run your Metal code.

<a id="overview"></a>

## Overview

To use the Metal framework, start by getting a GPU device. All of the instances your app needs to interact with Metal come from an [MTLDevice](mtldevice.md) that you acquire at runtime. Some devices, such as those with iOS and tvOS have a single GPU that you can access by calling [MTLCreateSystemDefaultDevice](mtlcreatesystemdefaultdevice%28%29.md).

```swift
if(!(device = MTLCreateSystemDefaultDevice()))
{
    NSLog(@"Failed to get the system's default Metal device.");
}
```

On macOS devices that have multiple GPUs, such as a MacBook Pro, the system default is the discrete GPU.

## See Also

### Locating and inspecting a GPU device

- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md): Use the device object’s properties to determine how you perform tasks in Metal.
- [MTLCreateSystemDefaultDevice](mtlcreatesystemdefaultdevice%28%29.md): Returns the device instance Metal selects as the default.
- [MTLDevice](mtldevice.md): The main Metal interface to a GPU that apps use to draw graphics and run computations in parallel.
- [Multi-GPU systems](multi-gpu-systems.md): Locate and work with internal and external GPUs and their displays, video memory, and performance tradeoffs.
