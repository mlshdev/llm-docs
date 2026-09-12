> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltimeter/isrelativealtitudeavailable()](https://developer.apple.com/documentation/coremotion/cmaltimeter/isrelativealtitudeavailable())

# isRelativeAltitudeAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.

## Declaration

```swift
class func isRelativeAltitudeAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports relative altitude changes or [false](https://developer.apple.com/documentation/swift/false) if it does not.

<a id="Discussion"></a>

## Discussion

Use this method to determine if altitude updates are available before calling the [startRelativeAltitudeUpdates(to:withHandler:)](startrelativealtitudeupdates%28to_withhandler_%29.md) method.

## See Also

### Determining Altitude Availability

- [isAbsoluteAltitudeAvailable()](isabsolutealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve altimeter data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# isRelativeAltitudeAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.

## Declaration

```objectivec
+ (BOOL) isRelativeAltitudeAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports relative altitude changes or [false](https://developer.apple.com/documentation/swift/false) if it does not.

<a id="Discussion"></a>

## Discussion

Use this method to determine if altitude updates are available before calling the [startRelativeAltitudeUpdatesToQueue:withHandler:](startrelativealtitudeupdates%28to_withhandler_%29.md) method.

## See Also

### Determining Altitude Availability

- [isAbsoluteAltitudeAvailable](isabsolutealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.
- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve altimeter data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
