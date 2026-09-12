> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/pricingmodel](https://developer.apple.com/documentation/apple_ads/pricingmodel)

# PricingModel

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+

The type of pricing model for a bid.

## Declaration

```
string PricingModel
```

## Possible Values

- `CPC`: The average cost for each ad tap in a campaign.
- `CPM`: The cost per 1000 impressions in a campaign.

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="discussion"></a>

## Discussion

> **Important**

>  \> Apple Ads Campaign Management API 4.4 deprecates CPM. You can’t update CPM campaigns to CPC campaigns. You need to use CPC when creating a new campaign. See section 4.4 in  [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md) for additional details.

<a id="Discussion"></a>

## Discussion

See also [AdChannelType](adchanneltype.md), [BillingEventType](billingeventtype.md), and [Campaign](campaign.md) object. See [Create a Campaign](create-a-campaign.md) and [Create an Ad Group](create-an-ad-group.md) for payload examples.

## See Also

### Data Types

- [AdGroupDisplayStatus](adgroupdisplaystatus.md): The status of the ad group.
- [AdGroupServingStateReasons](adgroupservingstatereasons.md): A list of reasons that displays when an ad group isn’t running.
- [AdGroupServingStatus](adgroupservingstatus.md): The status of whether the ad group is serving.
- [AdGroupStatus](adgroupstatus.md): The status of whether the ad group is enabled or not.
- [DeviceClass](deviceclass.md): The defined targeted audience to include by device type.
- [Gender](gender.md): The defined targeted audience in a campaign.
