> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzmacaddress/ethernetaddress

# ethernetAddress (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The MAC address as an Ethernet data structure.

## Declaration

```swift
var ethernetAddress: ether_addr_t { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to obtain the individual octets of the Ethernet address. For more information, see `ether_addr_t`.

## See Also

### Getting the address

- [string](string.md): The MAC address as a formatted string.

# ethernetAddress (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The MAC address as an Ethernet data structure.

## Declaration

```objectivec
@property (readonly) ether_addr_t ethernetAddress;
```

<a id="Discussion"></a>

## Discussion

Use this property to obtain the individual octets of the Ethernet address. For more information, see `ether_addr_t`.

## See Also

### Getting the address

- [string](string.md): The MAC address as a formatted string.
