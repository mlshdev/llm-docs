> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/budgetorderinfolistresponse](https://developer.apple.com/documentation/apple_ads/budgetorderinfolistresponse)

# BudgetOrderInfoListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The response details to budget order requests.

## Declaration

```
object BudgetOrderInfoListResponse
```

## Properties

- `data` — `[BudgetOrderInfo]`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Budget Order Request and Response Objects

- [BudgetOrder](budgetorder.md): The response to requests for budget order details.
- [BudgetOrderInfo](budgetorderinfo.md): The parent object response to a request for budget order details.
- [BudgetOrderCreate](budgetordercreate.md): The parent object response to a request to create a budget order.
- [BudgetOrderUpdate](budgetorderupdate.md): The parent object response to a request to update a budget order.
- [BudgetOrderInfoResponse](budgetorderinforesponse.md): A container for the budget order response body.
- [LOCInvoiceDetails](locinvoicedetails.md): The response to a request to fetch details for `LOC` invoicing details.
- [Money](money.md): The response to requests for budget amounts in campaigns.
