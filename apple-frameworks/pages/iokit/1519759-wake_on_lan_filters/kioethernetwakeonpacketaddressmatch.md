> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1519759-wake_on_lan_filters/kioethernetwakeonpacketaddressmatch](https://developer.apple.com/documentation/iokit/1519759-wake_on_lan_filters/kioethernetwakeonpacketaddressmatch)

# kIOEthernetWakeOnPacketAddressMatch

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
kIOEthernetWakeOnPacketAddressMatch = 0x00000002
```

<a id="discussion"></a>

## Discussion

Reception of a packet which passes through any of the address filtering mechanisms based on its destination Ethernet address. This may include unicast, broadcast, or multicast addresses depending on the current state and setting of the corresponding packet filters.
