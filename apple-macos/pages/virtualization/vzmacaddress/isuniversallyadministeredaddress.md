> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress/isuniversallyadministeredaddress](https://developer.apple.com/documentation/virtualization/vzmacaddress/isuniversallyadministeredaddress)

# isUniversallyAdministeredAddress (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the address is a universally adminstered address (UAA).

## Declaration

```swift
var isUniversallyAdministeredAddress: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the address is universally administered, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t. The manufacturer of a device assigns an address of this type, and the address includes the organization’s unique identification code.

## See Also

### Getting address attributes

- [isBroadcastAddress](isbroadcastaddress.md): A Boolean value that indicates whether the address is a broadcast address.
- [isMulticastAddress](ismulticastaddress.md): A Boolean value that indicates whether the address is a multicast address.
- [isUnicastAddress](isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isLocallyAdministeredAddress](islocallyadministeredaddress.md): A Boolean value that indicates whether the address is a locally administered address (LAA).

# isUniversallyAdministeredAddress (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the address is a universally adminstered address (UAA).

## Declaration

```objectivec
@property (readonly, getter=isUniversallyAdministeredAddress) BOOL isUniversallyAdministeredAddress;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the address is universally administered, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t. The manufacturer of a device assigns an address of this type, and the address includes the organization’s unique identification code.

## See Also

### Getting address attributes

- [isBroadcastAddress](isbroadcastaddress.md): A Boolean value that indicates whether the address is a broadcast address.
- [isMulticastAddress](ismulticastaddress.md): A Boolean value that indicates whether the address is a multicast address.
- [isUnicastAddress](isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isLocallyAdministeredAddress](islocallyadministeredaddress.md): A Boolean value that indicates whether the address is a locally administered address (LAA).
