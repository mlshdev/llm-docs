> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/appappleid](https://developer.apple.com/documentation/retentionmessaging/appappleid)

# appAppleId

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

The unique identifier of an app in the App Store.

## Declaration

```
int64 appAppleId
```

## See Also

### Real-time request body

- [signedPayload](signedpayload.md): The payload in a JSON Web Signature (JWS) format, signed by the App Store.
- [originalTransactionId](originaltransactionid.md): The original transaction identifier of an In-App Purchase.
- [requestIdentifier](requestidentifier.md): A unique identifier the App Store server creates for its requests.
- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
- [environment](environment.md): The server environment, either sandbox or production.
