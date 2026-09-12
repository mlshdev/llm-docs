> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskerneloptions/allowreducedprecision](https://developer.apple.com/documentation/metalperformanceshaders/mpskerneloptions/allowreducedprecision)

# allowReducedPrecision (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

When possible, kernels use a higher-precision data representation internally than the destination storage format to avoid excessive accumulation of computational rounding error in the result. This option advises the kernel that the destination storage format already has too much precision for what is ultimately required downstream, and the kernel may use reduced precision internally when it determines that a less precise result would yield better performance. When enabled, the performance win is often small and the precision of the result may vary by hardware and OS.

## Declaration

```swift
static var allowReducedPrecision: MPSKernelOptions { get }
```

## See Also

### Constants

- [none](none.md): The default option for the kernel. Kernels created with this option will not skip any API validation and will not use reduced precision.
- [skipAPIValidation](skipapivalidation.md): A property that directs the kernel to perform or skip argument validation.
- [disableInternalTiling](disableinternaltiling.md): Some kernels may automatically split up their work internally into multiple tiles. This improves performance on larger textures and reduces the amount of memory needed by the framework for temporary storage. However, if you are using your own tiling scheme to achieve similar results, your tile sizes and the framework’s choice of tile sizes may interfere with one another, causing the framework to subdivide your tiles for its own use inefficiently. Use this option to force the framework to process your data tile as a single chunk.
- [insertDebugGroups](insertdebuggroups.md): Enables calling kernel encode methods.

# MPSKernelOptionsAllowReducedPrecision (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

When possible, kernels use a higher-precision data representation internally than the destination storage format to avoid excessive accumulation of computational rounding error in the result. This option advises the kernel that the destination storage format already has too much precision for what is ultimately required downstream, and the kernel may use reduced precision internally when it determines that a less precise result would yield better performance. When enabled, the performance win is often small and the precision of the result may vary by hardware and OS.

## Declaration

```objectivec
MPSKernelOptionsAllowReducedPrecision
```

## See Also

### Constants

- [MPSKernelOptionsNone](none.md): The default option for the kernel. Kernels created with this option will not skip any API validation and will not use reduced precision.
- [MPSKernelOptionsSkipAPIValidation](skipapivalidation.md): A property that directs the kernel to perform or skip argument validation.
- [MPSKernelOptionsDisableInternalTiling](disableinternaltiling.md): Some kernels may automatically split up their work internally into multiple tiles. This improves performance on larger textures and reduces the amount of memory needed by the framework for temporary storage. However, if you are using your own tiling scheme to achieve similar results, your tile sizes and the framework’s choice of tile sizes may interfere with one another, causing the framework to subdivide your tiles for its own use inefficiently. Use this option to force the framework to process your data tile as a single chunk.
- [MPSKernelOptionsInsertDebugGroups](insertdebuggroups.md): Enables calling kernel encode methods.
