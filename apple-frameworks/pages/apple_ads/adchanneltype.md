> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/adchanneltype](https://developer.apple.com/documentation/apple_ads/adchanneltype)

# AdChannelType

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+

The channel type of an ad in a campaign.

## Declaration

```
string AdChannelType
```

## Possible Values

- `SEARCH`: When the [SupplySource](supplysource.md) is `APPSTORE_SEARCH_RESULTS`, the [AdChannelType](adchanneltype.md) needs to be `SEARCH`.
- `DISPLAY`: When `the` [SupplySource](supplysource.md) is `APPSTORE_SEARCH_TAB, APPSTORE_PRODUCT_PAGES_BROWSE`, or `APPSTORE_TODAY_TAB`, the [AdChannelType](adchanneltype.md) needs to be `DISPLAY`.

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="Discussion"></a>

## Discussion

See also [BillingEventType](billingeventtype.md) and [Campaign](campaign.md) object.

## See Also

### Data Types

- [BillingEventType](billingeventtype.md): The type of billing event for a campaign.
- [CampaignCountryOrRegionsServingStateReasons](campaigncountryorregionsservingstatereasons.md): Reasons that displays when a campaign can’t run.
- [CampaignDisplayStatus](campaigndisplaystatus.md): The status of the campaign.
- [CampaignServingStateReasons](campaignservingstatereasons.md): Reasons the system provides when a campaign can’t run.
- [CampaignServingStatus](campaignservingstatus.md): The status of the campaign.
- [CampaignStatus](campaignstatus.md): The status of the campaign.
- [PaymentModel](paymentmodel.md): The payment model that you set.
- [SupplySource](supplysource.md): The ad placements for a campaign.
