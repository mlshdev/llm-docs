> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer/ispaceavailable()](https://developer.apple.com/documentation/coremotion/cmpedometer/ispaceavailable())

# isPaceAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Returns a Boolean value indicating whether pace information is available on the current device.

## Declaration

```swift
class func isPaceAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if pace information is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Pace measurement indicates the ability to determine the user’s pace in seconds per meter. This capability is not supported on all devices.

## See Also

### Determining Pedometer Availability

- [isStepCountingAvailable()](isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable()](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable()](isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isCadenceAvailable()](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable()](ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# isPaceAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Returns a Boolean value indicating whether pace information is available on the current device.

## Declaration

```objectivec
+ (BOOL) isPaceAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if pace information is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Pace measurement indicates the ability to determine the user’s pace in seconds per meter. This capability is not supported on all devices.

## See Also

### Determining Pedometer Availability

- [isStepCountingAvailable](isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable](isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isCadenceAvailable](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable](ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
