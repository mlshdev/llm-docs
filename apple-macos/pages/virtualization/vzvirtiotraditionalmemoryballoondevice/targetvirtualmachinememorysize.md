> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiotraditionalmemoryballoondevice/targetvirtualmachinememorysize](https://developer.apple.com/documentation/virtualization/vzvirtiotraditionalmemoryballoondevice/targetvirtualmachinememorysize)

# targetVirtualMachineMemorySize (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The target amount of memory, in bytes, to make available to the virtual machine.

## Declaration

```swift
var targetVirtualMachineMemorySize: UInt64 { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to change the amount of physical memory currently assigned to the guest operating system. If the new value is less than the current amount of physical memory, the virtual machine asks the guest operating system to return enough memory pages to fit within the new limit. If the guest complies, the virtual machine updates the guest’s physical memory size to the new value. If the guest doesn’t comply, the physical memory size remains unchanged.

The new value you specify must be a multiple of 1 megabyte — that is, 1024 \* 1024 bytes. The value must also be less than or equal to the value in the [memorySize](../vzvirtualmachineconfiguration/memorysize.md) property of your [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) object. If you specify a value that isn’t rounded to the nearest megabyte, the virtual machine rounds the memory size down to the nearest megabyte. If the resulting value is less than the value in [minimumAllowedMemorySize](../vzvirtualmachineconfiguration/minimumallowedmemorysize.md), the virtual machine rounds up to the minimum value.

The virtual machine sets the initial value of this property to the value in the [memorySize](../vzvirtualmachineconfiguration/memorysize.md) property of your configuration object.

# targetVirtualMachineMemorySize (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The target amount of memory, in bytes, to make available to the virtual machine.

## Declaration

```objectivec
@property (readwrite) uint64_t targetVirtualMachineMemorySize;
```

<a id="Discussion"></a>

## Discussion

Use this property to change the amount of physical memory currently assigned to the guest operating system. If the new value is less than the current amount of physical memory, the virtual machine asks the guest operating system to return enough memory pages to fit within the new limit. If the guest complies, the virtual machine updates the guest’s physical memory size to the new value. If the guest doesn’t comply, the physical memory size remains unchanged.

The new value you specify must be a multiple of 1 megabyte — that is, 1024 \* 1024 bytes. The value must also be less than or equal to the value in the [memorySize](../vzvirtualmachineconfiguration/memorysize.md) property of your [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) object. If you specify a value that isn’t rounded to the nearest megabyte, the virtual machine rounds the memory size down to the nearest megabyte. If the resulting value is less than the value in [minimumAllowedMemorySize](../vzvirtualmachineconfiguration/minimumallowedmemorysize.md), the virtual machine rounds up to the minimum value.

The virtual machine sets the initial value of this property to the value in the [memorySize](../vzvirtualmachineconfiguration/memorysize.md) property of your configuration object.
