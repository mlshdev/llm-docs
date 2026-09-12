> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphonemotionmanager/isdevicemotionactive](https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager/isdevicemotionactive)

# isDeviceMotionActive (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

A Boolean value that indicates whether the headphone motion manager is active.

## Declaration

```swift
var isDeviceMotionActive: Bool { get }
```

## See Also

### Checking Availability

- [isDeviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the current device supports the headphone motion manager.
- [isConnectionStatusActive](isconnectionstatusactive.md)
- [authorizationStatus()](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone motion.

# deviceMotionActive (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

A Boolean value that indicates whether the headphone motion manager is active.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDeviceMotionActive) BOOL deviceMotionActive;
```

## See Also

### Checking Availability

- [deviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the current device supports the headphone motion manager.
- [connectionStatusActive](isconnectionstatusactive.md)
- [authorizationStatus](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone motion.
