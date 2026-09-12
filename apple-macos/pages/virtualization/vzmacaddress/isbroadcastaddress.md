> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress/isbroadcastaddress](https://developer.apple.com/documentation/virtualization/vzmacaddress/isbroadcastaddress)

# isBroadcastAddress (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the address is a broadcast address.

## Declaration

```swift
var isBroadcastAddress: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the address is a broadcast address, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t.

## See Also

### Getting address attributes

- [isMulticastAddress](ismulticastaddress.md): A Boolean value that indicates whether the address is a multicast address.
- [isUnicastAddress](isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isLocallyAdministeredAddress](islocallyadministeredaddress.md): A Boolean value that indicates whether the address is a locally administered address (LAA).
- [isUniversallyAdministeredAddress](isuniversallyadministeredaddress.md): A Boolean value that indicates whether the address is a universally adminstered address (UAA).

# isBroadcastAddress (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the address is a broadcast address.

## Declaration

```objectivec
@property (readonly, getter=isBroadcastAddress) BOOL isBroadcastAddress;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the address is a broadcast address, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t.

## See Also

### Getting address attributes

- [isMulticastAddress](ismulticastaddress.md): A Boolean value that indicates whether the address is a multicast address.
- [isUnicastAddress](isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isLocallyAdministeredAddress](islocallyadministeredaddress.md): A Boolean value that indicates whether the address is a locally administered address (LAA).
- [isUniversallyAdministeredAddress](isuniversallyadministeredaddress.md): A Boolean value that indicates whether the address is a universally adminstered address (UAA).
