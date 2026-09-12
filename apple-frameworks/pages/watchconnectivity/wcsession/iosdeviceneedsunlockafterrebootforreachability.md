> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/iosdeviceneedsunlockafterrebootforreachability](https://developer.apple.com/documentation/watchconnectivity/wcsession/iosdeviceneedsunlockafterrebootforreachability)

# iOSDeviceNeedsUnlockAfterRebootForReachability (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

A Boolean value indicating whether the paired iPhone must be in an unlocked state to be reachable.

## Declaration

```swift
var iOSDeviceNeedsUnlockAfterRebootForReachability: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the [isReachable](isreachable.md) property is [false](https://developer.apple.com/documentation/swift/false), use this property to determine if the iPhone is unreachable because it needs to be unlocked first. A recently rebooted iPhone remains unreachable until the user unlocks it for the first time. Until the user unlocks the iPhone, the value of this property is [true](https://developer.apple.com/documentation/swift/true). When the value is [true](https://developer.apple.com/documentation/swift/true), you might display an alert from your Watch app asking the user to unlock the iPhone to continue. After the user unlocks the iPhone, the value of the property changes to [false](https://developer.apple.com/documentation/swift/false).

The value in this property is valid only for a configured session that has been activated successfully. If the [activationState](activationstate.md) property is available, its value must be [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md). When the session becomes inactive or deactivated, you should ignore the value in this property.

## See Also

### Getting the Paired Device Information

- [isPaired](ispaired.md): A Boolean indicating whether the current iPhone has a paired Apple Watch.
- [isWatchAppInstalled](iswatchappinstalled.md): A Boolean value indicating whether the currently paired and active Apple Watch has installed the app.
- [isCompanionAppInstalled](iscompanionappinstalled.md): A Boolean value indicating whether the companion has installed the app.
- [isComplicationEnabled](iscomplicationenabled.md): A Boolean value indicating whether the Watch app’s complication is in use on the currently paired and active Apple Watch.
- [watchDirectoryURL](watchdirectoryurl.md): A directory for storing information specific to the currently paired and active Apple Watch.

# iOSDeviceNeedsUnlockAfterRebootForReachability (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

A Boolean value indicating whether the paired iPhone must be in an unlocked state to be reachable.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL iOSDeviceNeedsUnlockAfterRebootForReachability;
```

<a id="Discussion"></a>

## Discussion

When the [reachable](isreachable.md) property is [false](https://developer.apple.com/documentation/swift/false), use this property to determine if the iPhone is unreachable because it needs to be unlocked first. A recently rebooted iPhone remains unreachable until the user unlocks it for the first time. Until the user unlocks the iPhone, the value of this property is [true](https://developer.apple.com/documentation/swift/true). When the value is [true](https://developer.apple.com/documentation/swift/true), you might display an alert from your Watch app asking the user to unlock the iPhone to continue. After the user unlocks the iPhone, the value of the property changes to [false](https://developer.apple.com/documentation/swift/false).

The value in this property is valid only for a configured session that has been activated successfully. If the [activationState](activationstate.md) property is available, its value must be [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md). When the session becomes inactive or deactivated, you should ignore the value in this property.

## See Also

### Getting the Paired Device Information

- [paired](ispaired.md): A Boolean indicating whether the current iPhone has a paired Apple Watch.
- [watchAppInstalled](iswatchappinstalled.md): A Boolean value indicating whether the currently paired and active Apple Watch has installed the app.
- [companionAppInstalled](iscompanionappinstalled.md): A Boolean value indicating whether the companion has installed the app.
- [complicationEnabled](iscomplicationenabled.md): A Boolean value indicating whether the Watch app’s complication is in use on the currently paired and active Apple Watch.
- [watchDirectoryURL](watchdirectoryurl.md): A directory for storing information specific to the currently paired and active Apple Watch.
