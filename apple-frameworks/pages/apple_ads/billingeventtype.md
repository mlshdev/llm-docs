> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/billingeventtype

# BillingEventType

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The type of billing event for a campaign.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

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

- [AdChannelType](adchanneltype.md): Deprecated. The channel type of an ad in a campaign.
- [CampaignCountryOrRegionsServingStateReasons](campaigncountryorregionsservingstatereasons.md): Deprecated. Reasons that displays when a campaign can’t run.
- [CampaignDisplayStatus](campaigndisplaystatus.md): Deprecated. The status of the campaign.
- [CampaignServingStateReasons](campaignservingstatereasons.md): Deprecated. Reasons the system provides when a campaign can’t run.
- [CampaignServingStatus](campaignservingstatus.md): Deprecated. The status of the campaign.
- [CampaignStatus](campaignstatus.md): Deprecated. The status of the campaign.
- [PaymentModel](paymentmodel.md): Deprecated. The payment model that you set.
- [SupplySource](supplysource.md): Deprecated. The ad placements for a campaign.
