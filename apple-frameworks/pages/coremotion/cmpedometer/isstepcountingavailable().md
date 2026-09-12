> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer/isstepcountingavailable()](https://developer.apple.com/documentation/coremotion/cmpedometer/isstepcountingavailable())

# isStepCountingAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Returns a Boolean value indicating whether step counting is available on the current device.

## Declaration

```swift
class func isStepCountingAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if step counting is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Determining Pedometer Availability

- [isDistanceAvailable()](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable()](isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isPaceAvailable()](ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable()](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable()](ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# isStepCountingAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Returns a Boolean value indicating whether step counting is available on the current device.

## Declaration

```objectivec
+ (BOOL) isStepCountingAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if step counting is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Determining Pedometer Availability

- [isDistanceAvailable](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable](isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isPaceAvailable](ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable](ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
