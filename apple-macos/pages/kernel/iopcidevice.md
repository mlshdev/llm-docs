> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice](https://developer.apple.com/documentation/kernel/iopcidevice)

# IOPCIDevice

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 11.0)

An IOService class representing a PCI device.

## Declaration

```objectivec
class IOPCIDevice : IOService
```

<a id="overview"></a>

## Overview

The discovery of a PCI device by the PCI bus family results in an instance of the IOPCIDevice being created and published. It provides services for looking up and mapping memory mapped hardware, and access to the PCI configuration and I/O spaces.

Matching Supported by IOPCIDevice

Two types of matching are available, OpenFirmware name matching and PCI register matching. Currently, only one of these two matching schemes can be used in the same property table.

OpenFirmware Name Matching

IOService performs matching based on the IONameMatch property (see IOService). IOPCIDevices created with OpenFirmware device tree entries will name match based on the standard OpenFirmware name matching properties.

PCI Register Matching

A PCI device driver can also match on the values of certain config space registers.

In each case, several matching values can be specified, and an optional mask for the value of the config space register may follow the value, preceded by an '&' character.

kIOPCIMatchKey, "IOPCIMatch"

The kIOPCIMatchKey property matches the vendor and device ID (0x00) register, or the subsystem register (0x2c).

kIOPCIPrimaryMatchKey, "IOPCIPrimaryMatch"

The kIOPCIPrimaryMatchKey property matches the vendor and device ID (0x00) register.

kIOPCISecondaryMatchKey, "IOPCISecondaryMatch"

The kIOPCISecondaryMatchKey property matches the subsystem register (0x2c).

kIOPCIClassMatchKey, "IOPCIClassMatch"

The kIOPCIClassMatchKey property matches the class code register (0x08). The default mask for this register is 0xffffff00.

Examples:

&ltkey&gtIOPCIMatch&lt/key&gt

&ltstring&gt0x00261011&lt/string&gt

Matches a device whose vendor ID is 0x1011, and device ID is 0x0026, including subsystem IDs.

&ltkey&gtIOPCIMatch&lt/key&gt

&ltstring&gt0x00789004&0x00ffffff 0x78009004&0x0xff00ffff&lt/string&gt

Matches with any device with a vendor ID of 0x9004, and a device ID of 0xzz78 or 0x78zz, where 'z' is don't care.

&ltkey&gtIOPCIClassMatch&lt/key&gt

&ltstring&gt0x02000000&0xffff0000&lt/string&gt

Matches a device whose class code is 0x0200zz, an ethernet device.

## Topics

### Miscellaneous

