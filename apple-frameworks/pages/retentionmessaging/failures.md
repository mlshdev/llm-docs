> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/failures](https://developer.apple.com/documentation/retentionmessaging/failures)

# Failures

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.3+

A map of server-to-server notification failure reasons and counts that represent the number of failures during a performance test.

## Declaration

```
object Failures
```

## Properties

- `Any Key` — `int32`: A string that describes the success or error the server encountered as it attempted to send a notification to your server as part of a performance test. For possible keys, see [sendAttemptResult](sendattemptresult.md).

## See Also

### Performance testing

- [PerformanceTestConfig](performancetestconfig.md): An object that enumerates the test configuration parameters.
- [PerformanceTestRequest](performancetestrequest.md): The request object you provide for a performance test that contains an original transaction identifier.
- [PerformanceTestResponse](performancetestresponse.md): The performance test response object.
- [PerformanceTestResponseTimes](performancetestresponsetimes.md): An object that describes test response times.
- [PerformanceTestResultResponse](performancetestresultresponse.md): An object the API returns that describes the performance test results.
- [PerformanceTestStatus](performanceteststatus.md): The status of the performance test.
- [sendAttemptResult](sendattemptresult.md): The success or error information the App Store server records when it attempts to send an App Store server notification to your server.
- [requestId](requestid.md): The identifier of the performance test request.
