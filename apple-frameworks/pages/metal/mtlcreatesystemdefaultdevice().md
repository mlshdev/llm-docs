> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcreatesystemdefaultdevice()](https://developer.apple.com/documentation/metal/mtlcreatesystemdefaultdevice())

# MTLCreateSystemDefaultDevice() (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns the device instance Metal selects as the default.

## Declaration

```swift
func MTLCreateSystemDefaultDevice() -> (any MTLDevice)?
```

<a id="return-value"></a>

## Return Value

A device object.

## Mentioned In

- [Developing Metal apps that run in Simulator](developing-metal-apps-that-run-in-simulator.md)
- [Getting the default GPU](getting-the-default-gpu.md)

<a id="discussion"></a>

## Discussion

In macOS, in order for the system to provide a default Metal device object, you need to link to the [Core Graphics](../coregraphics.md) framework. You usually need to do this explicitly if you’re writing apps that don’t use graphics by default, such as command line tools.

## See Also

### Locating and inspecting a GPU device

- [Getting the default GPU](getting-the-default-gpu.md): Select the system’s default GPU device on which to run your Metal code.
- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md): Use the device object’s properties to determine how you perform tasks in Metal.
- [MTLDevice](mtldevice.md): The main Metal interface to a GPU that apps use to draw graphics and run computations in parallel.
- [Multi-GPU systems](multi-gpu-systems.md): Locate and work with internal and external GPUs and their displays, video memory, and performance tradeoffs.

# MTLCreateSystemDefaultDevice (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns the device instance Metal selects as the default.

## Declaration

```objectivec
extern id<MTLDevice>MTLCreateSystemDefaultDevice();
```

<a id="return-value"></a>

## Return Value

A device object.

## Mentioned In

- [Developing Metal apps that run in Simulator](developing-metal-apps-that-run-in-simulator.md)
- [Getting the default GPU](getting-the-default-gpu.md)

<a id="discussion"></a>

## Discussion

In macOS, in order for the system to provide a default Metal device object, you need to link to the [Core Graphics](../coregraphics.md) framework. You usually need to do this explicitly if you’re writing apps that don’t use graphics by default, such as command line tools.

## See Also

### Locating and inspecting a GPU device

- [Getting the default GPU](getting-the-default-gpu.md): Select the system’s default GPU device on which to run your Metal code.
- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md): Use the device object’s properties to determine how you perform tasks in Metal.
- [MTLDevice](mtldevice.md): The main Metal interface to a GPU that apps use to draw graphics and run computations in parallel.
- [Multi-GPU systems](multi-gpu-systems.md): Locate and work with internal and external GPUs and their displays, video memory, and performance tradeoffs.
