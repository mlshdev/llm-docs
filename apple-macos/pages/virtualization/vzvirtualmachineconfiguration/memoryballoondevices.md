> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/memoryballoondevices](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/memoryballoondevices)

# memoryBalloonDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

An array that you configure with a memory balloon device, used to update the memory in the VM.

## Declaration

```swift
var memoryBalloonDevices: [VZMemoryBalloonDeviceConfiguration] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to request a memory balloon device from the VM. The VM initially reserves the amount of memory in the [memorySize](memorysize.md) property for the guest operating system. A balloon memory device asks the guest system to return memory pages that it isn’t using to the VM. You might use the device to reclaim memory when the amount of free memory on the host system runs low.

The default value of this property is an empty array, which doesn’t result in the creation of a balloon memory device. To create a balloon memory device, add a single [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](../vzvirtiotraditionalmemoryballoondeviceconfiguration.md) object to the array. In response, the VM creates a [VZVirtioTraditionalMemoryBalloonDevice](../vzvirtiotraditionalmemoryballoondevice.md) object and adds it to its [memoryBalloonDevices](../vzvirtualmachine/memoryballoondevices.md) property. Use that object to change the amount of memory reserved for the guest system.

## See Also

### Sizing the memory partition

- [memorySize](memorysize.md): The amount of physical memory the guest operating system recognizes.
- [minimumAllowedMemorySize](minimumallowedmemorysize.md): The minimum amount of memory that you may configure for the VM.
- [maximumAllowedMemorySize](maximumallowedmemorysize.md): The maximum amount of memory that you may configure for the VM.

# memoryBalloonDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

An array that you configure with a memory balloon device, used to update the memory in the VM.

## Declaration

```objectivec
@property (copy, readwrite) NSArray<VZMemoryBalloonDeviceConfiguration *> * memoryBalloonDevices;
```

<a id="Discussion"></a>

## Discussion

Use this property to request a memory balloon device from the VM. The VM initially reserves the amount of memory in the [memorySize](memorysize.md) property for the guest operating system. A balloon memory device asks the guest system to return memory pages that it isn’t using to the VM. You might use the device to reclaim memory when the amount of free memory on the host system runs low.

The default value of this property is an empty array, which doesn’t result in the creation of a balloon memory device. To create a balloon memory device, add a single [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](../vzvirtiotraditionalmemoryballoondeviceconfiguration.md) object to the array. In response, the VM creates a [VZVirtioTraditionalMemoryBalloonDevice](../vzvirtiotraditionalmemoryballoondevice.md) object and adds it to its [memoryBalloonDevices](../vzvirtualmachine/memoryballoondevices.md) property. Use that object to change the amount of memory reserved for the guest system.

## See Also

### Sizing the memory partition

- [memorySize](memorysize.md): The amount of physical memory the guest operating system recognizes.
- [minimumAllowedMemorySize](minimumallowedmemorysize.md): The minimum amount of memory that you may configure for the VM.
- [maximumAllowedMemorySize](maximumallowedmemorysize.md): The maximum amount of memory that you may configure for the VM.
