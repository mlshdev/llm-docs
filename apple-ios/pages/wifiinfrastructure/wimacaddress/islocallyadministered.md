> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wimacaddress/islocallyadministered](https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress/islocallyadministered)

# isLocallyAdministered

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that indicates whether this a locally administered MAC Address.

## Declaration

```swift
var isLocallyAdministered: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `true` if the MAC address is locally administered, `false` if it has a global OUI (Organizationally Unique Identifier).

## See Also

### Checking MAC Address properties

- [isZero](iszero.md): A Boolean value that indicates whether this MAC address is the all-zero MAC Address.
- [isBroadcast](isbroadcast.md): A Boolean value that indicates whether this is the broadcast MAC Address.
- [isMulticast](ismulticast.md): A Boolean value that indicates whether this a multicast MAC Address.
