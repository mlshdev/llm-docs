> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkmacaddress](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkmacaddress)

# IOUserNetworkMACAddress

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Structure  
**Availability:** DriverKit

A hardware address for a device.

## Declaration

```objectivec
struct IOUserNetworkMACAddress;
```

## Topics

### Getting the MAC Address

- [octet](iousernetworkmacaddress/octet.md): Deprecated. The hardware address, specified as a series of six bytes.

## See Also

### Configuring Link Attributes

- [SetTxPacketHeadroom](iousernetworkethernet/settxpacketheadroom.md): Reserves the specified number of bytes at the front of each packet.
- [SetTxPacketTailroom](iousernetworkethernet/settxpackettailroom.md): Reserves the specified number of bytes at the end of each packet.
- [SetSoftwareVlanSupport](iousernetworkethernet/setsoftwarevlansupport.md): Enables software VLAN support.
- [SetMulticastAddresses](iousernetworkethernet/setmulticastaddresses-7wjbn.md): Deprecated. Sets the device addresses to use for multicast filtering.
- [SetAllMulticastModeEnable](iousernetworkethernet/setallmulticastmodeenable-5rtva.md): Deprecated. Enables or disables multicast support for your service.
- [SetPromiscuousModeEnable](iousernetworkethernet/setpromiscuousmodeenable-82bt.md): Enables or disables support for monitoriong all network packets.
- [SetWakeOnMagicPacketSupport](iousernetworkethernet/setwakeonmagicpacketsupport.md): Tells the system whether the device supports being woken up when a specially formatted packet arrives.
- [SetWakeOnMagicPacketEnable](iousernetworkethernet/setwakeonmagicpacketenable.md): Deprecated. Enables or disables support for waking up the device when a specially formatted packet arrives.
