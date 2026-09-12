> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmsensorrecorder/isauthorizedforrecording()](https://developer.apple.com/documentation/coremotion/cmsensorrecorder/isauthorizedforrecording())

# isAuthorizedForRecording() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 4.0)

Returns a Boolean value indicating whether the app is authorized to record sensor data.

> Use [authorizationStatus()](authorizationstatus%28%29.md) instead.

## Declaration

```swift
class func isAuthorizedForRecording() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app is authorized to record sensor data or [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Checking the Availability of Sensor Recording

- [isAccelerometerRecordingAvailable()](isaccelerometerrecordingavailable%28%29.md): Returns a Boolean value indicating whether accelerometer recording is supported on the current device.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to record sensor data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# isAuthorizedForRecording (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 4.0)

Returns a Boolean value indicating whether the app is authorized to record sensor data.

> Use [authorizationStatus](authorizationstatus%28%29.md) instead.

## Declaration

```objectivec
+ (BOOL) isAuthorizedForRecording;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app is authorized to record sensor data or [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Checking the Availability of Sensor Recording

- [isAccelerometerRecordingAvailable](isaccelerometerrecordingavailable%28%29.md): Returns a Boolean value indicating whether accelerometer recording is supported on the current device.
- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to record sensor data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
