> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.driverkit.family.serial](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.driverkit.family.serial)

# com.apple.developer.driverkit.family.serial

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean value that indicates whether to match the driver against devices with serial communication interfaces.

## Details

`com.apple.developer.driverkit.family.serial`

<a id="Discussion"></a>

## Discussion

Add this entitlement to the default entitlements file that Xcode created for your driver project.

## See Also

### DriverKit family entitlements

- [DriverKit Audio Family](com.apple.developer.driverkit.family.audio.md): A Boolean value that indicates whether the device supports audio functionality.
- [com.apple.developer.driverkit.family.block-storage-device](com.apple.developer.driverkit.family.block-storage-device.md): A Boolean value that indicates whether to match the driver against block storage devices that use custom drivers.
- [com.apple.developer.driverkit.family.midi](com.apple.developer.driverkit.family.midi.md): A Boolean value that indicates whether to match the driver against devices that support MIDI.
- [com.apple.developer.driverkit.family.networking](com.apple.developer.driverkit.family.networking.md): A Boolean value that indicates whether to match the driver against devices that communicate using networking protocols.
- [com.apple.developer.driverkit.family.scsicontroller](com.apple.developer.driverkit.family.scsicontroller.md): A Boolean value that indicates whether to match the driver against devices with SCSI controllers.
- [com.apple.developer.driverkit.transport.pci](com.apple.developer.driverkit.transport.pci.md): An array of PCI device descriptors that your custom driver supports.
- [com.apple.developer.driverkit.transport.usb](com.apple.developer.driverkit.transport.usb.md): An array of dictionaries that identify the USB devices the driver supports.
