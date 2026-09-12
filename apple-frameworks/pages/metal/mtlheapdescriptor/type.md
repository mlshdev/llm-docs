> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheapdescriptor/type](https://developer.apple.com/documentation/metal/mtlheapdescriptor/type)

# type (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```swift
var type: MTLHeapType { get set }
```

<a id="discussion"></a>

## Discussion

This property’s default value is [MTLHeapType.automatic](../mtlheaptype/automatic.md).

## See Also

### Configuring a heap

- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.

# type (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLHeapType type;
```

<a id="discussion"></a>

## Discussion

This property’s default value is [MTLHeapTypeAutomatic](../mtlheaptype/automatic.md).

## See Also

### Configuring a heap

- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.
