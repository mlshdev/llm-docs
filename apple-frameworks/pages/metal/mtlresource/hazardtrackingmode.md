> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresource/hazardtrackingmode](https://developer.apple.com/documentation/metal/mtlresource/hazardtrackingmode)

# hazardTrackingMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A mode that determines whether Metal tracks and synchronizes resource access.

## Declaration

```swift
var hazardTrackingMode: MTLHazardTrackingMode { get }
```

<a id="discussion"></a>

## Discussion

This value can be either [MTLHazardTrackingMode.untracked](../mtlhazardtrackingmode/untracked.md) or [MTLHazardTrackingMode.tracked](../mtlhazardtrackingmode/tracked.md).

## See Also

### Reading memory and storage properties

- [cpuCacheMode](cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](storagemode.md): The location and access permissions of the resource.
- [resourceOptions](resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLCPUCacheMode](../mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLStorageMode](../mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](../mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.

# hazardTrackingMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A mode that determines whether Metal tracks and synchronizes resource access.

## Declaration

```objectivec
@property (readonly) MTLHazardTrackingMode hazardTrackingMode;
```

<a id="discussion"></a>

## Discussion

This value can be either [MTLHazardTrackingModeUntracked](../mtlhazardtrackingmode/untracked.md) or [MTLHazardTrackingModeTracked](../mtlhazardtrackingmode/tracked.md).

## See Also

### Reading memory and storage properties

- [cpuCacheMode](cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](storagemode.md): The location and access permissions of the resource.
- [resourceOptions](resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLCPUCacheMode](../mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLStorageMode](../mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](../mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.
