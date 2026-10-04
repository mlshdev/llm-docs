> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/money

# Money

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The response to requests for budget amounts in campaigns.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object Money
```

## Properties

- `amount` — `string`: The monetary value in the specified currency. The API uses `amount` whenever a currency value is necessary. The string can contain up to two decimal digits.
- `currency` — `string`: The organization’s default currency that is set up in [Apple Ads](https://ads.apple.com/).
  **Allowed values:** `AUD`, `CAD`, `EUR`, `GBP`, `JPY`, `MXN`, `NZD`, `USD`, `RUB`

## Relationships

### Inherited By

- [ReportingAdGroup.CpaGoal](reportingadgroup/cpagoal-data.dictionary.md)
- [ReportingCampaign.TargetCpa](reportingcampaign/targetcpa-data.dictionary.md)

## See Also

### Budget Order Request and Response Objects

- [BudgetOrder](budgetorder.md): Deprecated. The response to requests for budget order details.
- [BudgetOrderInfo](budgetorderinfo.md): Deprecated. The parent object response to a request for budget order details.
- [BudgetOrderCreate](budgetordercreate.md): Deprecated. The parent object response to a request to create a budget order.
- [BudgetOrderUpdate](budgetorderupdate.md): Deprecated. The parent object response to a request to update a budget order.
- [BudgetOrderInfoResponse](budgetorderinforesponse.md): Deprecated. A container for the budget order response body.
- [BudgetOrderInfoListResponse](budgetorderinfolistresponse.md): Deprecated. The response details to budget order requests.
- [LOCInvoiceDetails](locinvoicedetails.md): Deprecated. The response to a request to fetch details for `LOC` invoicing details.
