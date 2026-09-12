> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/hazardtrackingmode](https://developer.apple.com/documentation/metal/mtlheap/hazardtrackingmode)

# hazardTrackingMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The heap’s hazard tracking mode.

## Declaration

```swift
var hazardTrackingMode: MTLHazardTrackingMode { get }
```

<a id="discussion"></a>

## Discussion

Any resources you allocate on the heap have this hazard tracking mode.

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [type](type.md): The heap’s type.
- [storageMode](storagemode.md): The heap’s storage mode.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.

# hazardTrackingMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The heap’s hazard tracking mode.

## Declaration

```objectivec
@property (readonly) MTLHazardTrackingMode hazardTrackingMode;
```

<a id="discussion"></a>

## Discussion

Any resources you allocate on the heap have this hazard tracking mode.

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [type](type.md): The heap’s type.
- [storageMode](storagemode.md): The heap’s storage mode.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.
