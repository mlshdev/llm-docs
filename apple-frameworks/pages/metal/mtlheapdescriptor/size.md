> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheapdescriptor/size](https://developer.apple.com/documentation/metal/mtlheapdescriptor/size)

# size (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The total amount of memory, in bytes, for the heaps you create with this descriptor.

## Declaration

```swift
var size: Int { get set }
```

<a id="discussion"></a>

## Discussion

You can use various [MTLDevice](../mtldevice.md) methods to help you estimate an appropriate heap size, including the following:

- [heapBufferSizeAndAlign(length:options:)](../mtldevice/heapbuffersizeandalign%28length_options_%29.md)
- [heapTextureSizeAndAlign(descriptor:)](../mtldevice/heaptexturesizeandalign%28descriptor_%29.md)
- [heapAccelerationStructureSizeAndAlign(size:)](../mtldevice/heapaccelerationstructuresizeandalign%28size_%29.md)
- [heapAccelerationStructureSizeAndAlign(descriptor:)](../mtldevice/heapaccelerationstructuresizeandalign%28descriptor_%29.md)

> **Note**

>  Metal may round a heap’s size to a page boundary.

This property’s default value is `0`.

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.

# size (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The total amount of memory, in bytes, for the heaps you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger size;
```

<a id="discussion"></a>

## Discussion

You can use various [MTLDevice](../mtldevice.md) methods to help you estimate an appropriate heap size, including the following:

- [heapBufferSizeAndAlignWithLength:options:](../mtldevice/heapbuffersizeandalign%28length_options_%29.md)
- [heapTextureSizeAndAlignWithDescriptor:](../mtldevice/heaptexturesizeandalign%28descriptor_%29.md)
- [heapAccelerationStructureSizeAndAlignWithSize:](../mtldevice/heapaccelerationstructuresizeandalign%28size_%29.md)
- [heapAccelerationStructureSizeAndAlignWithDescriptor:](../mtldevice/heapaccelerationstructuresizeandalign%28descriptor_%29.md)

> **Note**

>  Metal may round a heap’s size to a page boundary.

This property’s default value is `0`.

## See Also

### Configuring a heap

- [type](type.md): The memory placement strategy for any resources you allocate from the heaps you create with this descriptor.
- [storageMode](storagemode.md): The storage mode for the heaps you create with this descriptor.
- [cpuCacheMode](cpucachemode.md): The CPU cache behavior for any resources you allocate from the heaps you create with this descriptor.
- [hazardTrackingMode](hazardtrackingmode.md): The hazard tracking behavior for any resources you allocate from the heaps you create with this descriptor.
- [resourceOptions](resourceoptions.md): The combined behavior for any resources you allocate from the heaps you create with this descriptor.
- [sparsePageSize](sparsepagesize.md): The page size for any resources you allocate from the heaps you create with this descriptor.
