> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetcontroller](https://developer.apple.com/documentation/kernel/ioethernetcontroller)

# IOEthernetController

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.6+ (deprecated in 10.15.4)

Abstract superclass for Ethernet controllers.

## Declaration

```objectivec
class IOEthernetController : IONetworkController
```

<a id="overview"></a>

## Overview

Ethernet controller drivers should subclass IOEthernetController, and implement or override the hardware specific methods to create an Ethernet driver. An interface object (an IOEthernetInterface instance) must be instantiated by the driver, through attachInterface(), to connect the controller driver to the data link layer.

## Topics

### Miscellaneous

- [createInterface](ioethernetcontroller/1811019-createinterface.md): Creates an IOEthernetInterface object.
- [disablePacketFilter](ioethernetcontroller/1811029-disablepacketfilter.md): Disables a packet filter that is currently enabled from the given filter group.
- [enablePacketFilter](ioethernetcontroller/1811042-enablepacketfilter.md): Enables one of the supported packet filters from the given filter group.
- [free](ioethernetcontroller/1811058-free.md): Frees the IOEthernetController instance.
- [getHardwareAddress(IOEthernetAddress \*)](ioethernetcontroller/1811070-gethardwareaddress.md): Gets the Ethernet controller's permanent station address.
- [getHardwareAddress(void \*, UInt32 \*)](ioethernetcontroller/1811082-gethardwareaddress.md): Gets the Ethernet controller's station address.
- [getMaxPacketSize](ioethernetcontroller/1811094-getmaxpacketsize.md): Gets the maximum packet size supported by the Ethernet controller, including the frame header and FCS.
- [getMinPacketSize](ioethernetcontroller/1811103-getminpacketsize.md): Gets the minimum packet size supported by the Ethernet controller, including the frame header and FCS.
- [getPacketFilters(const OSSymbol \*, UInt32 \*)](ioethernetcontroller/1811115-getpacketfilters.md): Gets the set of packet filters supported by the Ethernet controller in the given filter group.
- [getPacketFilters(UInt32 \*)](ioethernetcontroller/1811127-getpacketfilters.md): Gets the set of packet filters supported by the Ethernet controller in the network filter group.
- [getVlanTagDemand](ioethernetcontroller/1811320-getvlantagdemand.md): Fetch the demand for hardware vlan tag stuffing for the given packet before it is transmitted on the network.
- [init](ioethernetcontroller/1811348-init.md): Initializes an IOEthernetController object.
- [initialize](ioethernetcontroller/1811361-initialize.md): IOEthernetController class initializer.
- [publishProperties](ioethernetcontroller/1811373-publishproperties.md): Publishes Ethernet controller properties and capabilities.
- [setHardwareAddress(const IOEthernetAddress \*)](ioethernetcontroller/1811383-sethardwareaddress.md): Sets or changes the station address used by the Ethernet controller.
- [setHardwareAddress(const void \*, UInt32)](ioethernetcontroller/1811391-sethardwareaddress.md): Sets or changes the station address used by the Ethernet controller.
- [setMulticastList](ioethernetcontroller/1811399-setmulticastlist.md): Sets the list of multicast addresses a multicast filter should use to match against the destination address of an incoming frame.
- [setMulticastMode](ioethernetcontroller/1811409-setmulticastmode.md): Enables or disables multicast mode.
- [setPromiscuousMode](ioethernetcontroller/1811419-setpromiscuousmode.md): Enables or disables promiscuous mode.
- [setVlanTag](ioethernetcontroller/1811426-setvlantag.md): Encode a received packet with the vlan tag result reported by the hardware.
- [setWakeOnMagicPacket](ioethernetcontroller/1811434-setwakeonmagicpacket.md): Enables or disables the wake on Magic Packet support.

### Instance Variables

- [\_reserved](ioethernetcontroller/reserved.md)

### Instance Methods

- [addTimeSyncReceivePacketHandler](ioethernetcontroller/2934806-addtimesyncreceivepackethandler.md): Deprecated.
- [addTimeSyncTransmitPacketHandler](ioethernetcontroller/2934783-addtimesynctransmitpackethandler.md): Deprecated.
- [allocateAVBPacket](ioethernetcontroller/2934778-allocateavbpacket.md): Deprecated.
- [changeAVBControllerState](ioethernetcontroller/2934802-changeavbcontrollerstate.md): Deprecated.
- [cleanupTransmitQueue](ioethernetcontroller/2934797-cleanuptransmitqueue.md): Deprecated.
- [completeAVBPacket](ioethernetcontroller/2934805-completeavbpacket.md): Deprecated.
- [createInterface](ioethernetcontroller/1506635-createinterface.md): Deprecated.
- [createRealtimeAVBPacketPool](ioethernetcontroller/4284033-createrealtimeavbpacketpool.md): Deprecated.
- [deregisterForAVBStateChangeNotifications](ioethernetcontroller/2934809-deregisterforavbstatechangenotif.md): Deprecated.
- [disablePacketFilter](ioethernetcontroller/1506610-disablepacketfilter.md): Deprecated.
- [enablePacketFilter](ioethernetcontroller/1506623-enablepacketfilter.md): Deprecated.
- [free](ioethernetcontroller/1506601-free.md): Deprecated.
- [getAVBSupport](ioethernetcontroller/2934775-getavbsupport.md): Deprecated.
- [getControllerAVBState](ioethernetcontroller/2934818-getcontrolleravbstate.md): Deprecated.
- [getHardwareAddress](ioethernetcontroller/1506619-gethardwareaddress.md): Deprecated.
- [getHardwareAddress](ioethernetcontroller/3516606-gethardwareaddress.md): Deprecated.
- [getMaxPacketSize](ioethernetcontroller/1506630-getmaxpacketsize.md): Deprecated.
- [getMetaClass](ioethernetcontroller/1506595-getmetaclass.md): Deprecated.
- [getMinPacketSize](ioethernetcontroller/1506647-getminpacketsize.md): Deprecated.
- [getPacketFilters](ioethernetcontroller/1506617-getpacketfilters.md): Deprecated.
- [getPacketFilters](ioethernetcontroller/3516607-getpacketfilters.md): Deprecated.
- [getRealtimeReceiveQueueFilter](ioethernetcontroller/2934811-getrealtimereceivequeuefilter.md): Deprecated.
- [getTransmitQueuePacketLatency](ioethernetcontroller/2934793-gettransmitqueuepacketlatency.md): Deprecated.
- [getTransmitQueuePrefetchDelay](ioethernetcontroller/2934816-gettransmitqueueprefetchdelay.md): Deprecated.
- [getVlanTagDemand](ioethernetcontroller/1506624-getvlantagdemand.md): Deprecated.
- [init](ioethernetcontroller/1506598-init.md): Deprecated.
- [publishProperties](ioethernetcontroller/1506650-publishproperties.md): Deprecated.
- [receivedTimeSyncPacket](ioethernetcontroller/2934785-receivedtimesyncpacket.md): Deprecated.
- [registerForAVBStateChangeNotifications](ioethernetcontroller/2934801-registerforavbstatechangenotific.md): Deprecated.
- [removeTimeSyncReceivePacketHandler](ioethernetcontroller/2934796-removetimesyncreceivepackethandl.md): Deprecated.
- [removeTimeSyncTransmitPacketHandler](ioethernetcontroller/2934781-removetimesynctransmitpackethand.md): Deprecated.
- [setAVBControllerState](ioethernetcontroller/2934825-setavbcontrollerstate.md): Deprecated.
- [setAVBPacketMapper](ioethernetcontroller/2934807-setavbpacketmapper.md): Deprecated.
- [setGPTPPresent](ioethernetcontroller/2934787-setgptppresent.md): Deprecated.
- [setHardwareAddress](ioethernetcontroller/1506608-sethardwareaddress.md): Deprecated.
- [setHardwareAddress](ioethernetcontroller/3516608-sethardwareaddress.md): Deprecated.
- [setMulticastList](ioethernetcontroller/1506649-setmulticastlist.md): Deprecated.
- [setMulticastMode](ioethernetcontroller/1506646-setmulticastmode.md): Deprecated.
- [setNumberOfRealtimeReceiveQueues](ioethernetcontroller/2934779-setnumberofrealtimereceivequeues.md): Deprecated.
- [setNumberOfRealtimeTransmitQueues](ioethernetcontroller/2934803-setnumberofrealtimetransmitqueue.md): Deprecated.
- [setPromiscuousMode](ioethernetcontroller/1506593-setpromiscuousmode.md): Deprecated.
- [setRealtimeMulticastIsAllowed](ioethernetcontroller/2934788-setrealtimemulticastisallowed.md): Deprecated.
- [setRealtimeReceiveDestinationMACList](ioethernetcontroller/2934790-setrealtimereceivedestinationmac.md): Deprecated.
- [setRealtimeReceiveQueueFilter](ioethernetcontroller/2934817-setrealtimereceivequeuefilter.md): Deprecated.
- [setRealtimeReceiveQueuePacketHandler](ioethernetcontroller/2934786-setrealtimereceivequeuepackethan.md): Deprecated.
- [setTimeSyncPacketSupport](ioethernetcontroller/2934776-settimesyncpacketsupport.md): Deprecated.
- [setTransmitQueuePacketLatency](ioethernetcontroller/2934814-settransmitqueuepacketlatency.md): Deprecated.
- [setTransmitQueuePrefetchDelay](ioethernetcontroller/2934774-settransmitqueueprefetchdelay.md): Deprecated.
- [setVlanTag](ioethernetcontroller/1506645-setvlantag.md): Deprecated.
- [setWakeOnMagicPacket](ioethernetcontroller/1506633-setwakeonmagicpacket.md): Deprecated.
- [timeSyncCallbackThread](ioethernetcontroller/2934821-timesynccallbackthread.md): Deprecated.
- [transmitRealtimePackets](ioethernetcontroller/2934777-transmitrealtimepackets.md): Deprecated.
- [transmitTimeSyncPacket](ioethernetcontroller/2934820-transmittimesyncpacket.md): Deprecated.
- [transmittedTimeSyncPacket](ioethernetcontroller/2934799-transmittedtimesyncpacket.md): Deprecated.

### Type Methods

- [allocatedAVBPacketCompletion](ioethernetcontroller/2934795-allocatedavbpacketcompletion.md): Deprecated.
- [initialize](ioethernetcontroller/1506611-initialize.md): Deprecated.
- [realtimePoolAVBPacketCompletion](ioethernetcontroller/2934804-realtimepoolavbpacketcompletion.md): Deprecated.
- [timeSyncCallbackThreadEntry](ioethernetcontroller/2934789-timesynccallbackthreadentry.md): Deprecated.

## Relationships

### Inherits From

- [IONetworkController](ionetworkcontroller.md)

## See Also

### IOKit

- [IOUSBDevice](iousbdevice.md): Deprecated. An input/output service object that represents a device on the USB bus.
- [IOUSBInterface](iousbinterface.md): Deprecated. An object that represents an interface of a device on the USB bus.
- [IOOFPathMatching](1575304-ioofpathmatching.md): Deprecated.
- [IOUSBHostInterface](iousbhostinterface.md): Deprecated.
- [IOUSBHostDevice](iousbhostdevice.md): Deprecated.
- [IOUSBHostPipe](iousbhostpipe.md): Deprecated.
- [IOUSBHostIOSource](iousbhostiosource.md): Deprecated.
- [IOUSBHostStream](iousbhoststream.md): Deprecated.
- [IOHIDEventDriver](iohideventdriver.md): Deprecated.
- [IOHIDEventService](iohideventservice.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDInterface](iohidinterface.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDSystem](iohidsystem.md): Deprecated.
- [IOHIKeyboardMapper](iohikeyboardmapper.md): Deprecated.
- [IOHIKeyboard](iohikeyboard.md): Deprecated.
- [IOHIPointing](iohipointing.md): Deprecated.
- [IOHIDevice](iohidevice.md): Deprecated.
- [IOHIDElement](iohidelement.md): Deprecated.
- [IOHIDWorkLoop](iohidworkloop.md): Deprecated.
- [IOEthernetInterface](ioethernetinterface.md): Deprecated. The Ethernet interface object.
