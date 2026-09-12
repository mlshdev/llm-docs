> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/signedpayload](https://developer.apple.com/documentation/retentionmessaging/signedpayload)

# signedPayload

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.0+

The payload in a JSON Web Signature (JWS) format, signed by the App Store.

## Declaration

```
string signedPayload
```

## Mentioned In

- [Responding to real-time retention messaging requests](responding-to-realtime-retention-messaging-requests.md)

<a id="Discussion"></a>

## Discussion

The signed payload is a property of [RealtimeRequestBody](realtimerequestbody.md). The App Store server sends this request to your `Get Retention Message` endpoint.

For information about parsing the signed payload and validating the signature, see [Responding to real-time retention messaging requests](responding-to-realtime-retention-messaging-requests.md).

## See Also

### Real-time request body

- [originalTransactionId](originaltransactionid.md): The original transaction identifier of an In-App Purchase.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [requestIdentifier](requestidentifier.md): A unique identifier the App Store server creates for its requests.
- [signedDate](signeddate.md): The UNIX time, in milliseconds, that the App Store signed the JSON Web Signature data.
- [environment](environment.md): The server environment, either sandbox or production.
