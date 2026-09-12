> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscpropnetipv4configmethod-swift.var](https://developer.apple.com/documentation/systemconfiguration/kscpropnetipv4configmethod-swift.var)

# kSCPropNetIPv4ConfigMethod (Swift)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.1+

The IPv4 key `ConfigMethod`, whose value is of type `CFString`.

## Declaration

```swift
let kSCPropNetIPv4ConfigMethod: CFString
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants:

- `kSCValNetIPv4ConfigMethodBOOTP`, which has the value `BOOTP`
- `kSCValNetIPv4ConfigMethodDHCP`, which has the value `DHCP`
- `kSCValNetIPv4ConfigMethodINFORM`, which has the value `INFORM`
- `kSCValNetIPv4ConfigMethodLinkLocal`, which has the value `LinkLocal`
- `kSCValNetIPv4ConfigMethodManual`, which has the value `Manual`
- `kSCValNetIPv4ConfigMethodPPP`, which has the value `PPP`

## See Also

### Constants

- [kSCPropNetIPv4Addresses](kscpropnetipv4addresses-swift.var.md): The IPv4 key `Addresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv4DHCPClientID](kscpropnetipv4dhcpclientid-swift.var.md): The IPv4 key `DHCPClientID`, whose value is of type `CFString`.
- [kSCPropNetIPv4Router](kscpropnetipv4router-swift.var.md): The IPv4 key `Router`, whose value is of type `CFString`.
- [kSCPropNetIPv4SubnetMasks](kscpropnetipv4subnetmasks-swift.var.md): The IPv4 key `SubnetMasks`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv4DestAddresses](kscpropnetipv4destaddresses-swift.var.md): The IPv4 key `DestAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv4BroadcastAddresses](kscpropnetipv4broadcastaddresses-swift.var.md): The IPv4 key `BroadcastAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.

# kSCPropNetIPv4ConfigMethod (Objective-C)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.1+

The IPv4 key `ConfigMethod`, whose value is of type `CFString`.

## Declaration

```objectivec
extern CFStringRef const kSCPropNetIPv4ConfigMethod;
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants:

- `kSCValNetIPv4ConfigMethodBOOTP`, which has the value `BOOTP`
- `kSCValNetIPv4ConfigMethodDHCP`, which has the value `DHCP`
- `kSCValNetIPv4ConfigMethodINFORM`, which has the value `INFORM`
- `kSCValNetIPv4ConfigMethodLinkLocal`, which has the value `LinkLocal`
- `kSCValNetIPv4ConfigMethodManual`, which has the value `Manual`
- `kSCValNetIPv4ConfigMethodPPP`, which has the value `PPP`

## See Also

### Constants

- [kSCPropNetIPv4Addresses](kscpropnetipv4addresses-swift.var.md): The IPv4 key `Addresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv4DHCPClientID](kscpropnetipv4dhcpclientid-swift.var.md): The IPv4 key `DHCPClientID`, whose value is of type `CFString`.
- [kSCPropNetIPv4Router](kscpropnetipv4router-swift.var.md): The IPv4 key `Router`, whose value is of type `CFString`.
- [kSCPropNetIPv4SubnetMasks](kscpropnetipv4subnetmasks-swift.var.md): The IPv4 key `SubnetMasks`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv4DestAddresses](kscpropnetipv4destaddresses-swift.var.md): The IPv4 key `DestAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetIPv4BroadcastAddresses](kscpropnetipv4broadcastaddresses-swift.var.md): The IPv4 key `BroadcastAddresses`, whose value is of type `CFArray`, containing elements of type `CFString`.
