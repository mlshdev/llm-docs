> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/iscompanionappinstalled](https://developer.apple.com/documentation/watchconnectivity/wcsession/iscompanionappinstalled)

# isCompanionAppInstalled (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

A Boolean value indicating whether the companion has installed the app.

## Declaration

```swift
var isCompanionAppInstalled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use this property on independent watchOS apps to determine whether the paired iPhone has installed the app.

## See Also

### Getting the Paired Device Information

- [isPaired](ispaired.md): A Boolean indicating whether the current iPhone has a paired Apple Watch.
- [iOSDeviceNeedsUnlockAfterRebootForReachability](iosdeviceneedsunlockafterrebootforreachability.md): A Boolean value indicating whether the paired iPhone must be in an unlocked state to be reachable.
- [isWatchAppInstalled](iswatchappinstalled.md): A Boolean value indicating whether the currently paired and active Apple Watch has installed the app.
- [isComplicationEnabled](iscomplicationenabled.md): A Boolean value indicating whether the Watch app’s complication is in use on the currently paired and active Apple Watch.
- [watchDirectoryURL](watchdirectoryurl.md): A directory for storing information specific to the currently paired and active Apple Watch.

# companionAppInstalled (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

A Boolean value indicating whether the companion has installed the app.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCompanionAppInstalled) BOOL companionAppInstalled;
```

<a id="Discussion"></a>

## Discussion

Use this property on independent watchOS apps to determine whether the paired iPhone has installed the app.

## See Also

### Getting the Paired Device Information

- [paired](ispaired.md): A Boolean indicating whether the current iPhone has a paired Apple Watch.
- [iOSDeviceNeedsUnlockAfterRebootForReachability](iosdeviceneedsunlockafterrebootforreachability.md): A Boolean value indicating whether the paired iPhone must be in an unlocked state to be reachable.
- [watchAppInstalled](iswatchappinstalled.md): A Boolean value indicating whether the currently paired and active Apple Watch has installed the app.
- [complicationEnabled](iscomplicationenabled.md): A Boolean value indicating whether the Watch app’s complication is in use on the currently paired and active Apple Watch.
- [watchDirectoryURL](watchdirectoryurl.md): A directory for storing information specific to the currently paired and active Apple Watch.
