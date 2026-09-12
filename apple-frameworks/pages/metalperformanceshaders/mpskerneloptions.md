> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskerneloptions](https://developer.apple.com/documentation/metalperformanceshaders/mpskerneloptions)

# MPSKernelOptions (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The options used when creating a kernel.

## Declaration

```swift
struct MPSKernelOptions
```

<a id="overview"></a>

## Overview

The Metal Performance Shaders framework uses the same API validation layer that Metal uses to alert you to API mistakes during development. While this option is turned on in your Xcode scheme, common programming errors will either trigger an assert or send a warning to the debug log. Except in the case of serious errors, little or no output should arrive in the console under standard usage. You can set a kernel’s [options](mpskernel/options.md) parameter to the [skipAPIValidation](mpskerneloptions/skipapivalidation.md) value to skip most of this checking. This flag may also lead to small reductions in CPU cost.

## Topics

### Constants

- [none](mpskerneloptions/none.md): The default option for the kernel. Kernels created with this option will not skip any API validation and will not use reduced precision.
- [skipAPIValidation](mpskerneloptions/skipapivalidation.md): A property that directs the kernel to perform or skip argument validation.
- [allowReducedPrecision](mpskerneloptions/allowreducedprecision.md): When possible, kernels use a higher-precision data representation internally than the destination storage format to avoid excessive accumulation of computational rounding error in the result. This option advises the kernel that the destination storage format already has too much precision for what is ultimately required downstream, and the kernel may use reduced precision internally when it determines that a less precise result would yield better performance. When enabled, the performance win is often small and the precision of the result may vary by hardware and OS.
- [disableInternalTiling](mpskerneloptions/disableinternaltiling.md): Some kernels may automatically split up their work internally into multiple tiles. This improves performance on larger textures and reduces the amount of memory needed by the framework for temporary storage. However, if you are using your own tiling scheme to achieve similar results, your tile sizes and the framework’s choice of tile sizes may interfere with one another, causing the framework to subdivide your tiles for its own use inefficiently. Use this option to force the framework to process your data tile as a single chunk.
- [insertDebugGroups](mpskerneloptions/insertdebuggroups.md): Enables calling kernel encode methods.

### Initializers

- [init(rawValue:)](mpskerneloptions/init%28rawvalue_%29.md)

### Type Properties

- [verbose](mpskerneloptions/verbose.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Properties

- [options](mpskernel/options.md): The set of options used to run the kernel.
- [device](mpskernel/device.md): The device on which the kernel will be used.
- [label](mpskernel/label.md): The string that identifies the kernel.

# MPSKernelOptions (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The options used when creating a kernel.

## Declaration

```objectivec
enum MPSKernelOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

The Metal Performance Shaders framework uses the same API validation layer that Metal uses to alert you to API mistakes during development. While this option is turned on in your Xcode scheme, common programming errors will either trigger an assert or send a warning to the debug log. Except in the case of serious errors, little or no output should arrive in the console under standard usage. You can set a kernel’s [options](mpskernel/options.md) parameter to the [MPSKernelOptionsSkipAPIValidation](mpskerneloptions/skipapivalidation.md) value to skip most of this checking. This flag may also lead to small reductions in CPU cost.

## Topics

### Constants

- [MPSKernelOptionsNone](mpskerneloptions/none.md): The default option for the kernel. Kernels created with this option will not skip any API validation and will not use reduced precision.
- [MPSKernelOptionsSkipAPIValidation](mpskerneloptions/skipapivalidation.md): A property that directs the kernel to perform or skip argument validation.
- [MPSKernelOptionsAllowReducedPrecision](mpskerneloptions/allowreducedprecision.md): When possible, kernels use a higher-precision data representation internally than the destination storage format to avoid excessive accumulation of computational rounding error in the result. This option advises the kernel that the destination storage format already has too much precision for what is ultimately required downstream, and the kernel may use reduced precision internally when it determines that a less precise result would yield better performance. When enabled, the performance win is often small and the precision of the result may vary by hardware and OS.
- [MPSKernelOptionsDisableInternalTiling](mpskerneloptions/disableinternaltiling.md): Some kernels may automatically split up their work internally into multiple tiles. This improves performance on larger textures and reduces the amount of memory needed by the framework for temporary storage. However, if you are using your own tiling scheme to achieve similar results, your tile sizes and the framework’s choice of tile sizes may interfere with one another, causing the framework to subdivide your tiles for its own use inefficiently. Use this option to force the framework to process your data tile as a single chunk.
- [MPSKernelOptionsInsertDebugGroups](mpskerneloptions/insertdebuggroups.md): Enables calling kernel encode methods.

### Type Properties

- [MPSKernelOptionsVerbose](mpskerneloptions/verbose.md)

## See Also

### Properties

- [options](mpskernel/options.md): The set of options used to run the kernel.
- [device](mpskernel/device.md): The device on which the kernel will be used.
- [label](mpskernel/label.md): The string that identifies the kernel.
