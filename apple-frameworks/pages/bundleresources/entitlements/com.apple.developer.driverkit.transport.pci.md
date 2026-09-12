> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.driverkit.transport.pci](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.driverkit.transport.pci)

# com.apple.developer.driverkit.transport.pci (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15.4+

An array of PCI device descriptors that your custom driver supports.

## Details

`com.apple.developer.driverkit.transport.pci`

<a id="Discussion"></a>

## Discussion

Each element in the array is a dictionary whose keys identify a supported device. The values of these keys correspond to values stored in the PCI device’s configuration registers.

You can provide several matching values for a key, separated by spaces. You can also specify an optional mask for the configuration register value by putting the mask after the value, prepended with an `&` character.

Examples:

| Key | Value | Result |
| --- | --- | --- |
| `IOPCIMatch` | `0x00261011` | Matches a device whose vendor ID is `0x1011`, and device ID is `0x0026`, including subsystem IDs. |
| `IOPCIMatch` | `0x00789004&0x00ffffff 0x78009004&0x0xff00ffff` | Matches with any device with a vendor ID of `0x9004`, and a device ID of `0xzz78` or 0x78zz, where ‘`z`’ is any hexadecimal digit. |
| `IOPCIClassMatch` | `0x02000000&0xffff0000` | Matches a device whose class code is `0x0200zz` (where ‘`z`’ is any hexadecimal digit), an ethernet device. |

> **Note**

>  You also use the keys defined by this entitlement in your app’s `Info.plist`, to identify which devices your driver loads on.

## Topics

### Identifying PCI Devices

Keys used for identifying and matching PCI devices.

- [IOPCIMatch](com.apple.developer.driverkit.transport.pci/iopcimatch.md): A key to match PCI devices by vendor and device ID registers or subsystem registers.
- [IOPCIPrimaryMatch](com.apple.developer.driverkit.transport.pci/iopciprimarymatch.md): A key to match PCI devices by vendor and device ID registers.
- [IOPCISecondaryMatch](com.apple.developer.driverkit.transport.pci/iopcisecondarymatch.md): A key to match PCI devices by subsystem vendor ID and device ID registers.
- [IOPCIClassMatch](com.apple.developer.driverkit.transport.pci/iopciclassmatch.md): A key to match PCI devices by class code register.

## See Also

### DriverKit family entitlements

- [DriverKit Audio Family](com.apple.developer.driverkit.family.audio.md): A Boolean value that indicates whether the device supports audio functionality.
- [com.apple.developer.driverkit.family.block-storage-device](com.apple.developer.driverkit.family.block-storage-device.md): A Boolean value that indicates whether to match the driver against block storage devices that use custom drivers.
- [com.apple.developer.driverkit.family.midi](com.apple.developer.driverkit.family.midi.md): A Boolean value that indicates whether to match the driver against devices that support MIDI.
- [com.apple.developer.driverkit.family.networking](com.apple.developer.driverkit.family.networking.md): A Boolean value that indicates whether to match the driver against devices that communicate using networking protocols.
- [com.apple.developer.driverkit.family.scsicontroller](com.apple.developer.driverkit.family.scsicontroller.md): A Boolean value that indicates whether to match the driver against devices with SCSI controllers.
- [com.apple.developer.driverkit.family.serial](com.apple.developer.driverkit.family.serial.md): A Boolean value that indicates whether to match the driver against devices with serial communication interfaces.
- [com.apple.developer.driverkit.transport.usb](com.apple.developer.driverkit.transport.usb.md): An array of dictionaries that identify the USB devices the driver supports.

# com.apple.developer.driverkit.transport.pci (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15.4+

An array of PCI device descriptors that your custom driver supports.

## Details

`com.apple.developer.driverkit.transport.pci`

<a id="Discussion"></a>

## Discussion

Each element in the array is a dictionary whose keys identify a supported device. The values of these keys correspond to values stored in the PCI device’s configuration registers.

You can provide several matching values for a key, separated by spaces. You can also specify an optional mask for the configuration register value by putting the mask after the value, prepended with an `&` character.

Examples:

| Key | Value | Result |
| --- | --- | --- |
| `IOPCIMatch` | `0x00261011` | Matches a device whose vendor ID is `0x1011`, and device ID is `0x0026`, including subsystem IDs. |
| `IOPCIMatch` | `0x00789004&0x00ffffff 0x78009004&0x0xff00ffff` | Matches with any device with a vendor ID of `0x9004`, and a device ID of `0xzz78` or 0x78zz, where ‘`z`’ is any hexadecimal digit. |
| `IOPCIClassMatch` | `0x02000000&0xffff0000` | Matches a device whose class code is `0x0200zz` (where ‘`z`’ is any hexadecimal digit), an ethernet device. |

> **Note**

>  You also use the keys defined by this entitlement in your app’s `Info.plist`, to identify which devices your driver loads on.

## Topics

### Identifying PCI Devices

Keys used for identifying and matching PCI devices.

- [IOPCIMatch](com.apple.developer.driverkit.transport.pci/iopcimatch.md): A key to match PCI devices by vendor and device ID registers or subsystem registers.
- [IOPCIPrimaryMatch](com.apple.developer.driverkit.transport.pci/iopciprimarymatch.md): A key to match PCI devices by vendor and device ID registers.
- [IOPCISecondaryMatch](com.apple.developer.driverkit.transport.pci/iopcisecondarymatch.md): A key to match PCI devices by subsystem vendor ID and device ID registers.
- [IOPCIClassMatch](com.apple.developer.driverkit.transport.pci/iopciclassmatch.md): A key to match PCI devices by class code register.

## See Also

### Related Documentation

- [PCIDriverKit](../../pcidriverkit.md): Develop device drivers for Peripheral Component Interconnect (PCI) accessories.

### DriverKit family entitlements

- [DriverKit Audio Family](com.apple.developer.driverkit.family.audio.md): A Boolean value that indicates whether the device supports audio functionality.
- [com.apple.developer.driverkit.family.block-storage-device](com.apple.developer.driverkit.family.block-storage-device.md): A Boolean value that indicates whether to match the driver against block storage devices that use custom drivers.
- [com.apple.developer.driverkit.family.midi](com.apple.developer.driverkit.family.midi.md): A Boolean value that indicates whether to match the driver against devices that support MIDI.
- [com.apple.developer.driverkit.family.networking](com.apple.developer.driverkit.family.networking.md): A Boolean value that indicates whether to match the driver against devices that communicate using networking protocols.
- [com.apple.developer.driverkit.family.scsicontroller](com.apple.developer.driverkit.family.scsicontroller.md): A Boolean value that indicates whether to match the driver against devices with SCSI controllers.
- [com.apple.developer.driverkit.family.serial](com.apple.developer.driverkit.family.serial.md): A Boolean value that indicates whether to match the driver against devices with serial communication interfaces.
- [com.apple.developer.driverkit.transport.usb](com.apple.developer.driverkit.transport.usb.md): An array of dictionaries that identify the USB devices the driver supports.
