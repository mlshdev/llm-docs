> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress/string](https://developer.apple.com/documentation/virtualization/vzmacaddress/string)

# string (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The MAC address as a formatted string.

## Declaration

```swift
var string: String { get }
```

<a id="Discussion"></a>

## Discussion

The string contains the 6 hexadecimal bytes of the MAC address, separated by colon characters. Alphabetical characters are lowercase in the string. An example string is `01:23:45:ab:cd:ef`.

## See Also

### Getting the address

- [ethernetAddress](ethernetaddress.md): The MAC address as an Ethernet data structure.

# string (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The MAC address as a formatted string.

## Declaration

```objectivec
@property (copy, readonly) NSString * string;
```

<a id="Discussion"></a>

## Discussion

The string contains the 6 hexadecimal bytes of the MAC address, separated by colon characters. Alphabetical characters are lowercase in the string. An example string is `01:23:45:ab:cd:ef`.

## See Also

### Getting the address

- [ethernetAddress](ethernetaddress.md): The MAC address as an Ethernet data structure.
