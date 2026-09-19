> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager/isdevicemotionavailable

# isDeviceMotionAvailable (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

A Boolean value that indicates whether the current device supports the headphone motion manager.

## Declaration

```swift
var isDeviceMotionAvailable: Bool { get }
```

## See Also

### Checking Availability

- [isDeviceMotionActive](isdevicemotionactive.md): A Boolean value that indicates whether the headphone motion manager is active.
- [isConnectionStatusActive](isconnectionstatusactive.md)
- [authorizationStatus()](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone motion.

# deviceMotionAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

A Boolean value that indicates whether the current device supports the headphone motion manager.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDeviceMotionAvailable) BOOL deviceMotionAvailable;
```

## See Also

### Checking Availability

- [deviceMotionActive](isdevicemotionactive.md): A Boolean value that indicates whether the headphone motion manager is active.
- [connectionStatusActive](isconnectionstatusactive.md)
- [authorizationStatus](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone motion.
