> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/legacyapplimitedstatusreasondetailsresponse](https://developer.apple.com/documentation/apple-ads-platform-api/legacyapplimitedstatusreasondetailsresponse)

# LegacyAppLimitedStatusReasonDetailsResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Response wrapper returning per-country or per-region limited-status reasons for legacy app campaigns.

## Declaration

```
object LegacyAppLimitedStatusReasonDetailsResponse
```

## Properties

- `result` — `LegacyAppLimitedStatusReasonDetails`: The response payload object. Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md).

<a id="Discussion"></a>

## Discussion

The `LegacyAppLimitedStatusReasonDetailsResponse` object extends the standard [Response](response.md) envelope with a `result` object containing `countryOrRegionLimitedStatusReasons`. This map associates ISO 3166-1 alpha-2 country or region codes with arrays of reason strings that explain why ad delivery is limited in each market for legacy app campaigns.

An empty array for a given country or region means no limiting reasons are currently active there. Reason strings are human-readable labels corresponding to system conditions such as budget exhaustion, policy holds, or app-eligibility issues.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "countryOrRegionLimitedStatusReasons": {
      "US": [
        "APP_NOT_ELIGIBLE_SEARCHADS",
        "AD_GROUPS_LIMITED"
      ],
      "GB": [],
      "CA": [
        "APP_DOC_APPROVAL_PENDING"
      ]
    }
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
- [DailyBudgetCreate](dailybudgetcreate.md): Request wrapper for setting a campaign’s daily budget at creation time.
- [Money](money.md): Monetary representation with currency.
- [InvoiceDetailCreate](invoicedetailcreate.md): Invoice billing contact details supplied when creating a campaign or budget order.
- [CampaignTargetingUpdate](campaigntargetingupdate.md): Targeting configuration for updating an existing campaign’s supply source, placement, and geographic markets.
- [DailyBudgetUpdate](dailybudgetupdate.md): Request wrapper for updating a campaign’s daily budget amount.
- [LegacyAppLimitedStatusReasonDetails](legacyapplimitedstatusreasondetails.md): Per-country or per-region limited-status reasons for legacy app campaigns.
- [ResponsePagination](responsepagination.md): Pagination metadata returned in Campaign list responses, supporting offset-based navigation.
