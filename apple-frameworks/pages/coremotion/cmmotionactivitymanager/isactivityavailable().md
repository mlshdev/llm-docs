> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivitymanager/isactivityavailable()](https://developer.apple.com/documentation/coremotion/cmmotionactivitymanager/isactivityavailable())

# isActivityAvailable() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Returns a Boolean indicating whether motion data is available on the current device.

## Declaration

```swift
class func isActivityAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if motion data is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Motion data is not available on all iOS devices. Use this method to determine if support is available on the current device.

## See Also

### Determining Activity Availability

- [authorizationStatus()](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve stored motion data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# isActivityAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Returns a Boolean indicating whether motion data is available on the current device.

## Declaration

```objectivec
+ (BOOL) isActivityAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if motion data is available or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Motion data is not available on all iOS devices. Use this method to determine if support is available on the current device.

## See Also

### Determining Activity Availability

- [authorizationStatus](authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve stored motion data.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
