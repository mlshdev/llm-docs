> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceoptions](https://developer.apple.com/documentation/metal/mtlresourceoptions)

# MTLResourceOptions (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Optional arguments used to set the behavior of a resource.

## Declaration

```swift
struct MTLResourceOptions
```

## Mentioned In

- [Setting resource storage modes](setting-resource-storage-modes.md)

## Topics

### Initializing resource options

- [init(rawValue:)](mtlresourceoptions/init%28rawvalue_%29.md)

### Specifying CPU cache modes

- [cpuCacheModeWriteCombined](mtlresourceoptions/cpucachemodewritecombined.md): A write-combined CPU cache mode that is optimized for resources that the CPU writes into, but never reads.

### Specifying storage modes

- [storageModeShared](mtlresourceoptions/storagemodeshared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [storageModeManaged](mtlresourceoptions/storagemodemanaged.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [storageModePrivate](mtlresourceoptions/storagemodeprivate.md): The resource is only available to the GPU.
- [storageModeMemoryless](mtlresourceoptions/storagemodememoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

### Specifying hazard tracking

- [hazardTrackingModeTracked](mtlresourceoptions/hazardtrackingmodetracked.md): An option that instructs Metal to apply safeguards for a resource at runtime to avoid memory hazards for the applicable commands.
- [hazardTrackingModeUntracked](mtlresourceoptions/hazardtrackingmodeuntracked.md): A resource option that instructs Metal to ignore memory hazards for a resource at runtime.

### Deprecated options

- [optionCPUCacheModeWriteCombined](mtlresourceoptions/optioncpucachemodewritecombined.md): Deprecated. This constant was deprecated in iOS 9.0 and macOS 10.11.

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
- [MTLResourceUsage](mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
- [MTLResourceID](mtlresourceid.md)

# MTLResourceOptions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Optional arguments used to set the behavior of a resource.

## Declaration

```objectivec
enum MTLResourceOptions : NSUInteger;
```

## Mentioned In

- [Setting resource storage modes](setting-resource-storage-modes.md)

## Topics

### Specifying CPU cache modes

- [MTLResourceCPUCacheModeDefaultCache](mtlresourceoptions/mtlresourcecpucachemodedefaultcache.md): The default CPU cache mode for the resource, which guarantees that read and write operations are executed in the expected order.
- [MTLResourceCPUCacheModeWriteCombined](mtlresourceoptions/cpucachemodewritecombined.md): A write-combined CPU cache mode that is optimized for resources that the CPU writes into, but never reads.

### Specifying storage modes

- [MTLResourceStorageModeShared](mtlresourceoptions/storagemodeshared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLResourceStorageModeManaged](mtlresourceoptions/storagemodemanaged.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [MTLResourceStorageModePrivate](mtlresourceoptions/storagemodeprivate.md): The resource is only available to the GPU.
- [MTLResourceStorageModeMemoryless](mtlresourceoptions/storagemodememoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

### Specifying hazard tracking

- [MTLResourceHazardTrackingModeDefault](mtlresourceoptions/mtlresourcehazardtrackingmodedefault.md): An option specifying that the default tracking mode should be used.
- [MTLResourceHazardTrackingModeTracked](mtlresourceoptions/hazardtrackingmodetracked.md): An option that instructs Metal to apply safeguards for a resource at runtime to avoid memory hazards for the applicable commands.
- [MTLResourceHazardTrackingModeUntracked](mtlresourceoptions/hazardtrackingmodeuntracked.md): A resource option that instructs Metal to ignore memory hazards for a resource at runtime.

### Deprecated options

- [MTLResourceOptionCPUCacheModeDefault](mtlresourceoptions/mtlresourceoptioncpucachemodedefault.md): Deprecated. This constant was deprecated in iOS 9.0 and macOS 10.11.
- [MTLResourceOptionCPUCacheModeWriteCombined](mtlresourceoptions/optioncpucachemodewritecombined.md): Deprecated. This constant was deprecated in iOS 9.0 and macOS 10.11.

## See Also

### Common resource functionality

- [MTLGPUAddress](mtlgpuaddress.md): A 64-bit unsigned integer type appropriate for storing GPU addresses.
- [MTLAllocation](mtlallocation.md): A memory allocation from a Metal GPU device, such as a memory heap, texture, or data buffer.
- [MTLResource](mtlresource.md): An allocation of memory accessible to a GPU.
- [MTLResourceUsage](mtlresourceusage.md): Options that describe how a graphics or compute function uses an argument buffer’s resource.
- [MTLResourceID](mtlresourceid.md)
