> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adgroupstatus

# AdGroupStatus

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The status of whether the ad group is enabled or not.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
string AdGroupStatus
```

## Possible Values

- `ENABLED`: The [AdGroup](adgroup.md) is serving.
- `PAUSED`: The [AdGroup](adgroup.md) is paused.

## See Also

### Data Types

- [AdGroupDisplayStatus](adgroupdisplaystatus.md): Deprecated. The status of the ad group.
- [AdGroupServingStateReasons](adgroupservingstatereasons.md): Deprecated. A list of reasons that displays when an ad group isn’t running.
- [AdGroupServingStatus](adgroupservingstatus.md): Deprecated. The status of whether the ad group is serving.
- [DeviceClass](deviceclass.md): Deprecated. The defined targeted audience to include by device type.
- [Gender](gender.md): Deprecated. The defined targeted audience in a campaign.
- [PricingModel](pricingmodel.md): Deprecated. The type of pricing model for a bid.
