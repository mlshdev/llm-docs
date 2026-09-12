> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress/init(string:)](https://developer.apple.com/documentation/virtualization/vzmacaddress/init(string:))

# init(string:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a MAC address object from a specially formatted string.

## Declaration

```swift
convenience init?(string: String)
```

## Parameters

- `string`: A string that contains the 6 hexadecimal bytes of the MAC address separated by colon characters. An example string is `01:23:45:ab:cd:ef`. The string is case-insensitive, so you may use uppercase or lowercase for alphabetical characters.

<a id="return-value"></a>

## Return Value

A MAC address object with the specified value, or `nil` if the string is formatted incorrectly.

## See Also

### Creating a MAC address

- [randomLocallyAdministered()](randomlocallyadministered%28%29.md): Returns a valid, random, locally administered, unicast MAC address.
- [init(ethernetAddress:)](init%28ethernetaddress_%29.md): Creates a MAC address from the specified 48-bit Ethernet address.

# initWithString: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a MAC address object from a specially formatted string.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) string;
```

## Parameters

- `string`: A string that contains the 6 hexadecimal bytes of the MAC address separated by colon characters. An example string is `01:23:45:ab:cd:ef`. The string is case-insensitive, so you may use uppercase or lowercase for alphabetical characters.

<a id="return-value"></a>

## Return Value

A MAC address object with the specified value, or `nil` if the string is formatted incorrectly.

## See Also

### Creating a MAC address

- [randomLocallyAdministeredAddress](randomlocallyadministered%28%29.md): Returns a valid, random, locally administered, unicast MAC address.
- [initWithEthernetAddress:](init%28ethernetaddress_%29.md): Creates a MAC address from the specified 48-bit Ethernet address.
