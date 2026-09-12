> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkdeviceconfiguration/macaddress](https://developer.apple.com/documentation/virtualization/vznetworkdeviceconfiguration/macaddress)

# macAddress (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The media access control (MAC) address to assign to the network device.

## Declaration

```swift
@NSCopying var macAddress: VZMACAddress { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is a random, locally administered, unicast address. Assign a custom value to this property if you want your network device to have a specific MAC address.

## See Also

### Setting configuration attributes

- [attachment](attachment.md): The object that defines how the virtual network device communicates with the host system.

# MACAddress (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The media access control (MAC) address to assign to the network device.

## Declaration

```objectivec
@property (copy, readwrite) VZMACAddress * MACAddress;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is a random, locally administered, unicast address. Assign a custom value to this property if you want your network device to have a specific MAC address.

## See Also

### Setting configuration attributes

- [attachment](attachment.md): The object that defines how the virtual network device communicates with the host system.
