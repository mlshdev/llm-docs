> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/performancetestresultresponse](https://developer.apple.com/documentation/retentionmessaging/performancetestresultresponse)

# PerformanceTestResultResponse

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.3+

An object the API returns that describes the performance test results.

## Declaration

```
object PerformanceTestResultResponse
```

## Properties

- `config` — `PerformanceTestConfig` (required): A [PerformanceTestConfig](performancetestconfig.md) object that enumerates the test parameters.
- `failures` — `Failures` (required): A [Failures](failures.md) object that represents a map of server-to-server notification failure reasons and counts that represent the number of failures encountered during the performance test.
- `numPending` — `int32` (required): An integer that describes the number of pending requests in the performance test.
- `responseTimes` — `PerformanceTestResponseTimes` (required): A [PerformanceTestResponseTimes](performancetestresponsetimes.md) object that enumerates the response times measured during the test.
- `result` — `PerformanceTestStatus` (required): A [PerformanceTestStatus](performanceteststatus.md) object that describes the overall result of the test.
- `successRate` — `int32` (required): An integer that describes he success rate percentage of the performance test.
- `target` — `string` (required): The target URL for the performance test.

<a id="Discussion"></a>

### Discussion

This object is the response the [Get Performance Test Results](get-performance-test-results.md) API call returns. To initiate a performance test, call [Initiate Performance Test](initiate-performance-test.md).

## See Also

### Server performance testing

- [Initiate Performance Test](initiate-performance-test.md): Initiates a performance test of your Get Retention Message endpoint in the sandbox environment.
- [Get Performance Test Results](get-performance-test-results.md): Gets the results of the performance test for the specified identifier.
- [PerformanceTestRequest](performancetestrequest.md): The request object you provide for a performance test that contains an original transaction identifier.
- [PerformanceTestResponse](performancetestresponse.md): The performance test response object.
