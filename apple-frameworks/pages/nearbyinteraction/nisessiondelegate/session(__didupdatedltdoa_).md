> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate/session(_:didupdatedltdoa:)](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate/session(_:didupdatedltdoa:))

# session(\_:didUpdateDLTDOA:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Provides device ranging estimates for a Downlink Time-Difference-of-Arrival session.

## Declaration

```swift
optional func session(_ session: NISession, didUpdateDLTDOA measurements: [NIDLTDOAMeasurement])
```

## Parameters

- `session`: The session that provides a Downlink Time-Difference-of-Arrival measurement.
- `measurements`: The measurement updates for the session.

<a id="discussion"></a>

## Discussion

The framework invokes this callback to provide measurements for sessions that run [NIDLTDOAConfiguration](../nidltdoaconfiguration.md).

# session:didUpdateDLTDOAMeasurements: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Provides device ranging estimates for a Downlink Time-Difference-of-Arrival session.

## Declaration

```objectivec
- (void) session:(NISession *) session didUpdateDLTDOAMeasurements:(NSArray<__kindof NIDLTDOAMeasurement *> *) measurements;
```

## Parameters

- `session`: The session that provides a Downlink Time-Difference-of-Arrival measurement.
- `measurements`: The measurement updates for the session.

<a id="discussion"></a>

## Discussion

The framework invokes this callback to provide measurements for sessions that run [NIDLTDOAConfiguration](../nidltdoaconfiguration.md).
