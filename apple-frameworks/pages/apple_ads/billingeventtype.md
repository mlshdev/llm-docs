> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/billingeventtype](https://developer.apple.com/documentation/apple_ads/billingeventtype)

# BillingEventType

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+

The type of billing event for a campaign.

## Declaration

```
string BillingEventType
```

## Possible Values

- `TAPS`: The cost to the advertiser is per tap.
- `IMPRESSIONS`:

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

<a id="discussion"></a>

## Discussion

When the `supplySources` value is `APPSTORE_SEARCH_RESULTS` or `APPSTORE_SEARCH_TAB`, the `billingEvent` must be `TAPS.`

- **IMPRESSIONS**: The cost to the advertiser is per impression served.

<a id="Discussion"></a>

## Discussion

See also [Campaign](campaign.md) object.

## See Also

### Data Types

- [AdChannelType](adchanneltype.md): The channel type of an ad in a campaign.
- [CampaignCountryOrRegionsServingStateReasons](campaigncountryorregionsservingstatereasons.md): Reasons that displays when a campaign can’t run.
- [CampaignDisplayStatus](campaigndisplaystatus.md): The status of the campaign.
- [CampaignServingStateReasons](campaignservingstatereasons.md): Reasons the system provides when a campaign can’t run.
- [CampaignServingStatus](campaignservingstatus.md): The status of the campaign.
- [CampaignStatus](campaignstatus.md): The status of the campaign.
- [PaymentModel](paymentmodel.md): The payment model that you set.
- [SupplySource](supplysource.md): The ad placements for a campaign.
