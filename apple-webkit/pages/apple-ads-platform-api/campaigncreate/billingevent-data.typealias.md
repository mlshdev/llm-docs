> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigncreate/billingevent-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/campaigncreate/billingevent-data.typealias)

# CampaignCreate.BillingEvent

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The user interaction that triggers a charge for a campaign.

## Declaration

```
string CampaignCreate.BillingEvent
```

## Possible Values

- `TAPS`: The campaign is charged each time a user taps an ad. For App Ads campaigns, compatible with `MANUAL_CPT` and `MAX_CONVERSIONS`. For Apple Maps campaigns, compatible with `MANUAL_CPT` and `MAX_ENGAGEMENTS`.
- `IMPRESSIONS`: The campaign is charged per thousand impressions (CPM). Required for the `MANUAL_CPM` bid strategy. Available only for Apple Maps campaigns (`promotedObjectType: BUSINESS_BRAND`).

<a id="Discussion"></a>

## Discussion

Set at campaign creation and immutable.
