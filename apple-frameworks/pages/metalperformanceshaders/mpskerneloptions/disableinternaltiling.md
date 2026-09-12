> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskerneloptions/disableinternaltiling](https://developer.apple.com/documentation/metalperformanceshaders/mpskerneloptions/disableinternaltiling)

# disableInternalTiling (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Some kernels may automatically split up their work internally into multiple tiles. This improves performance on larger textures and reduces the amount of memory needed by the framework for temporary storage. However, if you are using your own tiling scheme to achieve similar results, your tile sizes and the framework’s choice of tile sizes may interfere with one another, causing the framework to subdivide your tiles for its own use inefficiently. Use this option to force the framework to process your data tile as a single chunk.

## Declaration

```swift
static var disableInternalTiling: MPSKernelOptions { get }
```

## See Also

### Constants

- [none](none.md): The default option for the kernel. Kernels created with this option will not skip any API validation and will not use reduced precision.
- [skipAPIValidation](skipapivalidation.md): A property that directs the kernel to perform or skip argument validation.
- [allowReducedPrecision](allowreducedprecision.md): When possible, kernels use a higher-precision data representation internally than the destination storage format to avoid excessive accumulation of computational rounding error in the result. This option advises the kernel that the destination storage format already has too much precision for what is ultimately required downstream, and the kernel may use reduced precision internally when it determines that a less precise result would yield better performance. When enabled, the performance win is often small and the precision of the result may vary by hardware and OS.
- [insertDebugGroups](insertdebuggroups.md): Enables calling kernel encode methods.

# MPSKernelOptionsDisableInternalTiling (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Some kernels may automatically split up their work internally into multiple tiles. This improves performance on larger textures and reduces the amount of memory needed by the framework for temporary storage. However, if you are using your own tiling scheme to achieve similar results, your tile sizes and the framework’s choice of tile sizes may interfere with one another, causing the framework to subdivide your tiles for its own use inefficiently. Use this option to force the framework to process your data tile as a single chunk.

## Declaration

```objectivec
MPSKernelOptionsDisableInternalTiling
```

## See Also

### Constants

- [MPSKernelOptionsNone](none.md): The default option for the kernel. Kernels created with this option will not skip any API validation and will not use reduced precision.
- [MPSKernelOptionsSkipAPIValidation](skipapivalidation.md): A property that directs the kernel to perform or skip argument validation.
- [MPSKernelOptionsAllowReducedPrecision](allowreducedprecision.md): When possible, kernels use a higher-precision data representation internally than the destination storage format to avoid excessive accumulation of computational rounding error in the result. This option advises the kernel that the destination storage format already has too much precision for what is ultimately required downstream, and the kernel may use reduced precision internally when it determines that a less precise result would yield better performance. When enabled, the performance win is often small and the precision of the result may vary by hardware and OS.
- [MPSKernelOptionsInsertDebugGroups](insertdebuggroups.md): Enables calling kernel encode methods.
