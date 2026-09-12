> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/get-performance-test-results](https://developer.apple.com/documentation/retentionmessaging/get-performance-test-results)

# Get Performance Test Results

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Web Service Endpoint  
**Availability:** Retention Messaging API 1.3+

Gets the results of the performance test for the specified identifier.

## URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/messaging/performanceTest/result/{requestId}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/messaging/performanceTest/result/{requestId}
```

## Path Parameters

- `requestId` — `requestId` (required): The ID of the performance test to return, which you receive in the [PerformanceTestResponse](performancetestresponse.md) when you call [Initiate Performance Test](initiate-performance-test.md).

## Response Codes

- `200` OK — `PerformanceTestResultResponse`: Request succeeded.
- `400` Bad Request — `InvalidRequestIdError`: The request is invalid and unacceptable.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `PerformanceTestRunNotFoundError`: The system can’t find the message.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [Identifying rate limits](identifying-rate-limits.md)
- [Retention Messaging API changelog](retention-messaging-changelog.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to retrieve the results from a performance test you initiate by calling [Initiate Performance Test](initiate-performance-test.md).

The API returns a JSON object that contains [PerformanceTestConfig](performancetestconfig.md), [PerformanceTestResponse](performancetestresponse.md) , and [Failures](failures.md) objects that enumerate the parameters the system used to evaluate the server performance, results of the specified test, and information that describes the failures, if any, that the test encountered.

## See Also

### Server performance testing

- [Initiate Performance Test](initiate-performance-test.md): Initiates a performance test of your Get Retention Message endpoint in the sandbox environment.
- [PerformanceTestRequest](performancetestrequest.md): The request object you provide for a performance test that contains an original transaction identifier.
- [PerformanceTestResponse](performancetestresponse.md): The performance test response object.
- [PerformanceTestResultResponse](performancetestresultresponse.md): An object the API returns that describes the performance test results.
