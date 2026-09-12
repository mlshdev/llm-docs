> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresource/resourceoptions](https://developer.apple.com/documentation/metal/mtlresource/resourceoptions)

# resourceOptions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The storage mode, CPU cache mode, and hazard tracking mode of the resource.

## Declaration

```swift
var resourceOptions: MTLResourceOptions { get }
```

<a id="discussion"></a>

## Discussion

The value of this property aggregates the values of [storageMode](storagemode.md), [cpuCacheMode](cpucachemode.md), and [hazardTrackingMode](hazardtrackingmode.md).

## See Also

### Reading memory and storage properties

- [cpuCacheMode](cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [MTLCPUCacheMode](../mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLStorageMode](../mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](../mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.

# resourceOptions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The storage mode, CPU cache mode, and hazard tracking mode of the resource.

## Declaration

```objectivec
@property (readonly) MTLResourceOptions resourceOptions;
```

<a id="discussion"></a>

## Discussion

The value of this property aggregates the values of [storageMode](storagemode.md), [cpuCacheMode](cpucachemode.md), and [hazardTrackingMode](hazardtrackingmode.md).

## See Also

### Reading memory and storage properties

- [cpuCacheMode](cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [MTLCPUCacheMode](../mtlcpucachemode.md): Options for the CPU cache mode that define the CPU mapping of the resource.
- [MTLStorageMode](../mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](../mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.
