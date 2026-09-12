> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetcontroller/1811391-sethardwareaddress](https://developer.apple.com/documentation/kernel/ioethernetcontroller/1811391-sethardwareaddress)

# setHardwareAddress(const void \*, UInt32)

**Interface language:** Objective-C

**Framework:** Kernel

Sets or changes the station address used by the Ethernet controller.

## Declaration

```objectivec
virtual IOReturn setHardwareAddress(
 const void *addr, 
 UInt32addrBytes); 
```

## Parameters

- `addr`: The buffer containing the hardware address provided by the client.
- `addrBytes`: The size of the address buffer provided by the client in bytes.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success, or an error otherwise.

<a id="overview"></a>

## Overview

The default implementation of the abstract method inherited from IONetworkController. This method will call the overloaded form IOEthernetController::setHardwareAddress() that subclasses are expected to override.

## See Also

### Miscellaneous

- [createInterface](1811019-createinterface.md): Creates an IOEthernetInterface object.
- [disablePacketFilter](1811029-disablepacketfilter.md): Disables a packet filter that is currently enabled from the given filter group.
- [enablePacketFilter](1811042-enablepacketfilter.md): Enables one of the supported packet filters from the given filter group.
- [free](1811058-free.md): Frees the IOEthernetController instance.
- [getHardwareAddress(IOEthernetAddress \*)](1811070-gethardwareaddress.md): Gets the Ethernet controller's permanent station address.
- [getHardwareAddress(void \*, UInt32 \*)](1811082-gethardwareaddress.md): Gets the Ethernet controller's station address.
- [getMaxPacketSize](1811094-getmaxpacketsize.md): Gets the maximum packet size supported by the Ethernet controller, including the frame header and FCS.
- [getMinPacketSize](1811103-getminpacketsize.md): Gets the minimum packet size supported by the Ethernet controller, including the frame header and FCS.
- [getPacketFilters(const OSSymbol \*, UInt32 \*)](1811115-getpacketfilters.md): Gets the set of packet filters supported by the Ethernet controller in the given filter group.
- [getPacketFilters(UInt32 \*)](1811127-getpacketfilters.md): Gets the set of packet filters supported by the Ethernet controller in the network filter group.
- [getVlanTagDemand](1811320-getvlantagdemand.md): Fetch the demand for hardware vlan tag stuffing for the given packet before it is transmitted on the network.
- [init](1811348-init.md): Initializes an IOEthernetController object.
- [initialize](1811361-initialize.md): IOEthernetController class initializer.
- [publishProperties](1811373-publishproperties.md): Publishes Ethernet controller properties and capabilities.
- [setHardwareAddress(const IOEthernetAddress \*)](1811383-sethardwareaddress.md): Sets or changes the station address used by the Ethernet controller.
- [setMulticastList](1811399-setmulticastlist.md): Sets the list of multicast addresses a multicast filter should use to match against the destination address of an incoming frame.
- [setMulticastMode](1811409-setmulticastmode.md): Enables or disables multicast mode.
- [setPromiscuousMode](1811419-setpromiscuousmode.md): Enables or disables promiscuous mode.
- [setVlanTag](1811426-setvlantag.md): Encode a received packet with the vlan tag result reported by the hardware.
- [setWakeOnMagicPacket](1811434-setwakeonmagicpacket.md): Enables or disables the wake on Magic Packet support.
