> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigndisplaystatus](https://developer.apple.com/documentation/apple-ads-platform-api/campaigndisplaystatus)

# CampaignDisplayStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Rolled-up delivery state for a campaign, combining advertiser settings and system conditions into a single user-facing label.

## Declaration

```
string CampaignDisplayStatus
```

## Possible Values

- `RUNNING`: The campaign is actively delivering ads.
- `PAUSED`: The advertiser paused the campaign.
- `ON_HOLD`: Delivery is stopped due to a system or account condition.
- `LIMITED`: The campaign is serving but at reduced capacity due to a system condition.
- `PROCESSING`: The campaign was recently created or modified and is being processed.
- `DELETED`: The campaign has been soft-deleted.

<a id="Discussion"></a>

## Discussion

The `CampaignDisplayStatus` is a read-only, derived field on [Campaign](campaign.md) that surfaces the effective delivery state. It combines `CampaignStatus` (advertiser intent) and `CampaignSystemStatus` (system evaluation) into one actionable label. Use this field when displaying campaign health in a UI. Inspect `CampaignSystemStatusReason` for the root cause when the status isn’t `RUNNING`.

## See Also

- [CampaignStatus](campaignstatus.md): Advertiser-configurable run state for a campaign.
- [CampaignSystemStatus](campaignsystemstatus.md): System-evaluated delivery state indicating whether a campaign is currently running.
- [CampaignSystemStatusReason](campaignsystemstatusreason.md): A reason code explaining why a campaign is not currently running.
- [CampaignSystemLimitedStatusReason](campaignsystemlimitedstatusreason.md): A reason code indicating that a campaign is running but delivering at reduced capacity.
- [BillingEvent](billingevent.md): The user interaction that triggers a charge for a campaign.
- [PromotedObjectType](promotedobjecttype.md): The category of entity that a campaign promotes, determining which values apply.
- [Currency](currency.md): The currency code used for monetary values in the Apple Ads Platform API.
