> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/regulationresponseupdate](https://developer.apple.com/documentation/apple-ads-platform-api/regulationresponseupdate)

# RegulationResponseUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request body for updating a regulatory disclosure response.

## Declaration

```
object RegulationResponseUpdate
```

## Properties

- `regulationType` — `RegulationResponseUpdate.RegulationType`: The category of regulatory disclosure being answered. See [RegulationResponseUpdate.RegulationType](regulationresponseupdate/regulationtype-data.typealias.md). Not nullable.
- `responseValue` — `RegulationResponseUpdate.ResponseValue`: The advertiser’s answer to the regulatory disclosure question. See [RegulationResponseUpdate.ResponseValue](regulationresponseupdate/responsevalue-data.typealias.md). Not nullable.

## Topics

### Type Aliases

- [RegulationResponseUpdate.RegulationType](regulationresponseupdate/regulationtype-data.typealias.md): The category of regulatory disclosure being answered.
- [RegulationResponseUpdate.ResponseValue](regulationresponseupdate/responsevalue-data.typealias.md): The advertiser’s answer to the regulatory disclosure question.

## See Also

- [Campaign](campaign.md): The top-level container that defines a campaign’s promoted object, billing, scheduling, and targeting.
- [CampaignCreate](campaigncreate.md): The request body for creating a new campaign.
- [CampaignUpdate](campaignupdate.md): The request body for updating an existing Campaign object.
- [CampaignResponse](campaignresponse.md): The response object for a Campaign operation.
- [CampaignQueryResponse](campaignqueryresponse.md): The response object for a Campaign query, containing matched results and pagination metadata.
- [CampaignTargeting](campaigntargeting.md): Defines where a campaign is eligible to serve ads, including supply source, placement, and geographic markets.
- [CampaignTargetingCreate](campaigntargetingcreate.md): Targeting configuration supplied when creating a campaign.
- [DailyBudget](dailybudget.md): Daily budget cap for a campaign.
- [DailyBudgetCreate](dailybudgetcreate.md): Request wrapper for setting a campaign’s daily budget at creation time.
- [Money](money.md): Monetary representation with currency.
- [InvoiceDetailCreate](invoicedetailcreate.md): Invoice billing contact details supplied when creating a campaign or budget order.
- [LegacyAppLimitedStatusReasonDetailsResponse](legacyapplimitedstatusreasondetailsresponse.md): Response wrapper returning per-country or per-region limited-status reasons for legacy app campaigns.
- [CampaignTargetingUpdate](campaigntargetingupdate.md): Targeting configuration for updating an existing campaign’s supply source, placement, and geographic markets.
- [DailyBudgetUpdate](dailybudgetupdate.md): Request wrapper for updating a campaign’s daily budget amount.
- [LegacyAppLimitedStatusReasonDetails](legacyapplimitedstatusreasondetails.md): Per-country or per-region limited-status reasons for legacy app campaigns.