- [configRead16](iopcidevice/1810221-configread16.md): Reads a 16-bit value from the PCI device's configuration space.
- [configRead32](iopcidevice/1810249-configread32.md): Reads a 32-bit value from the PCI device's configuration space.
- [configRead8](iopcidevice/1810282-configread8.md): Reads a 8-bit value from the PCI device's configuration space.
- [configWrite16](iopcidevice/1810325-configwrite16.md): Writes a 16-bit value to the PCI device's configuration space.
- [configWrite32](iopcidevice/1810356-configwrite32.md): Writes a 32-bit value to the PCI device's configuration space.
- [configWrite8](iopcidevice/1810381-configwrite8.md): Writes a 8-bit value to the PCI device's configuration space.
- [enablePCIPowerManagement](iopcidevice/1810420-enablepcipowermanagement.md): enable PCI power management for sleep state
- [extendedConfigRead16](iopcidevice/1810448-extendedconfigread16.md): Reads a 16-bit value from the PCI device's configuration space.
- [extendedConfigRead32](iopcidevice/1810495-extendedconfigread32.md): Reads a 32-bit value from the PCI device's configuration space.
- [extendedConfigRead8](iopcidevice/1810539-extendedconfigread8.md): Reads a 8-bit value from the PCI device's configuration space.
- [extendedConfigWrite16](iopcidevice/1810577-extendedconfigwrite16.md): Writes a 16-bit value to the PCI device's configuration space.
- [extendedConfigWrite32](iopcidevice/1810617-extendedconfigwrite32.md): Writes a 32-bit value to the PCI device's configuration space.
- [extendedConfigWrite8](iopcidevice/1810659-extendedconfigwrite8.md): Writes a 8-bit value to the PCI device's configuration space.
- [extendedFindPCICapability](iopcidevice/1810707-extendedfindpcicapability.md): Search configuration space for a PCI capability register.
- [findPCICapability](iopcidevice/1810749-findpcicapability.md): Search configuration space for a PCI capability register.
- [getBusNumber](iopcidevice/1810790-getbusnumber.md): Accessor to return the PCI device's assigned bus number.
- [getDeviceMemoryWithRegister](iopcidevice/1810831-getdevicememorywithregister.md): Returns an instance of IODeviceMemory representing one of the device's memory mapped ranges.
- [getDeviceNumber](iopcidevice/1810861-getdevicenumber.md): Accessor to return the PCI device's device number.
- [getFunctionNumber](iopcidevice/1810892-getfunctionnumber.md): Accessor to return the PCI device's function number.
- [hasPCIPowerManagement](iopcidevice/1810931-haspcipowermanagement.md): determine whether or not the device supports PCI Bus Power Management.
- [ioDeviceMemory](iopcidevice/1810959-iodevicememory.md): Accessor to the I/O space aperture for the bus.
- [ioRead16](iopcidevice/1810986-ioread16.md): Reads a 16-bit value from an I/O space aperture.
- [ioRead32](iopcidevice/1811005-ioread32.md): Reads a 32-bit value from an I/O space aperture.
- [ioRead8](iopcidevice/1811039-ioread8.md): Reads a 8-bit value from an I/O space aperture.
- [ioWrite16](iopcidevice/1811083-iowrite16.md): Writes a 16-bit value to an I/O space aperture.
- [ioWrite32](iopcidevice/1811113-iowrite32.md): Writes a 32-bit value to an I/O space aperture.
- [ioWrite8](iopcidevice/1811151-iowrite8.md): Writes a 8-bit value to an I/O space aperture.
- [mapDeviceMemoryWithRegister](iopcidevice/1811470-mapdevicememorywithregister.md): Maps a physical range of the device.
- [setBusMasterEnable](iopcidevice/1811490-setbusmasterenable.md): Enables bus mastering on the device.
- [setConfigBits](iopcidevice/1811511-setconfigbits.md): Sets masked bits in a configuration space register.
- [setIOEnable](iopcidevice/1811528-setioenable.md): Sets the device's I/O space response.
- [setMemoryEnable](iopcidevice/1811543-setmemoryenable.md): Sets the device's memory space response.

### Instance Variables

- [reserved](iopcidevice/reserved.md)

### Instance Methods

