> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheapdescriptor/hazardtrackingmode](https://developer.apple.com/documentation/metal/mtlheapdescriptor/hazardtrackingmode)

# hazardTrackingMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```swift
var hazardTrackingMode: MTLHazardTrackingMode { get set }
```

<a id="discussion"></a>

## Discussion

This property’s default value is [MTLHazardTrackingMode.default](../mtlhazardtrackingmode/default.md), which is equivalent to [MTLHazardTrackingMode.untracked](../mtlhazardtrackingmode/untracked.md) for a heap.

The resources you allocate from a heap inherit that heap’s hazard tracking mode.

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.

# hazardTrackingMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLHazardTrackingMode hazardTrackingMode;
```

<a id="discussion"></a>

## Discussion

This property’s default value is [MTLHazardTrackingModeDefault](../mtlhazardtrackingmode/default.md), which is equivalent to [MTLHazardTrackingModeUntracked](../mtlhazardtrackingmode/untracked.md) for a heap.

The resources you allocate from a heap inherit that heap’s hazard tracking mode.

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.
