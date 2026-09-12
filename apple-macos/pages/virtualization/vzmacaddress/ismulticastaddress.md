> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress/ismulticastaddress](https://developer.apple.com/documentation/virtualization/vzmacaddress/ismulticastaddress)

# isMulticastAddress (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the address is a multicast address.

## Declaration

```swift
var isMulticastAddress: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the address is a multicast address, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t.

## See Also

### Getting address attributes

- [isBroadcastAddress](isbroadcastaddress.md): A Boolean value that indicates whether the address is a broadcast address.
- [isUnicastAddress](isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isLocallyAdministeredAddress](islocallyadministeredaddress.md): A Boolean value that indicates whether the address is a locally administered address (LAA).
- [isUniversallyAdministeredAddress](isuniversallyadministeredaddress.md): A Boolean value that indicates whether the address is a universally adminstered address (UAA).

# isMulticastAddress (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the address is a multicast address.

## Declaration

```objectivec
@property (readonly, getter=isMulticastAddress) BOOL isMulticastAddress;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the address is a multicast address, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t.

## See Also

### Getting address attributes

- [isBroadcastAddress](isbroadcastaddress.md): A Boolean value that indicates whether the address is a broadcast address.
- [isUnicastAddress](isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isLocallyAdministeredAddress](islocallyadministeredaddress.md): A Boolean value that indicates whether the address is a locally administered address (LAA).
- [isUniversallyAdministeredAddress](isuniversallyadministeredaddress.md): A Boolean value that indicates whether the address is a universally adminstered address (UAA).
