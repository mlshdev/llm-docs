> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/signeddate](https://developer.apple.com/documentation/retentionmessaging/signeddate)

# signedDate

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.1+

The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.

## Declaration

```
timestamp signedDate
```

## Mentioned In

- [Retention Messaging API changelog](retention-messaging-changelog.md)

## See Also

### Real-time request body

- [signedPayload](signedpayload.md): The payload in a JSON Web Signature (JWS) format, signed by the App Store.
- [originalTransactionId](originaltransactionid.md): The original transaction identifier of an In-App Purchase.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [requestIdentifier](requestidentifier.md): A unique identifier the App Store server creates for its requests.
- [environment](environment.md): The server environment, either sandbox or production.
