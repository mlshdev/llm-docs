> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphonemotionmanager/isconnectionstatusactive](https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager/isconnectionstatusactive)

# isConnectionStatusActive (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

## Declaration

```swift
var isConnectionStatusActive: Bool { get }
```

## See Also

### Checking Availability

- [isDeviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the current device supports the headphone motion manager.
- [isDeviceMotionActive](isdevicemotionactive.md): A Boolean value that indicates whether the headphone motion manager is active.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone motion.

# connectionStatusActive (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isConnectionStatusActive) BOOL connectionStatusActive;
```

## See Also

### Checking Availability

- [deviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the current device supports the headphone motion manager.
- [deviceMotionActive](isdevicemotionactive.md): A Boolean value that indicates whether the headphone motion manager is active.
- [authorizationStatus](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone motion.
