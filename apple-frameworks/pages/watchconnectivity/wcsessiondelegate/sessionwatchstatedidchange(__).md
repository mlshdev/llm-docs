> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/sessionwatchstatedidchange(_:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/sessionwatchstatedidchange(_:))

# sessionWatchStateDidChange(\_:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Indicates a change to the counterpart’s information.

## Declaration

```swift
optional func sessionWatchStateDidChange(_ session: WCSession)
```

## Parameters

- `session`: The session object whose state changed.

<a id="Discussion"></a>

## Discussion

The session object calls this method when the value in the [isPaired](../wcsession/ispaired.md), [isWatchAppInstalled](../wcsession/iswatchappinstalled.md), [isComplicationEnabled](../wcsession/iscomplicationenabled.md), or [watchDirectoryURL](../wcsession/watchdirectoryurl.md) properties of the [WCSession](../wcsession.md) object changes. Use this state to update the state of your iOS app. For example, when the complication is disabled, make a note of that fact and do not send any more data updates for the complication.

## See Also

### Managing State Changes

- [sessionReachabilityDidChange(\_:)](sessionreachabilitydidchange%28__%29.md): Indicates a change to the counterpart’s reachability status.
- [sessionCompanionAppInstalledDidChange(\_:)](sessioncompanionappinstalleddidchange%28__%29.md): Indicates a change to the companion app’s installed state.

# sessionWatchStateDidChange: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Indicates a change to the counterpart’s information.

## Declaration

```objectivec
- (void) sessionWatchStateDidChange:(WCSession *) session;
```

## Parameters

- `session`: The session object whose state changed.

<a id="Discussion"></a>

## Discussion

The session object calls this method when the value in the [paired](../wcsession/ispaired.md), [watchAppInstalled](../wcsession/iswatchappinstalled.md), [complicationEnabled](../wcsession/iscomplicationenabled.md), or [watchDirectoryURL](../wcsession/watchdirectoryurl.md) properties of the [WCSession](../wcsession.md) object changes. Use this state to update the state of your iOS app. For example, when the complication is disabled, make a note of that fact and do not send any more data updates for the complication.

## See Also

### Managing State Changes

- [sessionReachabilityDidChange:](sessionreachabilitydidchange%28__%29.md): Indicates a change to the counterpart’s reachability status.
- [sessionCompanionAppInstalledDidChange:](sessioncompanionappinstalleddidchange%28__%29.md): Indicates a change to the companion app’s installed state.
