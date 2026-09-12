> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetcontroller/1811399-setmulticastlist](https://developer.apple.com/documentation/kernel/ioethernetcontroller/1811399-setmulticastlist)

# setMulticastList

**Interface language:** Objective-C

**Framework:** Kernel

Sets the list of multicast addresses a multicast filter should use to match against the destination address of an incoming frame.

## Declaration

```objectivec
virtual IOReturn setMulticastList(
 IOEthernetAddress *addrs, 
 UInt32count); 
```

## Parameters

- `addrs`: An array of Ethernet addresses. This argument must be ignored if the count argument is 0.
- `count`: The number of Ethernet addresses in the list. This value will be zero when the list becomes empty.

<a id="return_value"></a>

## Return Value

Returns kIOReturnUnsupported. Drivers must return kIOReturnSuccess to indicate success, or an error return code otherwise.

<a id="overview"></a>

## Overview

This method sets the list of multicast addresses that the multicast filter should use to match against the destination address of an incoming frame. The frame should be accepted when a match occurs. Called when the multicast group membership of an interface object is changed. Drivers that support kIOPacketFilterMulticast should override this method and update the hardware multicast filter using the list of Ethernet addresses provided. Perfect multicast filtering is preferred if supported by the hardware, in order to reduce the number of unwanted packets received. If the number of multicast addresses in the list exceeds what the hardware is capable of supporting, or if perfect filtering is not supported, then ideally the hardware should be programmed to perform imperfect filtering, through some form of hash filtering mechanism. Only as a last resort should the driver enable reception of all multicast packets to satisfy this request. This method is called from the workloop context, and only if the driver reports kIOPacketFilterMulticast support in getPacketFilters().

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
- [setHardwareAddress(const void \*, UInt32)](1811391-sethardwareaddress.md): Sets or changes the station address used by the Ethernet controller.
- [setMulticastMode](1811409-setmulticastmode.md): Enables or disables multicast mode.
- [setPromiscuousMode](1811419-setpromiscuousmode.md): Enables or disables promiscuous mode.
- [setVlanTag](1811426-setvlantag.md): Encode a received packet with the vlan tag result reported by the hardware.
- [setWakeOnMagicPacket](1811434-setwakeonmagicpacket.md): Enables or disables the wake on Magic Packet support.
