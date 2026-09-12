> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/proximity](https://developer.apple.com/documentation/eventkit/ekalarm/proximity)

# proximity (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A value indicating how a location-based alarm is triggered.

## Declaration

```swift
var proximity: EKAlarmProximity { get set }
```

<a id="Discussion"></a>

## Discussion

Alarms can be set to trigger when entering or exiting a location specified by [structuredLocation](structuredlocation.md). By default, alarms are not affected by location.

## See Also

### Setting GeoFence-based Alarms

- [EKAlarmProximity](../ekalarmproximity.md): A value indicating whether an alarm is triggered by entering or exiting a region.
- [structuredLocation](structuredlocation.md): The location to trigger an alarm.

# proximity (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A value indicating how a location-based alarm is triggered.

## Declaration

```objectivec
@property (nonatomic) EKAlarmProximity proximity;
```

<a id="Discussion"></a>

## Discussion

Alarms can be set to trigger when entering or exiting a location specified by [structuredLocation](structuredlocation.md). By default, alarms are not affected by location.

## See Also

### Setting GeoFence-based Alarms

- [EKAlarmProximity](../ekalarmproximity.md): A value indicating whether an alarm is triggered by entering or exiting a region.
- [structuredLocation](structuredlocation.md): The location to trigger an alarm.
