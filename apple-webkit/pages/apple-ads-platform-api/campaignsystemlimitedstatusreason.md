> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaignsystemlimitedstatusreason](https://developer.apple.com/documentation/apple-ads-platform-api/campaignsystemlimitedstatusreason)

# CampaignSystemLimitedStatusReason

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

A reason code indicating that a campaign is running but delivering at reduced capacity.

## Declaration

```
string CampaignSystemLimitedStatusReason
```

## Possible Values

- `FEATURE_NOT_AVAILABLE_IN_COUNTRY_OR_REGION`: The ad feature is not available in one or more targeted countries or regions.
- `ACCOUNT_DOC_APPROVAL_EXPIRED`: Required account documentation has expired and must be resubmitted.
- `ACCOUNT_DOC_APPROVAL_INFECTED`: Required account documentation was flagged as infected.
- `ACCOUNT_DOC_APPROVAL_NOT_SUBMITTED`: Required account documentation has not been submitted.
- `ACCOUNT_DOC_APPROVAL_PENDING`: Account documentation approval is pending.
- `ACCOUNT_DOC_APPROVAL_REJECTED`: Account documentation was rejected.
- `APP_CONTENT_REJECTED`: App content was rejected, limiting delivery in affected markets.
- `APP_CONTENT_REVIEW_PENDING`: App content is under review, limiting delivery in affected markets.
- `APP_DOC_APPROVAL_EXPIRED`: Required app documentation has expired.
- `APP_DOC_APPROVAL_INFECTED`: Required app documentation was flagged as infected.
- `APP_DOC_APPROVAL_NOT_SUBMITTED`: Required app documentation has not been submitted.
- `APP_DOC_APPROVAL_PENDING`: Required app documentation is awaiting approval.
- `APP_DOC_APPROVAL_REJECTED`: Required app documentation was rejected.
- `APP_NOT_ELIGIBLE`: The promoted app is not eligible in some of the targeted markets.
- `APP_NOT_ELIGIBLE_SEARCHADS`: The app is not eligible for App Store ads in some markets.
- `APP_NOT_ELIGIBLE_SUPPLY_SOURCE`: The app is not eligible for the configured supply source in some markets.
- `APP_NOT_ELIGIBLE_SUPPLY_PLACEMENT`: The app is not eligible for the configured supply placement in some markets.
- `APP_LANGUAGE_INCOMPATIBLE`: The app’s supported languages are incompatible with some targeted markets.
- `APP_NOT_PUBLISHED_YET`: The app has not yet been published in all targeted storefronts.
- `SAPIN_LAW_AGENT_UNKNOWN`: Sapin Law compliance agent status is unknown.
- `SAPIN_LAW_FRENCH_BIZ`: Sapin Law restrictions apply to this French business account.
- `SAPIN_LAW_FRENCH_BIZ_UNKNOWN`: French business status under Sapin Law cannot be determined, limiting delivery.
- `BRAND_POLICY_ISSUES`: A brand policy condition is limiting delivery.
- `AD_GROUPS_LIMITED`: One or more ad groups are serving at reduced capacity.

<a id="Discussion"></a>

## Discussion

The `CampaignSystemLimitedStatusReason` values appear in the `systemStatusLimitingReasons` array on a [Campaign](campaign.md) alongside an active `systemStatus`. Unlike `CampaignSystemStatusReason`, these codes don’t stop delivery. They indicate conditions that constrain reach or impression volume.

## See Also

- [CampaignStatus](campaignstatus.md): Advertiser-configurable run state for a campaign.
- [CampaignSystemStatus](campaignsystemstatus.md): System-evaluated delivery state indicating whether a campaign is currently running.
- [CampaignDisplayStatus](campaigndisplaystatus.md): Rolled-up delivery state for a campaign, combining advertiser settings and system conditions into a single user-facing label.
- [CampaignSystemStatusReason](campaignsystemstatusreason.md): A reason code explaining why a campaign is not currently running.
- [BillingEvent](billingevent.md): The user interaction that triggers a charge for a campaign.
- [PromotedObjectType](promotedobjecttype.md): The category of entity that a campaign promotes, determining which values apply.
- [Currency](currency.md): The currency code used for monetary values in the Apple Ads Platform API.
