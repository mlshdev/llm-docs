> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/ispaired](https://developer.apple.com/documentation/watchconnectivity/wcsession/ispaired)

# isPaired (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+

A Boolean indicating whether the current iPhone has a paired Apple Watch.

## Declaration

```swift
var isPaired: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the iPhone is paired to an Apple Watch or [false](https://developer.apple.com/documentation/swift/false) when it is not.

The value in this property is valid only for a configured session that has been activated successfully. If the [activationState](activationstate.md) property is available, its value must be [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md). When the session becomes inactive or deactivated, you should ignore the value in this property.

## See Also

### Getting the Paired Device Information

- [iOSDeviceNeedsUnlockAfterRebootForReachability](iosdeviceneedsunlockafterrebootforreachability.md): A Boolean value indicating whether the paired iPhone must be in an unlocked state to be reachable.
- [isWatchAppInstalled](iswatchappinstalled.md): A Boolean value indicating whether the currently paired and active Apple Watch has installed the app.
- [isCompanionAppInstalled](iscompanionappinstalled.md): A Boolean value indicating whether the companion has installed the app.
- [isComplicationEnabled](iscomplicationenabled.md): A Boolean value indicating whether the Watch app’s complication is in use on the currently paired and active Apple Watch.
- [watchDirectoryURL](watchdirectoryurl.md): A directory for storing information specific to the currently paired and active Apple Watch.

# paired (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A Boolean indicating whether the current iPhone has a paired Apple Watch.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPaired) BOOL paired;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the iPhone is paired to an Apple Watch or [false](https://developer.apple.com/documentation/swift/false) when it is not.

The value in this property is valid only for a configured session that has been activated successfully. If the [activationState](activationstate.md) property is available, its value must be [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md). When the session becomes inactive or deactivated, you should ignore the value in this property.

## See Also

### Getting the Paired Device Information

- [iOSDeviceNeedsUnlockAfterRebootForReachability](iosdeviceneedsunlockafterrebootforreachability.md): A Boolean value indicating whether the paired iPhone must be in an unlocked state to be reachable.
- [watchAppInstalled](iswatchappinstalled.md): A Boolean value indicating whether the currently paired and active Apple Watch has installed the app.
- [companionAppInstalled](iscompanionappinstalled.md): A Boolean value indicating whether the companion has installed the app.
- [complicationEnabled](iscomplicationenabled.md): A Boolean value indicating whether the Watch app’s complication is in use on the currently paired and active Apple Watch.
- [watchDirectoryURL](watchdirectoryurl.md): A directory for storing information specific to the currently paired and active Apple Watch.
