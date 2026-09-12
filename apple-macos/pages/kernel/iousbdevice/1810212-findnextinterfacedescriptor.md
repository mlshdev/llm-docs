> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbdevice/1810212-findnextinterfacedescriptor](https://developer.apple.com/documentation/kernel/iousbdevice/1810212-findnextinterfacedescriptor)

# FindNextInterfaceDescriptor

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn FindNextInterfaceDescriptor(
 const IOUSBConfigurationDescriptor *configDescIn, 
 const IOUSBInterfaceDescriptor *intfDesc, 
 const IOUSBFindInterfaceRequest *request, 
 IOUSBInterfaceDescriptor **descOut); 
```

## Parameters

- `configDescIn`: the configuration descriptor within which to search. obtained from GetFullConfigurationDescriptor(configIndex). use NULL to specify the current configuration's descriptor.
- `intfDesc`: interface descriptor from which to start the search. NULL for the first interface descriptor in the given configuration descriptor
- `request`: IOUSBFindInterfaceRequest specifying the desired interface. Not changed.
- `descOut`: pointer to placeholder for the returned descriptor ptr

<a id="return_value"></a>

## Return Value

returns kIOReturnBadArgument if configDesc is not correct, or if configDesc is NULL and the device is not configured, or if intfDesc is not in configDesc. Otherwise returns kIOReturnSuccess or kIOUSBInterfaceNotFound.

<a id="overview"></a>

## Overview

return a pointer to the next interface descriptor within the given full configuration descriptor satisfying the requirements specified, or NULL if there aren't any.

## See Also

### Miscellaneous

- [CreateInterfaceIterator](1810047-createinterfaceiterator.md)
- [DeviceRequest(IOUSBDevRequest \*, UInt32, UInt32, IOUSBCompletion \*)](1810072-devicerequest.md): execute a control request to the default control pipe (pipe zero)
- [DeviceRequest(IOUSBDevRequestDesc \*, UInt32, UInt32, IOUSBCompletion \*)](1810098-devicerequest.md): execute a control request to the default control pipe (pipe zero)
- [DisplayUserNotification](1810124-displayusernotification.md): Will use the Notification Center to display a notification to the user. Only Low Power and Overcurrent notifications are supported.
- [DoLocationOverrideAndModelMatch](1810151-dolocationoverrideandmodelmatch.md): Will look for a kOverrideIfAtLocationID array proerty with locationID entries and a "MacModel" property. If any of the locationIDs match to the Mac Model, will return true. If there is no kOverrideAtLocationID property, it will also return true.
- [FindNextInterface](1810185-findnextinterface.md)
- [GetAddress](1810231-getaddress.md)
- [GetBus](1810263-getbus.md)
- [GetBusPowerAvailable](1810284-getbuspoweravailable.md)
- [GetChildLocationID](1810305-getchildlocationid.md)
- [GetConfiguration](1810333-getconfiguration.md)
- [GetConfigurationDescriptor](1810384-getconfigurationdescriptor.md)
- [GetDeviceInformation](1810425-getdeviceinformation.md): Returns status information about the USB device, such as whether the device is captive or whether it is in the suspended state.
- [GetDeviceRelease](1810457-getdevicerelease.md)
- [GetDeviceStatus](1810482-getdevicestatus.md)
- [GetExtraPowerAllocated](1810520-getextrapowerallocated.md): Clients can use this API to ask how much extra power has already been reserved by this device. Units are milliAmps (mA).
- [GetFullConfigurationDescriptor](1810553-getfullconfigurationdescriptor.md)
- [GetHubParent](1810591-gethubparent.md): Used by the hub driver to give the nub a pointer to its HubPolicyMaker object
- [GetManufacturerStringIndex](1810637-getmanufacturerstringindex.md)
- [GetMaxPacketSize](1810681-getmaxpacketsize.md)
- [GetNumConfigurations](1810710-getnumconfigurations.md)
- [GetPipeZero](1810748-getpipezero.md)
- [GetProductID](1810809-getproductid.md)
- [GetProductStringIndex](1810867-getproductstringindex.md)
- [GetSerialNumberStringIndex](1810912-getserialnumberstringindex.md)
- [GetSpeed](1810998-getspeed.md)
- [GetStringDescriptor](1811033-getstringdescriptor.md)
- [GetVendorID](1811065-getvendorid.md)
- [MakePipe](1811080-makepipe.md): build a pipe on a given endpoint
- [OpenOrCloseAllInterfacePipes](1811109-openorcloseallinterfacepipes.md): Iterates over all interfaces and either opens all the pipes, or closes them all
- [ReEnumerateDevice](1811132-reenumeratedevice.md): Instruct the hub to which this device is attached to reset the port to which this device is attached. This causes the IOUSBDevice object and any child objects (IOUSBInterface objects or driver objects) to be terminated, and the device to be completely reenumerated, as if it had been detached and reattached.
- [RequestExtraPower](1811162-requestextrapower.md): Clients can use this API to reserve extra power for use by this device while the machine is asleep or while it is awake. Units are milliAmps (mA).
- [ResetDevice](1811205-resetdevice.md)
- [ReturnExtraPower](1811251-returnextrapower.md): Clients can use this API to tell the system that they will not use power that was previously reserved by using the RequestExtraPower API.
- [SetAddress](1811282-setaddress.md)
- [SetConfiguration(IOService \*, UInt8, bool)](1811309-setconfiguration.md)
- [SetConfiguration(IOService \*, UInt8, bool, bool)](1811340-setconfiguration.md)
- [SetHubParent](1811377-sethubparent.md): Used by the hub driver to give the nub a pointer to its HubPolicyMaker object
- [SuspendDevice](1811400-suspenddevice.md): Instruct the hub to which this device is attached to suspend or resume the port to which the device is attached. Note that if there are any outstanding transactions on any pipes in the device, those transactions will get returned with a kIOReturnNotResponding error.
