> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/performanceteststatus](https://developer.apple.com/documentation/retentionmessaging/performanceteststatus)

# PerformanceTestStatus

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.3+

The status of the performance test.

## Declaration

```
string PerformanceTestStatus
```

## Possible Values

- `PENDING`: The test is still pending.
- `PASS`: The test passed. For additional details, see the specific [PerformanceTestResponse](performancetestresponse.md) results.
- `FAIL`: The test failed. For additional details, see the specific [PerformanceTestResponse](performancetestresponse.md) results.

## See Also

### Performance testing

- [PerformanceTestConfig](performancetestconfig.md): An object that enumerates the test configuration parameters.
- [PerformanceTestRequest](performancetestrequest.md): The request object you provide for a performance test that contains an original transaction identifier.
- [PerformanceTestResponse](performancetestresponse.md): The performance test response object.
- [PerformanceTestResponseTimes](performancetestresponsetimes.md): An object that describes test response times.
- [PerformanceTestResultResponse](performancetestresultresponse.md): An object the API returns that describes the performance test results.
- [Failures](failures.md): A map of server-to-server notification failure reasons and counts that represent the number of failures during a performance test.
- [sendAttemptResult](sendattemptresult.md): The success or error information the App Store server records when it attempts to send an App Store server notification to your server.
- [requestId](requestid.md): The identifier of the performance test request.
