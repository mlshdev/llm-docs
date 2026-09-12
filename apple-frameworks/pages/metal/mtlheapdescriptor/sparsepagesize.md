> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheapdescriptor/sparsepagesize](https://developer.apple.com/documentation/metal/mtlheapdescriptor/sparsepagesize)

# sparsePageSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The page size for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```swift
var sparsePageSize: MTLSparsePageSize { get set }
```

<a id="discussion"></a>

## Discussion

This property’s default value is 16 kilobytes ([MTLSparsePageSize.size16](../mtlsparsepagesize/size16.md)), which is a smaller page size option that can help reduce your app’s memory usage. However, you can reduce operational overhead for sparse textures with larger page sizes, such as [MTLSparsePageSize.size64](../mtlsparsepagesize/size64.md) and [MTLSparsePageSize.size256](../mtlsparsepagesize/size256.md). These operations include blit commands and the configuration of sparse texture mappings (see [Blit passes](../blit-passes.md) and [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md), respectively).

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.

# sparsePageSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The page size for any resources you allocate from the heaps you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLSparsePageSize sparsePageSize;
```

<a id="discussion"></a>

## Discussion

This property’s default value is 16 kilobytes ([MTLSparsePageSize16](../mtlsparsepagesize/size16.md)), which is a smaller page size option that can help reduce your app’s memory usage. However, you can reduce operational overhead for sparse textures with larger page sizes, such as [MTLSparsePageSize64](../mtlsparsepagesize/size64.md) and [MTLSparsePageSize256](../mtlsparsepagesize/size256.md). These operations include blit commands and the configuration of sparse texture mappings (see [Blit passes](../blit-passes.md) and [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md), respectively).

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
