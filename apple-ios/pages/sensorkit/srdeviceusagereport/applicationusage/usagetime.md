> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/applicationusage/usagetime

# usageTime (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The amount of time the user uses the app.

## Declaration

```swift
var usageTime: TimeInterval { get }
```

## See Also

### Timing App Use

- [relativeStartTime](relativestarttime.md): The time the user starts the app relative to the start time of the first app in a report interval.

# usageTime (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The amount of time the user uses the app.

## Declaration

```objectivec
@property (readonly) NSTimeInterval usageTime;
```

## See Also

### Timing App Use

- [relativeStartTime](relativestarttime.md): The time the user starts the app relative to the start time of the first app in a report interval.
