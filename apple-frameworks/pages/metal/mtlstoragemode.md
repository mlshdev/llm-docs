> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoragemode](https://developer.apple.com/documentation/metal/mtlstoragemode)

# MTLStorageMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the memory location and access permissions for a resource.

## Declaration

```swift
enum MTLStorageMode
```

## Mentioned In

- [Setting resource storage modes](setting-resource-storage-modes.md)

<a id="overview"></a>

## Overview

For more guidance on how to choose storage modes, see [Setting resource storage modes](setting-resource-storage-modes.md).

## Topics

### Storage mode options

- [MTLStorageMode.shared](mtlstoragemode/shared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLStorageMode.managed](mtlstoragemode/managed.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [MTLStorageMode.private](mtlstoragemode/private.md): The resource is only available to the GPU.
- [MTLStorageMode.memoryless](mtlstoragemode/memoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

### Initializers

- [init(rawValue:)](mtlstoragemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading memory and storage properties

- [cpuCacheMode](mtlresource/cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](mtlresource/storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](mtlresource/hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [resourceOptions](mtlresource/resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLCPUCacheMode](mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLHazardTrackingMode](mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.

# MTLStorageMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the memory location and access permissions for a resource.

## Declaration

```objectivec
enum MTLStorageMode : NSUInteger;
```

## Mentioned In

- [Setting resource storage modes](setting-resource-storage-modes.md)

<a id="overview"></a>

## Overview

For more guidance on how to choose storage modes, see [Setting resource storage modes](setting-resource-storage-modes.md).

## Topics

### Storage mode options

- [MTLStorageModeShared](mtlstoragemode/shared.md): The CPU and GPU share access to the resource, allocated in system memory.
- [MTLStorageModeManaged](mtlstoragemode/managed.md): Deprecated. The CPU and GPU may maintain separate copies of the resource, and any changes need to be explicitly synchronized.
- [MTLStorageModePrivate](mtlstoragemode/private.md): The resource is only available to the GPU.
- [MTLStorageModeMemoryless](mtlstoragemode/memoryless.md): The resource’s contents are only available to the GPU, and only exist temporarily during a render pass.

## See Also

### Reading memory and storage properties

- [cpuCacheMode](mtlresource/cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](mtlresource/storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](mtlresource/hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [resourceOptions](mtlresource/resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLCPUCacheMode](mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLHazardTrackingMode](mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.
