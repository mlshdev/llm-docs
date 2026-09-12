> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface)

# IOFireWireAVCLibUnitInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Initial interface discovered for all AVC Unit drivers.

## Declaration

```objectivec
typedef struct IOFireWireAVCLibUnitInterface {
    ...
} IOFireWireAVCLibUnitInterface;
```

<a id="overview"></a>

## Overview

The IOFireWireAVCLibUnitInterface is the initial interface discovered by most drivers. It supplies the methods that control the operation of the AVC unit as a whole. Finally, the Unit can supply a reference to the IOFireWireUnit. This can be useful if a driver wishes to access the standard FireWire APIs.

## Topics

### Instance Properties

- [AVCAsynchronousCommandCancel](iofirewireavclibunitinterface/1508828-avcasynchronouscommandcancel.md)
- [AVCAsynchronousCommandReinit](iofirewireavclibunitinterface/1508837-avcasynchronouscommandreinit.md)
- [AVCAsynchronousCommandReinitWithCommandBytes](iofirewireavclibunitinterface/1508807-avcasynchronouscommandreinitwith.md)
- [AVCAsynchronousCommandRelease](iofirewireavclibunitinterface/1508789-avcasynchronouscommandrelease.md)
- [AVCAsynchronousCommandSubmit](iofirewireavclibunitinterface/1508873-avcasynchronouscommandsubmit.md)
- [AVCCommand](iofirewireavclibunitinterface/1508792-avccommand.md): Sends an AVC command to the device and returns the response.
- [AVCCommandInGeneration](iofirewireavclibunitinterface/1508781-avccommandingeneration.md): Sends an AVC command to the device and returns the response.
- [AddRef](iofirewireavclibunitinterface/1508804-addref.md)
- [QueryInterface](iofirewireavclibunitinterface/1508839-queryinterface.md)
- [Release](iofirewireavclibunitinterface/1508836-release.md)
- [addCallbackDispatcherToRunLoop](iofirewireavclibunitinterface/1508787-addcallbackdispatchertorunloop.md): Adds a dispatcher for kernel callbacks to the specified runloop.
- [breakP2PInputConnection](iofirewireavclibunitinterface/1508869-breakp2pinputconnection.md): Decrements the point-to-point connection count of a unit input plug.
- [breakP2POutputConnection](iofirewireavclibunitinterface/1508853-breakp2poutputconnection.md): Decrements the point-to-point connection count of a unit output plug.
- [close](iofirewireavclibunitinterface/1508777-close.md): Closes an exclusive access to the device.
- [createAVCAsynchronousCommand](iofirewireavclibunitinterface/1508830-createavcasynchronouscommand.md)
- [createConsumerPlug](iofirewireavclibunitinterface/1508841-createconsumerplug.md)
- [getAncestorInterface](iofirewireavclibunitinterface/1508766-getancestorinterface.md): Creates a plug-in object for an ancestor (in the I/O Registry) of the AVC unit and returns an interface to it.
- [getAsyncConnectionPlugCounts](iofirewireavclibunitinterface/1508819-getasyncconnectionplugcounts.md)
- [getProtocolInterface](iofirewireavclibunitinterface/1508821-getprotocolinterface.md): Creates a plug-in object for a protocol driver for the FireWire bus the AVC unit is connected to and returns an interface to it.
- [getSessionRef](iofirewireavclibunitinterface/1508859-getsessionref.md): Get the session reference.
- [makeP2PInputConnection](iofirewireavclibunitinterface/1508816-makep2pinputconnection.md): Increments the point-to-point connection count of a unit input plug.
- [makeP2POutputConnection](iofirewireavclibunitinterface/1508818-makep2poutputconnection.md): Increments the point-to-point connection count of a unit output plug.
- [open](iofirewireavclibunitinterface/1508755-open.md): Exclusively opens a connection to the in-kernel device.
- [openWithSessionRef](iofirewireavclibunitinterface/1508844-openwithsessionref.md): Opens a connection to a device that is not already open.
- [removeCallbackDispatcherFromRunLoop](iofirewireavclibunitinterface/1508842-removecallbackdispatcherfromrunl.md): Removes a dispatcher for kernel callbacks to the specified run loop.
- [revision](iofirewireavclibunitinterface/1508870-revision.md)
- [setMessageCallback](iofirewireavclibunitinterface/1508780-setmessagecallback.md): Sets callback for user space message routine.
- [updateAVCCommandTimeout](iofirewireavclibunitinterface/1508764-updateavccommandtimeout.md): Updates an AVCCommand's timeout back to 10 seconds.
- [version](iofirewireavclibunitinterface/1508782-version.md)

## See Also

### COM Interfaces

- [IOATASMARTInterface](ioatasmartinterface.md): Self-Monitoring, Analysis, and Reporting Technology Interface.
- [IOFireWireAsyncStreamCommandInterface](iofirewireasyncstreamcommandinterface.md)
- [IOFireWireAVCLibConsumerInterface](iofirewireavclibconsumerinterface.md): Interface for an asynchronous connection consumer.
- [IOFireWireAVCLibProtocolInterface](iofirewireavclibprotocolinterface.md): Initial interface discovered for all AVC protocol drivers.
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
- [IOFireWireReadCommandInterface](iofirewirereadcommandinterface.md): IOFireWireLib block read command object.
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
