> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundrefreshstatus/restricted](https://developer.apple.com/documentation/uikit/uibackgroundrefreshstatus/restricted)

# UIBackgroundRefreshStatus.restricted (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Background updates are unavailable and the user cannot enable them again.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

For example, this status can occur when parental controls are in effect for the current user.

## See Also

### Constants

- [UIBackgroundRefreshStatus.denied](denied.md): The user explicitly disabled background behavior for this app or for the whole system.
- [UIBackgroundRefreshStatus.available](available.md): Background updates are available for the app.

# UIBackgroundRefreshStatusRestricted (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Background updates are unavailable and the user cannot enable them again.

## Declaration

```objectivec
UIBackgroundRefreshStatusRestricted
```

<a id="Discussion"></a>

## Discussion

For example, this status can occur when parental controls are in effect for the current user.

## See Also

### Constants

- [UIBackgroundRefreshStatusDenied](denied.md): The user explicitly disabled background behavior for this app or for the whole system.
- [UIBackgroundRefreshStatusAvailable](available.md): Background updates are available for the app.
