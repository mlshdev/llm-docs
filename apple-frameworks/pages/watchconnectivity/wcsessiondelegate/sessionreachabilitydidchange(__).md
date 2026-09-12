> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/sessionreachabilitydidchange(_:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/sessionreachabilitydidchange(_:))

# sessionReachabilityDidChange(\_:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates a change to the counterpart’s reachability status.

## Declaration

```swift
optional func sessionReachabilityDidChange(_ session: WCSession)
```

## Parameters

- `session`: The session object of the current process. Use the [isReachable](../wcsession/isreachable.md) property of this object to determine the reachability of the counterpart session.

<a id="Discussion"></a>

## Discussion

A session is reachable when the iOS app or WatchKit extension to which it belongs is active and running. This method is called to let the current process know that its counterpart session’s reachability changed. Use that information to make decisions about how you want to send information to the counterpart. For example, when the counterpart is reachable, you might send messages immediately rather than post them as an update.

## See Also

### Managing State Changes

- [sessionWatchStateDidChange(\_:)](sessionwatchstatedidchange%28__%29.md): Indicates a change to the counterpart’s information.
- [sessionCompanionAppInstalledDidChange(\_:)](sessioncompanionappinstalleddidchange%28__%29.md): Indicates a change to the companion app’s installed state.

# sessionReachabilityDidChange: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates a change to the counterpart’s reachability status.

## Declaration

```objectivec
- (void) sessionReachabilityDidChange:(WCSession *) session;
```

## Parameters

- `session`: The session object of the current process. Use the [reachable](../wcsession/isreachable.md) property of this object to determine the reachability of the counterpart session.

<a id="Discussion"></a>

## Discussion

A session is reachable when the iOS app or WatchKit extension to which it belongs is active and running. This method is called to let the current process know that its counterpart session’s reachability changed. Use that information to make decisions about how you want to send information to the counterpart. For example, when the counterpart is reachable, you might send messages immediately rather than post them as an update.

## See Also

### Managing State Changes

- [sessionWatchStateDidChange:](sessionwatchstatedidchange%28__%29.md): Indicates a change to the counterpart’s information.
- [sessionCompanionAppInstalledDidChange:](sessioncompanionappinstalleddidchange%28__%29.md): Indicates a change to the companion app’s installed state.
