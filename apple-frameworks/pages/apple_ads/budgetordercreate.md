> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/budgetordercreate](https://developer.apple.com/documentation/apple_ads/budgetordercreate)

# BudgetOrderCreate

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.11+

The parent object response to a request to create a budget order.

## Declaration

```
object BudgetOrderCreate
```

## Properties

- `bo` — `BudgetOrderCreate.Bo`: Contains the details of the budget order.
- `orgIds` — `[int64]`: The identifier of the organization that owns the campaign. Currently, only one `orgId` is supported.

## Topics

### Objects

- [BudgetOrderCreate.Bo](budgetordercreate/bo-data.dictionary.md): The response to a request to create a budget order.

## See Also

### Budget Order Request and Response Objects

- [BudgetOrder](budgetorder.md): The response to requests for budget order details.
- [BudgetOrderInfo](budgetorderinfo.md): The parent object response to a request for budget order details.
- [BudgetOrderUpdate](budgetorderupdate.md): The parent object response to a request to update a budget order.
- [BudgetOrderInfoResponse](budgetorderinforesponse.md): A container for the budget order response body.
- [BudgetOrderInfoListResponse](budgetorderinfolistresponse.md): The response details to budget order requests.
- [LOCInvoiceDetails](locinvoicedetails.md): The response to a request to fetch details for `LOC` invoicing details.
- [Money](money.md): The response to requests for budget amounts in campaigns.
