> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/appimpression/sourceid](https://developer.apple.com/documentation/adattributionkit/appimpression/sourceid)

# sourceID

**Framework:** AdAttributionKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A four-digit integer that ad networks define to represent the ad campaign.

## Declaration

```swift
var sourceID: Int { get }
```

<a id="discussion"></a>

## Discussion

The `sourceID` is also known as the *hierarchical source identifier*. Ad networks and developers define its meaning. This integer can have up to four digits. You might receive two, three, or all four digits of the `sourceID` in the first winning postback, based on the data tier of the postback. You can use the different digits of the source identifier to represent different aspects of your ad, such as campaign information, placement, locale, and so on. For more information about the values you might get in the postback, see [Identifying the parameters in a postback](../identifying-the-parameters-in-a-postback.md).

> **Note**

> A postback report represents this integer as a string in the `source-identifier` parameter in the payload of the JSON Web Signature (JWS). For more details about the parameters of a postback, see [Identifying the parameters in a postback](../identifying-the-parameters-in-a-postback.md).

## See Also

### Accessing ad impression properties

- [adNetworkID](adnetworkid.md): The advertising network ID.
- [advertisedItemID](advertiseditemid.md): The advertised item’s ID.
- [compactJWSRepresentation](compactjwsrepresentation.md): A string that presents the compact representation of the impression’s JSON Web Signature (JWS).
- [eligibleForReengagement](eligibleforreengagement.md): A Boolean value that indicates whether this impression is eligible for reengagement.
- [id](id.md): The impression’s unique ID.
- [keyID](keyid.md): The JSON Web Signature (JWS) key ID.
- [publisherItemID](publisheritemid.md): The publisher app’s item ID.
- [timestamp](timestamp.md): The impression’s timestamp, in milliseconds since 1970.
