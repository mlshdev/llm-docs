> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/performancetestresponsetimes](https://developer.apple.com/documentation/retentionmessaging/performancetestresponsetimes)

# PerformanceTestResponseTimes

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.3+

An object that describes test response times.

## Declaration

```
object PerformanceTestResponseTimes
```

## Properties

- `average` — `int64` (required): Average response time in milliseconds.
- `p50` — `int64` (required): The 50th percentile response time in milliseconds.
- `p90` — `int64` (required): The 90th percentile response time in milliseconds.
- `p95` — `int64` (required): The 95th percentile response time in milliseconds.
- `p99` — `int64` (required): The 99th percentile response time in milliseconds.

## See Also

### Performance testing

- [PerformanceTestConfig](performancetestconfig.md): An object that enumerates the test configuration parameters.
- [PerformanceTestRequest](performancetestrequest.md): The request object you provide for a performance test that contains an original transaction identifier.
- [PerformanceTestResponse](performancetestresponse.md): The performance test response object.
- [PerformanceTestResultResponse](performancetestresultresponse.md): An object the API returns that describes the performance test results.
- [PerformanceTestStatus](performanceteststatus.md): The status of the performance test.
- [Failures](failures.md): A map of server-to-server notification failure reasons and counts that represent the number of failures during a performance test.
- [sendAttemptResult](sendattemptresult.md): The success or error information the App Store server records when it attempts to send an App Store server notification to your server.
- [requestId](requestid.md): The identifier of the performance test request.
