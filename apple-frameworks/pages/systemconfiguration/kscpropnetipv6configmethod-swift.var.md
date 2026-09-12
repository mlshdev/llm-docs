> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscpropnetipv6configmethod-swift.var](https://developer.apple.com/documentation/systemconfiguration/kscpropnetipv6configmethod-swift.var)

# kSCPropNetIPv6ConfigMethod (Swift)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.1+

The IPv6 key `ConfigMethod`, whose value is of type `CFString`.

## Declaration

```swift
let kSCPropNetIPv6ConfigMethod: CFString
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants:

- `kSCValNetIPv6ConfigMethodAutomatic`, which has the value `Automatic`
- `kSCValNetIPv6ConfigMethodManual`, which has the value `Manual`
- `kSCValNetIPv6ConfigMethodRouterAdvertisement`, which has the value `RouterAdvertisement`
- `kSCValNetIPv6ConfigMethod6to4`, which has the value `6to4`

## See Also

### Constants

- [kSCPropNetIPv6Addresses](kscpropnetipv6addresses-swift.var.md): The IPv6 key `Addresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv6DestAddresses](kscpropnetipv6destaddresses-swift.var.md): The IPv6 key `DestAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv6Flags](kscpropnetipv6flags-swift.var.md): The IPv6 key `Flags`, whose value is of type `CFNumber`.
- [kSCPropNetIPv6PrefixLength](kscpropnetipv6prefixlength-swift.var.md): The IPv6 key `PrefixLength`, whose value is of type `CFArray`, containing elements of type `CFNumber`.
- [kSCPropNetIPv6Router](kscpropnetipv6router-swift.var.md): The IPv6 key `Router`, whose value is of type `CFString`.

# kSCPropNetIPv6ConfigMethod (Objective-C)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.1+

The IPv6 key `ConfigMethod`, whose value is of type `CFString`.

## Declaration

```objectivec
extern CFStringRef const kSCPropNetIPv6ConfigMethod;
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants:

- `kSCValNetIPv6ConfigMethodAutomatic`, which has the value `Automatic`
- `kSCValNetIPv6ConfigMethodManual`, which has the value `Manual`
- `kSCValNetIPv6ConfigMethodRouterAdvertisement`, which has the value `RouterAdvertisement`
- `kSCValNetIPv6ConfigMethod6to4`, which has the value `6to4`

## See Also

### Constants

- [kSCPropNetIPv6Addresses](kscpropnetipv6addresses-swift.var.md): The IPv6 key `Addresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv6DestAddresses](kscpropnetipv6destaddresses-swift.var.md): The IPv6 key `DestAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv6Flags](kscpropnetipv6flags-swift.var.md): The IPv6 key `Flags`, whose value is of type `CFNumber`.
- [kSCPropNetIPv6PrefixLength](kscpropnetipv6prefixlength-swift.var.md): The IPv6 key `PrefixLength`, whose value is of type `CFArray`, containing elements of type `CFNumber`.
- [kSCPropNetIPv6Router](kscpropnetipv6router-swift.var.md): The IPv6 key `Router`, whose value is of type `CFString`.
