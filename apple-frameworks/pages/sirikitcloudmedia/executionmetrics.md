> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/executionmetrics](https://developer.apple.com/documentation/sirikitcloudmedia/executionmetrics)

# ExecutionMetrics

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Timing information to isolate service performance from network delays.

## Declaration

```
object ExecutionMetrics
```

## Properties

- `received` — `date-time`: The UTC time the service receives the request.
- `completed` — `date-time`: The UTC time the service finishes processing this [Invocation](invocation.md).
- `duration` — `float`: The time, in seconds, that elapses while the service processes this request. Provide millisecond precision, if possible.

## See Also

### Instrumenting Your Service

- [ServiceDebugReference](servicedebugreference.md): A URI that references debugging information for a request.
