> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/requestrefundresponse](https://developer.apple.com/documentation/advancedcommerceapi/requestrefundresponse)

# RequestRefundResponse

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.1+

The response body for a transaction refund request.

## Declaration

```
object RequestRefundResponse
```

## Properties

- `signedRenewalInfo` — `JWSRenewalInfo`: Subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format.
- `signedTransactionInfo` — `JWSTransaction` (required): Transaction information signed by the App Store, in JWS Compact Serialization format.

<a id="overview"></a>

## Overview

##Discussion This is the response body for the [Request Transaction Refund](request-transaction-refund.md) endpoint.

## See Also

### Refund request from the server

- [Request Transaction Refund](request-transaction-refund.md): Request a refund for a one-time charge or subscription transaction.
- [RequestRefundRequest](requestrefundrequest.md): The request body for requesting a refund for a transaction.
- [RequestRefundItem](requestrefunditem.md): Information about the refund request for an item, such as its SKU, the refund amount, reason, and type.
