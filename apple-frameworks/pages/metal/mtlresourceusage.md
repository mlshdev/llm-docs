> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceusage](https://developer.apple.com/documentation/metal/mtlresourceusage)

# MTLResourceUsage (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Options that describe how a graphics or compute function uses an argument buffer’s resource.

## Declaration

```swift
struct MTLResourceUsage
```

## Mentioned In

- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md)

<a id="overview"></a>

## Overview

You can combine multiple [MTLResourceUsage](mtlresourceusage.md) values with a bitwise OR (`|`) if the resource serves multiple purposes over its lifetime. You can enable options for certain resources that indicate whether the Metal driver needs to convert the resource to another format, such as whether it needs to decompress a color render target.

## Topics

### Initializers

- [init(rawValue:)](mtlresourceusage/init%28rawvalue_%29.md): Creates a set of resource options from a raw value.

### Type Properties

- [read](mtlresourceusage/read.md): An option that enables reading from the resource.
- [sample](mtlresourceusage/sample.md): Deprecated. An option that enables sampling from the resource.
- [write](mtlresourceusage/write.md): An option that enables writing to the resource.

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

### Common resource functionality

- [MTLGPUAddress](mtlgpuaddress.md): A 64-bit unsigned integer type appropriate for storing GPU addresses.
- [MTLAllocation](mtlallocation.md): A memory allocation from a Metal GPU device, such as a memory heap, texture, or data buffer.
- [MTLResource](mtlresource.md): An allocation of memory accessible to a GPU.
- [MTLResourceOptions](mtlresourceoptions.md): Optional arguments used to set the behavior of a resource.
- [MTLResourceID](mtlresourceid.md)

# MTLResourceUsage (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Options that describe how a graphics or compute function uses an argument buffer’s resource.

## Declaration

```objectivec
enum MTLResourceUsage : NSUInteger;
```

## Mentioned In

- [Tracking the resource residency of argument buffers](tracking-the-resource-residency-of-argument-buffers.md)

<a id="overview"></a>

## Overview

You can combine multiple [MTLResourceUsage](mtlresourceusage.md) values with a bitwise OR (`|`) if the resource serves multiple purposes over its lifetime. You can enable options for certain resources that indicate whether the Metal driver needs to convert the resource to another format, such as whether it needs to decompress a color render target.

## Topics

### Enumeration Cases

- [MTLResourceUsageRead](mtlresourceusage/read.md): An option that enables reading from the resource.
- [MTLResourceUsageSample](mtlresourceusage/sample.md): Deprecated. An option that enables sampling from the resource.
- [MTLResourceUsageWrite](mtlresourceusage/write.md): An option that enables writing to the resource.

## See Also

### Common resource functionality

- [MTLGPUAddress](mtlgpuaddress.md): A 64-bit unsigned integer type appropriate for storing GPU addresses.
- [MTLAllocation](mtlallocation.md): A memory allocation from a Metal GPU device, such as a memory heap, texture, or data buffer.
- [MTLResource](mtlresource.md): An allocation of memory accessible to a GPU.
- [MTLResourceOptions](mtlresourceoptions.md): Optional arguments used to set the behavior of a resource.
- [MTLResourceID](mtlresourceid.md)
