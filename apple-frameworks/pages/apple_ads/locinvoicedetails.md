> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/locinvoicedetails](https://developer.apple.com/documentation/apple_ads/locinvoicedetails)

# LOCInvoiceDetails

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The response to a request to fetch details for `LOC` invoicing details.

## Declaration

```
object LOCInvoiceDetails
```

## Properties

- `billingContactEmail` — `string`: A valid email address for the LOC billing contact.
- `buyerEmail` — `string`: A valid email address for the LOC buyer.
- `buyerName` — `string`: A valid LOC buyer name.
- `clientName` — `string`: An advertiser or product. Required for agency-type accounts.
- `orderNumber` — `string`: A purchase order number. Required for agency-type accounts.

## See Also

### Budget Order Request and Response Objects

- [BudgetOrder](budgetorder.md): The response to requests for budget order details.
- [BudgetOrderInfo](budgetorderinfo.md): The parent object response to a request for budget order details.
- [BudgetOrderCreate](budgetordercreate.md): The parent object response to a request to create a budget order.
- [BudgetOrderUpdate](budgetorderupdate.md): The parent object response to a request to update a budget order.
- [BudgetOrderInfoResponse](budgetorderinforesponse.md): A container for the budget order response body.
- [BudgetOrderInfoListResponse](budgetorderinfolistresponse.md): The response details to budget order requests.
- [Money](money.md): The response to requests for budget amounts in campaigns.
