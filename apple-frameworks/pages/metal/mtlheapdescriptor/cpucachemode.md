> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheapdescriptor/cpucachemode](https://developer.apple.com/documentation/metal/mtlheapdescriptor/cpucachemode)

# cpuCacheMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```swift
var cpuCacheMode: MTLCPUCacheMode { get set }
```

<a id="discussion"></a>

## Discussion

This property’s default value is [MTLCPUCacheMode.defaultCache](../mtlcpucachemode/defaultcache.md).

The resources you allocate from a heap inherit that heap’s CPU cache mode.

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.

# cpuCacheMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLCPUCacheMode cpuCacheMode;
```

<a id="discussion"></a>

## Discussion

This property’s default value is [MTLCPUCacheModeDefaultCache](../mtlcpucachemode/defaultcache.md).

The resources you allocate from a heap inherit that heap’s CPU cache mode.

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.
