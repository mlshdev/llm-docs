> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlheap/cpucachemode

# cpuCacheMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The heap’s CPU cache mode.

## Declaration

```swift
var cpuCacheMode: MTLCPUCacheMode { get }
```

<a id="discussion"></a>

## Discussion

Any resources you allocate on the heap have this CPU cache mode.

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [type](type.md): The heap’s type.
- [storageMode](storagemode.md): The heap’s storage mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.

# cpuCacheMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The heap’s CPU cache mode.

## Declaration

```objectivec
@property (readonly) MTLCPUCacheMode cpuCacheMode;
```

<a id="discussion"></a>

## Discussion

Any resources you allocate on the heap have this CPU cache mode.

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [type](type.md): The heap’s type.
- [storageMode](storagemode.md): The heap’s storage mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.
