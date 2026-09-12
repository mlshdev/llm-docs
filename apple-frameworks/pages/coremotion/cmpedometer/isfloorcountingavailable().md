> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer/isfloorcountingavailable()](https://developer.apple.com/documentation/coremotion/cmpedometer/isfloorcountingavailable())

# isFloorCountingAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Returns a Boolean value indicating whether floor counting is available on the current device.

## Declaration

```swift
class func isFloorCountingAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if floor counting is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Floor counting indicates the ability to count the number of floors the user walks up or down using stairs. This capability is not supported on all devices.

## See Also

### Determining Pedometer Availability

- [isStepCountingAvailable()](isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable()](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isPaceAvailable()](ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable()](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable()](ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# isFloorCountingAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Returns a Boolean value indicating whether floor counting is available on the current device.

## Declaration

```objectivec
+ (BOOL) isFloorCountingAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if floor counting is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Floor counting indicates the ability to count the number of floors the user walks up or down using stairs. This capability is not supported on all devices.

## See Also

### Determining Pedometer Availability

- [isStepCountingAvailable](isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable](isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isPaceAvailable](ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable](iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable](ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