- [ClientCrashed_Impl](iopcidevice/3736273-clientcrashed_impl.md): Deprecated.
- [Close](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/close): Closes the session to the PCI device.
- [ConfigurationRead16](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/configurationread16): Reads a 16-bit data value synchronously from the device’s configuration space.
- [ConfigurationRead32](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/configurationread32): Reads a 32-bit data value synchronously from the device’s configuration space.
- [ConfigurationRead8](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/configurationread8): Reads an 8-bit data value synchronously from the device’s configuration space.
- [ConfigurationWrite16](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/configurationwrite16): Writes an 16-bit data value to the device’s configuration space.
- [ConfigurationWrite32](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/configurationwrite32): Writes an 32-bit data value to the device’s configuration space.
- [ConfigurationWrite8](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/configurationwrite8): Writes an 8-bit data value to the device’s configuration space.
- [ConfigureInterrupts](iopcidevice/3919729-configureinterrupts.md): Deprecated.
- [ConfigureInterrupts_Impl](iopcidevice/3919730-configureinterrupts_impl.md): Deprecated.
- [Dispatch](iopcidevice/3180683-dispatch.md): Deprecated.
- [EnablePCIPowerManagement](iopcidevice/3516629-enablepcipowermanagement.md): Deprecated.
- [EnablePCIPowerManagement_Impl](iopcidevice/3516630-enablepcipowermanagement_impl.md): Deprecated.
- [FindPCICapability](iopcidevice/3516632-findpcicapability.md): Deprecated.
- [FindPCICapability_Impl](iopcidevice/3516633-findpcicapability_impl.md): Deprecated.
- [GetBARInfo](iopcidevice/3861819-getbarinfo.md): Deprecated.
- [GetBARInfo_Impl](iopcidevice/3861820-getbarinfo_impl.md): Deprecated.
- [GetBusDeviceFunction](iopcidevice/3516635-getbusdevicefunction.md): Deprecated.
- [GetBusDeviceFunction_Impl](iopcidevice/3516636-getbusdevicefunction_impl.md): Deprecated.
- [GetLinkSpeed](iopcidevice/3943407-getlinkspeed.md): Deprecated.
- [GetLinkSpeed_Impl](iopcidevice/3943408-getlinkspeed_impl.md): Deprecated.
- [HasPCIPowerManagement](iopcidevice/3516638-haspcipowermanagement.md): Deprecated.
- [HasPCIPowerManagement_Impl](iopcidevice/3516639-haspcipowermanagement_impl.md): Deprecated.
- [MemoryRead16](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memoryread16-9qkdh): Reads a 16-bit value synchronously from the PCI device’s aperture at the specified memory index.
- [MemoryRead16](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memoryread16-50bq8): Reads a 16-bit value synchronously from the PCI device’s aperture at the specified memory index.
- [MemoryRead32](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memoryread32-60hg9): Reads a 32-bit value synchronously from the PCI device’s aperture at the specified memory index.
- [MemoryRead32](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memoryread32-84jap): Reads a 32-bit value synchronously from the PCI device’s aperture at the specified memory index.
- [MemoryRead64](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memoryread64-9ntrf): Reads a 64-bit value synchronously from the PCI device’s aperture at the specified memory index.
- [MemoryRead64](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memoryread64-37uob): Reads a 64-bit value synchronously from the PCI device’s aperture at the specified memory index.
- [MemoryRead8](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memoryread8-1edw0): Reads a 8-bit value synchronously from the PCI device’s aperture at the specified memory index.
- [MemoryRead8](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memoryread8-7b2zp): Reads a 8-bit value synchronously from the PCI device’s aperture at the specified memory index.
- [MemoryWrite16](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memorywrite16-8k6ch): Writes an 16-bit value to the PCI device’s aperture at the specified memory index.
- [MemoryWrite16](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memorywrite16-534yk): Writes an 16-bit value to the PCI device’s aperture at the specified memory index.
- [MemoryWrite32](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memorywrite32-ow7r): Writes an 32-bit value to the PCI device’s aperture at the specified memory index.
- [MemoryWrite32](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memorywrite32-4pmh): Writes an 32-bit value to the PCI device’s aperture at the specified memory index.
- [MemoryWrite64](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memorywrite64-8qyob): Writes an 64-bit value to the PCI device’s aperture at the specified memory index.
- [MemoryWrite64](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memorywrite64-nvpu): Writes an 64-bit value to the PCI device’s aperture at the specified memory index.
- [MemoryWrite8](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memorywrite8-fzh6): Writes an 8-bit value to the PCI device’s aperture at the specified memory index.
- [MemoryWrite8](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/memorywrite8-1uey6): Writes an 8-bit value to the PCI device’s aperture at the specified memory index.
- [Open](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/open): Opens a session to the PCI device.
- [Reset](iopcidevice/3943410-reset.md): Deprecated.
- [Reset_Impl](iopcidevice/3943411-reset_impl.md): Deprecated.
- [RestoreDeviceState](iopcidevice/3857680-restoredevicestate.md): Deprecated.
- [RestoreDeviceState_Impl](iopcidevice/3857681-restoredevicestate_impl.md): Deprecated.
- [SaveDeviceState](iopcidevice/3857683-savedevicestate.md): Deprecated.
- [SaveDeviceState_Impl](iopcidevice/3857684-savedevicestate_impl.md): Deprecated.
- [SetASPMState](iopcidevice/3986557-setaspmstate.md): Deprecated.
- [SetASPMState_Impl](iopcidevice/3986558-setaspmstate_impl.md): Deprecated.
- [SetLinkSpeed](iopcidevice/3943413-setlinkspeed.md): Deprecated.
- [SetLinkSpeed_Impl](iopcidevice/3943414-setlinkspeed_impl.md): Deprecated.
- [SetProperties_Impl](iopcidevice/3738458-setproperties_impl.md): Deprecated.
- [addPowerChild](iopcidevice/3928138-addpowerchild.md): Deprecated.
- [attach](iopcidevice/1398479-attach.md): Deprecated.
- [callPlatformFunction](iopcidevice/1398982-callplatformfunction.md): Deprecated.
- [callPlatformFunction](iopcidevice/3516649-callplatformfunction.md): Deprecated.
- [checkLink](iopcidevice/1398893-checklink.md): Deprecated.
- [compareName](iopcidevice/1398837-comparename.md): Deprecated.
- [completeFLR](iopcidevice/4359881-completeflr.md): Deprecated.
- [configAccess](iopcidevice/1398500-configaccess.md): Deprecated.
- [configRead16](iopcidevice/1398671-configread16.md): Deprecated.
- [configRead16](iopcidevice/3516650-configread16.md): Deprecated.
- [configRead32](iopcidevice/1398925-configread32.md): Deprecated.
- [configRead32](iopcidevice/3516651-configread32.md): Deprecated.
- [configRead8](iopcidevice/1398814-configread8.md): Deprecated.
- [configRead8](iopcidevice/3516652-configread8.md): Deprecated.
- [configWrite16](iopcidevice/1398984-configwrite16.md): Deprecated.
- [configWrite16](iopcidevice/3516653-configwrite16.md): Deprecated.
- [configWrite16Filter](iopcidevice/4116459-configwrite16filter.md): Deprecated.
- [configWrite32](iopcidevice/1398497-configwrite32.md): Deprecated.
- [configWrite32](iopcidevice/3516654-configwrite32.md): Deprecated.
- [configWrite32Filter](iopcidevice/4116460-configwrite32filter.md): Deprecated.
- [configWrite8](iopcidevice/1398899-configwrite8.md): Deprecated.
- [configWrite8](iopcidevice/3516655-configwrite8.md): Deprecated.
- [configWrite8Filter](iopcidevice/4116461-configwrite8filter.md): Deprecated.
- [configureInterrupts](iopcidevice/3919732-configureinterrupts.md): Deprecated.
- [copyAERErrorDescriptionForBit](iopcidevice/1398866-copyaererrordescriptionforbit.md): Deprecated.
- [createEventSource](iopcidevice/1398504-createeventsource.md): Deprecated.
- [detach](iopcidevice/1398677-detach.md): Deprecated.
- [detachAbove](iopcidevice/1398929-detachabove.md): Deprecated.
- [detachFromChild](iopcidevice/4359882-detachfromchild.md): Deprecated.
- [deviceMemoryRead](iopcidevice/4359883-devicememoryread.md): Deprecated.
- [deviceMemoryRead16](iopcidevice/3684899-devicememoryread16.md): Deprecated.
- [deviceMemoryRead16](iopcidevice/4446109-devicememoryread16.md): Deprecated.
- [deviceMemoryRead32](iopcidevice/3684900-devicememoryread32.md): Deprecated.
- [deviceMemoryRead32](iopcidevice/4446110-devicememoryread32.md): Deprecated.
- [deviceMemoryRead64](iopcidevice/3684901-devicememoryread64.md): Deprecated.
- [deviceMemoryRead64](iopcidevice/4446111-devicememoryread64.md): Deprecated.
- [deviceMemoryRead8](iopcidevice/3684902-devicememoryread8.md): Deprecated.
- [deviceMemoryRead8](iopcidevice/4446112-devicememoryread8.md): Deprecated.
- [deviceMemoryWrite](iopcidevice/4359884-devicememorywrite.md): Deprecated.
- [deviceMemoryWrite16](iopcidevice/3684903-devicememorywrite16.md): Deprecated.
- [deviceMemoryWrite16](iopcidevice/4446113-devicememorywrite16.md): Deprecated.
- [deviceMemoryWrite32](iopcidevice/3684904-devicememorywrite32.md): Deprecated.
- [deviceMemoryWrite32](iopcidevice/4446114-devicememorywrite32.md): Deprecated.
- [deviceMemoryWrite64](iopcidevice/3684905-devicememorywrite64.md): Deprecated.
- [deviceMemoryWrite64](iopcidevice/4446115-devicememorywrite64.md): Deprecated.
- [deviceMemoryWrite8](iopcidevice/3684906-devicememorywrite8.md): Deprecated.
- [deviceMemoryWrite8](iopcidevice/4446116-devicememorywrite8.md): Deprecated.
- [enableACS](iopcidevice/3172732-enableacs.md): Deprecated.
- [enableLTR](iopcidevice/1398617-enableltr.md): Deprecated.
- [enablePCIPowerManagement](iopcidevice/1398619-enablepcipowermanagement.md): Deprecated.
- [extendedConfigRead16](iopcidevice/1398591-extendedconfigread16.md): Deprecated.
- [extendedConfigRead32](iopcidevice/1398613-extendedconfigread32.md): Deprecated.
- [extendedConfigRead8](iopcidevice/1398935-extendedconfigread8.md): Deprecated.
- [extendedConfigWrite16](iopcidevice/1398741-extendedconfigwrite16.md): Deprecated.
- [extendedConfigWrite32](iopcidevice/1398816-extendedconfigwrite32.md): Deprecated.
- [extendedConfigWrite8](iopcidevice/1398879-extendedconfigwrite8.md): Deprecated.
- [extendedFindPCICapability](iopcidevice/1398481-extendedfindpcicapability.md): Deprecated.
- [findPCICapability](iopcidevice/1398485-findpcicapability.md): Deprecated.
- [flr](iopcidevice/4359885-flr.md): Deprecated.
- [free](iopcidevice/1398909-free.md): Deprecated. Performs any final cleanup for the object.
- [getBusNumber](iopcidevice/1398476-getbusnumber.md): Deprecated.
- [getDeviceMemoryWithIndex](iopcidevice/1398913-getdevicememorywithindex.md): Deprecated.
- [getDeviceMemoryWithRegister](iopcidevice/1398763-getdevicememorywithregister.md): Deprecated.
- [getDeviceNumber](iopcidevice/1398803-getdevicenumber.md): Deprecated.
- [getFunctionNumber](iopcidevice/1398549-getfunctionnumber.md): Deprecated.
- [getLinkSpeed](iopcidevice/3943417-getlinkspeed.md): Deprecated.
- [getMetaClass](iopcidevice/1398771-getmetaclass.md): Deprecated.
- [getProperty](iopcidevice/3753534-getproperty.md): Deprecated.
- [getResources](iopcidevice/1398852-getresources.md): Deprecated.
- [handleClose](iopcidevice/3543394-handleclose.md): Deprecated.
- [handleOpen](iopcidevice/3543395-handleopen.md): Deprecated.
- [hasPCIPowerManagement](iopcidevice/1398543-haspcipowermanagement.md): Deprecated.
- [init](iopcidevice/1398907-init.md): Deprecated.
- [init](iopcidevice/3516656-init.md): Deprecated.
- [initReserved](iopcidevice/1398669-initreserved.md): Deprecated.
- [initialPowerStateForDomainState](iopcidevice/1398555-initialpowerstatefordomainstate.md): Deprecated.
- [ioDeviceMemory](iopcidevice/1398727-iodevicememory.md): Deprecated.
- [ioRead16](iopcidevice/1398512-ioread16.md): Deprecated.
- [ioRead32](iopcidevice/1398717-ioread32.md): Deprecated.
- [ioRead8](iopcidevice/1398588-ioread8.md): Deprecated.
- [ioWrite16](iopcidevice/1398705-iowrite16.md): Deprecated.
- [ioWrite32](iopcidevice/1398775-iowrite32.md): Deprecated.
- [ioWrite8](iopcidevice/1398855-iowrite8.md): Deprecated.
- [isDownstreamFacing](iopcidevice/4359886-isdownstreamfacing.md): Deprecated.
- [kernelRequestProbe](iopcidevice/1398761-kernelrequestprobe.md): Deprecated.
- [launchReprobeThread](iopcidevice/4359887-launchreprobethread.md): Deprecated.
- [mapDeviceMemoryWithRegister](iopcidevice/1398789-mapdevicememorywithregister.md): Deprecated.
- [matchLocation](iopcidevice/1398961-matchlocation.md): Deprecated.
- [matchPropertyTable](iopcidevice/1398666-matchpropertytable.md): Deprecated.
- [matchPropertyTable](iopcidevice/3538575-matchpropertytable.md): Deprecated.
- [maxCapabilityForDomainState](iopcidevice/1399002-maxcapabilityfordomainstate.md): Deprecated.
- [newUserClient](iopcidevice/1398840-newuserclient.md): Deprecated.
- [powerStateForDomainState](iopcidevice/1398921-powerstatefordomainstate.md): Deprecated.
- [powerStateWillChangeTo](iopcidevice/1398799-powerstatewillchangeto.md): Deprecated.
- [powerStateWillChangeToGated](iopcidevice/4359888-powerstatewillchangetogated.md): Deprecated.
- [prepareFLR](iopcidevice/4359889-prepareflr.md): Deprecated.
- [protectDevice](iopcidevice/1398709-protectdevice.md): Deprecated.
- [registerCrashNotification](iopcidevice/3943418-registercrashnotification.md): Deprecated.
- [relocate](iopcidevice/1398535-relocate.md): Deprecated.
- [removePowerChild](iopcidevice/3928139-removepowerchild.md): Deprecated.
- [reprobeThreadCall](iopcidevice/4359890-reprobethreadcall.md): Deprecated.
- [requestProbe](iopcidevice/1398685-requestprobe.md): Deprecated.
- [reset](iopcidevice/3943419-reset.md): Deprecated.
- [resetFunction](iopcidevice/4359891-resetfunction.md): Deprecated.
- [resetNubState](iopcidevice/4359892-resetnubstate.md): Deprecated.
- [restoreDeviceState](iopcidevice/1398874-restoredevicestate.md): Deprecated.
- [saveDeviceState](iopcidevice/1398493-savedevicestate.md): Deprecated.
- [setASPMState](iopcidevice/1398736-setaspmstate.md): Deprecated.
- [setBusLeadEnable](iopcidevice/3917649-setbusleadenable.md): Deprecated.
- [setBusMasterEnable](iopcidevice/1398970-setbusmasterenable.md): Deprecated.
- [setConfigBits](iopcidevice/1398640-setconfigbits.md): Deprecated.
- [setConfigHandler](iopcidevice/1398553-setconfighandler.md): Deprecated.
- [setIOEnable](iopcidevice/1398888-setioenable.md): Deprecated.
- [setLatencyTolerance](iopcidevice/1398903-setlatencytolerance.md): Deprecated.
- [setLinkSpeed](iopcidevice/3943420-setlinkspeed.md): Deprecated.
- [setMemoryEnable](iopcidevice/1398630-setmemoryenable.md): Deprecated.
- [setPCIPowerState](iopcidevice/1398828-setpcipowerstate.md): Deprecated.
- [setPowerState](iopcidevice/1398729-setpowerstate.md): Deprecated.
- [setPowerStateGated](iopcidevice/4359893-setpowerstategated.md): Deprecated.
- [setProperties](iopcidevice/1398957-setproperties.md): Deprecated.
- [setProperty](iopcidevice/4097725-setproperty.md): Deprecated.
- [setProperty](iopcidevice/4097726-setproperty.md): Deprecated.
- [setProperty](iopcidevice/4097727-setproperty.md): Deprecated.
- [setProperty](iopcidevice/4097728-setproperty.md): Deprecated.
- [setProperty](iopcidevice/4097729-setproperty.md): Deprecated.
- [setProperty](iopcidevice/4097730-setproperty.md): Deprecated.
- [setProperty](iopcidevice/4097731-setproperty.md): Deprecated.
- [setTunnelL1Enable](iopcidevice/1398498-settunnell1enable.md): Deprecated.
- [shouldSkipReset](iopcidevice/4395252-shouldskipreset.md): Deprecated.
- [supportsFLR](iopcidevice/4359894-supportsflr.md): Deprecated.
- [unregisterCrashNotification](iopcidevice/3943421-unregistercrashnotification.md): Deprecated.
- [updateWakeReason](iopcidevice/1398863-updatewakereason.md): Deprecated.

