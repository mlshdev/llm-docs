> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltimeter/authorizationstatus()](https://developer.apple.com/documentation/coremotion/cmaltimeter/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · watchOS 4.0+

Returns a value indicating whether the app is authorized to retrieve altimeter data.

## Declaration

```swift
class func authorizationStatus() -> CMAuthorizationStatus
```

## See Also

### Determining Altitude Availability

- [isAbsoluteAltitudeAvailable()](isabsolutealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.
- [isRelativeAltitudeAvailable()](isrelativealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · watchOS 4.0+

Returns a value indicating whether the app is authorized to retrieve altimeter data.

## Declaration

```objectivec
+ (CMAuthorizationStatus) authorizationStatus;
```

## See Also

### Determining Altitude Availability

- [isAbsoluteAltitudeAvailable](isabsolutealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.
- [isRelativeAltitudeAvailable](isrelativealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
