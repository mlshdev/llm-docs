> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/locinvoicedetails

# LOCInvoiceDetails

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The response to a request to fetch details for `LOC` invoicing details.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

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

- [BudgetOrder](budgetorder.md): Deprecated. The response to requests for budget order details.
- [BudgetOrderInfo](budgetorderinfo.md): Deprecated. The parent object response to a request for budget order details.
- [BudgetOrderCreate](budgetordercreate.md): Deprecated. The parent object response to a request to create a budget order.
- [BudgetOrderUpdate](budgetorderupdate.md): Deprecated. The parent object response to a request to update a budget order.
- [BudgetOrderInfoResponse](budgetorderinforesponse.md): Deprecated. A container for the budget order response body.
- [BudgetOrderInfoListResponse](budgetorderinfolistresponse.md): Deprecated. The response details to budget order requests.
- [Money](money.md): Deprecated. The response to requests for budget amounts in campaigns.
