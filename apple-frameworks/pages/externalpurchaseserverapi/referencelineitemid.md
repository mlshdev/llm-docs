> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/referencelineitemid](https://developer.apple.com/documentation/externalpurchaseserverapi/referencelineitemid)

# referenceLineItemId

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The line item identifier of another transaction, that the report  references.

## Declaration

```
string referenceLineItemId
```

<a id="Discussion"></a>

## Discussion

Maximum length: 128

Use the `referenceLineItemId` field when reporting a transaction that needs to reference a previous transaction.

You report a transaction as a line item, which has a unique [lineItemId](lineitemid.md). Use the original `lineItemId` as the `referenceLineItemId` to report the following types of new transactions:

- Refunds, which refer to the original transaction to which the refund applies
- Subscription events such as renewals, which refer to the initial buy transaction.

Line items include [OneTimeBuyLineItem](onetimebuylineitem.md),[RefundLineItem](refundlineitem.md), and [SubscriptionBuyLineItem](subscriptionbuylineitem.md).

A [referenceLineItemId](referencelineitemid.md) is valid when it references a line item in the same report, or in a report you previously submitted, successfully.

## See Also

### Providing transaction info

- [creationDate](creationdate.md): The UNIX date, in milliseconds, that the customer authorized the transaction.
- [eventType](eventtype.md): The type of transaction the line item reports, whether it’s a buy or refund.
