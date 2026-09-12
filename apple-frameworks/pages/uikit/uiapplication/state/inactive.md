> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/state/inactive](https://developer.apple.com/documentation/uikit/uiapplication/state/inactive)

# UIApplication.State.inactive (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The app is running in the foreground but isn’t receiving events.

## Declaration

```swift
case inactive
```

<a id="Discussion"></a>

## Discussion

This might happen as a result of an interruption or because the app is transitioning to or from the background.

## See Also

### Constants

- [UIApplication.State.active](active.md): The app is running in the foreground and currently receiving events.
- [UIApplication.State.background](background.md): The app is running in the background.

# UIApplicationStateInactive (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The app is running in the foreground but isn’t receiving events.

## Declaration

```objectivec
UIApplicationStateInactive
```

<a id="Discussion"></a>

## Discussion

This might happen as a result of an interruption or because the app is transitioning to or from the background.

## See Also

### Constants

- [UIApplicationStateActive](active.md): The app is running in the foreground and currently receiving events.
- [UIApplicationStateBackground](background.md): The app is running in the background.
