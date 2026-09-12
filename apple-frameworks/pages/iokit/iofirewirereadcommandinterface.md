> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirereadcommandinterface](https://developer.apple.com/documentation/iokit/iofirewirereadcommandinterface)

# IOFireWireReadCommandInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

IOFireWireLib block read command object.

## Declaration

```objectivec
typedef struct IOFireWireReadCommandInterface_t {
    ...
} IOFireWireReadCommandInterface;
```

<a id="overview"></a>

## Overview

Represents an object that is configured and submitted to issue synchronous and asynchronous block read commands.

This interface contains all methods of IOFireWireCommandInterface. This interface will contain all v2 methods of IOFireWireCommandInterface when instantiated as v2 or newer.

## Topics

### Miscellaneous

- [Cancel](iofirewirereadcommandinterface/1555587-cancel.md): Cancel command execution
- [GetAckCode](iofirewirereadcommandinterface/1556017-getackcode.md): Gets the most recently received ack code for this transaction.
- [GetBuffer](iofirewirereadcommandinterface/1555699-getbuffer.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.
- [GetRefCon](iofirewirereadcommandinterface/1555957-getrefcon.md): Gets the refcon associated with this command
- [GetResponseCode](iofirewirereadcommandinterface/1556034-getresponsecode.md): Gets the most recently received response code for this transaction.
- [GetStatus](iofirewirereadcommandinterface/1556001-getstatus.md): Return command completion status.
- [GetTargetAddress](iofirewirereadcommandinterface/1555897-gettargetaddress.md): Get command target address.
- [GetTransferredBytes](iofirewirereadcommandinterface/1555817-gettransferredbytes.md): Return number of bytes transferred by this command object when it last completed execution.
- [IsExecuting](iofirewirereadcommandinterface/1555640-isexecuting.md): Is this command object currently executing?
- [SetBuffer](iofirewirereadcommandinterface/1555692-setbuffer.md): Set the buffer where read data should be stored.
- [SetCallback](iofirewirereadcommandinterface/1555912-setcallback.md): Set the completion handler to be called once the command completes asynchronous execution .
- [SetFlags](iofirewirereadcommandinterface/1555950-setflags.md): Set flags governing this command's execution.
- [SetGeneration](iofirewirereadcommandinterface/1556039-setgeneration.md): Set FireWire bus generation for which the command object shall be valid. If the failOnReset attribute has been set, the command will only be considered for execution during the bus generation specified by this function.
- [SetMaxPacket](iofirewirereadcommandinterface/1555978-setmaxpacket.md): Set the maximum size in bytes of packets transferred by this command.
- [SetMaxPacketSpeed](iofirewirereadcommandinterface/1555778-setmaxpacketspeed.md): Gets the most recently received ack code for this transaction.
- [SetMaxRetryCount](iofirewirereadcommandinterface/1555735-setmaxretrycount.md): Sets the maximum number of retries for this command.
- [SetRefCon](iofirewirereadcommandinterface/1555802-setrefcon.md): Set the user refCon value. This is the user defined value that will be passed in the refCon argument to the completion function.
- [SetTarget](iofirewirereadcommandinterface/1556021-settarget.md): Set command target address
- [SetTimeoutDuration](iofirewirereadcommandinterface/1555994-settimeoutduration.md): Sets the duration of the timeout for this command.
- [Submit](iofirewirereadcommandinterface/1555629-submit.md)
- [SubmitWithRefconAndCallback](iofirewirereadcommandinterface/1555676-submitwithrefconandcallback.md): Set the command refCon value and callback handler, and submit the command to FireWire for execution.

### Instance Variables

- [version](iofirewirereadcommandinterface/1555926-version.md)
- [revision](iofirewirereadcommandinterface/1555604-revision.md)

### Instance Properties

- [AddRef](iofirewirereadcommandinterface/1555722-addref.md)
- [QueryInterface](iofirewirereadcommandinterface/1555883-queryinterface.md)
- [Release](iofirewirereadcommandinterface/1555771-release.md)

## See Also

### COM Interfaces

- [IOATASMARTInterface](ioatasmartinterface.md): Self-Monitoring, Analysis, and Reporting Technology Interface.
- [IOFireWireAsyncStreamCommandInterface](iofirewireasyncstreamcommandinterface.md)
- [IOFireWireAVCLibConsumerInterface](iofirewireavclibconsumerinterface.md): Interface for an asynchronous connection consumer.
- [IOFireWireAVCLibProtocolInterface](iofirewireavclibprotocolinterface.md): Initial interface discovered for all AVC protocol drivers.
- [IOFireWireAVCLibUnitInterface](iofirewireavclibunitinterface.md): Initial interface discovered for all AVC Unit drivers.
- [IOFireWireCommandInterface](iofirewirecommandinterface.md): IOFireWireLib command object.
- [IOFireWireCompareSwapCommandInterface](iofirewirecompareswapcommandinterface.md)
- [IOFireWireCompareSwapCommandInterface_v3](iofirewirecompareswapcommandinterface_v3.md)
- [IOFireWireConfigDirectoryInterface](iofirewireconfigdirectoryinterface.md): IOFireWireLib device config ROM browsing interface
- [IOFireWireDCLCommandPoolInterface](iofirewiredclcommandpoolinterface.md)
- [IOFireWireDeviceInterface](iofirewiredeviceinterface.md): IOFireWireDeviceInterface is your primary gateway to the functionality contained in IOFireWireLib.
- [IOFireWireIsochChannelInterface](iofirewireisochchannelinterface.md): FireWire user client isochronous channel object.
- [IOFireWireIsochPortInterface](iofirewireisochportinterface.md): FireWire user client isochronous port interface
- [IOFireWireLibIRMAllocationInterface](iofirewirelibirmallocationinterface.md)
- [IOFireWireLibPHYPacketListenerInterface](iofirewirelibphypacketlistenerinterface.md): Represents and provides management functions for a phy packet listener object.
- [IOFireWireLibVectorCommandInterface](iofirewirelibvectorcommandinterface.md): IOFireWireLib command object for grouping commands execution.
- [IOFireWireLocalIsochPortInterface](iofirewirelocalisochportinterface.md): FireWire user client local isochronous port object.
- [IOFireWireLocalUnitDirectoryInterface](iofirewirelocalunitdirectoryinterface.md)
- [IOFireWireNubInterface](iofirewirenubinterface-ajp.md): IOFireWireDeviceInterface is your primary gateway to the functionality contained in IOFireWireLib.
- [IOFireWireNuDCLPoolInterface](iofirewirenudclpoolinterface.md): Use this interface to build NuDCL-based DCL programs.
- [IOFireWirePHYCommandInterface](iofirewirephycommandinterface.md)
- [IOFireWirePhysicalAddressSpaceInterface](iofirewirephysicaladdressspaceinterface.md): IOFireWireLib physical address space object. ( interface name: IOFireWirePhysicalAddressSpaceInterface )
- [IOFireWirePseudoAddressSpaceInterface](iofirewirepseudoaddressspaceinterface.md)
- [IOFireWireReadQuadletCommandInterface](iofirewirereadquadletcommandinterface.md): IOFireWireReadQuadletCommandInterface -- IOFireWireLib quadlet read command object.
- [IOFireWireRemoteIsochPortInterface](iofirewireremoteisochportinterface.md)
- [IOFireWireSBP2LibLoginInterface](iofirewiresbp2liblogininterface.md): Supplies the login maintenance and Normal Command ORB execution portions of the API.
- [IOFireWireSBP2LibLUNInterface](iofirewiresbp2libluninterface.md): Initial interface disovered for all drivers.
- [IOFireWireSBP2LibMgmtORBInterface](iofirewiresbp2libmgmtorbinterface.md): Supplies non login related management ORBs. Management ORBs can be executed independent of a login, if necessary. Management ORBs are created using the IOFireWireSBP2LibLUNInterface.
- [IOFireWireSBP2LibORBInterface](iofirewiresbp2liborbinterface.md): Represents an SBP2 normal command ORB. Supplies the APIs for configuring normal command ORBs. This includes setting the command block and writing the page tables for I/O. The ORBs are executed using the submitORB method in IOFireWireSBP2LibLoginInterface.
- [IOFireWireUnitInterface](iofirewireunitinterface-apt.md): IOFireWireDeviceInterface is your primary gateway to the functionality contained in IOFireWireLib.
- [IOFireWireWriteCommandInterface](iofirewirewritecommandinterface.md): IOFireWireLib block read command object.
- [IOFireWireWriteQuadletCommandInterface](iofirewirewritequadletcommandinterface.md): IOFireWireLib quadlet read command object.
- [IOFWAsyncStreamListenerInterface](iofwasyncstreamlistenerinterface.md): Represents and provides management functions for a asyn stream listener object.
- [IOHIDDeviceDeviceInterface](iohiddevicedeviceinterface.md): The object you use to access HID devices from user space, returned by version 1.5 of the IOHIDFamily.
- [IOHIDDeviceInterface](iohiddeviceinterface.md): CFPlugin object subclass which provides the primary interface to HID devices.
- [IOHIDDeviceInterface121](iohiddeviceinterface121.md): CFPlugin object subclass which provides the primary interface to HID devices. This class is a subclass of IOHIDDeviceInterface.
- [IOHIDDeviceInterface122](iohiddeviceinterface122.md): CFPlugin object subclass which provides the primary interface to HID devices. This class is a subclass of IOHIDDeviceInterface121.
- [IOHIDDeviceQueueInterface](iohiddevicequeueinterface.md): The object you use to access a HID queue from user space, returned by version 1.5 of the IOHIDFamily.
- [IOHIDDeviceTransactionInterface](iohiddevicetransactioninterface.md): The object you use to access a HID transaction from user space, returned by version 1.5 of the IOHIDFamily.
- [IOHIDOutputTransactionInterface](iohidoutputtransactioninterface.md): CFPlugin object subclass which privides interface for output transactions to HID devices. Created by a IOHIDDeviceInterface object.
- [IOHIDQueueInterface](iohidqueueinterface.md): CFPlugin object subclass which provides an interface for input queues from HID devices. Created by an IOHIDDeviceInterface object.
- [IOUPSPlugInInterface](ioupsplugininterface.md): Represents and provides management functions for a UPS device.
- [IOUSBDeviceInterface](iousbdeviceinterface.md): The object you use to access USB devices from user space, returned by all versions of the IOUSBFamily currently shipping.
- [IOUSBDeviceInterface182](iousbdeviceinterface182.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 1.8.2 and above.
- [IOUSBDeviceInterface187](iousbdeviceinterface187.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 10.8.7 and above.
- [IOUSBDeviceInterface197](iousbdeviceinterface197.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 1.9.7 and above.
- [IOUSBDeviceInterface245](iousbdeviceinterface245.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 2.4.5 and above.
- [IOUSBDeviceInterface300](iousbdeviceinterface300.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 3.0.0 and above.
- [IOUSBDeviceInterface320](iousbdeviceinterface320.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 3.2.0 and above.
- [IOUSBDeviceInterface500](iousbdeviceinterface500.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 3.2.0 and above.
- [IOUSBInterfaceInterface](iousbinterfaceinterface.md): The object you use to access a USB device interface from user space, returned by all versions of the IOUSBFamily currently shipping.
- [IOUSBInterfaceInterface182](iousbinterfaceinterface182.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.8.2 and above.
- [IOUSBInterfaceInterface183](iousbinterfaceinterface183.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.8.3 and above.
- [IOUSBInterfaceInterface190](iousbinterfaceinterface190.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.9 and above.
- [IOUSBInterfaceInterface192](iousbinterfaceinterface192.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.9.2 and above.
- [IOUSBInterfaceInterface197](iousbinterfaceinterface197.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.9.7 and above.
- [MMCDeviceInterface](mmcdeviceinterface.md): Basic interface for an MMC-2 Compliant Device.
- [SCSITaskDeviceInterface](scsitaskdeviceinterface.md): Basic interface for a SCSITask Device.
- [SCSITaskInterface](scsitaskinterface.md): Basic interface for a SCSITask.
