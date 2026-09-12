> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress/islocallyadministeredaddress](https://developer.apple.com/documentation/virtualization/vzmacaddress/islocallyadministeredaddress)

# isLocallyAdministeredAddress (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the address is a locally administered address (LAA).

## Declaration

```swift
var isLocallyAdministeredAddress: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the address is locally administered, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t. A locally administered address different than the address burned in to the physical network interface.

## See Also

### Getting address attributes

- [isBroadcastAddress](isbroadcastaddress.md): A Boolean value that indicates whether the address is a broadcast address.
- [isMulticastAddress](ismulticastaddress.md): A Boolean value that indicates whether the address is a multicast address.
- [isUnicastAddress](isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isUniversallyAdministeredAddress](isuniversallyadministeredaddress.md): A Boolean value that indicates whether the address is a universally adminstered address (UAA).

# isLocallyAdministeredAddress (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the address is a locally administered address (LAA).

## Declaration

```objectivec
@property (readonly, getter=isLocallyAdministeredAddress) BOOL isLocallyAdministeredAddress;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the address is locally administered, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t. A locally administered address different than the address burned in to the physical network interface.

## See Also

### Getting address attributes

- [isBroadcastAddress](isbroadcastaddress.md): A Boolean value that indicates whether the address is a broadcast address.
- [isMulticastAddress](ismulticastaddress.md): A Boolean value that indicates whether the address is a multicast address.
- [isUnicastAddress](isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isUniversallyAdministeredAddress](isuniversallyadministeredaddress.md): A Boolean value that indicates whether the address is a universally adminstered address (UAA).
