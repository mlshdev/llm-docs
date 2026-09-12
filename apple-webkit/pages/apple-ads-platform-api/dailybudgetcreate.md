> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/dailybudgetcreate](https://developer.apple.com/documentation/apple-ads-platform-api/dailybudgetcreate)

# DailyBudgetCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request wrapper for setting a campaign’s daily budget at creation time.

## Declaration

```
object DailyBudgetCreate
```

## Properties

- `value` — `Money`: The daily budget amount as a Money object with `amount` (decimal string) and ISO 4217 `currency` code. See [Money](money.md).

<a id="Discussion"></a>

## Discussion

The `DailyBudgetCreate` object is the create-time counterpart to [DailyBudget](dailybudget.md). It wraps a single `value` field containing the desired daily spend cap as a `Money` object. The `dailyBudget` field is required for all campaigns. The `sharedBudgets` field may also be provided to assign the campaign to one or more budget orders.

<a id="Example"></a>

### Example

```json
{
  "value": {
    "amount": "100.00",
    "currency": "USD"
  }
}
```

## See Also

- [Campaign](campaign.md): The top-level container that defines a campaign’s promoted object, billing, scheduling, and targeting.
- [CampaignCreate](campaigncreate.md): The request body for creating a new campaign.
- [CampaignUpdate](campaignupdate.md): The request body for updating an existing Campaign object.
- [CampaignResponse](campaignresponse.md): The response object for a Campaign operation.
- [CampaignQueryResponse](campaignqueryresponse.md): The response object for a Campaign query, containing matched results and pagination metadata.
- [CampaignTargeting](campaigntargeting.md): Defines where a campaign is eligible to serve ads, including supply source, placement, and geographic markets.
- [CampaignTargetingCreate](campaigntargetingcreate.md): Targeting configuration supplied when creating a campaign.
- [DailyBudget](dailybudget.md): Daily budget cap for a campaign.
- [Money](money.md): Monetary representation with currency.
- [InvoiceDetailCreate](invoicedetailcreate.md): Invoice billing contact details supplied when creating a campaign or budget order.
- [LegacyAppLimitedStatusReasonDetailsResponse](legacyapplimitedstatusreasondetailsresponse.md): Response wrapper returning per-country or per-region limited-status reasons for legacy app campaigns.
- [CampaignTargetingUpdate](campaigntargetingupdate.md): Targeting configuration for updating an existing campaign’s supply source, placement, and geographic markets.
- [DailyBudgetUpdate](dailybudgetupdate.md): Request wrapper for updating a campaign’s daily budget amount.
- [LegacyAppLimitedStatusReasonDetails](legacyapplimitedstatusreasondetails.md): Per-country or per-region limited-status reasons for legacy app campaigns.
- [ResponsePagination](responsepagination.md): Pagination metadata returned in Campaign list responses, supporting offset-based navigation.
