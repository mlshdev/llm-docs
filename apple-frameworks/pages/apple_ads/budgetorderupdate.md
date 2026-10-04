> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/budgetorderupdate

# BudgetOrderUpdate

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.11+ (deprecated in 5.2)

The parent object response to a request to update a budget order.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object BudgetOrderUpdate
```

## Properties

- `bo` — `BudgetOrderUpdate.Bo`: The details of the budget order.
- `orgIds` — `[int64]`: The identifier of the organization that owns the campaign. Currently, only one `orgId` is supported in budget orders.

## Topics

### Objects

- [BudgetOrderUpdate.Bo](budgetorderupdate/bo-data.dictionary.md): The response to a request to update a budget order.

## See Also

### Budget Order Request and Response Objects

- [BudgetOrder](budgetorder.md): Deprecated. The response to requests for budget order details.
- [BudgetOrderInfo](budgetorderinfo.md): Deprecated. The parent object response to a request for budget order details.
- [BudgetOrderCreate](budgetordercreate.md): Deprecated. The parent object response to a request to create a budget order.
- [BudgetOrderInfoResponse](budgetorderinforesponse.md): Deprecated. A container for the budget order response body.
- [BudgetOrderInfoListResponse](budgetorderinfolistresponse.md): Deprecated. The response details to budget order requests.
- [LOCInvoiceDetails](locinvoicedetails.md): Deprecated. The response to a request to fetch details for `LOC` invoicing details.
- [Money](money.md): Deprecated. The response to requests for budget amounts in campaigns.
