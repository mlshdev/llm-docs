> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/performancetestresponse](https://developer.apple.com/documentation/retentionmessaging/performancetestresponse)

# PerformanceTestResponse

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.3+

The performance test response object.

## Declaration

```
object PerformanceTestResponse
```

## Properties

- `config` — `PerformanceTestConfig` (required): The performance test configuration object.
- `requestId` — `requestId` (required): The performance test request identifier.

<a id="overview"></a>

## Overview

Use the `requestId` to get the test results, by calling [Get Performance Test Results](get-performance-test-results.md).

## See Also

### Server performance testing

- [Initiate Performance Test](initiate-performance-test.md): Initiates a performance test of your Get Retention Message endpoint in the sandbox environment.
- [Get Performance Test Results](get-performance-test-results.md): Gets the results of the performance test for the specified identifier.
- [PerformanceTestRequest](performancetestrequest.md): The request object you provide for a performance test that contains an original transaction identifier.
- [PerformanceTestResultResponse](performancetestresultresponse.md): An object the API returns that describes the performance test results.
