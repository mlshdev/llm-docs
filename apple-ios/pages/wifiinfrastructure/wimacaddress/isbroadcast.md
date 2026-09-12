> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wimacaddress/isbroadcast](https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress/isbroadcast)

# isBroadcast

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that indicates whether this is the broadcast MAC Address.

## Declaration

```swift
var isBroadcast: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `true` if this is the broadcast MAC Address, `false` otherwise.

## See Also

### Checking MAC Address properties

- [isZero](iszero.md): A Boolean value that indicates whether this MAC address is the all-zero MAC Address.
- [isMulticast](ismulticast.md): A Boolean value that indicates whether this a multicast MAC Address.
- [isLocallyAdministered](islocallyadministered.md): A Boolean value that indicates whether this a locally administered MAC Address.
