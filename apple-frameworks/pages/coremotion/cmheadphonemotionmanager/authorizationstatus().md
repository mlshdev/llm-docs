> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager/authorizationstatus()

# authorizationStatus() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Returns the authorization status for monitoring headphone motion.

## Declaration

```swift
class func authorizationStatus() -> CMAuthorizationStatus
```

## See Also

### Checking Availability

- [isDeviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the current device supports the headphone motion manager.
- [isDeviceMotionActive](isdevicemotionactive.md): A Boolean value that indicates whether the headphone motion manager is active.
- [isConnectionStatusActive](isconnectionstatusactive.md)

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Returns the authorization status for monitoring headphone motion.

## Declaration

```objectivec
+ (CMAuthorizationStatus) authorizationStatus;
```

## See Also

### Checking Availability

- [deviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the current device supports the headphone motion manager.
- [deviceMotionActive](isdevicemotionactive.md): A Boolean value that indicates whether the headphone motion manager is active.
- [connectionStatusActive](isconnectionstatusactive.md)
