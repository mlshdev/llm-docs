> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/eventkit/ekalarm/structuredlocation

# structuredLocation (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The location to trigger an alarm.

## Declaration

```swift
@NSCopying var structuredLocation: EKStructuredLocation? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is used in conjunction with [proximity](proximity.md) to perform geofence-based triggering of reminders.

## See Also

### Setting GeoFence-based Alarms

- [EKAlarmProximity](../ekalarmproximity.md): A value indicating whether an alarm is triggered by entering or exiting a region.
- [proximity](proximity.md): A value indicating how a location-based alarm is triggered.

# structuredLocation (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The location to trigger an alarm.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) EKStructuredLocation * structuredLocation;
```

<a id="Discussion"></a>

## Discussion

This property is used in conjunction with [proximity](proximity.md) to perform geofence-based triggering of reminders.

## See Also

### Setting GeoFence-based Alarms

- [EKAlarmProximity](../ekalarmproximity.md): A value indicating whether an alarm is triggered by entering or exiting a region.
- [proximity](proximity.md): A value indicating how a location-based alarm is triggered.
