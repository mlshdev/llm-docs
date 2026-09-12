> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaignsystemstatus](https://developer.apple.com/documentation/apple-ads-platform-api/campaignsystemstatus)

# CampaignSystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-evaluated delivery state indicating whether a campaign is currently running.

## Declaration

```
string CampaignSystemStatus
```

## Possible Values

- `RUNNING`: The campaign is actively delivering ads.
- `NOT_RUNNING`: The campaign is not currently delivering. Check `systemStatusReasons` for the cause.

<a id="Discussion"></a>

## Discussion

The `CampaignSystemStatus` is a read-only field set by the platform. It reflects whether the campaign is actively delivering ads based on all system-evaluated conditions. When `NOT_RUNNING`, inspect `systemStatusReasons` on the [Campaign](campaign.md) object for the specific blocking condition.

## See Also

- [CampaignStatus](campaignstatus.md): Advertiser-configurable run state for a campaign.
- [CampaignDisplayStatus](campaigndisplaystatus.md): Rolled-up delivery state for a campaign, combining advertiser settings and system conditions into a single user-facing label.
- [CampaignSystemStatusReason](campaignsystemstatusreason.md): A reason code explaining why a campaign is not currently running.
- [CampaignSystemLimitedStatusReason](campaignsystemlimitedstatusreason.md): A reason code indicating that a campaign is running but delivering at reduced capacity.
- [BillingEvent](billingevent.md): The user interaction that triggers a charge for a campaign.
- [PromotedObjectType](promotedobjecttype.md): The category of entity that a campaign promotes, determining which values apply.
- [Currency](currency.md): The currency code used for monetary values in the Apple Ads Platform API.
