> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer/authorizationstatus()](https://developer.apple.com/documentation/coremotion/cmpedometer/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · watchOS 4.0+

Returns a value indicating whether the app is authorized to gather pedometer data.

## Declaration

```swift
class func authorizationStatus() -> CMAuthorizationStatus
```

## See Also

### Determining Pedometer Availability

- [isStepCountingAvailable()](isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable()](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable()](isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isPaceAvailable()](ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable()](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable()](ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · watchOS 4.0+

Returns a value indicating whether the app is authorized to gather pedometer data.

## Declaration

```objectivec
+ (CMAuthorizationStatus) authorizationStatus;
```

## See Also

### Determining Pedometer Availability

- [isStepCountingAvailable](isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable](isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isPaceAvailable](ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable](ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
