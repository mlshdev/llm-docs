> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1645322-anonymous/kioethernetwakeonpacketaddressmatch

# kIOEthernetWakeOnPacketAddressMatch

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOEthernetWakeOnPacketAddressMatch = 0x00000002
```

<a id="discussion"></a>

## Discussion

Reception of a packet which passes through any of the address filtering mechanisms based on its destination Ethernet address. This may include unicast, broadcast, or multicast addresses depending on the current state and setting of the corresponding packet filters.
