> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/resourceoptions](https://developer.apple.com/documentation/metal/mtlheap/resourceoptions)

# resourceOptions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The options for resources created by the heap.

## Declaration

```swift
var resourceOptions: MTLResourceOptions { get }
```

<a id="discussion"></a>

## Discussion

The value of this property aggregates the values of [storageMode](storagemode.md), [cpuCacheMode](cpucachemode.md), and [hazardTrackingMode](hazardtrackingmode.md).

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [type](type.md): The heap’s type.
- [storageMode](storagemode.md): The heap’s storage mode.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.

# resourceOptions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The options for resources created by the heap.

## Declaration

```objectivec
@property (readonly) MTLResourceOptions resourceOptions;
```

<a id="discussion"></a>

## Discussion

The value of this property aggregates the values of [storageMode](storagemode.md), [cpuCacheMode](cpucachemode.md), and [hazardTrackingMode](hazardtrackingmode.md).

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [type](type.md): The heap’s type.
- [storageMode](storagemode.md): The heap’s storage mode.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
