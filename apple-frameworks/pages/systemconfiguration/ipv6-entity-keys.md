> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/ipv6-entity-keys](https://developer.apple.com/documentation/systemconfiguration/ipv6-entity-keys)

# IPv6 Entity Keys

**Interface languages:** Swift, Objective-C

**Framework:** System Configuration  
**Kind:** API Collection

Keys that correspond to values in the `kSCEntNetIPv6` dictionary.

## Topics

### Constants

- [kSCPropNetIPv6Addresses](kscpropnetipv6addresses-swift.var.md): The IPv6 key `Addresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv6ConfigMethod](kscpropnetipv6configmethod-swift.var.md): The IPv6 key `ConfigMethod`, whose value is of type `CFString`.
- [kSCPropNetIPv6DestAddresses](kscpropnetipv6destaddresses-swift.var.md): The IPv6 key `DestAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv6Flags](kscpropnetipv6flags-swift.var.md): The IPv6 key `Flags`, whose value is of type `CFNumber`.
- [kSCPropNetIPv6PrefixLength](kscpropnetipv6prefixlength-swift.var.md): The IPv6 key `PrefixLength`, whose value is of type `CFArray`, containing elements of type `CFNumber`.
- [kSCPropNetIPv6Router](kscpropnetipv6router-swift.var.md): The IPv6 key `Router`, whose value is of type `CFString`.

### IPv6 Configuration Method Values

- [kSCValNetIPv6ConfigMethodAutomatic](kscvalnetipv6configmethodautomatic-swift.var.md): The constant value Automatic.
- [kSCValNetIPv6ConfigMethodLinkLocal](kscvalnetipv6configmethodlinklocal-swift.var.md): The constant value LinkLocal.
- [kSCValNetIPv6ConfigMethodManual](kscvalnetipv6configmethodmanual-swift.var.md): The constant value Manual.
- [kSCValNetIPv6ConfigMethodRouterAdvertisement](kscvalnetipv6configmethodrouteradvertisement-swift.var.md): The constant value RouterAdvertisement.
- [kSCValNetIPv6ConfigMethod6to4](kscvalnetipv6configmethod6to4-swift.var.md): The constant value 6to4.

## See Also

### Constants

- [Generic Keys](generic-keys.md): General-purpose keys that apply to multiple dictionaries in the persistent store.
- [Preference Keys](preference-keys.md): Keys that correspond to preferences in the persistent store.
- [Component Keys](component-keys.md): Keys that correspond to components in the persistent store.
- [Network Dictionary Keys](network-dictionary-keys.md): Keys that correspond to values in the `kSCCompNetwork` dictionary.
- [Interface Dictionary Keys](interface-dictionary-keys.md): Keys that correspond to values in the `kSCCompInterface` dictionary.
- [Hostnames Dictionary Keys](hostnames-dictionary-keys.md): Keys that correspond to values in the `kSCCompHostnames` dictionary.
- [Network Entity Keys](network-entity-keys.md): Keys that correspond to network entity dictionaries in the persistent store.
- [DNS Entity Keys](dns-entity-keys.md): Keys that correspond to values in the `kSCEntNetDNS` dictionary.
- [Ethernet Entity Keys](ethernet-entity-keys.md): Keys that correspond to values in the `kSCEntNetEthernet` dictionary.
- [Interface Entity Keys](interface-entity-keys.md): Keys that correspond to values in the `kSCEntNetInterface` dictionary.
- [IPSec Entity Keys](ipsec-entity-keys.md): Keys that correspond to values in the `kSCEntNetIPSec` dictionary.
- [IPv4 Entity Keys](ipv4-entity-keys.md): Keys that correspond to values in the `kSCEntNetIPv4` dictionary.
- [6to4 Entity Keys](6to4-entity-keys.md): Keys that correspond to values in the `kSCEntNet6to4` dictionary.
- [Link Entity Keys](link-entity-keys.md): Keys that correspond to values in the `kSCEntNetLink` dictionary.
- [Modem Entity Keys](modem-entity-keys.md): Keys that correspond to values in the `kSCEntNetModem` dictionary.
