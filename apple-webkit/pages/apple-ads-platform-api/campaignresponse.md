> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaignresponse](https://developer.apple.com/documentation/apple-ads-platform-api/campaignresponse)

# CampaignResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for a Campaign operation.

## Declaration

```
object CampaignResponse
```

## Properties

- `result` — `Campaign`: The affected Campaign in its post-operation state. Absent on failure. See [Campaign](campaign.md). Read-only.
- `error` — `Error`: Error details when the request fails. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

Create, get, and update campaign operations return `CampaignResponse` as the single-item response envelope. On success, `result` contains the `Campaign` object reflecting its current or post-operation state. On failure, `result` is absent and `error` contains structured details about what went wrong.

Delete operations (`DELETE /v1/campaigns/{id}` ([Delete a Campaign](delete-campaigns-_id_.md))) don’t return a `CampaignResponse`. They return a generic `Response` object with a `null` result on success.

To handle failures gracefully, check the `error` field before accessing `result`.

<a id="Example"></a>

### Example

The following example shows the response for a [Get a Campaign](get-campaigns-_id_.md) request.

```json
{
  "result": {
    "id": 123456789,
    "adAccountId": 555666777,
    "name": "AwayFinder Fall Launch",
    "billingEvent": "TAPS",
    "paymentModel": "LOC",
    "startTime": "2025-01-10T08:00:00.000",
    "endTime": "2025-12-31T00:00:00.000",
    "promotedObjectType": "APPSTORE_APP",
    "promotedObjectId": "987654321",
    "status": "ENABLED",
    "systemStatus": "RUNNING",
    "systemStatusReasons": [],
    "systemStatusLimitingReasons": [],
    "displayStatus": "RUNNING",
    "dailyBudget": {
      "value": {
        "amount": "100.00",
        "currency": "USD"
      }
    },
    "sharedBudgets": [
      {
        "budgetId": 246813579
      }
    ],
    "targeting": {
      "supplySource": {
        "include": [
          "APPSTORE"
        ]
      },
      "supplyPlacement": {
        "include": [
          "APPSTORE_SEARCH_RESULTS"
        ]
      },
      "countryOrRegion": {
        "include": [
          "US",
          "CA"
        ]
      }
    },
    "bidStrategy": {
      "bidStrategyType": "MANUAL_CPT",
      "bidStrategyGoal": "TAP",
      "bid": {
        "amount": "2.50",
        "currency": "USD"
      }
    },
    "invoiceDetail": {
      "name": "AwayFinder Q3 Invoice",
      "orderNumber": "PO-2025-0456",
      "clientName": "AwayFinder Inc.",
      "primaryBuyerName": "Jordan Lee",
      "primaryBuyerEmail": "jordan.lee@awayfinder.com",
      "billingEmail": "billing@awayfinder.com"
    },
    "regulationResponses": [
      {
        "regulationType": "CAMPAIGN_SAPIN_LAW",
        "responseValue": "NOT_ANSWERED"
      }
    ],
    "creationTime": "2025-01-10T08:00:00.000",
    "modificationTime": "2025-01-10T08:00:00.000",
    "deleted": false
  }
}
```

## See Also

- [Campaign](campaign.md): The top-level container that defines a campaign’s promoted object, billing, scheduling, and targeting.
- [CampaignCreate](campaigncreate.md): The request body for creating a new campaign.
- [CampaignUpdate](campaignupdate.md): The request body for updating an existing Campaign object.
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
- [ResponsePagination](responsepagination.md): Pagination metadata returned in Campaign list responses, supporting offset-based navigation.
