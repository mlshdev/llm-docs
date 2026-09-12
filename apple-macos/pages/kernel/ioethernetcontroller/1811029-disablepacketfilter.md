> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetcontroller/1811029-disablepacketfilter](https://developer.apple.com/documentation/kernel/ioethernetcontroller/1811029-disablepacketfilter)

# disablePacketFilter

**Interface language:** Objective-C

**Framework:** Kernel

Disables a packet filter that is currently enabled from the given filter group.

## Declaration

```objectivec
virtual IOReturn disablePacketFilter(
 const OSSymbol *group, 
 UInt32 aFilter, 
 UInt32 enabledFilters, 
 IOOptionBits options = 0); 
```

## Parameters

- `group`: The name of the filter group containing the filter to be disabled.
- `aFilter`: The filter to disable.
- `enabledFilters`: All filters currently enabled by the client.
- `options`: Optional flags for the disable request.

<a id="return_value"></a>

## Return Value

Returns the value returned by setMulticastMode() or setPromiscuousMode() if either of those two methods are called. Returns kIOReturnSuccess if the filter specified is kIOPacketFilterUnicast or kIOPacketFilterBroadcast. Returns kIOReturnUnsupported if the filter group specified is not gIONetworkFilterGroup.

<a id="overview"></a>

## Overview

The default implementation of the abstract method inherited from IONetworkController. This method will call setMulticastMode() or setPromiscuousMode() when the multicast or the promiscuous filter is to be disabled. Requests to disable the Unicast or Broadcast filters are handled silently, without informing the subclass. Subclasses can override this method to change this default behavior, or to extend it to handle additional filter types or filter groups. This method call is synchronized by the workloop's gate.

## See Also

### Miscellaneous

- [createInterface](1811019-createinterface.md): Creates an IOEthernetInterface object.
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
- [setMulticastList](1811399-setmulticastlist.md): Sets the list of multicast addresses a multicast filter should use to match against the destination address of an incoming frame.
- [setMulticastMode](1811409-setmulticastmode.md): Enables or disables multicast mode.
- [setPromiscuousMode](1811419-setpromiscuousmode.md): Enables or disables promiscuous mode.
- [setVlanTag](1811426-setvlantag.md): Encode a received packet with the vlan tag result reported by the hardware.
- [setWakeOnMagicPacket](1811434-setwakeonmagicpacket.md): Enables or disables the wake on Magic Packet support.
