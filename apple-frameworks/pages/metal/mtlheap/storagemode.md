> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/storagemode](https://developer.apple.com/documentation/metal/mtlheap/storagemode)

# storageMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The heap’s storage mode.

## Declaration

```swift
var storageMode: MTLStorageMode { get }
```

<a id="discussion"></a>

## Discussion

Any resources you allocate on the heap have this storage mode.

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [type](type.md): The heap’s type.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.

# storageMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The heap’s storage mode.

## Declaration

```objectivec
@property (readonly) MTLStorageMode storageMode;
```

<a id="discussion"></a>

## Discussion

Any resources you allocate on the heap have this storage mode.

## See Also

### Checking a heap’s permanent configuration

- [device](device.md): The device object that created the heap.
- [type](type.md): The heap’s type.
- [cpuCacheMode](cpucachemode.md): The heap’s CPU cache mode.
- [hazardTrackingMode](hazardtrackingmode.md): The heap’s hazard tracking mode.
- [resourceOptions](resourceoptions.md): The options for resources created by the heap.
