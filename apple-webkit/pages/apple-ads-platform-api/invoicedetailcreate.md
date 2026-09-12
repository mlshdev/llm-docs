> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/invoicedetailcreate](https://developer.apple.com/documentation/apple-ads-platform-api/invoicedetailcreate)

# InvoiceDetailCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Invoice billing contact details supplied when creating a campaign or budget order.

## Declaration

```
object InvoiceDetailCreate
```

## Properties

- `primaryBuyerName` — `string` (required): Name of the primary buyer.
- `primaryBuyerEmail` — `string` (required): Email address of the primary buyer. Must be a valid email address.
- `billingEmail` — `string` (required): Billing email address. Must be a valid email address.
- `clientName` — `string`: Identifies the advertiser or product.
- `orderNumber` — `string`: Purchase order number.

<a id="Discussion"></a>

## Discussion

The `InvoiceDetailCreate` object is the create-time counterpart to [InvoiceDetail](invoicedetail.md). It’s required for Line of Credit (`LOC`) accounts when creating a campaign or budget order.

<a id="Example"></a>

### Example

```json
{
  "name": "AwayFinder Q3 Campaign Invoice",
  "primaryBuyerName": "Jordan Blake",
  "primaryBuyerEmail": "jordan.blake@awayfinder.com",
  "billingEmail": "billing@awayfinder.com",
  "clientName": "AwayFinder",
  "orderNumber": "PO-555666777"
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
- [DailyBudgetCreate](dailybudgetcreate.md): Request wrapper for setting a campaign’s daily budget at creation time.
- [Money](money.md): Monetary representation with currency.
- [LegacyAppLimitedStatusReasonDetailsResponse](legacyapplimitedstatusreasondetailsresponse.md): Response wrapper returning per-country or per-region limited-status reasons for legacy app campaigns.
- [CampaignTargetingUpdate](campaigntargetingupdate.md): Targeting configuration for updating an existing campaign’s supply source, placement, and geographic markets.
- [DailyBudgetUpdate](dailybudgetupdate.md): Request wrapper for updating a campaign’s daily budget amount.
- [LegacyAppLimitedStatusReasonDetails](legacyapplimitedstatusreasondetails.md): Per-country or per-region limited-status reasons for legacy app campaigns.
- [ResponsePagination](responsepagination.md): Pagination metadata returned in Campaign list responses, supporting offset-based navigation.
