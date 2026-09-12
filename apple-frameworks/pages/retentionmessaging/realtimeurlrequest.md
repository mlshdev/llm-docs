> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/realtimeurlrequest](https://developer.apple.com/documentation/retentionmessaging/realtimeurlrequest)

# RealtimeUrlRequest

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.4+

The request body for configuring the URL of your Get Retention Message endpoint.

## Declaration

```
object RealtimeUrlRequest
```

## Properties

- `realtimeURL` — `realtimeURL` (required): A string that contains the URL of your `Get Retention Message` endpoint for configuration.
  **Maximum length:** `256`

## Mentioned In

- [Retention Messaging API changelog](retention-messaging-changelog.md)

<a id="Discussion"></a>

## Discussion

To configure your `Get Retention Message` endpoint’s URL, call [Configure Realtime URL](configure-realtime-url.md) and provide the URL in this request body. For more information, see [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md).

## See Also

### Real-time retention messaging setup

- [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md): Choose retention messages for customers in real time by implementing an endpoint on your server that responds to requests from the App Store server.
- [Configure Realtime URL](configure-realtime-url.md): Configures the URL for your Get Retention Message endpoint in the sandbox and production environments.
- [Get Realtime URL](get-realtime-url.md): Gets the URL for real-time messages that points to your Get Retention Message endpoint, which you previously configured.
- [Delete Realtime URL](delete-realtime-url.md): Deletes the URL for your Get Retention Message endpoint, in the sandbox or production environments.
- [RealtimeRequestBody](realtimerequestbody.md): The request body the App Store server sends to your Get Retention Message endpoint.
- [RealtimeUrlResponse](realtimeurlresponse.md): The response body that contains the URL for your Get Retention Message endpoint.
