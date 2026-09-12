> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresource/cpucachemode](https://developer.apple.com/documentation/metal/mtlresource/cpucachemode)

# cpuCacheMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The CPU cache mode that defines the CPU mapping of the resource.

## Declaration

```swift
var cpuCacheMode: MTLCPUCacheMode { get }
```

<a id="discussion"></a>

## Discussion

The cache mode is set when you create the resource and cannot be changed.

## See Also

### Reading memory and storage properties

- [storageMode](storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [resourceOptions](resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLCPUCacheMode](../mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLStorageMode](../mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](../mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.

# cpuCacheMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The CPU cache mode that defines the CPU mapping of the resource.

## Declaration

```objectivec
@property (readonly) MTLCPUCacheMode cpuCacheMode;
```

<a id="discussion"></a>

## Discussion

The cache mode is set when you create the resource and cannot be changed.

## See Also

### Reading memory and storage properties

- [storageMode](storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [resourceOptions](resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLCPUCacheMode](../mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLStorageMode](../mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](../mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.