### Type Methods

- [ConfigureInterrupts_Invoke](iopcidevice/3919731-configureinterrupts_invoke.md): Deprecated.
- [EnablePCIPowerManagement_Invoke](iopcidevice/3516631-enablepcipowermanagement_invoke.md): Deprecated.
- [FindPCICapability_Invoke](iopcidevice/3516634-findpcicapability_invoke.md): Deprecated.
- [GetBARInfo_Invoke](iopcidevice/3861821-getbarinfo_invoke.md): Deprecated.
- [GetBusDeviceFunction_Invoke](iopcidevice/3516637-getbusdevicefunction_invoke.md): Deprecated.
- [GetLinkSpeed_Invoke](iopcidevice/3943409-getlinkspeed_invoke.md): Deprecated.
- [HasPCIPowerManagement_Invoke](iopcidevice/3516640-haspcipowermanagement_invoke.md): Deprecated.
- [Reset_Invoke](iopcidevice/3943412-reset_invoke.md): Deprecated.
- [RestoreDeviceState_Invoke](iopcidevice/3857682-restoredevicestate_invoke.md): Deprecated.
- [SaveDeviceState_Invoke](iopcidevice/3857685-savedevicestate_invoke.md): Deprecated.
- [SetASPMState_Invoke](iopcidevice/3986559-setaspmstate_invoke.md): Deprecated.
- [SetLinkSpeed_Invoke](iopcidevice/3943415-setlinkspeed_invoke.md): Deprecated.
- [getCloseCommandMask](iopcidevice/3943416-getclosecommandmask.md): Deprecated.
- [hasL1Errata](iopcidevice/4480432-hasl1errata.md): Deprecated.

## Relationships

### Inherits From

- [IOService](ioservice.md)

## See Also

### Devices

- [Implementing a PCIe Kext for a Thunderbolt Device](hardware_families/pci/implementing_a_pcie_kext_for_a_thunderbolt_device.md): Create an IOKit driver to support Thunderbolt devices that implement features not supported in PCIDriverKit, such as wireless networking or audio.
- [IOAGPDevice](ioagpdevice.md): Deprecated. An IOService class representing an AGP primary device.
