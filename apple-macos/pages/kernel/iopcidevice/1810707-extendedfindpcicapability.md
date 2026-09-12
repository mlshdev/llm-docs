> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/1810707-extendedfindpcicapability](https://developer.apple.com/documentation/kernel/iopcidevice/1810707-extendedfindpcicapability)

# extendedFindPCICapability

**Interface language:** Objective-C

**Framework:** Kernel

Search configuration space for a PCI capability register.

## Declaration

```objectivec
virtual UInt32 extendedFindPCICapability(
 UInt32 capabilityID,
 IOByteCount *offset = 0 ); 
```

## Parameters

- `capabilityID`: A PCI capability ID. PCI Express devices may support extended capabilities in config space starting at offset 0x100. To search this space, the ID passed should be the negated value of the PCI-SIG assigned ID for the extended capability.
- `offset`: An optional in/out parameter to return the offset into config space where the capability was found, and to set the start point of the next search. Initialize the offset to zero before the first call to extendedFindPCICapability() and subsequent calls will find all capabilty blocks that may exist on the device with the same ID.

<a id="return_value"></a>

## Return Value

The 32-bit value of the capability register if one was found, zero otherwise.

<a id="overview"></a>

## Overview

This method searches the device's config space for a PCI capability register matching the passed capability ID, if the device supports PCI capabilities.

## See Also

### Miscellaneous

- [configRead16](1810221-configread16.md): Reads a 16-bit value from the PCI device's configuration space.
- [configRead32](1810249-configread32.md): Reads a 32-bit value from the PCI device's configuration space.
- [configRead8](1810282-configread8.md): Reads a 8-bit value from the PCI device's configuration space.
- [configWrite16](1810325-configwrite16.md): Writes a 16-bit value to the PCI device's configuration space.
- [configWrite32](1810356-configwrite32.md): Writes a 32-bit value to the PCI device's configuration space.
- [configWrite8](1810381-configwrite8.md): Writes a 8-bit value to the PCI device's configuration space.
- [enablePCIPowerManagement](1810420-enablepcipowermanagement.md): enable PCI power management for sleep state
- [extendedConfigRead16](1810448-extendedconfigread16.md): Reads a 16-bit value from the PCI device's configuration space.
- [extendedConfigRead32](1810495-extendedconfigread32.md): Reads a 32-bit value from the PCI device's configuration space.
- [extendedConfigRead8](1810539-extendedconfigread8.md): Reads a 8-bit value from the PCI device's configuration space.
- [extendedConfigWrite16](1810577-extendedconfigwrite16.md): Writes a 16-bit value to the PCI device's configuration space.
- [extendedConfigWrite32](1810617-extendedconfigwrite32.md): Writes a 32-bit value to the PCI device's configuration space.
- [extendedConfigWrite8](1810659-extendedconfigwrite8.md): Writes a 8-bit value to the PCI device's configuration space.
- [findPCICapability](1810749-findpcicapability.md): Search configuration space for a PCI capability register.
- [getBusNumber](1810790-getbusnumber.md): Accessor to return the PCI device's assigned bus number.
- [getDeviceMemoryWithRegister](1810831-getdevicememorywithregister.md): Returns an instance of IODeviceMemory representing one of the device's memory mapped ranges.
- [getDeviceNumber](1810861-getdevicenumber.md): Accessor to return the PCI device's device number.
- [getFunctionNumber](1810892-getfunctionnumber.md): Accessor to return the PCI device's function number.
- [hasPCIPowerManagement](1810931-haspcipowermanagement.md): determine whether or not the device supports PCI Bus Power Management.
- [ioDeviceMemory](1810959-iodevicememory.md): Accessor to the I/O space aperture for the bus.
- [ioRead16](1810986-ioread16.md): Reads a 16-bit value from an I/O space aperture.
- [ioRead32](1811005-ioread32.md): Reads a 32-bit value from an I/O space aperture.
- [ioRead8](1811039-ioread8.md): Reads a 8-bit value from an I/O space aperture.
- [ioWrite16](1811083-iowrite16.md): Writes a 16-bit value to an I/O space aperture.
- [ioWrite32](1811113-iowrite32.md): Writes a 32-bit value to an I/O space aperture.
- [ioWrite8](1811151-iowrite8.md): Writes a 8-bit value to an I/O space aperture.
- [mapDeviceMemoryWithRegister](1811470-mapdevicememorywithregister.md): Maps a physical range of the device.
- [setBusMasterEnable](1811490-setbusmasterenable.md): Enables bus mastering on the device.
- [setConfigBits](1811511-setconfigbits.md): Sets masked bits in a configuration space register.
- [setIOEnable](1811528-setioenable.md): Sets the device's I/O space response.
- [setMemoryEnable](1811543-setmemoryenable.md): Sets the device's memory space response.
