> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiredeviceinterface](https://developer.apple.com/documentation/iokit/iofirewiredeviceinterface)

# IOFireWireDeviceInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

IOFireWireDeviceInterface is your primary gateway to the functionality contained in IOFireWireLib.

## Declaration

```objectivec
typedef struct IOFireWireDeviceInterface_t {
    ...
} IOFireWireDeviceInterface;
```

<a id="overview"></a>

## Overview

You can use IOFireWireDeviceInterface to:

- perform synchronous read, write and lock operations
- perform other miscellanous bus operations, such as reset the FireWire bus.
- create FireWire command objects and interfaces used to perform synchronous/asynchronous read, write and lock operations. These include:

  - IOFireWireReadCommandInterface
  - IOFireWireReadQuadletCommandInterface
  - IOFireWireWriteCommandInterface
  - IOFireWireWriteQuadletCommandInterface
  - IOFireWireCompareSwapCommandInterface
- create interfaces which provide other extended services. These include:

  - IOFireWirePseudoAddressSpaceInterface -- pseudo address space services
  - IOFireWirePhysicalAddressSpaceInterface -- physical address space services
  - IOFireWireLocalUnitDirectoryInterface -- manage local unit directories in the mac
  - IOFireWireConfigDirectoryInterface -- access and browse remote device config directories
- create interfaces which provide isochronous services (see IOFireWireLibIsoch.h). These include:

  - IOFireWireIsochChannelInterface -- create/manage talker and listener isoch channels
  - IOFireWireLocalIsochPortInterface -- create local isoch ports
  - IOFireWireRemoteIsochPortInterface -- create remote isoch ports
  - IOFireWireDCLCommandPoolInterface -- create a DCL command pool allocator.

## Topics

### Miscellaneous

- [AddCallbackDispatcherToRunLoop](iofirewiredeviceinterface/1555795-addcallbackdispatchertorunloop.md): Installs the proper run loop event source to allow callbacks to function. This method must be called before callback notifications for this interface or any interfaces created using this interface can function.
- [AddCallbackDispatcherToRunLoopForMode](iofirewiredeviceinterface/1556024-addcallbackdispatchertorunloopfo.md): Add a run loop event source to allow IOFireWireLib callbacks to function.
- [AddIsochCallbackDispatcherToRunLoop(IOFireWireLibDeviceRef, CFRunLoopRef)](iofirewiredeviceinterface/addisochcallbackdispatchertorunloop_iofirewirelibdeviceref_cfrunloopref.md): This function adds an event source for the isochronous callback dispatcher to the specified CFRunLoop. Isochronous related callbacks will not function before this function is called. This functions is similar to AddCallbackDispatcherToRunLoop. The passed CFRunLoop can be different from that passed to AddCallbackDispatcherToRunLoop.
- [AddIsochCallbackDispatcherToRunLoop(IOFireWireLibDeviceRef, CFRunLoopRef, CFStringRef)](iofirewiredeviceinterface/addisochcallbackdispatchertorunloop_iofirewirelibdeviceref_cfrunloopref_cfstringref.md): Add a run loop event source to allow IOFireWireLib isoch callbacks to function.
- [AddIsochCallbackDispatcherToRunLoopForMode](iofirewiredeviceinterface/1556060-addisochcallbackdispatchertorunl.md): Add a run loop event source to allow IOFireWireLib isoch callbacks to function.
- [AllocateIRMBandwidthInGeneration](iofirewiredeviceinterface/1555639-allocateirmbandwidthingeneration.md): Attempt to allocate some isochronous bandwidth from the IRM
- [AllocateIRMChannelInGeneration](iofirewiredeviceinterface/1556022-allocateirmchannelingeneration.md): Attempt to allocate an isochronous channel from the IRM
- [BusReset](iofirewiredeviceinterface/1555967-busreset.md): Cause a bus reset
- [ClientCommandIsComplete](iofirewiredeviceinterface/1555827-clientcommandiscomplete.md): This function must be called from callback routines once they have completed processing a callback. This function only applies to callbacks which take an IOFireWireLibDeviceRef (i.e. bus reset), parameter.
- [ClipMaxRec2K](iofirewiredeviceinterface/1555805-clipmaxrec2k.md)
- [Close](iofirewiredeviceinterface/1555865-close.md): Release exclusive access to the device
- [CompareSwap](iofirewiredeviceinterface/1555677-compareswap.md): Perform synchronous lock operation
- [CompareSwap64](iofirewiredeviceinterface/1556045-compareswap64.md): Perform synchronous lock operation
- [CreateAsyncStreamCommand](iofirewiredeviceinterface/1555791-createasyncstreamcommand.md): Create a command object for sending Async Stream packets
- [CreateAsyncStreamListener](iofirewiredeviceinterface/1556037-createasyncstreamlistener.md): Creates a async stream listener object and returns an interface to it.
- [CreateCompareSwapCommand](iofirewiredeviceinterface/1555628-createcompareswapcommand.md): Create a quadlet compare/swap command object.
- [CreateCompareSwapCommand64](iofirewiredeviceinterface/1555976-createcompareswapcommand64.md): Create a quadlet compare/swap command object and initialize it with 64-bit values.
- [CreateConfigDirectoryWithIOObject](iofirewiredeviceinterface/1555662-createconfigdirectorywithioobjec.md): This function can be used to create a config directory object and a corresponding interface from an opaque IOObject reference. Some configuration directory interface methods may return an io_object_t instead of an IOFireWireLibConfigDirectoryRef. Use this function to obtain an IOFireWireLibConfigDirectoryRef from an io_object_t.
- [CreateDCLCommandPool](iofirewiredeviceinterface/1556103-createdclcommandpool.md): Creates a command pool object and returns an interface to it. The command pool can be used to build DCL programs.
- [CreateInitialUnitsPseudoAddressSpace](iofirewiredeviceinterface/1555616-createinitialunitspseudoaddresss.md): Creates a pseudo address space in initial units space.
- [CreateIRMAllocation](iofirewiredeviceinterface/1555779-createirmallocation.md): Attempt to create an IRM allocation that persists accross bus-resets.
- [CreateIsochChannel](iofirewiredeviceinterface/1555848-createisochchannel.md): Creates an isochronous channel object and returns an interface to it. An isochronous channel object is an abstract entity used to represent a FireWire isochronous channel.
- [CreateLocalIsochPort](iofirewiredeviceinterface/1555942-createlocalisochport.md): Creates a local isochronous port object and returns an interface to it. A local isochronous port object is an abstract entity used to represent a talking or listening endpoint in the local machine.
- [CreateLocalIsochPortWithOptions](iofirewiredeviceinterface/1555850-createlocalisochportwithoptions.md): Create a local isoch port
- [CreateLocalUnitDirectory](iofirewiredeviceinterface/1555879-createlocalunitdirectory.md): Creates a local unit directory object and returns an interface to it. An instance of a unit directory object corresponds to an instance of a unit directory in the local machine's configuration ROM.
- [CreateNuDCLPool](iofirewiredeviceinterface/1556069-createnudclpool.md)
- [CreatePHYCommand](iofirewiredeviceinterface/1555711-createphycommand.md): Create a command object for sending a PHY packet
- [CreatePHYPacketListener](iofirewiredeviceinterface/1555737-createphypacketlistener.md): Create a listener object for receiving PHY packets
- [CreatePhysicalAddressSpace](iofirewiredeviceinterface/1555762-createphysicaladdressspace.md): Creates a physical address space object and returns an interface to it. This will create a physical address space on the local machine.
- [CreatePseudoAddressSpace](iofirewiredeviceinterface/1555763-createpseudoaddressspace.md): Creates a pseudo address space object and returns an interface to it. This will create a pseudo address space (software-backed) on the local machine.
- [CreateReadCommand](iofirewiredeviceinterface/1555878-createreadcommand.md): Create a block read command object.
- [CreateReadQuadletCommand](iofirewiredeviceinterface/1555734-createreadquadletcommand.md): Create a quadlet read command object.
- [CreateRemoteIsochPort](iofirewiredeviceinterface/1555591-createremoteisochport.md): Creates a remote isochronous port object and returns an interface to it. A remote isochronous port object is an abstract entity used to represent a remote talker or listener device on an isochronous channel.
- [CreateVectorCommand](iofirewiredeviceinterface/1555689-createvectorcommand.md): Create a vector command object.
- [CreateWriteCommand](iofirewiredeviceinterface/1556011-createwritecommand.md): Create a block write command object.
- [CreateWriteQuadletCommand](iofirewiredeviceinterface/1555911-createwritequadletcommand.md): Create a quadlet write command object.
- [FireBugMsg](iofirewiredeviceinterface/1556115-firebugmsg.md)
- [FireLog](iofirewiredeviceinterface/1555664-firelog.md): Logs string to in-kernel debug buffer
- [GetBusCycleTime](iofirewiredeviceinterface/1555783-getbuscycletime.md): Get bus and cycle time.
- [GetBusGeneration](iofirewiredeviceinterface/1555685-getbusgeneration.md): Get bus generation number.
- [GetConfigDirectory](iofirewiredeviceinterface/1555703-getconfigdirectory.md): Creates a config directory object and returns an interface to it. The created config directory object represents the config directory in the remote device or unit to which the creating device interface is attached.
- [GetCycleTime](iofirewiredeviceinterface/1556046-getcycletime.md): Get bus cycle time.
- [GetCycleTimeAndUpTime](iofirewiredeviceinterface/1556114-getcycletimeanduptime.md): Get bus cycle time and cpu uptime.
- [GetDebugProperty](iofirewiredeviceinterface/1555661-getdebugproperty.md)
- [GetDevice](iofirewiredeviceinterface/1556065-getdevice.md): Get the IOKit service to which this interface is connected.
- [GetGenerationAndNodeID](iofirewiredeviceinterface/1555619-getgenerationandnodeid.md): (Obsolete) Get bus generation and remote device node ID.
- [GetIRMNodeID](iofirewiredeviceinterface/1555834-getirmnodeid.md)
- [GetIsochAsyncPort](iofirewiredeviceinterface/1556053-getisochasyncport.md): Returns the notification port used for async and isoch callbacks
- [GetLocalNodeID](iofirewiredeviceinterface/1555846-getlocalnodeid.md): (Obsolete) Get local node ID.
- [GetLocalNodeIDWithGeneration](iofirewiredeviceinterface/1556009-getlocalnodeidwithgeneration.md): Get node ID of local machine.
- [GetRefCon](iofirewiredeviceinterface/1555727-getrefcon.md): Get user reference value set on this interface
- [GetRemoteNodeID](iofirewiredeviceinterface/1555732-getremotenodeid.md): Get node ID of device to which this interface is attached.
- [GetResetTime](iofirewiredeviceinterface/1555894-getresettime.md): Get time since last bus reset.
- [GetSessionRef](iofirewiredeviceinterface/1555977-getsessionref.md)
- [GetSpeedBetweenNodes](iofirewiredeviceinterface/1556026-getspeedbetweennodes.md): Get the maximum transfer speed between nodes 'srcNodeID' and 'destNodeID'.
- [GetSpeedToNode](iofirewiredeviceinterface/1555893-getspeedtonode.md): Get maximum transfer speed to device to which this interface is attached.
- [InterfaceIsInited](iofirewiredeviceinterface/1555816-interfaceisinited.md): Determine whether interface has been properly inited.
- [NotificationIsOn](iofirewiredeviceinterface/1555632-notificationison.md): Determine whether callback notifications for this interface are currently active
- [Open](iofirewiredeviceinterface/1555622-open.md): Open the connected device for exclusive access. When you have the device open using this method, all accesses by other clients of this device will be denied until Close() is called.
- [OpenWithSessionRef](iofirewiredeviceinterface/1555885-openwithsessionref.md): An open function which allows this interface to have access to the device when already opened. The service which has already opened the device must be able to provide an IOFireWireSessionRef.
- [PrintDCLProgram](iofirewiredeviceinterface/1555718-printdclprogram.md): Walk a DCL program linked list and print its contents
- [Read](iofirewiredeviceinterface/1556023-read.md): Perform synchronous block read
- [ReadQuadlet](iofirewiredeviceinterface/1555961-readquadlet.md): Perform synchronous quadlet read
- [ReleaseIRMBandwidthInGeneration](iofirewiredeviceinterface/1555755-releaseirmbandwidthingeneration.md): Attempt to release some isochronous bandwidth from the IRM
- [ReleaseIRMChannelInGeneration](iofirewiredeviceinterface/1555975-releaseirmchannelingeneration.md): Attempt to release an isochronous channel from the IRM
- [RemoveCallbackDispatcherFromRunLoop](iofirewiredeviceinterface/1555798-removecallbackdispatcherfromrunl.md): Reverses the effects of AddCallbackDispatcherToRunLoop(). This method removes the run loop event source that was added to the specified run loop preventing any future callbacks from being called
- [RemoveIsochCallbackDispatcherFromRunLoop](iofirewiredeviceinterface/1556054-removeisochcallbackdispatcherfro.md): Removes an IOFireWireLib-added run loop event source.
- [Seize](iofirewiredeviceinterface/1555960-seize.md): Seize control of device/unit
- [SetBusResetDoneHandler](iofirewiredeviceinterface/1555870-setbusresetdonehandler.md): Sets the callback that should be called after a bus reset has occurred and reconfiguration of the bus has been completed. This function will only be called once per bus reset.
- [SetBusResetHandler](iofirewiredeviceinterface/1555938-setbusresethandler.md): Sets the callback that should be called when a bus reset occurs. Note that this callback can be called multiple times before the bus reset done handler is called. (f.ex., multiple bus resets might occur before bus reconfiguration has completed.)
- [SetRefCon](iofirewiredeviceinterface/1555746-setrefcon.md): Set user reference value on this interface
- [TurnOffNotification](iofirewiredeviceinterface/1555902-turnoffnotification.md): Deactivates and callbacks specified for this device interface. Reverses the effects of TurnOnNotification()
- [TurnOnNotification](iofirewiredeviceinterface/1556081-turnonnotification.md): Activates any callbacks specified for this device interface. Only works after AddCallbackDispatcherToRunLoop has been called. See also AddIsochCallbackDispatcherToRunLoop().
- [Write](iofirewiredeviceinterface/1556028-write.md): Perform synchronous block write
- [WriteQuadlet](iofirewiredeviceinterface/1555743-writequadlet.md): Perform synchronous quadlet write

### Instance Variables

- [version](iofirewiredeviceinterface/1556102-version.md)
- [revision](iofirewiredeviceinterface/1555618-revision.md)

### Instance Properties

- [AddIsochCallbackDispatcherToRunLoop](iofirewiredeviceinterface/1556105-addisochcallbackdispatchertorunl.md)
- [AddRef](iofirewiredeviceinterface/1555773-addref.md)
- [QueryInterface](iofirewiredeviceinterface/1555947-queryinterface.md)
- [Release](iofirewiredeviceinterface/1555638-release.md)

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
