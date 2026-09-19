> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/signedpayload

# signedPayload

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.5+

A cryptographically signed payload, in JSON Web Signature (JWS) format, containing the response body for a version 2 notification.

## Declaration

```
string signedPayload
```

<a id="Discussion"></a>

## Discussion

The `signedpayload` is a string of three Base64 URL-encoded components, separated by a period.

For more information, see [signedPayload](../appstoreservernotifications/signedpayload.md) in [App Store Server Notifications](../appstoreservernotifications.md).

## See Also

### Data types

- [sendAttemptItem](sendattemptitem.md): The success or error information and the date the App Store server records when it attempts to send a server notification to your server.
