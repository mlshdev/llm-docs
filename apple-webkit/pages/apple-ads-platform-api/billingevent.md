> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/billingevent](https://developer.apple.com/documentation/apple-ads-platform-api/billingevent)

# BillingEvent

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The user interaction that triggers a charge for a campaign.

## Declaration

```
string BillingEvent
```

## Possible Values

- `TAPS`: The campaign is charged each time a user taps an ad. For App Ads campaigns, compatible with `MANUAL_CPT` and `MAX_CONVERSIONS`. For Apple Maps campaigns, compatible with `MANUAL_CPT` and `MAX_ENGAGEMENTS`.
- `IMPRESSIONS`: The campaign is charged per thousand impressions (CPM). Required for the `MANUAL_CPM` bid strategy. Available only for Apple Maps campaigns (`promotedObjectType: BUSINESS_BRAND`).

<a id="Discussion"></a>

## Discussion

You set `BillingEvent` at campaign creation, and it stays fixed afterward. The value you choose constrains which bid strategies are available and applies uniformly to all ad groups in the campaign.

App Store campaigns use `TAPS`. Apple Maps campaigns support both `TAPS` (for tap-based strategies) and `IMPRESSIONS` (for `MANUAL_CPM`).

## See Also

- [CampaignStatus](campaignstatus.md): Advertiser-configurable run state for a campaign.
- [CampaignSystemStatus](campaignsystemstatus.md): System-evaluated delivery state indicating whether a campaign is currently running.
- [CampaignDisplayStatus](campaigndisplaystatus.md): Rolled-up delivery state for a campaign, combining advertiser settings and system conditions into a single user-facing label.
- [CampaignSystemStatusReason](campaignsystemstatusreason.md): A reason code explaining why a campaign is not currently running.
- [CampaignSystemLimitedStatusReason](campaignsystemlimitedstatusreason.md): A reason code indicating that a campaign is running but delivering at reduced capacity.
- [PromotedObjectType](promotedobjecttype.md): The category of entity that a campaign promotes, determining which values apply.
- [Currency](currency.md): The currency code used for monetary values in the Apple Ads Platform API.
