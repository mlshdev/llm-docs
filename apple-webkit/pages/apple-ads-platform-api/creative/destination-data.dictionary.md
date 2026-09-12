> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creative/destination-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/creative/destination-data.dictionary)

# Creative.Destination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Post-tap destination entity defining where users go after tapping the ad.

## Declaration

```
object Creative.Destination
```

## Properties

- `destinationType` — `Destination.DestinationType`: The type of post-tap destination. See [DestinationType](../destinationtype.md). Immutable after creation.
- `parameters` — `Destination.Parameters`: Destination-specific parameters. Sub-fields: adamId (App Store app identifier, required), productPageId (UUID of a Custom Product Page created in App Store Connect, nullable string UUID, omit to use the default product page). Immutable after creation.
- `url` — `string`: The resolved destination URL. Read-only, computed by the system from `destinationType` and `parameters`.

<a id="Discussion"></a>

## Discussion

Destination is the post-tap experience for the ad creative. The `destinationType` field is immutable after creation, and the system computes the read-only `url` field from `destinationType` and `parameters`.
