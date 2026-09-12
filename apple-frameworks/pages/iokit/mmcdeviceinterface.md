> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/mmcdeviceinterface](https://developer.apple.com/documentation/iokit/mmcdeviceinterface)

# MMCDeviceInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Basic interface for an MMC-2 Compliant Device.

## Declaration

```objectivec
typedef struct MMCDeviceInterface {
    ...
} MMCDeviceInterface;
```

<a id="overview"></a>

## Overview

After rendezvous with a MMC-2 Compliant Device in the IORegistry you can create an instance of this interface as a proxy to the IOService. Once you have this interface, or one of its subclasses, you can issue some select MMC-2 calls to the device without getting exclusive access first.

## Topics

### Instance Properties

- [AddRef](mmcdeviceinterface/1575402-addref.md)
- [GetConfiguration](mmcdeviceinterface/1575373-getconfiguration.md): Issues a GET_CONFIGURATION command to the device as defined in MMC-2.
- [GetPerformance](mmcdeviceinterface/1575384-getperformance.md): Issues a GET_PERFORMANCE command to the device as defined in MMC-2.
- [GetPerformanceV2](mmcdeviceinterface/1575412-getperformancev2.md): Issues a GET_PERFORMANCE command to the device as defined in Mt. Fuji 5.
- [GetSCSITaskDeviceInterface](mmcdeviceinterface/1575395-getscsitaskdeviceinterface.md): Gets a handle to the SCSITaskDeviceInterface without closing the user client connection which was initiated by IOCreateCFPlugInForService.
- [GetTrayState](mmcdeviceinterface/1575350-gettraystate.md): Issues a GET_EVENT_STATUS_NOTIFICATION command to the device as defined in MMC-2.
- [Inquiry](mmcdeviceinterface/1575408-inquiry.md): Issues an INQUIRY command to the device as defined in SPC-2.
- [ModeSense10](mmcdeviceinterface/1575392-modesense10.md): Issues a MODE_SENSE_10 command to the device as defined in SPC-2.
- [QueryInterface](mmcdeviceinterface/1575385-queryinterface.md)
- [ReadDVDStructure](mmcdeviceinterface/1575349-readdvdstructure.md): Issues a READ_DVD_STRUCTURE command to the device as defined in MMC-2.
- [ReadDiscInformation](mmcdeviceinterface/1575347-readdiscinformation.md): Issues a READ_DISC_INFORMATION command to the device as defined in MMC-2.
- [ReadDiscInformationV2](mmcdeviceinterface/1575388-readdiscinformationv2.md): Issues a READ_DISC_INFORMATION command to the device as defined in MMC-5.
- [ReadDiscStructure](mmcdeviceinterface/1575382-readdiscstructure.md): Issues a READ_DISC_STRUCTURE command to the device as defined in MMC-5.
- [ReadFormatCapacities](mmcdeviceinterface/1575375-readformatcapacities.md): Issues a READ_FORMAT_CAPACITIES command to the device as defined in MMC-2.
- [ReadTableOfContents](mmcdeviceinterface/1575353-readtableofcontents.md): Issues a READ_TOC_PMA_ATIP command to the device as defined in MMC-2/SFF-8020i.
- [ReadTrackInformation](mmcdeviceinterface/1575387-readtrackinformation.md): Issues a READ_TRACK_INFORMATION command to the device as defined in MMC-2.
- [ReadTrackInformationV2](mmcdeviceinterface/1575378-readtrackinformationv2.md): Issues a READ_TRACK_INFORMATION command to the device as defined in Mt. Fuji 5.
- [Release](mmcdeviceinterface/1575404-release.md)
- [SetCDSpeed](mmcdeviceinterface/1575394-setcdspeed.md): Issues a SET_CD_SPEED command to the device as defined in MMC-2.
- [SetStreaming](mmcdeviceinterface/1575399-setstreaming.md): Issues a SET_STREAMING command to the device as defined in MMC-5.
- [SetTrayState](mmcdeviceinterface/1575380-settraystate.md): Issues a START_STOP_UNIT command to the device as defined in SBC-3.
- [SetWriteParametersModePage](mmcdeviceinterface/1575346-setwriteparametersmodepage.md): Issues a MODE_SELECT command to the device as defined in SPC-2 with the Write Parameters Mode Page Code as defined in MMC-2.
- [TestUnitReady](mmcdeviceinterface/1575366-testunitready.md): Issues a TEST_UNIT_READY command to the device as defined in SPC-2.
- [revision](mmcdeviceinterface/1575390-revision.md)
- [version](mmcdeviceinterface/1575369-version.md)

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
- [SCSITaskDeviceInterface](scsitaskdeviceinterface.md): Basic interface for a SCSITask Device.
- [SCSITaskInterface](scsitaskinterface.md): Basic interface for a SCSITask.
