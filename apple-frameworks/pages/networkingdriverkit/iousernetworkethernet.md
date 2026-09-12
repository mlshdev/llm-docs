> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet)

# IOUserNetworkEthernet

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Class  
**Availability:** DriverKit

The object you use to manage the setup, configuration, and teardown of your networking driver.

## Declaration

```objectivec
class IOUserNetworkEthernet;
```

<a id="overview"></a>

## Overview

Subclass `IOUserNetworkEthernet` and override the methods you need to implement your driver’s behavior. Your subclass manages your driver’s overall life cycle, and facilitates communication between the hardware and the rest of the system. Use the [Start](../driverkit/ioservice/start.md) method to establish a link to your hardware and to create the data structures needed to manage incoming and outgoing data packets. Use the [Stop](../driverkit/ioservice/stop.md) method to clean up the data structures you create in your [Start](../driverkit/ioservice/start.md) method.

Override other methods of this class, and of the [IOService](../driverkit/ioservice.md) parent class, as needed to enable your interface and implement other network-related behaviors. For example, you might want to override the inherited [setPowerState](https://developer.apple.com/documentation/kernel/ioservice/1532866-setpowerstate) method to respond to power-level changes.

<a id="Specify-the-Drivers-Personality-Information"></a>

### Specify the Driver’s Personality Information

When you subclass `IOUserNetworkEthernet`, update the `IOKitPersonalities` key of your driver extension’s `Info.plist` file with information to match your driver to appropriate hardware. For this class, always include the keys and values in the following table.

| Key | Discussion |
| --- | --- |
| `IOClass` | The value [IOUserNetworkEthernet](iousernetworkethernet.md). |
| `IOProviderClass` | The provider class information. For USB-based network interfaces, specify [IOUSBHostInterface](../usbdriverkit/iousbhostinterface.md). |
| `IOUserClass` | The name of your custom subclass. |
| [CFBundleIdentifier](../bundleresources/information-property-list/cfbundleidentifier.md) | The bundle identifier of your driver. |
| `CFBundleIdentifierKernel` | The value `com.apple.iokit.IOSkywalkFamily`. |

You may add other keys to assist with the matching process. For example, you might include the `bInterfaceClass`, `bInterfaceProtocol`, and `bInterfaceSubClass` keys to match against specific USB device attributes. The USB specification defines which keys to include when matching your driver to a USB device. For information about the specific key combinations, see *Universal Serial Bus Common Class Specification* at [https://www.usb.org](https://www.usb.org).

## Topics

### Configuring the Driver Service

- [init](iousernetworkethernet/init.md): Handles the basic initialization of the service.
- [free](iousernetworkethernet/free.md): Performs any final cleanup for the service.
- [RegisterEthernetInterface](iousernetworkethernet/registerethernetinterface-4jqw8.md): Deprecated. Registers your driver with the networking stack.

### Declaring the Supported Media Types

- [ReportAvailableMediaTypes](iousernetworkethernet/reportavailablemediatypes.md): Deprecated. Tells the system what types of networking media your driver supports.
- [SelectMediaType](iousernetworkethernet/selectmediatype.md): Deprecated. Selects the media type to use when communicating with the network stack.
- [IOUserNetworkMediaType](iousernetworkmediatype.md): Deprecated. A structure describing a specific Ethernet type and configuration that your driver supports.

### Enabling Your Service

- [SetInterfaceEnable](iousernetworkethernet/setinterfaceenable-3v24g.md): Deprecated. Enables or disables your service.

### Configuring Link Attributes

- [SetTxPacketHeadroom](iousernetworkethernet/settxpacketheadroom.md): Reserves the specified number of bytes at the front of each packet.
- [SetTxPacketTailroom](iousernetworkethernet/settxpackettailroom.md): Reserves the specified number of bytes at the end of each packet.
- [SetSoftwareVlanSupport](iousernetworkethernet/setsoftwarevlansupport.md): Enables software VLAN support.
- [SetMulticastAddresses](iousernetworkethernet/setmulticastaddresses-7wjbn.md): Deprecated. Sets the device addresses to use for multicast filtering.
- [SetAllMulticastModeEnable](iousernetworkethernet/setallmulticastmodeenable-5rtva.md): Deprecated. Enables or disables multicast support for your service.
- [SetPromiscuousModeEnable](iousernetworkethernet/setpromiscuousmodeenable-82bt.md): Enables or disables support for monitoriong all network packets.
- [SetWakeOnMagicPacketSupport](iousernetworkethernet/setwakeonmagicpacketsupport.md): Tells the system whether the device supports being woken up when a specially formatted packet arrives.
- [SetWakeOnMagicPacketEnable](iousernetworkethernet/setwakeonmagicpacketenable.md): Deprecated. Enables or disables support for waking up the device when a specially formatted packet arrives.
- [IOUserNetworkMACAddress](iousernetworkmacaddress.md): Deprecated. A hardware address for a device.

### Reporting the Connection Status

- [ReportLinkStatus](iousernetworkethernet/reportlinkstatus-5cxiq.md): Deprecated. Reports the status of the link between the device and your driver to the system.
- [ReportLinkQuality](iousernetworkethernet/reportlinkquality-4noh0.md): Deprecated. Reports the quality of the link between the device and your driver to the system.
- [ReportDataBandwidths](iousernetworkethernet/reportdatabandwidths-10ssx.md): Deprecated. Reports the input and output bandwidth between the device and your driver to the system.
- [IOUserNetworkLinkStatus](iousernetworklinkstatus.md): Deprecated. A type for specifying the state of your device’s connection.
- [IOUserNetworkLinkQuality](iousernetworklinkquality.md): Deprecated. A type for specifying the quality of your device’s connection to the host.

### Instance Methods

- [GetHardwareAssists](iousernetworkethernet/gethardwareassists-4kj3q.md): Deprecated.
- [GetMaxTransferUnit](iousernetworkethernet/getmaxtransferunit-mvla.md): Deprecated.
- [RegisterEthernetInterface](iousernetworkethernet/registerethernetinterface-fffz.md)
- [ReportNicProxyLimits](iousernetworkethernet/reportnicproxylimits-9yg2x.md): Deprecated.
- [SetHardwareAssists](iousernetworkethernet/sethardwareassists-5dvbf.md): Deprecated.
- [SetMTU](iousernetworkethernet/setmtu.md): Deprecated.
- [addHardwareCountsWithInterfaceStatistics](iousernetworkethernet/addhardwarecountswithinterfacestatistics.md)
- [bpfAttach](iousernetworkethernet/bpfattach.md)
- [bpfTap](iousernetworkethernet/bpftap.md)
- [bpfTapInputPacket](iousernetworkethernet/bpftapinputpacket.md)
- [bpfTapOutputPacket](iousernetworkethernet/bpftapoutputpacket.md)
- [getBSDName](iousernetworkethernet/getbsdname.md)
- [getBSDNamePrefix](iousernetworkethernet/getbsdnameprefix.md)
- [getBSDUnitNumber](iousernetworkethernet/getbsdunitnumber.md)
- [getFeatureFlags](iousernetworkethernet/getfeatureflags.md)
- [getHardwareAddress](iousernetworkethernet/gethardwareaddress.md)
- [getHardwareAssists](iousernetworkethernet/gethardwareassists-7o0q0.md)
- [getInitialMedia](iousernetworkethernet/getinitialmedia.md)
- [getInterfaceSubFamily](iousernetworkethernet/getinterfacesubfamily.md)
- [getMaxTransferUnit](iousernetworkethernet/getmaxtransferunit-3iokl.md)
- [getSupportedMediaArray](iousernetworkethernet/getsupportedmediaarray.md)
- [getTSOOptions](iousernetworkethernet/gettsooptions.md)
- [getTxDataOffset](iousernetworkethernet/gettxdataoffset.md)
- [handleChosenMedia](iousernetworkethernet/handlechosenmedia.md)
- [hwConfigNicProxyData](iousernetworkethernet/hwconfignicproxydata-345tz.md)
- [hwConfigNicProxyData](iousernetworkethernet/hwconfignicproxydata-7u8wb.md): Deprecated.
- [processInterfaceCommand](iousernetworkethernet/processinterfacecommand.md)
- [registerEthernetInterface](iousernetworkethernet/registerethernetinterface-8pzu9.md)
- [registerEthernetInterface](iousernetworkethernet/registerethernetinterface-948c9.md)
- [reportDataBandwidths](iousernetworkethernet/reportdatabandwidths-95d7h.md)
- [reportLinkQuality](iousernetworkethernet/reportlinkquality-2tcue.md)
- [reportLinkStatus](iousernetworkethernet/reportlinkstatus-4qtrf.md)
- [reportNicProxyLimits](iousernetworkethernet/reportnicproxylimits-6p2r1.md)
- [setAllMulticastModeEnable](iousernetworkethernet/setallmulticastmodeenable-3aocm.md)
- [setHardwareAddress](iousernetworkethernet/sethardwareaddress.md)
- [setHardwareAssists](iousernetworkethernet/sethardwareassists-2uqz7.md): Deprecated.
- [setHardwareAssists](iousernetworkethernet/sethardwareassists-3vpkr.md)
- [setInterfaceEnable](iousernetworkethernet/setinterfaceenable-6pfsx.md)
- [setMaxTransferUnit](iousernetworkethernet/setmaxtransferunit.md)
- [setMulticastAddresses](iousernetworkethernet/setmulticastaddresses-1o4z3.md)
- [setPowerState](iousernetworkethernet/setpowerstate.md)
- [setPromiscuousModeEnable](iousernetworkethernet/setpromiscuousmodeenable-34fjm.md)
- [start](iousernetworkethernet/start.md)
- [stop](iousernetworkethernet/stop.md)
- [updateInterfaceDescriptor](iousernetworkethernet/updateinterfacedescriptor.md)

## Relationships

### Inherits From

- [IOService](../driverkit/ioservice.md)
