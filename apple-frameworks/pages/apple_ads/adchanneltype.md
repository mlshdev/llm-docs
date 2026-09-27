> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/adchanneltype

# AdChannelType

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The channel type of an ad in a campaign.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

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

- [BillingEventType](billingeventtype.md): Deprecated. The type of billing event for a campaign.
- [CampaignCountryOrRegionsServingStateReasons](campaigncountryorregionsservingstatereasons.md): Deprecated. Reasons that displays when a campaign can’t run.
- [CampaignDisplayStatus](campaigndisplaystatus.md): Deprecated. The status of the campaign.
- [CampaignServingStateReasons](campaignservingstatereasons.md): Deprecated. Reasons the system provides when a campaign can’t run.
- [CampaignServingStatus](campaignservingstatus.md): Deprecated. The status of the campaign.
- [CampaignStatus](campaignstatus.md): Deprecated. The status of the campaign.
- [PaymentModel](paymentmodel.md): Deprecated. The payment model that you set.
- [SupplySource](supplysource.md): Deprecated. The ad placements for a campaign.
