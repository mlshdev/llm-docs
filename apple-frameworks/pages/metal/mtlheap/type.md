> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/type](https://developer.apple.com/documentation/metal/mtlheap/type)

# type (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The heap’s type.

## Declaration

```swift
var type: MTLHeapType { get }
```

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [storageMode](storagemode.md): The heap’s storage mode.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.

# type (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The heap’s type.

## Declaration

```objectivec
@property (readonly) MTLHeapType type;
```

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [storageMode](storagemode.md): The heap’s storage mode.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.
