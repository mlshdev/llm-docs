> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer/ispedometereventtrackingavailable()](https://developer.apple.com/documentation/coremotion/cmpedometer/ispedometereventtrackingavailable())

# isPedometerEventTrackingAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · watchOS 3.0+

Returns a Boolean value indicating whether pedometer events are available on the current device.

## Declaration

```swift
class func isPedometerEventTrackingAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if pedometer events are available or [false](https://developer.apple.com/documentation/swift/false) if they are not.

## See Also

### Determining Pedometer Availability

- [isStepCountingAvailable()](isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable()](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable()](isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isPaceAvailable()](ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable()](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# isPedometerEventTrackingAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · watchOS 3.0+

Returns a Boolean value indicating whether pedometer events are available on the current device.

## Declaration

```objectivec
+ (BOOL) isPedometerEventTrackingAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if pedometer events are available or [false](https://developer.apple.com/documentation/swift/false) if they are not.

## See Also

### Determining Pedometer Availability

- [isStepCountingAvailable](isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable](isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isPaceAvailable](ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
