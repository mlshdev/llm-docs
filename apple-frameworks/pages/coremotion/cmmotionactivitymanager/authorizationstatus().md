> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivitymanager/authorizationstatus()](https://developer.apple.com/documentation/coremotion/cmmotionactivitymanager/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · watchOS 4.0+

Returns a value indicating whether the app is authorized to retrieve stored motion data.

## Declaration

```swift
class func authorizationStatus() -> CMAuthorizationStatus
```

## See Also

### Determining Activity Availability

- [isActivityAvailable()](isactivityavailable%28%29.md): Returns a Boolean indicating whether motion data is available on the current device.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · watchOS 4.0+

Returns a value indicating whether the app is authorized to retrieve stored motion data.

## Declaration

```objectivec
+ (CMAuthorizationStatus) authorizationStatus;
```

## See Also

### Determining Activity Availability

- [isActivityAvailable](isactivityavailable%28%29.md): Returns a Boolean indicating whether motion data is available on the current device.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
