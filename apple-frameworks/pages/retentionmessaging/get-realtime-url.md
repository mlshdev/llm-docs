> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/get-realtime-url](https://developer.apple.com/documentation/retentionmessaging/get-realtime-url)

# Get Realtime URL

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.4+

Gets the URL for real-time messages that points to your Get Retention Message endpoint, which you previously configured.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/messaging/realtime/url
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/messaging/realtime/url
```

## Response Codes

- `200` OK — `RealtimeUrlRequest`: Request succeeded.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `RealtimeUrlNotFoundError`: The `Get Retention Message` URL wasn’t found.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)
- [Retention Messaging API changelog](retention-messaging-changelog.md)
- [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md)

<a id="Discussion"></a>

## Discussion

This endpoint returns your `Get Retention Message` endpoint’s URL. The URL it provides is specific to the environment (sandbox or production) you use to call [Get Realtime URL](get-realtime-url.md).

This endpoint returns an `HTTP 404` error with [RealtimeUrlNotFoundError](realtimeurlnotfounderror.md) if the URL isn’t configured.

For more information on configuring your `Get Retention Message` endpoint, see [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md).

## See Also

### Real-time retention messaging setup

- [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md): Choose retention messages for customers in real time by implementing an endpoint on your server that responds to requests from the App Store server.
- [Configure Realtime URL](configure-realtime-url.md): Configures the URL for your Get Retention Message endpoint in the sandbox and production environments.
- [Delete Realtime URL](delete-realtime-url.md): Deletes the URL for your Get Retention Message endpoint, in the sandbox or production environments.
- [RealtimeUrlRequest](realtimeurlrequest.md): The request body for configuring the URL of your Get Retention Message endpoint.
- [RealtimeRequestBody](realtimerequestbody.md): The request body the App Store server sends to your Get Retention Message endpoint.
- [RealtimeUrlResponse](realtimeurlresponse.md): The response body that contains the URL for your Get Retention Message endpoint.
