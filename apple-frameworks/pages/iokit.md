> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit](https://developer.apple.com/documentation/iokit)

# IOKit (Swift)

**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

Access hardware devices and drivers from your apps and services.

<a id="overview"></a>

## Overview

The IOKit framework implements nonkernel access to IOKit objects such drivers and nubs through the device-interface mechanism.

> **Important**

> Devices supported on macOS 11 and later require [DriverKit](driverkit.md). Use IOKit in your apps and services to discover and use devices.

## Topics

### Serial Ports

- [Communicating with a Modem on a Serial Port](iokit/communicating_with_a_modem_on_a_serial_port.md): Find and connect to a modem attached to a serial port using IOKit.

### Reference

- [IODataQueueClient.h](iokit/iodataqueueclient_h.md)
- [IOKitLib.h](iokit/iokitlib_h.md)
- [IOTypes.h User-Space](iokit/iotypes_h_user-space.md)
- [IOKit Structures](iokit/iokit_structures.md)
- [IOKit Enumerations](iokit/iokit_enumerations.md)
- [IOKit Constants](iokit/iokit_constants.md)
- [IOKit Functions](iokit/iokit_functions.md)
- [IOKit Data Types](iokit/iokit_data_types.md)

## See Also

### Related Documentation

- [IOKit Fundamentals](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/IOKitFundamentals/Introduction/Introduction.html#//apple_ref/doc/uid/TP0000011)

# IOKit (Objective-C)

**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

Access hardware devices and drivers from your apps and services.

<a id="overview"></a>

## Overview

The IOKit framework implements nonkernel access to IOKit objects such drivers and nubs through the device-interface mechanism.

> **Important**

> Devices supported on macOS 11 and later require [DriverKit](driverkit.md). Use IOKit in your apps and services to discover and use devices.

## Topics

### COM Interfaces

- [IOATASMARTInterface](iokit/ioatasmartinterface.md): Self-Monitoring, Analysis, and Reporting Technology Interface.
- [IOFireWireAsyncStreamCommandInterface](iokit/iofirewireasyncstreamcommandinterface.md)
- [IOFireWireAVCLibConsumerInterface](iokit/iofirewireavclibconsumerinterface.md): Interface for an asynchronous connection consumer.
- [IOFireWireAVCLibProtocolInterface](iokit/iofirewireavclibprotocolinterface.md): Initial interface discovered for all AVC protocol drivers.
- [IOFireWireAVCLibUnitInterface](iokit/iofirewireavclibunitinterface.md): Initial interface discovered for all AVC Unit drivers.
- [IOFireWireCommandInterface](iokit/iofirewirecommandinterface.md): IOFireWireLib command object.
- [IOFireWireCompareSwapCommandInterface](iokit/iofirewirecompareswapcommandinterface.md)
- [IOFireWireCompareSwapCommandInterface_v3](iokit/iofirewirecompareswapcommandinterface_v3.md)
- [IOFireWireConfigDirectoryInterface](iokit/iofirewireconfigdirectoryinterface.md): IOFireWireLib device config ROM browsing interface
- [IOFireWireDCLCommandPoolInterface](iokit/iofirewiredclcommandpoolinterface.md)
- [IOFireWireDeviceInterface](iokit/iofirewiredeviceinterface.md): IOFireWireDeviceInterface is your primary gateway to the functionality contained in IOFireWireLib.
- [IOFireWireIsochChannelInterface](iokit/iofirewireisochchannelinterface.md): FireWire user client isochronous channel object.
- [IOFireWireIsochPortInterface](iokit/iofirewireisochportinterface.md): FireWire user client isochronous port interface
- [IOFireWireLibIRMAllocationInterface](iokit/iofirewirelibirmallocationinterface.md)
- [IOFireWireLibPHYPacketListenerInterface](iokit/iofirewirelibphypacketlistenerinterface.md): Represents and provides management functions for a phy packet listener object.
- [IOFireWireLibVectorCommandInterface](iokit/iofirewirelibvectorcommandinterface.md): IOFireWireLib command object for grouping commands execution.
- [IOFireWireLocalIsochPortInterface](iokit/iofirewirelocalisochportinterface.md): FireWire user client local isochronous port object.
- [IOFireWireLocalUnitDirectoryInterface](iokit/iofirewirelocalunitdirectoryinterface.md)
- [IOFireWireNubInterface](iokit/iofirewirenubinterface-ajp.md): IOFireWireDeviceInterface is your primary gateway to the functionality contained in IOFireWireLib.
- [IOFireWireNuDCLPoolInterface](iokit/iofirewirenudclpoolinterface.md): Use this interface to build NuDCL-based DCL programs.
- [IOFireWirePHYCommandInterface](iokit/iofirewirephycommandinterface.md)
- [IOFireWirePhysicalAddressSpaceInterface](iokit/iofirewirephysicaladdressspaceinterface.md): IOFireWireLib physical address space object. ( interface name: IOFireWirePhysicalAddressSpaceInterface )
- [IOFireWirePseudoAddressSpaceInterface](iokit/iofirewirepseudoaddressspaceinterface.md)
- [IOFireWireReadCommandInterface](iokit/iofirewirereadcommandinterface.md): IOFireWireLib block read command object.
- [IOFireWireReadQuadletCommandInterface](iokit/iofirewirereadquadletcommandinterface.md): IOFireWireReadQuadletCommandInterface -- IOFireWireLib quadlet read command object.
- [IOFireWireRemoteIsochPortInterface](iokit/iofirewireremoteisochportinterface.md)
- [IOFireWireSBP2LibLoginInterface](iokit/iofirewiresbp2liblogininterface.md): Supplies the login maintenance and Normal Command ORB execution portions of the API.
- [IOFireWireSBP2LibLUNInterface](iokit/iofirewiresbp2libluninterface.md): Initial interface disovered for all drivers.
- [IOFireWireSBP2LibMgmtORBInterface](iokit/iofirewiresbp2libmgmtorbinterface.md): Supplies non login related management ORBs. Management ORBs can be executed independent of a login, if necessary. Management ORBs are created using the IOFireWireSBP2LibLUNInterface.
- [IOFireWireSBP2LibORBInterface](iokit/iofirewiresbp2liborbinterface.md): Represents an SBP2 normal command ORB. Supplies the APIs for configuring normal command ORBs. This includes setting the command block and writing the page tables for I/O. The ORBs are executed using the submitORB method in IOFireWireSBP2LibLoginInterface.
- [IOFireWireUnitInterface](iokit/iofirewireunitinterface-apt.md): IOFireWireDeviceInterface is your primary gateway to the functionality contained in IOFireWireLib.
- [IOFireWireWriteCommandInterface](iokit/iofirewirewritecommandinterface.md): IOFireWireLib block read command object.
- [IOFireWireWriteQuadletCommandInterface](iokit/iofirewirewritequadletcommandinterface.md): IOFireWireLib quadlet read command object.
- [IOFWAsyncStreamListenerInterface](iokit/iofwasyncstreamlistenerinterface.md): Represents and provides management functions for a asyn stream listener object.
- [IOHIDDeviceDeviceInterface](iokit/iohiddevicedeviceinterface.md): The object you use to access HID devices from user space, returned by version 1.5 of the IOHIDFamily.
- [IOHIDDeviceInterface](iokit/iohiddeviceinterface.md): CFPlugin object subclass which provides the primary interface to HID devices.
- [IOHIDDeviceInterface121](iokit/iohiddeviceinterface121.md): CFPlugin object subclass which provides the primary interface to HID devices. This class is a subclass of IOHIDDeviceInterface.
- [IOHIDDeviceInterface122](iokit/iohiddeviceinterface122.md): CFPlugin object subclass which provides the primary interface to HID devices. This class is a subclass of IOHIDDeviceInterface121.
- [IOHIDDeviceQueueInterface](iokit/iohiddevicequeueinterface.md): The object you use to access a HID queue from user space, returned by version 1.5 of the IOHIDFamily.
- [IOHIDDeviceTransactionInterface](iokit/iohiddevicetransactioninterface.md): The object you use to access a HID transaction from user space, returned by version 1.5 of the IOHIDFamily.
- [IOHIDOutputTransactionInterface](iokit/iohidoutputtransactioninterface.md): CFPlugin object subclass which privides interface for output transactions to HID devices. Created by a IOHIDDeviceInterface object.
- [IOHIDQueueInterface](iokit/iohidqueueinterface.md): CFPlugin object subclass which provides an interface for input queues from HID devices. Created by an IOHIDDeviceInterface object.
- [IOUPSPlugInInterface](iokit/ioupsplugininterface.md): Represents and provides management functions for a UPS device.
- [IOUSBDeviceInterface](iokit/iousbdeviceinterface.md): The object you use to access USB devices from user space, returned by all versions of the IOUSBFamily currently shipping.
- [IOUSBDeviceInterface182](iokit/iousbdeviceinterface182.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 1.8.2 and above.
- [IOUSBDeviceInterface187](iokit/iousbdeviceinterface187.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 10.8.7 and above.
- [IOUSBDeviceInterface197](iokit/iousbdeviceinterface197.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 1.9.7 and above.
- [IOUSBDeviceInterface245](iokit/iousbdeviceinterface245.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 2.4.5 and above.
- [IOUSBDeviceInterface300](iokit/iousbdeviceinterface300.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 3.0.0 and above.
- [IOUSBDeviceInterface320](iokit/iousbdeviceinterface320.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 3.2.0 and above.
- [IOUSBDeviceInterface500](iokit/iousbdeviceinterface500.md): The object you use to access USB devices from user space, returned by the IOUSBFamily version 3.2.0 and above.
- [IOUSBInterfaceInterface](iokit/iousbinterfaceinterface.md): The object you use to access a USB device interface from user space, returned by all versions of the IOUSBFamily currently shipping.
- [IOUSBInterfaceInterface182](iokit/iousbinterfaceinterface182.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.8.2 and above.
- [IOUSBInterfaceInterface183](iokit/iousbinterfaceinterface183.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.8.3 and above.
- [IOUSBInterfaceInterface190](iokit/iousbinterfaceinterface190.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.9 and above.
- [IOUSBInterfaceInterface192](iokit/iousbinterfaceinterface192.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.9.2 and above.
- [IOUSBInterfaceInterface197](iokit/iousbinterfaceinterface197.md): The object you use to access a USB device interface from user space, returned by the IOUSBFamily version 1.9.7 and above.
- [MMCDeviceInterface](iokit/mmcdeviceinterface.md): Basic interface for an MMC-2 Compliant Device.
- [SCSITaskDeviceInterface](iokit/scsitaskdeviceinterface.md): Basic interface for a SCSITask Device.
- [SCSITaskInterface](iokit/scsitaskinterface.md): Basic interface for a SCSITask.

### Serial Ports

- [Communicating with a Modem on a Serial Port](iokit/communicating_with_a_modem_on_a_serial_port.md): Find and connect to a modem attached to a serial port using IOKit.

### Reference

- [ATASMARTLib.h](iokit/atasmartlib_h.md): ATASMARTLib implements non-kernel task access to ATA SMART data.
- [IOAudioDefines.h User-Space](iokit/ioaudiodefines_h_user-space.md)
- [IOAudioLib.h](iokit/ioaudiolib_h.md): C interface to IOAudio functions
- [IOAudioTypes.h User-Space](iokit/ioaudiotypes_h_user-space.md)
- [IOBDBlockStorageDevice.h User-Space](iokit/iobdblockstoragedevice_h_user-space.md): This header contains the IOBDBlockStorageDevice class definition.
- [IOBDMedia.h User-Space](iokit/iobdmedia_h_user-space.md): This header contains the IOBDMedia class definition.
- [IOBlockStorageDevice.h User-Space](iokit/ioblockstoragedevice_h_user-space.md): This header contains the IOBlockStorageDevice class definition.
- [IOBlockStorageDriver.h User-Space](iokit/ioblockstoragedriver_h_user-space.md): This header contains the IOBlockStorageDriver class definition.
- [IOCDBlockStorageDevice.h User-Space](iokit/iocdblockstoragedevice_h_user-space.md): This header contains the IOCDBlockStorageDevice class definition.
- [IOCDMedia.h User-Space](iokit/iocdmedia_h_user-space.md): This header contains the IOCDMedia class definition.
- [IODVDBlockStorageDevice.h User-Space](iokit/iodvdblockstoragedevice_h_user-space.md): This header contains the IODVDBlockStorageDevice class definition.
- [IODVDMedia.h User-Space](iokit/iodvdmedia_h_user-space.md): This header contains the IODVDMedia class definition.
- [IODataQueueClient.h](iokit/iodataqueueclient_h.md)
- [IODataQueueShared.h User-Space](iokit/iodataqueueshared_h_user-space.md)
- [IOEthernetController.h User-Space](iokit/ioethernetcontroller_h_user-space.md)
- [IOEthernetInterface.h User-Space](iokit/ioethernetinterface_h_user-space.md)
- [IOEthernetStats.h User-Space](iokit/ioethernetstats_h_user-space.md): Ethernet statistics.
- [IOFilterScheme.h User-Space](iokit/iofilterscheme_h_user-space.md): This header contains the IOFilterScheme class definition.
- [IOFireWireAVCLib.h](iokit/iofirewireavclib_h.md)
- [IOFireWireFamilyCommon.h User-Space](iokit/iofirewirefamilycommon_h_user-space.md): This file contains useful definitions for working with FireWire in the kernel and in user space
- [IOFireWireLib.h](iokit/iofirewirelib_h.md)
- [IOFireWireSBP2Lib.h](iokit/iofirewiresbp2lib_h.md)
- [IOFireWireStorageCharacteristics.h User-Space](iokit/iofirewirestoragecharacteristics_h_user-space.md)
- [IOFramebufferShared.h User-Space](iokit/ioframebuffershared_h_user-space.md)
- [IOGraphicsLib.h](iokit/iographicslib_h.md)
- [IOGraphicsTypes.h User-Space](iokit/iographicstypes_h_user-space.md)
- [IOHIDBase.h](iokit/iohidbase_h.md)
- [IOHIDDevice.h User-Space](iokit/iohiddevice_h_user-space.md)
- [IOHIDDevicePlugIn.h](iokit/iohiddeviceplugin_h.md)
- [IOHIDElement.h](iokit/iohidelement_h.md)
- [IOHIDKeys.h User-Space](iokit/iohidkeys_h_user-space.md)
- [IOHIDLibObsolete.h](iokit/iohidlibobsolete_h.md)
- [IOHIDManager.h](iokit/iohidmanager_h.md)
- [IOHIDQueue.h](iokit/iohidqueue_h.md)
- [IOHIDTransaction.h](iokit/iohidtransaction_h.md)
- [IOHIDValue.h](iokit/iohidvalue_h.md)
- [IOI2CInterface.h User-Space](iokit/ioi2cinterface_h_user-space.md)
- [IOKitLib.h](iokit/iokitlib_h.md)
- [IOKitServer.h User-Space](iokit/iokitserver_h_user-space.md)
- [IOMedia.h User-Space](iokit/iomedia_h_user-space.md): This header contains the IOMedia class definition.
- [IOMessage.h User-Space](iokit/iomessage_h_user-space.md): Defines message type constants for several IOKit messaging API's.
- [IONetworkController.h User-Space](iokit/ionetworkcontroller_h_user-space.md)
- [IONetworkData.h User-Space](iokit/ionetworkdata_h_user-space.md)
- [IONetworkInterface.h User-Space](iokit/ionetworkinterface_h_user-space.md)
- [IONetworkLib.h](iokit/ionetworklib_h.md)
- [IONetworkMedium.h User-Space](iokit/ionetworkmedium_h_user-space.md)
- [IONetworkStats.h User-Space](iokit/ionetworkstats_h_user-space.md): Generic network statistics.
- [IOPM.h User-Space](iokit/iopm_h_user-space.md): Defines power management constants and keys used by both in-kernel and user space power management.
- [IOPMKeys.h](iokit/iopmkeys_h.md): IOPMKeys.h defines C strings for use accessing power management data. Note that all of these C strings must be converted to CFStrings before use. You can wrap them with the CFSTR() macro, or create a CFStringRef (that you must later CFRelease()) using CFStringCreateWithCString()
- [IOPMLib.h](iokit/iopmlib_h.md): IOPMLib provides access to common power management facilities, like initiating system sleep, getting current idle timer values, registering for sleep/wake notifications, and preventing system sleep.
- [IOPSKeys.h](iokit/iopskeys_h.md): IOPSKeys.h defines C strings for use accessing power source data in IOPowerSource CFDictionaries, as returned by [IOPSGetPowerSourceDescription](iokit/1523867-iopsgetpowersourcedescription.md) Note that all of these C strings must be converted to CFStrings before use. You can wrap them with the CFSTR() macro, or create a CFStringRef (that you must later CFRelease()) using CFStringCreateWithCString().
- [IOPartitionScheme.h User-Space](iokit/iopartitionscheme_h_user-space.md): This header contains the IOPartitionScheme class definition.
- [IOPowerSources.h](iokit/iopowersources_h.md)
- [IOStorage.h User-Space](iokit/iostorage_h_user-space.md): This header contains the IOStorage class definition.
- [IOStorageCardCharacteristics.h User-Space](iokit/iostoragecardcharacteristics_h_user-space.md)
- [IOStorageDeviceCharacteristics.h User-Space](iokit/iostoragedevicecharacteristics_h_user-space.md)
- [IOStorageProtocolCharacteristics.h User-Space](iokit/iostorageprotocolcharacteristics_h_user-space.md)
- [IOStreamLib.h](iokit/iostreamlib_h.md): IOCFPlugin library for using IOStream objects.
- [IOStreamShared.h User-Space](iokit/iostreamshared_h_user-space.md): IOStream definitions shared between kernel and user space.
- [IOTypes.h User-Space](iokit/iotypes_h_user-space.md)
- [IOUPSPlugIn.h](iokit/ioupsplugin_h.md)
- [IOUSBLib.h](iokit/iousblib_h.md)
- [IOVideoDeviceLib.h User-Space](iokit/iovideodevicelib_h_user-space.md)
- [IOVideoDeviceShared.h User-Space](iokit/iovideodeviceshared_h_user-space.md): IOVideoDevice definitions shared between kernel and user space.
- [IOVideoDeviceUserClient.h User-Space](iokit/iovideodeviceuserclient_h_user-space.md)
- [IOVideoTypes.h User-Space](iokit/iovideotypes_h_user-space.md)
- [KextManager.h](iokit/kextmanager_h.md): The KextManager API provides a simple interface for applications to load kernel extensions (kexts) via RPC to kextd, and to look up the URLs for kexts by bundle identifier.
- [SCSICmds_INQUIRY_Definitions.h User-Space](iokit/scsicmds_inquiry_definitions_h_user-space.md): This file contains all definitions for the data returned from the INQUIRY (0x12) command.
- [SCSICmds_MODE_Definitions.h User-Space](iokit/scsicmds_mode_definitions_h_user-space.md): This file contains all definitions for the data returned from the MODE_SENSE_6 and MODE_SENSE_10 commands.
- [SCSICmds_READ_CAPACITY_Definitions.h User-Space](iokit/scsicmds_read_capacity_definitions_h_user-space.md): This file contains all definitions for the data returned from the READ CAPACITY 10 (0x25) and READ CAPACITY 16 (0x9E) commands.
- [SCSICmds_REPORT_LUNS_Definitions.h User-Space](iokit/scsicmds_report_luns_definitions_h_user-space.md): This file contains all definitions for the data returned from the REPORT_LUNS (0xA0) command.
- [SCSICmds_REQUEST_SENSE_Defs.h User-Space](iokit/scsicmds_request_sense_defs_h_user-space.md): This file contains all definitions for the data returned from the REQUEST SENSE (0x03) command and from auto sense on protocols that support it.
- [SCSICommandDefinitions.h User-Space](iokit/scsicommanddefinitions_h_user-space.md)
- [SCSITask.h User-Space](iokit/scsitask_h_user-space.md)
- [SCSITaskLib.h](iokit/scsitasklib_h.md): SCSITaskLib implements non-kernel task access to specific IOKit object types, namely any SCSI Peripheral Device for which there isn't an in-kernel driver and for authoring devices such as CD-R/W and DVD-R/W drives.
- [USB.h User-Space](iokit/usb_h_user-space.md)
- [USBSpec.h User-Space](iokit/usbspec_h_user-space.md)
- [IOKit Structures](iokit/iokit_structures.md)
- [IOKit Enumerations](iokit/iokit_enumerations.md)
- [IOKit Constants](iokit/iokit_constants.md)
- [IOKit Functions](iokit/iokit_functions.md)
- [IOKit Data Types](iokit/iokit_data_types.md)

### Classes

- [IOVideoControlDictionary](iokit/iovideocontroldictionary.md)
- [IOVideoStreamDictionary](iokit/iovideostreamdictionary.md)
- [IOVideoStreamFormatDictionary](iokit/iovideostreamformatdictionary.md)

## See Also

### Related Documentation

- [IOKit Fundamentals](https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/IOKitFundamentals/Introduction/Introduction.html#//apple_ref/doc/uid/TP0000011)
