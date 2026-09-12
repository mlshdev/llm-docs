> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/configure-realtime-url](https://developer.apple.com/documentation/retentionmessaging/configure-realtime-url)

# Configure Realtime URL

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.4+

Configures the URL for your Get Retention Message endpoint in the sandbox and production environments.

## URL

```http
PUT https://api.storekit.apple.com/inApps/v1/messaging/realtime/url
```

## Sandbox URL

```http
PUT https://api.storekit-sandbox.apple.com/inApps/v1/messaging/realtime/url
```

## HTTP Body

Content type: `application/json`

Type: `RealtimeUrlRequest`

The request body that includes your endpoint’s URL.

## Response Codes

- `200` OK: Request succeeded.
- `400` Bad Request — `BadRequestRealtimeUrlError`: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `403` Forbidden — `ForbiddenNoPassingTestError`: Passing a performance test is required before setting a production URL.
- `404` Not Found: The request is invalid because the developer account doesn’t have access to this API. For more information, see [Request access to the Retention Messaging API](https://developer.apple.com/contact/request/retention-messaging-api/).
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md)
- [Identifying rate limits](identifying-rate-limits.md)
- [Retention Messaging API changelog](retention-messaging-changelog.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to configure the URLs for your `Get Retention Message` endpoints in the sandbox and production environments. For more information, including endpoint specifications and server requirements, see [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md).

> **Note**

>  Your server needs to pass a performance test before you can configure your `Get Retention Message` endpoint for the production environment. For more information, see [Initiate Performance Test](initiate-performance-test.md).

As a best practice, use different URLs for the sandbox and production environments.

<a id="Configure-your-URL-for-the-sandbox-environment"></a>

### Configure your URL for the sandbox environment

To configure your `Get Retention Message` endpoint for the sandbox environment, call [Configure Realtime URL](configure-realtime-url.md) using its sandbox URL. Provide your endpoint’s sandbox URL.

<a id="Configure-your-URL-for-the-production-environment"></a>

### Configure your URL for the production environment

To configure your `Get Retention Message` endpoint for the production environment, first configure your `Get Retention Message` endpoint for the sandbox environment, then:

1. Call [Initiate Performance Test](initiate-performance-test.md) to test your endpoint in the sandbox environment.
2. Call [Get Performance Test Results](get-performance-test-results.md) and ensure your server passes the performance test.
3. To configure your `Get Retention Message` endpoint for the production environment, call [Configure Realtime URL](configure-realtime-url.md) using its production URL. Provide your endpoint’s production URL.

<a id="Change-your-endpoints-URL"></a>

### Change your endpoint’s URL

To change your endpoint’s URL, just call [Configure Realtime URL](configure-realtime-url.md) again. The Retention Messaging API uses your most recent successful configuration. To check the URL you set, call [Get Realtime URL](get-realtime-url.md).

To delete—or deconfigure—your endpoint’s URL entirely, call [Delete Realtime URL](delete-realtime-url.md).

## See Also

### Real-time retention messaging setup

- [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md): Choose retention messages for customers in real time by implementing an endpoint on your server that responds to requests from the App Store server.
- [Get Realtime URL](get-realtime-url.md): Gets the URL for real-time messages that points to your Get Retention Message endpoint, which you previously configured.
- [Delete Realtime URL](delete-realtime-url.md): Deletes the URL for your Get Retention Message endpoint, in the sandbox or production environments.
- [RealtimeUrlRequest](realtimeurlrequest.md): The request body for configuring the URL of your Get Retention Message endpoint.
- [RealtimeRequestBody](realtimerequestbody.md): The request body the App Store server sends to your Get Retention Message endpoint.
- [RealtimeUrlResponse](realtimeurlresponse.md): The response body that contains the URL for your Get Retention Message endpoint.
