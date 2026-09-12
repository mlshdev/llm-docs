> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/requestrefunditem](https://developer.apple.com/documentation/advancedcommerceapi/requestrefunditem)

# RequestRefundItem

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

Information about the refund request for an item, such as its SKU, the refund amount, reason, and type.

## Declaration

```
object RequestRefundItem
```

## Properties

- `SKU` — `SKU` (required): The product identifier.
  **Maximum length:** `128`
- `refundAmount` — `refundAmount`: The refund amount you’re requesting for the `SKU`, in milliunits of the currency.
- `refundReason` — `refundReason` (required): The reason for the refund request.
- `refundType` — `string` (required): The type of refund requested.
  **Allowed values:** `FULL`, `PRORATED`, `CUSTOM`
- `revoke` — `boolean` (required):

## See Also

### Refund request from the server

- [Request Transaction Refund](request-transaction-refund.md): Request a refund for a one-time charge or subscription transaction.
- [RequestRefundRequest](requestrefundrequest.md): The request body for requesting a refund for a transaction.
- [RequestRefundResponse](requestrefundresponse.md): The response body for a transaction refund request.
