> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativecreate/destination-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/creativecreate/destination-data.dictionary)

# CreativeCreate.Destination

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The post-tap landing experience specified when creating an ad creative.

## Declaration

```
object CreativeCreate.Destination
```

## Properties

- `destinationType` — `DestinationCreate.DestinationType` (required): The type of post-tap destination. See [DestinationType](../destinationtype.md). Immutable after creation.
- `parameters` — `DestinationCreate.Parameters`: Destination-specific parameters. For App Store destinations, provide `adamId` and optionally `productPageId` to link to a Custom Product Page. See [DestinationParameter](../destinationparameter.md).

<a id="Discussion"></a>

## Discussion

The `destinationType` field is immutable after creation and determines which fields `parameters` must include. For App Store destinations, provide `adamId` and optionally `productPageId`. See [DestinationType](../destinationtype.md) and [DestinationParameter](../destinationparameter.md) for details, and [DestinationCreate](../destinationcreate.md) for the full field reference.
