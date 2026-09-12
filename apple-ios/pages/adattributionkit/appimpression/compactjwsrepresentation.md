> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/appimpression/compactjwsrepresentation](https://developer.apple.com/documentation/adattributionkit/appimpression/compactjwsrepresentation)

# compactJWSRepresentation

**Framework:** AdAttributionKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A string that presents the compact representation of the impression’s JSON Web Signature (JWS).

## Declaration

```swift
var compactJWSRepresentation: String { get }
```

## See Also

### Accessing ad impression properties

- [adNetworkID](adnetworkid.md): The advertising network ID.
- [advertisedItemID](advertiseditemid.md): The advertised item’s ID.
- [eligibleForReengagement](eligibleforreengagement.md): A Boolean value that indicates whether this impression is eligible for reengagement.
- [id](id.md): The impression’s unique ID.
- [keyID](keyid.md): The JSON Web Signature (JWS) key ID.
- [publisherItemID](publisheritemid.md): The publisher app’s item ID.
- [sourceID](sourceid.md): A four-digit integer that ad networks define to represent the ad campaign.
- [timestamp](timestamp.md): The impression’s timestamp, in milliseconds since 1970.
