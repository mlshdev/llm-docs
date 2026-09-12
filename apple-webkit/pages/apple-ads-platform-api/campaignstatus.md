> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaignstatus](https://developer.apple.com/documentation/apple-ads-platform-api/campaignstatus)

# CampaignStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Advertiser-configurable run state for a campaign.

## Declaration

```
string CampaignStatus
```

## Possible Values

- `ENABLED`: The campaign is set to run. Delivery depends on budget availability, eligibility, and system status.
- `PAUSED`: The advertiser paused the campaign. No ads serve until the status changes to `ENABLED`.

<a id="Discussion"></a>

## Discussion

The `CampaignStatus` is the only campaign field that directly controls whether the campaign is eligible to serve ads. Set it to `PAUSED` to stop delivery without deleting the campaign. The system status (`CampaignSystemStatus`) reflects actual delivery. A campaign can be `ENABLED` but `NOT_RUNNING` due to system conditions.

## See Also

- [CampaignSystemStatus](campaignsystemstatus.md): System-evaluated delivery state indicating whether a campaign is currently running.
- [CampaignDisplayStatus](campaigndisplaystatus.md): Rolled-up delivery state for a campaign, combining advertiser settings and system conditions into a single user-facing label.
- [CampaignSystemStatusReason](campaignsystemstatusreason.md): A reason code explaining why a campaign is not currently running.
- [CampaignSystemLimitedStatusReason](campaignsystemlimitedstatusreason.md): A reason code indicating that a campaign is running but delivering at reduced capacity.
- [BillingEvent](billingevent.md): The user interaction that triggers a charge for a campaign.
- [PromotedObjectType](promotedobjecttype.md): The category of entity that a campaign promotes, determining which values apply.
- [Currency](currency.md): The currency code used for monetary values in the Apple Ads Platform API.
