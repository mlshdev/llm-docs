> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/receiptcreationdate](https://developer.apple.com/documentation/appstoreserverapi/receiptcreationdate)

# receiptCreationDate

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.17+

The date that the App Store signs a JSON Web Signature (JWS) app transaction.

## Declaration

```
timestamp receiptCreationDate
```

<a id="Discussion"></a>

## Discussion

For more information, see [JWSAppTransactionDecodedPayload](jwsapptransactiondecodedpayload.md).

## See Also

### JSON Web Signature (JWS) date

- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
