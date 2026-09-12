> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheapdescriptor/resourceoptions](https://developer.apple.com/documentation/metal/mtlheapdescriptor/resourceoptions)

# resourceOptions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The combined behavior for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```swift
var resourceOptions: MTLResourceOptions { get set }
```

<a id="discussion"></a>

## Discussion

This property aggregates the values of [storageMode](storagemode.md), [cpuCacheMode](cpucachemode.md), and [hazardTrackingMode](hazardtrackingmode.md). Any modifications you make to this property affect the other properties, and vice versa.

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.

# resourceOptions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The combined behavior for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLResourceOptions resourceOptions;
```

<a id="discussion"></a>

## Discussion

This property aggregates the values of [storageMode](storagemode.md), [cpuCacheMode](cpucachemode.md), and [hazardTrackingMode](hazardtrackingmode.md). Any modifications you make to this property affect the other properties, and vice versa.

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.
