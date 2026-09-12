> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/eligibilityqueryrequest](https://developer.apple.com/documentation/apple-ads-platform-api/eligibilityqueryrequest)

# EligibilityQueryRequest

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for querying app eligibility.

## Declaration

```
object EligibilityQueryRequest
```

## Properties

- `filters` — `[QueryFilter]`: See [QueryFilter](queryfilter.md) for details.
- `sorting` — `[QuerySort]`: See [QuerySort](querysort.md) for details.
- `pagination` — `QueryPagination`: See [QueryPagination](querypagination.md) for details.

<a id="Discussion"></a>

## Discussion

The `EligibilityQueryRequest` object is the request body for the eligibility query endpoint. To filter, paginate, and sort the app eligibility records returned, use it.

The `filters` array accepts `QueryFilter` objects targeting filterable fields on the eligibility resource. Combine multiple filters to narrow results. For example, filter by `adamId` to check eligibility for a specific app.

The `filters` array supports the following fields:

| Field | Description |
| --- | --- |
| `adamId` | The Adam ID of the app |
| `supplyPlacement` | The supply placement being checked |
| `supplySource` | The supply source being checked |
| `countryOrRegion` | The country or region evaluated |
| `deviceClass` | The device class evaluated |
| `state` | Eligibility state: `ELIGIBLE` or `INELIGIBLE` |

<a id="Example"></a>

### Example

```json
{
  "filters": [
    {
      "field": "adamId",
      "operator": "EQUALS",
      "value": 123456789
    }
  ],
  "sorting": [
    {
      "field": "countryOrRegion",
      "order": "ASC"
    }
  ],
  "pagination": {
    "offset": 0,
    "pageSize": 20
  }
}
```

## See Also

- [EligibilityQueryResponse](eligibilityqueryresponse.md): The paginated response object for an app eligibility query.
- [RejectionReasonResponse](rejectionreasonresponse.md): The response object for a rejection reason operation.
- [AppDetailsResponse](appdetailsresponse.md): The response object for a get app details operation.
- [AppDetails](appdetails.md): Application details and metadata.
- [EligibilityResponse](eligibilityresponse.md): The response object describing an app’s eligibility for a specific supply placement, supply source, country or region, and device class.
