> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress/randomlocallyadministered()](https://developer.apple.com/documentation/virtualization/vzmacaddress/randomlocallyadministered())

# randomLocallyAdministered() (Swift)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Returns a valid, random, locally administered, unicast MAC address.

## Declaration

```swift
class func randomLocallyAdministered() -> Self
```

<a id="return-value"></a>

## Return Value

A MAC address suitable for use in your network devices.

<a id="Discussion"></a>

## Discussion

This method doesn’t guarantee the generation of a unique MAC address.

## See Also

### Creating a MAC address

- [init(string:)](init%28string_%29.md): Creates a MAC address object from a specially formatted string.
- [init(ethernetAddress:)](init%28ethernetaddress_%29.md): Creates a MAC address from the specified 48-bit Ethernet address.

# randomLocallyAdministeredAddress (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Returns a valid, random, locally administered, unicast MAC address.

## Declaration

```objectivec
+ (instancetype) randomLocallyAdministeredAddress;
```

<a id="return-value"></a>

## Return Value

A MAC address suitable for use in your network devices.

<a id="Discussion"></a>

## Discussion

This method doesn’t guarantee the generation of a unique MAC address.

## See Also

### Creating a MAC address

- [initWithString:](init%28string_%29.md): Creates a MAC address object from a specially formatted string.
- [initWithEthernetAddress:](init%28ethernetaddress_%29.md): Creates a MAC address from the specified 48-bit Ethernet address.
