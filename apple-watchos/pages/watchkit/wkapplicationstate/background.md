> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationstate/background](https://developer.apple.com/documentation/watchkit/wkapplicationstate/background)

# WKApplicationState.background (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 3.0+

The Watch app is running in the background.

## Declaration

```swift
case background
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The system can wake suspended apps in the background. It can also launch apps that are not running in the background to perform background tasks.

## See Also

### Constants

- [WKApplicationState.active](active.md): The Watch app is running in the foreground and currently receiving events.
- [WKApplicationState.inactive](inactive.md): The Watch app is running in the foreground, but is not yet responding to actions from controls or gestures.

# WKApplicationStateBackground (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 3.0+

The Watch app is running in the background.

## Declaration

```objectivec
WKApplicationStateBackground
```

## Mentioned In

- [Handling Common State Transitions](../handling-common-state-transitions.md)
- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md)

<a id="Discussion"></a>

## Discussion

The system can wake suspended apps in the background. It can also launch apps that are not running in the background to perform background tasks.

## See Also

### Constants

- [WKApplicationStateActive](active.md): The Watch app is running in the foreground and currently receiving events.
- [WKApplicationStateInactive](inactive.md): The Watch app is running in the foreground, but is not yet responding to actions from controls or gestures.
