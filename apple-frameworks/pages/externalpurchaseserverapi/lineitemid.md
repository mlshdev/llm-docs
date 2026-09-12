> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/lineitemid](https://developer.apple.com/documentation/externalpurchaseserverapi/lineitemid)

# lineItemId

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

A unique identifier for the line item, that you determine.

## Declaration

```
string lineItemId
```

## Mentioned In

- [Reporting corrections](reportcorrections.md)

<a id="Discussion"></a>

## Discussion

Maximum length: 128

The [lineItemId](lineitemid.md) string must be unique for each app. Using UUIDs is recommended. All line item objects have a [lineItemId](lineitemid.md), including:

- [OneTimeBuyLineItem](onetimebuylineitem.md)
- [RefundLineItem](refundlineitem.md)
- [SubscriptionBuyLineItem](subscriptionbuylineitem.md)
