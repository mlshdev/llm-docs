> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/device](https://developer.apple.com/documentation/metal/mtlheap/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The device object that created the heap.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

A heap is always associated with the [MTLDevice](../mtldevice.md) that created it and can be used only with that device.

## See Also

### Checking a heap’s permanent configuration

- [type](type.md): The heap’s type.
- [storageMode](storagemode.md): The heap’s storage mode.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The device object that created the heap.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

A heap is always associated with the [MTLDevice](../mtldevice.md) that created it and can be used only with that device.

## See Also

### Checking a heap’s permanent configuration

- [type](type.md): The heap’s type.
- [storageMode](storagemode.md): The heap’s storage mode.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.
