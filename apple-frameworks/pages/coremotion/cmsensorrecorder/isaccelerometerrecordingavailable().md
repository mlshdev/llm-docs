> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmsensorrecorder/isaccelerometerrecordingavailable()](https://developer.apple.com/documentation/coremotion/cmsensorrecorder/isaccelerometerrecordingavailable())

# isAccelerometerRecordingAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Returns a Boolean value indicating whether accelerometer recording is supported on the current device.

## Declaration

```swift
class func isAccelerometerRecordingAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if accelerometer recording is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Call this method before trying to record or retrieve any accelerometer data using the methods of this class. Accelerometer data recording is not supported on all devices.

## See Also

### Checking the Availability of Sensor Recording

- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to record sensor data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
- [isAuthorizedForRecording()](isauthorizedforrecording%28%29.md): Deprecated. Returns a Boolean value indicating whether the app is authorized to record sensor data.

# isAccelerometerRecordingAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Returns a Boolean value indicating whether accelerometer recording is supported on the current device.

## Declaration

```objectivec
+ (BOOL) isAccelerometerRecordingAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if accelerometer recording is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Call this method before trying to record or retrieve any accelerometer data using the methods of this class. Accelerometer data recording is not supported on all devices.

## See Also

### Checking the Availability of Sensor Recording

- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to record sensor data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
- [isAuthorizedForRecording](isauthorizedforrecording%28%29.md): Deprecated. Returns a Boolean value indicating whether the app is authorized to record sensor data.
