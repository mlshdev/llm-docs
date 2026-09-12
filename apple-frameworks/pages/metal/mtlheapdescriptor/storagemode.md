> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheapdescriptor/storagemode](https://developer.apple.com/documentation/metal/mtlheapdescriptor/storagemode)

# storageMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The storage mode for the heaps you create with this descriptor.

## Declaration

```swift
var storageMode: MTLStorageMode { get set }
```

<a id="discussion"></a>

## Discussion

For devices with Apple silicon, you can create a heap with either the [MTLStorageMode.private](../mtlstoragemode/private.md) or the [MTLStorageMode.shared](../mtlstoragemode/shared.md) storage mode. However, you can only create heaps with private storage on macOS devices without Apple silicon.

The resources you allocate from a heap inherit that heap’s storage mode. This property’s default value is [MTLStorageMode.private](../mtlstoragemode/private.md).

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.

# storageMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The storage mode for the heaps you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLStorageMode storageMode;
```

<a id="discussion"></a>

## Discussion

For devices with Apple silicon, you can create a heap with either the [MTLStorageModePrivate](../mtlstoragemode/private.md) or the [MTLStorageModeShared](../mtlstoragemode/shared.md) storage mode. However, you can only create heaps with private storage on macOS devices without Apple silicon.

The resources you allocate from a heap inherit that heap’s storage mode. This property’s default value is [MTLStorageModePrivate](../mtlstoragemode/private.md).

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [size](size.md): The total amount of memory, in bytes, for the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.
