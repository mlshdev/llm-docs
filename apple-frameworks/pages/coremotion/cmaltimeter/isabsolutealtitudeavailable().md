> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltimeter/isabsolutealtitudeavailable()](https://developer.apple.com/documentation/coremotion/cmaltimeter/isabsolutealtitudeavailable())

# isAbsoluteAltitudeAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.

## Declaration

```swift
class func isAbsoluteAltitudeAvailable() -> Bool
```

<a id="Discussion"></a>

## Discussion

Use this method to determine if altitude updates are available before calling the [startAbsoluteAltitudeUpdates(to:withHandler:)](startabsolutealtitudeupdates%28to_withhandler_%29.md) method.

> **Note**

>  Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## See Also

### Determining Altitude Availability

- [isRelativeAltitudeAvailable()](isrelativealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve altimeter data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# isAbsoluteAltitudeAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.

## Declaration

```objectivec
+ (BOOL) isAbsoluteAltitudeAvailable;
```

<a id="Discussion"></a>

## Discussion

Use this method to determine if altitude updates are available before calling the [startAbsoluteAltitudeUpdatesToQueue:withHandler:](startabsolutealtitudeupdates%28to_withhandler_%29.md) method.

> **Note**

>  Absolute altitude is only available on iPhone 12 and later and Apple Watch 6 or SE and later.

## See Also

### Determining Altitude Availability

- [isRelativeAltitudeAvailable](isrelativealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.
- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve altimeter data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
