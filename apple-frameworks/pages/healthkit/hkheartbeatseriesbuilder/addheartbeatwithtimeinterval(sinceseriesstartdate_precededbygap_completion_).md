> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesbuilder/addheartbeatwithtimeinterval(sinceseriesstartdate:precededbygap:completion:)](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesbuilder/addheartbeatwithtimeinterval(sinceseriesstartdate:precededbygap:completion:))

# addHeartbeatWithTimeInterval(sinceSeriesStartDate:precededByGap:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a heartbeat to the series.

## Declaration

```swift
func addHeartbeatWithTimeInterval(sinceSeriesStartDate timeIntervalSinceStart: TimeInterval, precededByGap: Bool, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func addHeartbeat(at timeIntervalSinceStart: TimeInterval, precededByGap: Bool) async throws
```

## Parameters

- `timeIntervalSinceStart`: The time of the heartbeat, measured from the series builder’s start date. This must be a positive value.
- `precededByGap`: A Boolean value that indicates whether this heartbeat was immediately preceded by a gap in the data, indicating that one or more heartbeats may be missing.
- `completion`: The completion handler called by the builder after it attempts to add the heartbeat to the series. The completion handler takes the following parameters:

  - **`success`**: A Boolean value that indicates whether the builder successfully added the heartbeat.
  - **`error`**: If the `success` parameter is [false](../../foundation/nsexpression/false.md), this contains an object that describes the error; otherwise, `nil`.

## See Also

### Adding Data

- [addMetadata(\_:completion:)](addmetadata%28__completion_%29.md): Adds metadata to the sample.

# addHeartbeatWithTimeIntervalSinceSeriesStartDate:precededByGap:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a heartbeat to the series.

## Declaration

```objectivec
- (void) addHeartbeatWithTimeIntervalSinceSeriesStartDate:(NSTimeInterval) timeIntervalSinceStart precededByGap:(BOOL) precededByGap completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `timeIntervalSinceStart`: The time of the heartbeat, measured from the series builder’s start date. This must be a positive value.
- `precededByGap`: A Boolean value that indicates whether this heartbeat was immediately preceded by a gap in the data, indicating that one or more heartbeats may be missing.
- `completion`: The completion handler called by the builder after it attempts to add the heartbeat to the series. The completion handler takes the following parameters:

  - **`success`**: A Boolean value that indicates whether the builder successfully added the heartbeat.
  - **`error`**: If the `success` parameter is [falseExpression](../../foundation/nsexpression/false.md), this contains an object that describes the error; otherwise, `nil`.

## See Also

### Adding Data

- [addMetadata:completion:](addmetadata%28__completion_%29.md): Adds metadata to the sample.
