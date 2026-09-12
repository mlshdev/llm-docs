> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmsensorrecorder/authorizationstatus()](https://developer.apple.com/documentation/coremotion/cmsensorrecorder/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · watchOS 4.0+

Returns a value indicating whether the app is authorized to record sensor data.

## Declaration

```swift
class func authorizationStatus() -> CMAuthorizationStatus
```

## See Also

### Checking the Availability of Sensor Recording

- [isAccelerometerRecordingAvailable()](isaccelerometerrecordingavailable%28%29.md): Returns a Boolean value indicating whether accelerometer recording is supported on the current device.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
- [isAuthorizedForRecording()](isauthorizedforrecording%28%29.md): Deprecated. Returns a Boolean value indicating whether the app is authorized to record sensor data.

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · watchOS 4.0+

Returns a value indicating whether the app is authorized to record sensor data.

## Declaration

```objectivec
+ (CMAuthorizationStatus) authorizationStatus;
```

## See Also

### Checking the Availability of Sensor Recording

- [isAccelerometerRecordingAvailable](isaccelerometerrecordingavailable%28%29.md): Returns a Boolean value indicating whether accelerometer recording is supported on the current device.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
- [isAuthorizedForRecording](isauthorizedforrecording%28%29.md): Deprecated. Returns a Boolean value indicating whether the app is authorized to record sensor data.
