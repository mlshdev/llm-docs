> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress/init(ethernetaddress:)](https://developer.apple.com/documentation/virtualization/vzmacaddress/init(ethernetaddress:))

# init(ethernetAddress:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a MAC address from the specified 48-bit Ethernet address.

## Declaration

```swift
init(ethernetAddress: ether_addr_t)
```

## Parameters

- `ethernetAddress`: A 48-bit Ethernet address.

<a id="return-value"></a>

## Return Value

A MAC address object with the specified Ethernet address.

## See Also

### Creating a MAC address

- [randomLocallyAdministered()](randomlocallyadministered%28%29.md): Returns a valid, random, locally administered, unicast MAC address.
- [init(string:)](init%28string_%29.md): Creates a MAC address object from a specially formatted string.

# initWithEthernetAddress: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a MAC address from the specified 48-bit Ethernet address.

## Declaration

```objectivec
- (instancetype) initWithEthernetAddress:(ether_addr_t) ethernetAddress;
```

## Parameters

- `ethernetAddress`: A 48-bit Ethernet address.

<a id="return-value"></a>

## Return Value

A MAC address object with the specified Ethernet address.

## See Also

### Creating a MAC address

- [randomLocallyAdministeredAddress](randomlocallyadministered%28%29.md): Returns a valid, random, locally administered, unicast MAC address.
- [initWithString:](init%28string_%29.md): Creates a MAC address object from a specially formatted string.
