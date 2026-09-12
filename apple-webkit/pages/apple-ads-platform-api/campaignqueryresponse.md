> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaignqueryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/campaignqueryresponse)

# CampaignQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for a Campaign query, containing matched results and pagination metadata.

## Declaration

```
object CampaignQueryResponse
```

## Properties

- `result` — `[Campaign]`: The list of campaigns matching the query filters. See [Campaign](campaign.md). Read-only.
- `pagination` — `QueryPaginationResult`: Pagination metadata for the response, including `offset`, `pageSize`, and `totalCount`. See [QueryPaginationResult](querypaginationresult.md). Read-only.
- `error` — `Error`: Error information if the request encountered an error. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The campaign query endpoint returns `CampaignQueryResponse`, which contains the filtered, sorted, and paginated set of `Campaign` objects matching the request. Pagination metadata in the envelope supports offset-based navigation through large result sets.

<a id="Example"></a>

### Example

```json
{
  "result": [
    {
      "id": 111222333,
      "name": "AwayFinder Apple Maps Campaign",
      "adAccountId": 123456789,
      "promotedObjectType": "BUSINESS_BRAND",
      "promotedObjectId": "987654321",
      "status": "ENABLED",
      "billingEvent": "TAPS",
      "startTime": "2025-09-01T00:00:00.000",
      "endTime": "2025-12-31T23:59:59.000",
      "dailyBudget": {
        "value": {
          "amount": "900.00",
          "currency": "USD"
        }
      },
      "targeting": {
        "supplySource": {
          "include": [
            "MAPS"
          ]
        },
        "supplyPlacement": {
          "include": [
            "MAPS_SEARCH_RESULTS"
          ]
        }
      },
      "bidStrategy": {
        "bidStrategyType": "MAX_ENGAGEMENTS",
        "bidStrategyGoal": "TAP"
      },
      "creationTime": "2025-01-15T10:30:00.000",
      "modificationTime": "2025-01-20T14:45:00.000",
      "paymentModel": "PAYG",
      "systemStatus": "RUNNING",
      "systemStatusReasons": [],
      "systemStatusLimitingReasons": [],
      "displayStatus": "RUNNING",
      "deleted": false
    }
  ],
  "pagination": {
    "offset": 0,
    "pageSize": 20,
    "totalCount": 1
  }
}
```

## See Also

- [Campaign](campaign.md): The top-level container that defines a campaign’s promoted object, billing, scheduling, and targeting.
- [CampaignCreate](campaigncreate.md): The request body for creating a new campaign.
- [CampaignUpdate](campaignupdate.md): The request body for updating an existing Campaign object.
- [CampaignResponse](campaignresponse.md): The response object for a Campaign operation.
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
- [ResponsePagination](responsepagination.md): Pagination metadata returned in Campaign list responses, supporting offset-based navigation.
