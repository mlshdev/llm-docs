> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/promotedobjecttype](https://developer.apple.com/documentation/apple-ads-platform-api/promotedobjecttype)

# PromotedObjectType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The category of entity that a campaign promotes, determining which values apply.

## Declaration

```
string PromotedObjectType
```

## Possible Values

- `APPSTORE_APP`: The campaign promotes an iOS application. Ads serve on App Store placements including Search results, the Search tab, the Today tab, and Product pages. The `promotedObjectId` must be the app’s `adamId` from the App Store. Retrieve it from [Search for Apps](searches-for-a-list-of-apps.md) or [Get App Details by Adam ID](get-app-details-by-adam-id.md). See [Search Apps Endpoints](search-apps-endpoints.md) for details.
- `BUSINESS_BRAND`: The campaign promotes a brand on Apple Maps. Ads serve on the Maps Search results and Search home placements. The `promotedObjectId` must be the brand identifier. Retrieve it from `GET /v1/advertiser-resources?resourceType=BUSINESS_BRAND`, which returns the `resourceId` for each delegated brand.

<a id="Discussion"></a>

## Discussion

You set `PromotedObjectType` when you create the campaign, and it stays fixed afterward. It determines the advertising placement, creative format, and available targeting options for the campaign. All campaigns, ad groups, and creatives under a campaign share the same promoted object type.

## See Also

- [CampaignStatus](campaignstatus.md): Advertiser-configurable run state for a campaign.
- [CampaignSystemStatus](campaignsystemstatus.md): System-evaluated delivery state indicating whether a campaign is currently running.
- [CampaignDisplayStatus](campaigndisplaystatus.md): Rolled-up delivery state for a campaign, combining advertiser settings and system conditions into a single user-facing label.
- [CampaignSystemStatusReason](campaignsystemstatusreason.md): A reason code explaining why a campaign is not currently running.
- [CampaignSystemLimitedStatusReason](campaignsystemlimitedstatusreason.md): A reason code indicating that a campaign is running but delivering at reduced capacity.
- [BillingEvent](billingevent.md): The user interaction that triggers a charge for a campaign.
- [Currency](currency.md): The currency code used for monetary values in the Apple Ads Platform API.
