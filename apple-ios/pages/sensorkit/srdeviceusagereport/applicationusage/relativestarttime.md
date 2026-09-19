> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/applicationusage/relativestarttime

# relativeStartTime (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The time the user starts the app relative to the start time of the first app in a report interval.

## Declaration

```swift
var relativeStartTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to order and determine the time between app instances in the same report. The first instance of this property in the report interval is `0`.

## See Also

### Timing App Use

- [usageTime](usagetime.md): The amount of time the user uses the app.

# relativeStartTime (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The time the user starts the app relative to the start time of the first app in a report interval.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval relativeStartTime;
```

<a id="Discussion"></a>

## Discussion

Use this property to order and determine the time between app instances in the same report. The first instance of this property in the report interval is `0`.

## See Also

### Timing App Use

- [usageTime](usagetime.md): The amount of time the user uses the app.
