> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/setwakeonmagicpacketenable](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/setwakeonmagicpacketenable)

# SetWakeOnMagicPacketEnable

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Enables or disables support for waking up the device when a specially formatted packet arrives.

## Declaration

```objectivec
virtual kern_return_t SetWakeOnMagicPacketEnable(bool enable);
```

## Parameters

- `enable`: If `YES`, enable promiscuous mode for the device; otherwise, disable it.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success, or another value if an error occurred.

<a id="Discussion"></a>

## Discussion

Override this method and use it to configure your driver’s wake-on-magic-packet support.

## See Also

### Configuring Link Attributes

- [SetTxPacketHeadroom](settxpacketheadroom.md): Reserves the specified number of bytes at the front of each packet.
- [SetTxPacketTailroom](settxpackettailroom.md): Reserves the specified number of bytes at the end of each packet.
- [SetSoftwareVlanSupport](setsoftwarevlansupport.md): Enables software VLAN support.
- [SetMulticastAddresses](setmulticastaddresses-7wjbn.md): Deprecated. Sets the device addresses to use for multicast filtering.
- [SetAllMulticastModeEnable](setallmulticastmodeenable-5rtva.md): Deprecated. Enables or disables multicast support for your service.
- [SetPromiscuousModeEnable](setpromiscuousmodeenable-82bt.md): Enables or disables support for monitoriong all network packets.
- [SetWakeOnMagicPacketSupport](setwakeonmagicpacketsupport.md): Tells the system whether the device supports being woken up when a specially formatted packet arrives.
- [IOUserNetworkMACAddress](../iousernetworkmacaddress.md): Deprecated. A hardware address for a device.
