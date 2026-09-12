> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/requestrefundrequest](https://developer.apple.com/documentation/advancedcommerceapi/requestrefundrequest)

# RequestRefundRequest

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The request body for requesting a refund for a transaction.

## Declaration

```
object RequestRefundRequest
```

## Properties

- `currency` — `currency`: The currency of the transaction.
- `items` — `[RequestRefundItem]` (required):
- `refundRiskingPreference` — `refundRiskingPreference` (required):
- `requestInfo` — `RequestInfo` (required):
- `storefront` — `storefront`:

<a id="Discussion"></a>

## Discussion

This is the request body for the [Request Transaction Refund](request-transaction-refund.md) endpoint.

## See Also

### Refund request from the server

- [Request Transaction Refund](request-transaction-refund.md): Request a refund for a one-time charge or subscription transaction.
- [RequestRefundResponse](requestrefundresponse.md): The response body for a transaction refund request.
- [RequestRefundItem](requestrefunditem.md): Information about the refund request for an item, such as its SKU, the refund amount, reason, and type.
