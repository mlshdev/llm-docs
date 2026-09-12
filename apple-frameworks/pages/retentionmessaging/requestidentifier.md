> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/requestidentifier](https://developer.apple.com/documentation/retentionmessaging/requestidentifier)

# requestIdentifier

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

A unique identifier the App Store server creates for its requests.

## Declaration

```
uuid requestIdentifier
```

<a id="Discussion"></a>

## Discussion

The request identifier uniquely identifies each request the App Store server sends to your server’s `Get Retention Message` endpoint. For more information, see [DecodedRealtimeRequestBody](decodedrealtimerequestbody.md).

## See Also

### Real-time request body

- [signedPayload](signedpayload.md): The payload in a JSON Web Signature (JWS) format, signed by the App Store.
- [originalTransactionId](originaltransactionid.md): The original transaction identifier of an In-App Purchase.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
- [environment](environment.md): The server environment, either sandbox or production.
