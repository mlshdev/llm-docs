> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neipv4settings/router

# router (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The address of the next-hop gateway router represented as a dotted decimal string.

## Declaration

```swift
var router: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system ignores this property for TUN interfaces.

## See Also

### Accessing IPv4 properties

- [addresses](addresses.md): The IPv4 addresses to assign to the TUN interface.
- [subnetMasks](subnetmasks.md): The IPv4 network masks to assign to the TUN interface.

# router (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The address of the next-hop gateway router represented as a dotted decimal string.

## Declaration

```objectivec
@property (copy, nullable) NSString * router;
```

<a id="Discussion"></a>

## Discussion

The system ignores this property for TUN interfaces.

## See Also

### Accessing IPv4 properties

- [addresses](addresses.md): The IPv4 addresses to assign to the TUN interface.
- [subnetMasks](subnetmasks.md): The IPv4 network masks to assign to the TUN interface.
