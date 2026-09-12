> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/initiate-performance-test](https://developer.apple.com/documentation/retentionmessaging/initiate-performance-test)

# Initiate Performance Test

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.3+

Initiates a performance test of your Get Retention Message endpoint in the sandbox environment.

## URL

```http
POST https://api.storekit-sandbox.apple.com/inApps/v1/messaging/performanceTest
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.apple.com/inApps/v1/messaging/performanceTest
```

## HTTP Body

Content type: `application/json`

Type: `PerformanceTestRequest`

The request body which specifies a transaction identifier of an In-App Purchase to use for this test.

## Response Codes

- `200` OK — `PerformanceTestResponse`: Request succeeded.
- `400` Bad Request — `(InvalidPerformanceTestRequestError | ExistingPerformanceTestRunError | BadRequestTransactionIdError | BadRequestAppTransactionIdForUnsupportedEndpointError | BadRequestTransactionIdNotSupportedForFamilySharingError | BadRequestTransactionIdNotOtidError)`: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `404` Not Found: The request is invalid because the developer account doesn’t have access to this API. For more information, see [Request access to the Retention Messaging API](https://developer.apple.com/contact/request/retention-messaging-api/).
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md)
- [Identifying rate limits](identifying-rate-limits.md)
- [Responding to real-time retention messaging requests](responding-to-realtime-retention-messaging-requests.md)
- [Retention Messaging API changelog](retention-messaging-changelog.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint after you configure your `Get Retention Message` endpoint for the sandbox environment to test your server’s performance. The service returns a response that includes a [PerformanceTestConfig](performancetestconfig.md) object that describes the testing parameters and a `requestId` you can use to request test results.

> **Note**

> The performance test runs only in the sandbox environment. Use original transaction identifiers of transactions you initiate in the sandbox environment. For more information, see [PerformanceTestRequest](performancetestrequest.md).

To pass the performance test, your server must respond to requests within approximately 700 ms in the sandbox environment. For a more precise response-time value, run the test and check the [PerformanceTestConfig](performancetestconfig.md) in the [PerformanceTestResponse](performancetestresponse.md). See the `responseTimeThreshold` value for the required response time in the sandbox environment.

Your server needs to pass the performance test before you can configure a real-time URL for your `Get Retention Message` endpoint in the production environment. For more information, see [Setting up your Get Retention Message endpoint](setting-up-retention-messaging-endpoint.md).

## See Also

### Server performance testing

- [Get Performance Test Results](get-performance-test-results.md): Gets the results of the performance test for the specified identifier.
- [PerformanceTestRequest](performancetestrequest.md): The request object you provide for a performance test that contains an original transaction identifier.
- [PerformanceTestResponse](performancetestresponse.md): The performance test response object.
- [PerformanceTestResultResponse](performancetestresultresponse.md): An object the API returns that describes the performance test results.
