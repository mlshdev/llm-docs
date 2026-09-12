> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/sessioncompanionappinstalleddidchange(_:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/sessioncompanionappinstalleddidchange(_:))

# sessionCompanionAppInstalledDidChange(\_:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Indicates a change to the companion app’s installed state.

## Declaration

```swift
optional func sessionCompanionAppInstalledDidChange(_ session: WCSession)
```

## Parameters

- `session`: The session object with the changed companion app.

<a id="Discussion"></a>

## Discussion

The system calls this method on the watchOS app’s session delegate when the user installs or uninstalls the iOS companion app. This is only valid on independent watchOS apps.

## See Also

### Managing State Changes

- [sessionWatchStateDidChange(\_:)](sessionwatchstatedidchange%28__%29.md): Indicates a change to the counterpart’s information.
- [sessionReachabilityDidChange(\_:)](sessionreachabilitydidchange%28__%29.md): Indicates a change to the counterpart’s reachability status.

# sessionCompanionAppInstalledDidChange: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Indicates a change to the companion app’s installed state.

## Declaration

```objectivec
- (void) sessionCompanionAppInstalledDidChange:(WCSession *) session;
```

## Parameters

- `session`: The session object with the changed companion app.

<a id="Discussion"></a>

## Discussion

The system calls this method on the watchOS app’s session delegate when the user installs or uninstalls the iOS companion app. This is only valid on independent watchOS apps.

## See Also

### Managing State Changes

- [sessionWatchStateDidChange:](sessionwatchstatedidchange%28__%29.md): Indicates a change to the counterpart’s information.
- [sessionReachabilityDidChange:](sessionreachabilitydidchange%28__%29.md): Indicates a change to the counterpart’s reachability status.
