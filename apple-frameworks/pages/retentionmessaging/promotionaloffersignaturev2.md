> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/promotionaloffersignaturev2](https://developer.apple.com/documentation/retentionmessaging/promotionaloffersignaturev2)

# promotionalOfferSignatureV2

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

The promotional-offer signature you generate in a JSON Web Signature (JWS) format.

## Declaration

```
string promotionalOfferSignatureV2
```

<a id="Discussion"></a>

## Discussion

To provide a promotional-offer retention message, you need to cryptographically sign the offer and include it in the [promotionalOffer](promotionaloffer.md) parameter of your [RealtimeResponseBody](realtimeresponsebody.md) response.

To generate the promotional-offer signature in a JWS format, see [Generating JWS to sign App Store requests](../storekit/generating-jws-to-sign-app-store-requests.md), and follow the instructions for promotional-offer signatures, including the custom claims.

> **Important**

> The `transactionId` parameter of the signature is required. Use the [originalTransactionId](originaltransactionid.md) you receive in [DecodedRealtimeRequestBody](decodedrealtimerequestbody.md).

The App Store Server Library provides functions that simplify generating this signature. For more information, see [Simplifying your implementation by using the App Store Server Library](../appstoreserverapi/simplifying-your-implementation-by-using-the-app-store-server-library.md).
