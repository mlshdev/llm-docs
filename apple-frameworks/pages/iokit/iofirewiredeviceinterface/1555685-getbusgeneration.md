> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiredeviceinterface/1555685-getbusgeneration](https://developer.apple.com/documentation/iokit/iofirewiredeviceinterface/1555685-getbusgeneration)

# GetBusGeneration

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Get bus generation number.

## Declaration

```objectivec
IOReturn (*GetBusGeneration)(IOFireWireLibDeviceRef self, UInt32 *outGeneration);
```

## Parameters

- `self`: The device interface to use.
- `outGeneration`: A pointer to a UInt32 to hold the bus generation number

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if a valid bus generation has been returned in 'outGeneration'.

<a id="discussion"></a>

## Discussion

The bus generation number stays constant between bus resets and can be used in combination with a FireWire node ID to uniquely identify nodes on the bus. Pass the generation number to functions that take or return FireWire node IDs.

Availability: IOFireWireDeviceInterface_v4 and newer

## See Also

### Miscellaneous

- [AddCallbackDispatcherToRunLoop](1555795-addcallbackdispatchertorunloop.md): Installs the proper run loop event source to allow callbacks to function. This method must be called before callback notifications for this interface or any interfaces created using this interface can function.
- [AddCallbackDispatcherToRunLoopForMode](1556024-addcallbackdispatchertorunloopfo.md): Add a run loop event source to allow IOFireWireLib callbacks to function.
- [AddIsochCallbackDispatcherToRunLoop(IOFireWireLibDeviceRef, CFRunLoopRef)](addisochcallbackdispatchertorunloop_iofirewirelibdeviceref_cfrunloopref.md): This function adds an event source for the isochronous callback dispatcher to the specified CFRunLoop. Isochronous related callbacks will not function before this function is called. This functions is similar to AddCallbackDispatcherToRunLoop. The passed CFRunLoop can be different from that passed to AddCallbackDispatcherToRunLoop.
- [AddIsochCallbackDispatcherToRunLoop(IOFireWireLibDeviceRef, CFRunLoopRef, CFStringRef)](addisochcallbackdispatchertorunloop_iofirewirelibdeviceref_cfrunloopref_cfstringref.md): Add a run loop event source to allow IOFireWireLib isoch callbacks to function.
- [AddIsochCallbackDispatcherToRunLoopForMode](1556060-addisochcallbackdispatchertorunl.md): Add a run loop event source to allow IOFireWireLib isoch callbacks to function.
- [AllocateIRMBandwidthInGeneration](1555639-allocateirmbandwidthingeneration.md): Attempt to allocate some isochronous bandwidth from the IRM
- [AllocateIRMChannelInGeneration](1556022-allocateirmchannelingeneration.md): Attempt to allocate an isochronous channel from the IRM
- [BusReset](1555967-busreset.md): Cause a bus reset
- [ClientCommandIsComplete](1555827-clientcommandiscomplete.md): This function must be called from callback routines once they have completed processing a callback. This function only applies to callbacks which take an IOFireWireLibDeviceRef (i.e. bus reset), parameter.
- [ClipMaxRec2K](1555805-clipmaxrec2k.md)
- [Close](1555865-close.md): Release exclusive access to the device
- [CompareSwap](1555677-compareswap.md): Perform synchronous lock operation
- [CompareSwap64](1556045-compareswap64.md): Perform synchronous lock operation
- [CreateAsyncStreamCommand](1555791-createasyncstreamcommand.md): Create a command object for sending Async Stream packets
- [CreateAsyncStreamListener](1556037-createasyncstreamlistener.md): Creates a async stream listener object and returns an interface to it.
- [CreateCompareSwapCommand](1555628-createcompareswapcommand.md): Create a quadlet compare/swap command object.
- [CreateCompareSwapCommand64](1555976-createcompareswapcommand64.md): Create a quadlet compare/swap command object and initialize it with 64-bit values.
- [CreateConfigDirectoryWithIOObject](1555662-createconfigdirectorywithioobjec.md): This function can be used to create a config directory object and a corresponding interface from an opaque IOObject reference. Some configuration directory interface methods may return an io_object_t instead of an IOFireWireLibConfigDirectoryRef. Use this function to obtain an IOFireWireLibConfigDirectoryRef from an io_object_t.
- [CreateDCLCommandPool](1556103-createdclcommandpool.md): Creates a command pool object and returns an interface to it. The command pool can be used to build DCL programs.
- [CreateInitialUnitsPseudoAddressSpace](1555616-createinitialunitspseudoaddresss.md): Creates a pseudo address space in initial units space.
- [CreateIRMAllocation](1555779-createirmallocation.md): Attempt to create an IRM allocation that persists accross bus-resets.
- [CreateIsochChannel](1555848-createisochchannel.md): Creates an isochronous channel object and returns an interface to it. An isochronous channel object is an abstract entity used to represent a FireWire isochronous channel.
- [CreateLocalIsochPort](1555942-createlocalisochport.md): Creates a local isochronous port object and returns an interface to it. A local isochronous port object is an abstract entity used to represent a talking or listening endpoint in the local machine.
- [CreateLocalIsochPortWithOptions](1555850-createlocalisochportwithoptions.md): Create a local isoch port
- [CreateLocalUnitDirectory](1555879-createlocalunitdirectory.md): Creates a local unit directory object and returns an interface to it. An instance of a unit directory object corresponds to an instance of a unit directory in the local machine's configuration ROM.
- [CreateNuDCLPool](1556069-createnudclpool.md)
- [CreatePHYCommand](1555711-createphycommand.md): Create a command object for sending a PHY packet
- [CreatePHYPacketListener](1555737-createphypacketlistener.md): Create a listener object for receiving PHY packets
- [CreatePhysicalAddressSpace](1555762-createphysicaladdressspace.md): Creates a physical address space object and returns an interface to it. This will create a physical address space on the local machine.
- [CreatePseudoAddressSpace](1555763-createpseudoaddressspace.md): Creates a pseudo address space object and returns an interface to it. This will create a pseudo address space (software-backed) on the local machine.
- [CreateReadCommand](1555878-createreadcommand.md): Create a block read command object.
- [CreateReadQuadletCommand](1555734-createreadquadletcommand.md): Create a quadlet read command object.
- [CreateRemoteIsochPort](1555591-createremoteisochport.md): Creates a remote isochronous port object and returns an interface to it. A remote isochronous port object is an abstract entity used to represent a remote talker or listener device on an isochronous channel.
- [CreateVectorCommand](1555689-createvectorcommand.md): Create a vector command object.
- [CreateWriteCommand](1556011-createwritecommand.md): Create a block write command object.
- [CreateWriteQuadletCommand](1555911-createwritequadletcommand.md): Create a quadlet write command object.
- [FireBugMsg](1556115-firebugmsg.md)
- [FireLog](1555664-firelog.md): Logs string to in-kernel debug buffer
- [GetBusCycleTime](1555783-getbuscycletime.md): Get bus and cycle time.
- [GetConfigDirectory](1555703-getconfigdirectory.md): Creates a config directory object and returns an interface to it. The created config directory object represents the config directory in the remote device or unit to which the creating device interface is attached.
- [GetCycleTime](1556046-getcycletime.md): Get bus cycle time.
- [GetCycleTimeAndUpTime](1556114-getcycletimeanduptime.md): Get bus cycle time and cpu uptime.
- [GetDebugProperty](1555661-getdebugproperty.md)
- [GetDevice](1556065-getdevice.md): Get the IOKit service to which this interface is connected.
- [GetGenerationAndNodeID](1555619-getgenerationandnodeid.md): (Obsolete) Get bus generation and remote device node ID.
- [GetIRMNodeID](1555834-getirmnodeid.md)
- [GetIsochAsyncPort](1556053-getisochasyncport.md): Returns the notification port used for async and isoch callbacks
- [GetLocalNodeID](1555846-getlocalnodeid.md): (Obsolete) Get local node ID.
- [GetLocalNodeIDWithGeneration](1556009-getlocalnodeidwithgeneration.md): Get node ID of local machine.
- [GetRefCon](1555727-getrefcon.md): Get user reference value set on this interface
- [GetRemoteNodeID](1555732-getremotenodeid.md): Get node ID of device to which this interface is attached.
- [GetResetTime](1555894-getresettime.md): Get time since last bus reset.
- [GetSessionRef](1555977-getsessionref.md)
- [GetSpeedBetweenNodes](1556026-getspeedbetweennodes.md): Get the maximum transfer speed between nodes 'srcNodeID' and 'destNodeID'.
- [GetSpeedToNode](1555893-getspeedtonode.md): Get maximum transfer speed to device to which this interface is attached.
- [InterfaceIsInited](1555816-interfaceisinited.md): Determine whether interface has been properly inited.
- [NotificationIsOn](1555632-notificationison.md): Determine whether callback notifications for this interface are currently active
- [Open](1555622-open.md): Open the connected device for exclusive access. When you have the device open using this method, all accesses by other clients of this device will be denied until Close() is called.
- [OpenWithSessionRef](1555885-openwithsessionref.md): An open function which allows this interface to have access to the device when already opened. The service which has already opened the device must be able to provide an IOFireWireSessionRef.
- [PrintDCLProgram](1555718-printdclprogram.md): Walk a DCL program linked list and print its contents
- [Read](1556023-read.md): Perform synchronous block read
- [ReadQuadlet](1555961-readquadlet.md): Perform synchronous quadlet read
- [ReleaseIRMBandwidthInGeneration](1555755-releaseirmbandwidthingeneration.md): Attempt to release some isochronous bandwidth from the IRM
- [ReleaseIRMChannelInGeneration](1555975-releaseirmchannelingeneration.md): Attempt to release an isochronous channel from the IRM
- [RemoveCallbackDispatcherFromRunLoop](1555798-removecallbackdispatcherfromrunl.md): Reverses the effects of AddCallbackDispatcherToRunLoop(). This method removes the run loop event source that was added to the specified run loop preventing any future callbacks from being called
- [RemoveIsochCallbackDispatcherFromRunLoop](1556054-removeisochcallbackdispatcherfro.md): Removes an IOFireWireLib-added run loop event source.
- [Seize](1555960-seize.md): Seize control of device/unit
- [SetBusResetDoneHandler](1555870-setbusresetdonehandler.md): Sets the callback that should be called after a bus reset has occurred and reconfiguration of the bus has been completed. This function will only be called once per bus reset.
- [SetBusResetHandler](1555938-setbusresethandler.md): Sets the callback that should be called when a bus reset occurs. Note that this callback can be called multiple times before the bus reset done handler is called. (f.ex., multiple bus resets might occur before bus reconfiguration has completed.)
- [SetRefCon](1555746-setrefcon.md): Set user reference value on this interface
- [TurnOffNotification](1555902-turnoffnotification.md): Deactivates and callbacks specified for this device interface. Reverses the effects of TurnOnNotification()
- [TurnOnNotification](1556081-turnonnotification.md): Activates any callbacks specified for this device interface. Only works after AddCallbackDispatcherToRunLoop has been called. See also AddIsochCallbackDispatcherToRunLoop().
- [Write](1556028-write.md): Perform synchronous block write
- [WriteQuadlet](1555743-writequadlet.md): Perform synchronous quadlet write
